# Widia Brand System

## Purpose

This document captures the current digital brand system used in the `widia.io` website.
It is the working source of truth for product-facing web surfaces, especially the homepage.

Use this document for:
- homepage and landing page refinements
- new sections added to `widia.io`
- editorial and product-marketing surfaces that should feel native to the current site

Do not use this document alone for:
- raw logo export rules
- social asset specs
- legacy brand material that still depends on the older black/white-only identity

For assets and logo files, see [brand-guidelines.md](/Users/bruno/Developer/clients/widia/active/widia.io/docs/assets/brand-guidelines.md).
If this file conflicts with the older asset guide, this file wins for website/system decisions.

## Brand Direction

### Core feel

Widia should feel like an **atelier operacional**:
- premium, but not luxury for its own sake
- technical, but not cold
- calm, but not passive
- structured, but still human

The site should communicate:
- someone experienced is entering a messy operation
- the work becomes clearer, lighter, and more controlled
- AI is being applied to real bottlenecks, not presented as hype

### Domain

The visual and verbal world comes from:
- operation
- triage
- workflow
- backlog
- recurring tasks
- estimates and spreadsheets
- payment flow
- time recovered

### Signature

The core signature is the idea of a **live operational panel**:
- incoming channels and process inputs
- routing and orchestration
- visible outcomes
- mono labels, quiet structure, editorial hierarchy

This is the visual center of gravity for the current Widia site.

### Defaults We Are Explicitly Rejecting

- generic SaaS hero with centered text and decorative gradient
- interchangeable card grids with identical hierarchy everywhere
- black/white/minimal branding that has no domain-specific materiality

## Visual System

### Color World

The current site uses a warm operational palette:

- `--canvas-ash`: `#efe8dc`
- `--paper-ivory`: `#f7f2e9`
- `--paper-bright`: `#fffdf8`
- `--graphite-ink`: `#17191e`
- `--ink-soft`: `#646c77`
- `--ledger-line`: `rgba(23, 25, 30, 0.12)`
- `--ledger-line-strong`: `rgba(23, 25, 30, 0.21)`
- `--signal-blue`: `#2f61f5`
- `--proof-green`: `#218363`
- `--amber-note`: `#ab6f2c`

### Intended color semantics

These semantics should be followed consistently:

- blue = interface, action, system movement
- green = proof, success, resolved outcomes
- amber = attention, process, note, human review
- graphite = authority, structure, contrast
- ivory/paper = calm, readable working surface

Avoid using accent colors as pure decoration.

### Depth Strategy

The site uses a single depth approach:
- soft layered surfaces
- whisper-quiet borders
- subtle lift through blur and low-contrast shadow

Component tiers:
- `.surface-panel` = primary atmospheric container
- `.surface-card` = standard elevated content surface
- `.surface-card-strong` = brightest and most explicit content block

Rules:
- do not introduce harsh borders
- do not mix heavy shadow cards with flat cards
- do not create unrelated surface colors per section

## Typography

### Typeface roles

- `Space Grotesk` via `--font-display`
  - for headlines and strong product statements
  - use tight tracking and high presence
- `Manrope` via `--font-body`
  - for body copy and supporting UI text
  - readable, neutral, warm enough for longer sections
- `IBM Plex Mono` via `--font-mono`
  - for labels, evidence chips, operational cues, and metadata
  - use sparingly; it should signal structure

### Hierarchy

- display headlines should feel editorial, not app-like
- body copy should stay calm and slightly muted
- mono labels should organize, not compete
- avoid using large bold body copy as a substitute for real hierarchy

## Spacing and Shape

### Spacing rhythm

The current system is broad and breathable:
- sections use `py-20` / `lg:py-28`
- panels and major cards use generous inner padding
- gaps should feel intentional and grid-based, not compressed

When adding new sections:
- keep one dominant internal spacing rhythm
- do not mix cramped text blocks with oversized outer spacing

### Radius language

Current radius direction is soft and premium:
- large section containers: `28px` to `34px`
- medium cards: `22px` to `30px`
- pills and actions: full round

Do not introduce sharp corners unless an entire subsystem justifies it.

## Reusable Patterns

### Header

The header should feel like a quiet control rail:
- floating, not heavy
- translucent, not glassy for effect
- navigation grouped in a pill rail
- primary CTA always visible on desktop

### Hero

The hero is a two-part composition:
- left = editorial promise and action
- right = orchestration panel

Required hero ingredients:
- one clear operational statement
- one primary CTA
- one secondary CTA
- one proof layer
- one panel showing inputs becoming outcomes

Avoid stacking multiple proof devices that say the same thing.

### Section intros

Most sections use:
- `section-kicker`
- one editorial heading
- one short explanation

This pattern is reusable, but not every section should mirror the same left/right composition.
Roughly every 2 sections, introduce a rhythm break.

### Cases and proof

Proof should come from:
- products already in production
- client outcome language
- concrete operational changes

Avoid abstract praise and generic “trusted by” styling.

### Founder block

The founder section should communicate:
- authority
- applied experience
- proximity to execution

If a real portrait or artifact is unavailable, the section must still feel intentional, not placeholder-like.

### Footer

The footer should remain restrained and quiet.
It should close with:
- valid trust links
- contact paths
- light brand presence

Do not let the footer become a second homepage.

## Content Tone

The site voice should be:
- direct
- grounded
- operational
- specific

Preferred phrasing:
- “trava sua operação”
- “organiza a rotina”
- “menos improviso”
- “mais clareza”
- “acompanha até funcionar”

Avoid:
- empty futurism
- inflated AI language
- startup cliches
- overpromising transformation without operational context

## Current Risks

These are known consistency risks in the current system:
- sections below the hero can drift into similar left/right card rhythms
- proof can become overloaded if product cases and testimonials compete equally
- accent colors can slide into decoration if not kept semantically disciplined
- founder authority can weaken if the section lacks a real artifact

## Implementation References

Current system implementation lives primarily in:
- [globals.css](/Users/bruno/Developer/clients/widia/active/widia.io/src/app/globals.css)
- [layout.tsx](/Users/bruno/Developer/clients/widia/active/widia.io/src/app/layout.tsx)
- [Hero.tsx](/Users/bruno/Developer/clients/widia/active/widia.io/src/components/sections/Hero.tsx)
- [ProvaSocial.tsx](/Users/bruno/Developer/clients/widia/active/widia.io/src/components/sections/ProvaSocial.tsx)

## Update Rule

Update this file when:
- a color semantic changes
- a type role changes
- the hero signature changes
- a new reusable section pattern appears 2 or more times
- the overall brand feel moves in a clear new direction

Do not update this file for:
- one-off campaign experiments
- temporary placeholder states
- isolated content edits without system impact
