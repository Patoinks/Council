# Test request 001 — Laboratory smoke test (gemini)

- **Requested by:** the King, to verify the Laboratory runner
- **Debate:** none
- **Tester assigned:** gemini
- **Working copy:** none

## Question

Can the gemini tester run a command and report the result in the Laboratory format?

## Commands

```
python -c "print(6*7)"
python --version
```

## Expected observation

The first command prints `42`; the second prints a Python version.

## Verdict rule

- **PASS:** the first command printed exactly `42`.
- **FAIL:** it printed anything else.
- **INCONCLUSIVE:** the command could not be run.
