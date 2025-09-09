const products = [
  {
    "id": 1,
    "title": "Bluetooth Headphones",
    "price": 59.99,
    "category": "Electronics",
    "description": "High-quality over-ear headphones with 20 h life.",
    "image": "https://img.drz.lazcdn.com/static/pk/p/c1ea218d10dc62cc8764a0e6c99526c9.jpg_200x200q80.avif"
  },
  {
    "id": 2,
    "title": "Men's Casual Sneakers",
    "price": 39.50,
    "category": "Fashion",
    "description": "Comfortable sneakers with breathable material.",
    "image": "https://img.drz.lazcdn.com/static/pk/p/6a50b725d3f26d81b3756e42f0895c7d.jpg_200x200q80.avif"
  },
  {
    "id": 3,
    "title": "Smart LED TV 43-inch",
    "price": 299.99,
    "category": "Electronics",
    "description": "Ultra-HD smart TV with built-in streaming apps.",
    "image": "https://img.drz.lazcdn.com/static/pk/p/f33491bd60a592f9c26770b3f61a6a11.jpg_200x200q80.avif"
  },
  {
    "id": 4,
    "title": "Gaming Keyboard",
    "price": 79.99,
    "category": "Electronics",
    "description": "RGB mechanical keyboard with programmable keys.",
    "image": "https://img.drz.lazcdn.com/g/kf/S8847283e10654a1e8bc299e8e899b463L.jpg_200x200q80.avif"
  },
  {
    "id": 5,
    "title": "Wireless Mouse",
    "price": 19.99,
    "category": "Electronics",
    "description": "Ergonomic mouse with adjustable DPI.",
    "image": "https://img.drz.lazcdn.com/g/kf/Sd5134be5ab0c4a33b40702641d9f3816y.jpg_200x200q80.avif"
  },
  {
    "id": 6,
    "title": "Women's Summer Dress",
    "price": 45.00,
    "category": "Fashion",
    "description": "Lightweight floral dress in breathable cotton.",
    "image": "https://img.drz.lazcdn.com/static/pk/p/6ade85c3240282781acb11a67c10f632.jpg_200x200q80.avif"
  },
  {
    "id": 7,
    "title": "Yoga Mat",
    "price": 25.00,
    "category": "Sports",
    "description": "Non-slip mat with cushioning and grip.",
    "image": "https://img.drz.lazcdn.com/static/pk/p/cd807ef6224bf2fe072f3e36069cc11d.png_200x200q80.avif"
  },
  {
    "id": 8,
    "title": "Electric Kettle",
    "price": 34.99,
    "category": "Home Appliances",
    "description": "Fast-boil kettle with auto shut-off, 1.7 L.",
    "image": "https://img.drz.lazcdn.com/g/kf/Sb34959fe6c0946ada0317b67f437fb11s.jpg_200x200q80.avif"
  },
  {
    "id": 9,
    "title": "Wireless Charger",
    "price": 18.99,
    "category": "Electronics",
    "description": "Qi-enabled fast charging pad.",
    "image": "https://img.drz.lazcdn.com/g/kf/Scfc8d9db026e4f2e96a654e9576f007bu.jpg_200x200q80.avif"
  },
  {
    "id": 10,
    "title": "Men's Leather Belt",
    "price": 22.50,
    "category": "Fashion",
    "description": "Classic brown leather belt with metal buckle.",
    "image": "https://img.drz.lazcdn.com/g/kf/Sa58f01ca784e489eb64fabcaee1562322.jpg_200x200q80.avif"
  },
  {
    "id": 11,
    "title": "Bluetooth Speaker",
    "price": 49.99,
    "category": "Electronics",
    "description": "Portable waterproof speaker with deep bass.",
    "image": "https://img.drz.lazcdn.com/g/kf/S2acce4adaae14401b92e1c2539f811f3X.jpg_200x200q80.avif"
  },
  {
    "id": 12,
    "title": "Matte Lipstick",
    "price": 12.99,
    "category": "Fashion",
    "description": "Long-lasting matte finish lipstick available in multiple shades.",
    "image": "https://img.drz.lazcdn.com/static/pk/p/4499a9b5d42c2344cc075e85ba0409d0.png_200x200q75.avif"
  },
  {
    "id": 13,
    "title": "Liquid Foundation",
    "price": 19.99,
    "category": "Fashion",
    "description": "Full coverage foundation with natural look finish.",
    "image": "http://img.drz.lazcdn.com/static/pk/p/85680263d545cd68b7a1bd868b02f3ab.jpg_200x200q80.avif"
  },
  {
    "id": 14,
    "title": "Waterproof Mascara",
    "price": 9.99,
    "category": "Fashion",
    "description": "Volumizing waterproof mascara for a bold look.",
    "image": "https://img.drz.lazcdn.com/static/pk/p/f02f20b571560a89ba56254866417de2.jpg_200x200q80.avif"
  },
  {
    "id": 15,
    "title": "Compact Powder",
    "price": 8.50,
    "category": "Fashion",
    "description": "Silky smooth compact powder for all-day shine control.",
    "image": "https://img.drz.lazcdn.com/static/pk/p/453201ea9cfdcd6dd0e3a4f2d7f61966.jpg_200x200q80.avif"
  },
  {
    "id": 16,
    "title": "Makeup Brush Set",
    "price": 15.00,
    "category": "Fashion",
    "description": "10-piece premium makeup brush set for flawless blending.",
    "image": "https://img.drz.lazcdn.com/static/pk/p/1a4e0ff1d79108bda5bbdf431f495cb3.jpg_200x200q75.avif"
  },
  {
    "id": 17,
    "title": "Liquid Eyeliner",
    "price": 6.99,
    "category": "Fashion",
    "description": "Precision tip liquid eyeliner for smudge-free cat eyes.",
    "image": "https://img.drz.lazcdn.com/static/pk/p/fa10bc349277d61cd8a1302cbe2f2684.jpg_200x200q80.avif"
  },
  {
    "id": 18,
    "title": "Blush Palette",
    "price": 14.99,
    "category": "Fashion",
    "description": "Four-shade blush palette for a natural glow.",
    "image": "https://img.drz.lazcdn.com/static/pk/p/d33732a69339bbbf8f72dfd5c6b9c493.jpg_200x200q75.avif"
  },
  {
    "id": 19,
    "title": "Makeup Remover",
    "price": 7.50,
    "category": "Fashion",
    "description": "Gentle oil-free makeup remover for face and eyes.",
    "image": "https://img.drz.lazcdn.com/static/pk/p/cfe91f681c5f949ceb529190f91690a5.jpg_200x200q75.avif"
  },

  {
    "id": 20,
    "title": "Electric Kettle",
    "price": 24.99,
    "category": "Home Appliances",
    "description": "Foldable And Portable Teapot Water Heater Kettle ",
    "image": "https://img.drz.lazcdn.com/g/kf/Sa28e0c69159d4074914a4296a56c65d0d.jpg_200x200q80.avif"
  },
  {
    "id": 21,
    "title": "Air Fryer",
    "price": 89.99,
    "category": "Home Appliances",
    "description": "4.5L air fryer with adjustable temperature and timer.",
    "image": "https://img.drz.lazcdn.com/static/pk/p/8f441cc35a33ea371718618eca05e7ae.jpg_200x200q75.avif"
  },
  {
    "id": 22,
    "title": "Hand Blender",
    "price": 29.99,
    "category": "Home Appliances",
    "description": "Multi-purpose hand blender with 3 speed settings.",
    "image": "https://img.drz.lazcdn.com/static/pk/p/9bf8c6db36a59552c82746289e9be24f.jpg_200x200q75.avif"
  },
  {
    "id": 23,
    "title": "Microwave Oven",
    "price": 149.99,
    "category": "Home Appliances",
    "description": "20L microwave oven with quick heat and defrost function.",
    "image": "https://img.drz.lazcdn.com/static/pk/p/4fb8123be351d28b10a9638f6ced1397.jpg_200x200q75.avif"
  },
  {
    "id": 24,
    "title": "Coffee Maker",  
    "price": 59.99,
    "category": "Home Appliances",
    "description": "Programmable coffee maker with 12-cup capacity.",
    "image": "https://img.drz.lazcdn.com/static/pk/p/05b3cdcd0a3408662571635e5a27409a.jpg_460x460q80.jpg"
  },

  {
    "id": 25,
    "title": "Wireless Game Controller",
    "price": 49.99,
    "category": "Electronics",
    "description": "Bluetooth-enabled controller compatible with PC & consoles.",
    "image": "https://img.drz.lazcdn.com/static/pk/p/6059e18336640c7f3cc5978ab610eb26.png_200x200q80.avif"
  },
  {
    "id": 26,
    "title": "Gaming Keyboard",
    "price": 69.99,
    "category": "Electronics",
    "description": "Mechanical RGB gaming keyboard with customizable keys.",
    "image": "https://img.drz.lazcdn.com/static/pk/p/e9ab733254eb026c26c102eb3ea7faf0.png_200x200q80.avif"
  },
  {
    "id": 27,
    "title": "Gaming Mouse",
    "price": 39.99,
    "category": "Electronics",
    "description": "Ergonomic gaming mouse with 6 programmable buttons.",
    "image": "https://img.drz.lazcdn.com/static/pk/p/78019c93ec250b9dc455755fc4ee8248.jpg_200x200q80.avif"
  },
  {
    "id": 28,
    "title": "Gaming Headset",
    "price": 59.99,
    "category": "Electronics",
    "description": "Noise-cancelling headset with surround sound.",
    "image": "https://img.drz.lazcdn.com/static/pk/p/2a5bd788e42799235d9b3314957f1246.jpg_200x200q80.avif"
  },
  {
    "id": 29,
    "title": "PlayStation 5 Console",
    "price": 499.99,
    "category": "Electronics",
    "description": "Next-gen gaming console with ultra-fast SSD.",
    "image": "https://img.drz.lazcdn.com/collect/sg/p/316b0528db3588507d9f8cb324c318ec.png_200x200q75.avif"
  },

  {
    "id": 30,
    "title": "Wireless Airbuds",
    "price": 79.99,
    "category": "Electronics",
    "description": "TWS airbuds with noise cancellation and 24hr battery life.",
    "image": "https://img.drz.lazcdn.com/static/pk/p/60bffe82dcfef3a58558d53f836929a0.jpg_200x200q80.avif"
  }
];

export default products;