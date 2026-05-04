# AMNT — Luxury Leather Goods Website

## Deploying to Vercel

### Option 1: Vercel CLI (Fastest)
```bash
npm install -g vercel
cd amnt-vercel
npm install
vercel
```
Follow the prompts. Your site will be live in ~60 seconds.

### Option 2: Vercel Dashboard (GitHub)
1. Push this folder to a GitHub repository
2. Go to [vercel.com](https://vercel.com) → New Project
3. Import your repository
4. Leave all settings as default — Vercel auto-detects Next.js
5. Click **Deploy**

### Option 3: Local Development
```bash
npm install
npm run dev
```
Open [http://localhost:3000](http://localhost:3000)

## Tech Stack
- **Next.js 14** (App Router)
- **TypeScript**
- **Tailwind CSS**
- No external animation libraries — pure CSS transitions

## Project Structure
```
src/
  app/
    layout.tsx     # Root layout + fonts
    page.tsx       # Main page assembly
    globals.css    # All styles + animations
  components/
    Navbar.tsx         # Fixed navbar + mobile menu
    Hero.tsx           # Quadrant hero
    MarqueeStrip.tsx   # Brand ticker
    EditorialIntro.tsx # About section
    ProductFeature.tsx # Product showcase (all 3 products)
    ImageRow.tsx       # Expandable image strip
    CraftSection.tsx   # Process steps
    PhotoGrid.tsx      # Archive grid
    Testimonial.tsx    # Quote section
    Footer.tsx         # Footer + Pratik Studios credit
    CursorDot.tsx      # Custom cursor (desktop only)
    PageLoader.tsx     # Intro loader
    CartToast.tsx      # Add to bag notification
  hooks/
    useReveal.ts   # Scroll-triggered reveal animations
public/
  images/
    weekender/     # Nomad Weekender photos
    messenger/     # Envoy Messenger photos
    wallet/        # Two Tone Wallet photos
```

## Crafted by Pratik Studios
