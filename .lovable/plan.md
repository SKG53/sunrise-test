
# SUNRISE Website Build Plan

## Goal
Replace the current placeholder-driven product presentation with a polished SUNRISE marketing site using the complete set of 24 uploaded can mockup images, while preserving the existing SUNRISE brand direction: cream background, gradient wordmark, potency color tiers, premium beverage-first copy, and responsive 4-page structure.

## Asset Integration

I will add the uploaded can mockups into the app and map each image to the correct product tier and flavor.

### Received Can Mockups
The site will use all 24 product mockups across the existing potency tiers:

- 5mg THC products
- 10mg THC products
- 30mg THC products
- 60mg THC products
- CBG, CBN, and THCV variant products where indicated in filenames

The current dashed “CAN PHOTOGRAPHY PLACEHOLDER” areas will be replaced with the actual uploaded can imagery.

## Pages to Update

### 1. Home Page
Update the homepage so it feels more product-led and visually complete:

- Replace placeholder tier cards with real can mockups
- Add a stronger hero product display using a selection of cans
- Keep the SUNRISE wordmark, tagline, and primary CTA
- Improve the “Find Your Level” section with real product imagery for each potency tier
- Preserve the brand attributes strip: All Natural, Vegan, Gluten Free, Zero Alcohol, Vitamin B12, Low Calorie

### 2. Products Page
Rebuild the Products page around the 24 uploaded mockups:

- Organize products by potency tier
- Show actual can images instead of placeholder boxes
- Display product name, potency, cannabinoid variant when applicable, and flavor descriptor
- Add tier-specific color accents:
  - 5mg: orange
  - 10mg: red
  - 30mg: green
  - 60mg: purple
- Highlight CBG, CBN, and THCV variants with clear badges
- Keep the page responsive with clean mobile stacking

### 3. About Page
Lightly refine the About page so it visually matches the more polished product pages:

- Keep the brand story and Route 66 / American-made positioning
- Add improved section spacing and premium card styling
- Ensure copy avoids medical claims or cannabis-culture language

### 4. Contact Page
Keep the contact page simple and branded:

- Preserve the existing contact form structure
- Improve visual styling to match the updated site
- Add supportive brand/contact blocks such as wholesale, retail, or general inquiries if appropriate

## Shared Components

### Product Data
Update `src/lib/brandData.ts` to include a richer product catalog:

- Product name
- Flavor
- Potency
- Cannabinoid add-on, if present
- Image path
- Tier color
- Short flavor descriptor

This will make the Products page and Home page pull from one consistent source of truth.

### Product Card Component
Create a reusable product card component for displaying each can:

- Can image
- Product name
- Potency label
- Optional cannabinoid badge
- Flavor notes
- Tier accent color

### Tier Section Component
Create or refine a reusable tier section layout:

- Potency lockup
- Tier tagline
- Tier description
- Product grid
- Color-coded visual treatment

### Navigation and Footer
Keep the existing Navbar and Footer structure, with minor polish if needed for visual consistency.

## Technical Implementation Details

Files likely to be modified or added:

```text
src/lib/brandData.ts
src/pages/Index.tsx
src/pages/Products.tsx
src/pages/About.tsx
src/pages/Contact.tsx
src/components/ProductCard.tsx
src/components/TierSection.tsx
src/components/Navbar.tsx
src/components/Footer.tsx
src/index.css
src/assets/products/
```

Implementation approach:

1. Copy uploaded can mockups into a dedicated assets folder.
2. Import or reference those assets in the centralized product data file.
3. Replace placeholder product visuals with real images.
4. Build reusable product display components.
5. Update Home and Products pages to use the real product catalog.
6. Apply responsive layout improvements for desktop, tablet, and mobile.
7. Run a final check for TypeScript/import issues and visual consistency.

## QA Plan

After implementation, verify:

- All 24 can images appear correctly
- No missing or broken image imports
- Products are grouped under the correct potency tiers
- CBG, CBN, and THCV products have clear badges
- Navigation works across Home, Products, About, and Contact
- Mobile layout works at narrow widths
- The site remains visually aligned with the SUNRISE brand system
- No accidental health or compliance-sensitive claims are introduced

