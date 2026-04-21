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
  tagline: "REFRESH THE WAY THE WORLD DRINKS",
  legal: "SUNRISE™ is a registered trademark of SUNRISE Beverage Company. All rights reserved. Must be 21+ to purchase. Federally legal hemp-derived Delta-9 THC. Consume responsibly.",
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
  colorClass: string;
  bgClass: string;
  borderClass: string;
  softClass: string;
  token: string;
  products: Product[];
}

const notes: Record<string, string> = {
  Blackberry: "Dark berry, crisp finish",
  "Blood Orange": "Ruby citrus, clean sparkle",
  "Passionfruit Mango": "Tropical, juicy, sunlit",
  "Blueberry Lemonade": "Blueberry snap with fresh lemon",
  "Strawberry Peach": "Soft stone fruit and berry",
  "Black Cherry": "Deep cherry with a clean sparkle",
  Lemonade: "Crisp + Tangy",
  Strawberry: "Fresh + Fruity",
  Watermelon: "Sweet + Juicy",
  Tangerine: "Bright + Zesty",
  "Blackberry Lemonade": "Tart + Bold",
  "Blueberry Acai": "Rich + Vibrant",
  "Cherry Limeade": "Bold cherry and sharp lime",
  "Orange Lemonade": "Sunny citrus with lemonade bite",
  "Peach Mango": "Velvety peach and mango",
  "Kiwi Watermelon": "Green fruit and juicy melon",
  "Blueberry Pomegranate": "Berry-forward with tart depth",
  "Strawberry Watermelon": "Ripe berry and summer melon",
  "Wild Cherry Peach": "Lush cherry with peach nectar",
  "Strawberry Kiwi": "Berry kiwi with a lively finish",
};

const product = (tier: TierId, flavor: string, image: string, cannabinoids?: string): Product => ({
  id: `${tier}mg-${flavor.toLowerCase().replace(/[^a-z0-9]+/g, "-")}${cannabinoids ? `-${cannabinoids.toLowerCase().replace(/[^a-z0-9]+/g, "-")}` : ""}`,
  name: `${flavor}${cannabinoids ? ` + ${cannabinoids.replace(/\d+mg /, "")}` : ""}`,
  flavor,
  descriptor: notes[flavor] ?? "Clean fruit flavor with crisp seltzer finish",
  notes: notes[flavor] ?? "Bright + Crisp",
  image,
  tier,
  potency: `${tier}MG THC`,
  price: "$4.99 / can",
  servings: tier === 5 ? 1 : 2,
  cannabinoids,
});

export const TIERS: Tier[] = [
  {
    mg: 5,
    index: "TIER 01",
    label: "5MG",
    shortName: "Subtle Lift",
    tagline: "A Subtle Lift",
    description: "Light, bright, casual refreshment for a slower pour and an easy pace.",
    triad: "Light · bright · casual",
    colorClass: "text-tier-5",
    bgClass: "bg-tier-5",
    borderClass: "border-tier-5",
    softClass: "bg-tier-5/10",
    token: "hsl(var(--tier-5))",
    products: [
      product(5, "Blackberry", can5Blackberry),
      product(5, "Blood Orange", can5BloodOrange),
      product(5, "Passionfruit Mango", can5PassionfruitMango),
      product(5, "Blueberry Lemonade", can5BlueberryLemonadeCbg, "30MG CBG"),
      product(5, "Strawberry Peach", can5StrawberryPeachThcv, "30MG THCV"),
      product(5, "Black Cherry", can5BlackCherryCbn, "5MG CBN"),
    ],
  },
  {
    mg: 10,
    index: "TIER 02",
    label: "10MG",
    shortName: "Perfect Buzz",
    tagline: "The Perfect Buzz",
    description: "Smooth, balanced, social — the tier that lets flavor lead and the moment open up.",
    triad: "Smooth · balanced · social",
    colorClass: "text-tier-10",
    bgClass: "bg-tier-10",
    borderClass: "border-tier-10",
    softClass: "bg-tier-10/10",
    token: "hsl(var(--tier-10))",
    products: [
      product(10, "Strawberry", can10Strawberry),
      product(10, "Watermelon", can10Watermelon),
      product(10, "Lemonade", can10Lemonade),
      product(10, "Tangerine", can10TangerineCbg, "30MG CBG"),
      product(10, "Blackberry Lemonade", can10BlackberryLemonadeCbn, "30MG CBN"),
      product(10, "Blueberry Acai", can10BlueberryAcaiThcv, "30MG THCV"),
    ],
  },
  {
    mg: 30,
    index: "TIER 03",
    label: "30MG",
    shortName: "Deeper Dive",
    tagline: "A Deeper Dive",
    description: "Bold, vibrant, spirited seltzers with layered fruit and a full sparkling finish.",
    triad: "Bold · vibrant · spirited",
    colorClass: "text-tier-30",
    bgClass: "bg-tier-30",
    borderClass: "border-tier-30",
    softClass: "bg-tier-30/10",
    token: "hsl(var(--tier-30))",
    products: [
      product(30, "Cherry Limeade", can30CherryLimeade),
      product(30, "Orange Lemonade", can30OrangeLemonade),
      product(30, "Peach Mango", can30PeachMango),
      product(30, "Kiwi Watermelon", can30KiwiWatermelonCbg, "30MG CBG"),
      product(30, "Blueberry Pomegranate", can30BlueberryPomegranateCbn, "30MG CBN"),
      product(30, "Strawberry Watermelon", can30StrawberryWatermelonThcv, "30MG THCV"),
    ],
  },
  {
    mg: 60,
    index: "TIER 04",
    label: "60MG",
    shortName: "Elevated",
    tagline: "Elevated Experience",
    description: "Potent, rich, immersive flavor statements built for SUNRISE’s boldest tier.",
    triad: "Potent · rich · immersive",
    colorClass: "text-tier-60",
    bgClass: "bg-tier-60",
    borderClass: "border-tier-60",
    softClass: "bg-tier-60/10",
    token: "hsl(var(--tier-60))",
    products: [
      product(60, "Blueberry Lemonade", can60BlueberryLemonade),
      product(60, "Passionfruit Mango", can60PassionfruitMango),
      product(60, "Wild Cherry Peach", can60WildCherryPeach),
      product(60, "Blood Orange", can60BloodOrangeCbg, "30MG CBG"),
      product(60, "Blackberry", can60BlackberryCbn, "30MG CBN"),
      product(60, "Strawberry Kiwi", can60StrawberryKiwiThcv, "30MG THCV"),
    ],
  },
];

export const PRODUCTS = TIERS.flatMap((tier) => tier.products);
export const FEATURED_PRODUCTS = [TIERS[1].products[4], TIERS[0].products[1], TIERS[2].products[2], TIERS[3].products[5]];

export const INGREDIENTS = [
  "Purified Water",
  "Pure Cane Sugar",
  "Natural Flavoring",
  "Emulsified Hemp Extract",
  "Natural Enhancers (B12)",
  "Fresh Lemon Juice",
  "Citric Acid",
  "Sodium Benzoate",
];

export const ATTRIBUTES = ["24 Flavors", "4 Potencies", "12 FL OZ", "70 Calories", "Natural · Vegan", "Gluten Free", "Zero Alcohol", "Infused With B12", "Made in USA"];

export const CANNABINOIDS = [
  { mood: "Focus", name: "CBG", detail: "In select flavors · all tiers" },
  { mood: "Relax", name: "CBN", detail: "In select flavors · all tiers" },
  { mood: "Elevate", name: "THCV", detail: "In select flavors · all tiers" },
];

export const getTierByMg = (mg: number) => TIERS.find((tier) => tier.mg === mg) ?? TIERS[1];
export const getProductById = (id: string | undefined) => PRODUCTS.find((product) => product.id === id);
