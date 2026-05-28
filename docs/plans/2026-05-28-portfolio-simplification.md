# Portfolio Simplification Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Simplify the portfolio into a focused, photo-led engineering portfolio with less visual noise and fewer interaction surfaces.

**Architecture:** Keep the current static HTML/CSS/JavaScript setup. Reuse the existing hero and visual identity, then remove or simplify sections and scripts that create excess interaction, page length, and template-like presentation.

**Tech Stack:** HTML, CSS, vanilla JavaScript, Vite, Coolify/Nixpacks deployment.

---

### Task 1: Simplify The Navigation

**Files:**
- Modify: `index.html`
- Modify: `script.js`
- Modify: `style.css`

**Step 1: Update desktop nav links**

In `index.html`, change the primary nav to only include:
- Home
- Stack
- Projects
- Experience
- Contact

Remove Blog and About Me from the top-level navigation.

**Step 2: Update mobile nav**

Replace the current seven-item mobile nav with either:
- Home
- Stack
- Projects
- Contact

or remove the bottom nav entirely if desktop nav remains readable enough on mobile.

**Step 3: Update section tracking**

In `script.js`, update the `sections` array to match the remaining primary sections.

**Step 4: Verify**

Run:

```bash
npm run build
```

Expected: build completes successfully.

---

### Task 2: Preserve And Calm The Hero

**Files:**
- Modify: `index.html`
- Modify: `style.css`
- Modify: `script.js`

**Step 1: Keep the photo-based hero**

Keep the current background image and dark overlay.

**Step 2: Replace mobile typing**

Use a fixed subtitle on mobile instead of the typing animation. The text should communicate:

```txt
Backend Developer & Automation Specialist
```

**Step 3: Reduce visual motion**

Reduce particle count and remove unnecessary glow effects that compete with the portrait.

**Step 4: Simplify CTAs**

Keep one primary CTA for contact. Make the resume action secondary.

**Step 5: Verify**

Run:

```bash
npm run build
```

Then inspect desktop and mobile locally.

---

### Task 3: Reorder And Shorten The Home Page

**Files:**
- Modify: `index.html`
- Modify: `style.css`

**Step 1: Reorder sections**

Use this order:

1. Hero
2. Stack / specialties
3. Selected projects
4. Experience summary
5. Certification
6. Contact

**Step 2: Shorten About**

Either remove the standalone About section or merge it into the hero/intro area as a short paragraph.

**Step 3: Verify page length**

Use browser inspection to compare page height before and after. The mobile page should be materially shorter than the current roughly 10,000px page.

---

### Task 4: Replace Long Timeline With Compact Experience

**Files:**
- Modify: `index.html`
- Modify: `style.css`

**Step 1: Remove timeline-heavy visual treatment**

Replace the vertical timeline with compact rows/cards.

**Step 2: Limit visible content**

Show only the most relevant experiences on the home page, with two bullets each.

**Step 3: Keep full resume external**

Use the resume link for the complete career detail.

**Step 4: Verify**

Run:

```bash
npm run build
```

Expected: build passes and the experience section is significantly shorter.

---

### Task 5: Simplify Projects

**Files:**
- Modify: `index.html`
- Modify: `style.css`
- Modify: `script.js`

**Step 1: Reduce to selected projects**

Keep three project cards maximum.

**Step 2: Remove filters**

Delete the filter buttons and related filtering UI.

**Step 3: Remove card carousels**

Use one static image or a simple visual block per project.

**Step 4: Disable modal/detail behavior**

Remove or bypass the modal/detail code unless a project has a real case study.

**Step 5: Verify**

Run:

```bash
npm run build
```

Expected: project section renders without filters, carousel controls, or modal-only content.

---

### Task 6: Simplify Contact

**Files:**
- Modify: `index.html`
- Modify: `style.css`
- Modify: `script.js`

**Step 1: Remove simulated form**

Remove the current contact form unless it is connected to a real service.

**Step 2: Add compact contact links**

Add clear links for:
- Email
- LinkedIn
- GitHub
- Optional WhatsApp or calendar

**Step 3: Remove unused form JavaScript**

Delete or disable `setupContactForm`, validation helpers, and simulated success notification if no form remains.

**Step 4: Verify**

Run:

```bash
npm run build
```

Expected: no JavaScript errors from missing form elements.

---

### Task 7: Final Visual Verification

**Files:**
- Verify: `index.html`
- Verify: `style.css`
- Verify: `script.js`

**Step 1: Build**

Run:

```bash
npm run build
```

Expected: build passes.

**Step 2: Serve production build**

Run:

```bash
npm run start
```

Expected: server starts on port 3000 locally, or the configured deployment port in Coolify.

**Step 3: Inspect desktop**

Open the site at desktop width and verify:
- Hero remains strong.
- Projects appear before the page feels long.
- CTAs are not excessive.

**Step 4: Inspect mobile**

Open the site at mobile width and verify:
- Hero text is not cut by typing animation.
- Navigation is not crowded.
- Page length is substantially shorter.

**Step 5: Commit**

Commit the completed simplification separately from deployment configuration changes.
