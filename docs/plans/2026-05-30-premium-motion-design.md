# Premium Motion V2 Design

Date: 2026-05-30

## Direction

The current portfolio should not become an animation demo. The goal is to make the existing simple layout feel more designed, expensive, and alive through motion that explains structure:

- section titles should enter with a mask/line system, not fade in;
- cards should feel interactive and dimensional;
- the experience timeline should show scroll progress;
- project cards should have image parallax and CTA movement;
- the hero should keep the approved layout and get only restrained motion around the title/code line.

This replaces the earlier opacity/blur reveal direction. The user rejected that because it felt like content was simply hidden and then shown. V2 must keep content legible by default and use transform-based motion, line drawing, masking, progress, and hover/focus interactions.

## References Used

- [GSAP ScrollTrigger examples](https://animation-addons.com/blog/30-gsap-scrolltrigger-examples/)
- [GSAP demos](https://gsapdemos.com/examples)
- [Stacked cards with GSAP](https://stitchandsnare.com/blog/scroll-triggered-stacked-cards-with-gsap/)
- [Web animation performance guide](https://lucky.graphics/learn/web-animation-performance-guide/)
- [Framer animations guide](https://framerwebsites.com/blog/framer-animations-complete-guide)

## Motion Principles

- Use motion to guide attention, not decorate every element.
- Prefer `transform`, `clip-path`, CSS variables, and line drawing.
- Avoid long opacity/blur reveals.
- Avoid scroll-jacking and large pinned sections on mobile.
- Respect `prefers-reduced-motion`.
- Keep the portfolio fast: no animation should cause horizontal overflow, layout shift, or text clipping.

## Approved Scope

### Hero

- Keep the current hero image, text, CTA layout, and bottom navigation.
- Center and stabilize the code line.
- Add a subtle code-line shimmer/glow.
- Replace the weak typewriter feeling with a masked title motion only if it does not disturb the approved hero layout.

### Section Headers

- Use a reusable header pattern:
  - small kicker;
  - title mask/slide;
  - short microcopy;
  - one red hairline drawn under the header.
- Do not add a top hairline.
- Do not add long explanatory text between sections.

### Capabilities

- Use scroll-driven card sequencing:
  - card top accent line draws;
  - card lifts slightly when it enters;
  - card number becomes a strong `#1`, `#2`, `#3` mark;
  - hover/focus adds depth, border glow, and number emphasis.
- No content should start invisible.

### Experience

- Add scroll progress to the vertical timeline.
- Each timeline marker should activate as the item enters.
- Keep the current mobile-first timeline layout.
- No continuous pulsing.

### Projects

- Add stronger project-card motion:
  - image parallax on scroll;
  - image zoom on hover/focus;
  - CTA underline/arrow motion;
  - badges remain aligned and clamped to one row with `+`.
- Label the CTA as real work/project detail, not "case study" when that wording is wrong for the user.

### Contact

- Keep contact minimal.
- Copy icon remains inline.
- Add only subtle hover/focus motion.

## Out of Scope

- No full page transitions.
- No heavy scroll-jacking.
- No fake 3D tilt tied to mouse position.
- No animation that hides entire sections before JavaScript runs.
- No layout/content rewrite unless needed to support the motion system.

## Success Criteria

- Motion is clearly visible in cards, project images, section headers, and timeline.
- The site still feels simple and mobile-first.
- Hero stays approved and stable.
- No badge wrapping, CTA misalignment, or horizontal overflow.
- `npm.cmd run test:portfolio` passes.
- `npm.cmd run build` passes.
- Browser validation confirms motion on desktop and mobile.
