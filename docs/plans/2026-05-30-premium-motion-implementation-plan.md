# Premium Motion V2 Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Replace the weak opacity-based motion experiment with a stronger, mobile-first motion system using GSAP/ScrollTrigger for section headers, capability cards, timeline progress, project cards, and restrained hero polish.

**Architecture:** Keep the current static/Vite portfolio architecture. Add GSAP as the only animation dependency, initialize all motion from `script.js`, keep content readable before JavaScript, and use CSS variables/classes in `style.css` for visual states. Motion must degrade cleanly under `prefers-reduced-motion`.

**Tech Stack:** HTML, CSS, JavaScript modules, GSAP, ScrollTrigger, Vite, existing `scripts/validate-portfolio.mjs`.

---

### Task 1: Capture Baseline And Clean Motion Direction

**Files:**
- Read: `F:/PORTFOLIO-THIAGO/PORTFOLIO-THIAGO/index.html`
- Read: `F:/PORTFOLIO-THIAGO/PORTFOLIO-THIAGO/script.js`
- Read: `F:/PORTFOLIO-THIAGO/PORTFOLIO-THIAGO/style.css`
- Modify: `F:/PORTFOLIO-THIAGO/PORTFOLIO-THIAGO/style.css`
- Modify: `F:/PORTFOLIO-THIAGO/PORTFOLIO-THIAGO/script.js`

**Step 1: Inspect current motion code**

Run:

```powershell
rg -n "motion|animate-in|setupSectionReveals|heroCodeGlow|structuralLineDraw|prefers-reduced-motion|IntersectionObserver|typing" script.js style.css index.html
```

Expected: find the current structural motion experiment and existing scroll reveal setup.

**Step 2: Remove rejected fade/blur behavior**

In `style.css`, keep useful hover/line rules if they are not hiding content, but remove any rule that makes core content start as:

```css
opacity: 0;
filter: blur(...);
transform: translateY(...);
```

for these selectors:

```css
.compact-header
.capability-panel
.timeline-item
.simple-project-card
.contact-simple
```

Expected: the page remains readable even if JavaScript fails.

**Step 3: Keep only non-destructive `animate-in` support**

In `style.css`, make `.animate-in` a progressive enhancement hook:

```css
.portfolio-simplified .animate-in {
  opacity: 1;
}
```

Do not use it to reveal hidden content.

**Step 4: Run validation**

Run:

```powershell
npm.cmd run test:portfolio
```

Expected: PASS.

**Step 5: Commit**

Only commit if this task is executed independently:

```powershell
git add -- style.css script.js
git commit -m "Prepare portfolio motion hooks"
```

---

### Task 2: Add GSAP And Motion Bootstrap

**Files:**
- Modify: `F:/PORTFOLIO-THIAGO/PORTFOLIO-THIAGO/package.json`
- Modify: `F:/PORTFOLIO-THIAGO/PORTFOLIO-THIAGO/package-lock.json`
- Modify: `F:/PORTFOLIO-THIAGO/PORTFOLIO-THIAGO/script.js`

**Step 1: Install GSAP**

Run:

```powershell
npm.cmd install gsap
```

Expected: `package.json` and lockfile include `gsap`.

**Step 2: Import and register ScrollTrigger**

At the top of `script.js`, add:

```js
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);
```

**Step 3: Add a reduced-motion guard**

Near the setup functions in `script.js`, add:

```js
function shouldReduceMotion() {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}
```

**Step 4: Add the bootstrap function**

Add:

```js
function setupMotionSystem() {
  if (shouldReduceMotion()) {
    document.body.classList.add('motion-reduced');
    return;
  }

  document.body.classList.add('motion-enabled');
  setupHeroMotion();
  setupSectionHeaderMotion();
  setupCapabilityMotion();
  setupTimelineMotion();
  setupProjectMotion();
  setupContactMotion();
}
```

**Step 5: Call it from `DOMContentLoaded`**

Update the existing listener:

```js
document.addEventListener('DOMContentLoaded', () => {
  setupNavigation();
  setupTypingAnimation();
  setupEmailCopy();
  setupProjectBadgeOverflow();
  setupParticles();
  setupScrollEffects();
  setupSectionReveals();
  setupMotionSystem();
});
```

**Step 6: Stub the called functions**

Add empty functions so the build stays green:

```js
function setupHeroMotion() {}
function setupSectionHeaderMotion() {}
function setupCapabilityMotion() {}
function setupTimelineMotion() {}
function setupProjectMotion() {}
function setupContactMotion() {}
```

**Step 7: Build**

Run:

```powershell
npm.cmd run build
```

Expected: PASS.

**Step 8: Commit**

```powershell
git add -- package.json package-lock.json script.js
git commit -m "Add GSAP motion bootstrap"
```

---

### Task 3: Section Header Mask And Hairline Motion

**Files:**
- Modify: `F:/PORTFOLIO-THIAGO/PORTFOLIO-THIAGO/style.css`
- Modify: `F:/PORTFOLIO-THIAGO/PORTFOLIO-THIAGO/script.js`

**Step 1: Add CSS support for one bottom hairline**

Append scoped styles:

```css
.portfolio-simplified .compact-header {
  position: relative;
  overflow: visible;
}

.portfolio-simplified .compact-header::after {
  content: "";
  display: block;
  width: var(--header-line-progress, 0%);
  height: 1px;
  margin-top: clamp(1.2rem, 3vw, 1.8rem);
  background: var(--primary-color);
  box-shadow: 0 0 14px rgba(255, 0, 64, 0.34);
}

.portfolio-simplified .section-title {
  transform-origin: left center;
}
```

Expected: no top hairline is introduced.

**Step 2: Animate headers with ScrollTrigger**

Implement:

```js
function setupSectionHeaderMotion() {
  gsap.utils.toArray('.compact-header').forEach((header) => {
    const title = header.querySelector('.section-title');
    const kicker = header.querySelector('.section-kicker');
    const subtitle = header.querySelector('.section-subtitle');

    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: header,
        start: 'top 82%',
        once: true,
      },
    });

    timeline
      .from([kicker, title, subtitle].filter(Boolean), {
        y: 18,
        clipPath: 'inset(0 0 100% 0)',
        duration: 0.65,
        stagger: 0.08,
        ease: 'power3.out',
      })
      .to(header, {
        '--header-line-progress': '100%',
        duration: 0.72,
        ease: 'power3.out',
      }, '-=0.25');
  });
}
```

**Step 3: Validate desktop/mobile header spacing**

Run local server and inspect:

```powershell
npm.cmd run dev
```

Expected:
- headers animate with a bottom line only;
- no content disappears after animation;
- no large top gaps return.

**Step 4: Commit**

```powershell
git add -- script.js style.css
git commit -m "Animate section headers with motion lines"
```

---

### Task 4: Capability Cards With Stronger Scroll And Hover Motion

**Files:**
- Modify: `F:/PORTFOLIO-THIAGO/PORTFOLIO-THIAGO/style.css`
- Modify: `F:/PORTFOLIO-THIAGO/PORTFOLIO-THIAGO/script.js`

**Step 1: Make card numbers stronger**

Update `.capability-number`:

```css
.portfolio-simplified .capability-number {
  position: absolute;
  top: clamp(1.2rem, 4vw, 1.75rem);
  right: clamp(1.4rem, 4vw, 2rem);
  font-size: clamp(1.35rem, 5vw, 2.15rem);
  font-weight: 900;
  color: var(--primary-color);
  opacity: 0.9;
}
```

Content should use enough top padding to avoid collision:

```css
.portfolio-simplified .capability-panel {
  padding-top: clamp(4.5rem, 10vw, 5.25rem);
}
```

**Step 2: Keep the top accent line**

Use CSS variable-driven line progress:

```css
.portfolio-simplified .capability-panel::before {
  width: var(--card-line-progress, 0%);
}
```

**Step 3: Implement scroll sequencing**

In `setupCapabilityMotion()`:

```js
function setupCapabilityMotion() {
  gsap.utils.toArray('.capability-panel').forEach((card, index) => {
    gsap.fromTo(card,
      { y: 18, scale: 0.985, '--card-line-progress': '0%' },
      {
        y: 0,
        scale: 1,
        '--card-line-progress': '22%',
        duration: 0.75,
        ease: 'power3.out',
        delay: index * 0.04,
        scrollTrigger: {
          trigger: card,
          start: 'top 84%',
          once: true,
        },
      }
    );
  });
}
```

**Step 4: Add hover/focus depth**

Add:

```css
.portfolio-simplified .capability-panel:hover,
.portfolio-simplified .capability-panel:focus-within {
  transform: translate3d(0, -6px, 0);
  border-color: rgba(255, 0, 64, 0.5);
  box-shadow: 0 24px 70px rgba(0, 0, 0, 0.38), 0 0 32px rgba(255, 0, 64, 0.13);
}
```

**Step 5: Browser validate**

Inspect `#stack` on mobile and desktop.

Expected:
- top line draws;
- card motion is visible;
- title has breathing room under `#1/#2/#3`;
- no two-line header issue worsens.

**Step 6: Commit**

```powershell
git add -- script.js style.css
git commit -m "Add capability card motion"
```

---

### Task 5: Experience Timeline Progress

**Files:**
- Modify: `F:/PORTFOLIO-THIAGO/PORTFOLIO-THIAGO/style.css`
- Modify: `F:/PORTFOLIO-THIAGO/PORTFOLIO-THIAGO/script.js`

**Step 1: Add progress variable to timeline**

Find the current timeline vertical line selector. If it is `.timeline::before`, update it to:

```css
.portfolio-simplified .timeline::before {
  transform: scaleY(var(--timeline-progress, 0));
  transform-origin: top;
}
```

If the current line is not `.timeline::before`, apply the same variable to the actual selector used by the resume timeline.

**Step 2: Animate timeline progress**

Implement:

```js
function setupTimelineMotion() {
  gsap.utils.toArray('.timeline').forEach((timeline) => {
    gsap.to(timeline, {
      '--timeline-progress': 1,
      ease: 'none',
      scrollTrigger: {
        trigger: timeline,
        start: 'top 82%',
        end: 'bottom 72%',
        scrub: 0.4,
      },
    });
  });

  gsap.utils.toArray('.timeline-item').forEach((item) => {
    const marker = item.querySelector('.timeline-marker');
    const content = item.querySelector('.timeline-content');

    gsap.fromTo([marker, content].filter(Boolean),
      { y: 14, scale: 0.985 },
      {
        y: 0,
        scale: 1,
        duration: 0.55,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: item,
          start: 'top 86%',
          once: true,
          toggleClass: { targets: item, className: 'timeline-active' },
        },
      }
    );
  });
}
```

**Step 3: Add active marker styling**

```css
.portfolio-simplified .timeline-item.timeline-active .timeline-marker {
  box-shadow: 0 0 0 5px rgba(255, 0, 64, 0.12), 0 0 22px rgba(255, 0, 64, 0.28);
}
```

**Step 4: Browser validate**

Inspect `#experience`.

Expected:
- timeline line progresses with scroll;
- markers activate;
- content remains readable and stable.

**Step 5: Commit**

```powershell
git add -- script.js style.css
git commit -m "Add resume timeline scroll progress"
```

---

### Task 6: Project Card Motion And CTA Alignment

**Files:**
- Modify: `F:/PORTFOLIO-THIAGO/PORTFOLIO-THIAGO/style.css`
- Modify: `F:/PORTFOLIO-THIAGO/PORTFOLIO-THIAGO/script.js`
- Modify: `F:/PORTFOLIO-THIAGO/PORTFOLIO-THIAGO/index.html` if CTA copy still says "case study" where it should not.

**Step 1: Rename CTA copy if needed**

Search:

```powershell
rg -n "case study|Case study|View case study" index.html
```

Replace portfolio CTAs with a better label, for example:

```html
View project details
```

Expected: real work no longer reads like fake case studies.

**Step 2: Enforce project card layout stability**

Add:

```css
.portfolio-simplified .case-study-card .project-card-link {
  min-height: 100%;
}

.portfolio-simplified .case-study-card .project-content {
  display: flex;
  flex-direction: column;
}

.portfolio-simplified .case-study-card .project-tech {
  margin-top: auto;
}

.portfolio-simplified .case-study-cta {
  align-self: flex-start;
}
```

Expected: badges and CTA align consistently between cards.

**Step 3: Add image parallax**

In `setupProjectMotion()`:

```js
function setupProjectMotion() {
  gsap.utils.toArray('.simple-project-card').forEach((card) => {
    const image = card.querySelector('.project-media img');

    if (image) {
      gsap.fromTo(image,
        { yPercent: -4, scale: 1.06 },
        {
          yPercent: 4,
          scale: 1.08,
          ease: 'none',
          scrollTrigger: {
            trigger: card,
            start: 'top bottom',
            end: 'bottom top',
            scrub: 0.6,
          },
        }
      );
    }

    gsap.fromTo(card,
      { y: 22, scale: 0.985, '--card-line-progress': '0%' },
      {
        y: 0,
        scale: 1,
        '--card-line-progress': '22%',
        duration: 0.75,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: card,
          start: 'top 86%',
          once: true,
        },
      }
    );
  });
}
```

**Step 4: Add hover CTA motion**

Keep or add:

```css
.portfolio-simplified .case-study-cta {
  position: relative;
}

.portfolio-simplified .case-study-cta::after {
  content: "";
  position: absolute;
  left: 0;
  bottom: -4px;
  width: 100%;
  height: 1px;
  background: currentColor;
  transform: scaleX(0);
  transform-origin: left;
  transition: transform 320ms var(--ease-soft);
}

.portfolio-simplified .simple-project-card:hover .case-study-cta::after,
.portfolio-simplified .simple-project-card:focus-within .case-study-cta::after {
  transform: scaleX(1);
}
```

**Step 5: Validate badges**

Run the existing badge overflow setup and inspect cards.

Expected:
- badges stay one row;
- hidden badges collapse into `+`;
- no text overflows card boundary;
- CTA alignment is consistent.

**Step 6: Commit**

```powershell
git add -- index.html script.js style.css
git commit -m "Refine project card motion and layout"
```

---

### Task 7: Contact And Hero Restraint

**Files:**
- Modify: `F:/PORTFOLIO-THIAGO/PORTFOLIO-THIAGO/style.css`
- Modify: `F:/PORTFOLIO-THIAGO/PORTFOLIO-THIAGO/script.js`

**Step 1: Keep hero approved**

Do not move:
- hero image;
- main title block;
- location;
- CTA buttons;
- bottom mobile nav.

Only animate code line and small accents.

**Step 2: Implement hero code motion**

In `setupHeroMotion()`:

```js
function setupHeroMotion() {
  gsap.fromTo('.hero-code-line',
    { y: -8 },
    { y: 0, duration: 0.8, ease: 'power3.out' }
  );
}
```

CSS can keep the current code shimmer if it is subtle.

**Step 3: Implement contact motion**

In `setupContactMotion()`:

```js
function setupContactMotion() {
  const contact = document.querySelector('.contact-simple');
  if (!contact) return;

  gsap.fromTo(contact,
    { y: 18, scale: 0.99, '--card-line-progress': '0%' },
    {
      y: 0,
      scale: 1,
      '--card-line-progress': '24%',
      duration: 0.75,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: contact,
        start: 'top 86%',
        once: true,
      },
    }
  );
}
```

**Step 4: Validate copy button**

Click the copy icon in browser.

Expected:
- email remains visible;
- button turns into copied state;
- clipboard copy works;
- layout does not resize awkwardly.

**Step 5: Commit**

```powershell
git add -- script.js style.css
git commit -m "Polish hero and contact motion"
```

---

### Task 8: Reduced Motion And Performance Safety

**Files:**
- Modify: `F:/PORTFOLIO-THIAGO/PORTFOLIO-THIAGO/style.css`
- Modify: `F:/PORTFOLIO-THIAGO/PORTFOLIO-THIAGO/script.js`

**Step 1: Ensure JavaScript exits under reduced motion**

Confirm `setupMotionSystem()` returns early when `prefers-reduced-motion` is active.

Expected: no GSAP timelines are created in reduced motion mode.

**Step 2: Add CSS reduced-motion fallback**

```css
@media (prefers-reduced-motion: reduce) {
  .portfolio-simplified *,
  .portfolio-simplified *::before,
  .portfolio-simplified *::after {
    animation-duration: 0.001ms !important;
    animation-iteration-count: 1 !important;
    scroll-behavior: auto !important;
    transition-duration: 0.001ms !important;
  }

  .portfolio-simplified .capability-panel,
  .portfolio-simplified .simple-project-card,
  .portfolio-simplified .timeline-content,
  .portfolio-simplified .contact-simple {
    transform: none !important;
  }
}
```

**Step 3: Avoid expensive properties**

Verify motion does not animate:
- `height`;
- `width` except pseudo-element hairlines;
- `top/left`;
- large `filter: blur`;
- layout-changing grid/flex properties.

Expected: animations rely on transform, opacity only where minor, and CSS variables for lines.

**Step 4: Commit**

```powershell
git add -- script.js style.css
git commit -m "Add motion accessibility safeguards"
```

---

### Task 9: Automated Verification

**Files:**
- No intended changes.

**Step 1: Run portfolio validation**

```powershell
npm.cmd run test:portfolio
```

Expected: PASS.

**Step 2: Run production build**

```powershell
npm.cmd run build
```

Expected: PASS.

**Step 3: Inspect dependency impact**

```powershell
npm.cmd ls gsap
```

Expected: GSAP installed once.

---

### Task 10: Browser Verification

**Files:**
- No intended changes unless visual verification finds defects.

**Step 1: Open local site**

Run dev server if needed:

```powershell
npm.cmd run dev
```

Open:

```text
http://127.0.0.1:3000/
```

**Step 2: Validate mobile**

Viewport target: approximately `430x932`.

Check:
- hero code line centered;
- section headers draw bottom line only;
- capability cards have visible entry/line motion;
- timeline line progresses;
- project images move subtly on scroll;
- badges do not wrap;
- no horizontal scrollbar.

**Step 3: Validate desktop**

Viewport target: approximately `1365x768`.

Check:
- section gaps remain compact;
- project cards align;
- CTA labels align;
- hover/focus interactions are visible;
- no card text is clipped.

**Step 4: Check console**

Expected:
- no JavaScript errors;
- no missing asset errors;
- no GSAP/ScrollTrigger import errors.

---

### Task 11: Final Commit And PR

**Files:**
- Stage only intended files.

**Step 1: Review diff**

```powershell
git diff -- index.html script.js style.css package.json package-lock.json docs/plans/2026-05-30-premium-motion-design.md docs/plans/2026-05-30-premium-motion-implementation-plan.md
```

Expected: diff matches this plan. No unrelated changes.

**Step 2: Commit final adjustments if any**

```powershell
git add -- index.html script.js style.css package.json package-lock.json docs/plans/2026-05-30-premium-motion-design.md docs/plans/2026-05-30-premium-motion-implementation-plan.md
git commit -m "Add premium scroll motion system"
```

**Step 3: Push branch**

```powershell
git push -u origin codex/portfolio-simplification
```

**Step 4: Open PR**

Use `gh pr create` only if no open PR exists for the branch. If a PR already exists, update it instead of creating a duplicate.

Expected PR summary:

```markdown
## Summary
- add GSAP/ScrollTrigger motion system for section headers, capability cards, timeline, project cards, and contact
- keep hero layout stable while improving motion polish
- preserve reduced-motion accessibility and portfolio validation

## Tests
- npm.cmd run test:portfolio
- npm.cmd run build
```
