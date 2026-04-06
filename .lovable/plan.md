

# SUNRISE Marketing Website — Final Plan

## Summary
Build a 4-page marketing site (Home, Products, About, Contact) for SUNRISE hemp-infused THC seltzers using the brand's exact design system extracted from the uploaded guides, pitch deck, and live site analysis.

## Design System

**Colors:**
- Background cream: `#FEFBE0`
- Gold accent: `#C4922A`
- Near black text: `#1A1A1A`
- Tier 5mg: `#DC7F27` (orange)
- Tier 10mg: `#CC1F39` (red)
- Tier 30mg: `#0A6034` (green)
- Tier 60mg: `#2E1E3D` (purple)
- Wordmark gradient: purple→magenta→red→orange

**Typography:** Montserrat via Google Fonts (300–900 weights). Uppercase headings with wide letter-spacing. Ms Madi for decorative "Lemonade/Limeade" script accents.

**Assets:** Uploaded gradient logo and tagline PNGs copied to `src/assets/`. Can images use styled placeholder boxes with tier colors.

## Pages

### 1. Home (`/`)
- Hero: gradient logo, tagline "REFRESH THE WAY THE WORLD DRINKS", CTA button
- Value props triad: Flavor / Consistency / Transparency — gold-accented cards
- Tier preview: 4 colored cards (5mg/10mg/30mg/60mg) with taglines, link to Products
- Product attributes strip: All Natural, Vegan, Gluten Free, Zero Alcohol, Vitamin B12
- CTA banner to Products

### 2. Products (`/products`)
- 4 tier sections, each with colored header band, potency lockup, tagline, descriptor triad
- 6-flavor grid per tier with color swatches, names, descriptors
- Placeholder boxes where can photography would go
- 60mg tier includes cannabinoid variant callouts (CBG/CBN/THCV)

### 3. About (`/about`)
- "Born in the Heart of America" — Route 66 origin story
- Family-owned, formulated in-house, produced in USA
- Brand values: premium beverage-first positioning
- "What's Inside" ingredients/attributes section

### 4. Contact (`/contact`)
- Contact form (name, email, message) with gold submit button
- "Give us a buzz" heading
- Social links placeholder, store locator placeholder

## Shared Components
- **Navbar:** Sticky, cream bg, logo left, nav links right, mobile hamburger via Sheet
- **Footer:** Dark bg, logo, tagline, nav links, social placeholders, copyright

## Files to Create/Modify

| File | Action |
|------|--------|
| `src/index.css` | Update CSS vars to SUNRISE palette, add Google Fonts import |
| `src/lib/brandData.ts` | Centralized tier/flavor/color/copy data |
| `src/components/Navbar.tsx` | Sticky nav with logo + mobile menu |
| `src/components/Footer.tsx` | Site footer |
| `src/pages/Index.tsx` | Home page |
| `src/pages/Products.tsx` | Products page |
| `src/pages/About.tsx` | About page |
| `src/pages/Contact.tsx` | Contact page |
| `src/App.tsx` | Add routes for `/products`, `/about`, `/contact` |
| `src/assets/` | Copy logo + tagline PNGs |

## Responsive
Mobile-first. Grids collapse 4→2→1 col. Nav becomes hamburger. All pages scroll naturally.

## Copy Voice
All copy follows brand voice: warm, confident, sensory-precise, beverage-first framing. No cannabis-culture language, no health claims. SUNRISE always all-caps. TM on first use per page.

