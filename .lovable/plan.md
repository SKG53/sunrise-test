
# SUNRISE Website Overhaul Plan

## Goal
Rebuild the current SUNRISE marketing site to closely recreate the attached `sunrise_wireframe.html`, guided by the uploaded Brand Principles, Website Design Principles, and color-code spreadsheet.

The new site will become a warm, cream-based, editorial product experience with bold tier-color moments, cleaner navigation, richer product discovery, an age gate, and an added “Near You” page.

## What will be built

### 1. Global brand system refresh
- Keep Montserrat as the core typeface and ensure Google Fonts loads weights `300, 400, 500, 600, 700, 800, 900`.
- Preserve the existing rendered SUNRISE wordmark logic, but add a cream-on-color variant for saturated sections.
- Preserve the potency lockup rendering pattern, updating tier defaults to the spreadsheet/wireframe values:
  - 5mg: `#DC7F27`
  - 10mg: `#CC1F39`
  - 30mg: `#0A6034`
  - 60mg: `#2E1E3D`
- Add a reusable `12 OUNCE CAN` stat lockup from the wireframe’s render function.
- Update global CSS variables for cream, near-black, warm grays, gold, tier colors, cannabinoid colors, and flavor colors.
- Add reusable section styles for:
  - large typographic hero sections
  - cream editorial sections
  - saturated color panels
  - dashed warm divider lines
  - rounded pill buttons
  - ingredient rows
  - ticker/marquee bands
  - path-to-purchase bands
  - warm placeholder/image slots until can mockups are uploaded

### 2. Navigation and footer rebuild
- Update the nav to match the wireframe:
  - links: Home, Products, About, Near You, Contact
  - right-side CTAs: COAs and Shop
  - sticky top behavior
  - cream top state, with a near-black scrolled state if practical
  - mobile sheet menu including all links and CTAs
- Rebuild footer to match the wireframe:
  - SUNRISE wordmark
  - tagline
  - newsletter input placeholder
  - Shop links by tier
  - Brand links
  - Legal links
  - 21+ and hemp-derived THC compliance copy

### 3. Data model overhaul
Replace the current placeholder product data with a more complete data structure based on the spreadsheet:

```text
5mg
- Blackberry #2E1E3D
- Blood Orange #DC7F27
- Passionfruit Mango #60203A
- Blueberry Lemonade #21285A
- Black Cherry #36121D
- Strawberry Peach #DD756B

10mg
- Strawberry #CC1F39
- Watermelon #0A6034
- Lemonade #E0AD2C
- Tangerine #F89A1F
- Blackberry Lemonade #2E1E3D
- Blueberry Acai #21285A

30mg
- Peach Mango #E89B5B
- Cherry Limeade #67092A
- Orange Lemonade #FAA819
- Kiwi Watermelon #A4BC47
- Blueberry Pomegranate #21285A
- Strawberry Watermelon #0A6034

60mg
- Passionfruit Mango #60203A
- Wild Cherry Peach #861625
- Blueberry Lemonade #21285A
- Blood Orange #DC7F27
- Blackberry #2E1E3D
- Strawberry Kiwi #CC1F39
```

Also add cannabinoid block data:
- CBG: `#2E1E3D`
- CBN: `#36121D`
- THCV: `#DD756B`

### 4. Home page recreation
Rebuild the homepage sections in the wireframe order:

1. Hero
   - four vertical tier-color strips
   - centered cream wordmark overlay
2. Brand Statement
   - large typographic pause on cream
3. Origin
   - “Born in the Heart of America” / Route 66 editorial section
   - image placeholder until heritage imagery is uploaded
4. What’s Inside
   - two-column layout
   - can/image area on the left
   - ingredient list on the right
5. Why SUNRISE
   - large editorial pull-quote with gradient wordmark-like emphasis
   - supporting image placeholder
6. Four Tiers
   - four saturated tier cards using real `PotencyLockup`
   - each card links to Products with the selected tier
7. Story Teaser
   - asymmetric layout linking to About
8. Near You Teaser
   - green flood section with map texture placeholder and CTA
9. Reviews
   - editorial quote carousel-style layout with hairline progress
10. Path to Purchase
   - near-black band with Shop and Find Near You CTAs
11. Footer

### 5. Products page recreation
Rebuild Products around the wireframe’s “tier switcher owns the viewport” concept:

- Short typographic hero.
- Interactive tier switcher using tabs/state:
  - 5mg / Subtle Lift
  - 10mg / Perfect Buzz
  - 30mg / Deeper Dive
  - 60mg / Elevated
- Active tier panel changes:
  - background color
  - potency lockup
  - tier copy
  - six flavor cards
  - can placeholders now, later replaced with uploaded mockups
- Minor cannabinoids section with CBG / CBN / THCV cards.
- Marquee/ticker band:
  - 24 flavors
  - 4 potencies
  - 12 fl oz
  - 70 calories
  - natural / vegan
  - gluten free
  - zero alcohol
  - infused with B12
  - made in USA
- Transparency anchor with links to ingredients and COAs.
- Path-to-purchase band and footer.

### 6. Product detail page template
Add a reusable product detail route, initially for all SKUs via a slug route like:

```text
/products/:slug
```

Template sections:
- Breadcrumb
- Product hero with can image placeholder
- variant pill, flavor name, descriptor pill
- add-to-cart and find-near-you CTAs as non-commerce placeholders
- stat strip with 12 OUNCE CAN lockup, servings, THC per serving, and optional cannabinoid stat
- SKU-specific ingredients
- related flavors in the same tier
- FAQ accordion
- path-to-purchase band
- footer

Flavor cards on the Products page can link into these product detail pages.

### 7. About page recreation
Rebuild About as a brand story page:

1. Typographic hero
2. Origin section with heritage image placeholder
3. Approach section:
   - formulated in-house
   - small-batch / beverage-first
   - third-party testing / COAs
   - produced in the USA
4. People section with portrait placeholders
5. Place section:
   - saturated heartland green section
   - Route 66 / map layer placeholder
6. Path-to-purchase band
7. Footer

### 8. New Near You page
Add `/near-you` and wire it into nav/footer.

Initial static version:
- Hero: “Find SUNRISE Near You”
- Locator controls:
  - ZIP/city input
  - state selector placeholder
  - search button
- filter pills:
  - All
  - Dispensary
  - Liquor
  - Convenience
  - Bar / Restaurant
- map zone placeholder
- static retailer result rows
- fallback section:
  - Request a Retailer
  - Shop Online
- retailer gateway band:
  - Wholesale Inquiries
- footer

This will be UI-only for now unless a real retailer data source is provided later.

### 9. Contact page recreation
Rebuild Contact to match the wireframe:

- Hero: “Give Us a Buzz”
- General inquiry form:
  - name
  - email
  - reason for reaching out
  - message
- Preserve current local toast success behavior.
- Direct path cards:
  - wholesale
  - press
  - product / COAs
  - general support
- Location section.
- Footer.

### 10. Age gate
Add a global first-visit age gate overlay matching the wireframe:

- SUNRISE wordmark
- MM / DD / YYYY inputs
- Enter and Exit buttons
- 21+ compliance copy
- Decline state with back button
- Store verified/declined status in `localStorage` for this static marketing build.

Note: this is a front-end visitor gate, not a security/auth system.

### 11. Asset handling for can mockups
Since the 24 can mockups are not uploaded yet, the first build will use structured placeholders where each can belongs.

When the can mockups are uploaded, I’ll map them into the product data by tier/flavor and replace placeholders strategically in:
- Home hero/inside sections
- Products flavor cards
- Product detail hero
- related flavor cards
- selected editorial sections

Preferred project placement once uploaded:
```text
src/assets/cans/
```

### 12. Technical file changes

Likely files to modify/create:

```text
src/App.tsx
src/index.css
index.html
tailwind.config.ts
src/lib/brandData.ts
src/components/Navbar.tsx
src/components/Footer.tsx
src/components/Wordmark.tsx
src/components/PotencyLockup.tsx
src/components/StatLockup.tsx
src/components/AgeGate.tsx
src/components/SectionLabel.tsx
src/components/PathToPurchase.tsx
src/components/TickerBand.tsx
src/components/ImagePlaceholder.tsx
src/components/ProductCard.tsx
src/pages/Index.tsx
src/pages/Products.tsx
src/pages/ProductDetail.tsx
src/pages/About.tsx
src/pages/NearYou.tsx
src/pages/Contact.tsx
```

### 13. Responsive behavior
- Convert the wireframe’s fixed 640px artboards into real responsive web layouts.
- Desktop: retain the wireframe’s grid discipline and wide editorial spacing.
- Tablet: collapse dense grids to 2 columns.
- Mobile:
  - tier strip stacks or becomes a 2x2 grid
  - nav becomes hamburger
  - product tier switcher remains tappable
  - inside/story/product hero sections become single column
  - footer columns stack cleanly

### 14. Implementation order
1. Update design tokens, data, shared components, and routes.
2. Rebuild global nav/footer and add age gate.
3. Rebuild Home.
4. Rebuild Products and Product Detail template.
5. Rebuild About, create Near You, rebuild Contact.
6. Add placeholder asset mapping structure for the future 24 can mockups.
7. Run a final pass for responsive polish, link correctness, and type consistency.

