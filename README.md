# Tomáš Klepač - Personal Website (Next.js)

This project is a migration of the original static website to the modern **Next.js** framework.
It preserves the original design and functionality (1:1) while introducing a modern development environment based on React components.

## 🚀 Getting Started

### 1. Install Dependencies
If you are running the project for the first time, install the required packages:
```bash
npm install
```

### 2. Development Server
For local development with hot-reload:
```bash
npm run dev
```
The site will run at [http://localhost:3000](http://localhost:3000).

### 3. Build for Production
To generate static files for hosting:
```bash
npm run build
```
The resulting files will be in the **`out`** directory. Upload this directory to your hosting provider (via FTP).

---

## 📂 Project Structure

The website is built as a standard Next.js application using the "App Router".

### Main Directories

*   **`src/app`**: Contains all page logic.
    *   **`page.js`**: The main homepage (`index.html`). This is where sections are assembled.
    *   **`layout.js`**: The site wrapper. Contains `<html>`, `<body>`, and meta tags (SEO).
    *   **`globals.css`**: Main CSS file (originally `style.css`).
    *   **`components/`**: Directory containing individual site parts (components).

### Components (`src/app/components`)
Instead of one long file, the site is split into logical parts:
*   `Navbar.jsx` - Top navigation and mobile menu.
*   `Hero.jsx` - Intro section with photo.
*   `About.jsx` - "About Me" section.
*   `Services.jsx` - "What I Offer" section.
*   `Pricing.jsx` - Pricing list.
*   `Workflow.jsx` - Process workflow.
*   `Portfolio.jsx` - Work showcase.
*   `Contact.jsx` - Contact form/details.
*   `Footer.jsx` - Site footer.

### Static Files (`public`)
Everything publicly accessible:
*   **`assets/`** - Images, fonts, icons.
*   `Smluvni_podminky.pdf`
*   `robots.txt`
*   `sitemap.xml`

---

## 🛠 Technologies
*   **Next.js 15+** - Framework.
*   **React** - UI Library.
*   **CSS Modules / Global CSS** - Styling.

---

## 📝 Deployment Notes
The project is configured with `output: 'export'` (in `next.config.mjs`). This means `npm run build` generates pure HTML/CSS/JS that works on any standard hosting (Apache, Nginx) without needing a Node.js server.
