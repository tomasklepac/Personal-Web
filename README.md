# Tomáš Klepač - Personal Portfolio Website

A professional portfolio website built with **Next.js**.
Designed to showcase web development services, recent projects, and contact information with a modern, responsive, and performance-focused approach.

## 🚀 Getting Started

### 1. Install Dependencies
To set up the project locally, install the required packages:
```bash
npm install
```

### 2. Development Server
Start the local development server with hot-reload:
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) to view the site.

### 3. Build for Production
To generate the static files for hosting:
```bash
npm run build
```
The output will be generated in the **`out`** directory. This directory contains the complete static website ready for deployment.

---

## 📂 Project Architecture

The project uses the **Next.js App Router** structure.

### Key Directories

*   **`src/app`**: Core application logic.
    *   **`page.js`**: The main landing page assembling all sections.
    *   **`layout.js`**: Root layout containing `<html>`, `<body>`, and SEO metadata.
    *   **`components/`**: Modular UI components (Navbar, Hero, Services, Portfolio, etc.).
    *   **`globals.css`**: Global styles and theme definitions.

### Static Assets (`public`)
Contains all publicly accessible files:
*   **`assets/`**: Images, fonts, and icons.
*   **`Smluvni_podminky.pdf`**: Terms and conditions document.
*   **`robots.txt`** & **`sitemap.xml`**: SEO configuration files.

---

## 🛠 Tech Stack
*   **Framework**: Next.js 15+ (App Router)
*   **UI Library**: React
*   **Styling**: CSS Modules / Global CSS
*   **Deployment**: Static Site Generation (SSG) via `output: 'export'`

---

## 📝 Deployment
This project is configured for **Static Export**.
Running `npm run build` produces a static HTML/CSS/JS version of the site in the `out` folder. This folder can be hosted on any standard web server (Apache, Nginx, GitHub Pages) without requiring a Node.js runtime.
