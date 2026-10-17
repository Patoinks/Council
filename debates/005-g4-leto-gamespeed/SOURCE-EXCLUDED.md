# Source artifacts recorded by hash only

These artifacts were present in the source checkouts when the snapshot was reviewed. Their payloads are excluded from every Council phase packet. The source path and SHA-256 permit later identity checking; no model weights, full derived book or redundant raw results are supplied to advisers.

| Source group | Source path | Size | SHA-256 | Reason for exclusion |
| --- | --- | ---: | --- | --- |
| leto-engine | `public/tonkai/leto-book-v2.json` | 186.7 KB | `718dc8c47ecc5dc6e90d7105404781824cca902cb284177f348186984c304391` | Generated opening-book data; derivation and summary report are included |
| leto-engine | `leto-work/parity-leto.json` | 510.0 KB | `dac3fd7bab0ffbc98a50d685a8d73e8c4721980e39939d86eefdde1a440da1d7` | Large raw parity dump; concise result report and test code are included |
| live-site | `public/tonkai/tonkai.json` | 2,528.8 KB | `668da8f07334ef3519ea73ee9032c04c1e863c6685de489c0fbf7c09ff7058c0` | Model weight payload; local manifest/hash remains in the included notes |

The Leto checkpoint/model bytes themselves are also excluded; their declared shared G4/Leto weight hash is in `SNAPSHOT-NOTES.md`.
