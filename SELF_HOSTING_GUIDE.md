# Waste2Resource Website - Self-Hosting Guide

This is a complete export of the Waste2Resource website built with React 19 + Tailwind CSS 4.

## Project Structure

```
client/
  public/          - Static assets (favicon, robots.txt)
  src/
    pages/         - Page components (Home, CaseStudies, Blog, BlogPost)
    components/    - Reusable UI components
    data/          - JSON data files (caseStudies.json, blogPosts.json)
    lib/           - Utility functions
    App.tsx        - Main app with routing
    index.css      - Global styles
    main.tsx       - React entry point
  index.html       - HTML template
package.json       - Dependencies and scripts
vite.config.ts     - Vite build configuration
```

## Prerequisites

- **Node.js** 18+ (download from https://nodejs.org/)
- **npm** or **pnpm** (comes with Node.js)
- A hosting platform account (Vercel, Netlify, GitHub Pages, etc.)

## Local Development

1. **Install dependencies:**
   ```bash
   npm install
   # or
   pnpm install
   ```

2. **Start development server:**
   ```bash
   npm run dev
   # or
   pnpm dev
   ```
   
   The site will be available at `http://localhost:5173`

3. **Build for production:**
   ```bash
   npm run build
   # or
   pnpm build
   ```
   
   This creates an optimized `dist/` folder ready for deployment.

## Deployment Options

### Option 1: Vercel (Recommended - Easiest)

1. Push your code to GitHub
2. Go to https://vercel.com
3. Click "New Project" and import your GitHub repository
4. Vercel auto-detects it's a Vite project
5. Click "Deploy"
6. Go to Settings → Domains and add `waste2resource.com.au`

**Pros:** Free tier, auto-deploys on git push, great performance  
**Time:** 5 minutes

### Option 2: Netlify

1. Push your code to GitHub
2. Go to https://netlify.com
3. Click "New site from Git" and connect GitHub
4. Build command: `npm run build`
5. Publish directory: `dist`
6. Click "Deploy"
7. Go to Domain settings and add `waste2resource.com.au`

**Pros:** Free tier, easy setup, good performance  
**Time:** 5 minutes

### Option 3: GitHub Pages (Free but Limited)

1. Push to GitHub
2. Go to repository Settings → Pages
3. Set source to "GitHub Actions"
4. Add your custom domain `waste2resource.com.au`

**Pros:** Completely free  
**Cons:** No server-side features, slower builds  
**Time:** 10 minutes

### Option 4: AWS, DigitalOcean, or VPS (Advanced)

For more control, you can:

1. Build locally: `npm run build`
2. Upload `dist/` folder to your server
3. Configure a web server (Nginx, Apache)
4. Point your domain to your server

**Pros:** Full control, scalable  
**Cons:** More complex setup  
**Time:** 30+ minutes

## Connecting Your Domain

After deploying, connect `waste2resource.com.au`:

1. **Get your hosting provider's nameservers** (from Vercel, Netlify, etc.)
2. **Go to your domain registrar** (GoDaddy, Namecheap, etc.)
3. **Update nameservers** to point to your hosting provider
4. **Wait 24-48 hours** for DNS propagation
5. **Verify** your domain is working

## Customization

### Update Contact Information
Edit `client/src/data/blogPosts.json` and footer components to update:
- Email address
- LinkedIn profile
- Phone number
- Social media links

### Modify Blog Posts
Edit `client/src/data/blogPosts.json` to add/edit blog posts

### Update Case Studies
Edit `client/src/data/caseStudies.json` to modify case study data

### Change Colors/Fonts
Edit `client/src/index.css` to customize the design

## Environment Variables

This site doesn't require environment variables for basic functionality. If you add backend features later, create a `.env.local` file:

```
VITE_API_URL=https://your-api.com
VITE_ANALYTICS_ID=your-analytics-id
```

## Performance Tips

- Images are optimized and loaded lazily
- CSS is minified and tree-shaken
- JavaScript is code-split by route
- Build size: ~200KB gzipped

## Troubleshooting

**"npm install" fails:**
- Clear cache: `npm cache clean --force`
- Delete `node_modules` and `package-lock.json`, then reinstall

**"npm run dev" doesn't work:**
- Make sure Node.js 18+ is installed: `node --version`
- Check port 5173 isn't already in use

**Domain not working after deployment:**
- DNS changes take 24-48 hours to propagate
- Check your domain registrar's nameserver settings
- Verify your hosting provider's domain settings

**Build fails:**
- Check for TypeScript errors: `npm run type-check`
- Clear `.vite-cache`: `rm -rf .vite-cache`
- Reinstall dependencies

## Support Resources

- **Vite docs:** https://vitejs.dev/
- **React docs:** https://react.dev/
- **Tailwind CSS:** https://tailwindcss.com/
- **Vercel docs:** https://vercel.com/docs
- **Netlify docs:** https://docs.netlify.com/

## License

This website and all content are yours to use. The code is built with open-source tools (React, Vite, Tailwind CSS).

---

**Questions?** Check the hosting provider's documentation or reach out to their support team.

Good luck with your self-hosted site! 🚀
