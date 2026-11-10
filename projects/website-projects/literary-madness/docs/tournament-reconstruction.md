# Literary Madness Tournament Reconstruction

**Reconstruction date:** July 5, 2026  
**Primary source:** Root reference-site files  
**Confidence:** High for contestants and results; uncertain for tournament year

## Reconstruction Note

This document reconstructs the complete tournament shown in the root version of the inherited Literary Madness site. The visible bracket establishes all 16 contestants, opening matchups, advancement results, league champions, and overall champion.

The archive suggests this is the later tournament associated with the 2019 project, but the files inside the `2019` folders duplicate the 2017 HTML. For that reason, this reconstruction is identified as the **later/root tournament** until its year can be verified independently.

No vote counts survive in the reference files. Winners are inferred directly from the advancement lines and names displayed in `images/bracket.jpg`.

## Tournament Result

**Heroes League champion:** Matilda  
**Villains League champion:** Dolores Umbridge  
**Literary Madness champion:** Matilda

## Complete Bracket

### Heroes League

#### Opening round

| Matchup | Contestant 1 | Contestant 2 | Winner |
|---|---|---|---|
| H1 | Lisbeth Salander | Matilda | **Matilda** |
| H2 | Arya Stark | Captain Marvel | **Arya Stark** |
| H3 | Gandalf | Sherlock Holmes | **Gandalf** |
| H4 | Robin Hood | Black Panther | **Black Panther** |

#### League semifinals

| Matchup | Contestant 1 | Contestant 2 | Winner |
|---|---|---|---|
| H5 | Matilda | Arya Stark | **Matilda** |
| H6 | Gandalf | Black Panther | **Black Panther** |

#### Heroes League final

| Matchup | Contestant 1 | Contestant 2 | Winner |
|---|---|---|---|
| H7 | Matilda | Black Panther | **Matilda** |

### Villains League

#### Opening round

| Matchup | Contestant 1 | Contestant 2 | Winner |
|---|---|---|---|
| V1 | Hannibal Lecter | Count Olaf | **Count Olaf** |
| V2 | Dolores Umbridge | He Who Shall Not Be Named | **Dolores Umbridge** |
| V3 | Darth Vader | Mrs. Hannigan | **Darth Vader** |
| V4 | Thanos | Maleficent | **Maleficent** |

#### League semifinals

| Matchup | Contestant 1 | Contestant 2 | Winner |
|---|---|---|---|
| V5 | Count Olaf | Dolores Umbridge | **Dolores Umbridge** |
| V6 | Darth Vader | Maleficent | **Maleficent** |

#### Villains League final

| Matchup | Contestant 1 | Contestant 2 | Winner |
|---|---|---|---|
| V7 | Dolores Umbridge | Maleficent | **Dolores Umbridge** |

### Championship

| Matchup | Heroes champion | Villains champion | Winner |
|---|---|---|---|
| C1 | Matilda | Dolores Umbridge | **Matilda** |

## Contestant Source Data

Source works below are supplied as reconstruction context. They are not written in the archived HTML and should be verified before publication.

| Contestant | League | Associated source | Archived Booksite group | Notes |
|---|---|---|---|---|
| Lisbeth Salander | Heroes | *Millennium* series | `EB850` | Name is visible in the bracket. |
| Matilda | Heroes | *Matilda* | `EB849` | The archived winner artwork identifies her as champion. |
| Arya Stark | Heroes | *A Song of Ice and Fire* | `EB857` | Source attribution requires verification for final copy. |
| Captain Marvel | Heroes | Marvel Comics | `EB858` | The bracket does not specify a particular incarnation. |
| Gandalf | Heroes | *The Hobbit* and *The Lord of the Rings* | `EB848` | Source attribution requires verification for final copy. |
| Sherlock Holmes | Heroes | Sherlock Holmes stories and novels | `EB851` | Source attribution requires verification for final copy. |
| Robin Hood | Heroes | Robin Hood legends | `EB859` | No single definitive source work. |
| Black Panther | Heroes | Marvel Comics | `EB847` | Source attribution requires verification for final copy. |
| Hannibal Lecter | Villains | Hannibal Lecter novels | `EB852` | Bracket artwork misspells the surname as “Lector.” |
| Count Olaf | Villains | *A Series of Unfortunate Events* | `EB853` | Source attribution requires verification for final copy. |
| Dolores Umbridge | Villains | *Harry Potter* series | `EB860` | Villains League champion. |
| He Who Shall Not Be Named | Villains | *Harry Potter* series | `EB861` | Presumed to mean Lord Voldemort; retain the archived label until verified. |
| Darth Vader | Villains | *Star Wars* | `EB845` | Archived URL is malformed as `#http://...`. |
| Mrs. Hannigan | Villains | *Annie* | `EB855` | Commonly named Miss Hannigan; the bracket uses “Mrs. Hannigan.” |
| Thanos | Villains | Marvel Comics | `EB846` | Source attribution requires verification for final copy. |
| Maleficent | Villains | *Sleeping Beauty* tradition/Disney adaptation | `EB854` | Exact intended source is not specified. |

## Archived Reading-List Link Pattern

The original character links follow this pattern:

```text
http://library.booksite.com/5897/nl/?list=CNL1&group=[GROUP_ID]
```

These URLs are historical evidence, not publication-ready links. They use unsecured HTTP and may no longer resolve. The group IDs should be preserved as archival metadata while new destinations are verified or replaced.

## Advancement Tree

```text
HEROES
Lisbeth Salander ─┐
                  ├─ Matilda ────┐
Matilda ──────────┘              │
                                 ├─ Matilda ───────┐
Arya Stark ───────┐              │                 │
                  ├─ Arya Stark ─┘                 │
Captain Marvel ───┘                                │
                                                   ├─ MATILDA ─────────┐
Gandalf ──────────┐                                │                   │
                  ├─ Gandalf ───────┐              │                   │
Sherlock Holmes ──┘                 │              │                   │
                                    ├─ Black Panther ┘                 │
Robin Hood ───────┐                 │                                  │
                  ├─ Black Panther ─┘                                  │
Black Panther ────┘                                                    │
                                                                       ├─ MATILDA
VILLAINS                                                               │
Hannibal Lecter ───┐                                                   │
                   ├─ Count Olaf ────────┐                             │
Count Olaf ─────────┘                    │                             │
                                        ├─ Dolores Umbridge ─┐         │
Dolores Umbridge ───┐                   │                    │         │
                    ├─ Dolores Umbridge ─┘                    │         │
He Who Shall Not... ┘                                        │         │
                                                             ├─ DOLORES UMBRIDGE ┘
Darth Vader ────────┐                                        │
                    ├─ Darth Vader ─┐                         │
Mrs. Hannigan ──────┘               │                         │
                                    ├─ Maleficent ────────────┘
Thanos ─────────────┐               │
                    ├─ Maleficent ──┘
Maleficent ─────────┘
```

## What Can Be Used Immediately

The following fields are reliable enough to seed the redesign prototype:

- All 16 archived contestant labels
- League assignment
- Opening matchups
- Complete advancement path
- League champions
- Overall champion
- Archived Booksite group IDs
- Original league and champion colors

## What Still Requires a Decision

- Public-facing tournament year
- Corrected versus archival character spellings
- Final source-work descriptions
- Replacement reading-list URLs
- Whether to use these copyrighted fictional characters in a public prototype
- Whether the prototype presents historical results only or includes clearly labeled demonstration voting

## Recommended Build Decision

Use this reconstructed bracket as the prototype dataset, labeled **Archived Tournament** until the year is verified. Present the results as historical and do not fabricate vote totals. This provides enough real structure to design the full experience while keeping uncertain claims out of the interface.
