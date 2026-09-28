# Shikha Gheyee — Lead Technical Writer Portfolio

A sleek, modern, executive portfolio website crafted specifically for **Shikha Gheyee** (Lead Technical Writer & Information Architect).

Designed to be hosted with **1-click / zero-config on GitHub Pages** or custom domains.

---

## 🌟 Highlights & Features

- **Executive & Developer-Grade Aesthetic**: Dark mode by default with seamless Light Mode toggle, ambient glows, glassmorphism, and responsive typography (`Plus Jakarta Sans` & `JetBrains Mono`).
- **Rich Technical Case Studies**:
  - **API Reference & SDK Design**: Interactive REST endpoint explorer with sample JSON payload & response schemas.
  - **AI-Native & Agentic Architecture**: Semantic chunking & prompt engineering workflow breakdown.
  - **UI Microcopy System**: Real before/after microcopy design system showcase (18,000+ strings standard).
  - **Enterprise CMS Migration**: 3-step migration blueprint (MadCap Flare to Document360 / Paligo).
- **Hard-Hitting Impact Metrics**: Highlight counters showcasing ~9 years of experience, 200+ release notes, 18,000+ UI strings, and 33% engineering onboarding acceleration.
- **Full Career Trajectory**: Detailed breakdown of positions at **Darwinbox**, **Amazon Development Center**, **Planful**, and **Kony (Temenos)**.
- **Education & Honors**: Highlights **IIM Tiruchirappalli** (PG Certificate in Executive General Management) & **KMIT/JNTU** (B.Tech in Computer Science Engineering), alongside Planful 2022 Awards.
- **Executive PDF / Print Ready**: Includes a specialized `@media print` stylesheet. Pressing `Cmd + P` or clicking "Print / PDF" formats the page into a crisp, corporate 2-page resume.
- **Zero Build Tools Needed**: Pure semantic HTML5, CSS3, and vanilla JS with Lucide Icons. Works instantly when pushed to GitHub.

---

## 🚀 How to Publish to GitHub Pages (2 Minutes)

### Method 1: Host as your primary GitHub site (`https://<username>.github.io`)

1. Create a new public repository on GitHub named:
   ```text
   <your-github-username>.github.io
   ```
   *(For example, if your username is `shikha-gheyee`, name it `shikha-gheyee.github.io`)*

2. In your terminal, navigate into this folder and push the code:
   ```bash
   cd shikha-portfolio
   git init
   git add .
   git commit -m "Initial release of Shikha Gheyee portfolio"
   git branch -M main
   git remote add origin https://github.com/<your-github-username>/<your-github-username>.github.io.git
   git push -u origin main
   ```

3. Your website will be live automatically within 60 seconds at:
   ```text
   https://<your-github-username>.github.io
   ```

---

### Method 2: Host as a project repository (e.g., `https://<username>.github.io/portfolio`)

1. Create a repository named `portfolio` on GitHub.
2. Push this folder to that repository.
3. In GitHub, go to **Settings** > **Pages** > Under **Build and deployment**, set Source to **Deploy from a branch** (`main` / `/root`).
4. Click **Save**. Your site is now live!

---

### Method 3: Drag & Drop via GitHub Web UI (No Git commands required)

1. Create a new repository on [github.com/new](https://github.com/new).
2. Click **"uploading an existing file"**.
3. Drag `index.html`, `styles.css`, `script.js`, and `README.md` into GitHub.
4. Go to **Settings** > **Pages**, enable GitHub Pages on `main` branch, and click **Save**.

---

## 🛠 Local Preview

To test locally right now:

```bash
# Option A: Python simple server
cd shikha-portfolio
python3 -m http.server 8000
# Open http://localhost:8000 in your browser

# Option B: Direct browser open
open index.html   # On macOS
```

---

## 🎨 Customizing Links & Profiles

Open `index.html` and search for:
- `shikha.gheyee@gmail.com` to update email.
- `+91-8500273942` to update phone number.
- Add your LinkedIn or GitHub profile link by adding an `<a>` tag in the `#hero` or `#contact` section.
