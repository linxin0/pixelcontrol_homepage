# PixelControl — Project Page

Static project website for *PixelControl: Fine-Grained Condition Fidelity in Text-to-Image Diffusion*.
Plain HTML/CSS/JS — no build step needed.

```
index.html          # the page
assets/             # css, js, and diagram figures
images/             # comparison / supplementary figures
.nojekyll           # tells GitHub Pages to serve files as-is
```

Preview locally by double-clicking `index.html`.

## Deploy to GitHub Pages (≈2 minutes)

### Option A — via the GitHub website (no command line)

1. Go to https://github.com/new and create a **public** repo, e.g. `pixelcontrol`.
2. On the new repo page click **uploading an existing file**, then drag in
   **everything inside this folder** (`index.html`, the `assets/` and `images/`
   folders, and `.nojekyll`). Commit.
3. Go to **Settings → Pages**. Under *Build and deployment*, set
   **Source = Deploy from a branch**, **Branch = `main` / `root`**, Save.
4. Wait ~1 minute. Your page will be live at
   `https://<your-username>.github.io/pixelcontrol/`.

### Option B — via git command line

Run these inside this folder (replace `<your-username>`):

```bash
git init
git add .
git commit -m "PixelControl project page"
git branch -M main
git remote add origin https://github.com/<your-username>/pixelcontrol.git
git push -u origin main
```

Then do step 3 above (Settings → Pages) to turn Pages on.

## Notes

- To publish at `https://<your-username>.github.io/` instead of a sub-path,
  name the repo `<your-username>.github.io`.
- When the code is ready, replace the disabled **Code (Coming Soon)** button in
  `index.html` with a real link (search for `Code (Coming Soon)`).
- Add an arXiv link the same way (the **Paper** button currently points to `camera.tex`).
