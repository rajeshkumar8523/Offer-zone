const products = [
  {
    id: 101,
    name: "Gas Safety Device — Auto Leak Shutoff",
    category: "Gas Device",
    price: 3599,
    oldPrice: 4999,
    images: [
      "../IMAGES/g1-1.jpeg",
      "../IMAGES/g1-2.jpeg",
      "../IMAGES/g1-3.jpeg",
      "../IMAGES/g1-4.jpeg",
    ],
    description: "Automatic leak detection, quick shutoff and safety alarm.",
    offers: [
      "10% Instant Discount on SBI Credit Card",
      "Flat ₹300 off on first purchase",
      "Free Delivery",
      "7 Days Replacement",
    ],
    reviews: [
      { user: "Gautham", rating: 5, text: "Excellent quality" },
      { user: "Rahul", rating: 4, text: "Very useful" },
      { user: "Suresh", rating: 5, text: "Easy installation" },
      { user: "Anil", rating: 4, text: "Worth the price" },
      { user: "Kiran", rating: 5, text: "Best gas safety device" },
    ],
  },
  {
    id: 102,
    name: "LPG Safety Device — Pressure Monitor",
    category: "Gas Device",
    price: 4299,
    images: ["../images/g2.jpeg"],
    reviews: [
      { user: "Gautham", rating: 5, text: "Excellent quality" },
      { user: "Rahul", rating: 4, text: "Very useful" },
      { user: "Suresh", rating: 5, text: "Easy installation" },
      { user: "Anil", rating: 4, text: "Worth the price" },
      { user: "Kiran", rating: 5, text: "Best gas safety device" },
    ],
    description: "Real-time pressure monitoring, robust valve shutoff.",
    rating: 4.7,
    reviewsCount: "1.2k",
  },
  {
    id: 103,
    name: "Household Gas Stopper — Instant",
    category: "Gas Device",
    price: 2799,
    images: ["../images/g3.jpeg"],
    reviews: [
      { user: "Gautham", rating: 5, text: "Excellent quality" },
      { user: "Rahul", rating: 4, text: "Very useful" },
      { user: "Suresh", rating: 5, text: "Easy installation" },
      { user: "Anil", rating: 4, text: "Worth the price" },
      { user: "Kiran", rating: 5, text: "Best gas safety device" },
    ],
    description: "Instant action on leakage detection.",
    rating: 4.2,
    reviewsCount: "430",
  },
  {
    id: 104,
    name: "Smart Gas Lock — Durable",
    category: "Gas Device",
    price: 5499,
    images: ["../images/g4.jpeg"],
    reviews: [
      { user: "Gautham", rating: 5, text: "Excellent quality" },
      { user: "Rahul", rating: 4, text: "Very useful" },
      { user: "Suresh", rating: 5, text: "Easy installation" },
      { user: "Anil", rating: 4, text: "Worth the price" },
      { user: "Kiran", rating: 5, text: "Best gas safety device" },
    ],
    description: "Heavy-duty design with tamper protection.",
    rating: 4.5,
    reviewsCount: "680",
  },


  {
    "id": 201,
    "name": "Slim Fit Jeans",
    "category": "jeans",
    "price": 1899,
    "oldPrice": 2499,
    "images": [
      "./IMAGES/p1.jpeg",
      "./IMAGES/jeans2.jpeg",
      "./IMAGES/jeans3.jpeg",
      "./IMAGES/jeans4.jpeg"
    ],
    "description": "Stretchable denim with modern slim fit. Made with premium quality cotton blend fabric for all-day comfort.",
    "offers": [
      "20% Instant Discount on ICICI Credit Card",
      "Free Delivery",
      "30 Days Return Policy",
      "Buy 2 Get 10% off"
    ],
    "reviews": [
      { "user": "Rahul", "rating": 4, "text": "Perfect fit and comfortable" },
      { "user": "Vikram", "rating": 5, "text": "Great quality denim" },
      { "user": "Arjun", "rating": 4, "text": "Good for daily wear" }
    ]
  },
  {
    "id": 202,
    "name": "Formal Trousers",
    "category": "trousers",
    "price": 1599,
    "oldPrice": 2199,
    "images": [
      "./IMAGES/p2.jpeg",
      "./IMAGES/trousers2.jpeg",
      "./IMAGES/trousers3.jpeg",
      "./IMAGES/trousers4.jpeg"
    ],
    "description": "Office-ready fit with premium fabric finish. Perfect for professional settings and formal occasions.",
    "offers": [
      "15% Instant Discount on HDFC Credit Card",
      "Free Delivery",
      "15 Days Return Policy",
      "Buy 1 Get 1 15% off"
    ],
    "reviews": [
      { "user": "Amit", "rating": 5, "text": "Perfect for office wear" },
      { "user": "Rajesh", "rating": 4, "text": "Premium fabric quality" },
      { "user": "Sanjay", "rating": 5, "text": "Excellent fit and finish" }
    ]
  },
  {
    "id": 203,
    "name": "Lycra Pants",
    "category": "casual",
    "price": 1399,
    "oldPrice": 1899,
    "images": [
      "./IMAGES/p3.jpeg",
      "./IMAGES/lycra2.jpeg",
      "./IMAGES/lycra3.jpeg",
      "./IMAGES/lycra4.jpeg"
    ],
    "description": "Stretch comfort with flexible movement. Made with high-quality lycra blend for maximum flexibility.",
    "offers": [
      "25% Instant Discount on Axis Credit Card",
      "Free Delivery",
      "30 Days Return Policy",
      "Buy 2 Get 15% off"
    ],
    "reviews": [
      { "user": "Karan", "rating": 5, "text": "Extremely comfortable" },
      { "user": "Rohan", "rating": 4, "text": "Great for workouts" },
      { "user": "Nikhil", "rating": 5, "text": "Perfect stretchability" }
    ]
  },
  {
    "id": 204,
    "name": "Track Pants",
    "category": "sports",
    "price": 1199,
    "oldPrice": 1699,
    "images": [
      "./IMAGES/p4.jpeg",
      "./IMAGES/track2.jpeg",
      "./IMAGES/track3.jpeg",
      "./IMAGES/track4.jpeg"
    ],
    "description": "Comfortable wear for gym & casual use. Moisture-wicking fabric keeps you dry during workouts.",
    "offers": [
      "20% Instant Discount on Kotak Credit Card",
      "Free Delivery",
      "20 Days Return Policy",
      "Buy 1 Get 1 10% off"
    ],
    "reviews": [
      { "user": "Suresh", "rating": 4, "text": "Perfect for gym sessions" },
      { "user": "Manoj", "rating": 5, "text": "Very comfortable material" },
      { "user": "Deepak", "rating": 4, "text": "Good quality for the price" }
    ]
  },
  {
    "id": 205,
    "name": "Office Trousers",
    "category": "formal",
    "price": 2199,
    "oldPrice": 2999,
    "images": [
      "./IMAGES/p5.jpeg",
      "./IMAGES/office2.jpeg",
      "./IMAGES/office3.jpeg",
      "./IMAGES/office4.jpeg"
    ],
    "description": "Premium wool blend for professional look. Perfect for business meetings and formal events.",
    "offers": [
      "18% Instant Discount on SBI Credit Card",
      "Free Delivery",
      "25 Days Return Policy",
      "Buy 1 Get Tie Free"
    ],
    "reviews": [
      { "user": "Alok", "rating": 5, "text": "Excellent for corporate wear" },
      { "user": "Vinod", "rating": 4, "text": "Premium wool blend fabric" },
      { "user": "Gaurav", "rating": 5, "text": "Perfect for business meetings" }
    ]
  },
  {
    "id": 206,
    "name": "Ripped Jeans",
    "category": "jeans",
    "price": 1699,
    "oldPrice": 2299,
    "images": [
      "./IMAGES/p6.jpeg",
      "./IMAGES/ripped2.jpeg",
      "./IMAGES/ripped3.jpeg",
      "./IMAGES/ripped4.jpeg"
    ],
    "description": "Distressed look with comfort stretch fabric. Trendy design for casual outings and parties.",
    "offers": [
      "22% Instant Discount on ICICI Credit Card",
      "Free Delivery",
      "30 Days Return Policy",
      "Buy 2 Get 12% off"
    ],
    "reviews": [
      { "user": "Ankit", "rating": 4, "text": "Great distressed look" },
      { "user": "Rajat", "rating": 5, "text": "Perfect for casual wear" },
      { "user": "Sumit", "rating": 4, "text": "Comfortable and stylish" }
    ]
  },
  {
    "id": 207,
    "name": "Cargo Pants",
    "category": "casual",
    "price": 1499,
    "oldPrice": 1999,
    "images": [
      "./IMAGES/p7.jpeg",
      "./IMAGES/cargo2.jpeg",
      "./IMAGES/cargo3.jpeg",
      "./IMAGES/cargo4.jpeg"
    ],
    "description": "Multiple pockets with rugged outdoor style. Durable fabric perfect for adventure trips.",
    "offers": [
      "20% Instant Discount on HDFC Credit Card",
      "Free Delivery",
      "25 Days Return Policy",
      "Buy 1 Get Belt Free"
    ],
    "reviews": [
      { "user": "Tarun", "rating": 5, "text": "Perfect for outdoor activities" },
      { "user": "Sachin", "rating": 4, "text": "Multiple useful pockets" },
      { "user": "Prateek", "rating": 5, "text": "Durable and comfortable" }
    ]
  },
  {
    "id": 208,
    "name": "Jogger Pants",
    "category": "sports",
    "price": 1299,
    "oldPrice": 1799,
    "images": [
      "./IMAGES/p8.jpeg",
      "./IMAGES/jogger2.jpeg",
      "./IMAGES/jogger3.jpeg",
      "./IMAGES/jogger4.jpeg"
    ],
    "description": "Elastic ankles for perfect fit during workouts. Lightweight fabric for maximum mobility.",
    "offers": [
      "18% Instant Discount on Axis Credit Card",
      "Free Delivery",
      "30 Days Return Policy",
      "Buy 2 Get 10% off"
    ],
    "reviews": [
      { "user": "Ravi", "rating": 4, "text": "Perfect fit for running" },
      { "user": "Kunal", "rating": 5, "text": "Great for morning walks" },
      { "user": "Anil", "rating": 4, "text": "Comfortable elastic ankles" }
    ]
  },
  {
    "id": 209,
    "name": "Wool Blend Trousers",
    "category": "formal",
    "price": 2499,
    "oldPrice": 3299,
    "images": [
      "./IMAGES/p9.jpeg",
      "./IMAGES/wool2.jpeg",
      "./IMAGES/wool3.jpeg",
      "./IMAGES/wool4.jpeg"
    ],
    "description": "Warm and comfortable for winter business wear. Premium wool blend fabric for cold weather.",
    "offers": [
      "15% Instant Discount on SBI Credit Card",
      "Free Delivery",
      "20 Days Return Policy",
      "Buy 1 Get 1 20% off"
    ],
    "reviews": [
      { "user": "Rajiv", "rating": 5, "text": "Perfect for winter office wear" },
      { "user": "Manish", "rating": 4, "text": "Warm and comfortable" },
      { "user": "Ashok", "rating": 5, "text": "Premium wool blend quality" }
    ]
  },
  {
    "id": 210,
    "name": "Skinny Jeans",
    "category": "jeans",
    "price": 1799,
    "oldPrice": 2399,
    "images": [
      "./IMAGES/p10.jpeg",
      "./IMAGES/skinny2.jpeg",
      "./IMAGES/skinny3.jpeg",
      "./IMAGES/skinny4.jpeg"
    ],
    "description": "Ultra slim fit for modern fashion statement. Trendy design for fashion-forward individuals.",
    "offers": [
      "25% Instant Discount on ICICI Credit Card",
      "Free Delivery",
      "30 Days Return Policy",
      "Buy 2 Get 15% off"
    ],
    "reviews": [
      { "user": "Vivek", "rating": 4, "text": "Perfect slim fit" },
      { "user": "Abhishek", "rating": 5, "text": "Great for parties" },
      { "user": "Siddharth", "rating": 4, "text": "Modern fashionable design" }
    ]
  },
  {
    "id": 211,
    "name": "Cotton Trousers",
    "category": "trousers",
    "price": 1399,
    "oldPrice": 1899,
    "images": [
      "./IMAGES/p11.jpeg",
      "./IMAGES/cottont2.jpeg",
      "./IMAGES/cottont3.jpeg",
      "./IMAGES/cottont4.jpeg"
    ],
    "description": "Breathable cotton fabric for everyday comfort. Perfect for casual office wear and outings.",
    "offers": [
      "20% Instant Discount on HDFC Credit Card",
      "Free Delivery",
      "25 Days Return Policy",
      "Buy 1 Get 1 15% off"
    ],
    "reviews": [
      { "user": "Neeraj", "rating": 5, "text": "Very breathable fabric" },
      { "user": "Pankaj", "rating": 4, "text": "Perfect for summer" },
      { "user": "Harish", "rating": 5, "text": "Comfortable all day wear" }
    ]
  },
  {
    "id": 212,
    "name": "Chino Pants",
    "category": "casual",
    "price": 1599,
    "oldPrice": 2099,
    "images": [
      "./IMAGES/p12.jpeg",
      "./IMAGES/chino2.jpeg",
      "./IMAGES/chino3.jpeg",
      "./IMAGES/chino4.jpeg"
    ],
    "description": "Versatile cotton twill for smart casual looks. Perfect for semi-formal occasions and dates.",
    "offers": [
      "18% Instant Discount on Axis Credit Card",
      "Free Delivery",
      "30 Days Return Policy",
      "Buy 2 Get 12% off"
    ],
    "reviews": [
      { "user": "Rohit", "rating": 5, "text": "Perfect smart casual wear" },
      { "user": "Aakash", "rating": 4, "text": "Great for dates" },
      { "user": "Vikas", "rating": 5, "text": "Versatile and stylish" }
    ]
  },
  {
    "id": 213,
    "name": "Yoga Pants",
    "category": "sports",
    "price": 999,
    "oldPrice": 1499,
    "images": [
      "./IMAGES/p13.jpeg",
      "./IMAGES/yoga2.jpeg",
      "./IMAGES/yoga3.jpeg",
      "./IMAGES/yoga4.jpeg"
    ],
    "description": "High stretch fabric for yoga and flexibility. Perfect for all types of exercises and meditation.",
    "offers": [
      "30% Instant Discount on Kotak Credit Card",
      "Free Delivery",
      "30 Days Return Policy",
      "Buy 2 Get 20% off"
    ],
    "reviews": [
      { "user": "Yogesh", "rating": 5, "text": "Perfect for yoga sessions" },
      { "user": "Sunil", "rating": 4, "text": "Great flexibility" },
      { "user": "Naveen", "rating": 5, "text": "Comfortable for all exercises" }
    ]
  },
  {
    "id": 214,
    "name": "Suit Pants",
    "category": "formal",
    "price": 2899,
    "oldPrice": 3899,
    "images": [
      "./IMAGES/p14.jpeg",
      "./IMAGES/suit2.jpeg",
      "./IMAGES/suit3.jpeg",
      "./IMAGES/suit4.jpeg"
    ],
    "description": "Perfect match for blazer and formal occasions. Premium fabric for weddings and special events.",
    "offers": [
      "12% Instant Discount on SBI Credit Card",
      "Free Delivery",
      "15 Days Return Policy",
      "Buy 1 Get Blazer 30% off"
    ],
    "reviews": [
      { "user": "Ramesh", "rating": 4, "text": "Perfect for weddings" },
      { "user": "Dinesh", "rating": 5, "text": "Excellent with blazer" },
      { "user": "Mukesh", "rating": 4, "text": "Premium formal wear" }
    ]
  },
  {
    "id": 215,
    "name": "Bootcut Jeans",
    "category": "jeans",
    "price": 1899,
    "oldPrice": 2499,
    "images": [
      "./IMAGES/p15.jpeg",
      "./IMAGES/bootcut2.jpeg",
      "./IMAGES/bootcut3.jpeg",
      "./IMAGES/bootcut4.jpeg"
    ],
    "description": "Flared bottom perfect for wearing with boots. Classic design that never goes out of style.",
    "offers": [
      "20% Instant Discount on ICICI Credit Card",
      "Free Delivery",
      "30 Days Return Policy",
      "Buy 1 Get 1 10% off"
    ],
    "reviews": [
      { "user": "Amar", "rating": 4, "text": "Perfect with boots" },
      { "user": "Farhan", "rating": 5, "text": "Classic bootcut style" },
      { "user": "Imran", "rating": 4, "text": "Comfortable flared design" }
    ]
  },
  {
    "id": 216,
    "name": "Linen Trousers",
    "category": "trousers",
    "price": 1799,
    "oldPrice": 2399,
    "images": [
      "./IMAGES/p16.jpeg",
      "./IMAGES/linen2.jpeg",
      "./IMAGES/linen3.jpeg",
      "./IMAGES/linen4.jpeg"
    ],
    "description": "Lightweight linen for summer comfort. Perfect for hot weather and tropical climates.",
    "offers": [
      "22% Instant Discount on HDFC Credit Card",
      "Free Delivery",
      "25 Days Return Policy",
      "Buy 2 Get 15% off"
    ],
    "reviews": [
      { "user": "Sandeep", "rating": 5, "text": "Perfect for summer heat" },
      { "user": "Ajay", "rating": 4, "text": "Lightweight and breathable" },
      { "user": "Bharat", "rating": 5, "text": "Great for tropical climate" }
    ]
  },
  {
    "id": 217,
    "name": "Harem Pants",
    "category": "casual",
    "price": 1199,
    "oldPrice": 1699,
    "images": [
      "./IMAGES/p17.jpeg",
      "./IMAGES/harem2.jpeg",
      "./IMAGES/harem3.jpeg",
      "./IMAGES/harem4.jpeg"
    ],
    "description": "Drop-crotch design for ultimate comfort. Bohemian style perfect for relaxed occasions.",
    "offers": [
      "25% Instant Discount on Axis Credit Card",
      "Free Delivery",
      "30 Days Return Policy",
      "Buy 1 Get 1 20% off"
    ],
    "reviews": [
      { "user": "Kabir", "rating": 4, "text": "Ultimate comfort design" },
      { "user": "Rishi", "rating": 5, "text": "Perfect for relaxed wear" },
      { "user": "Om", "rating": 4, "text": "Bohemian style looks great" }
    ]
  },
  {
    "id": 218,
    "name": "Running Pants",
    "category": "sports",
    "price": 1399,
    "oldPrice": 1899,
    "images": [
      "./IMAGES/p18.jpeg",
      "./IMAGES/running2.jpeg",
      "./IMAGES/running3.jpeg",
      "./IMAGES/running4.jpeg"
    ],
    "description": "Moisture-wicking fabric for intense workouts. Reflective strips for night running safety.",
    "offers": [
      "20% Instant Discount on Kotak Credit Card",
      "Free Delivery",
      "30 Days Return Policy",
      "Buy 2 Get 10% off"
    ],
    "reviews": [
      { "user": "Amitabh", "rating": 5, "text": "Perfect for marathon training" },
      { "user": "Salman", "rating": 4, "text": "Great moisture management" },
      { "user": "Shahrukh", "rating": 5, "text": "Reflective strips are useful" }
    ]
  },
  {
    "id": 219,
    "name": "Pleated Trousers",
    "category": "formal",
    "price": 2299,
    "oldPrice": 2999,
    "images": [
      "./IMAGES/p19.jpeg",
      "./IMAGES/pleated2.jpeg",
      "./IMAGES/pleated3.jpeg",
      "./IMAGES/pleated4.jpeg"
    ],
    "description": "Classic pleated design for elegant look. Traditional style perfect for formal gatherings.",
    "offers": [
      "15% Instant Discount on SBI Credit Card",
      "Free Delivery",
      "20 Days Return Policy",
      "Buy 1 Get Formal Shirt 20% off"
    ],
    "reviews": [
      { "user": "Vijay", "rating": 4, "text": "Classic elegant design" },
      { "user": "Ajit", "rating": 5, "text": "Perfect for formal events" },
      { "user": "Dilip", "rating": 4, "text": "Traditional pleated style" }
    ]
  },
  {
    "id": 220,
    "name": "Straight Fit Jeans",
    "category": "jeans",
    "price": 1699,
    "oldPrice": 2299,
    "images": [
      "./IMAGES/p20.jpeg",
      "./IMAGES/straight2.jpeg",
      "./IMAGES/straight3.jpeg",
      "./IMAGES/straight4.jpeg"
    ],
    "description": "Classic straight cut for traditional look. Timeless design that suits all body types.",
    "offers": [
      "20% Instant Discount on ICICI Credit Card",
      "Free Delivery",
      "30 Days Return Policy",
      "Buy 2 Get 12% off"
    ],
    "reviews": [
      { "user": "Raghav", "rating": 5, "text": "Classic straight fit" },
      { "user": "Krishna", "rating": 4, "text": "Traditional timeless design" },
      { "user": "Madhav", "rating": 5, "text": "Perfect for all occasions" }
    ]
  },
  {
    "id": 221,
    "name": "Corduroy Trousers",
    "category": "trousers",
    "price": 1999,
    "oldPrice": 2699,
    "images": [
      "./IMAGES/p21.jpeg",
      "./IMAGES/corduroy2.jpeg",
      "./IMAGES/corduroy3.jpeg",
      "./IMAGES/corduroy4.jpeg"
    ],
    "description": "Ribbed texture for winter fashion. Warm and stylish perfect for cold weather outings.",
    "offers": [
      "18% Instant Discount on HDFC Credit Card",
      "Free Delivery",
      "25 Days Return Policy",
      "Buy 1 Get 1 15% off"
    ],
    "reviews": [
      { "user": "Harsh", "rating": 4, "text": "Perfect for winter" },
      { "user": "Parth", "rating": 5, "text": "Warm ribbed texture" },
      { "user": "Dev", "rating": 4, "text": "Stylish winter wear" }
    ]
  },
  {
    "id": 222,
    "name": "Carpenter Pants",
    "category": "casual",
    "price": 1499,
    "oldPrice": 1999,
    "images": [
      "./IMAGES/p22.jpeg",
      "./IMAGES/carpenter2.jpeg",
      "./IMAGES/carpenter3.jpeg",
      "./IMAGES/carpenter4.jpeg"
    ],
    "description": "Multiple tool pockets for utility wear. Durable fabric perfect for work and casual use.",
    "offers": [
      "20% Instant Discount on Axis Credit Card",
      "Free Delivery",
      "30 Days Return Policy",
      "Buy 1 Get Tool Belt 30% off"
    ],
    "reviews": [
      { "user": "Rudra", "rating": 5, "text": "Great utility pockets" },
      { "user": "Veer", "rating": 4, "text": "Perfect for work wear" },
      { "user": "Yash", "rating": 5, "text": "Durable fabric quality" }
    ]
  },
  {
    "id": 223,
    "name": "Cycling Pants",
    "category": "sports",
    "price": 1699,
    "oldPrice": 2299,
    "images": [
      "./IMAGES/p23.jpeg",
      "./IMAGES/cycling2.jpeg",
      "./IMAGES/cycling3.jpeg",
      "./IMAGES/cycling4.jpeg"
    ],
    "description": "Padded seat for long cycling sessions. Aerodynamic design for professional cyclists.",
    "offers": [
      "15% Instant Discount on Kotak Credit Card",
      "Free Delivery",
      "30 Days Return Policy",
      "Buy 1 Get Cycling Gloves Free"
    ],
    "reviews": [
      { "user": "Aditya", "rating": 5, "text": "Perfect padding for cycling" },
      { "user": "Surya", "rating": 4, "text": "Great for long rides" },
      { "user": "Chandra", "rating": 5, "text": "Professional cycling gear" }
    ]
  },
  {
    "id": 224,
    "name": "Tuxedo Pants",
    "category": "formal",
    "price": 3499,
    "oldPrice": 4599,
    "images": [
      "./IMAGES/p24.jpeg",
      "./IMAGES/tuxedo2.jpeg",
      "./IMAGES/tuxedo3.jpeg",
      "./IMAGES/tuxedo4.jpeg"
    ],
    "description": "Silk stripe detailing for black-tie events. Premium fabric for weddings and galas.",
    "offers": [
      "10% Instant Discount on SBI Credit Card",
      "Free Delivery",
      "15 Days Return Policy",
      "Buy 1 Get Bow Tie Free"
    ],
    "reviews": [
      { "user": "Virat", "rating": 5, "text": "Perfect for black-tie events" },
      { "user": "Rohit", "rating": 4, "text": "Elegant silk stripe detail" },
      { "user": "Hardik", "rating": 5, "text": "Premium wedding wear" }
    ]
  },
  {
    "id": 225,
    "name": "Boyfriend Jeans",
    "category": "jeans",
    "price": 1599,
    "oldPrice": 2199,
    "images": [
      "./IMAGES/p25.jpeg",
      "./IMAGES/boyfriend2.jpeg",
      "./IMAGES/boyfriend3.jpeg",
      "./IMAGES/boyfriend4.jpeg"
    ],
    "description": "Relaxed fit with distressed details. Comfortable loose fit perfect for casual weekends.",
    "offers": [
      "22% Instant Discount on ICICI Credit Card",
      "Free Delivery",
      "30 Days Return Policy",
      "Buy 2 Get 15% off"
    ],
    "reviews": [
      { "user": "Ishaan", "rating": 4, "text": "Comfortable relaxed fit" },
      { "user": "Aryan", "rating": 5, "text": "Perfect weekend wear" },
      { "user": "Vivaan", "rating": 4, "text": "Great distressed details" }
    ]
  },
  {
    "id": 226,
    "name": "Jersey Trousers",
    "category": "trousers",
    "price": 1199,
    "oldPrice": 1699,
    "images": [
      "./IMAGES/p26.jpeg",
      "./IMAGES/jersey2.jpeg",
      "./IMAGES/jersey3.jpeg",
      "./IMAGES/jersey4.jpeg"
    ],
    "description": "Soft jersey fabric for lounge wear. Ultimate comfort for relaxing at home.",
    "offers": [
      "25% Instant Discount on HDFC Credit Card",
      "Free Delivery",
      "30 Days Return Policy",
      "Buy 1 Get 1 25% off"
    ],
    "reviews": [
      { "user": "Dhruv", "rating": 5, "text": "Ultimate lounge comfort" },
      { "user": "Arnav", "rating": 4, "text": "Soft jersey fabric" },
      { "user": "Shaurya", "rating": 5, "text": "Perfect for home wear" }
    ]
  },
  {
    "id": 227,
    "name": "Denim Joggers",
    "category": "casual",
    "price": 1799,
    "oldPrice": 2399,
    "images": [
      "./IMAGES/p27.jpeg",
      "./IMAGES/denimj2.jpeg",
      "./IMAGES/denimj3.jpeg",
      "./IMAGES/denimj4.jpeg"
    ],
    "description": "Denim fabric with jogger style cuffs. Trendy combination of jeans and joggers.",
    "offers": [
      "20% Instant Discount on Axis Credit Card",
      "Free Delivery",
      "30 Days Return Policy",
      "Buy 2 Get 10% off"
    ],
    "reviews": [
      { "user": "Reyansh", "rating": 4, "text": "Trendy denim jogger style" },
      { "user": "Atharv", "rating": 5, "text": "Perfect casual fusion wear" },
      { "user": "Advik", "rating": 4, "text": "Comfortable jogger cuffs" }
    ]
  },
  {
    "id": 228,
    "name": "Basketball Shorts",
    "category": "sports",
    "price": 899,
    "oldPrice": 1299,
    "images": [
      "./IMAGES/p28.jpeg",
      "./IMAGES/basketball2.jpeg",
      "./IMAGES/basketball3.jpeg",
      "./IMAGES/basketball4.jpeg"
    ],
    "description": "Mesh panels for breathability during sports. Perfect for basketball and outdoor games.",
    "offers": [
      "30% Instant Discount on Kotak Credit Card",
      "Free Delivery",
      "30 Days Return Policy",
      "Buy 2 Get 20% off"
    ],
    "reviews": [
      { "user": "Kian", "rating": 5, "text": "Perfect for basketball" },
      { "user": "Zayan", "rating": 4, "text": "Great breathable mesh" },
      { "user": "Ayaan", "rating": 5, "text": "Comfortable for sports" }
    ]
  },
  {
    "id": 229,
    "name": "Flat Front Trousers",
    "category": "formal",
    "price": 1999,
    "oldPrice": 2699,
    "images": [
      "./IMAGES/p29.jpeg",
      "./IMAGES/flatfront2.jpeg",
      "./IMAGES/flatfront3.jpeg",
      "./IMAGES/flatfront4.jpeg"
    ],
    "description": "Modern slim fit without pleats. Contemporary design for modern professionals.",
    "offers": [
      "15% Instant Discount on SBI Credit Card",
      "Free Delivery",
      "20 Days Return Policy",
      "Buy 1 Get 1 15% off"
    ],
    "reviews": [
      { "user": "Mohit", "rating": 4, "text": "Modern slim fit design" },
      { "user": "Sahil", "rating": 5, "text": "Perfect contemporary look" },
      { "user": "Ritik", "rating": 4, "text": "Great for young professionals" }
    ]
  },
  {
    "id": 230,
    "name": "High-Waisted Jeans",
    "category": "jeans",
    "price": 1899,
    "oldPrice": 2499,
    "images": [
      "./IMAGES/p30.jpeg",
      "./IMAGES/highwaist2.jpeg",
      "./IMAGES/highwaist3.jpeg",
      "./IMAGES/highwaist4.jpeg"
    ],
    "description": "Vintage style with high waist design. Retro fashion making a comeback in modern times.",
    "offers": [
      "20% Instant Discount on ICICI Credit Card",
      "Free Delivery",
      "30 Days Return Policy",
      "Buy 2 Get 12% off"
    ],
    "reviews": [
      { "user": "Rudransh", "rating": 4, "text": "Vintage high waist style" },
      { "user": "Aarav", "rating": 5, "text": "Perfect retro fashion" },
      { "user": "Vihaan", "rating": 4, "text": "Modern vintage combination" }
    ]
  },

  
  // TRACK PANTS (601-612)
  {
    "id": 601,
    "name": "Men Track Pants — Slim Fit",
    "category": "Track Pants",
    "price": 1299,
    "oldPrice": 1999,
    "images": [
      "../IMAGES/tp1-1.jpeg",
      "../IMAGES/tp1-2.jpeg",
      "../IMAGES/tp1-3.jpeg",
      "../IMAGES/tp1-4.jpeg"
    ],
    "description": "Comfortable cotton blend track pants with slim fit design for daily wear and casual outings.",
    "offers": [
      "30% Instant Discount on ICICI Bank",
      "Free Delivery",
      "10 Days Return Policy",
      "Buy 1 Get 1 20% off"
    ],
    "reviews": [
      { "user": "Ravi", "rating": 4, "text": "Perfect fit and comfortable" },
      { "user": "Sandeep", "rating": 5, "text": "Great quality fabric" },
      { "user": "Vinod", "rating": 4, "text": "Good for gym and casual wear" }
    ]
  },
  {
    "id": 602,
    "name": "Sports Track Pants — Dry Fit",
    "category": "Track Pants",
    "price": 1499,
    "oldPrice": 2199,
    "images": [
      "../IMAGES/tp2-1.jpeg",
      "../IMAGES/tp2-2.jpeg",
      "../IMAGES/tp2-3.jpeg",
      "../IMAGES/tp2-4.jpeg"
    ],
    "description": "Sweat-resistant dry fit fabric ideal for workouts, running, and sports activities.",
    "offers": [
      "25% Instant Discount on HDFC Bank",
      "Flat ₹200 off on first purchase",
      "Free Delivery",
      "Easy Returns"
    ],
    "reviews": [
      { "user": "Arun", "rating": 5, "text": "Excellent for workouts" },
      { "user": "Kumar", "rating": 4, "text": "Good sweat absorption" },
      { "user": "Naveen", "rating": 5, "text": "Perfect for running" }
    ]
  },
  {
    "id": 603,
    "name": "Jogger Track Pants — Ankle Fit",
    "category": "Track Pants",
    "price": 1699,
    "oldPrice": 2499,
    "images": [
      "../IMAGES/tp3-1.jpeg",
      "../IMAGES/tp3-2.jpeg",
      "../IMAGES/tp3-3.jpeg",
      "../IMAGES/tp3-4.jpeg"
    ],
    "description": "Trendy jogger style with elastic cuffs and modern design for fashionable casual wear.",
    "offers": [
      "20% Cashback on PayTM",
      "Free Delivery",
      "14 Days Return Policy",
      "Extra 5% off on first order"
    ],
    "reviews": [
      { "user": "Rajesh", "rating": 4, "text": "Stylish and comfortable" },
      { "user": "Manoj", "rating": 5, "text": "Perfect jogger fit" },
      { "user": "Prakash", "rating": 4, "text": "Great for casual outings" }
    ]
  },
  {
    "id": 604,
    "name": "Training Track Pants — Gym Wear",
    "category": "Track Pants",
    "price": 1399,
    "oldPrice": 2099,
    "images": [
      "../IMAGES/tp4-1.jpeg",
      "../IMAGES/tp4-2.jpeg",
      "../IMAGES/tp4-3.jpeg",
      "../IMAGES/tp4-4.jpeg"
    ],
    "description": "Stretchable fabric designed for intense training sessions and gym workouts.",
    "offers": [
      "15% Instant Discount on Axis Bank",
      "Free Delivery above ₹999",
      "7 Days Replacement",
      "Buy 2 Get 10% off"
    ],
    "reviews": [
      { "user": "Vikram", "rating": 5, "text": "Perfect for gym training" },
      { "user": "Satish", "rating": 4, "text": "Good stretch quality" },
      { "user": "Ganesh", "rating": 5, "text": "Durable fabric" }
    ]
  },
  {
    "id": 605,
    "name": "Premium Slim Fit Track Pants",
    "category": "Track Pants",
    "price": 1599,
    "oldPrice": 2399,
    "images": [
      "../IMAGES/tp1-1.jpeg",
      "../IMAGES/tp1-2.jpeg",
      "../IMAGES/tp1-3.jpeg",
      "../IMAGES/tp1-4.jpeg"
    ],
    "description": "High-quality fabric with perfect fit for daily casual wear and light exercises.",
    "offers": [
      "30% Instant Discount on SBI Credit Card",
      "Free Delivery",
      "10 Days Return Policy",
      "Extra ₹150 off on first purchase"
    ],
    "reviews": [
      { "user": "Anand", "rating": 5, "text": "Premium quality material" },
      { "user": "Suresh", "rating": 4, "text": "Perfect slim fit" },
      { "user": "Rohit", "rating": 5, "text": "Worth every penny" }
    ]
  },
  {
    "id": 606,
    "name": "Running Track Pants — Quick Dry",
    "category": "Track Pants",
    "price": 1799,
    "oldPrice": 2699,
    "images": [
      "../IMAGES/tp2-1.jpeg",
      "../IMAGES/tp2-2.jpeg",
      "../IMAGES/tp2-3.jpeg",
      "../IMAGES/tp2-4.jpeg"
    ],
    "description": "Lightweight quick-dry fabric specifically designed for running and outdoor sports.",
    "offers": [
      "25% Cashback on Amazon Pay",
      "Free Delivery",
      "Easy Returns",
      "Buy 1 Get 1 15% off"
    ],
    "reviews": [
      { "user": "Mahesh", "rating": 5, "text": "Best for running" },
      { "user": "Dinesh", "rating": 4, "text": "Lightweight and comfortable" },
      { "user": "Amit", "rating": 5, "text": "Quick dry feature works well" }
    ]
  },
  {
    "id": 607,
    "name": "Designer Jogger Track Pants",
    "category": "Track Pants",
    "price": 1999,
    "oldPrice": 2999,
    "images": [
      "../IMAGES/tp3-1.jpeg",
      "../IMAGES/tp3-2.jpeg",
      "../IMAGES/tp3-3.jpeg",
      "../IMAGES/tp3-4.jpeg"
    ],
    "description": "Stylish jogger track pants with modern design elements for fashion-forward individuals.",
    "offers": [
      "20% Instant Discount on ICICI Bank",
      "Free Delivery",
      "14 Days Return Policy",
      "Flat ₹250 off"
    ],
    "reviews": [
      { "user": "Sanjay", "rating": 4, "text": "Very stylish design" },
      { "user": "Ramesh", "rating": 5, "text": "Perfect for parties" },
      { "user": "Gopal", "rating": 4, "text": "Good fabric quality" }
    ]
  },
  {
    "id": 608,
    "name": "Professional Gym Track Pants",
    "category": "Track Pants",
    "price": 1699,
    "oldPrice": 2599,
    "images": [
      "../IMAGES/tp4-1.jpeg",
      "../IMAGES/tp4-2.jpeg",
      "../IMAGES/tp4-3.jpeg",
      "../IMAGES/tp4-4.jpeg"
    ],
    "description": "Designed for professional training sessions with reinforced stitching and durable fabric.",
    "offers": [
      "15% Instant Discount on HDFC Bank",
      "Free Delivery",
      "7 Days Replacement",
      "Buy 2 Get ₹300 off"
    ],
    "reviews": [
      { "user": "Deepak", "rating": 5, "text": "Professional quality" },
      { "user": "Sunil", "rating": 5, "text": "Perfect for intense workouts" },
      { "user": "Mohan", "rating": 4, "text": "Durable and comfortable" }
    ]
  },
  {
    "id": 609,
    "name": "Casual Slim Fit Track Pants",
    "category": "Track Pants",
    "price": 1199,
    "oldPrice": 1899,
    "images": [
      "../IMAGES/tp1-1.jpeg",
      "../IMAGES/tp1-2.jpeg",
      "../IMAGES/tp1-3.jpeg",
      "../IMAGES/tp1-4.jpeg"
    ],
    "description": "Perfect for casual outings and daily wear with comfortable slim fit design.",
    "offers": [
      "35% Instant Discount on SBI Credit Card",
      "Free Delivery",
      "10 Days Return Policy",
      "Extra ₹100 off"
    ],
    "reviews": [
      { "user": "Karthik", "rating": 4, "text": "Great for daily use" },
      { "user": "Balu", "rating": 5, "text": "Comfortable all day" },
      { "user": "Sai", "rating": 4, "text": "Value for money" }
    ]
  },
  {
    "id": 610,
    "name": "Outdoor Sports Track Pants",
    "category": "Track Pants",
    "price": 1899,
    "oldPrice": 2799,
    "images": [
      "../IMAGES/tp2-1.jpeg",
      "../IMAGES/tp2-2.jpeg",
      "../IMAGES/tp2-3.jpeg",
      "../IMAGES/tp2-4.jpeg"
    ],
    "description": "Durable fabric designed for outdoor activities and sports with UV protection.",
    "offers": [
      "20% Cashback on PayTM",
      "Free Delivery",
      "Easy Returns",
      "Buy 1 Get 1 25% off"
    ],
    "reviews": [
      { "user": "Raju", "rating": 5, "text": "Perfect for outdoor sports" },
      { "user": "Shiva", "rating": 4, "text": "Durable fabric" },
      { "user": "Pavan", "rating": 5, "text": "Great for hiking" }
    ]
  },
  {
    "id": 611,
    "name": "Comfort Jogger Track Pants",
    "category": "Track Pants",
    "price": 1399,
    "oldPrice": 2099,
    "images": [
      "../IMAGES/tp3-1.jpeg",
      "../IMAGES/tp3-2.jpeg",
      "../IMAGES/tp3-3.jpeg",
      "../IMAGES/tp3-4.jpeg"
    ],
    "description": "Maximum comfort with soft fabric and elastic waistband for all-day wear.",
    "offers": [
      "25% Instant Discount on ICICI Bank",
      "Free Delivery",
      "14 Days Return Policy",
      "Flat ₹200 off"
    ],
    "reviews": [
      { "user": "Venkat", "rating": 5, "text": "Extremely comfortable" },
      { "user": "Nagaraj", "rating": 4, "text": "Soft fabric" },
      { "user": "Charan", "rating": 5, "text": "Perfect for lounging" }
    ]
  },
  {
    "id": 612,
    "name": "Advanced Training Track Pants",
    "category": "Track Pants",
    "price": 2099,
    "oldPrice": 3199,
    "images": [
      "../IMAGES/tp4-1.jpeg",
      "../IMAGES/tp4-2.jpeg",
      "../IMAGES/tp4-3.jpeg",
      "../IMAGES/tp4-4.jpeg"
    ],
    "description": "Advanced fabric technology for serious athletes and professional trainers.",
    "offers": [
      "15% Instant Discount on Axis Bank",
      "Free Delivery",
      "7 Days Replacement",
      "Extra 10% off on bulk orders"
    ],
    "reviews": [
      { "user": "Vishal", "rating": 5, "text": "Professional grade quality" },
      { "user": "Ajay", "rating": 5, "text": "Best for athletes" },
      { "user": "Bharat", "rating": 4, "text": "Premium material" }
    ]
  },
  
  // SWEATERS (701-712)
  {
    "id": 701,
    "name": "Winter Sweater — Wool Blend",
    "category": "Sweaters",
    "price": 2199,
    "oldPrice": 3299,
    "images": [
      "../IMAGES/sw1-1.jpeg",
      "../IMAGES/sw1-2.jpeg",
      "../IMAGES/sw1-3.jpeg",
      "../IMAGES/sw1-4.jpeg"
    ],
    "description": "Warm & soft knit sweater made from premium wool blend for cold winter days.",
    "offers": [
      "30% Instant Discount on SBI Credit Card",
      "Free Delivery",
      "10 Days Return Policy",
      "Buy 1 Get 1 20% off"
    ],
    "reviews": [
      { "user": "Priya", "rating": 5, "text": "Very warm and comfortable" },
      { "user": "Anjali", "rating": 4, "text": "Perfect for winters" },
      { "user": "Meera", "rating": 5, "text": "Good quality wool" }
    ]
  },
  {
    "id": 702,
    "name": "Hooded Sweater — Casual Fit",
    "category": "Sweaters",
    "price": 2499,
    "oldPrice": 3699,
    "images": [
      "../IMAGES/sw2-1.jpeg",
      "../IMAGES/sw2-2.jpeg",
      "../IMAGES/sw2-3.jpeg",
      "../IMAGES/sw2-4.jpeg"
    ],
    "description": "Stylish hooded design sweater for everyday casual wear with comfortable fit.",
    "offers": [
      "25% Instant Discount on HDFC Bank",
      "Flat ₹300 off on first purchase",
      "Free Delivery",
      "Easy Returns"
    ],
    "reviews": [
      { "user": "Rohan", "rating": 5, "text": "Love the hooded design" },
      { "user": "Aditya", "rating": 4, "text": "Perfect casual wear" },
      { "user": "Varun", "rating": 5, "text": "Good quality fabric" }
    ]
  },
  {
    "id": 703,
    "name": "Turtleneck Sweater — Classic",
    "category": "Sweaters",
    "price": 2299,
    "oldPrice": 3499,
    "images": [
      "../IMAGES/sw3-1.jpeg",
      "../IMAGES/sw3-2.jpeg",
      "../IMAGES/sw3-3.jpeg",
      "../IMAGES/sw3-4.jpeg"
    ],
    "description": "Elegant high-neck turtleneck sweater providing extra warmth and winter style.",
    "offers": [
      "20% Cashback on PayTM",
      "Free Delivery",
      "14 Days Return Policy",
      "Extra 5% off on first order"
    ],
    "reviews": [
      { "user": "Neha", "rating": 4, "text": "Classic design" },
      { "user": "Sneha", "rating": 5, "text": "Keeps neck warm" },
      { "user": "Pooja", "rating": 4, "text": "Elegant look" }
    ]
  },
  {
    "id": 704,
    "name": "Cardigan Sweater — Button Style",
    "category": "Sweaters",
    "price": 2599,
    "oldPrice": 3899,
    "images": [
      "../IMAGES/sw4-1.jpeg",
      "../IMAGES/sw4-2.jpeg",
      "../IMAGES/sw4-3.jpeg",
      "../IMAGES/sw4-4.jpeg"
    ],
    "description": "Open-front cardigan sweater for versatile layering with button closure.",
    "offers": [
      "15% Instant Discount on Axis Bank",
      "Free Delivery above ₹999",
      "7 Days Replacement",
      "Buy 2 Get 10% off"
    ],
    "reviews": [
      { "user": "Arjun", "rating": 5, "text": "Versatile for layering" },
      { "user": "Karan", "rating": 4, "text": "Perfect cardigan" },
      { "user": "Raj", "rating": 5, "text": "Good for office wear" }
    ]
  },
  {
    "id": 705,
    "name": "Premium Cashmere Sweater",
    "category": "Sweaters",
    "price": 4599,
    "oldPrice": 6899,
    "images": [
      "../IMAGES/sw1-1.jpeg",
      "../IMAGES/sw1-2.jpeg",
      "../IMAGES/sw1-3.jpeg",
      "../IMAGES/sw1-4.jpeg"
    ],
    "description": "Luxurious 100% cashmere sweater for ultimate comfort and premium feel.",
    "offers": [
      "30% Instant Discount on SBI Credit Card",
      "Free Delivery",
      "10 Days Return Policy",
      "Extra ₹500 off on first purchase"
    ],
    "reviews": [
      { "user": "Ananya", "rating": 5, "text": "Ultra soft cashmere" },
      { "user": "Shreya", "rating": 5, "text": "Worth the price" },
      { "user": "Divya", "rating": 5, "text": "Premium quality" }
    ]
  },
  {
    "id": 706,
    "name": "Merino Wool Sweater",
    "category": "Sweaters",
    "price": 3299,
    "oldPrice": 4999,
    "images": [
      "../IMAGES/sw2-1.jpeg",
      "../IMAGES/sw2-2.jpeg",
      "../IMAGES/sw2-3.jpeg",
      "../IMAGES/sw2-4.jpeg"
    ],
    "description": "Fine merino wool sweater providing lightweight warmth and comfort.",
    "offers": [
      "25% Cashback on Amazon Pay",
      "Free Delivery",
      "Easy Returns",
      "Buy 1 Get 1 15% off"
    ],
    "reviews": [
      { "user": "Vikram", "rating": 5, "text": "Lightweight and warm" },
      { "user": "Rahul", "rating": 4, "text": "Good merino quality" },
      { "user": "Amit", "rating": 5, "text": "Perfect for travel" }
    ]
  },
  {
    "id": 707,
    "name": "Oversized Hooded Sweater",
    "category": "Sweaters",
    "price": 2799,
    "oldPrice": 4199,
    "images": [
      "../IMAGES/sw3-1.jpeg",
      "../IMAGES/sw3-2.jpeg",
      "../IMAGES/sw3-3.jpeg",
      "../IMAGES/sw3-4.jpeg"
    ],
    "description": "Comfortable oversized fit sweater with large hood for cozy winter days.",
    "offers": [
      "20% Instant Discount on ICICI Bank",
      "Free Delivery",
      "14 Days Return Policy",
      "Flat ₹350 off"
    ],
    "reviews": [
      { "user": "Tanvi", "rating": 4, "text": "Love the oversized fit" },
      { "user": "Maya", "rating": 5, "text": "Very cozy" },
      { "user": "Isha", "rating": 4, "text": "Perfect for lounging" }
    ]
  },
  {
    "id": 708,
    "name": "Ribbed Turtleneck Sweater",
    "category": "Sweaters",
    "price": 2999,
    "oldPrice": 4499,
    "images": [
      "../IMAGES/sw4-1.jpeg",
      "../IMAGES/sw4-2.jpeg",
      "../IMAGES/sw4-3.jpeg",
      "../IMAGES/sw4-4.jpeg"
    ],
    "description": "Classic ribbed pattern turtleneck sweater for elegant winter fashion.",
    "offers": [
      "15% Instant Discount on HDFC Bank",
      "Free Delivery",
      "7 Days Replacement",
      "Buy 2 Get ₹400 off"
    ],
    "reviews": [
      { "user": "Ravi", "rating": 5, "text": "Beautiful ribbed design" },
      { "user": "Sanjay", "rating": 4, "text": "Elegant look" },
      { "user": "Mohan", "rating": 5, "text": "High quality" }
    ]
  },
  {
    "id": 709,
    "name": "Longline Cardigan Sweater",
    "category": "Sweaters",
    "price": 3199,
    "oldPrice": 4799,
    "images": [
      "../IMAGES/sw1-1.jpeg",
      "../IMAGES/sw1-2.jpeg",
      "../IMAGES/sw1-3.jpeg",
      "../IMAGES/sw1-4.jpeg"
    ],
    "description": "Knee-length cardigan sweater perfect for layering over dresses and shirts.",
    "offers": [
      "35% Instant Discount on SBI Credit Card",
      "Free Delivery",
      "10 Days Return Policy",
      "Extra ₹300 off"
    ],
    "reviews": [
      { "user": "Priyanka", "rating": 4, "text": "Perfect length" },
      { "user": "Simran", "rating": 5, "text": "Great for layering" },
      { "user": "Kavya", "rating": 4, "text": "Versatile piece" }
    ]
  },
  {
    "id": 710,
    "name": "Lightweight Cashmere Sweater",
    "category": "Sweaters",
    "price": 3899,
    "oldPrice": 5899,
    "images": [
      "../IMAGES/sw2-1.jpeg",
      "../IMAGES/sw2-2.jpeg",
      "../IMAGES/sw2-3.jpeg",
      "../IMAGES/sw2-4.jpeg"
    ],
    "description": "Ultra-soft cashmere sweater providing all-day comfort without bulkiness.",
    "offers": [
      "20% Cashback on PayTM",
      "Free Delivery",
      "Easy Returns",
      "Buy 1 Get 1 25% off"
    ],
    "reviews": [
      { "user": "Anjali", "rating": 5, "text": "Lightweight and warm" },
      { "user": "Radhika", "rating": 5, "text": "Premium cashmere" },
      { "user": "Swati", "rating": 4, "text": "Perfect for office" }
    ]
  },
  {
    "id": 711,
    "name": "Cable Knit Wool Sweater",
    "category": "Sweaters",
    "price": 2799,
    "oldPrice": 4199,
    "images": [
      "../IMAGES/sw3-1.jpeg",
      "../IMAGES/sw3-2.jpeg",
      "../IMAGES/sw3-3.jpeg",
      "../IMAGES/sw3-4.jpeg"
    ],
    "description": "Traditional cable knit pattern sweater with classic winter appeal.",
    "offers": [
      "25% Instant Discount on ICICI Bank",
      "Free Delivery",
      "14 Days Return Policy",
      "Flat ₹250 off"
    ],
    "reviews": [
      { "user": "Arun", "rating": 5, "text": "Beautiful cable knit" },
      { "user": "Kumar", "rating": 4, "text": "Traditional design" },
      { "user": "Naveen", "rating": 5, "text": "Warm and stylish" }
    ]
  },
  {
    "id": 712,
    "name": "Fleece Lined Hooded Sweater",
    "category": "Sweaters",
    "price": 3499,
    "oldPrice": 5299,
    "images": [
      "../IMAGES/sw4-1.jpeg",
      "../IMAGES/sw4-2.jpeg",
      "../IMAGES/sw4-3.jpeg",
      "../IMAGES/sw4-4.jpeg"
    ],
    "description": "Extra warm hooded sweater with fleece lining for extreme winter conditions.",
    "offers": [
      "15% Instant Discount on Axis Bank",
      "Free Delivery",
      "7 Days Replacement",
      "Extra 10% off on bulk orders"
    ],
    "reviews": [
      { "user": "Rohan", "rating": 5, "text": "Extremely warm" },
      { "user": "Aditya", "rating": 5, "text": "Perfect for snow" },
      { "user": "Varun", "rating": 4, "text": "Good fleece lining" }
    ]
  },
  
  // SHIRTING & SHOOTING (801-812)
  {
    "id": 801,
    "name": "Formal Shirt — Premium Cotton",
    "category": "Shirting",
    "price": 1899,
    "oldPrice": 2799,
    "images": [
      "../IMAGES/sh1-1.jpeg",
      "../IMAGES/sh1-2.jpeg",
      "../IMAGES/sh1-3.jpeg",
      "../IMAGES/sh1-4.jpeg"
    ],
    "description": "Premium cotton formal shirt with perfect fit for office meetings and formal functions.",
    "offers": [
      "30% Instant Discount on SBI Credit Card",
      "Free Delivery",
      "10 Days Return Policy",
      "Buy 1 Get 1 20% off"
    ],
    "reviews": [
      { "user": "Raj", "rating": 5, "text": "Perfect formal shirt" },
      { "user": "Kiran", "rating": 4, "text": "Good cotton quality" },
      { "user": "Anil", "rating": 5, "text": "Great for office wear" }
    ]
  },
  {
    "id": 802,
    "name": "Casual Checked Shirt — Regular Fit",
    "category": "Shirting",
    "price": 1599,
    "oldPrice": 2399,
    "images": [
      "../IMAGES/sh2-1.jpeg",
      "../IMAGES/sh2-2.jpeg",
      "../IMAGES/sh2-3.jpeg",
      "../IMAGES/sh2-4.jpeg"
    ],
    "description": "Comfortable checked shirt with regular fit perfect for daily casual wear.",
    "offers": [
      "25% Instant Discount on HDFC Bank",
      "Flat ₹200 off on first purchase",
      "Free Delivery",
      "Easy Returns"
    ],
    "reviews": [
      { "user": "Suresh", "rating": 4, "text": "Comfortable fit" },
      { "user": "Ramesh", "rating": 5, "text": "Nice checks pattern" },
      { "user": "Mahesh", "rating": 4, "text": "Good for casual wear" }
    ]
  },
  {
    "id": 803,
    "name": "Party Wear Shirt — Slim Fit",
    "category": "Shirting",
    "price": 2199,
    "oldPrice": 3299,
    "images": [
      "../IMAGES/sh3-1.jpeg",
      "../IMAGES/sh3-2.jpeg",
      "../IMAGES/sh3-3.jpeg",
      "../IMAGES/sh3-4.jpeg"
    ],
    "description": "Stylish slim fit party wear shirt perfect for parties, events and special occasions.",
    "offers": [
      "20% Cashback on PayTM",
      "Free Delivery",
      "14 Days Return Policy",
      "Extra 5% off on first order"
    ],
    "reviews": [
      { "user": "Vijay", "rating": 5, "text": "Perfect for parties" },
      { "user": "Ajay", "rating": 4, "text": "Great slim fit" },
      { "user": "Sanjay", "rating": 5, "text": "Stylish design" }
    ]
  },
  {
    "id": 804,
    "name": "Linen Shirt — Summer Wear",
    "category": "Shirting",
    "price": 1999,
    "oldPrice": 2999,
    "images": [
      "../IMAGES/sh4-1.jpeg",
      "../IMAGES/sh4-2.jpeg",
      "../IMAGES/sh4-3.jpeg",
      "../IMAGES/sh4-4.jpeg"
    ],
    "description": "Breathable linen fabric shirt perfect for hot summer weather and vacations.",
    "offers": [
      "15% Instant Discount on Axis Bank",
      "Free Delivery above ₹999",
      "7 Days Replacement",
      "Buy 2 Get 10% off"
    ],
    "reviews": [
      { "user": "Ravi", "rating": 5, "text": "Perfect for summer" },
      { "user": "Kumar", "rating": 4, "text": "Breathable fabric" },
      { "user": "Gopal", "rating": 5, "text": "Great for beach wear" }
    ]
  },
  {
    "id": 805,
    "name": "Denim Shirt — Classic Fit",
    "category": "Shirting",
    "price": 1699,
    "oldPrice": 2599,
    "images": [
      "../IMAGES/sh1-1.jpeg",
      "../IMAGES/sh1-2.jpeg",
      "../IMAGES/sh1-3.jpeg",
      "../IMAGES/sh1-4.jpeg"
    ],
    "description": "Rugged denim shirt with classic fit perfect for casual styling and outdoor wear.",
    "offers": [
      "30% Instant Discount on SBI Credit Card",
      "Free Delivery",
      "10 Days Return Policy",
      "Extra ₹150 off on first purchase"
    ],
    "reviews": [
      { "user": "Arun", "rating": 4, "text": "Good denim quality" },
      { "user": "Sunil", "rating": 5, "text": "Classic denim shirt" },
      { "user": "Mohan", "rating": 4, "text": "Perfect casual wear" }
    ]
  },
  {
    "id": 806,
    "name": "Printed Casual Shirt — Tropical",
    "category": "Shirting",
    "price": 1799,
    "oldPrice": 2699,
    "images": [
      "../IMAGES/sh2-1.jpeg",
      "../IMAGES/sh2-2.jpeg",
      "../IMAGES/sh2-3.jpeg",
      "../IMAGES/sh2-4.jpeg"
    ],
    "description": "Vibrant tropical print shirt perfect for summer vacations and beach parties.",
    "offers": [
      "25% Cashback on Amazon Pay",
      "Free Delivery",
      "Easy Returns",
      "Buy 1 Get 1 15% off"
    ],
    "reviews": [
      { "user": "Vikram", "rating": 5, "text": "Beautiful prints" },
      { "user": "Satish", "rating": 4, "text": "Perfect for summer" },
      { "user": "Ganesh", "rating": 5, "text": "Vibrant colors" }
    ]
  },
  {
    "id": 807,
    "name": "Executive Formal Shirt — Slim Fit",
    "category": "Shirting",
    "price": 2399,
    "oldPrice": 3599,
    "images": [
      "../IMAGES/sh3-1.jpeg",
      "../IMAGES/sh3-2.jpeg",
      "../IMAGES/sh3-3.jpeg",
      "../IMAGES/sh3-4.jpeg"
    ],
    "description": "Premium fabric executive formal shirt with slim fit for corporate meetings.",
    "offers": [
      "20% Instant Discount on ICICI Bank",
      "Free Delivery",
      "14 Days Return Policy",
      "Flat ₹300 off"
    ],
    "reviews": [
      { "user": "Anand", "rating": 5, "text": "Perfect for corporate" },
      { "user": "Suresh", "rating": 5, "text": "Premium quality" },
      { "user": "Rohit", "rating": 4, "text": "Executive look" }
    ]
  },
  {
    "id": 808,
    "name": "Plaid Casual Shirt — Autumn Colors",
    "category": "Shirting",
    "price": 1499,
    "oldPrice": 2299,
    "images": [
      "../IMAGES/sh4-1.jpeg",
      "../IMAGES/sh4-2.jpeg",
      "../IMAGES/sh4-3.jpeg",
      "../IMAGES/sh4-4.jpeg"
    ],
    "description": "Warm plaid pattern shirt in autumn colors perfect for casual outings.",
    "offers": [
      "15% Instant Discount on HDFC Bank",
      "Free Delivery",
      "7 Days Replacement",
      "Buy 2 Get ₹200 off"
    ],
    "reviews": [
      { "user": "Deepak", "rating": 4, "text": "Nice plaid pattern" },
      { "user": "Rajesh", "rating": 5, "text": "Warm autumn colors" },
      { "user": "Manoj", "rating": 4, "text": "Good casual shirt" }
    ]
  },
  {
    "id": 809,
    "name": "Silk Blend Party Shirt",
    "category": "Shirting",
    "price": 2999,
    "oldPrice": 4499,
    "images": [
      "../IMAGES/sh1-1.jpeg",
      "../IMAGES/sh1-2.jpeg",
      "../IMAGES/sh1-3.jpeg",
      "../IMAGES/sh1-4.jpeg"
    ],
    "description": "Luxurious silk blend shirt perfect for special occasions and formal parties.",
    "offers": [
      "35% Instant Discount on SBI Credit Card",
      "Free Delivery",
      "10 Days Return Policy",
      "Extra ₹400 off"
    ],
    "reviews": [
      { "user": "Karthik", "rating": 5, "text": "Luxurious silk blend" },
      { "user": "Balu", "rating": 5, "text": "Perfect for weddings" },
      { "user": "Sai", "rating": 4, "text": "Elegant look" }
    ]
  },
  {
    "id": 810,
    "name": "Pure Linen Beach Shirt",
    "category": "Shirting",
    "price": 1899,
    "oldPrice": 2899,
    "images": [
      "../IMAGES/sh2-1.jpeg",
      "../IMAGES/sh2-2.jpeg",
      "../IMAGES/sh2-3.jpeg",
      "../IMAGES/sh2-4.jpeg"
    ],
    "description": "100% pure linen shirt perfect for beach vacations and summer outings.",
    "offers": [
      "20% Cashback on PayTM",
      "Free Delivery",
      "Easy Returns",
      "Buy 1 Get 1 25% off"
    ],
    "reviews": [
      { "user": "Raju", "rating": 5, "text": "Perfect beach shirt" },
      { "user": "Shiva", "rating": 4, "text": "100% pure linen" },
      { "user": "Pavan", "rating": 5, "text": "Great for vacation" }
    ]
  },
  {
    "id": 811,
    "name": "Vintage Washed Denim Shirt",
    "category": "Shirting",
    "price": 1799,
    "oldPrice": 2699,
    "images": [
      "../IMAGES/sh3-1.jpeg",
      "../IMAGES/sh3-2.jpeg",
      "../IMAGES/sh3-3.jpeg",
      "../IMAGES/sh3-4.jpeg"
    ],
    "description": "Distressed vintage look denim shirt with washed finish for casual style.",
    "offers": [
      "25% Instant Discount on ICICI Bank",
      "Free Delivery",
      "14 Days Return Policy",
      "Flat ₹250 off"
    ],
    "reviews": [
      { "user": "Venkat", "rating": 4, "text": "Nice vintage look" },
      { "user": "Nagaraj", "rating": 5, "text": "Perfect distressed finish" },
      { "user": "Charan", "rating": 4, "text": "Good casual wear" }
    ]
  },
  {
    "id": 812,
    "name": "Geometric Print Shirt",
    "category": "Shirting",
    "price": 1699,
    "oldPrice": 2599,
    "images": [
      "../IMAGES/sh4-1.jpeg",
      "../IMAGES/sh4-2.jpeg",
      "../IMAGES/sh4-3.jpeg",
      "../IMAGES/sh4-4.jpeg"
    ],
    "description": "Modern geometric patterns shirt for stylish casual and party wear.",
    "offers": [
      "15% Instant Discount on Axis Bank",
      "Free Delivery",
      "7 Days Replacement",
      "Extra 10% off on bulk orders"
    ],
    "reviews": [
      { "user": "Vishal", "rating": 5, "text": "Modern geometric design" },
      { "user": "Ajay", "rating": 4, "text": "Unique patterns" },
      { "user": "Bharat", "rating": 5, "text": "Stylish and trendy" }
    ]
  },
  
  // JEWELLERY (901-912)
  {
    "id": 901,
    "name": "Gold Plated Necklace Set",
    "category": "Jewellery",
    "price": 3499,
    "oldPrice": 5299,
    "images": [
      "../IMAGES/j1-1.jpeg",
      "../IMAGES/j1-2.jpeg",
      "../IMAGES/j1-3.jpeg",
      "../IMAGES/j1-4.jpeg"
    ],
    "description": "Traditional gold plated necklace set with premium finish and elegant design.",
    "offers": [
      "30% Instant Discount on SBI Credit Card",
      "Free Delivery",
      "10 Days Return Policy",
      "Buy 1 Get 1 20% off"
    ],
    "reviews": [
      { "user": "Anjali", "rating": 5, "text": "Beautiful necklace set" },
      { "user": "Priya", "rating": 4, "text": "Premium finish" },
      { "user": "Meera", "rating": 5, "text": "Perfect for weddings" }
    ]
  },
  {
    "id": 902,
    "name": "One Gram Gold Bangles Set",
    "category": "Jewellery",
    "price": 2799,
    "oldPrice": 4299,
    "images": [
      "../IMAGES/j2-1.jpeg",
      "../IMAGES/j2-2.jpeg",
      "../IMAGES/j2-3.jpeg",
      "../IMAGES/j2-4.jpeg"
    ],
    "description": "Elegant bangles set with traditional gold finish and intricate designs.",
    "offers": [
      "25% Instant Discount on HDFC Bank",
      "Flat ₹300 off on first purchase",
      "Free Delivery",
      "Easy Returns"
    ],
    "reviews": [
      { "user": "Sneha", "rating": 5, "text": "Beautiful bangles" },
      { "user": "Radha", "rating": 4, "text": "Traditional designs" },
      { "user": "Lakshmi", "rating": 5, "text": "Good gold plating" }
    ]
  },
  {
    "id": 903,
    "name": "Gold Plated Earrings",
    "category": "Jewellery",
    "price": 1499,
    "oldPrice": 2299,
    "images": [
      "../IMAGES/j3-1.jpeg",
      "../IMAGES/j3-2.jpeg",
      "../IMAGES/j3-3.jpeg",
      "../IMAGES/j3-4.jpeg"
    ],
    "description": "Lightweight gold plated earrings with rich polish and elegant designs.",
    "offers": [
      "20% Cashback on PayTM",
      "Free Delivery",
      "14 Days Return Policy",
      "Extra 5% off on first order"
    ],
    "reviews": [
      { "user": "Pooja", "rating": 4, "text": "Lightweight and pretty" },
      { "user": "Divya", "rating": 5, "text": "Beautiful designs" },
      { "user": "Swati", "rating": 4, "text": "Good quality plating" }
    ]
  },
  {
    "id": 904,
    "name": "Traditional One Gram Haram",
    "category": "Jewellery",
    "price": 3999,
    "oldPrice": 5999,
    "images": [
      "../IMAGES/j4-1.jpeg",
      "../IMAGES/j4-2.jpeg",
      "../IMAGES/j4-3.jpeg",
      "../IMAGES/j4-4.jpeg"
    ],
    "description": "Grand temple-style design haram perfect for weddings and special occasions.",
    "offers": [
      "15% Instant Discount on Axis Bank",
      "Free Delivery above ₹999",
      "7 Days Replacement",
      "Buy 2 Get 10% off"
    ],
    "reviews": [
      { "user": "Rani", "rating": 5, "text": "Grand design" },
      { "user": "Geeta", "rating": 5, "text": "Perfect for weddings" },
      { "user": "Sita", "rating": 4, "text": "Traditional look" }
    ]
  },
  {
    "id": 905,
    "name": "Gold Plated Rings Set",
    "category": "Jewellery",
    "price": 1299,
    "oldPrice": 1999,
    "images": [
      "../IMAGES/j1-1.jpeg",
      "../IMAGES/j1-2.jpeg",
      "../IMAGES/j1-3.jpeg",
      "../IMAGES/j1-4.jpeg"
    ],
    "description": "Set of 4 gold plated rings with different designs for various occasions.",
    "offers": [
      "30% Instant Discount on SBI Credit Card",
      "Free Delivery",
      "10 Days Return Policy",
      "Extra ₹150 off on first purchase"
    ],
    "reviews": [
      { "user": "Ananya", "rating": 5, "text": "Beautiful ring set" },
      { "user": "Shreya", "rating": 4, "text": "Multiple designs" },
      { "user": "Kavya", "rating": 5, "text": "Value for money" }
    ]
  },
  {
    "id": 906,
    "name": "Gold Plated Chain Set",
    "category": "Jewellery",
    "price": 2199,
    "oldPrice": 3399,
    "images": [
      "../IMAGES/j2-1.jpeg",
      "../IMAGES/j2-2.jpeg",
      "../IMAGES/j2-3.jpeg",
      "../IMAGES/j2-4.jpeg"
    ],
    "description": "Multiple chain styles gold plated set perfect for layering and daily wear.",
    "offers": [
      "25% Cashback on Amazon Pay",
      "Free Delivery",
      "Easy Returns",
      "Buy 1 Get 1 15% off"
    ],
    "reviews": [
      { "user": "Neha", "rating": 4, "text": "Perfect for layering" },
      { "user": "Simran", "rating": 5, "text": "Multiple chain styles" },
      { "user": "Isha", "rating": 4, "text": "Good daily wear" }
    ]
  },
  {
    "id": 907,
    "name": "Diamond Studded Necklace",
    "category": "Jewellery",
    "price": 4599,
    "oldPrice": 6899,
    "images": [
      "../IMAGES/j3-1.jpeg",
      "../IMAGES/j3-2.jpeg",
      "../IMAGES/j3-3.jpeg",
      "../IMAGES/j3-4.jpeg"
    ],
    "description": "Luxury gold plated necklace with diamond studded accents for special occasions.",
    "offers": [
      "20% Instant Discount on ICICI Bank",
      "Free Delivery",
      "14 Days Return Policy",
      "Flat ₹500 off"
    ],
    "reviews": [
      { "user": "Rashmi", "rating": 5, "text": "Luxury look" },
      { "user": "Nandini", "rating": 5, "text": "Beautiful diamonds" },
      { "user": "Madhavi", "rating": 4, "text": "Perfect for parties" }
    ]
  },
  {
    "id": 908,
    "name": "Antique Gold Bangles",
    "category": "Jewellery",
    "price": 3299,
    "oldPrice": 4999,
    "images": [
      "../IMAGES/j4-1.jpeg",
      "../IMAGES/j4-2.jpeg",
      "../IMAGES/j4-3.jpeg",
      "../IMAGES/j4-4.jpeg"
    ],
    "description": "Traditional antique finish gold bangles with intricate carvings and designs.",
    "offers": [
      "15% Instant Discount on HDFC Bank",
      "Free Delivery",
      "7 Days Replacement",
      "Buy 2 Get ₹400 off"
    ],
    "reviews": [
      { "user": "Latha", "rating": 5, "text": "Beautiful antique finish" },
      { "user": "Sarala", "rating": 4, "text": "Traditional designs" },
      { "user": "Padma", "rating": 5, "text": "Intricate carvings" }
    ]
  },
  {
    "id": 909,
    "name": "Jhumka Earrings Gold Plated",
    "category": "Jewellery",
    "price": 1899,
    "oldPrice": 2899,
    "images": [
      "../IMAGES/j1-1.jpeg",
      "../IMAGES/j1-2.jpeg",
      "../IMAGES/j1-3.jpeg",
      "../IMAGES/j1-4.jpeg"
    ],
    "description": "Traditional jhumka design earrings with bells and intricate gold plating.",
    "offers": [
      "35% Instant Discount on SBI Credit Card",
      "Free Delivery",
      "10 Days Return Policy",
      "Extra ₹200 off"
    ],
    "reviews": [
      { "user": "Gayatri", "rating": 4, "text": "Traditional jhumkas" },
      { "user": "Parvati", "rating": 5, "text": "Beautiful bells design" },
      { "user": "Saraswati", "rating": 4, "text": "Good for festivals" }
    ]
  },
  {
    "id": 910,
    "name": "Modern Design Haram Set",
    "category": "Jewellery",
    "price": 3699,
    "oldPrice": 5599,
    "images": [
      "../IMAGES/j2-1.jpeg",
      "../IMAGES/j2-2.jpeg",
      "../IMAGES/j2-3.jpeg",
      "../IMAGES/j2-4.jpeg"
    ],
    "description": "Contemporary haram design with pearl accents and modern styling.",
    "offers": [
      "20% Cashback on PayTM",
      "Free Delivery",
      "Easy Returns",
      "Buy 1 Get 1 25% off"
    ],
    "reviews": [
      { "user": "Chitra", "rating": 5, "text": "Modern design" },
      { "user": "Vijaya", "rating": 4, "text": "Beautiful pearls" },
      { "user": "Sumathi", "rating": 5, "text": "Contemporary look" }
    ]
  },
  {
    "id": 911,
    "name": "Solitaire Gold Ring",
    "category": "Jewellery",
    "price": 1699,
    "oldPrice": 2599,
    "images": [
      "../IMAGES/j3-1.jpeg",
      "../IMAGES/j3-2.jpeg",
      "../IMAGES/j3-3.jpeg",
      "../IMAGES/j3-4.jpeg"
    ],
    "description": "Elegant solitaire design gold plated ring with stone setting.",
    "offers": [
      "25% Instant Discount on ICICI Bank",
      "Free Delivery",
      "14 Days Return Policy",
      "Flat ₹200 off"
    ],
    "reviews": [
      { "user": "Mohan", "rating": 4, "text": "Elegant solitaire" },
      { "user": "Rohan", "rating": 5, "text": "Beautiful stone setting" },
      { "user": "Sohan", "rating": 4, "text": "Good for gifting" }
    ]
  },
  {
    "id": 912,
    "name": "Gold Plated Mangalsutra Chain",
    "category": "Jewellery",
    "price": 2599,
    "oldPrice": 3999,
    "images": [
      "../IMAGES/j4-1.jpeg",
      "../IMAGES/j4-2.jpeg",
      "../IMAGES/j4-3.jpeg",
      "../IMAGES/j4-4.jpeg"
    ],
    "description": "Traditional mangalsutra design chain with black beads and gold plating.",
    "offers": [
      "15% Instant Discount on Axis Bank",
      "Free Delivery",
      "7 Days Replacement",
      "Extra 10% off on bulk orders"
    ],
    "reviews": [
      { "user": "Sunita", "rating": 5, "text": "Traditional mangalsutra" },
      { "user": "Rekha", "rating": 5, "text": "Perfect black beads" },
      { "user": "Usha", "rating": 4, "text": "Good for married women" }
    ]
  }
];

/* ================== GET PRODUCT ================== */
const params = new URLSearchParams(window.location.search);
const productId = Number(params.get("id"));
const product = products.find((p) => p.id === productId);

if (!product) {
  document.body.innerHTML =
    "<h1 class='text-center mt-20 text-xl'>Product not found</h1>";
  throw new Error("Invalid product ID");
}

/* ================== IMAGE GALLERY ================== */
document.getElementById("productImage").src = product.images[0];

// Desktop thumbnails
document.querySelectorAll(".thumb").forEach((img, i) => {
  if (product.images[i]) img.src = product.images[i];
});

function changeImage(src) {
  document.getElementById("productImage").src = src;
}

// Mobile slider
const mobileSlider = document.getElementById("mobileSlider");
let currentSlide = 0;

product.images.forEach((img) => {
  mobileSlider.innerHTML += `
    <img src="${img}" class="min-w-full object-contain border rounded">
  `;
});

function updateSlide() {
  mobileSlider.style.transform = `translateX(-${currentSlide * 100}%)`;
}
function nextSlide() {
  if (currentSlide < product.images.length - 1) {
    currentSlide++;
    updateSlide();
  }
}
function prevSlide() {
  if (currentSlide > 0) {
    currentSlide--;
    updateSlide();
  }
}
function changeImage(imgEl) {
  // Change main image
  document.getElementById("productImage").src = imgEl.src;

  // Remove active class from all thumbnails
  document.querySelectorAll(".thumb").forEach(t =>
    t.classList.remove("active")
  );

  // Add active class to selected thumbnail
  imgEl.classList.add("active");
}
const firstThumb = document.querySelector(".thumb");
if (firstThumb) {
  firstThumb.classList.add("active");
}

/* ================== SET PRODUCT DETAILS ================== */
document.getElementById("productName").innerText = product.name;
document.getElementById("productCategory").innerText = product.category;
document.getElementById(
  "productPrice"
).innerText = `₹${product.price.toLocaleString()}`;
document.getElementById("oldPrice").innerText = product.oldPrice
  ? `₹${product.oldPrice.toLocaleString()}`
  : "";
document.getElementById("productDesc").innerText = product.description;

/* ================== RATINGS & REVIEWS ================== */
const ratingEl = document.getElementById("productRating");
const reviewsCountEl = document.getElementById("reviewsCount");
const reviewsContainer = document.getElementById("reviewsContainer");
const offersList = document.getElementById("offersList");

function renderStars(rating) {
  let stars = "";
  for (let i = 1; i <= 5; i++) {
    stars +=
      i <= Math.round(rating)
        ? `<i class="fa-solid fa-star text-yellow-400"></i>`
        : `<i class="fa-regular fa-star text-yellow-400"></i>`;
  }
  return stars;
}
 
 

/* ================== OFFERS ================== */
offersList.innerHTML = "";

if (product.offers && product.offers.length > 0) {
  product.offers.forEach((o) => {
    offersList.innerHTML += `<li>✔ ${o}</li>`;
  });
} else {
  // 🎁 fallback offers
  offersList.innerHTML = `
    <li>✔ Free Delivery</li>
    <li>✔ Secure Packaging</li>
    <li class="text-gray-400">No bank offers available</li>
  `;
}

/* ================== SIMILAR PRODUCTS (FULL CARD) ================== */
function renderProductCard(p) {
  const rating = getAverageRating(p);
  const reviews = getReviewCount(p);

  return `
    <article class="bg-white product-card shadow-sm p-4 cursor-pointer"
      data-id="${p.id}"
      data-name="${p.name}"
      data-price="${p.price}"
      data-img="${p.images[0]}">

      <!-- IMAGE -->
      <div class="img-wrap rounded-lg">
        <div class="like-btn" onclick="event.stopPropagation(); toggleLike(this)">
          <i class="fa-solid fa-heart"></i>
        </div>

        <!-- IMAGE CLICKABLE -->
        <a href="./PRODUCTS/product.html?id=${p.id}" onclick="event.stopPropagation()">
          <img src="${p.images[0]}" alt="${p.name}" class="product-img">
        </a>
      </div>

      <!-- CONTENT -->
      <div class="mt-4">
        <p class="text-sm text-slate-500">${p.category}</p>

        <!-- TITLE CLICKABLE -->
        <a href="./PRODUCTS/product.html?id=${p.id}" onclick="event.stopPropagation()">
          <h4 class="text-lg font-bold truncate-2 hover:text-orange-500">
            ${p.name}
          </h4>
        </a>

        <p class="text-sm text-slate-600 truncate-2">
          ${p.description}
        </p>

        <!-- RATINGS -->
        <div class="flex items-center gap-2 stars mt-2">
          <span class="text-sm font-semibold">${rating}</span>
          ${renderStars(rating)}
          <span class="text-xs text-gray-400">(${reviews})</span>
        </div>

        <p class="text-2xl font-extrabold text-orange-600 mt-3">
          ₹${p.price.toLocaleString()}
        </p>
      </div>

      <!-- BUTTONS -->
      <div class="flex gap-3 mt-3">

        <!-- BUY BUTTON -->
        <a href="./buy.html" onclick="event.stopPropagation()"
          class="btn-orange px-4 py-2 rounded-full text-center w-1/2 text-sm font-semibold">
          Buy
        </a>

        <!-- ADD TO CART BUTTON -->
        <button class="add-cart-btn btn-outline px-4 py-2 rounded-full w-1/2 text-sm font-semibold"
          onclick="event.stopPropagation(); addToCart(${p.id})">
          Add to Cart
        </button>

      </div>
    </article>
  `;
}

function getAverageRating(p) {
  if (p.reviews && p.reviews.length > 0) {
    return (
      p.reviews.reduce((sum, r) => sum + r.rating, 0) /
      p.reviews.length
    ).toFixed(1);
  }
  return p.rating || "0.0";
}

function getReviewCount(p) {
  if (p.reviews && p.reviews.length > 0) {
    return p.reviews.length;
  }
  return p.reviewsCount || 0;
}


function renderStars(rating) {
  let stars = "";
  for (let i = 1; i <= 5; i++) {
    stars +=
      i <= Math.round(rating)
        ? `<i class="fa-solid fa-star text-yellow-400"></i>`
        : `<i class="fa-regular fa-star text-yellow-400"></i>`;
  }
  return stars;
}

const similarContainer = document.getElementById("similarProducts");
similarContainer.innerHTML = "";

products
  .filter((p) => p.category === product.category && p.id !== product.id)
  .forEach((p) => {
    similarContainer.innerHTML += renderProductCard(p);
  });

/* ================== MOBILE MENU ================== */
function toggleMenu() {
  document.getElementById("mobileMenu").classList.toggle("hidden");
}

// ---------- ADD TO CART ----------
function addToCart(productId) {
  const product = products.find(p => p.id === productId);
  if (!product) return;

  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  const existing = cart.find(item => item.id === product.id);

  if (existing) {
    existing.qty += 1;
  } else {
    cart.push({
      id: product.id,   // ✅ VERY IMPORTANT
      name: product.name,
      price: product.price,
      img: product.images[0],
      qty: 1
    });
  }

  localStorage.setItem("cart", JSON.stringify(cart));
  alert("✅ Product added to cart");
}




function toggleLike(btn) {
  btn.classList.toggle("liked");

  const card = btn.closest(".product-card");

  const product = {
    id: card.dataset.id,
    name: card.dataset.name,
    price: card.dataset.price,
    img: card.dataset.img,
  };

  let liked = JSON.parse(localStorage.getItem("likedProducts")) || [];

  if (btn.classList.contains("liked")) {
    // ADD product to liked list
    liked.push(product);
  } else {
    // REMOVE product
    liked = liked.filter((p) => p.id !== product.id);
  }

  localStorage.setItem("likedProducts", JSON.stringify(liked));
}
function typeText(el) {
  const text = el.dataset.text;
  el.textContent = "";
  let i = 0;

  const interval = setInterval(() => {
    el.textContent += text[i];
    i++;
    if (i === text.length) clearInterval(interval);
  }, 70);
}

document.querySelectorAll(".typing-text").forEach(typeText);

const allCards = document.querySelectorAll(".product-card");



 function getProductRatingData(product) {
  if (product.reviews && product.reviews.length > 0) {
    const total = product.reviews.length;
    const avg =
      product.reviews.reduce((s, r) => s + r.rating, 0) / total;

    return {
      avg: avg.toFixed(1),
      total,
      stars: product.reviews.map(r => r.rating)
    };
  }

  return {
    avg: product.rating || "0.0",
    total: product.reviewsCount || 0,
    stars: []
  };
}


const ratingData = getProductRatingData(product);

// Header rating
ratingEl.innerText = ratingData.avg + " ★";
reviewsCountEl.innerText = `(${ratingData.total} Reviews)`;

// Reset bars
for (let i = 1; i <= 5; i++) {
  document.getElementById(`count${i}`).innerText = "0";
  document.getElementById(`bar${i}`).style.width = "0%";
}

// Summary rating
document.getElementById("avgRating").innerText = ratingData.avg;
document.getElementById("totalRatings").innerText =
  `${ratingData.total} Ratings`;

// Fill bars only if reviews exist
if (ratingData.stars.length > 0) {
  const starCount = {1:0,2:0,3:0,4:0,5:0};

  ratingData.stars.forEach(r => starCount[r]++);
  const total = ratingData.stars.length;

  for (let i = 1; i <= 5; i++) {
    const percent = (starCount[i] / total) * 100;
    document.getElementById(`count${i}`).innerText = starCount[i];
    document.getElementById(`bar${i}`).style.width = percent + "%";
  }
}

reviewsContainer.innerHTML = "";

if (product.reviews && product.reviews.length > 0) {
  product.reviews.forEach(r => {
    reviewsContainer.innerHTML += `
      <div>
        ${renderStars(r.rating)}
        <p class="font-semibold">${r.user}</p>
        <p class="text-sm text-gray-600">${r.text}</p>
      </div>
    `;
  });
} else {
  reviewsContainer.innerHTML = `
    <p class="text-gray-400 text-sm">
      No customer reviews yet for this product.
    </p>
  `;
}
