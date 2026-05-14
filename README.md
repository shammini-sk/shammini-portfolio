# Shammini SK – Developer Portfolio

A modern, recruiter-focused developer portfolio built with **React + Vite + Tailwind CSS**.

## ✨ Features

- 🌑 Premium dark theme with glassmorphism UI
- 🎞️ Particle canvas hero with animated gradient orbs
- ✍️ Typewriter animation cycling through roles
- 📊 Animated skill progress bars (scroll-triggered)
- 🃏 Interactive project cards with detail modals
- 🏗️ Architecture / workflow diagrams per project
- 🔄 Scroll-reveal animations throughout
- 📱 Fully responsive (mobile → 4K)
- 🚀 Deployment-ready for Vercel / Netlify

---

## 📁 Folder Structure

```
shammini-portfolio/
├── public/
│   ├── favicon.svg
│   └── Shammini_SK_Resume.pdf      ← Drop your resume PDF here
├── src/
│   ├── components/
│   │   ├── Navbar.jsx              – Sticky nav with active section highlight
│   │   ├── Footer.jsx              – Footer with social links
│   │   └── ProjectModal.jsx        – Full-screen project detail popup
│   ├── sections/
│   │   ├── Hero.jsx                – Particle canvas + typewriter hero
│   │   ├── About.jsx               – Bio + education timeline
│   │   ├── Skills.jsx              – Animated skill cards + bars
│   │   ├── Projects.jsx            – Project cards + architecture strip
│   │   ├── Internship.jsx          – TVS industry internship
│   │   ├── Achievements.jsx        – SIH + NPTEL + timeline
│   │   └── Contact.jsx             – Contact form + social links
│   ├── hooks/
│   │   ├── useScrollReveal.js      – IntersectionObserver reveal hook
│   │   └── useTypewriter.js        – Typewriter animation hook
│   ├── utils/
│   │   └── data.js                 – ✏️ ALL content lives here
│   ├── App.jsx                     – Root layout
│   ├── main.jsx                    – Entry point
│   └── index.css                   – Global styles + design tokens
├── index.html
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
├── vercel.json                     – SPA rewrite rules for Vercel
└── package.json
```

---

## 🚀 Getting Started

### Prerequisites
- **Node.js 18+** — [nodejs.org](https://nodejs.org)
- npm (comes with Node)

### Install & Run

```bash
# 1. Install dependencies
npm install

# 2. Start development server (hot-reload)
npm run dev
# → Opens at http://localhost:5173

# 3. Build for production
npm run build

# 4. Preview production build locally
npm run preview
```

---

## 📦 Deployment

### ▲ Vercel (Recommended – Free)

1. Push this folder to a **GitHub repository**
2. Go to [vercel.com](https://vercel.com) → **New Project**
3. Import your GitHub repo
4. Settings:
   - Framework preset: **Vite**
   - Build command: `npm run build`
   - Output directory: `dist`
5. Click **Deploy** ✅

> The `vercel.json` file already handles SPA routing.

### Netlify

```bash
npm run build
# Drag the dist/ folder to https://app.netlify.com/drop
```

### GitHub Pages

```bash
npm install -D gh-pages
# Add to package.json: "homepage": "https://<user>.github.io/<repo>"
# Add script: "deploy": "gh-pages -d dist"
npm run build && npm run deploy
```

---

## 🎨 Customization Guide

### Updating Content
All portfolio content is in **`src/utils/data.js`** — one file to rule them all.

| Section | What to edit |
|---|---|
| Name, email, social links | `meta` object |
| Typewriter roles | `typewriterWords` array |
| Education | `education` array |
| Skill categories & levels | `skills` array |
| Projects | `projects` array |
| Internship details | `internship` object |
| Achievements | `achievements` array |

### Adding Your Resume
Place your PDF at `public/Shammini_SK_Resume.pdf`. The download button and contact section both reference this path.

### Adding Project Screenshots
In `src/components/ProjectModal.jsx`, find the **Preview** section and replace the placeholder div with:
```jsx
<img src="/screenshots/project-name.png" alt="Project preview" className="w-full h-full object-cover" />
```
Place images in `public/screenshots/`.

### Adding a Live Demo Link
In `src/utils/data.js`, set `demo: 'https://your-demo-url.com'` on any project object.

### Changing the GitHub URL
Update `github` in the `meta` object in `data.js`.

---

## 🛠 Tech Stack

| Technology | Version | Purpose |
|---|---|---|
| React | 18 | UI framework |
| Vite | 5 | Build tool & dev server |
| Tailwind CSS | 3 | Utility-first styling |
| Syne | – | Display / heading font |
| DM Sans | – | Body font |
| JetBrains Mono | – | Code / monospace font |
| react-icons | 5 | Icon library |

---

## 🧩 Key Design Decisions

- **Glassmorphism**: `backdrop-filter: blur` cards with semi-transparent backgrounds and azure border accents
- **Color system**: `#020817` deep navy base · `#0ea5e9` azure accent · `#38bdf8` azure highlight
- **Animations**: CSS-only scroll reveal (IntersectionObserver) + Canvas 2D particle system
- **Performance**: No heavy animation libraries — custom hooks + CSS transitions keep bundle < 200 KB

---

## 📝 License

MIT — feel free to use this as a template and make it your own.

---

Built with ❤️ for Shammini SK's recruiter-facing portfolio.
