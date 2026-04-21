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
  legal: "© 2025 SUNRISE Beverage. All rights reserved.",
  logoSrc,
  taglineSrc,
};

export interface Product {
  id: string;
  name: string;
  flavor: string;
  descriptor: string;
  image: string;
  potency: string;
  cannabinoids?: string;
}

export interface Tier {
  mg: number;
  label: string;
  tagline: string;
  description: string;
  colorClass: string;
  bgClass: string;
  borderClass: string;
  token: string;
  products: Product[];
}

const flavorNotes: Record<string, string> = {
  Blackberry: "Dark berry, crisp finish",
  "Blood Orange": "Bright citrus with ruby depth",
  "Passionfruit Mango": "Tropical, juicy, sunlit",
  "Blueberry Lemonade": "Blueberry snap with fresh lemon",
  "Strawberry Peach": "Soft stone fruit and berry",
  "Black Cherry": "Deep cherry with a clean sparkle",
  Lemonade: "Classic citrus, tart and clean",
  Strawberry: "Ripe berry with a bright lift",
  Watermelon: "Fresh melon, cool finish",
  Tangerine: "Zesty citrus with a smooth edge",
  "Blackberry Lemonade": "Jammy berry and lemonade tang",
  "Blueberry Açaí": "Blue fruit with a berry-rich finish",
  "Cherry Limeade": "Bold cherry and sharp lime",
  "Orange Lemonade": "Sunny citrus with lemonade bite",
  "Peach Mango": "Velvety peach and mango",
  "Kiwi Watermelon": "Green fruit and juicy melon",
  "Blueberry Pomegranate": "Berry-forward with tart depth",
  "Strawberry Watermelon": "Ripe berry and summer melon",
  "Wild Cherry Peach": "Lush cherry with peach nectar",
  "Strawberry Kiwi": "Berry kiwi with a lively finish",
};

const product = (tier: number, flavor: string, image: string, cannabinoids?: string): Product => ({
  id: `${tier}-${flavor.toLowerCase().replace(/[^a-z0-9]+/g, "-")}${cannabinoids ? `-${cannabinoids.toLowerCase()}` : ""}`,
  name: `${flavor} ${tier}mg`,
  flavor,
  descriptor: flavorNotes[flavor] ?? "Clean fruit flavor with crisp seltzer finish",
  image,
  potency: `${tier}mg THC`,
  cannabinoids,
});

export const TIERS: Tier[] = [
  {
    mg: 5,
    label: "5mg THC",
    tagline: "Light & Easy",
    description: "A lighter sparkling pour for social sipping, bright flavor, and an easygoing pace.",
    colorClass: "text-tier-5",
    bgClass: "bg-tier-5",
    borderClass: "border-tier-5",
    token: "hsl(var(--tier-5))",
    products: [
      product(5, "Blackberry", can5Blackberry),
      product(5, "Blood Orange", can5BloodOrange),
      product(5, "Passionfruit Mango", can5PassionfruitMango),
      product(5, "Blueberry Lemonade", can5BlueberryLemonadeCbg, "30mg CBG"),
      product(5, "Strawberry Peach", can5StrawberryPeachThcv, "30mg THCV"),
      product(5, "Black Cherry", can5BlackCherryCbn, "5mg CBN"),
    ],
  },
  {
    mg: 10,
    label: "10mg THC",
    tagline: "The Sweet Spot",
    description: "Full-flavored refreshment with a confident, balanced profile for the seasoned sipper.",
    colorClass: "text-tier-10",
    bgClass: "bg-tier-10",
    borderClass: "border-tier-10",
    token: "hsl(var(--tier-10))",
    products: [
      product(10, "Lemonade", can10Lemonade),
      product(10, "Strawberry", can10Strawberry),
      product(10, "Watermelon", can10Watermelon),
      product(10, "Tangerine", can10TangerineCbg, "30mg CBG"),
      product(10, "Blackberry Lemonade", can10BlackberryLemonadeCbn, "30mg CBN"),
      product(10, "Blueberry Açaí", can10BlueberryAcaiThcv, "30mg THCV"),
    ],
  },
  {
    mg: 30,
    label: "30mg THC",
    tagline: "Elevated Experience",
    description: "A more expressive tier with layered fruit profiles and a polished seltzer finish.",
    colorClass: "text-tier-30",
    bgClass: "bg-tier-30",
    borderClass: "border-tier-30",
    token: "hsl(var(--tier-30))",
    products: [
      product(30, "Cherry Limeade", can30CherryLimeade),
      product(30, "Orange Lemonade", can30OrangeLemonade),
      product(30, "Peach Mango", can30PeachMango),
      product(30, "Kiwi Watermelon", can30KiwiWatermelonCbg, "30mg CBG"),
      product(30, "Blueberry Pomegranate", can30BlueberryPomegranateCbn, "30mg CBN"),
      product(30, "Strawberry Watermelon", can30StrawberryWatermelonThcv, "30mg THCV"),
    ],
  },
  {
    mg: 60,
    label: "60mg THC",
    tagline: "Maximum Strength",
    description: "Our most potent lineup, crafted as a premium beverage experience with bold fruit character.",
    colorClass: "text-tier-60",
    bgClass: "bg-tier-60",
    borderClass: "border-tier-60",
    token: "hsl(var(--tier-60))",
    products: [
      product(60, "Blueberry Lemonade", can60BlueberryLemonade),
      product(60, "Passionfruit Mango", can60PassionfruitMango),
      product(60, "Wild Cherry Peach", can60WildCherryPeach),
      product(60, "Blood Orange", can60BloodOrangeCbg, "30mg CBG"),
      product(60, "Blackberry", can60BlackberryCbn, "30mg CBN"),
      product(60, "Strawberry Kiwi", can60StrawberryKiwiThcv, "30mg THCV"),
    ],
  },
];

export const FEATURED_PRODUCTS = [
  TIERS[0].products[1],
  TIERS[1].products[4],
  TIERS[2].products[2],
  TIERS[3].products[5],
];

export const ATTRIBUTES = [
  "All Natural",
  "Vegan",
  "Gluten Free",
  "Zero Alcohol",
  "Vitamin B12",
  "Low Calorie",
];

export const VALUE_PROPS = [
  {
    title: "Flavor First",
    description: "Real fruit flavors crafted to taste like a premium beverage — never an afterthought.",
  },
  {
    title: "Consistency",
    description: "Precisely developed seltzers built to deliver the same polished experience, can after can.",
  },
  {
    title: "Transparency",
    description: "Every batch is third-party lab tested. Scan the QR code on any can to view the Certificate of Analysis.",
  },
];
