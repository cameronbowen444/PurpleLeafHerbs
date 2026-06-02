export const blogPosts = [
  {
    slug: "gentle-herbal-wellness",
    title: "Gentle Herbal Wellness for Everyday Life",
    excerpt:
      "Simple ways herbs, food, and daily rituals can support a calmer rhythm.",
    category: "Herbal Wellness",
    date: "June 2026",
    readTime: "4 min read",
    image: "/assets/service-herbs.jpg",
    content: [
      "Herbal wellness does not have to feel complicated. Sometimes the first step is slowing down and noticing what your body is asking for.",
      "At Purple Leaf Herbs, the focus is on gentle support through herbs, whole foods, and simple lifestyle practices that can fit into real life.",
      "Small rituals, nourishing meals, and plant-centered education can help wellness feel more personal, peaceful, and grounded.",
    ],
  },
  {
    slug: "nutrition-and-natural-balance",
    title: "Nutrition and Natural Balance",
    excerpt:
      "A softer approach to food guidance built around your body and lifestyle.",
    category: "Nutrition",
    date: "June 2026",
    readTime: "3 min read",
    image: "/assets/service-nutrition.jpg",
    content: [
      "Nutrition is not about perfection. It is about learning what supports your energy, digestion, mood, and daily rhythm.",
      "A balanced approach allows space for real life while still creating better habits over time.",
      "Simple food choices can become part of a more grounded lifestyle when they are personal, realistic, and consistent.",
    ],
  },
  {
    slug: "plant-wisdom-and-daily-rituals",
    title: "Plant Wisdom and Daily Rituals",
    excerpt:
      "How small plant-centered practices can bring more calm into your day.",
    category: "Lifestyle",
    date: "June 2026",
    readTime: "5 min read",
    image: "/assets/service-lifestyle.jpg",
    content: [
      "Daily rituals help create rhythm. A cup of tea, a quiet walk, or a simple nourishing meal can become a way to reconnect.",
      "Plant wisdom is not only about herbs. It is about paying attention to nature, timing, rest, and nourishment.",
      "Wellness becomes easier when it is connected to the life you actually live.",
    ],
  },
];

export type BlogPost = (typeof blogPosts)[number];