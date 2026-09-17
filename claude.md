# claude.md — Impart Planning website

Load this first. It is the 30-second version of the session that produced
this repository.

## Session goals

Build a simple, high-quality site for Impart Planning that shows real
experience in public art procurement, installation, budgeting, and
restoration, plus a brand guide. Reuse the previous site's wording rather than
writing new copy.

**Done:**
- Single-page site (`index.html`) with sticky anchor nav
- Brand system "Stone & Bone" — written (`BRAND.md`) and rendered (`brand/index.html`)
- Stylesheet with documented tokens, shared by the site and the guide
- Progressive-enhancement JS: mobile nav, scrollspy, newsletter with mailto fallback
- SVG mark and favicon
- README covering local run, deploy, and how to wire the form

**Not done / deliberately out of scope:**
- No project photography. The original site's hero image lived on GoDaddy's
  CDN and is not in the archive copy. The hero is CSS-only until real project
  images exist.
- No case studies or project pages. Nothing in the source material describes a
  specific project, and inventing them would misrepresent the client.
- Newsletter has no backend (see README).
- No contact form — only a mailto link, which needs no server.

## Key decisions

**Copy is reused, not rewritten.** The two uploaded files are the same
2022-01-24 Wayback capture of impartplanning.com. Every paragraph on the site
is verbatim from it. Three deliberate edits:
1. "Site specific art" → "site specific art" (mid-sentence).
2. Footer tagline normalized from "We help You Plan and Steward your
   Investments in the ARTS" to sentence case, "Arts" in small caps.
3. Newsletter line gets a closing period.

**Services grouped Plan / Build / Steward.** The eleven service names are
untouched, but a flat list of eleven reads thin. The grouping labels come from
the client's own sentence — "We know how to plan, build, and manage a
sustainable art ecosystem" — so no new positioning was invented.

**Brand direction chosen by the user** from three options: Stone & Bone
(selected), Blueprint, Gallery White. Stone & Bone evolves the original
palette — the greys and cream are lifted from the archived CSS
(rgb(122,118,106), rgb(234,231,223), rgb(72,71,66)) and the typefaces
(Libre Baskerville, Cabin) are the ones the old site already loaded. Anyone who
saw the old site recognizes this one.

**Unresolved / needs client input:**
- `support@impartplanning.com` is the only contact detail in the archive. No
  phone, no address, no named staff. "Forty years of experience" is stated but
  not attributed to anyone.
- The 2021 copyright was updated to 2026; confirm the entity name is unchanged.
- Domain status unknown — the last archive capture is July 2025.
- No accessibility audit against real assistive tech; contrast is calculated,
  not tested.

## Useful files

| Path | Purpose |
|---|---|
| `index.html` | The site. Sections carry ids used by the nav and scrollspy. |
| `assets/css/styles.css` | All styling. Tokens in `:root` at the top — change there, both pages follow. |
| `assets/js/main.js` | ~100 lines, no dependencies. Nothing on the page requires it. |
| `BRAND.md` | Written brand guide: positioning, color with contrast ratios, type, mark, layout, voice, application to email/proposals/slides. |
| `brand/index.html` | Same system rendered — swatches, type specimens, mark at four sizes, do/don't. Useful as a leave-behind. |
| `README.md` | Run, deploy, wire the form, edit. |

## Next steps

1. **Ask the client for project photography.** The single biggest lift
   available. Three or four installation photos would carry the hero and turn
   the Services section into evidence rather than a list.
2. **Ask for two or three named projects** with agency, budget range, and year.
   The brief emphasized procurement and budgeting experience; the archived copy
   asserts it but never demonstrates it.
3. Confirm contact details — phone, service region, named principals.
4. Wire the newsletter endpoint, or remove the field and keep the mailto link.
5. Deploy: GitHub Pages from the repository root, then the CNAME.

## Working notes

- Branch: `claude/epic-davinci-bgb2e4`.
- The two uploaded HTML files are identical captures; only one needed reading.
- Fonts load from Google Fonts. If the client wants no third-party requests,
  self-host the two families and drop the `<link>` tags — the fallbacks
  (Georgia, system sans) already cover failure.
