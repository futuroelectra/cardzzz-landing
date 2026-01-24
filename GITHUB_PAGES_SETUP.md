# GitHub Pages Setup Instructions

## The Problem
GitHub Pages was serving the raw source files instead of the built output. The HTML file contained `/src/main.jsx` which doesn't exist in production - it needs the built JavaScript bundle.

## The Solution
A GitHub Actions workflow has been created to automatically build and deploy your site.

## Setup Steps

### 1. Enable GitHub Pages in Repository Settings

1. Go to your repository: https://github.com/futuroelectra/cardzzz-landing
2. Click **Settings** → **Pages** (in the left sidebar)
3. Under **Source**, select **GitHub Actions** (not "Deploy from a branch")
4. Save the settings

### 2. Push the Workflow File

The workflow file (`.github/workflows/deploy.yml`) has been created. After you push it:

1. The workflow will automatically run on every push to `main`
2. It will:
   - Install dependencies
   - Build the project (`npm run build`)
   - Copy the CNAME file to the dist folder
   - Deploy the `dist/` folder to GitHub Pages

### 3. Verify Deployment

1. After pushing, go to **Actions** tab in your repository
2. You should see a workflow run called "Deploy to GitHub Pages"
3. Wait for it to complete (usually 1-2 minutes)
4. Your site should be live at cardzzz.com

## How It Works

- **Development**: `npm run dev` - Uses source files with `/src/main.jsx`
- **Production**: GitHub Actions builds the project, creating optimized bundles in `dist/`
- **Deployment**: The built `dist/` folder is deployed to GitHub Pages

## Troubleshooting

If the site is still white after deployment:

1. Check the **Actions** tab for any build errors
2. Verify GitHub Pages is set to use **GitHub Actions** (not a branch)
3. Check that the CNAME file is in the repository root
4. Wait a few minutes for DNS propagation

## Manual Build (Alternative)

If you prefer to build manually:

```bash
npm run build
# Then push the dist folder to a gh-pages branch
```

But the GitHub Actions method is recommended as it's automatic.
