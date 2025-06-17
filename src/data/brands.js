// Simple brand data for Netlify deployment
export const brandsData = [
  {
    id: "better-with-buckwheat",
    name: "Better with Buckwheat",
    slug: "better-with-buckwheat",
    logo: "/src/assets/products/better-buckwheat-sea-salt.png",
    founded: 2022,
    category: ["snacks", "crackers"],
    description: "Maine-grown buckwheat snacks that tripled sales in 2023. Expanding to 2,000+ retail locations with a focus on wholesome, gluten-free alternatives.",
    website: "https://mainecrisp.com",
    headquarters: "Maine, USA",
    isOrganic: true,
    products: [
      {
        id: "sea-salt-crackers",
        name: "Sea Salt Crackers",
        image: "/src/assets/products/better-buckwheat-sea-salt.png",
        description: "Naturally gluten-free buckwheat crisps with sea salt.",
        price: "$4.99",
        size: "4 oz"
      }
    ]
  },
  {
    id: "bobs-red-mill",
    name: "Bob's Red Mill",
    slug: "bobs-red-mill",
    logo: "/src/assets/products/bobs-red-mill-flour.jpg",
    founded: 1978,
    category: ["flour", "baking"],
    description: "Leading whole grain company offering stone-ground buckwheat flour for baking and cooking applications.",
    website: "https://bobsredmill.com",
    headquarters: "Oregon, USA",
    isOrganic: true,
    products: [
      {
        id: "buckwheat-flour",
        name: "Buckwheat Flour",
        image: "/src/assets/products/bobs-red-mill-flour.jpg",
        description: "Stone-ground buckwheat flour for gluten-free baking.",
        price: "$6.99",
        size: "18 oz"
      }
    ]
  },
  {
    id: "eden-foods",
    name: "Eden Foods",
    slug: "eden-foods",
    logo: "/src/assets/products/eden-foods-soba.jpg",
    founded: 1968,
    category: ["pasta", "noodles"],
    description: "Authentic Japanese soba noodles made from 100% buckwheat flour.",
    website: "https://edenfoods.com",
    headquarters: "Michigan, USA",
    isOrganic: true,
    products: [
      {
        id: "soba-noodles",
        name: "100% Buckwheat Soba",
        image: "/src/assets/products/eden-foods-soba.jpg",
        description: "Traditional Japanese soba noodles made from pure buckwheat.",
        price: "$3.99",
        size: "8 oz"
      }
    ]
  }
];

export const categoryData = [
  {
    id: "snacks",
    name: "Snacks & Crackers",
    slug: "snacks-crackers",
    icon: "🍪",
    color: "#FF6B6B",
    brandCount: 1,
    description: "Premium buckwheat-based snacks and crackers for healthy snacking"
  },
  {
    id: "flour",
    name: "Flours & Baking",
    slug: "flours-baking",
    icon: "🌾",
    color: "#4ECDC4",
    brandCount: 1,
    description: "Stone-ground buckwheat flours for baking and cooking applications"
  },
  {
    id: "pasta",
    name: "Pasta & Noodles",
    slug: "pasta-noodles",
    icon: "🍜",
    color: "#45B7D1",
    brandCount: 1,
    description: "Traditional and modern buckwheat noodles and pasta"
  }
];

export const marketStats = [
  {
    value: "$621.9M",
    label: "Market Size",
    description: "Global buckwheat market value in 2024"
  },
  {
    value: "3.1%",
    label: "Growth Rate",
    description: "Expected CAGR from 2025 to 2034"
  },
  {
    value: "6+",
    label: "Major Brands",
    description: "Leading CPG companies using buckwheat"
  }
];

