# Codex brief — Agentic Engines website, ultra-simple product-page pass

## Project
Revise the existing Agentic Engines homepage again.

This pass is about making the page much simpler structurally and introducing a working basket flow.

The current prototype is still too complicated layout-wise.
Even after simplification, there is still too much information competing at once.
The page still feels more like a designed explanation than a clean product page.

This next pass should feel lighter, simpler, more scroll-led, and more product-like.

## Core principle
The top of the page should do one job only:
make the user understand the main proposition fast.

Do not overload the first screen.
Let the page reveal the product system in a cleaner sequence as the user scrolls.

## Top-of-page rule
The top section should be almost entirely the hero proposition.
Do not crowd it with too many supporting ideas.

Keep:
- the locked hero headline
- one short subline
- one visual proof object
- primary CTA
- secondary CTA

Minimise:
- extra rationale
- extra explanation
- too many proof chips
- too much pricing complexity in the hero itself

## Locked hero headline
**Stop chatting with AI. Install a working agent in one command. No engineering needed.**

## Hero subcopy direction
Keep this very short.
One tight paragraph or two short lines only.

Territory:
- choose the job
- install the system
- tune it to how you work

Do not over-explain.

## New structural direction
Rebuild the homepage as a simpler scroll story:

1. Hero
2. Install Kit section
3. Workflow Packs section
4. Tuning Kit section
5. Trust / boundaries section
6. Final CTA

This is different from the previous pass.
It should feel like the user is discovering the three product parts in order.

## Section 1 — Hero
The hero should communicate:
- what this is
- why it is different from generic chat AI
- that it is simple to begin

Keep the visual language:
- blueprint blue on chalk white
- paper-stack / sketched system feel
- one stronger hero object that feels like the product-photo-equivalent moment

But simplify the composition.
It should feel more iconic and less busy.

The hero visual should not try to explain everything.
It should make the product feel tangible and desirable.

## Section 2 — Install Kit
This section should be centered and very simple.

Layout idea:
- product name and short value statement centered
- pricing clearly visible on the right or as a strongly separated price block on desktop
- concise explanation only
- add-to-basket button

Job of this section:
- make the Install Kit feel like the clean starting point
- reassure the user that setup is straightforward

Suggested content direction:
- Install Kit / Baseplate
- one command gets the environment right
- removes setup mess before it slows you down
- $9

Do not over-explain runtime setup.

## Section 3 — Workflow Packs
This should now be the central product section.

Use a gallery-style slider or rotating card system.
The user should be able to cycle through Workflow Packs visually and simply.

For now include:
- Chief of Staff
- Thought Leadership
- Solo Operator

Design goal:
- a pack rotates or slides into the main tile area
- the experience feels like browsing a set of distinct “builds”
- each pack should feel concrete and easy to grasp

Each pack tile should answer quickly:
- what this pack helps with
- what changes for the user
- what kind of rhythm/output it creates
- add-to-basket CTA

Keep each pack description compact and outcome-led.

## Section 4 — Tuning Kit
This should come after the Workflow Packs.

The Tuning Kit should feel like:
- the layer that makes the workflow feel more like you
- the custom piece that shapes the system to your voice, rules, and habits

Keep it simple.
Do not make it sound abstract.

Suggested message territory:
- tune the workflow to how you work
- shape the outputs, voice, and boundaries
- make the system feel less default and more yours
- $10
- add-to-basket CTA

## Section 5 — Trust / boundaries
Keep this lighter and faster-scanning than before.

This section should reassure quickly:
- helpful does not mean uncontrolled
- approvals stay visible
- the agent does not silently go rogue

Use a minimal visual model if helpful.
Do not let this section become text-heavy.

## Section 6 — Final CTA
Close simply.
Reinforce the bundle as the easiest buy.

Include:
- Starter Bundle $25
- $34 separately
- one primary CTA
- one secondary path to browse packs

## Bundle logic
The bundle should still be sold as the cleanest path.
But it does not need a huge explanatory section.
The page should imply the logic naturally through the scroll sequence:
- install
- choose workflow
- tune it
- or buy all three together

## Basket requirement
This is important.
At any relevant product section, the user should be able to click **Add to basket**.

Products that need add-to-basket support:
- Install Kit ($9)
- selected Workflow Pack ($15)
- Tuning Kit ($10)
- Starter Bundle ($25)

Implement a lightweight working basket/cart interaction in the prototype.

Basket requirements:
- add-to-basket buttons work from the relevant sections
- selected Workflow Pack adds the currently active pack
- basket state is visible on the page (for example in a sticky basket button, mini cart, or slide-out panel)
- basket updates quantity / contents clearly
- user can remove items
- if Starter Bundle is added, the basket logic should not create a confusing duplicate state with all three separate items unless that is intentionally and clearly handled
- keep the interaction simple and believable for a prototype

This does not need full checkout integration.
But it should behave like a real basket.

## Visual direction
Keep:
- blue pen on white paper
- simple sketch / paper stack feel
- slight playfulness
- tactile UI states

Simplify further:
- fewer layered concepts at once
- fewer annotations
- less visual noise
- more space around the hero
- clearer product object presentation

## Interaction direction
Buttons and selected states should still feel tactile and paper-like.
Use:
- subtle shadows
- crisp borders
- restrained motion

Avoid:
- glossy digital blur
- too many transitions
- overdesigned animation

## Tone
The tone should be:
- calm
- simple
- direct
- playful in a controlled way
- product-confident
- plain English

Avoid:
- internal strategic language
- technical jargon
- over-explaining the logic
- startup hype
- long paragraphs

## Language rules
Use more:
- install
- choose the job
- build
- tune
- working agent
- baseplate
- workflow pack
- make it yours
- add to basket
- simple
- smooth

Avoid:
- belief engine
- commercially obvious
- compliance theatre
- orchestration layer
- infrastructure
- autonomous system
- revolutionary
- magic

## Platform requirement
Keep the implementation:
- static HTML/CSS/JS
- modular
- adaptable to Shopify later

The basket interaction should be built in a way that conceptually maps to a future Shopify cart flow.

## Success standard
The page should feel:
- simpler
- more scrollable
- easier to understand
- more product-like
- more purchasable

A first-time visitor should understand the top proposition immediately, then discover the products in a clean sequence as they scroll.

Do the work directly.
Simplify the structure, implement the basket behaviour, and make the page feel lighter and more useful.