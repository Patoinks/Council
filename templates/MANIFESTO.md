# Manifest — <debate name>

- **Debate:** <NNN-name>
- **Phase and round:** <Phase / round.>
- **Collection state:** <Open / closed.>
- **Context version:** <Version.>
- **Packet file:** <Path.>
- **Commit of the closed set:** <Commit or not closed.>
- **Deadline, if Martim set one:** <Martim's stated deadline or none set.>

## Inventory

| Participant / role | File | Reference commit | Git blob | Included? |
| --- | --- | --- | --- | --- |
| <ID or role.> | <Path.> | <Commit or not yet committed.> | <Blob or not yet committed.> | <Yes / no, with reason.> |

## Packet

- **Sections in order:** <Ordered list of every section.>
- **End marker:** <Exact marker for this packet version.>
- **Transport mode:** <Paste / attachment / labelled parts.>
- **Additions to the fixed prompt text:** <Exact additions or none.>

The packet SHA-256 is in PACOTES.sha256, never in this file, because this file travels inside the packet.

## Participants and receipts

One row per participant per phase. Include the phase and round in the participant cell.

| Participant | Provider | Channel | Visible model | New conversation | Marker confirmed | Missing sections | Closing marker | Capture method and normalization | Memory / exposure declared | Treatment |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| <ID; phase / round.> | <Provider.> | <Interface or CLI.> | <Exact label or not visible.> | <Yes / no.> | <Exact marker; yes / no.> | <List or none.> | <END-OF-CONTRIBUTION present / missing.> | <Method and exact normalization, or none.> | <Declaration or missing.> | <received / absent / late / incomplete> |

## Roles

- **King:** Opus; synthesizes and issues the decree.
- **Right Hand:** Codex 6.1 Sol xHigh; operator and implementer.
- **Right Hand also participates:** <Yes / no; participant ID if yes.>

## Limitations

<Partial reads, incomplete captures, CLI exposure notes, absences and late answers. Distinguish reduced accidental exposure from enforced read restrictions. Write «None recorded» if there are none.>
