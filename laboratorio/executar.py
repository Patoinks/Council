"""Council Laboratory runner: dispatches pending test requests to the tester AI.

Usage (from the Council checkout):
    python laboratorio/executar.py                 # every pending request
    python laboratorio/executar.py 001-exemplo     # one request
    python laboratorio/executar.py --no-commit ... # do not commit the result

A request is pending when laboratorio/resultados/<same name>.md does not exist.
The tester is Gemini 3.8 Flash through agy. It runs in a fresh working copy
outside the Council and outside the source repository. Law No. 4: if it fails
or returns no VERDICT line, the result is recorded as INCONCLUSIVE.
"""
import argparse
import datetime as dt
import json
import pathlib
import re
import shutil
import subprocess
import sys

COUNCIL = pathlib.Path(__file__).resolve().parents[1]
LAB = COUNCIL / "laboratorio"
REQUESTS, RESULTS = LAB / "pedidos", LAB / "resultados"
WORK_ROOT = pathlib.Path.home() / "Documents" / "ChatGPT" / "council-lab"
AGY = r"C:\Users\Martim\AppData\Local\agy\bin\agy.exe"
MODEL = "gemini-3.8-flash-high"
TIMEOUT = 1800


def field(text, name):
    match = re.search(r"^- \*\*" + re.escape(name) + r":\*\*\s*(.+)$", text, re.M)
    return match.group(1).strip() if match else ""


def prompt(request_name):
    template = (LAB / "RESULTADO.md").read_text(encoding="utf-8")
    return (
        f"You are the tester for Council Laboratory request {request_name}. The request is in "
        "PEDIDO.md in your working directory, which is a disposable copy. Read it, run exactly "
        "the commands in its Commands section from this directory, and apply its Verdict rule. "
        "Do not change the commands, do not push, do not leave this directory, and never output "
        "credentials, tokens or .env contents. Your final answer is the complete result file, in "
        "this format, with the VERDICT line as the very first line and the unedited command "
        "output under Raw output:\n\n" + template
    )


def working_copy(request_text, target):
    spec = field(request_text, "Working copy")
    if target.exists():
        shutil.rmtree(target)
    if not spec or spec.lower() == "none":
        target.mkdir(parents=True)
        return "empty directory"
    repo, _, commit = (part.strip() for part in spec.partition("@"))
    subprocess.run(["git", "clone", "--quiet", repo, str(target)], check=True)
    if commit:
        subprocess.run(["git", "-C", str(target), "checkout", "--quiet", "--detach", commit], check=True)
    return f"{repo} @ {commit or 'HEAD'}"


def run_gemini(workdir, request_name, log):
    message = json.dumps({"event": "user", "message": {"content": prompt(request_name)}})
    command = [AGY, "--model", MODEL, "--dangerously-skip-permissions",
               "--input-format", "stream-json", "--output-format", "stream-json", "-p="]
    proc = subprocess.run(command, cwd=workdir, input=message + "\n", capture_output=True, text=True,
                          encoding="utf-8", errors="replace", timeout=TIMEOUT)
    log.write_text(proc.stdout + "\n--- stderr ---\n" + proc.stderr, encoding="utf-8")
    answer = ""
    for line in proc.stdout.splitlines():
        try:
            event = json.loads(line)
        except ValueError:
            continue
        if event.get("event") == "result":
            result = event.get("result") or {}
            answer = result.get("response", "") if result.get("status") == "SUCCESS" else ""
    return proc.returncode, answer


def handle(request, commit):
    name = request.stem
    text = request.read_text(encoding="utf-8")
    stamp = dt.datetime.now().strftime("%Y%m%d-%H%M%S")
    workdir = WORK_ROOT / f"{name}-{stamp}"
    source = working_copy(text, workdir)
    shutil.copy(request, workdir / "PEDIDO.md")
    log = WORK_ROOT / f"{name}-{stamp}.events.log"
    started = dt.datetime.now()
    try:
        code, answer = run_gemini(workdir, name, log)
    except (subprocess.TimeoutExpired, OSError) as error:
        code, answer = -1, ""
        log.write_text(repr(error), encoding="utf-8")
    if not answer.lstrip().startswith("VERDICT:"):
        answer = "VERDICT: INCONCLUSIVE — the tester failed or returned no VERDICT line (Law No. 4)\n"
    record = ("\n\n## Runner record\n\n"
              f"- **Request:** `laboratorio/pedidos/{request.name}`\n"
              f"- **Tester:** Gemini 3.8 Flash (`{MODEL}`, agy CLI)\n"
              f"- **Started:** {started:%Y-%m-%d %H:%M} Europe/Lisbon; exit {code}\n"
              f"- **Working copy:** `{workdir}` from {source}\n"
              f"- **Event log:** `{log}`\n")
    result = RESULTS / request.name
    result.write_text(answer.strip() + record, encoding="utf-8")
    verdict = answer.strip().splitlines()[0]
    print(f"{name}: {verdict}")
    if commit:
        subprocess.run(["git", "-C", str(COUNCIL), "add", str(request), str(result)], check=True)
        subprocess.run(["git", "-C", str(COUNCIL), "commit", "-q", "-m",
                        f"Laboratory {name}: {verdict[:60]}"], check=True)


def main():
    parser = argparse.ArgumentParser()
    parser.add_argument("names", nargs="*")
    parser.add_argument("--no-commit", action="store_true")
    args = parser.parse_args()
    WORK_ROOT.mkdir(parents=True, exist_ok=True)
    requests = [REQUESTS / f"{n.removesuffix('.md')}.md" for n in args.names] or sorted(REQUESTS.glob("*.md"))
    pending = [r for r in requests if r.exists() and not (RESULTS / r.name).exists()]
    if not pending:
        print("No pending requests.")
    for request in pending:
        handle(request, not args.no_commit)
    return 0


if __name__ == "__main__":
    sys.exit(main())
