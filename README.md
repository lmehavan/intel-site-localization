# Intel Website Localization

An accessible, responsive update to the Intel Sustainability Timeline created for Project 3.

## Project features

- English and Arabic content with left-to-right and right-to-left layouts
- Automatic layout direction updates when the document language changes
- Locally stored Bootstrap 5 grid, buttons, accordion, form styles, and icons
- Responsive three-column sustainability section
- Accessible newsletter demonstration form with labels, validation, and status messages
- Interactive Bootstrap accordion and semantic story dialogs
- Descriptive image text, keyboard support, visible focus indicators, and reduced-motion support
- Nine sustainability and technology milestones with links to Intel sources

The newsletter form is intentionally a classroom demonstration. It validates input in the browser and does not send or store personal information.

## Accessibility

Fresh Lighthouse 12.8.2 audits on September 7, 2026 scored 100 for accessibility in English and Arabic, on both desktop and mobile. These are automated audit results, not a guarantee of accessibility or a claim of screen-reader user testing.

Automated Chrome checks cover keyboard skip navigation, all nine story dialogs, Escape/close-button/backdrop closing, focus restoration, accordion Enter/Space controls, empty and malformed email errors, required consent, demo success, language persistence, and automatic direction changes. Responsive checks include 320, 390, 768, 992, and 1440 CSS-pixel widths. The final review corrected mobile newsletter gutter overflow and preserved the Intel wordmark's left-to-right letter and dot order within the Arabic layout.

The nine original milestone images and existing responsive timeline are preserved.

## Viewing the site

- Live website: https://lmehavan.github.io/intel-site-localization/
- English: https://lmehavan.github.io/intel-site-localization/?lang=en
- Arabic: https://lmehavan.github.io/intel-site-localization/?lang=ar

Use the language selector at the top of the page to switch between English and Arabic. With no URL or saved preference, the browser's language selects Arabic when appropriate. JavaScript watches language changes and switches the page direction and local Bootstrap stylesheet automatically.

For local viewing, run `python3 -m http.server 8000` from this folder and open `http://localhost:8000/`.

## GitHub Pages

This repository publishes from `main` and `/(root)` using **Settings > Pages > Deploy from a branch**. `.nojekyll` lets GitHub serve the existing static files directly. Changes should be pushed to `origin` (`lmehavan/intel-site-localization`); the original `intel-sustainability-timeline` repository is not the publishing target.

This is an independent student project and is not an official Intel website.
