# Operator observations — Council 004

The operator observed the files and hardware below without running training, a benchmark, a build or tests. These notes provide provenance and limits; they do not recommend an optimization.

## Source and call-path inventory

`train_cognitive.py` imports CognitiveConfig, CognitivePool, CognitiveTrainer and UCI opponent handling. CognitiveTrainer inherits SurvivalTrainer. CognitivePool uses spawn-based ProcessPoolExecutor workers and carries weight/knowledge snapshots. The included source files show the precise implementation and optional paths. Their presence is evidence that code exists, not proof that the intended campaign enables it or that it improves current throughput.

The captured training entry point and scripts expose flags for compiled learning, compact sequences, incremental encoding, batched search, an inference broker and CUDA graphs. Historical scripts select different options and opponent mixtures. No one script is designated the current acceptance configuration. The raw files, rather than an operator description of their behavior, are the common technical evidence.

The source snapshot includes locally changed files and historical reports. It does not include the entire repository, weights, optimizer state, datasets, every imported dependency or the complete tests. Participants must identify any additional code or runtime information their decisive claim needs. Do not claim a complete audit of material not supplied.

## Hardware observation

- Win32_Processor reported AMD Ryzen 5 7500F, 6 cores and 12 logical processors.
- nvidia-smi reported NVIDIA GeForce RTX 5060 Ti, driver 617.14 and 16,311 MiB memory.
- These are inventory observations on 2026-10-17, not utilization profiles or demonstrated bottlenecks.
- requirements.txt records dependency ranges, not an independently verified installed-runtime version set.

## Existing evidence and its limits

PERFORMANCE.md, docs/cpp_acceleration.md and the included perf_results JSON files retain their original wording and dated measurements. The snapshot includes execution-path tracker reports, native-loop comparisons and transport/replay equivalence records. They may describe different code, campaigns, game counts, opponents and devices. Do not multiply their gains or promote their numbers into a current baseline.

The operator did not load checkpoints, run profiling, inspect every Python process or establish a current training campaign. A narrow process-name/script check did not identify a train_cognitive/train_survival invocation; that does not prove that all training or related services are stopped. U1 in the context remains unresolved.

## Advisory transport readiness

The installed agy model catalogue listed gemini-3.8-flash-high/medium/low. High was selected as the explicit Gemini configuration and is disclosed rather than inferred from an unqualified model name.

OpenCode's model catalogue listed opencode/glm-5.3-flash-free, opencode/deepseek-v4.1-flash-free and opencode/mimo-v2.6-flash-free. Each selected configuration returned READY-004 in a separate benign transport check. Gemini returned READY-004 through agy's documented stream-input user event. These probes carried no chess context or peer contribution. They establish a successful model request through the named routes, not model-internal attestation or capacity to ingest this full packet.

OpenCode v2.0.32's effective council primary profile was inspected from the external probe project. It denies tools except phase-packet reads and primary web retrieval/search. agy plan/sandbox behavior and actual tool use are reported as configured/observed, without claiming equivalent OS-level isolation. Provider/global instruction and memory exposure must be declared by every contribution.

## Primary transport documentation consulted by the operator

- https://antigravity.google/docs/cli/headless/ — user-event stdin and terminal result envelopes.
- https://dev.opencode.ai/v2/docs/models/ — explicit provider/model selection and project-specific catalogue.
- https://dev.opencode.ai/v2/docs/agents/ — custom primary profile and effective rules.
- https://dev.opencode.ai/v2/docs/permissions/ — ordered tool-action restrictions.

These transport sources do not establish a training-speed claim. New technical claims about PyTorch, CUDA, multiprocessing or native computation require their own precise evidence or an explicit hypothesis and check.
