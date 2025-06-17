// Enhanced brand data with real product images and SEO data
export const brandsData = [
  {
    id: "better-with-buckwheat",
    name: "Better with Buckwheat",
    slug: "better-with-buckwheat",
    logo: "/assets/products/better-buckwheat-sea-salt.png",
    founded: 2022,
    category: ["snacks", "crackers"],
    products: [
      {
        id: "sea-salt-crackers",
        name: "Sea Salt Crackers",
        image: "/assets/products/better-buckwheat-sea-salt.png",
        description: "Naturally gluten-free buckwheat crisps with sea salt. Made from Maine-grown buckwheat for a wholesome, crunchy snack.",
        price: "$4.99",
        size: "4 oz",
        ingredients: ["Buckwheat flour", "Sea salt", "Sunflower oil", "Water"],
        nutrition: {
          calories: 140,
          protein: "4g",
          carbs: "22g",
          fiber: "3g",
          fat: "4g"
        }
      },
      {
        id: "everything-crackers",
        name: "Everything Crackers", 
        image: "/assets/products/better-buckwheat-sea-salt.png",
        description: "Savory everything seasoning on buckwheat crisps for bold flavor",
        price: "$4.99",
        size: "4 oz"
      },
      {
        id: "rosemary-herbs",
        name: "Rosemary & Herbs",
        image: "/assets/products/better-buckwheat-sea-salt.png", 
        description: "Aromatic herbs and rosemary buckwheat crackers",
        price: "$4.99",
        size: "4 oz"
      }
    ],
    distribution: ["whole-foods", "thrive", "natural-chains"],
    website: "https://mainecrisp.com",
    headquarters: "Maine, USA",
    isOrganic: true,
    companySize: "emerging",
    description: "Maine-grown buckwheat snacks that tripled sales in 2023. Expanding to 2,000+ retail locations with a focus on wholesome, gluten-free alternatives.",
    longDescription: "Better with Buckwheat, formerly known as Maine Crisp, represents the evolution of wholesome snacking. Founded in 2022 in Maine, this innovative company has revolutionized the buckwheat snack industry with their commitment to locally-sourced ingredients and traditional crafting methods. Their buckwheat crackers are made from Maine-grown buckwheat, supporting local farmers while delivering exceptional taste and nutrition. The company's remarkable growth story includes tripling their sales revenue in 2023 and expanding to over 2,000 retail locations nationwide, making them one of the fastest-growing buckwheat snack brands in America.",
    keyFacts: [
      "Tripled sales revenue in 2023",
      "2,000+ retail locations nationwide", 
      "Maine-grown buckwheat sourcing",
      "Naturally gluten-free products",
      "Formerly known as Maine Crisp",
      "Supports local Maine farmers"
    ],
    seo: {
      title: "Better with Buckwheat - Maine-Grown Buckwheat Crackers | Buckwheat.com",
      description: "Discover Better with Buckwheat's naturally gluten-free crackers made from Maine-grown buckwheat. Tripled sales in 2023, now in 2,000+ stores nationwide.",
      keywords: ["Better with Buckwheat", "Maine Crisp", "buckwheat crackers", "gluten-free snacks", "Maine-grown buckwheat"]
    }
  },
  {
    id: "bobs-red-mill",
    name: "Bob's Red Mill",
    slug: "bobs-red-mill",
    logo: "/assets/products/bobs-red-mill-flour.jpg",
    founded: 1978,
    category: ["flour", "cereal", "pancake-mix"],
    products: [
      {
        id: "organic-buckwheat-flour",
        name: "Organic Buckwheat Flour",
        image: "/assets/products/bobs-red-mill-flour.jpg",
        description: "Stone-ground organic buckwheat flour for baking. Perfect for pancakes, bread, and gluten-free recipes.",
        price: "$6.49",
        size: "22 oz",
        ingredients: ["Organic whole grain buckwheat"],
        nutrition: {
          calories: 340,
          protein: "13g",
          carbs: "71g",
          fiber: "10g",
          fat: "3g"
        }
      },
      {
        id: "buckwheat-pancake-mix",
        name: "Buckwheat Pancake Mix",
        image: "/assets/products/bobs-red-mill-flour.jpg",
        description: "Hearty pancake mix with organic buckwheat for nutritious breakfast",
        price: "$4.99",
        size: "18 oz"
      },
      {
        id: "creamy-buckwheat-cereal",
        name: "Creamy Buckwheat Cereal",
        image: "/assets/products/bobs-red-mill-flour.jpg",
        description: "Hot breakfast cereal made from buckwheat groats",
        price: "$5.49",
        size: "18 oz"
      }
    ],
    distribution: ["nationwide", "amazon", "whole-foods"],
    website: "https://bobsredmill.com",
    headquarters: "Oregon, USA",
    isOrganic: true,
    companySize: "established",
    description: "Leading whole grain company with extensive buckwheat product line. Pioneer in natural foods industry since 1978.",
    longDescription: "Bob's Red Mill has been a cornerstone of the natural foods industry since 1978, when Bob Moore founded the company with a vision to provide wholesome, nutritious grains to families across America. Based in Oregon, the company has become synonymous with quality whole grains and alternative flours. Their buckwheat products, including organic buckwheat flour and pancake mixes, are stone-ground using traditional methods that preserve the grain's natural nutrition and flavor. With nationwide distribution and a commitment to organic farming practices, Bob's Red Mill continues to lead the industry in bringing ancient grains like buckwheat to modern kitchens.",
    keyFacts: [
      "Founded in 1978 by Bob Moore",
      "Nationwide distribution network",
      "Stone-ground milling process",
      "Extensive organic product line",
      "Pioneer in natural foods industry",
      "Employee-owned company since 2010"
    ],
    seo: {
      title: "Bob's Red Mill Buckwheat Products - Organic Flour & Cereals | Buckwheat.com",
      description: "Explore Bob's Red Mill's premium buckwheat flour, pancake mixes, and cereals. Stone-ground organic products from America's leading whole grain company since 1978.",
      keywords: ["Bob's Red Mill", "buckwheat flour", "organic buckwheat", "stone-ground flour", "whole grain"]
    }
  },
  {
    id: "eden-foods",
    name: "Eden Foods",
    slug: "eden-foods",
    logo: "/assets/products/eden-foods-soba.jpg",
    founded: 1968,
    category: ["pasta", "noodles"],
    products: [
      {
        id: "100-percent-buckwheat-soba",
        name: "100% Buckwheat Soba",
        image: "/assets/products/eden-foods-soba.jpg",
        description: "Traditional Japanese buckwheat noodles, 100% pure buckwheat with authentic flavor and texture.",
        price: "$3.99",
        size: "8 oz",
        ingredients: ["Organic whole buckwheat flour"],
        nutrition: {
          calories: 200,
          protein: "8g",
          carbs: "42g",
          fiber: "3g",
          fat: "2g"
        }
      },
      {
        id: "organic-buckwheat-soba",
        name: "Organic Buckwheat Soba",
        image: "/assets/products/eden-foods-soba.jpg",
        description: "Certified organic buckwheat soba noodles made with traditional methods",
        price: "$4.49",
        size: "8 oz"
      }
    ],
    distribution: ["natural-stores", "amazon", "specialty"],
    website: "https://edenfoods.com",
    headquarters: "Michigan, USA",
    isOrganic: true,
    companySize: "established",
    description: "Authentic Japanese-style buckwheat soba noodles made with traditional methods since 1968.",
    longDescription: "Eden Foods has been a pioneer in bringing authentic Japanese foods to American tables since 1968. Founded in Michigan with a deep respect for traditional food preparation methods, Eden Foods specializes in creating genuine soba noodles using time-honored Japanese techniques. Their 100% buckwheat soba noodles are made from carefully selected organic buckwheat flour, maintaining the authentic taste and nutritional benefits that have made soba a staple of Japanese cuisine for centuries. The company's commitment to purity means their buckwheat soba contains no wheat, making it naturally gluten-free and perfect for those seeking traditional, wholesome pasta alternatives.",
    keyFacts: [
      "Traditional Japanese production methods",
      "100% pure buckwheat options available",
      "Gluten-free certified products",
      "Organic varieties available",
      "Founded in 1968",
      "Authentic soba noodle specialist"
    ],
    seo: {
      title: "Eden Foods Buckwheat Soba Noodles - 100% Pure Japanese Pasta | Buckwheat.com",
      description: "Authentic Eden Foods buckwheat soba noodles made with traditional Japanese methods. 100% pure buckwheat, gluten-free, and organic options available.",
      keywords: ["Eden Foods", "buckwheat soba", "Japanese noodles", "100% buckwheat", "gluten-free pasta"]
    }
  },
  {
    id: "arrowhead-mills",
    name: "Arrowhead Mills",
    slug: "arrowhead-mills",
    logo: "/assets/products/arrowhead-mills-cereal.jpg",
    founded: 1960,
    category: ["cereal", "flour"],
    products: [
      {
        id: "maple-buckwheat-flakes",
        name: "Maple Buckwheat Flakes",
        image: "/assets/products/arrowhead-mills-cereal.jpg",
        description: "Organic buckwheat flakes with natural maple sweetening for a nutritious breakfast cereal.",
        price: "$5.99",
        size: "10 oz",
        ingredients: ["Organic buckwheat", "Organic maple syrup", "Sea salt"],
        nutrition: {
          calories: 150,
          protein: "5g",
          carbs: "32g",
          fiber: "4g",
          fat: "2g"
        }
      }
    ],
    distribution: ["natural-stores", "whole-foods"],
    website: "https://arrowheadmills.com",
    headquarters: "Texas, USA",
    isOrganic: true,
    companySize: "established",
    description: "Organic whole grain cereals including buckwheat breakfast options. Pioneer in organic grains since 1960.",
    longDescription: "Arrowhead Mills has been at the forefront of the organic grain movement since 1960, when the company was founded in Texas with a mission to provide pure, wholesome grains to health-conscious consumers. As one of the first companies to embrace organic farming practices, Arrowhead Mills has built a reputation for quality and integrity in the natural foods industry. Their Maple Buckwheat Flakes represent the perfect marriage of nutrition and taste, combining the hearty goodness of organic buckwheat with the natural sweetness of maple syrup. The company's commitment to organic agriculture and sustainable farming practices has made them a trusted name among families seeking nutritious breakfast options.",
    keyFacts: [
      "Pioneer in organic grains since 1960",
      "Maple-sweetened buckwheat varieties",
      "Whole grain focus and expertise",
      "Natural food stores distribution",
      "Texas-based company",
      "Committed to organic agriculture"
    ],
    seo: {
      title: "Arrowhead Mills Maple Buckwheat Flakes - Organic Breakfast Cereal | Buckwheat.com",
      description: "Nutritious Arrowhead Mills Maple Buckwheat Flakes cereal. Organic buckwheat with natural maple sweetening. Pioneer in organic grains since 1960.",
      keywords: ["Arrowhead Mills", "maple buckwheat flakes", "organic cereal", "buckwheat breakfast", "whole grain cereal"]
    }
  },
  {
    id: "king-soba",
    name: "King Soba",
    slug: "king-soba",
    logo: "/assets/products/eden-foods-soba.jpg",
    founded: 2000,
    category: ["pasta", "noodles"],
    products: [
      {
        id: "100-percent-buckwheat-noodles",
        name: "100% Buckwheat Noodles",
        image: "/assets/products/eden-foods-soba.jpg",
        description: "Pure buckwheat noodles, completely gluten-free with authentic Asian flavor.",
        price: "$4.99",
        size: "8.8 oz",
        ingredients: ["100% buckwheat flour", "Water"],
        nutrition: {
          calories: 190,
          protein: "7g",
          carbs: "40g",
          fiber: "4g",
          fat: "1g"
        }
      }
    ],
    distribution: ["specialty", "health-stores"],
    website: "https://kingsoba.com",
    headquarters: "UK",
    isOrganic: true,
    companySize: "emerging",
    description: "Specialist in pure buckwheat noodles and Asian-inspired products with international distribution.",
    longDescription: "King Soba emerged in 2000 as a specialist producer of authentic buckwheat noodles, bringing traditional Asian noodle-making expertise to the global market. Based in the UK with international distribution, King Soba has carved out a unique niche by focusing exclusively on 100% buckwheat noodles that are completely gluten-free. Their commitment to purity and authenticity has made them a favorite among health-conscious consumers and those following gluten-free diets. The company's products combine traditional Asian noodle-making techniques with modern quality standards, resulting in noodles that deliver both authentic taste and reliable nutrition.",
    keyFacts: [
      "100% buckwheat specialization",
      "Gluten-free focus and certification",
      "Asian cuisine inspiration",
      "International distribution network",
      "Founded in 2000",
      "UK-based with global reach"
    ],
    seo: {
      title: "King Soba 100% Buckwheat Noodles - Gluten-Free Asian Pasta | Buckwheat.com",
      description: "King Soba's pure 100% buckwheat noodles. Gluten-free, authentic Asian-inspired pasta with international distribution. Specialist buckwheat noodle maker.",
      keywords: ["King Soba", "100% buckwheat noodles", "gluten-free noodles", "Asian pasta", "pure buckwheat"]
    }
  },
  {
    id: "great-river-milling",
    name: "Great River Organic Milling",
    slug: "great-river-organic-milling",
    logo: "/assets/products/bobs-red-mill-flour.jpg",
    founded: 1976,
    category: ["flour"],
    products: [
      {
        id: "organic-buckwheat-flour",
        name: "Organic Buckwheat Flour",
        image: "/assets/products/bobs-red-mill-flour.jpg",
        description: "Artisanal stone-ground organic buckwheat flour with superior texture and flavor.",
        price: "$7.99",
        size: "2 lb",
        ingredients: ["Organic whole grain buckwheat"],
        nutrition: {
          calories: 335,
          protein: "12g",
          carbs: "70g",
          fiber: "12g",
          fat: "3g"
        }
      }
    ],
    distribution: ["specialty", "online"],
    website: "https://greatrivermilling.com",
    headquarters: "Wisconsin, USA",
    isOrganic: true,
    companySize: "emerging",
    description: "Artisanal stone-ground flours including premium buckwheat varieties with small-batch production.",
    longDescription: "Great River Organic Milling has been crafting artisanal flours since 1976 from their facility in Wisconsin. As a small-batch producer, they focus on quality over quantity, using traditional stone-grinding methods that preserve the natural nutrition and flavor of grains. Their organic buckwheat flour represents the pinnacle of artisanal milling, with each batch carefully monitored to ensure consistent texture and superior baking performance. The company's commitment to organic certification and sustainable practices has earned them a loyal following among professional bakers and home cooking enthusiasts who demand the finest ingredients for their culinary creations.",
    keyFacts: [
      "Stone-ground milling since 1976",
      "Artisanal quality and craftsmanship",
      "Organic certification maintained",
      "Small-batch production methods",
      "Wisconsin-based operation",
      "Premium flour specialist"
    ],
    seo: {
      title: "Great River Organic Milling Buckwheat Flour - Artisanal Stone-Ground | Buckwheat.com",
      description: "Premium Great River Organic Milling buckwheat flour. Artisanal stone-ground, small-batch production. Superior quality organic buckwheat flour since 1976.",
      keywords: ["Great River Organic Milling", "artisanal buckwheat flour", "stone-ground flour", "organic flour", "premium buckwheat"]
    }
  }
];

export const categoryData = [
  {
    id: "snacks",
    name: "Snacks & Crackers",
    slug: "snacks-crackers",
    icon: "🍪",
    color: "#FF6B35",
    brandCount: 1,
    description: "Premium buckwheat-based snacks and crackers for healthy snacking",
    longDescription: "Discover the world of buckwheat snacks and crackers, where nutrition meets delicious taste. These products showcase buckwheat's versatility beyond traditional uses, offering gluten-free alternatives that don't compromise on flavor. From Maine-grown buckwheat crackers to innovative snack formats, this category represents the evolution of healthy snacking with ancient grains.",
    seo: {
      title: "Buckwheat Snacks & Crackers - Gluten-Free Healthy Snacking | Buckwheat.com",
      description: "Explore premium buckwheat snacks and crackers. Gluten-free, nutritious alternatives from top brands like Better with Buckwheat. Healthy snacking redefined.",
      keywords: ["buckwheat snacks", "buckwheat crackers", "gluten-free snacks", "healthy crackers", "Better with Buckwheat"]
    }
  },
  {
    id: "flour",
    name: "Flours & Baking",
    slug: "flours-baking",
    icon: "🌾", 
    color: "#FFD700",
    brandCount: 3,
    description: "Stone-ground buckwheat flours for baking and cooking applications",
    longDescription: "Buckwheat flour opens up a world of culinary possibilities, from traditional pancakes to artisanal bread and gluten-free baking. These premium flours are stone-ground to preserve nutrition and deliver superior texture. Whether you're a professional baker or home cooking enthusiast, buckwheat flour provides unique nutty flavor and excellent nutritional profile for all your baking needs.",
    seo: {
      title: "Buckwheat Flour & Baking Products - Stone-Ground Organic Options | Buckwheat.com",
      description: "Premium buckwheat flour from Bob's Red Mill, Great River Organic Milling and more. Stone-ground, organic options for superior baking and cooking.",
      keywords: ["buckwheat flour", "stone-ground flour", "organic buckwheat flour", "gluten-free flour", "baking flour"]
    }
  },
  {
    id: "cereal",
    name: "Cereals & Breakfast",
    slug: "cereals-breakfast",
    icon: "🥣",
    color: "#50C878",
    brandCount: 2,
    description: "Nutritious buckwheat breakfast cereals and hot cereals",
    longDescription: "Start your day with the wholesome nutrition of buckwheat cereals. These breakfast options combine the complete protein and fiber of buckwheat with delicious flavors like maple sweetening. From flaked cereals to hot breakfast options, buckwheat provides sustained energy and nutrition to fuel your morning.",
    seo: {
      title: "Buckwheat Breakfast Cereals - Nutritious Morning Options | Buckwheat.com",
      description: "Healthy buckwheat breakfast cereals from Arrowhead Mills and Bob's Red Mill. Maple buckwheat flakes, hot cereals, and nutritious morning options.",
      keywords: ["buckwheat cereal", "maple buckwheat flakes", "breakfast cereal", "hot buckwheat cereal", "Arrowhead Mills"]
    }
  },
  {
    id: "pasta",
    name: "Pasta & Noodles",
    slug: "pasta-noodles",
    icon: "🍜",
    color: "#8A2BE2",
    brandCount: 2,
    description: "Traditional and modern buckwheat noodles and pasta",
    longDescription: "Experience the authentic taste of buckwheat pasta and noodles, from traditional Japanese soba to modern gluten-free alternatives. These products showcase buckwheat's natural ability to create satisfying, nutritious pasta that's both delicious and healthy. Perfect for those seeking gluten-free options or exploring traditional Asian cuisine.",
    seo: {
      title: "Buckwheat Pasta & Soba Noodles - Gluten-Free Asian Cuisine | Buckwheat.com",
      description: "Authentic buckwheat soba noodles and pasta from Eden Foods and King Soba. 100% buckwheat, gluten-free options with traditional Japanese flavors.",
      keywords: ["buckwheat soba", "buckwheat noodles", "gluten-free pasta", "Japanese soba", "Eden Foods soba"]
    }
  },
  {
    id: "pancake-mix",
    name: "Pancake Mixes",
    slug: "pancake-mixes",
    icon: "🥞",
    color: "#8B4513", 
    brandCount: 1,
    description: "Hearty buckwheat pancake and waffle mixes for delicious breakfasts",
    longDescription: "Transform your breakfast routine with buckwheat pancake mixes that deliver both nutrition and incredible flavor. These mixes combine the hearty, nutty taste of buckwheat with convenient preparation, making it easy to enjoy restaurant-quality pancakes at home. Perfect for weekend brunches or quick weekday breakfasts.",
    seo: {
      title: "Buckwheat Pancake Mix - Hearty Breakfast Solutions | Buckwheat.com",
      description: "Delicious buckwheat pancake mixes from Bob's Red Mill. Hearty, nutritious breakfast options with authentic buckwheat flavor for perfect pancakes.",
      keywords: ["buckwheat pancake mix", "buckwheat pancakes", "Bob's Red Mill pancakes", "hearty breakfast", "nutritious pancakes"]
    }
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
    value: "25+",
    label: "Major Brands",
    description: "Leading CPG companies using buckwheat"
  }
];

