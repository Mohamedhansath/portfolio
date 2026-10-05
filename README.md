# H Mohamed Hansath — Jarvis-style React Portfolio

A lightweight, responsive React + Vite portfolio with a futuristic HUD / glassmorphism visual language.

## Requirements

- Node.js 18+ recommended
- npm

## Run locally

```bash
npm install
npm run dev
```

Open the local Vite URL shown in the terminal.

## Production build

```bash
npm run build
npm run preview
```

## Project structure

```text
Mohamed_Hansath_Jarvis_Portfolio/
├── public/
│   ├── profile.jpg
│   ├── Mohamed_Hansath_Resume.pdf
│   ├── projects/
│   │   ├── car-rental.jpg
│   │   └── gym-management.jpg
│   └── certificates/
│       ├── full-stack-internship.jpg
│       ├── python-mysql-firebase-fastapi-github-aws.jpg
│       └── html-css-bootstrap-javascript-react-js.jpg
├── src/
│   ├── components/
│   │   ├── GlassCard.jsx
│   │   ├── Icon.jsx
│   │   ├── Reveal.jsx
│   │   └── SectionHeading.jsx
│   ├── App.jsx
│   ├── data.js
│   ├── main.jsx
│   └── styles.css
├── index.html
├── package.json
└── README.md
```

## Performance choices

- No animation libraries
- No canvas/WebGL
- No video backgrounds
- No icon package
- CSS transforms/opacity for motion
- IntersectionObserver for reveal animations
- Responsive CSS breakpoints
- `prefers-reduced-motion` support
- Minimal React state
- Static portfolio content kept in `src/data.js`

## Before deployment

The resume button downloads `public/Mohamed_Hansath_Resume.pdf`. The Projects section uses the supplied project screenshots, and the Certifications section displays three separate certificate previews with an in-page modal.

The external Google Fonts import can also be removed for a fully self-contained/offline build; the CSS already has system fallbacks.
