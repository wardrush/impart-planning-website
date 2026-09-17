# Impart Planning — Brand Guide

**Direction: Stone & Bone.** Warm greys and cream carried forward from the
existing Impart Planning site, tightened into a system. The reference point is
a museum wall label: a serif line, a hairline rule, a lot of margin, and
nothing decorative competing with the text.

This guide is the source of truth for the website in this repository. The
tokens below appear as CSS custom properties at the top of
`assets/css/styles.css`; change them there and the site follows.
A rendered version of this guide lives at `brand/index.html`.

---

## 1. Positioning

| | |
|---|---|
| **Name** | Impart Planning |
| **Descriptor** | Full-service Art Planning and Collection Management |
| **Promise** | We make art easy. |
| **Audience** | Government agencies, businesses, not-for-profits, and individual collectors |
| **Proof** | More than forty years of experience; AAM Best Practices; AIC Code of Ethics; Secretary of Interior's standards |

The descriptor is a fixed phrase. It is not a headline to be rewritten per
page — it sits under the name, in italic, and stays exactly as written.

---

## 2. Color

| Token | Hex | Use |
|---|---|---|
| `--ink` | `#484742` | Body text, dark bands, primary buttons |
| `--ink-deep` | `#31302D` | Footer only — one step darker than a dark band, so the page ends rather than repeats |
| `--stone` | `#7A766A` | Hairlines and input borders. **Not for body text on paper** |
| `--stone-dark` | `#5E5B52` | Secondary text, eyebrows, section indices |
| `--bone` | `#EAE7DF` | Alternating section ground |
| `--bone-warm` | `#E0DCD1` | Rules on paper, text on dark bands |
| `--paper` | `#FBFAF7` | Default page ground |
| `--accent` | `#8C5A3C` | Links, numerals, one rule per section. Patina/terracotta |
| `--accent-dim` | `#6F472F` | Link hover, error text |
| `--rule-dark` | `#9A968A` | Hairlines on ink bands only — stone is too faint there |

**Proportion.** Roughly 70% paper and bone, 25% ink, 5% accent. If a screenshot
of a page shows more than a few accent marks, something has gone wrong.

**Accessibility.** Every pairing used on the site clears WCAG AA for its size:
ink on paper 8.9:1, stone-dark on paper 6.5:1, accent on paper 5.5:1,
bone on ink 7.5:1, rule-dark on ink 3.2:1 (non-text). `--stone` on `--paper`
lands at 4.4:1 — fine for rules and 24px-plus display text, not for paragraphs. Check any new pairing before
shipping it rather than eyeballing it.

---

## 3. Type

**Libre Baskerville** — headings, standfirsts, service names, pull quotes.
Line height 1.15 for display sizes, 1.35–1.55 for anything longer than a line.

**Cabin** — body copy, navigation, buttons, labels. Line height 1.65.

Both are Google Fonts and free to use commercially. Fallbacks are Georgia
(serif) and system sans, so the page stays readable if the font request fails.

**Scale.** Fluid, from `--step--1` (0.82–0.88rem) to `--step-3` (2–3.1rem).
Six steps total. Adding a seventh usually means a layout problem is being
solved with type size.

**Two treatments carry the system:**

1. **Label caps** — uppercase Cabin, letter-spacing `0.16em`, at `--step--1`.
   Eyebrows, section indices, column labels, buttons, navigation.
2. **Wall-label serif** — Libre Baskerville at body size, on a hairline rule,
   with generous vertical padding. Used for the eleven service names.

**Measure.** 62 characters for body text, 34 for standfirsts, 20–28 for display
lines. Long lines are the fastest way to make this palette look cheap.

---

## 4. Mark

A thin rectangle — a frame — containing a capital **P**, over a baseline rule
that extends past the frame: art in a frame, on a plinth. It renders as inline
SVG in `currentColor`, so it inherits whatever color its context sets.

- Minimum size: 24px. Below that the interior of the P closes up.
- Clear space: the height of the mark on all four sides.
- Never: gradients, drop shadows, rotation, or a second color inside the mark.
- The wordmark is the mark plus "Impart Planning" in Libre Baskerville, with
  0.7rem between them.

---

## 5. Layout

- **Container:** `min(72rem, 100% - 2 gutters)`. Gutter is fluid, 1.25–3rem.
- **Bands:** vertical padding `clamp(4rem, 9vw, 7.5rem)`. Sections alternate
  paper → bone → ink → paper. Never two dark bands in a row.
- **Grid:** three columns above 768px, one column below. No intermediate
  breakpoint; the content does not need one.
- **Rules:** 1px hairlines in `--bone-warm` or `--stone`. One 2px accent rule
  per section, at most — under a section title or over a column label.
- **Whitespace is the design.** When a section looks weak, the fix is usually
  more space above the heading, not more color inside it.

---

## 6. Voice

Taken from the existing copy and left alone where it already works.

- Short declaratives. "We make art easy." "Relationships matter."
- Plain verbs: plan, build, manage, steward, navigate, maintain.
- Institutional proof stated flatly, without adjectives — forty years,
  named standards, named professions.
- The ellipsis in "Our Services …" and "…to make art easy" is theirs. Keep it.

Avoid: "solutions", "passionate", "world-class", "leverage", exclamation
points, and any claim that cannot be attached to a standard, a year count, or
a named client type.

**Capitalization:** sentence case for headings. The existing site capitalizes
inconsistently ("We help You Plan and Steward your Investments in the ARTS");
this has been normalized to sentence case with "Arts" in small caps, which
preserves the emphasis without the shouting.

---

## 7. Applying it elsewhere

**Email signature:** name in Libre Baskerville, title and contact in Cabin
label caps, one 2px accent rule above.

**Proposals and reports:** paper ground, ink text, accent for section numbers
only. The service names use the wall-label treatment. Cover page gets the
descriptor in italic under the name.

**Slides:** dark band (`--ink`) for section dividers, paper for content. One
idea per slide. The pull-quote treatment — italic serif on a left accent
rule — does the work of a title slide.

---

## 8. Quick reference

```
Ink        #484742    Bone       #EAE7DF
Ink deep   #31302D    Bone warm  #E0DCD1
Stone      #7A766A    Paper      #FBFAF7
Stone dark #5E5B52    Accent     #8C5A3C
                      Rule dark  #9A968A

Headings   Libre Baskerville 400 / 1.15
Body       Cabin 400 / 1.65
Labels     Cabin 500 uppercase, 0.16em tracking
```
