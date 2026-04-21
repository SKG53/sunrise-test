import logoSrc from "@/assets/brand/sunrise-logo.png";
import taglineSrc from "@/assets/brand/sunrise-tagline.png";
import can5Blackberry from "@/assets/products/5mg-blackberry.png";
import can5BloodOrange from "@/assets/products/5mg-blood-orange.png";
import can5PassionfruitMango from "@/assets/products/5mg-passionfruit-mango.png";
import can5BlueberryLemonadeCbg from "@/assets/products/5mg-blueberry-lemonade-cbg.png";
import can5StrawberryPeachThcv from "@/assets/products/5mg-strawberry-peach-thcv.png";
import can5BlackCherryCbn from "@/assets/products/5mg-black-cherry-cbn.png";
import can10Lemonade from "@/assets/products/10mg-lemonade.png";
import can10Strawberry from "@/assets/products/10mg-strawberry.png";
import can10Watermelon from "@/assets/products/10mg-watermelon.png";
import can10TangerineCbg from "@/assets/products/10mg-tangerine-cbg.png";
import can10BlackberryLemonadeCbn from "@/assets/products/10mg-blackberry-lemonade-cbn.png";
import can10BlueberryAcaiThcv from "@/assets/products/10mg-blueberry-acai-thcv.png";
import can30CherryLimeade from "@/assets/products/30mg-cherry-limeade.png";
import can30OrangeLemonade from "@/assets/products/30mg-orange-lemonade.png";
import can30PeachMango from "@/assets/products/30mg-peach-mango.png";
import can30KiwiWatermelonCbg from "@/assets/products/30mg-kiwi-watermelon-cbg.png";
import can30BlueberryPomegranateCbn from "@/assets/products/30mg-blueberry-pomegranate-cbn.png";
import can30StrawberryWatermelonThcv from "@/assets/products/30mg-strawberry-watermelon-thcv.png";
import can60BlueberryLemonade from "@/assets/products/60mg-blueberry-lemonade.png";
import can60PassionfruitMango from "@/assets/products/60mg-passionfruit-mango.png";
import can60WildCherryPeach from "@/assets/products/60mg-wild-cherry-peach.png";
import can60BloodOrangeCbg from "@/assets/products/60mg-blood-orange-cbg.png";
import can60BlackberryCbn from "@/assets/products/60mg-blackberry-cbn.png";
import can60StrawberryKiwiThcv from "@/assets/products/60mg-strawberry-kiwi-thcv.png";

export const BRAND = {
  name: "SUNRISE™",
  tagline: "Refresh the Way the World Drinks.",
  legal: "SUNRISE™ is a registered trademark of SUNRISE Beverage Company. All rights reserved. Must be 21+ to purchase.",
  compliance: "Federally legal hemp-derived Delta-9 THC. Consume responsibly.",
  url: "WWW.SAVORSUNRISE.COM",
  logoSrc,
  taglineSrc,
};

export type TierId = 5 | 10 | 30 | 60;

export interface Product {
  id: string;
  name: string;
  flavor: string;
  descriptor: string;
  notes: string;
  image: string;
  tier: TierId;
  potency: string;
  price: string;
  servings: number;
  cannabinoids?: string;
}

export interface Tier {
  mg: TierId;
  index: string;
  label: string;
  shortName: string;
  tagline: string;
  description: string;
  triad: string;
  occasion: string;
  colorClass: string;
  bgClass: string;
  borderClass: string;
  softClass: string;
  token: string;
  products: Product[];
}

const flavorCopy: Record<string, { descriptor: string; blurb: string }> = {
  Blackberry: { descriptor: "Dark + Smooth", blurb: "Dark fruit done right. This is blackberry at its best — rich, juicy, and exceptionally smooth. Every delicious sip makes this flavor incredibly hard to resist." },
  "Blood Orange": { descriptor: "Tart + Punchy", blurb: "Not your average orange. Blood orange is tart and punchy like no other. You'll know this flavor hits different from the very first sip." },
  "Passionfruit Mango": { descriptor: "Bright + Breezy", blurb: "Passionfruit's zest is paired with mango's silky follow-through. This flavor is like a warm tropical breeze — light, bright, and gone before you know it." },
  "Blueberry Lemonade": { descriptor: "Rich + Tangy", blurb: "Blueberry brings the sweetness. Lemon brings the kick. Together, they play both sides perfectly — rich, tangy, and effortlessly balanced in every single sip." },
  "Black Cherry": { descriptor: "Deep + Sweet", blurb: "Dark cherry at its finest — sweet, smooth, and full of character. Meant to be savored from start to finish, this flavor hits deep and leaves you wanting more." },
  "Strawberry Peach": { descriptor: "Sweet + Mellow", blurb: "Classic strawberry and sun-soaked peach create a soft, mellow blend. This flavor is sweet, gentle, and effortlessly lovable from the first sip to the last." },
  Strawberry: { descriptor: "Fresh + Fruity", blurb: "Fresh, fruity, and full of real strawberry character. This flavor sounds simple but delivers a classic experience worth reaching for over and over again." },
  Watermelon: { descriptor: "Sweet + Juicy", blurb: "Sweet, juicy, and effortlessly refreshing — watermelon at its most natural. Light and easy with a clean finish that makes it impossible to put down." },
  Lemonade: { descriptor: "Crisp + Tangy", blurb: "A timeless classic — crisp, tangy, and made with real lemon juice. Bright, clean, and perfectly balanced from the first sip to the very last." },
  Tangerine: { descriptor: "Bright + Zesty", blurb: "This isn't your everyday citrus. It's real tangerine flavor — vivid, punchy, and perfectly dialed in. Bright and zesty from the first sip until the can's gone." },
  "Blackberry Lemonade": { descriptor: "Tart + Bold", blurb: "Lemonade tartness with blackberry's deep fruit backbone — a bold combination that goes down remarkably easy. Crisp, layered, and refreshing from start to finish." },
  "Blueberry Acai": { descriptor: "Rich + Vibrant", blurb: "Rich blueberry flavor paired with acai's earthy depth. Together, they create something exceptionally vibrant, layered, and absolutely worth savoring till the very last drop." },
  "Peach Mango": { descriptor: "Lush + Tropical", blurb: "Golden peach paired with irresistible mango — lush, tropical, and perfectly smooth. An all-weather flavor with serious depth that keeps you reaching back for more." },
  "Cherry Limeade": { descriptor: "Tart + Refreshing", blurb: "Sweet cherry and tart lime — this is a crisp, refreshing combination that hits like the classic you've known forever. Bold, balanced, and effortlessly easy to drink." },
  "Orange Lemonade": { descriptor: "Bright + Tart", blurb: "Bright and tart with real citrus depth — this is orange warmth layered with a lemon kick. Experience a combination that's refreshing and built to be savored." },
  "Kiwi Watermelon": { descriptor: "Crisp + Cool", blurb: "Crisp kiwi and cool, classic watermelon is a pairing that just makes sense. This flavor is smooth and effortless, earning its place on every refrigerator shelf." },
  "Blueberry Pomegranate": { descriptor: "Tart + Vibrant", blurb: "Ripe pomegranate tartness meets blueberry's rich depth for something vivid, bold, and unmistakable. This is a vibrant, layered flavor with a finish that stays with you." },
  "Strawberry Watermelon": { descriptor: "Sweet + Fresh", blurb: "Strawberry sweetness folds incredibly well into watermelon's fresh profile. Light, juicy, and effortlessly lovable, these are two familiar fruits that bring out the best in each other." },
  "Wild Cherry Peach": { descriptor: "Lush + Juicy", blurb: "This flavor blends wild cherry depth with peach's raw sweetness. Together, they're lush, juicy, and something you'll savor down to the very last drop." },
  "Strawberry Kiwi": { descriptor: "Sweet + Tangy", blurb: "This flavor blends strawberry sweetness and kiwi tang in a crisp, invigorating blend. Experience a bright and lively combination that keeps you coming back for more." },
};

const product = (tier: TierId, flavor: string, image: string, cannabinoids?: string): Product => ({
  id: `${tier}mg-${flavor.toLowerCase().replace(/[^a-z0-9]+/g, "-")}${cannabinoids ? `-${cannabinoids.toLowerCase().replace(/[^a-z0-9]+/g, "-")}` : ""}`,
  name: `${flavor}${cannabinoids ? ` +${cannabinoids.replace(/\d+MG /, "")}` : ""}`,
  flavor,
  descriptor: flavorCopy[flavor]?.descriptor ?? "Bright + Crisp",
  notes: flavorCopy[flavor]?.blurb ?? "Real flavor. Real effects. Crafted with intention.",
  image,
  tier,
  potency: `${tier}MG THC`,
  price: "$4.99 / can",
  servings: tier === 5 ? 1 : 2,
  cannabinoids,
});

export const TIERS: Tier[] = [
  { mg: 5, index: "TIER 01", label: "5MG", shortName: "Subtle Lift", tagline: "A Subtle Lift", description: "Light, bright, casual refreshment for a slower pour and an easy pace.", triad: "Light · bright · casual", occasion: "This potency provides a gentle lift that elevates while keeping you present and engaged. Perfect for first times, mid-week refreshments, or social sessions.", colorClass: "text-tier-5", bgClass: "bg-tier-5", borderClass: "border-tier-5", softClass: "bg-tier-5/10", token: "hsl(var(--tier-5))", products: [product(5, "Blackberry", can5Blackberry), product(5, "Blood Orange", can5BloodOrange), product(5, "Passionfruit Mango", can5PassionfruitMango), product(5, "Blueberry Lemonade", can5BlueberryLemonadeCbg, "30MG CBG"), product(5, "Strawberry Peach", can5StrawberryPeachThcv, "30MG THCV"), product(5, "Black Cherry", can5BlackCherryCbn, "5MG CBN")] },
  { mg: 10, index: "TIER 02", label: "10MG", shortName: "Perfect Buzz", tagline: "The Perfect Buzz", description: "Smooth, balanced, social — the tier that lets flavor lead and the moment open up.", triad: "Smooth · balanced · social", occasion: "This potency delivers an uplifting experience that enhances the moment without overwhelming it. Perfect for casual sips, afternoon resets, or social gatherings.", colorClass: "text-tier-10", bgClass: "bg-tier-10", borderClass: "border-tier-10", softClass: "bg-tier-10/10", token: "hsl(var(--tier-10))", products: [product(10, "Strawberry", can10Strawberry), product(10, "Watermelon", can10Watermelon), product(10, "Lemonade", can10Lemonade), product(10, "Tangerine", can10TangerineCbg, "30MG CBG"), product(10, "Blackberry Lemonade", can10BlackberryLemonadeCbn, "30MG CBN"), product(10, "Blueberry Acai", can10BlueberryAcaiThcv, "30MG THCV")] },
  { mg: 30, index: "TIER 03", label: "30MG", shortName: "Deeper Dive", tagline: "A Deeper Dive", description: "Bold, vibrant, spirited seltzers with layered fruit and a full sparkling finish.", triad: "Bold · vibrant · spirited", occasion: "This potency offers a bold, spirited shift for those ready to experience a mightier punch. Ideal for extended sessions, creative inspirations, or evening unwinds.", colorClass: "text-tier-30", bgClass: "bg-tier-30", borderClass: "border-tier-30", softClass: "bg-tier-30/10", token: "hsl(var(--tier-30))", products: [product(30, "Cherry Limeade", can30CherryLimeade), product(30, "Orange Lemonade", can30OrangeLemonade), product(30, "Peach Mango", can30PeachMango), product(30, "Kiwi Watermelon", can30KiwiWatermelonCbg, "30MG CBG"), product(30, "Blueberry Pomegranate", can30BlueberryPomegranateCbn, "30MG CBN"), product(30, "Strawberry Watermelon", can30StrawberryWatermelonThcv, "30MG THCV")] },
  { mg: 60, index: "TIER 04", label: "60MG", shortName: "Elevated", tagline: "An Elevated Experience", description: "Potent, rich, immersive flavor statements built for SUNRISE’s boldest tier.", triad: "Potent · rich · immersive", occasion: "This potency offers a richer, longer-lasting experience for higher tolerance consumers. Ideal for late nights, deep decompressions, or weekend relaxation.", colorClass: "text-tier-60", bgClass: "bg-tier-60", borderClass: "border-tier-60", softClass: "bg-tier-60/10", token: "hsl(var(--tier-60))", products: [product(60, "Blueberry Lemonade", can60BlueberryLemonade), product(60, "Passionfruit Mango", can60PassionfruitMango), product(60, "Wild Cherry Peach", can60WildCherryPeach), product(60, "Blood Orange", can60BloodOrangeCbg, "30MG CBG"), product(60, "Blackberry", can60BlackberryCbn, "30MG CBN"), product(60, "Strawberry Kiwi", can60StrawberryKiwiThcv, "30MG THCV")] },
];

export const PRODUCTS = TIERS.flatMap((tier) => tier.products);
export const FEATURED_PRODUCTS = [TIERS[1].products[0], TIERS[0].products[1], TIERS[2].products[2], TIERS[3].products[5]];

export const INGREDIENTS = [
  { name: "Purified Water", detail: "Reverse-osmosis filtered water carefully chosen for exceptional hydration and uncompromising flavor." },
  { name: "Pure Cane Sugar", detail: "A touch of real sugar for smooth, naturally derived sweetness." },
  { name: "Fresh Lemon Juice", detail: "Used exclusively in our Lemonade flavors, this ingredient brings a hint of crisp acidity with a natural citrus lift." },
  { name: "Natural Flavoring", detail: "Sourced from real fruits and botanicals, our flavors deliver bright, authentic notes true to their names." },
  { name: "Emulsified Hemp Extract", detail: "Expertly blended hemp extract for a clean and consistent experience with every sip." },
  { name: "Natural Enhancers", detail: "Functional ingredients such as Vitamin B12 that allow for a balanced experience without altering flavors." },
  { name: "Citric Acid", detail: "A naturally occurring acid found in citrus fruits, used to balance flavors and keep things bubbly." },
  { name: "Sodium Benzoate", detail: "A widely used food-safe preservative that helps keep each can fresh without altering its flavor profile." },
];

export const ATTRIBUTES = ["Natural Vegan", "Gluten Free", "Zero Alcohol", "Infused with B12", "12 Ounce Can", "70 Calories Each", "24 Unique Flavors", "4 Potency Tiers"];
export const CANNABINOIDS = [
  { mood: "Focus + Uplift", name: "CBG", detail: "Mildly energizing and mood-uplifting. Best for daytime." },
  { mood: "Relax + Unwind", name: "CBN", detail: "Gently restful and calming. Best for nighttime." },
  { mood: "Elevate + Engage", name: "THCV", detail: "Cleanly stimulating and smoothly energizing. Best for focus and clarity." },
];

export const getTierByMg = (mg: number) => TIERS.find((tier) => tier.mg === mg) ?? TIERS[1];
export const getProductById = (id: string | undefined) => PRODUCTS.find((product) => product.id === id);
