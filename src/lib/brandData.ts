export const BRAND = {
  name: "SUNRISE™",
  tagline: "REFRESH THE WAY THE WORLD DRINKS",
  legal: "© 2025 SUNRISE Beverage. All rights reserved.",
};

export interface Flavor {
  name: string;
  descriptor: string;
  color: string;
}

export interface Tier {
  mg: number;
  label: string;
  tagline: string;
  description: string;
  colorClass: string;
  bgClass: string;
  flavors: Flavor[];
  extras?: string[];
}

export const TIERS: Tier[] = [
  {
    mg: 5,
    label: "5mg THC",
    tagline: "Light & Easy",
    description: "A gentle introduction to hemp-infused refreshment. Perfect for social sipping with a subtle, balanced lift.",
    colorClass: "text-tier-5",
    bgClass: "bg-tier-5",
    flavors: [
      { name: "Mango Lemonade", descriptor: "Tropical citrus meets ripe mango", color: "#F5A623" },
      { name: "Strawberry Lemonade", descriptor: "Sweet berry with bright lemon", color: "#E74C5E" },
      { name: "Watermelon Limeade", descriptor: "Crisp melon with tangy lime", color: "#4CAF50" },
      { name: "Peach Lemonade", descriptor: "Juicy peach with golden citrus", color: "#FFAB40" },
      { name: "Blueberry Lemonade", descriptor: "Wild berry with sunny lemon", color: "#5C6BC0" },
      { name: "Cherry Limeade", descriptor: "Bold cherry with zesty lime", color: "#C62828" },
    ],
  },
  {
    mg: 10,
    label: "10mg THC",
    tagline: "The Sweet Spot",
    description: "Our most popular tier. A full-flavored experience with a confident, noticeable effect for the seasoned sipper.",
    colorClass: "text-tier-10",
    bgClass: "bg-tier-10",
    flavors: [
      { name: "Mango Lemonade", descriptor: "Tropical citrus meets ripe mango", color: "#F5A623" },
      { name: "Strawberry Lemonade", descriptor: "Sweet berry with bright lemon", color: "#E74C5E" },
      { name: "Watermelon Limeade", descriptor: "Crisp melon with tangy lime", color: "#4CAF50" },
      { name: "Peach Lemonade", descriptor: "Juicy peach with golden citrus", color: "#FFAB40" },
      { name: "Blueberry Lemonade", descriptor: "Wild berry with sunny lemon", color: "#5C6BC0" },
      { name: "Cherry Limeade", descriptor: "Bold cherry with zesty lime", color: "#C62828" },
    ],
  },
  {
    mg: 30,
    label: "30mg THC",
    tagline: "Elevated Experience",
    description: "For those who know what they want. A powerful, full-spectrum seltzer crafted for experienced consumers.",
    colorClass: "text-tier-30",
    bgClass: "bg-tier-30",
    flavors: [
      { name: "Mango Lemonade", descriptor: "Tropical citrus meets ripe mango", color: "#F5A623" },
      { name: "Strawberry Lemonade", descriptor: "Sweet berry with bright lemon", color: "#E74C5E" },
      { name: "Watermelon Limeade", descriptor: "Crisp melon with tangy lime", color: "#4CAF50" },
      { name: "Peach Lemonade", descriptor: "Juicy peach with golden citrus", color: "#FFAB40" },
      { name: "Blueberry Lemonade", descriptor: "Wild berry with sunny lemon", color: "#5C6BC0" },
      { name: "Cherry Limeade", descriptor: "Bold cherry with zesty lime", color: "#C62828" },
    ],
  },
  {
    mg: 60,
    label: "60mg THC",
    tagline: "Maximum Strength",
    description: "Our most potent offering. A premium craft seltzer with full-spectrum cannabinoid blends for the connoisseur.",
    colorClass: "text-tier-60",
    bgClass: "bg-tier-60",
    extras: ["CBG Blend", "CBN Blend", "THCV Blend"],
    flavors: [
      { name: "Mango Lemonade", descriptor: "Tropical citrus meets ripe mango", color: "#F5A623" },
      { name: "Strawberry Lemonade", descriptor: "Sweet berry with bright lemon", color: "#E74C5E" },
      { name: "Watermelon Limeade", descriptor: "Crisp melon with tangy lime", color: "#4CAF50" },
      { name: "Peach Lemonade", descriptor: "Juicy peach with golden citrus", color: "#FFAB40" },
      { name: "Blueberry Lemonade", descriptor: "Wild berry with sunny lemon", color: "#5C6BC0" },
      { name: "Cherry Limeade", descriptor: "Bold cherry with zesty lime", color: "#C62828" },
    ],
  },
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
    description: "Nano-emulsion technology ensures the same experience every single time, can after can.",
  },
  {
    title: "Transparency",
    description: "Every batch is third-party lab tested. Scan the QR code on any can to view the Certificate of Analysis.",
  },
];
