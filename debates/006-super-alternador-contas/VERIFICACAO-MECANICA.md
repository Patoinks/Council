# Mechanical verification — Council 006

- Date: 2026-10-18 Europe/Lisbon.
- Closed review commit: `bbe4dcbd89e95f71fce1973e927e29ce53ae44f6`.
- All proposal/review start and end markers checked.
- Every review’s committed Git blob equals its archived file bytes.
- All 22 blocking/material IDs occur exactly once in the short index; severity is copied from the original, without disposition.
- Every indexed path and line interval exists and is nonempty; passage digests are recorded below.
- Originals are not rewritten. All complete originals are supplied separately, and embedded in full in the synthesis packet.
- Frozen review packet SHA-256: `52870710d15c7f6b80ff0643f31839365f0f9c01ae311d6df92011be7ec8aa60`.
- Current synthesis governance: Laws 1–5; Law 5 local commit `97ebe07`.
- No push, benchmark, tournament/training job, model execution, account switch or origin-checkout change was performed.

Capture limits: Normal’s preserved pre-existing plain-text archive matches the rendered original after whitespace normalization (37,371 non-whitespace characters, FNV-1a-64 `90f4befb2bcdc47d`). Sonnet’s plain-text DOM capture matches byte-for-byte to the captured rendered text (15,400 characters, 15,528 UTF-8 bytes, FNV-1a-64 `844b67720489c81f`). This establishes content transport, not hidden provider Markdown identity. The wrong Normal/Sonnet-proposal duplicate and incomplete Claude Doc are excluded.

The historical proposal commit normalized Sonnet’s CRLF original to LF. The untouched original still matches its recorded receipt SHA-256 `16ba89d0083b2b41f39ddffda6639104db70f4cb336aba6625627b01ecabb5d5`. The delivery commit restores these exact original bytes to Git; scoped `.gitattributes` rules disable text normalization for original contributions in both debates. No proposal wording or line numbering changed.

## Original file hashes

| File | Bytes | SHA-256 |
|---|---:|---|
| `proposals/astra.md` | 20791 | `e3d98a783141a6a0f813c10cf8f19a32791330d76fb45cb65a846d9ac43dba81` |
| `proposals/normal.md` | 37548 | `b90b1fc4d890942fea5927e41388c8f3c05962265a297d91b312e24a4c8e8508` |
| `proposals/sol.md` | 23488 | `347697257d73c9dde0a9173ba45b6fa9b770fa627781821ee95452362fa24d96` |
| `proposals/sonnet.md` | 17538 | `16ba89d0083b2b41f39ddffda6639104db70f4cb336aba6625627b01ecabb5d5` |
| `reviews/astra.md` | 29627 | `0e03bdf71a50274928b9b7d1e45823aa70d5ceb387dd7a3ad3dcb4776a15cc14` |
| `reviews/normal.md` | 43226 | `ca9e720704c66250c9a9dbb3afc3721e2e96e5aea57e21c09bd9cae398dfb20f` |
| `reviews/sol.md` | 30858 | `8897e50c10b08a080c3396d659bfee773c064e84b755809c5b028e890ba2a77a` |
| `reviews/sonnet.txt` | 15528 | `02e4c4116b88cca40ff7e1fc4cc852923cfd877371fd0e03e7c7bb93e782f495` |

## Indexed passage digests

The digest is SHA-256 of the indexed lines joined with LF, without a trailing LF. This table is for mechanical checking; Opus need not read it.

| Path | Lines | SHA-256 |
|---|---|---|
| `R/astra.md` | 68–68 | `f9f53eb3e89e0de8a40058f8baa4a726f2c419e2abc3bc64c0e3d004245dceea` |
| `P/astra.md` | 138–138 | `065ee7f576c0c35fdd09d444bc51015b70232dc6711cc57ddd6a15d767dcbdd3` |
| `P/normal.md` | 256–271 | `1887a8383b0eca66b4069a2b946c353e95a2117790a0365e2b60a51a151f16b9` |
| `R/astra.md` | 95–95 | `7e454d40dc5d55e3c874bc98e9186d2b4a70508c7963764034ea81d807543f9f` |
| `P/normal.md` | 139–165 | `5cce2b54db83e2c400bab9fe7d7eb6eab7cea375f8553a08ad930f924d2fb1be` |
| `P/astra.md` | 102–128 | `0e7a249fd1feaf6d1cd67f9ce4a8391dbdd8f8ddea021b5d0adb127a4ec7c8c6` |
| `P/sol.md` | 94–111 | `6a97f3f173f07d5f9927786420b83c9a11e8655701b0a8cad6d5e2181aea030b` |
| `R/astra.md` | 155–155 | `89f3013cb3db5dc8320b1153e262eb93489713814d359abc8ae1900f73731b95` |
| `P/sonnet.md` | 48–48 | `ae525c031440392665f8c0b70b0b24ddb80da2be837218c623537a4988131032` |
| `P/sonnet.md` | 160–160 | `56416900408719f8d1c8fbe984c7dfb7be6a38c1a1b4db117175874a1252816e` |
| `P/sonnet.md` | 189–189 | `24589275fca23f2144cb02dd554c06a1b8bf13d7103e0c05fca0b15c12545883` |
| `R/astra.md` | 156–156 | `0a86b79d37b842419c0b1c97f21ee42a5688d399a0fb1907fd1b1b55909458f6` |
| `P/sonnet.md` | 66–66 | `dae9d2c7898075a9b9f37339703c8d4c36c1741cdaee5cf8c44e0155a2dd826b` |
| `P/sonnet.md` | 90–96 | `daeaecde2205d2d0b043a3a653cf74d7a1cdfe8f24330f1fd928d36f09e378ac` |
| `R/astra.md` | 157–157 | `32702d849bf827741ac5cdaf31b13139ec37d26d2ef9aea8387dfd1bb6f1dc94` |
| `P/sonnet.md` | 70–83 | `b39b5cf21a6592c07c9b701fa12e8d02d138546b6d9a58af18c653c7baa96555` |
| `R/astra.md` | 158–158 | `81dcfc39422944c67fa9d61a625e11176f910b2412ca02c88ba1369a995d37e7` |
| `P/sonnet.md` | 29–29 | `088ad184e853b596448482a082b527b7474e4c92c3e3e8c4817aeea17c5fb115` |
| `P/sonnet.md` | 105–105 | `a777de8bc468ffa50913f7691ac19df14dbdd0f4d31eb3d592883301155d1182` |
| `P/sonnet.md` | 113–113 | `3fdbfc1011d83b1414eb871394d7d494a1d6a9875999aae2ad2e70fb9e9be657` |
| `R/astra.md` | 159–159 | `383a460a346e701fef5cc10950343e8715d788367d914823a7ab506e6c3c580e` |
| `P/sonnet.md` | 51–51 | `52e953d0e9bae6b518ed7615b68dff7e27d6fc40744d8847c83d95f877f1b8d7` |
| `P/sonnet.md` | 179–179 | `b5e3f162d95721008622c22b6347efb39eead762c29dd41b656f7729a53ac54f` |
| `CONTEXTO.md` | 35–41 | `7671c2f4fb4baacdcb8af6e3c8dbaec5406a849bf623901814c6ffe5434a09bf` |
| `R/astra.md` | 160–160 | `69ec8ee944253f0415beaa486eb54f1753962ccb46490cbcc8bcdc01046222a5` |
| `P/sonnet.md` | 41–41 | `40b61ad5a6e82829113269dcd75c0c8bb092b2064d37b65ff8c38956695e3dfa` |
| `P/sonnet.md` | 122–122 | `4822320f889f0301d54e1d297e667082fbafcd108e037fa18cbeb38a5ffa131a` |
| `P/sonnet.md` | 132–132 | `1eeb0efe5eb29eefe61d051ea60fe52be41fcb3436103dca2172e3043d69f18d` |
| `R/normal.md` | 232–232 | `5872da529f92b91fb0d579632e02954ad3a833d0057f7961c419aceaaf1a72d1` |
| `R/normal.md` | 233–233 | `2d9da1f88bf17fb30f39bed9a3e1549d32c2a04617e1c35e391c5c15a04e7f84` |
| `P/sonnet.md` | 90–90 | `11ede4199041d7b26c224e1184c6bad4fc6d5c512e36508f33ae0441ba031faa` |
| `P/sonnet.md` | 96–96 | `b5e3e27e05f137dfa1e7c09138289ea6239079c643271fd6463e02f55a65c482` |
| `R/normal.md` | 234–234 | `0973d29255b6bc7a69e9ad0a3c178befaa814f987a1bde9945f7627dbd0a1834` |
| `R/normal.md` | 235–235 | `6710c946e5401332cde6caa7019a19911d1faa5bf66bc157412d06ee080297cc` |
| `R/sol.md` | 110–110 | `8d5bf4293b92581bcb85a9b502a3bd4bd991b8a15b981cbd9888ae23a8797096` |
| `P/normal.md` | 167–178 | `f5d3f358cbfbc26f87a594bb60673e2a55edd4fdcb479ec4b83b853888fff210` |
| `P/normal.md` | 217–217 | `0cb4892718bddbc6470c1c514943e0ae4f732f3e7bc6f47d823bd7c8a7b402ff` |
| `R/sol.md` | 140–140 | `39351b2c863244b9c923aee49e9e64f0691e49a8a515cc078b27844c7c7a333b` |
| `P/sol.md` | 159–159 | `55944ad49094bf18a7a626531f50de0b4124f5b7bf33ff401580bd71ae0c6168` |
| `P/sol.md` | 168–168 | `a36428e18948cf5e7d5cef7c9c1847e605a6fd2c21f83f927438c1fe0df78a15` |
| `R/sol.md` | 169–169 | `efb2d7778a655914764ef255876b0af5a3e763b0e396cb4db6b8acae168af676` |
| `R/sol.md` | 170–170 | `266b0faa8c5e15b212e1c0a7157d6db5fd07acc3cd2e4acec97127346577da1b` |
| `R/sol.md` | 171–171 | `684304545880f83c0c9556c0bc04e444c0427c4775ce76a2ef3a8459dfbe858a` |
| `R/sol.md` | 172–172 | `58307b425e47b3e25a13a320abc6cee4096dab36923908502f539f8fbb7370d9` |
| `R/sonnet.txt` | 146–146 | `1c413b43c250fae34175236c87ea5bc9c1691b58b41cdf1b8967e6cc95ed3596` |
| `P/astra.md` | 65–84 | `dcd0687f9ef6343c42d190028662020fffe94c2b721ff2452a5c3b56da03962b` |
| `P/sol.md` | 63–112 | `c79d589755ee593dfa253e15547fca491b1272b4d543d978979c4cc9c032f0de` |
| `P/sonnet.md` | 68–83 | `a846ff5808cfca982966bd71d261b7c6d2d6aa1e2a7fb2108b05f760b5f18e63` |
| `R/sonnet.txt` | 147–147 | `42f34cfa544bb27a993a486f74fa3721c166d365bb48be6a9297d512de58d41f` |
| `P/astra.md` | 88–100 | `e2f960e4a57b7a3975096b628003f02a8e001e4a85b53c68f2bf3b9aa334c163` |
| `P/normal.md` | 212–212 | `984aa91e6ad181b8ca31658c33da34916cb6c5c6b350363b5bbdc0cfeab9bcda` |
| `P/sol.md` | 130–130 | `823344faea5b5418c310c7c1cd266008c8e30484bd39a97ebec4d06a24357b85` |
| `P/sonnet.md` | 94–94 | `5d1dd100203113370bd1215f13fa391dc51985159a266dddc56062a076f0a79f` |
| `R/sonnet.txt` | 148–148 | `ebb51826fb01aae48303a93bb0487d4467bf4006410e6dc0ab14b4a50b0ae4f5` |
| `P/astra.md` | 139–139 | `861dbfa58cd6370f3b13143227197fac9d5d89d974d0986634046d42a777a625` |
| `P/normal.md` | 273–287 | `cc8bf68ee0ba0c303a5d9d143e0b471551082b0bdafcda087a4d1cb31528fd31` |
| `P/sol.md` | 161–161 | `9fb0f6b71e0d74db10ecc0a87ec31b6b289b1644c3b0a744ab0b66c8a6344e1a` |
| `P/sonnet.md` | 114–114 | `1699108ddc9073ce4d4454eb4a55f89d564c77b71362d932fe86b461c933528a` |
| `R/sonnet.txt` | 149–149 | `8b83b9f56b02b4229d3cfbad26b13145cdd87837589c79ac6ccdd6667d93f168` |
| `P/sol.md` | 166–166 | `6e241190b287f4100fa39d2aa575b873b53d88de9d7ce63b2863bd6cc79015e2` |
| `P/astra.md` | 65–100 | `eee1d42d84be82ed1f995676a7d132b621b4c9af4ed05b30a5f861120e944586` |
| `P/normal.md` | 188–202 | `17b7430335012796bf46a2ed034a4935555144aec46c0a6c2d7de986f84db7f8` |
| `P/normal.md` | 256–299 | `2478393a83c37e42781bb20a4092f50da9b424f7f82acd92147e398044495ef6` |
