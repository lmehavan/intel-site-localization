# Intel Sustainability Timeline

A fact-checked interactive timeline showcasing Intel's journey through innovation, environmental responsibility, and sustainability commitments from 1968 to 2024.

## Project Overview

This website presents nine key milestones in Intel's history and sustainability efforts through an elegant, responsive design. Each milestone card displays a preview on hover/focus and opens a detailed modal dialog when "Open Full Story" is clicked. All content is verified against official Intel sources.

## Features

### Core Rubric Requirements

- **Horizontal Scrolling Timeline (Desktop)**: On screens wider than 800px, milestone cards display in a horizontally scrollable timeline with CSS scroll snapping (`scroll-snap-type: x mandatory` and `scroll-snap-align: start`).
- **Vertical Stacking (Mobile)**: On screens 800px or below, cards stack vertically with `flex-direction: column`.
- **Responsive Cards**: Cards maintain consistent 350–400px widths on desktop and adapt to full viewport width on mobile.
- **Preview Reveal**: Hovering or keyboard-focusing on a card reveals a one- or two-sentence preview.
- **Modal Dialogs**: Clicking "Open Full Story" opens a semantic `<dialog>` element populated with the full fact-checked story, image, year, title, and official source link.
- **Accessibility**: Modal includes proper `aria-labelledby`, `aria-describedby`, keyboard navigation (Escape to close), backdrop click to close, and focus restoration.
- **Animations**: CSS transitions, transforms, scale effects, and hover shadows on cards and buttons.
- **Scroll Snapping**: Desktop timeline uses scroll snapping for smooth, predictable scrolling.
- **Timeline Controls**: Left and right arrow buttons scroll the desktop timeline smoothly.
- **Alt Text**: Every image includes meaningful alt text for screen readers.
- **No Horizontal Overflow**: Page-level horizontal scrolling prevented using proper layout techniques.
- **Focus Indicators**: Visible focus outlines on all interactive elements.
- **Reduced Motion**: Respects `prefers-reduced-motion` media query.
- **Semantic HTML**: Uses `<dialog>` for modals, `<article>` for cards, `<section>` for content blocks.
- **Touch-Friendly Buttons**: All buttons are large enough for mobile interaction.

## Content

### Nine Milestones (Fact-Checked)

1. **1968 — Intel is founded**
2. **1971 — The Intel 4004**
3. **1978 — The 8086 arrives**
4. **1985 — Raising the bar with the 386**
5. **2006 — Energy-efficient performance**
6. **2020 — The RISE strategy**
7. **2022 — Net-zero operations by 2040**
8. **2023 — 99% renewable electricity**
9. **2024 — Intel Sustainability Summit**

All story content has been verified against Intel's official history, newsroom, and corporate responsibility reports. Links to official sources are displayed in each milestone's modal dialog and listed on the website.

## Technology

- **HTML5**: Semantic markup with proper accessibility attributes
- **CSS3**: Flexbox layout, scroll snapping, responsive design, transitions, and animations
- **Vanilla JavaScript**: Modal interactions, timeline scrolling, and accessibility features
- **No Frameworks or Build Tools**: Fully compatible with GitHub Pages using relative file paths

## Viewing the Website

### Local Viewing

Simply open `index.html` in any modern web browser. The website works on macOS, Windows, and Linux, including Safari.

```bash
open index.html
```

### GitHub Pages

Push this repository to GitHub and enable GitHub Pages in the repository settings. The site will be accessible at:
```
https://username.github.io/intel-sustainability-timeline/
```

## File Structure

```
intel-sustainability-timeline/
├── index.html          # Main page with HTML structure
├── style.css           # Responsive styling and animations
├── script.js           # Modal, timeline, and accessibility functionality
├── img/                # Nine milestone images
│   ├── milestone-1968.jpg
│   ├── milestone-1971.jpg
│   ├── milestone-1978.jpg
│   ├── milestone-1985.jpg
│   ├── milestone-2006.jpg
│   ├── milestone-2020.jpg
│   ├── milestone-2022.jpg
│   ├── milestone-2023.jpg
│   └── milestone-2024.jpg
├── README.md           # This file
└── .git/               # Git repository metadata
```

## Verified Sources

All milestone information has been checked against these official Intel resources:

- Intel's Founding
- The Intel 4004
- The Intel 8086 and the IBM PC
- Raising the Bar with the 386
- Intel 2006 Corporate Responsibility Report
- Intel 2019–2020 Corporate Responsibility Report
- Intel's Net-Zero Operations Commitment
- Top Takeaways from Intel's Corporate Responsibility Report
- Aligning Sustainability Across the Semiconductor Value Chain

Complete links are available on the "Verified Sources" section of the website.

## Credits

Designed and built by Luka Mzhavanadze for the Intel Sustainability Timeline project.

## License

This project presents factual information sourced from Intel's official publications. The design and implementation are original student work.

---

**Note**: This is an independent educational project. Intel has not sponsored or endorsed this student project. All content is fact-checked and attributed to official Intel sources.
