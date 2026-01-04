const products = [
  // GAS
  {
    id: 101,
    name: "Gas Safety Device — Auto Leak Shutoff",
    category: "Gas Device",
    price: 3599,
    oldPrice: 4999,
    images: [
      "../IMAGES/g1-1.jpeg",
      "../IMAGES/g2.jpeg",
      "../IMAGES/g3.jpeg",
      "../IMAGES/g4.jpeg",
    ],
    description: "Automatic leak detection, quick shutoff and safety alarm.",
    offers: [
      "10% Instant Discount on SBI Credit Card",
      "Flat ₹300 off on first purchase",
      "Free Delivery",
      "7 Days Replacement",
    ],
    reviews: [
      { user: "Ramesh", rating: 5, text: "Excellent safety device" },
      { user: "Priya", rating: 4, text: "Easy to install" },
      { user: "Kumar", rating: 5, text: "Peace of mind at home" },
      { user: "Anjali", rating: 4, text: "Worth every penny" },
      { user: "Suresh", rating: 5, text: "Best safety investment" },
    ],
  },
  {
    id: 102,
    name: "LPG Safety Device — Pressure Monitor",
    category: "Gas Device",
    price: 4299,
    oldPrice: 5999,
    images: [
      "../IMAGES/g2.jpeg",
      "../IMAGES/g3.jpeg",
      "../IMAGES/g4.jpeg",
      "../IMAGES/g5.jpeg",
    ],
    description: "Real-time pressure monitoring, robust valve shutoff.",
    offers: [
      "10% Instant Discount on SBI Credit Card",
      "Flat ₹400 off on first purchase",
      "Free Installation",
      "7 Days Replacement",
    ],
    reviews: [
      { user: "Vikram", rating: 5, text: "Accurate pressure readings" },
      { user: "Meera", rating: 4, text: "Very reliable device" },
      { user: "Arun", rating: 5, text: "Professional quality" },
      { user: "Sunita", rating: 4, text: "Good safety features" },
      { user: "Rajesh", rating: 5, text: "Perfect for home safety" },
    ],
  },
  {
    id: 103,
    name: "Household Gas Stopper — Instant",
    category: "Gas Device",
    price: 2799,
    oldPrice: 3999,
    images: [
      "../IMAGES/g3.jpeg",
      "../IMAGES/g4.jpeg",
      "../IMAGES/g5.jpeg",
      "../IMAGES/g6.jpg",
    ],
    description:
      "Instant action on leakage detection — saves lives and property.",
    offers: [
      "10% Instant Discount on SBI Credit Card",
      "Flat ₹200 off on first purchase",
      "Free Delivery",
      "7 Days Replacement",
    ],
    reviews: [
      { user: "Mohan", rating: 4, text: "Quick response time" },
      { user: "Lakshmi", rating: 4, text: "Easy to use" },
      { user: "Prakash", rating: 5, text: "Instant protection" },
      { user: "Geetha", rating: 4, text: "Good value for money" },
      { user: "Santhosh", rating: 5, text: "Essential for every home" },
    ],
  },
  {
    id: 104,
    name: "Smart Gas Lock — Durable",
    category: "Gas Device",
    price: 5499,
    oldPrice: 7499,
    images: [
      "../IMAGES/g4.jpeg",
      "../IMAGES/g5.jpeg",
      "../IMAGES/g6.jpg",
      "../IMAGES/g7.jpg",
    ],
    description: "Heavy-duty design with tamper protection and long life.",
    offers: [
      "15% Instant Discount on HDFC Credit Card",
      "Flat ₹500 off on first purchase",
      "Free Installation",
      "14 Days Replacement",
    ],
    reviews: [
      { user: "Deepak", rating: 5, text: "Very durable construction" },
      { user: "Shanti", rating: 4, text: "Excellent build quality" },
      { user: "Naveen", rating: 5, text: "Worth the investment" },
      { user: "Radha", rating: 4, text: "Strong and reliable" },
      { user: "Kiran", rating: 5, text: "Premium safety device" },
    ],
  },
  {
    id: 105,
    name: "Gas Leakage Alarm — Wall Mount",
    category: "Gas Device",
    price: 2499,
    oldPrice: 3499,
    images: [
      "../IMAGES/g5.jpeg",
      "../IMAGES/g6.jpg",
      "../IMAGES/g7.jpg",
      "../IMAGES/g8.jpg",
    ],
    description: "High sensitivity alarm with instant buzzer alert.",
    offers: [
      "10% Instant Discount on SBI Credit Card",
      "Flat ₹200 off on first purchase",
      "Free Delivery",
      "7 Days Replacement",
    ],
    reviews: [
      { user: "Anil", rating: 4, text: "Loud and clear alarm" },
      { user: "Pooja", rating: 4, text: "Easy wall mounting" },
      { user: "Satish", rating: 5, text: "Highly sensitive" },
      { user: "Neha", rating: 4, text: "Good early warning" },
      { user: "Ravi", rating: 5, text: "Essential safety alert" },
    ],
  },
  {
    id: 106,
    name: "Smart Gas Sensor — Mobile Alerts",
    category: "Gas Device",
    price: 6299,
    oldPrice: 8499,
    images: [
      "../IMAGES/g6.jpg",
      "../IMAGES/g7.jpg",
      "../IMAGES/g8.jpg",
      "../IMAGES/g9.jpg",
    ],
    description: "WiFi-enabled detection with live notifications.",
    offers: [
      "15% Instant Discount on HDFC Credit Card",
      "Flat ₹600 off on first purchase",
      "Free Installation",
      "14 Days Replacement",
    ],
    reviews: [
      { user: "Amit", rating: 5, text: "Smart phone alerts work great" },
      { user: "Swati", rating: 4, text: "Easy app setup" },
      { user: "Rohan", rating: 5, text: "Modern safety solution" },
      { user: "Tanvi", rating: 4, text: "Reliable notifications" },
      { user: "Manoj", rating: 5, text: "Best smart safety device" },
    ],
  },
  {
    id: 107,
    name: "Gas Saver Regulator — Energy Efficient",
    category: "Gas Device",
    price: 1999,
    oldPrice: 2999,
    images: [
      "../IMAGES/g7.jpg",
      "../IMAGES/g8.jpg",
      "../IMAGES/g9.jpg",
      "../IMAGES/g10.jpg",
    ],
    description: "Save 25% more gas with optimized pressure.",
    offers: [
      "10% Instant Discount on SBI Credit Card",
      "Flat ₹150 off on first purchase",
      "Free Delivery",
      "7 Days Replacement",
    ],
    reviews: [
      { user: "Ganesh", rating: 4, text: "Actually saves gas" },
      { user: "Chitra", rating: 4, text: "Good for monthly savings" },
      { user: "Harish", rating: 5, text: "Eco-friendly device" },
      { user: "Bhavana", rating: 4, text: "Reduces gas bills" },
      { user: "Srinivas", rating: 5, text: "Efficient and safe" },
    ],
  },
  {
    id: 108,
    name: "Premium Gas Valve — Anti Burst",
    category: "Gas Device",
    price: 3899,
    oldPrice: 5499,
    images: [
      "../IMAGES/g8.jpg",
      "../IMAGES/g9.jpg",
      "../IMAGES/g10.jpg",
      "../IMAGES/g11.jpg",
    ],
    description: "Heavy-duty anti-explosion engineered valve.",
    offers: [
      "10% Instant Discount on SBI Credit Card",
      "Flat ₹350 off on first purchase",
      "Free Installation",
      "7 Days Replacement",
    ],
    reviews: [
      { user: "Venkat", rating: 5, text: "Premium build quality" },
      { user: "Sarala", rating: 4, text: "Very sturdy valve" },
      { user: "Mahesh", rating: 5, text: "Anti-burst feature works" },
      { user: "Kalpana", rating: 4, text: "Professional grade" },
      { user: "Dinesh", rating: 5, text: "Top safety standard" },
    ],
  },
  {
    id: 109,
    name: "Auto Gas Cutoff Valve",
    category: "Gas Device",
    price: 3299,
    oldPrice: 4599,
    images: [
      "../IMAGES/g9.jpg",
      "../IMAGES/g10.jpg",
      "../IMAGES/g11.jpg",
      "../IMAGES/g12.jpg",
    ],
    description: "Auto shutoff for emergency gas pressure spikes.",
    offers: [
      "10% Instant Discount on SBI Credit Card",
      "Flat ₹300 off on first purchase",
      "Free Delivery",
      "7 Days Replacement",
    ],
    reviews: [
      { user: "Pradeep", rating: 4, text: "Automatic cutoff works well" },
      { user: "Madhavi", rating: 4, text: "Quick response system" },
      { user: "Sudheer", rating: 5, text: "Emergency protection" },
      { user: "Usha", rating: 4, text: "Reliable safety feature" },
      { user: "Babu", rating: 5, text: "Essential emergency device" },
    ],
  },
  {
    id: 110,
    name: "Gas Pressure Stabilizer",
    category: "Gas Device",
    price: 1499,
    oldPrice: 2299,
    images: [
      "../IMAGES/g10.jpg",
      "../IMAGES/g11.jpg",
      "../IMAGES/g12.jpg",
      "../IMAGES/g13.jpg",
    ],
    description: "Keeps pressure stable for safe gas usage.",
    offers: [
      "10% Instant Discount on SBI Credit Card",
      "Flat ₹100 off on first purchase",
      "Free Delivery",
      "7 Days Replacement",
    ],
    reviews: [
      { user: "Raghu", rating: 4, text: "Stable pressure output" },
      { user: "Leela", rating: 4, text: "Improves cooking" },
      { user: "Shankar", rating: 5, text: "Consistent gas flow" },
      { user: "Vijaya", rating: 4, text: "Good stabilizer" },
      { user: "Nagesh", rating: 5, text: "Better flame control" },
    ],
  },
  {
    id: 111,
    name: "Smart Cylinder Weight Scale",
    category: "Gas Device",
    price: 2299,
    oldPrice: 3299,
    images: [
      "../IMAGES/g11.jpg",
      "../IMAGES/g12.jpg",
      "../IMAGES/g13.jpg",
      "../IMAGES/g14.jpg",
    ],
    description: "Track gas usage and remaining weight in real time.",
    offers: [
      "10% Instant Discount on SBI Credit Card",
      "Flat ₹200 off on first purchase",
      "Free Delivery",
      "7 Days Replacement",
    ],
    reviews: [
      { user: "Sekhar", rating: 4, text: "Accurate weight tracking" },
      { user: "Padma", rating: 4, text: "Helps plan refills" },
      { user: "Raghavan", rating: 5, text: "Smart monitoring" },
      { user: "Lalitha", rating: 4, text: "Useful device" },
      { user: "Murthy", rating: 5, text: "Never run out of gas" },
    ],
  },
  {
    id: 112,
    name: "Gas Leakage Indicator Light",
    category: "Gas Device",
    price: 899,
    oldPrice: 1499,
    images: [
      "../IMAGES/g12.jpg",
      "../IMAGES/g13.jpg",
      "../IMAGES/g14.jpg",
      "../IMAGES/g15.jpg",
    ],
    description: "Bright LED indicators warn in seconds.",
    offers: [
      "10% Instant Discount on SBI Credit Card",
      "Flat ₹80 off on first purchase",
      "Free Delivery",
      "7 Days Replacement",
    ],
    reviews: [
      { user: "Kishore", rating: 4, text: "Bright warning lights" },
      { user: "Manjula", rating: 3, text: "Basic but effective" },
      { user: "Balu", rating: 4, text: "Good visual alert" },
      { user: "Sujatha", rating: 4, text: "Easy to understand" },
      { user: "Chandu", rating: 5, text: "Simple safety solution" },
    ],
  },
  {
    id: 113,
    name: "Heavy Duty Burner Protector",
    category: "Gas Device",
    price: 1299,
    oldPrice: 1999,
    images: [
      "../IMAGES/g13.jpg",
      "../IMAGES/g14.jpg",
      "../IMAGES/g15.jpg",
      "../IMAGES/g16.jpg",
    ],
    description: "Protects burners from leakage and overheating.",
    offers: [
      "10% Instant Discount on SBI Credit Card",
      "Flat ₹100 off on first purchase",
      "Free Delivery",
      "7 Days Replacement",
    ],
    reviews: [
      { user: "Siva", rating: 4, text: "Protects stove well" },
      { user: "Parvati", rating: 4, text: "Good burner safety" },
      { user: "Karthik", rating: 5, text: "Prevents accidents" },
      { user: "Divya", rating: 4, text: "Useful kitchen safety" },
      { user: "Murali", rating: 5, text: "Essential for gas stoves" },
    ],
  },
  {
    id: 114,
    name: "Smart Kitchen Gas Monitor",
    category: "Gas Device",
    price: 5199,
    oldPrice: 7299,
    images: [
      "../IMAGES/g14.jpg",
      "../IMAGES/g15.jpg",
      "../IMAGES/g16.jpg",
      "../IMAGES/g1-1.jpeg",
    ],
    description: "24/7 leakage detection with app alerts.",
    offers: [
      "15% Instant Discount on HDFC Credit Card",
      "Flat ₹500 off on first purchase",
      "Free Installation",
      "14 Days Replacement",
    ],
    reviews: [
      { user: "Anand", rating: 5, text: "24/7 monitoring peace" },
      { user: "Shalini", rating: 4, text: "Smart kitchen device" },
      { user: "Vinod", rating: 5, text: "Comprehensive protection" },
      { user: "Kavita", rating: 4, text: "Advanced features" },
      { user: "Gopal", rating: 5, text: "Complete kitchen safety" },
    ],
  },
  {
    id: 115,
    name: "Dual Safety Gas Meter",
    category: "Gas Device",
    price: 3499,
    oldPrice: 4999,
    images: [
      "../IMAGES/g15.jpg",
      "../IMAGES/g16.jpg",
      "../IMAGES/g1-1.jpeg",
      "../IMAGES/g2.jpeg",
    ],
    description: "Tracks usage and detects leakage instantly.",
    offers: [
      "10% Instant Discount on SBI Credit Card",
      "Flat ₹300 off on first purchase",
      "Free Installation",
      "7 Days Replacement",
    ],
    reviews: [
      { user: "Jagan", rating: 4, text: "Dual function device" },
      { user: "Rukmini", rating: 4, text: "Good monitoring" },
      { user: "Bharat", rating: 5, text: "Two-in-one safety" },
      { user: "Sowmya", rating: 4, text: "Accurate readings" },
      { user: "Chandran", rating: 5, text: "Comprehensive protection" },
    ],
  },
  {
    id: 116,
    name: "Cylinder Pressure Gauge",
    category: "Gas Device",
    price: 1899,
    oldPrice: 2799,
    images: [
      "../IMAGES/g16.jpg",
      "../IMAGES/g1-1.jpeg",
      "../IMAGES/g2.jpeg",
      "../IMAGES/g3.jpeg",
    ],
    description: "Monitors cylinder pressure with high accuracy.",
    offers: [
      "10% Instant Discount on SBI Credit Card",
      "Flat ₹150 off on first purchase",
      "Free Delivery",
      "7 Days Replacement",
    ],
    reviews: [
      { user: "Narayan", rating: 4, text: "Accurate pressure gauge" },
      { user: "Gayatri", rating: 4, text: "Easy to read" },
      { user: "Satyanarayana", rating: 5, text: "Precise monitoring" },
      { user: "Savithri", rating: 4, text: "Good cylinder device" },
      { user: "Rama", rating: 5, text: "Essential for LPG users" },
    ],
  },

  //MENS PANTS
  {
    id: 201,
    name: "Slim Fit Jeans",
    category: "jeans",
    price: 1899,
    oldPrice: 2499,
    images: [
      "../IMAGES/mp1.jpeg",
      "../IMAGES/mp2.jpeg",
      "../IMAGES/mp3.jpeg",
      "../IMAGES/mp4.jpeg",
    ],
    description:
      "Stretchable denim with modern slim fit. Made with premium quality cotton blend fabric for all-day comfort.",
    offers: [
      "20% Instant Discount on ICICI Credit Card",
      "Free Delivery",
      "30 Days Return Policy",
      "Buy 2 Get 10% off",
    ],
    reviews: [
      { user: "Rahul", rating: 4, text: "Perfect fit and comfortable" },
      { user: "Vikram", rating: 5, text: "Great quality denim" },
      { user: "Arjun", rating: 4, text: "Good for daily wear" },
    ],
  },
  {
    id: 202,
    name: "Formal Trousers",
    category: "trousers",
    price: 1599,
    oldPrice: 2199,
    images: [
      "./IMAGES/mp2.jpeg",
      "./IMAGES/mp1.jpeg",
      "./IMAGES/mp3.jpeg",
      "./IMAGES/mp4.jpeg",
    ],
    description:
      "Office-ready fit with premium fabric finish. Perfect for professional settings and formal occasions.",
    offers: [
      "15% Instant Discount on HDFC Credit Card",
      "Free Delivery",
      "15 Days Return Policy",
      "Buy 1 Get 1 15% off",
    ],
    reviews: [
      { user: "Amit", rating: 5, text: "Perfect for office wear" },
      { user: "Rajesh", rating: 4, text: "Premium fabric quality" },
      { user: "Sanjay", rating: 5, text: "Excellent fit and finish" },
    ],
  },
  {
    id: 203,
    name: "Lycra Pants",
    category: "casual",
    price: 1399,
    oldPrice: 1899,
    images: [
      "./IMAGES/p3.jpeg",
      "./IMAGES/lycra2.jpeg",
      "./IMAGES/lycra3.jpeg",
      "./IMAGES/lycra4.jpeg",
    ],
    description:
      "Stretch comfort with flexible movement. Made with high-quality lycra blend for maximum flexibility.",
    offers: [
      "25% Instant Discount on Axis Credit Card",
      "Free Delivery",
      "30 Days Return Policy",
      "Buy 2 Get 15% off",
    ],
    reviews: [
      { user: "Karan", rating: 5, text: "Extremely comfortable" },
      { user: "Rohan", rating: 4, text: "Great for workouts" },
      { user: "Nikhil", rating: 5, text: "Perfect stretchability" },
    ],
  },
  {
    id: 204,
    name: "Track Pants",
    category: "sports",
    price: 1199,
    oldPrice: 1699,
    images: [
      "./IMAGES/p4.jpeg",
      "./IMAGES/track2.jpeg",
      "./IMAGES/track3.jpeg",
      "./IMAGES/track4.jpeg",
    ],
    description:
      "Comfortable wear for gym & casual use. Moisture-wicking fabric keeps you dry during workouts.",
    offers: [
      "20% Instant Discount on Kotak Credit Card",
      "Free Delivery",
      "20 Days Return Policy",
      "Buy 1 Get 1 10% off",
    ],
    reviews: [
      { user: "Suresh", rating: 4, text: "Perfect for gym sessions" },
      { user: "Manoj", rating: 5, text: "Very comfortable material" },
      { user: "Deepak", rating: 4, text: "Good quality for the price" },
    ],
  },
  {
    id: 205,
    name: "Office Trousers",
    category: "formal",
    price: 2199,
    oldPrice: 2999,
    images: [
      "./IMAGES/p5.jpeg",
      "./IMAGES/office2.jpeg",
      "./IMAGES/office3.jpeg",
      "./IMAGES/office4.jpeg",
    ],
    description:
      "Premium wool blend for professional look. Perfect for business meetings and formal events.",
    offers: [
      "18% Instant Discount on SBI Credit Card",
      "Free Delivery",
      "25 Days Return Policy",
      "Buy 1 Get Tie Free",
    ],
    reviews: [
      { user: "Alok", rating: 5, text: "Excellent for corporate wear" },
      { user: "Vinod", rating: 4, text: "Premium wool blend fabric" },
      { user: "Gaurav", rating: 5, text: "Perfect for business meetings" },
    ],
  },
  {
    id: 206,
    name: "Ripped Jeans",
    category: "jeans",
    price: 1699,
    oldPrice: 2299,
    images: [
      "./IMAGES/p6.jpeg",
      "./IMAGES/ripped2.jpeg",
      "./IMAGES/ripped3.jpeg",
      "./IMAGES/ripped4.jpeg",
    ],
    description:
      "Distressed look with comfort stretch fabric. Trendy design for casual outings and parties.",
    offers: [
      "22% Instant Discount on ICICI Credit Card",
      "Free Delivery",
      "30 Days Return Policy",
      "Buy 2 Get 12% off",
    ],
    reviews: [
      { user: "Ankit", rating: 4, text: "Great distressed look" },
      { user: "Rajat", rating: 5, text: "Perfect for casual wear" },
      { user: "Sumit", rating: 4, text: "Comfortable and stylish" },
    ],
  },
  {
    id: 207,
    name: "Cargo Pants",
    category: "casual",
    price: 1499,
    oldPrice: 1999,
    images: [
      "./IMAGES/p7.jpeg",
      "./IMAGES/cargo2.jpeg",
      "./IMAGES/cargo3.jpeg",
      "./IMAGES/cargo4.jpeg",
    ],
    description:
      "Multiple pockets with rugged outdoor style. Durable fabric perfect for adventure trips.",
    offers: [
      "20% Instant Discount on HDFC Credit Card",
      "Free Delivery",
      "25 Days Return Policy",
      "Buy 1 Get Belt Free",
    ],
    reviews: [
      { user: "Tarun", rating: 5, text: "Perfect for outdoor activities" },
      { user: "Sachin", rating: 4, text: "Multiple useful pockets" },
      { user: "Prateek", rating: 5, text: "Durable and comfortable" },
    ],
  },
  {
    id: 208,
    name: "Jogger Pants",
    category: "sports",
    price: 1299,
    oldPrice: 1799,
    images: [
      "./IMAGES/p8.jpeg",
      "./IMAGES/jogger2.jpeg",
      "./IMAGES/jogger3.jpeg",
      "./IMAGES/jogger4.jpeg",
    ],
    description:
      "Elastic ankles for perfect fit during workouts. Lightweight fabric for maximum mobility.",
    offers: [
      "18% Instant Discount on Axis Credit Card",
      "Free Delivery",
      "30 Days Return Policy",
      "Buy 2 Get 10% off",
    ],
    reviews: [
      { user: "Ravi", rating: 4, text: "Perfect fit for running" },
      { user: "Kunal", rating: 5, text: "Great for morning walks" },
      { user: "Anil", rating: 4, text: "Comfortable elastic ankles" },
    ],
  },
  {
    id: 209,
    name: "Wool Blend Trousers",
    category: "formal",
    price: 2499,
    oldPrice: 3299,
    images: [
      "./IMAGES/p9.jpeg",
      "./IMAGES/wool2.jpeg",
      "./IMAGES/wool3.jpeg",
      "./IMAGES/wool4.jpeg",
    ],
    description:
      "Warm and comfortable for winter business wear. Premium wool blend fabric for cold weather.",
    offers: [
      "15% Instant Discount on SBI Credit Card",
      "Free Delivery",
      "20 Days Return Policy",
      "Buy 1 Get 1 20% off",
    ],
    reviews: [
      { user: "Rajiv", rating: 5, text: "Perfect for winter office wear" },
      { user: "Manish", rating: 4, text: "Warm and comfortable" },
      { user: "Ashok", rating: 5, text: "Premium wool blend quality" },
    ],
  },
  {
    id: 210,
    name: "Skinny Jeans",
    category: "jeans",
    price: 1799,
    oldPrice: 2399,
    images: [
      "./IMAGES/p10.jpeg",
      "./IMAGES/skinny2.jpeg",
      "./IMAGES/skinny3.jpeg",
      "./IMAGES/skinny4.jpeg",
    ],
    description:
      "Ultra slim fit for modern fashion statement. Trendy design for fashion-forward individuals.",
    offers: [
      "25% Instant Discount on ICICI Credit Card",
      "Free Delivery",
      "30 Days Return Policy",
      "Buy 2 Get 15% off",
    ],
    reviews: [
      { user: "Vivek", rating: 4, text: "Perfect slim fit" },
      { user: "Abhishek", rating: 5, text: "Great for parties" },
      { user: "Siddharth", rating: 4, text: "Modern fashionable design" },
    ],
  },
  {
    id: 211,
    name: "Cotton Trousers",
    category: "trousers",
    price: 1399,
    oldPrice: 1899,
    images: [
      "./IMAGES/p11.jpeg",
      "./IMAGES/cottont2.jpeg",
      "./IMAGES/cottont3.jpeg",
      "./IMAGES/cottont4.jpeg",
    ],
    description:
      "Breathable cotton fabric for everyday comfort. Perfect for casual office wear and outings.",
    offers: [
      "20% Instant Discount on HDFC Credit Card",
      "Free Delivery",
      "25 Days Return Policy",
      "Buy 1 Get 1 15% off",
    ],
    reviews: [
      { user: "Neeraj", rating: 5, text: "Very breathable fabric" },
      { user: "Pankaj", rating: 4, text: "Perfect for summer" },
      { user: "Harish", rating: 5, text: "Comfortable all day wear" },
    ],
  },
  {
    id: 212,
    name: "Chino Pants",
    category: "casual",
    price: 1599,
    oldPrice: 2099,
    images: [
      "./IMAGES/p12.jpeg",
      "./IMAGES/chino2.jpeg",
      "./IMAGES/chino3.jpeg",
      "./IMAGES/chino4.jpeg",
    ],
    description:
      "Versatile cotton twill for smart casual looks. Perfect for semi-formal occasions and dates.",
    offers: [
      "18% Instant Discount on Axis Credit Card",
      "Free Delivery",
      "30 Days Return Policy",
      "Buy 2 Get 12% off",
    ],
    reviews: [
      { user: "Rohit", rating: 5, text: "Perfect smart casual wear" },
      { user: "Aakash", rating: 4, text: "Great for dates" },
      { user: "Vikas", rating: 5, text: "Versatile and stylish" },
    ],
  },
  {
    id: 213,
    name: "Yoga Pants",
    category: "sports",
    price: 999,
    oldPrice: 1499,
    images: [
      "./IMAGES/p13.jpeg",
      "./IMAGES/yoga2.jpeg",
      "./IMAGES/yoga3.jpeg",
      "./IMAGES/yoga4.jpeg",
    ],
    description:
      "High stretch fabric for yoga and flexibility. Perfect for all types of exercises and meditation.",
    offers: [
      "30% Instant Discount on Kotak Credit Card",
      "Free Delivery",
      "30 Days Return Policy",
      "Buy 2 Get 20% off",
    ],
    reviews: [
      { user: "Yogesh", rating: 5, text: "Perfect for yoga sessions" },
      { user: "Sunil", rating: 4, text: "Great flexibility" },
      { user: "Naveen", rating: 5, text: "Comfortable for all exercises" },
    ],
  },
  {
    id: 214,
    name: "Suit Pants",
    category: "formal",
    price: 2899,
    oldPrice: 3899,
    images: [
      "./IMAGES/p14.jpeg",
      "./IMAGES/suit2.jpeg",
      "./IMAGES/suit3.jpeg",
      "./IMAGES/suit4.jpeg",
    ],
    description:
      "Perfect match for blazer and formal occasions. Premium fabric for weddings and special events.",
    offers: [
      "12% Instant Discount on SBI Credit Card",
      "Free Delivery",
      "15 Days Return Policy",
      "Buy 1 Get Blazer 30% off",
    ],
    reviews: [
      { user: "Ramesh", rating: 4, text: "Perfect for weddings" },
      { user: "Dinesh", rating: 5, text: "Excellent with blazer" },
      { user: "Mukesh", rating: 4, text: "Premium formal wear" },
    ],
  },
  {
    id: 215,
    name: "Bootcut Jeans",
    category: "jeans",
    price: 1899,
    oldPrice: 2499,
    images: [
      "./IMAGES/p15.jpeg",
      "./IMAGES/bootcut2.jpeg",
      "./IMAGES/bootcut3.jpeg",
      "./IMAGES/bootcut4.jpeg",
    ],
    description:
      "Flared bottom perfect for wearing with boots. Classic design that never goes out of style.",
    offers: [
      "20% Instant Discount on ICICI Credit Card",
      "Free Delivery",
      "30 Days Return Policy",
      "Buy 1 Get 1 10% off",
    ],
    reviews: [
      { user: "Amar", rating: 4, text: "Perfect with boots" },
      { user: "Farhan", rating: 5, text: "Classic bootcut style" },
      { user: "Imran", rating: 4, text: "Comfortable flared design" },
    ],
  },
  {
    id: 216,
    name: "Linen Trousers",
    category: "trousers",
    price: 1799,
    oldPrice: 2399,
    images: [
      "./IMAGES/p16.jpeg",
      "./IMAGES/linen2.jpeg",
      "./IMAGES/linen3.jpeg",
      "./IMAGES/linen4.jpeg",
    ],
    description:
      "Lightweight linen for summer comfort. Perfect for hot weather and tropical climates.",
    offers: [
      "22% Instant Discount on HDFC Credit Card",
      "Free Delivery",
      "25 Days Return Policy",
      "Buy 2 Get 15% off",
    ],
    reviews: [
      { user: "Sandeep", rating: 5, text: "Perfect for summer heat" },
      { user: "Ajay", rating: 4, text: "Lightweight and breathable" },
      { user: "Bharat", rating: 5, text: "Great for tropical climate" },
    ],
  },
  {
    id: 217,
    name: "Harem Pants",
    category: "casual",
    price: 1199,
    oldPrice: 1699,
    images: [
      "./IMAGES/p17.jpeg",
      "./IMAGES/harem2.jpeg",
      "./IMAGES/harem3.jpeg",
      "./IMAGES/harem4.jpeg",
    ],
    description:
      "Drop-crotch design for ultimate comfort. Bohemian style perfect for relaxed occasions.",
    offers: [
      "25% Instant Discount on Axis Credit Card",
      "Free Delivery",
      "30 Days Return Policy",
      "Buy 1 Get 1 20% off",
    ],
    reviews: [
      { user: "Kabir", rating: 4, text: "Ultimate comfort design" },
      { user: "Rishi", rating: 5, text: "Perfect for relaxed wear" },
      { user: "Om", rating: 4, text: "Bohemian style looks great" },
    ],
  },
  {
    id: 218,
    name: "Running Pants",
    category: "sports",
    price: 1399,
    oldPrice: 1899,
    images: [
      "./IMAGES/p18.jpeg",
      "./IMAGES/running2.jpeg",
      "./IMAGES/running3.jpeg",
      "./IMAGES/running4.jpeg",
    ],
    description:
      "Moisture-wicking fabric for intense workouts. Reflective strips for night running safety.",
    offers: [
      "20% Instant Discount on Kotak Credit Card",
      "Free Delivery",
      "30 Days Return Policy",
      "Buy 2 Get 10% off",
    ],
    reviews: [
      { user: "Amitabh", rating: 5, text: "Perfect for marathon training" },
      { user: "Salman", rating: 4, text: "Great moisture management" },
      { user: "Shahrukh", rating: 5, text: "Reflective strips are useful" },
    ],
  },
  {
    id: 219,
    name: "Pleated Trousers",
    category: "formal",
    price: 2299,
    oldPrice: 2999,
    images: [
      "./IMAGES/p19.jpeg",
      "./IMAGES/pleated2.jpeg",
      "./IMAGES/pleated3.jpeg",
      "./IMAGES/pleated4.jpeg",
    ],
    description:
      "Classic pleated design for elegant look. Traditional style perfect for formal gatherings.",
    offers: [
      "15% Instant Discount on SBI Credit Card",
      "Free Delivery",
      "20 Days Return Policy",
      "Buy 1 Get Formal Shirt 20% off",
    ],
    reviews: [
      { user: "Vijay", rating: 4, text: "Classic elegant design" },
      { user: "Ajit", rating: 5, text: "Perfect for formal events" },
      { user: "Dilip", rating: 4, text: "Traditional pleated style" },
    ],
  },
  {
    id: 220,
    name: "Straight Fit Jeans",
    category: "jeans",
    price: 1699,
    oldPrice: 2299,
    images: [
      "./IMAGES/p20.jpeg",
      "./IMAGES/straight2.jpeg",
      "./IMAGES/straight3.jpeg",
      "./IMAGES/straight4.jpeg",
    ],
    description:
      "Classic straight cut for traditional look. Timeless design that suits all body types.",
    offers: [
      "20% Instant Discount on ICICI Credit Card",
      "Free Delivery",
      "30 Days Return Policy",
      "Buy 2 Get 12% off",
    ],
    reviews: [
      { user: "Raghav", rating: 5, text: "Classic straight fit" },
      { user: "Krishna", rating: 4, text: "Traditional timeless design" },
      { user: "Madhav", rating: 5, text: "Perfect for all occasions" },
    ],
  },
  {
    id: 221,
    name: "Corduroy Trousers",
    category: "trousers",
    price: 1999,
    oldPrice: 2699,
    images: [
      "./IMAGES/p21.jpeg",
      "./IMAGES/corduroy2.jpeg",
      "./IMAGES/corduroy3.jpeg",
      "./IMAGES/corduroy4.jpeg",
    ],
    description:
      "Ribbed texture for winter fashion. Warm and stylish perfect for cold weather outings.",
    offers: [
      "18% Instant Discount on HDFC Credit Card",
      "Free Delivery",
      "25 Days Return Policy",
      "Buy 1 Get 1 15% off",
    ],
    reviews: [
      { user: "Harsh", rating: 4, text: "Perfect for winter" },
      { user: "Parth", rating: 5, text: "Warm ribbed texture" },
      { user: "Dev", rating: 4, text: "Stylish winter wear" },
    ],
  },
  {
    id: 222,
    name: "Carpenter Pants",
    category: "casual",
    price: 1499,
    oldPrice: 1999,
    images: [
      "./IMAGES/p22.jpeg",
      "./IMAGES/carpenter2.jpeg",
      "./IMAGES/carpenter3.jpeg",
      "./IMAGES/carpenter4.jpeg",
    ],
    description:
      "Multiple tool pockets for utility wear. Durable fabric perfect for work and casual use.",
    offers: [
      "20% Instant Discount on Axis Credit Card",
      "Free Delivery",
      "30 Days Return Policy",
      "Buy 1 Get Tool Belt 30% off",
    ],
    reviews: [
      { user: "Rudra", rating: 5, text: "Great utility pockets" },
      { user: "Veer", rating: 4, text: "Perfect for work wear" },
      { user: "Yash", rating: 5, text: "Durable fabric quality" },
    ],
  },
  {
    id: 223,
    name: "Cycling Pants",
    category: "sports",
    price: 1699,
    oldPrice: 2299,
    images: [
      "./IMAGES/p23.jpeg",
      "./IMAGES/cycling2.jpeg",
      "./IMAGES/cycling3.jpeg",
      "./IMAGES/cycling4.jpeg",
    ],
    description:
      "Padded seat for long cycling sessions. Aerodynamic design for professional cyclists.",
    offers: [
      "15% Instant Discount on Kotak Credit Card",
      "Free Delivery",
      "30 Days Return Policy",
      "Buy 1 Get Cycling Gloves Free",
    ],
    reviews: [
      { user: "Aditya", rating: 5, text: "Perfect padding for cycling" },
      { user: "Surya", rating: 4, text: "Great for long rides" },
      { user: "Chandra", rating: 5, text: "Professional cycling gear" },
    ],
  },
  {
    id: 224,
    name: "Tuxedo Pants",
    category: "formal",
    price: 3499,
    oldPrice: 4599,
    images: [
      "./IMAGES/p24.jpeg",
      "./IMAGES/tuxedo2.jpeg",
      "./IMAGES/tuxedo3.jpeg",
      "./IMAGES/tuxedo4.jpeg",
    ],
    description:
      "Silk stripe detailing for black-tie events. Premium fabric for weddings and galas.",
    offers: [
      "10% Instant Discount on SBI Credit Card",
      "Free Delivery",
      "15 Days Return Policy",
      "Buy 1 Get Bow Tie Free",
    ],
    reviews: [
      { user: "Virat", rating: 5, text: "Perfect for black-tie events" },
      { user: "Rohit", rating: 4, text: "Elegant silk stripe detail" },
      { user: "Hardik", rating: 5, text: "Premium wedding wear" },
    ],
  },
  {
    id: 225,
    name: "Boyfriend Jeans",
    category: "jeans",
    price: 1599,
    oldPrice: 2199,
    images: [
      "./IMAGES/p25.jpeg",
      "./IMAGES/boyfriend2.jpeg",
      "./IMAGES/boyfriend3.jpeg",
      "./IMAGES/boyfriend4.jpeg",
    ],
    description:
      "Relaxed fit with distressed details. Comfortable loose fit perfect for casual weekends.",
    offers: [
      "22% Instant Discount on ICICI Credit Card",
      "Free Delivery",
      "30 Days Return Policy",
      "Buy 2 Get 15% off",
    ],
    reviews: [
      { user: "Ishaan", rating: 4, text: "Comfortable relaxed fit" },
      { user: "Aryan", rating: 5, text: "Perfect weekend wear" },
      { user: "Vivaan", rating: 4, text: "Great distressed details" },
    ],
  },
  {
    id: 226,
    name: "Jersey Trousers",
    category: "trousers",
    price: 1199,
    oldPrice: 1699,
    images: [
      "./IMAGES/p26.jpeg",
      "./IMAGES/jersey2.jpeg",
      "./IMAGES/jersey3.jpeg",
      "./IMAGES/jersey4.jpeg",
    ],
    description:
      "Soft jersey fabric for lounge wear. Ultimate comfort for relaxing at home.",
    offers: [
      "25% Instant Discount on HDFC Credit Card",
      "Free Delivery",
      "30 Days Return Policy",
      "Buy 1 Get 1 25% off",
    ],
    reviews: [
      { user: "Dhruv", rating: 5, text: "Ultimate lounge comfort" },
      { user: "Arnav", rating: 4, text: "Soft jersey fabric" },
      { user: "Shaurya", rating: 5, text: "Perfect for home wear" },
    ],
  },
  {
    id: 227,
    name: "Denim Joggers",
    category: "casual",
    price: 1799,
    oldPrice: 2399,
    images: [
      "./IMAGES/p27.jpeg",
      "./IMAGES/denimj2.jpeg",
      "./IMAGES/denimj3.jpeg",
      "./IMAGES/denimj4.jpeg",
    ],
    description:
      "Denim fabric with jogger style cuffs. Trendy combination of jeans and joggers.",
    offers: [
      "20% Instant Discount on Axis Credit Card",
      "Free Delivery",
      "30 Days Return Policy",
      "Buy 2 Get 10% off",
    ],
    reviews: [
      { user: "Reyansh", rating: 4, text: "Trendy denim jogger style" },
      { user: "Atharv", rating: 5, text: "Perfect casual fusion wear" },
      { user: "Advik", rating: 4, text: "Comfortable jogger cuffs" },
    ],
  },
  {
    id: 228,
    name: "Basketball Shorts",
    category: "sports",
    price: 899,
    oldPrice: 1299,
    images: [
      "./IMAGES/p28.jpeg",
      "./IMAGES/basketball2.jpeg",
      "./IMAGES/basketball3.jpeg",
      "./IMAGES/basketball4.jpeg",
    ],
    description:
      "Mesh panels for breathability during sports. Perfect for basketball and outdoor games.",
    offers: [
      "30% Instant Discount on Kotak Credit Card",
      "Free Delivery",
      "30 Days Return Policy",
      "Buy 2 Get 20% off",
    ],
    reviews: [
      { user: "Kian", rating: 5, text: "Perfect for basketball" },
      { user: "Zayan", rating: 4, text: "Great breathable mesh" },
      { user: "Ayaan", rating: 5, text: "Comfortable for sports" },
    ],
  },
  {
    id: 229,
    name: "Flat Front Trousers",
    category: "formal",
    price: 1999,
    oldPrice: 2699,
    images: [
      "./IMAGES/p29.jpeg",
      "./IMAGES/flatfront2.jpeg",
      "./IMAGES/flatfront3.jpeg",
      "./IMAGES/flatfront4.jpeg",
    ],
    description:
      "Modern slim fit without pleats. Contemporary design for modern professionals.",
    offers: [
      "15% Instant Discount on SBI Credit Card",
      "Free Delivery",
      "20 Days Return Policy",
      "Buy 1 Get 1 15% off",
    ],
    reviews: [
      { user: "Mohit", rating: 4, text: "Modern slim fit design" },
      { user: "Sahil", rating: 5, text: "Perfect contemporary look" },
      { user: "Ritik", rating: 4, text: "Great for young professionals" },
    ],
  },
  {
    id: 230,
    name: "High-Waisted Jeans",
    category: "jeans",
    price: 1899,
    oldPrice: 2499,
    images: [
      "./IMAGES/p30.jpeg",
      "./IMAGES/highwaist2.jpeg",
      "./IMAGES/highwaist3.jpeg",
      "./IMAGES/highwaist4.jpeg",
    ],
    description:
      "Vintage style with high waist design. Retro fashion making a comeback in modern times.",
    offers: [
      "20% Instant Discount on ICICI Credit Card",
      "Free Delivery",
      "30 Days Return Policy",
      "Buy 2 Get 12% off",
    ],
    reviews: [
      { user: "Rudransh", rating: 4, text: "Vintage high waist style" },
      { user: "Aarav", rating: 5, text: "Perfect retro fashion" },
      { user: "Vihaan", rating: 4, text: "Modern vintage combination" },
    ],
  },

  // MEN SHIRTS
  {
    id: 301,
    name: "Casual Cotton Shirt",
    category: "casual",
    price: 1499,
    oldPrice: 1999,
    images: [
      "./IMAGES/m1.jpeg",
      "./IMAGES/ms1.jpeg",
      "./IMAGES/ms2.jpeg",
      "./IMAGES/ms3.jpeg",
    ],
    description:
      "Soft cotton fabric for daily wear with comfortable fit and stylish design.",
    offers: [
      "10% Instant Discount on ICICI Bank Credit Card",
      "Flat ₹150 off on first purchase",
      "Free Delivery",
      "30 Days Return Policy",
    ],
    reviews: [
      { user: "Rajesh", rating: 5, text: "Very comfortable and good quality" },
      { user: "Meera", rating: 4, text: "Nice fit and fabric" },
      { user: "Vikram", rating: 5, text: "Perfect for daily use" },
    ],
  },
  {
    id: 302,
    name: "Formal Shirt",
    category: "formal",
    price: 1699,
    oldPrice: 2299,
    images: [
      "./IMAGES/s2.jpeg",
      "./IMAGES/ms4.jpeg",
      "./IMAGES/ms5.jpeg",
      "./IMAGES/ms6.jpeg",
    ],
    description:
      "Sharp look for office & formal events with premium stitching.",
    offers: [
      "15% Instant Discount on HDFC Credit Card",
      "Buy 2 Get 10% off",
      "Free Ironing Service",
      "7 Days Replacement",
    ],
    reviews: [
      { user: "Anand", rating: 4, text: "Good for office wear" },
      { user: "Priya", rating: 5, text: "Husband loved it for meetings" },
      { user: "Sanjay", rating: 4, text: "Quality material" },
    ],
  },
  {
    id: 303,
    name: "Linen Shirt",
    category: "linen",
    price: 1799,
    oldPrice: 2499,
    images: [
      "./IMAGES/s3.jpeg",
      "./IMAGES/ms7.jpeg",
      "./IMAGES/ms8.jpeg",
      "./IMAGES/ms9.jpeg",
    ],
    description:
      "Breathable linen fabric for summer comfort and casual outings.",
    offers: [
      "20% Instant Discount on SBI Credit Card",
      "Flat ₹200 off on orders above ₹3000",
      "Free Delivery",
      "15 Days Exchange",
    ],
    reviews: [
      { user: "Karthik", rating: 5, text: "Perfect for summer" },
      { user: "Sunita", rating: 4, text: "Light and comfortable" },
      { user: "Rahul", rating: 5, text: "Best linen shirt I've bought" },
    ],
  },
  {
    id: 304,
    name: "Lycra Shirt",
    category: "casual",
    price: 1599,
    oldPrice: 2199,
    images: [
      "./IMAGES/s4.jpeg",
      "./IMAGES/ms10.jpeg",
      "./IMAGES/ms11.jpeg",
      "./IMAGES/ms12.jpeg",
    ],
    description: "Stretch-fit shirt with premium finish and modern design.",
    offers: [
      "10% Instant Discount on Axis Bank Credit Card",
      "Flat ₹100 off",
      "Free Delivery",
      "10 Days Replacement",
    ],
    reviews: [
      { user: "Amit", rating: 4, text: "Good stretch material" },
      { user: "Neha", rating: 5, text: "Perfect fit for my husband" },
      { user: "Deepak", rating: 4, text: "Comfortable for all-day wear" },
    ],
  },
  {
    id: 305,
    name: "Sports T-Shirt",
    category: "sports",
    price: 899,
    oldPrice: 1299,
    images: [
      "./IMAGES/s5.jpeg",
      "./IMAGES/ms13.jpeg",
      "./IMAGES/ms14.jpeg",
      "./IMAGES/ms15.jpeg",
    ],
    description:
      "Moisture-wicking fabric for workouts and athletic activities.",
    offers: [
      "Buy 2 Get 15% off",
      "Flat ₹50 off on first purchase",
      "Free Delivery",
      "30 Days Return Policy",
    ],
    reviews: [
      { user: "Rohit", rating: 5, text: "Great for gym sessions" },
      { user: "Pooja", rating: 4, text: "Husband loves it for running" },
      { user: "Manish", rating: 5, text: "Breathes well during workouts" },
    ],
  },
  {
    id: 306,
    name: "Premium Cotton Shirt",
    category: "cotton",
    price: 1899,
    oldPrice: 2599,
    images: [
      "./IMAGES/s6.jpeg",
      "./IMAGES/ms16.jpeg",
      "./IMAGES/ms17.jpeg",
      "./IMAGES/ms18.jpeg",
    ],
    description: "High-quality Egyptian cotton fabric with premium finish.",
    offers: [
      "12% Instant Discount on Kotak Credit Card",
      "Flat ₹250 off",
      "Free Premium Packaging",
      "7 Days Replacement",
    ],
    reviews: [
      { user: "Vijay", rating: 5, text: "Premium quality fabric" },
      { user: "Anita", rating: 5, text: "Worth every penny" },
      { user: "Naresh", rating: 4, text: "Very comfortable cotton" },
    ],
  },
  {
    id: 307,
    name: "Office Formal Shirt",
    category: "formal",
    price: 1999,
    oldPrice: 2799,
    images: [
      "./IMAGES/s7.jpeg",
      "./IMAGES/ms19.jpeg",
      "./IMAGES/ms20.jpeg",
      "./IMAGES/ms21.jpeg",
    ],
    description:
      "Crisp fabric perfect for business meetings and professional settings.",
    offers: [
      "18% Instant Discount on Citibank Credit Card",
      "Buy 3 Get 20% off",
      "Free Delivery",
      "15 Days Exchange",
    ],
    reviews: [
      { user: "Arun", rating: 5, text: "Perfect for corporate meetings" },
      { user: "Shweta", rating: 4, text: "Good formal wear option" },
      { user: "Raj", rating: 5, text: "Looks professional" },
    ],
  },
  {
    id: 308,
    name: "Denim Shirt",
    category: "denim",
    price: 1799,
    oldPrice: 2399,
    images: [
      "./IMAGES/s8.jpeg",
      "./IMAGES/ms22.jpeg",
      "./IMAGES/ms23.jpeg",
      "./IMAGES/ms24.jpeg",
    ],
    description: "Classic denim fabric for rugged look and casual styling.",
    offers: [
      "10% Instant Discount on RBL Credit Card",
      "Flat ₹150 off",
      "Free Delivery",
      "30 Days Return Policy",
    ],
    reviews: [
      { user: "Suresh", rating: 4, text: "Good denim quality" },
      { user: "Kavita", rating: 5, text: "Husband looks great in this" },
      { user: "Manoj", rating: 4, text: "Perfect for casual outings" },
    ],
  },
  {
    id: 309,
    name: "White Linen Shirt",
    category: "linen",
    price: 1899,
    oldPrice: 2699,
    images: [
      "./IMAGES/s9.jpeg",
      "./IMAGES/ms25.jpeg",
      "./IMAGES/ms26.jpeg",
      "./IMAGES/ms27.jpeg",
    ],
    description: "Pure linen fabric for summer elegance and comfortable wear.",
    offers: [
      "15% Instant Discount on Yes Bank Credit Card",
      "Flat ₹200 off on first purchase",
      "Free Delivery",
      "7 Days Replacement",
    ],
    reviews: [
      { user: "Ajay", rating: 5, text: "Perfect white linen shirt" },
      { user: "Radhika", rating: 4, text: "Great for summer parties" },
      { user: "Vikram", rating: 5, text: "Very breathable fabric" },
    ],
  },
  {
    id: 310,
    name: "Printed Casual Shirt",
    category: "printed",
    price: 1399,
    oldPrice: 1899,
    images: [
      "./IMAGES/s10.jpeg",
      "./IMAGES/ms28.jpeg",
      "./IMAGES/ms29.jpeg",
      "./IMAGES/ms30.jpeg",
    ],
    description: "Floral prints for stylish casual look and modern fashion.",
    offers: [
      "10% Instant Discount on IDFC Credit Card",
      "Buy 1 Get 10% off on next",
      "Free Delivery",
      "10 Days Replacement",
    ],
    reviews: [
      { user: "Rohan", rating: 4, text: "Nice prints and colors" },
      { user: "Poonam", rating: 5, text: "Beautiful design" },
      { user: "Alok", rating: 4, text: "Good for casual wear" },
    ],
  },
  {
    id: 311,
    name: "Training T-Shirt",
    category: "sports",
    price: 799,
    oldPrice: 1199,
    images: [
      "./IMAGES/s11.jpeg",
      "./IMAGES/ms31.jpeg",
      "./IMAGES/ms32.jpeg",
      "./IMAGES/ms33.jpeg",
    ],
    description: "Quick-dry fabric for intense workouts and training sessions.",
    offers: [
      "Buy 2 Get 20% off",
      "Flat ₹100 off on first purchase",
      "Free Delivery",
      "30 Days Return Policy",
    ],
    reviews: [
      { user: "Aakash", rating: 5, text: "Excellent for training" },
      { user: "Simran", rating: 4, text: "Husband loves it for gym" },
      { user: "Tarun", rating: 5, text: "Best training t-shirt" },
    ],
  },
  {
    id: 312,
    name: "Organic Cotton Shirt",
    category: "cotton",
    price: 2199,
    oldPrice: 2999,
    images: [
      "./IMAGES/s12.jpeg",
      "./IMAGES/ms34.jpeg",
      "./IMAGES/ms35.jpeg",
      "./IMAGES/ms36.jpeg",
    ],
    description:
      "Eco-friendly organic cotton fabric with sustainable production.",
    offers: [
      "20% Instant Discount on SBI Credit Card",
      "Flat ₹300 off",
      "Free Eco-friendly Packaging",
      "7 Days Replacement",
    ],
    reviews: [
      { user: "EcoWarrior", rating: 5, text: "Love the organic material" },
      { user: "GreenLife", rating: 5, text: "Sustainable and comfortable" },
      { user: "NatureLover", rating: 4, text: "Good eco-friendly option" },
    ],
  },
  {
    id: 313,
    name: "Business Shirt",
    category: "formal",
    price: 2299,
    oldPrice: 3199,
    images: [
      "./IMAGES/s13.jpeg",
      "./IMAGES/ms37.jpeg",
      "./IMAGES/ms38.jpeg",
      "./IMAGES/ms39.jpeg",
    ],
    description:
      "Professional look for corporate meetings and business events.",
    offers: [
      "15% Instant Discount on HDFC Credit Card",
      "Buy 2 Get 15% off",
      "Free Delivery",
      "15 Days Exchange",
    ],
    reviews: [
      { user: "BusinessMan", rating: 5, text: "Perfect for business meetings" },
      { user: "Corporate", rating: 4, text: "Good quality for price" },
      { user: "Executive", rating: 5, text: "Looks professional" },
    ],
  },
  {
    id: 314,
    name: "Light Denim Shirt",
    category: "denim",
    price: 1599,
    oldPrice: 2199,
    images: [
      "./IMAGES/s14.jpeg",
      "./IMAGES/ms40.jpeg",
      "./IMAGES/ms41.jpeg",
      "./IMAGES/ms42.jpeg",
    ],
    description: "Light wash denim for casual styling and everyday wear.",
    offers: [
      "10% Instant Discount on ICICI Credit Card",
      "Flat ₹150 off",
      "Free Delivery",
      "30 Days Return Policy",
    ],
    reviews: [
      { user: "StyleKing", rating: 4, text: "Nice light wash" },
      { user: "Fashionista", rating: 5, text: "Perfect casual wear" },
      { user: "Trendy", rating: 4, text: "Good for weekends" },
    ],
  },
  {
    id: 315,
    name: "Blue Linen Shirt",
    category: "linen",
    price: 1999,
    oldPrice: 2799,
    images: [
      "./IMAGES/s15.jpeg",
      "./IMAGES/ms43.jpeg",
      "./IMAGES/ms44.jpeg",
      "./IMAGES/ms45.jpeg",
    ],
    description: "Cool blue linen for summer parties and outdoor events.",
    offers: [
      "18% Instant Discount on Axis Credit Card",
      "Flat ₹250 off on first purchase",
      "Free Delivery",
      "7 Days Replacement",
    ],
    reviews: [
      { user: "SummerLove", rating: 5, text: "Perfect for summer parties" },
      { user: "BeachGoer", rating: 4, text: "Great beach shirt" },
      { user: "OutdoorFan", rating: 5, text: "Comfortable for outdoor events" },
    ],
  },
  {
    id: 316,
    name: "Geometric Print Shirt",
    category: "printed",
    price: 1499,
    oldPrice: 2099,
    images: [
      "./IMAGES/s16.jpeg",
      "./IMAGES/ms46.jpeg",
      "./IMAGES/ms47.jpeg",
      "./IMAGES/ms48.jpeg",
    ],
    description: "Modern geometric patterns for fashion-forward styling.",
    offers: [
      "12% Instant Discount on Kotak Credit Card",
      "Buy 1 Get 10% off on next",
      "Free Delivery",
      "10 Days Replacement",
    ],
    reviews: [
      { user: "ModernMan", rating: 4, text: "Cool geometric patterns" },
      { user: "FashionForward", rating: 5, text: "Very trendy design" },
      { user: "StyleIcon", rating: 4, text: "Great for fashion events" },
    ],
  },
  {
    id: 317,
    name: "Running T-Shirt",
    category: "sports",
    price: 699,
    oldPrice: 1099,
    images: [
      "./IMAGES/s17.jpeg",
      "./IMAGES/ms49.jpeg",
      "./IMAGES/ms50.jpeg",
      "./IMAGES/ms51.jpeg",
    ],
    description:
      "Lightweight fabric for marathon running and athletic activities.",
    offers: [
      "Buy 2 Get 25% off",
      "Flat ₹50 off on first purchase",
      "Free Delivery",
      "30 Days Return Policy",
    ],
    reviews: [
      { user: "Marathoner", rating: 5, text: "Perfect for running" },
      { user: "Athlete", rating: 4, text: "Light and comfortable" },
      { user: "Runner", rating: 5, text: "Best for long runs" },
    ],
  },
  {
    id: 318,
    name: "Long Sleeve Cotton",
    category: "cotton",
    price: 1699,
    oldPrice: 2399,
    images: [
      "./IMAGES/s18.jpeg",
      "./IMAGES/ms52.jpeg",
      "./IMAGES/ms53.jpeg",
      "./IMAGES/ms54.jpeg",
    ],
    description: "Full sleeve cotton shirt for winters and cooler weather.",
    offers: [
      "15% Instant Discount on HDFC Credit Card",
      "Flat ₹200 off",
      "Free Delivery",
      "7 Days Replacement",
    ],
    reviews: [
      { user: "WinterWear", rating: 5, text: "Perfect for winter" },
      { user: "ColdSeason", rating: 4, text: "Warm and comfortable" },
      { user: "CozyComfort", rating: 5, text: "Great for cold days" },
    ],
  },
  {
    id: 319,
    name: "Executive Shirt",
    category: "formal",
    price: 2499,
    oldPrice: 3499,
    images: [
      "./IMAGES/s19.jpeg",
      "./IMAGES/ms55.jpeg",
      "./IMAGES/ms56.jpeg",
      "./IMAGES/ms57.jpeg",
    ],
    description:
      "Premium fabric for senior executives and high-profile meetings.",
    offers: [
      "20% Instant Discount on Citibank Credit Card",
      "Free Premium Packaging",
      "Free Delivery",
      "15 Days Exchange",
    ],
    reviews: [
      { user: "CEO", rating: 5, text: "Perfect executive wear" },
      { user: "Manager", rating: 5, text: "Looks premium" },
      { user: "Director", rating: 4, text: "Good for board meetings" },
    ],
  },
  {
    id: 320,
    name: "Dark Denim Shirt",
    category: "denim",
    price: 1899,
    oldPrice: 2599,
    images: [
      "./IMAGES/s20.jpeg",
      "./IMAGES/ms58.jpeg",
      "./IMAGES/ms59.jpeg",
      "./IMAGES/ms60.jpeg",
    ],
    description: "Dark wash denim for evening wear and night outings.",
    offers: [
      "12% Instant Discount on ICICI Credit Card",
      "Flat ₹200 off",
      "Free Delivery",
      "30 Days Return Policy",
    ],
    reviews: [
      { user: "NightOwl", rating: 4, text: "Perfect for evenings" },
      { user: "PartyGoer", rating: 5, text: "Great for night parties" },
      { user: "EveningStyle", rating: 4, text: "Good dark wash" },
    ],
  },
  {
    id: 321,
    name: "Striped Linen Shirt",
    category: "linen",
    price: 2099,
    oldPrice: 2899,
    images: [
      "./IMAGES/s21.jpeg",
      "./IMAGES/ms61.jpeg",
      "./IMAGES/ms62.jpeg",
      "./IMAGES/ms63.jpeg",
    ],
    description: "Vertical stripes for slim look and stylish appearance.",
    offers: [
      "15% Instant Discount on SBI Credit Card",
      "Flat ₹250 off on first purchase",
      "Free Delivery",
      "7 Days Replacement",
    ],
    reviews: [
      { user: "SlimFit", rating: 5, text: "Stripes make me look slimmer" },
      { user: "StyleGuru", rating: 4, text: "Very stylish stripes" },
      { user: "FashionPro", rating: 5, text: "Perfect striped design" },
    ],
  },
  {
    id: 322,
    name: "Hawaiian Print Shirt",
    category: "printed",
    price: 1299,
    oldPrice: 1799,
    images: [
      "./IMAGES/s22.jpeg",
      "./IMAGES/ms64.jpeg",
      "./IMAGES/ms65.jpeg",
      "./IMAGES/ms66.jpeg",
    ],
    description: "Tropical prints for beach vacations and holiday wear.",
    offers: [
      "10% Instant Discount on Axis Credit Card",
      "Buy 1 Get 15% off on next",
      "Free Delivery",
      "10 Days Replacement",
    ],
    reviews: [
      { user: "BeachBum", rating: 5, text: "Perfect for beach vacation" },
      { user: "HolidayMaker", rating: 4, text: "Great tropical prints" },
      { user: "Vacationer", rating: 5, text: "Love the Hawaiian design" },
    ],
  },
  {
    id: 323,
    name: "Gym Tank Top",
    category: "sports",
    price: 599,
    oldPrice: 899,
    images: [
      "./IMAGES/s23.jpeg",
      "./IMAGES/ms67.jpeg",
      "./IMAGES/ms68.jpeg",
      "./IMAGES/ms69.jpeg",
    ],
    description: "Sleeveless for maximum muscle movement and gym workouts.",
    offers: [
      "Buy 2 Get 30% off",
      "Flat ₹100 off on first purchase",
      "Free Delivery",
      "30 Days Return Policy",
    ],
    reviews: [
      { user: "BodyBuilder", rating: 5, text: "Perfect for gym" },
      { user: "FitnessFreak", rating: 5, text: "Great muscle movement" },
      { user: "GymRat", rating: 4, text: "Comfortable for workouts" },
    ],
  },
  {
    id: 324,
    name: "Checked Cotton Shirt",
    category: "cotton",
    price: 1599,
    oldPrice: 2299,
    images: [
      "./IMAGES/s24.jpeg",
      "./IMAGES/ms70.jpeg",
      "./IMAGES/ms71.jpeg",
      "./IMAGES/ms72.jpeg",
    ],
    description:
      "Classic check pattern for casual look and traditional styling.",
    offers: [
      "12% Instant Discount on Kotak Credit Card",
      "Flat ₹150 off",
      "Free Delivery",
      "7 Days Replacement",
    ],
    reviews: [
      { user: "ClassicStyle", rating: 4, text: "Traditional check pattern" },
      { user: "Timeless", rating: 5, text: "Classic design never goes out" },
      { user: "Heritage", rating: 4, text: "Good traditional shirt" },
    ],
  },
  {
    id: 325,
    name: "French Cuff Shirt",
    category: "formal",
    price: 2799,
    oldPrice: 3799,
    images: [
      "./IMAGES/s25.jpeg",
      "./IMAGES/ms73.jpeg",
      "./IMAGES/ms74.jpeg",
      "./IMAGES/ms75.jpeg",
    ],
    description: "Elegant French cuffs for cufflinks and formal occasions.",
    offers: [
      "25% Instant Discount on HDFC Credit Card",
      "Free Cufflinks with purchase",
      "Free Premium Packaging",
      "15 Days Exchange",
    ],
    reviews: [
      { user: "FormalEvent", rating: 5, text: "Perfect for weddings" },
      { user: "Groom", rating: 5, text: "Great for special occasions" },
      { user: "BlackTie", rating: 4, text: "Elegant French cuffs" },
    ],
  },
  {
    id: 326,
    name: "Vintage Denim Shirt",
    category: "denim",
    price: 1699,
    oldPrice: 2399,
    images: [
      "./IMAGES/s26.jpeg",
      "./IMAGES/ms76.jpeg",
      "./IMAGES/ms77.jpeg",
      "./IMAGES/ms78.jpeg",
    ],
    description: "Distressed look for retro style and vintage fashion.",
    offers: [
      "10% Instant Discount on ICICI Credit Card",
      "Flat ₹200 off on first purchase",
      "Free Delivery",
      "30 Days Return Policy",
    ],
    reviews: [
      { user: "RetroLover", rating: 5, text: "Perfect vintage look" },
      { user: "OldSchool", rating: 4, text: "Great distressed design" },
      { user: "VintageFan", rating: 5, text: "Love the retro style" },
    ],
  },
  {
    id: 327,
    name: "Beige Linen Shirt",
    category: "linen",
    price: 1899,
    oldPrice: 2699,
    images: [
      "./IMAGES/s27.jpeg",
      "./IMAGES/ms79.jpeg",
      "./IMAGES/ms80.jpeg",
      "./IMAGES/ms81.jpeg",
    ],
    description:
      "Neutral beige color for versatility and multiple styling options.",
    offers: [
      "15% Instant Discount on SBI Credit Card",
      "Flat ₹250 off",
      "Free Delivery",
      "7 Days Replacement",
    ],
    reviews: [
      { user: "Versatile", rating: 5, text: "Goes with everything" },
      { user: "NeutralTone", rating: 4, text: "Perfect neutral color" },
      { user: "StyleMix", rating: 5, text: "Very versatile shirt" },
    ],
  },
  {
    id: 328,
    name: "Abstract Print Shirt",
    category: "printed",
    price: 1399,
    oldPrice: 1999,
    images: [
      "./IMAGES/s28.jpeg",
      "./IMAGES/ms82.jpeg",
      "./IMAGES/ms83.jpeg",
      "./IMAGES/ms84.jpeg",
    ],
    description:
      "Artistic abstract patterns for creativity and unique styling.",
    offers: [
      "12% Instant Discount on Axis Credit Card",
      "Buy 1 Get 10% off on next",
      "Free Delivery",
      "10 Days Replacement",
    ],
    reviews: [
      { user: "ArtLover", rating: 5, text: "Beautiful abstract patterns" },
      { user: "CreativeMind", rating: 4, text: "Very artistic design" },
      { user: "UniqueStyle", rating: 5, text: "Unique and creative" },
    ],
  },
  {
    id: 329,
    name: "Compression Shirt",
    category: "sports",
    price: 1299,
    oldPrice: 1899,
    images: [
      "./IMAGES/s29.jpeg",
      "./IMAGES/ms85.jpeg",
      "./IMAGES/ms86.jpeg",
      "./IMAGES/ms87.jpeg",
    ],
    description: "Muscle support during heavy workouts and athletic training.",
    offers: [
      "Buy 2 Get 20% off",
      "Flat ₹150 off on first purchase",
      "Free Delivery",
      "30 Days Return Policy",
    ],
    reviews: [
      { user: "WeightLifter", rating: 5, text: "Great muscle support" },
      { user: "AthletePro", rating: 5, text: "Perfect for heavy workouts" },
      { user: "FitnessPro", rating: 4, text: "Good compression fit" },
    ],
  },
  {
    id: 330,
    name: "Oversized Casual Shirt",
    category: "casual",
    price: 1199,
    oldPrice: 1699,
    images: [
      "./IMAGES/s30.jpeg",
      "./IMAGES/ms88.jpeg",
      "./IMAGES/ms89.jpeg",
      "./IMAGES/ms90.jpeg",
    ],
    description:
      "Comfortable oversized fit for relaxation and casual lounging.",
    offers: [
      "10% Instant Discount on ICICI Credit Card",
      "Flat ₹100 off",
      "Free Delivery",
      "30 Days Return Policy",
    ],
    reviews: [
      { user: "ComfortFirst", rating: 5, text: "Very comfortable fit" },
      { user: "RelaxMode", rating: 4, text: "Perfect for lounging" },
      { user: "CasualDay", rating: 5, text: "Great oversized fit" },
    ],
  },
  // SAREES (401-447)

  {
    id: 401,
    name: "Pure Pattu Saree — Wedding Special",
    category: "Pattu Saree",
    price: 8999,
    oldPrice: 11999,
    images: [
      "../IMAGES/s1.jpeg",
      "../IMAGES/s2.jpeg",
      "../IMAGES/s3.jpeg",
      "../IMAGES/s4.jpeg",
    ],
    description: "Rich zari weaving with premium silk quality.",
    offers: [
      "10% Instant Discount on SBI Credit Card",
      "Flat ₹500 off on first purchase",
      "Free Delivery",
      "14 Days Replacement",
    ],
    reviews: [
      { user: "Priya", rating: 5, text: "Perfect for wedding" },
      { user: "Anjali", rating: 4, text: "Beautiful zari work" },
      { user: "Meera", rating: 5, text: "Premium quality silk" },
      { user: "Sneha", rating: 4, text: "Worth the price" },
      { user: "Divya", rating: 5, text: "Best wedding saree" },
    ],
  },
  {
    id: 402,
    name: "Dharmavaram Silk Saree — Handloom",
    category: "Dharmavaram Saree",
    price: 7499,
    oldPrice: 9999,
    images: [
      "../IMAGES/s4.jpeg",
      "../IMAGES/d1.jpeg",
      "../IMAGES/d2.jpeg",
      "../IMAGES/d3.jpeg",
    ],
    description: "Traditional handwoven silk with temple borders.",
    offers: [
      "10% Instant Discount on SBI Credit Card",
      "Flat ₹300 off on first purchase",
      "Free Delivery",
      "7 Days Replacement",
    ],
    reviews: [
      { user: "Rekha", rating: 5, text: "Authentic handloom" },
      { user: "Lakshmi", rating: 4, text: "Beautiful temple border" },
      { user: "Geetha", rating: 5, text: "Traditional craftsmanship" },
      { user: "Pooja", rating: 4, text: "Good quality silk" },
      { user: "Shanti", rating: 5, text: "Perfect for festivals" },
    ],
  },
  {
    id: 403,
    name: "Fancy Saree — Party Wear",
    category: "Fancy Saree",
    price: 1899,
    oldPrice: 2999,
    images: [
      "../IMAGES/s2.jpeg",
      "../IMAGES/f1.jpeg",
      "../IMAGES/f2.jpeg",
      "../IMAGES/f3.jpeg",
    ],
    description: "Modern lightweight saree with premium shine.",
    offers: [
      "10% Instant Discount on SBI Credit Card",
      "Flat ₹200 off on first purchase",
      "Free Delivery",
      "7 Days Replacement",
    ],
    reviews: [
      { user: "Neha", rating: 4, text: "Great for parties" },
      { user: "Tanvi", rating: 3, text: "Good shine" },
      { user: "Aishwarya", rating: 4, text: "Lightweight and comfortable" },
      { user: "Kavya", rating: 4, text: "Value for money" },
      { user: "Swati", rating: 5, text: "Beautiful design" },
    ],
  },
  {
    id: 404,
    name: "Soft Cotton Saree — Daily Wear",
    category: "Cotton Saree",
    price: 1199,
    oldPrice: 1999,
    images: [
      "../IMAGES/s3.jpeg",
      "../IMAGES/c1.jpeg",
      "../IMAGES/c2.jpeg",
      "../IMAGES/c3.jpeg",
    ],
    description: "Lightweight, breathable material ideal for regular use.",
    offers: [
      "10% Instant Discount on SBI Credit Card",
      "Flat ₹100 off on first purchase",
      "Free Delivery",
      "7 Days Replacement",
    ],
    reviews: [
      { user: "Sunita", rating: 5, text: "Perfect for daily use" },
      { user: "Mala", rating: 4, text: "Very comfortable" },
      { user: "Chitra", rating: 5, text: "Breathable fabric" },
      { user: "Anita", rating: 4, text: "Good for summer" },
      { user: "Bhavana", rating: 5, text: "Excellent quality cotton" },
    ],
  },
  {
    id: 405,
    name: "Pure Kanchipuram Pattu Saree",
    category: "Pattu Saree",
    price: 8999,
    oldPrice: 12999,
    images: [
      "../IMAGES/s1.jpeg",
      "../IMAGES/s5.jpeg",
      "../IMAGES/s6.jpeg",
      "../IMAGES/s7.jpeg",
    ],
    description: "Rich zari border and smooth silk texture.",
    offers: [
      "10% Instant Discount on SBI Credit Card",
      "Flat ₹500 off on first purchase",
      "Free Delivery",
      "14 Days Replacement",
    ],
    reviews: [
      { user: "Radha", rating: 5, text: "Authentic Kanchipuram" },
      { user: "Sita", rating: 4, text: "Beautiful zari work" },
      { user: "Gowri", rating: 5, text: "Premium silk quality" },
      { user: "Parvathi", rating: 4, text: "Traditional design" },
      { user: "Saraswathi", rating: 5, text: "Perfect for weddings" },
    ],
  },
  {
    id: 406,
    name: "Wedding Zari Pattu Saree",
    category: "Pattu Saree",
    price: 7999,
    oldPrice: 11999,
    images: [
      "../IMAGES/s5.jpeg",
      "../IMAGES/s6.jpeg",
      "../IMAGES/s7.jpeg",
      "../IMAGES/s8.jpeg",
    ],
    description: "Heavy golden zari weaving.",
    offers: [
      "10% Instant Discount on SBI Credit Card",
      "Flat ₹400 off on first purchase",
      "Free Delivery",
      "14 Days Replacement",
    ],
    reviews: [
      { user: "Manjula", rating: 4, text: "Heavy zari work" },
      { user: "Usha", rating: 3, text: "Good for weddings" },
      { user: "Vidya", rating: 4, text: "Traditional look" },
      { user: "Shalini", rating: 4, text: "Quality material" },
      { user: "Kalpana", rating: 5, text: "Beautiful golden zari" },
    ],
  },
  {
    id: 407,
    name: "Royal Blue Bridal Pattu Saree",
    category: "Pattu Saree",
    price: 10299,
    oldPrice: 14999,
    images: [
      "../IMAGES/s6.jpeg",
      "../IMAGES/s7.jpeg",
      "../IMAGES/s8.jpeg",
      "../IMAGES/s9.jpeg",
    ],
    description: "Premium weaving and rich finish.",
    offers: [
      "15% Instant Discount on HDFC Credit Card",
      "Flat ₹700 off on first purchase",
      "Free Delivery",
      "14 Days Replacement",
    ],
    reviews: [
      { user: "Deepa", rating: 5, text: "Perfect bridal saree" },
      { user: "Aruna", rating: 5, text: "Royal blue color is beautiful" },
      { user: "Nandini", rating: 4, text: "Premium quality" },
      { user: "Jyothi", rating: 5, text: "Excellent craftsmanship" },
      { user: "Madhavi", rating: 4, text: "Worth the investment" },
    ],
  },
  {
    id: 408,
    name: "Designer Fancy Net Saree",
    category: "Fancy Saree",
    price: 2499,
    oldPrice: 3999,
    images: [
      "../IMAGES/f1.jpeg",
      "../IMAGES/f2.jpeg",
      "../IMAGES/f3.jpeg",
      "../IMAGES/f4.jpeg",
    ],
    description: "Stylish net fabric with sequin work.",
    offers: [
      "10% Instant Discount on SBI Credit Card",
      "Flat ₹300 off on first purchase",
      "Free Delivery",
      "7 Days Replacement",
    ],
    reviews: [
      { user: "Pallavi", rating: 4, text: "Beautiful sequin work" },
      { user: "Rashmi", rating: 4, text: "Great for parties" },
      { user: "Shruti", rating: 3, text: "Good net quality" },
      { user: "Nisha", rating: 4, text: "Designer look" },
      { user: "Monika", rating: 5, text: "Perfect for special occasions" },
    ],
  },
  {
    id: 409,
    name: "Party Wear Sequinned Saree",
    category: "Fancy Saree",
    price: 3299,
    oldPrice: 4999,
    images: [
      "../IMAGES/f2.jpeg",
      "../IMAGES/f3.jpeg",
      "../IMAGES/f4.jpeg",
      "../IMAGES/f5.jpeg",
    ],
    description: "Heavy sequin work for special occasions.",
    offers: [
      "10% Instant Discount on SBI Credit Card",
      "Flat ₹400 off on first purchase",
      "Free Delivery",
      "7 Days Replacement",
    ],
    reviews: [
      { user: "Simran", rating: 5, text: "Heavy sequin work" },
      { user: "Alia", rating: 4, text: "Perfect party wear" },
      { user: "Kiara", rating: 5, text: "Looks expensive" },
      { user: "Sanya", rating: 4, text: "Good quality sequins" },
      { user: "Isha", rating: 5, text: "Beautiful shine" },
    ],
  },
  {
    id: 410,
    name: "Embroidered Georgette Fancy Saree",
    category: "Fancy Saree",
    price: 2799,
    oldPrice: 4299,
    images: [
      "../IMAGES/f3.jpeg",
      "../IMAGES/f4.jpeg",
      "../IMAGES/f5.jpeg",
      "../IMAGES/f1.jpeg",
    ],
    description: "Beautiful embroidery on georgette fabric.",
    offers: [
      "10% Instant Discount on SBI Credit Card",
      "Flat ₹300 off on first purchase",
      "Free Delivery",
      "7 Days Replacement",
    ],
    reviews: [
      { user: "Tara", rating: 4, text: "Nice embroidery" },
      { user: "Maya", rating: 3, text: "Good georgette quality" },
      { user: "Leela", rating: 4, text: "Lightweight" },
      { user: "Riya", rating: 4, text: "Elegant design" },
      { user: "Zoya", rating: 5, text: "Perfect for functions" },
    ],
  },
  {
    id: 411,
    name: "Stone Work Fancy Saree",
    category: "Fancy Saree",
    price: 3899,
    oldPrice: 5799,
    images: [
      "../IMAGES/f4.jpeg",
      "../IMAGES/f5.jpeg",
      "../IMAGES/f1.jpeg",
      "../IMAGES/f2.jpeg",
    ],
    description: "Elegant stone work with mirror detailing.",
    offers: [
      "10% Instant Discount on SBI Credit Card",
      "Flat ₹500 off on first purchase",
      "Free Delivery",
      "7 Days Replacement",
    ],
    reviews: [
      { user: "Ananya", rating: 5, text: "Beautiful stone work" },
      { user: "Dipika", rating: 4, text: "Mirror detailing is nice" },
      { user: "Katrina", rating: 5, text: "Perfect for weddings" },
      { user: "Sonam", rating: 4, text: "Good quality stones" },
      { user: "Kareena", rating: 5, text: "Looks royal" },
    ],
  },
  {
    id: 413,
    name: "Printed Chiffon Fancy Saree",
    category: "Fancy Saree",
    price: 2199,
    oldPrice: 3499,
    images: [
      "../IMAGES/f5.jpeg",
      "../IMAGES/f1.jpeg",
      "../IMAGES/f2.jpeg",
      "../IMAGES/f3.jpeg",
    ],
    description: "Lightweight chiffon with fancy prints.",
    offers: [
      "10% Instant Discount on SBI Credit Card",
      "Flat ₹200 off on first purchase",
      "Free Delivery",
      "7 Days Replacement",
    ],
    reviews: [
      { user: "Naina", rating: 4, text: "Nice prints" },
      { user: "Mira", rating: 3, text: "Lightweight chiffon" },
      { user: "Rhea", rating: 4, text: "Good for casual wear" },
      { user: "Sia", rating: 4, text: "Comfortable fabric" },
      { user: "Tia", rating: 5, text: "Beautiful colors" },
    ],
  },
  {
    id: 414,
    name: "Handloom Pure Cotton Saree",
    category: "Cotton Saree",
    price: 1499,
    oldPrice: 2299,
    images: [
      "../IMAGES/c1.jpeg",
      "../IMAGES/c2.jpeg",
      "../IMAGES/c3.jpeg",
      "../IMAGES/c4.jpeg",
    ],
    description: "100% pure cotton for daily comfort.",
    offers: [
      "10% Instant Discount on SBI Credit Card",
      "Flat ₹150 off on first purchase",
      "Free Delivery",
      "7 Days Replacement",
    ],
    reviews: [
      { user: "Gauri", rating: 5, text: "Pure handloom cotton" },
      { user: "Shivani", rating: 4, text: "Very comfortable" },
      { user: "Yamini", rating: 5, text: "Authentic handloom" },
      { user: "Padmini", rating: 4, text: "Good for daily use" },
      { user: "Vandana", rating: 5, text: "Excellent fabric" },
    ],
  },
  {
    id: 416,
    name: "Printed Cotton Saree with Border",
    category: "Cotton Saree",
    price: 1299,
    oldPrice: 1999,
    images: [
      "../IMAGES/c2.jpeg",
      "../IMAGES/c3.jpeg",
      "../IMAGES/c4.jpeg",
      "../IMAGES/c5.jpeg",
    ],
    description: "Traditional prints with colorful border.",
    offers: [
      "10% Instant Discount on SBI Credit Card",
      "Flat ₹100 off on first purchase",
      "Free Delivery",
      "7 Days Replacement",
    ],
    reviews: [
      { user: "Kusum", rating: 4, text: "Beautiful prints" },
      { user: "Pushpa", rating: 4, text: "Nice border design" },
      { user: "Kamala", rating: 5, text: "Traditional look" },
      { user: "Lalita", rating: 4, text: "Good color combination" },
      { user: "Sushma", rating: 5, text: "Perfect for festivals" },
    ],
  },
  {
    id: 419,
    name: "Soft Cotton Saree for Daily Wear",
    category: "Cotton Saree",
    price: 899,
    oldPrice: 1499,
    images: [
      "../IMAGES/c3.jpeg",
      "../IMAGES/c4.jpeg",
      "../IMAGES/c5.jpeg",
      "../IMAGES/c1.jpeg",
    ],
    description: "Comfortable soft cotton for everyday use.",
    offers: [
      "10% Instant Discount on SBI Credit Card",
      "Flat ₹80 off on first purchase",
      "Free Delivery",
      "7 Days Replacement",
    ],
    reviews: [
      { user: "Bindu", rating: 5, text: "Very soft cotton" },
      { user: "Preeti", rating: 4, text: "Perfect daily wear" },
      { user: "Smita", rating: 5, text: "Comfortable all day" },
      { user: "Hema", rating: 4, text: "Good for office" },
      { user: "Jaya", rating: 5, text: "Best daily saree" },
    ],
  },
  {
    id: 420,
    name: "Traditional Cotton Saree with Zari",
    category: "Cotton Saree",
    price: 1799,
    oldPrice: 2799,
    images: [
      "../IMAGES/c4.jpeg",
      "../IMAGES/c5.jpeg",
      "../IMAGES/c1.jpeg",
      "../IMAGES/c2.jpeg",
    ],
    description: "Cotton with zari work for special occasions.",
    offers: [
      "10% Instant Discount on SBI Credit Card",
      "Flat ₹200 off on first purchase",
      "Free Delivery",
      "7 Days Replacement",
    ],
    reviews: [
      { user: "Mrunal", rating: 4, text: "Nice zari work" },
      { user: "Shweta", rating: 4, text: "Good for functions" },
      { user: "Pragya", rating: 5, text: "Traditional look" },
      { user: "Aditi", rating: 4, text: "Comfortable with style" },
      { user: "Nidhi", rating: 5, text: "Perfect combination" },
    ],
  },
  {
    id: 421,
    name: "Lightweight Summer Cotton Saree",
    category: "Cotton Saree",
    price: 1099,
    oldPrice: 1799,
    images: [
      "../IMAGES/c5.jpeg",
      "../IMAGES/c1.jpeg",
      "../IMAGES/c2.jpeg",
      "../IMAGES/c3.jpeg",
    ],
    description: "Perfect for hot weather, breathable fabric.",
    offers: [
      "10% Instant Discount on SBI Credit Card",
      "Flat ₹100 off on first purchase",
      "Free Delivery",
      "7 Days Replacement",
    ],
    reviews: [
      { user: "Sweta", rating: 5, text: "Perfect for summer" },
      { user: "Ritu", rating: 5, text: "Very breathable" },
      { user: "Neelam", rating: 4, text: "Lightweight fabric" },
      { user: "Poonam", rating: 5, text: "Cool in hot weather" },
      { user: "Manisha", rating: 4, text: "Great summer wear" },
    ],
  },
  {
    id: 422,
    name: "Traditional Gold Border Pattu Saree",
    category: "Pattu Saree",
    price: 6899,
    oldPrice: 9999,
    images: [
      "../IMAGES/s7.jpeg",
      "../IMAGES/s8.jpeg",
      "../IMAGES/s9.jpeg",
      "../IMAGES/s10.jpeg",
    ],
    description: "Perfect for functions & weddings.",
    offers: [
      "10% Instant Discount on SBI Credit Card",
      "Flat ₹400 off on first purchase",
      "Free Delivery",
      "14 Days Replacement",
    ],
    reviews: [
      { user: "Kiran", rating: 4, text: "Beautiful gold border" },
      { user: "Mohan", rating: 5, text: "Perfect for functions" },
      { user: "Ravi", rating: 4, text: "Good quality pattu" },
      { user: "Santhosh", rating: 5, text: "Traditional design" },
      { user: "Vinod", rating: 4, text: "Value for money" },
    ],
  },
  {
    id: 423,
    name: "Temple Border Pattu Saree",
    category: "Pattu Saree",
    price: 7499,
    oldPrice: 10999,
    images: [
      "../IMAGES/s8.jpeg",
      "../IMAGES/s9.jpeg",
      "../IMAGES/s10.jpeg",
      "../IMAGES/s11.jpeg",
    ],
    description: "Smooth silk & fine detailing.",
    offers: [
      "10% Instant Discount on SBI Credit Card",
      "Flat ₹500 off on first purchase",
      "Free Delivery",
      "14 Days Replacement",
    ],
    reviews: [
      { user: "Rajesh", rating: 5, text: "Beautiful temple border" },
      { user: "Kumar", rating: 4, text: "Fine detailing" },
      { user: "Sathish", rating: 5, text: "Smooth silk" },
      { user: "Prakash", rating: 4, text: "Traditional craftsmanship" },
      { user: "Naveen", rating: 5, text: "Excellent quality" },
    ],
  },
  {
    id: 424,
    name: "Soft Silk Kanchi Pattu Saree",
    category: "Pattu Saree",
    price: 8499,
    oldPrice: 12499,
    images: [
      "../IMAGES/s9.jpeg",
      "../IMAGES/s10.jpeg",
      "../IMAGES/s11.jpeg",
      "../IMAGES/s7.jpeg",
    ],
    description: "Lightweight premium silk.",
    offers: [
      "15% Instant Discount on HDFC Credit Card",
      "Flat ₹600 off on first purchase",
      "Free Delivery",
      "14 Days Replacement",
    ],
    reviews: [
      { user: "Mahesh", rating: 5, text: "Premium silk quality" },
      { user: "Vijay", rating: 4, text: "Lightweight and comfortable" },
      { user: "Ajay", rating: 5, text: "Authentic Kanchi silk" },
      { user: "Sanjay", rating: 4, text: "Good investment" },
      { user: "Dinesh", rating: 5, text: "Best pattu saree" },
    ],
  },
  {
    id: 425,
    name: "Dual Tone Bridal Silk Saree",
    category: "Pattu Saree",
    price: 9299,
    oldPrice: 13499,
    images: [
      "../IMAGES/s10.jpeg",
      "../IMAGES/s11.jpeg",
      "../IMAGES/s7.jpeg",
      "../IMAGES/s8.jpeg",
    ],
    description: "Beautiful dual-shade finish.",
    offers: [
      "15% Instant Discount on HDFC Credit Card",
      "Flat ₹700 off on first purchase",
      "Free Delivery",
      "14 Days Replacement",
    ],
    reviews: [
      { user: "Arjun", rating: 5, text: "Beautiful dual tone" },
      { user: "Karthik", rating: 5, text: "Perfect bridal saree" },
      { user: "Harish", rating: 4, text: "Unique color combination" },
      { user: "Gopal", rating: 5, text: "Premium finish" },
      { user: "Murali", rating: 4, text: "Excellent craftsmanship" },
    ],
  },
  {
    id: 426,
    name: "Premium Red Wedding Pattu Saree",
    category: "Pattu Saree",
    price: 11499,
    oldPrice: 15999,
    images: [
      "../IMAGES/s11.jpeg",
      "../IMAGES/s7.jpeg",
      "../IMAGES/s8.jpeg",
      "../IMAGES/s9.jpeg",
    ],
    description: "Soft, shiny, perfect for brides.",
    offers: [
      "15% Instant Discount on HDFC Credit Card",
      "Flat ₹800 off on first purchase",
      "Free Delivery",
      "14 Days Replacement",
    ],
    reviews: [
      { user: "Nagesh", rating: 5, text: "Perfect bridal red" },
      { user: "Raghu", rating: 5, text: "Soft and shiny" },
      { user: "Manoj", rating: 5, text: "Best wedding saree" },
      { user: "Suresh", rating: 4, text: "Premium quality" },
      { user: "Anand", rating: 5, text: "Worth every penny" },
    ],
  },
  {
    id: 427,
    name: "Handloom Dharmavaram Silk Saree",
    category: "Dharmavaram Saree",
    price: 7499,
    oldPrice: 10999,
    images: [
      "../IMAGES/d1.jpeg",
      "../IMAGES/d2.jpeg",
      "../IMAGES/d3.jpeg",
      "../IMAGES/d4.jpeg",
    ],
    description: "Rich border with temple weaving.",
    offers: [
      "10% Instant Discount on SBI Credit Card",
      "Flat ₹500 off on first purchase",
      "Free Delivery",
      "14 Days Replacement",
    ],
    reviews: [
      { user: "Bala", rating: 5, text: "Authentic Dharmavaram" },
      { user: "Chandru", rating: 4, text: "Rich border design" },
      { user: "Durai", rating: 5, text: "Traditional weaving" },
      { user: "Eswar", rating: 4, text: "Good silk quality" },
      { user: "Firoz", rating: 5, text: "Perfect for festivals" },
    ],
  },
  {
    id: 428,
    name: "Traditional Dharmavaram Bridal Saree",
    category: "Dharmavaram Saree",
    price: 9299,
    oldPrice: 13499,
    images: [
      "../IMAGES/d2.jpeg",
      "../IMAGES/d3.jpeg",
      "../IMAGES/d4.jpeg",
      "../IMAGES/d5.jpeg",
    ],
    description: "Perfect for weddings.",
    offers: [
      "15% Instant Discount on HDFC Credit Card",
      "Flat ₹700 off on first purchase",
      "Free Delivery",
      "14 Days Replacement",
    ],
    reviews: [
      { user: "Ganesh", rating: 5, text: "Perfect bridal saree" },
      { user: "Hari", rating: 5, text: "Traditional design" },
      { user: "Indra", rating: 4, text: "Heavy silk" },
      { user: "Jagan", rating: 5, text: "Beautiful craftsmanship" },
      { user: "Kannan", rating: 4, text: "Worth the price" },
    ],
  },
  {
    id: 429,
    name: "Heavy Zari Dharmavaram Silk",
    category: "Dharmavaram Saree",
    price: 8899,
    oldPrice: 12999,
    images: [
      "../IMAGES/d3.jpeg",
      "../IMAGES/d4.jpeg",
      "../IMAGES/d5.jpeg",
      "../IMAGES/d6.jpeg",
    ],
    description: "Luxurious zari craftsmanship.",
    offers: [
      "10% Instant Discount on SBI Credit Card",
      "Flat ₹600 off on first purchase",
      "Free Delivery",
      "14 Days Replacement",
    ],
    reviews: [
      { user: "Lokesh", rating: 5, text: "Heavy zari work" },
      { user: "Mohan", rating: 4, text: "Luxurious feel" },
      { user: "Naveen", rating: 5, text: "Excellent craftsmanship" },
      { user: "Omkar", rating: 4, text: "Good for special occasions" },
      { user: "Pavan", rating: 5, text: "Premium zari quality" },
    ],
  },
  {
    id: 430,
    name: "Classic Dharmavaram Copper-Zari Saree",
    category: "Dharmavaram Saree",
    price: 6999,
    oldPrice: 10499,
    images: [
      "../IMAGES/d4.jpeg",
      "../IMAGES/d5.jpeg",
      "../IMAGES/d6.jpeg",
      "../IMAGES/d7.jpeg",
    ],
    description: "Elegant and durable silk.",
    offers: [
      "10% Instant Discount on SBI Credit Card",
      "Flat ₹400 off on first purchase",
      "Free Delivery",
      "14 Days Replacement",
    ],
    reviews: [
      { user: "Qasim", rating: 4, text: "Beautiful copper zari" },
      { user: "Ramesh", rating: 5, text: "Durable silk" },
      { user: "Sampath", rating: 4, text: "Classic design" },
      { user: "Thiru", rating: 5, text: "Elegant look" },
      { user: "Uday", rating: 4, text: "Good value" },
    ],
  },
  {
    id: 431,
    name: "Red Temple Border Silk Saree",
    category: "Dharmavaram Saree",
    price: 7199,
    oldPrice: 10699,
    images: [
      "../IMAGES/d5.jpeg",
      "../IMAGES/d6.jpeg",
      "../IMAGES/d7.jpeg",
      "../IMAGES/d8.jpeg",
    ],
    description: "Soft texture and traditional feel.",
    offers: [
      "10% Instant Discount on SBI Credit Card",
      "Flat ₹400 off on first purchase",
      "Free Delivery",
      "14 Days Replacement",
    ],
    reviews: [
      { user: "Vikram", rating: 5, text: "Beautiful red color" },
      { user: "Waseem", rating: 4, text: "Soft texture" },
      { user: "Xavier", rating: 5, text: "Traditional temple border" },
      { user: "Yash", rating: 4, text: "Good silk quality" },
      { user: "Zubair", rating: 5, text: "Perfect for pujas" },
    ],
  },
  {
    id: 432,
    name: "Soft Silk Dharmavaram Saree",
    category: "Dharmavaram Saree",
    price: 5999,
    oldPrice: 8999,
    images: [
      "../IMAGES/d6.jpeg",
      "../IMAGES/d7.jpeg",
      "../IMAGES/d8.jpeg",
      "../IMAGES/d1.jpeg",
    ],
    description: "Lightweight handloom silk.",
    offers: [
      "10% Instant Discount on SBI Credit Card",
      "Flat ₹300 off on first purchase",
      "Free Delivery",
      "14 Days Replacement",
    ],
    reviews: [
      { user: "Aarav", rating: 4, text: "Lightweight silk" },
      { user: "Bhuvan", rating: 5, text: "Soft handloom" },
      { user: "Chirag", rating: 4, text: "Comfortable to wear" },
      { user: "Dhruv", rating: 5, text: "Authentic Dharmavaram" },
      { user: "Eshan", rating: 4, text: "Good for daily functions" },
    ],
  },
  {
    id: 433,
    name: "Dual Shade Silk Dharmavaram",
    category: "Dharmavaram Saree",
    price: 6499,
    oldPrice: 9499,
    images: [
      "../IMAGES/d7.jpeg",
      "../IMAGES/d8.jpeg",
      "../IMAGES/d1.jpeg",
      "../IMAGES/d2.jpeg",
    ],
    description: "Smooth texture, festival wear.",
    offers: [
      "10% Instant Discount on SBI Credit Card",
      "Flat ₹350 off on first purchase",
      "Free Delivery",
      "14 Days Replacement",
    ],
    reviews: [
      { user: "Farhan", rating: 5, text: "Beautiful dual shade" },
      { user: "Gautam", rating: 4, text: "Smooth texture" },
      { user: "Harsh", rating: 5, text: "Perfect for festivals" },
      { user: "Ishan", rating: 4, text: "Good color combination" },
      { user: "Jai", rating: 5, text: "Premium silk" },
    ],
  },
  {
    id: 434,
    name: "Golden Border Dharmavaram Silk",
    category: "Dharmavaram Saree",
    price: 7899,
    oldPrice: 11499,
    images: [
      "../IMAGES/d8.jpeg",
      "../IMAGES/d1.jpeg",
      "../IMAGES/d2.jpeg",
      "../IMAGES/d3.jpeg",
    ],
    description: "Perfect for occasions.",
    offers: [
      "10% Instant Discount on SBI Credit Card",
      "Flat ₹500 off on first purchase",
      "Free Delivery",
      "14 Days Replacement",
    ],
    reviews: [
      { user: "Kabir", rating: 5, text: "Beautiful golden border" },
      { user: "Laksh", rating: 4, text: "Perfect for occasions" },
      { user: "Manav", rating: 5, text: "Premium quality" },
      { user: "Nakul", rating: 4, text: "Good for weddings" },
      { user: "Om", rating: 5, text: "Traditional elegance" },
    ],
  },
  {
    id: 435,
    name: "Daily Wear Printed Saree",
    category: "Regular Saree",
    price: 999,
    oldPrice: 1599,
    images: [
      "../IMAGES/r1.jpeg",
      "../IMAGES/r2.jpeg",
      "../IMAGES/r3.jpeg",
      "../IMAGES/r4.jpeg",
    ],
    description: "Soft fabric with elegant prints.",
    offers: [
      "10% Instant Discount on SBI Credit Card",
      "Flat ₹100 off on first purchase",
      "Free Delivery",
      "7 Days Replacement",
    ],
    reviews: [
      { user: "Pranav", rating: 4, text: "Good daily wear" },
      { user: "Qutub", rating: 3, text: "Nice prints" },
      { user: "Rohan", rating: 4, text: "Soft fabric" },
      { user: "Samar", rating: 4, text: "Value for money" },
      { user: "Tanmay", rating: 5, text: "Perfect for office" },
    ],
  },
  {
    id: 436,
    name: "Soft Georgette Saree",
    category: "Regular Saree",
    price: 1199,
    oldPrice: 1899,
    images: [
      "../IMAGES/r2.jpeg",
      "../IMAGES/r3.jpeg",
      "../IMAGES/r4.jpeg",
      "../IMAGES/r5.jpeg",
    ],
    description: "Lightweight everyday wear.",
    offers: [
      "10% Instant Discount on SBI Credit Card",
      "Flat ₹120 off on first purchase",
      "Free Delivery",
      "7 Days Replacement",
    ],
    reviews: [
      { user: "Ujjwal", rating: 4, text: "Soft georgette" },
      { user: "Varun", rating: 4, text: "Lightweight" },
      { user: "Yuvraj", rating: 3, text: "Good for daily use" },
      { user: "Zayan", rating: 4, text: "Comfortable fabric" },
      { user: "Aryan", rating: 5, text: "Easy to maintain" },
    ],
  },
  {
    id: 437,
    name: "Simple Border Saree",
    category: "Regular Saree",
    price: 899,
    oldPrice: 1499,
    images: [
      "../IMAGES/r3.jpeg",
      "../IMAGES/r4.jpeg",
      "../IMAGES/r5.jpeg",
      "../IMAGES/r6.jpeg",
    ],
    description: "Perfect for casual outings.",
    offers: [
      "10% Instant Discount on SBI Credit Card",
      "Flat ₹80 off on first purchase",
      "Free Delivery",
      "7 Days Replacement",
    ],
    reviews: [
      { user: "Bhavik", rating: 4, text: "Simple and elegant" },
      { user: "Chetan", rating: 3, text: "Good for casual wear" },
      { user: "Darshan", rating: 4, text: "Nice border" },
      { user: "Ekansh", rating: 4, text: "Budget friendly" },
      { user: "Fardeen", rating: 5, text: "Perfect for shopping" },
    ],
  },
  {
    id: 438,
    name: "Floral Design Saree",
    category: "Regular Saree",
    price: 1299,
    oldPrice: 1999,
    images: [
      "../IMAGES/r4.jpeg",
      "../IMAGES/r5.jpeg",
      "../IMAGES/r6.jpeg",
      "../IMAGES/r7.jpeg",
    ],
    description: "Beautiful printed floral patterns.",
    offers: [
      "10% Instant Discount on SBI Credit Card",
      "Flat ₹130 off on first purchase",
      "Free Delivery",
      "7 Days Replacement",
    ],
    reviews: [
      { user: "Girish", rating: 5, text: "Beautiful floral prints" },
      { user: "Hiten", rating: 4, text: "Nice patterns" },
      { user: "Ishaan", rating: 4, text: "Good for parties" },
      { user: "Jayesh", rating: 3, text: "Colorful design" },
      { user: "Kunal", rating: 5, text: "Perfect for garden parties" },
    ],
  },
  {
    id: 439,
    name: "Daily Use Poly Cotton Saree",
    category: "Regular Saree",
    price: 749,
    oldPrice: 1299,
    images: [
      "../IMAGES/r5.jpeg",
      "../IMAGES/r6.jpeg",
      "../IMAGES/r7.jpeg",
      "../IMAGES/r8.jpeg",
    ],
    description: "Comfortable everyday wear.",
    offers: [
      "10% Instant Discount on SBI Credit Card",
      "Flat ₹70 off on first purchase",
      "Free Delivery",
      "7 Days Replacement",
    ],
    reviews: [
      { user: "Lalit", rating: 4, text: "Comfortable poly cotton" },
      { user: "Mitesh", rating: 3, text: "Good daily wear" },
      { user: "Nimit", rating: 4, text: "Easy maintenance" },
      { user: "Ojas", rating: 4, text: "Budget friendly" },
      { user: "Parth", rating: 5, text: "Perfect for household work" },
    ],
  },
  {
    id: 440,
    name: "Printed Stylish Saree",
    category: "Regular Saree",
    price: 899,
    oldPrice: 1499,
    images: [
      "../IMAGES/r6.jpeg",
      "../IMAGES/r7.jpeg",
      "../IMAGES/r8.jpeg",
      "../IMAGES/r1.jpeg",
    ],
    description: "Trendy & budget-friendly.",
    offers: [
      "10% Instant Discount on SBI Credit Card",
      "Flat ₹90 off on first purchase",
      "Free Delivery",
      "7 Days Replacement",
    ],
    reviews: [
      { user: "Quasar", rating: 4, text: "Trendy prints" },
      { user: "Ritesh", rating: 3, text: "Budget friendly" },
      { user: "Sahil", rating: 4, text: "Stylish design" },
      { user: "Tushar", rating: 4, text: "Good for college" },
      { user: "Umang", rating: 5, text: "Perfect for young girls" },
    ],
  },
  {
    id: 441,
    name: "Classic Printed Saree",
    category: "Regular Saree",
    price: 699,
    oldPrice: 1199,
    images: [
      "../IMAGES/r7.jpeg",
      "../IMAGES/r8.jpeg",
      "../IMAGES/r1.jpeg",
      "../IMAGES/r2.jpeg",
    ],
    description: "Simple & elegant design.",
    offers: [
      "10% Instant Discount on SBI Credit Card",
      "Flat ₹60 off on first purchase",
      "Free Delivery",
      "7 Days Replacement",
    ],
    reviews: [
      { user: "Vikas", rating: 4, text: "Classic design" },
      { user: "Waman", rating: 3, text: "Simple and elegant" },
      { user: "Xerxes", rating: 4, text: "Good basic saree" },
      { user: "Yashwant", rating: 4, text: "Value for money" },
      { user: "Zorawar", rating: 5, text: "Perfect for beginners" },
    ],
  },
  {
    id: 442,
    name: "Daily Wear Lightweight Saree",
    category: "Regular Saree",
    price: 799,
    oldPrice: 1399,
    images: [
      "../IMAGES/r8.jpeg",
      "../IMAGES/r1.jpeg",
      "../IMAGES/r2.jpeg",
      "../IMAGES/r3.jpeg",
    ],
    description: "Comfort + durability combo.",
    offers: [
      "10% Instant Discount on SBI Credit Card",
      "Flat ₹80 off on first purchase",
      "Free Delivery",
      "7 Days Replacement",
    ],
    reviews: [
      { user: "Aakash", rating: 4, text: "Lightweight and comfortable" },
      { user: "Bharat", rating: 4, text: "Durable fabric" },
      { user: "Chandan", rating: 3, text: "Good for daily wear" },
      { user: "Dev", rating: 4, text: "Easy to drape" },
      { user: "Eklavya", rating: 5, text: "Perfect combination" },
    ],
  },
  {
    id: 443,
    name: "Special Kanchi Silk",
    category: "Pattu Saree",
    price: 12499,
    oldPrice: 17999,
    images: [
      "../IMAGES/extra1.jpeg",
      "../IMAGES/s1.jpeg",
      "../IMAGES/s5.jpeg",
      "../IMAGES/s6.jpeg",
    ],
    description: "Rich silk texture with elegant zari.",
    offers: [
      "15% Instant Discount on HDFC Credit Card",
      "Flat ₹900 off on first purchase",
      "Free Delivery",
      "14 Days Replacement",
    ],
    reviews: [
      { user: "Fahad", rating: 4, text: "Special Kanchi silk" },
      { user: "Giriraj", rating: 5, text: "Rich texture" },
      { user: "Harshad", rating: 4, text: "Elegant zari work" },
      { user: "Indraneel", rating: 5, text: "Premium quality" },
      { user: "Jeevan", rating: 4, text: "Worth the price" },
    ],
  },
  {
    id: 444,
    name: "Copper Zari Dharmavaram",
    category: "Dharmavaram Saree",
    price: 10999,
    oldPrice: 15999,
    images: [
      "../IMAGES/extra2.jpeg",
      "../IMAGES/d1.jpeg",
      "../IMAGES/d2.jpeg",
      "../IMAGES/d3.jpeg",
    ],
    description: "Traditional copper zari weaving.",
    offers: [
      "15% Instant Discount on HDFC Credit Card",
      "Flat ₹800 off on first purchase",
      "Free Delivery",
      "14 Days Replacement",
    ],
    reviews: [
      { user: "Kailash", rating: 5, text: "Beautiful copper zari" },
      { user: "Laxman", rating: 5, text: "Traditional weaving" },
      { user: "Madhav", rating: 4, text: "Premium Dharmavaram" },
      { user: "Narendra", rating: 5, text: "Excellent craftsmanship" },
      { user: "Omkar", rating: 4, text: "Heirloom piece" },
    ],
  },
  {
    id: 445,
    name: "Designer Fancy Saree",
    category: "Fancy Saree",
    price: 1899,
    oldPrice: 2999,
    images: [
      "../IMAGES/extra3.jpeg",
      "../IMAGES/f1.jpeg",
      "../IMAGES/f2.jpeg",
      "../IMAGES/f3.jpeg",
    ],
    description: "Trendy party wear design.",
    offers: [
      "10% Instant Discount on SBI Credit Card",
      "Flat ₹200 off on first purchase",
      "Free Delivery",
      "7 Days Replacement",
    ],
    reviews: [
      { user: "Pankaj", rating: 3, text: "Trendy design" },
      { user: "Qamar", rating: 4, text: "Good for parties" },
      { user: "Raghav", rating: 3, text: "Designer look" },
      { user: "Satyam", rating: 4, text: "Modern style" },
      { user: "Tejas", rating: 3, text: "Contemporary design" },
    ],
  },
  {
    id: 446,
    name: "Handloom Soft Cotton",
    category: "Cotton Saree",
    price: 1299,
    oldPrice: 2099,
    images: [
      "../IMAGES/extra4.jpeg",
      "../IMAGES/c1.jpeg",
      "../IMAGES/c2.jpeg",
      "../IMAGES/c3.jpeg",
    ],
    description: "Breathable daily-wear cotton.",
    offers: [
      "10% Instant Discount on SBI Credit Card",
      "Flat ₹130 off on first purchase",
      "Free Delivery",
      "7 Days Replacement",
    ],
    reviews: [
      { user: "Umesh", rating: 4, text: "Soft handloom cotton" },
      { user: "Vivek", rating: 4, text: "Breathable fabric" },
      { user: "Wasim", rating: 3, text: "Good for daily wear" },
      { user: "Yogesh", rating: 4, text: "Authentic handloom" },
      { user: "Zameer", rating: 5, text: "Perfect for summer" },
    ],
  },
  {
    id: 447,
    name: "Simple Daily Wear Saree",
    category: "Regular Saree",
    price: 699,
    oldPrice: 1199,
    images: [
      "../IMAGES/extra5.jpeg",
      "../IMAGES/r1.jpeg",
      "../IMAGES/r2.jpeg",
      "../IMAGES/r3.jpeg",
    ],
    description: "Comfortable everyday wear.",
    offers: [
      "10% Instant Discount on SBI Credit Card",
      "Flat ₹60 off on first purchase",
      "Free Delivery",
      "7 Days Replacement",
    ],
    reviews: [
      { user: "Abhinav", rating: 3, text: "Simple design" },
      { user: "Bhaskar", rating: 4, text: "Comfortable daily wear" },
      { user: "Chiranjiv", rating: 3, text: "Budget friendly" },
      { user: "Deepak", rating: 4, text: "Good for household" },
      { user: "Eshan", rating: 3, text: "Basic saree" },
    ],
  },

  // TRACK PANTS (601-612)
  {
    id: 601,
    name: "Men Track Pants — Slim Fit",
    category: "Track Pants",
    price: 1299,
    oldPrice: 1999,
    images: [
      "../IMAGES/tp1-1.jpeg",
      "../IMAGES/tp1-2.jpeg",
      "../IMAGES/tp1-3.jpeg",
      "../IMAGES/tp1-4.jpeg",
    ],
    description:
      "Comfortable cotton blend track pants with slim fit design for daily wear and casual outings.",
    offers: [
      "30% Instant Discount on ICICI Bank",
      "Free Delivery",
      "10 Days Return Policy",
      "Buy 1 Get 1 20% off",
    ],
    reviews: [
      { user: "Ravi", rating: 4, text: "Perfect fit and comfortable" },
      { user: "Sandeep", rating: 5, text: "Great quality fabric" },
      { user: "Vinod", rating: 4, text: "Good for gym and casual wear" },
    ],
  },
  {
    id: 602,
    name: "Sports Track Pants — Dry Fit",
    category: "Track Pants",
    price: 1499,
    oldPrice: 2199,
    images: [
      "../IMAGES/tp2-1.jpeg",
      "../IMAGES/tp2-2.jpeg",
      "../IMAGES/tp2-3.jpeg",
      "../IMAGES/tp2-4.jpeg",
    ],
    description:
      "Sweat-resistant dry fit fabric ideal for workouts, running, and sports activities.",
    offers: [
      "25% Instant Discount on HDFC Bank",
      "Flat ₹200 off on first purchase",
      "Free Delivery",
      "Easy Returns",
    ],
    reviews: [
      { user: "Arun", rating: 5, text: "Excellent for workouts" },
      { user: "Kumar", rating: 4, text: "Good sweat absorption" },
      { user: "Naveen", rating: 5, text: "Perfect for running" },
    ],
  },
  {
    id: 603,
    name: "Jogger Track Pants — Ankle Fit",
    category: "Track Pants",
    price: 1699,
    oldPrice: 2499,
    images: [
      "../IMAGES/tp3-1.jpeg",
      "../IMAGES/tp3-2.jpeg",
      "../IMAGES/tp3-3.jpeg",
      "../IMAGES/tp3-4.jpeg",
    ],
    description:
      "Trendy jogger style with elastic cuffs and modern design for fashionable casual wear.",
    offers: [
      "20% Cashback on PayTM",
      "Free Delivery",
      "14 Days Return Policy",
      "Extra 5% off on first order",
    ],
    reviews: [
      { user: "Rajesh", rating: 4, text: "Stylish and comfortable" },
      { user: "Manoj", rating: 5, text: "Perfect jogger fit" },
      { user: "Prakash", rating: 4, text: "Great for casual outings" },
    ],
  },
  {
    id: 604,
    name: "Training Track Pants — Gym Wear",
    category: "Track Pants",
    price: 1399,
    oldPrice: 2099,
    images: [
      "../IMAGES/tp4-1.jpeg",
      "../IMAGES/tp4-2.jpeg",
      "../IMAGES/tp4-3.jpeg",
      "../IMAGES/tp4-4.jpeg",
    ],
    description:
      "Stretchable fabric designed for intense training sessions and gym workouts.",
    offers: [
      "15% Instant Discount on Axis Bank",
      "Free Delivery above ₹999",
      "7 Days Replacement",
      "Buy 2 Get 10% off",
    ],
    reviews: [
      { user: "Vikram", rating: 5, text: "Perfect for gym training" },
      { user: "Satish", rating: 4, text: "Good stretch quality" },
      { user: "Ganesh", rating: 5, text: "Durable fabric" },
    ],
  },
  {
    id: 605,
    name: "Premium Slim Fit Track Pants",
    category: "Track Pants",
    price: 1599,
    oldPrice: 2399,
    images: [
      "../IMAGES/tp1-1.jpeg",
      "../IMAGES/tp1-2.jpeg",
      "../IMAGES/tp1-3.jpeg",
      "../IMAGES/tp1-4.jpeg",
    ],
    description:
      "High-quality fabric with perfect fit for daily casual wear and light exercises.",
    offers: [
      "30% Instant Discount on SBI Credit Card",
      "Free Delivery",
      "10 Days Return Policy",
      "Extra ₹150 off on first purchase",
    ],
    reviews: [
      { user: "Anand", rating: 5, text: "Premium quality material" },
      { user: "Suresh", rating: 4, text: "Perfect slim fit" },
      { user: "Rohit", rating: 5, text: "Worth every penny" },
    ],
  },
  {
    id: 606,
    name: "Running Track Pants — Quick Dry",
    category: "Track Pants",
    price: 1799,
    oldPrice: 2699,
    images: [
      "../IMAGES/tp2-1.jpeg",
      "../IMAGES/tp2-2.jpeg",
      "../IMAGES/tp2-3.jpeg",
      "../IMAGES/tp2-4.jpeg",
    ],
    description:
      "Lightweight quick-dry fabric specifically designed for running and outdoor sports.",
    offers: [
      "25% Cashback on Amazon Pay",
      "Free Delivery",
      "Easy Returns",
      "Buy 1 Get 1 15% off",
    ],
    reviews: [
      { user: "Mahesh", rating: 5, text: "Best for running" },
      { user: "Dinesh", rating: 4, text: "Lightweight and comfortable" },
      { user: "Amit", rating: 5, text: "Quick dry feature works well" },
    ],
  },
  {
    id: 607,
    name: "Designer Jogger Track Pants",
    category: "Track Pants",
    price: 1999,
    oldPrice: 2999,
    images: [
      "../IMAGES/tp3-1.jpeg",
      "../IMAGES/tp3-2.jpeg",
      "../IMAGES/tp3-3.jpeg",
      "../IMAGES/tp3-4.jpeg",
    ],
    description:
      "Stylish jogger track pants with modern design elements for fashion-forward individuals.",
    offers: [
      "20% Instant Discount on ICICI Bank",
      "Free Delivery",
      "14 Days Return Policy",
      "Flat ₹250 off",
    ],
    reviews: [
      { user: "Sanjay", rating: 4, text: "Very stylish design" },
      { user: "Ramesh", rating: 5, text: "Perfect for parties" },
      { user: "Gopal", rating: 4, text: "Good fabric quality" },
    ],
  },
  {
    id: 608,
    name: "Professional Gym Track Pants",
    category: "Track Pants",
    price: 1699,
    oldPrice: 2599,
    images: [
      "../IMAGES/tp4-1.jpeg",
      "../IMAGES/tp4-2.jpeg",
      "../IMAGES/tp4-3.jpeg",
      "../IMAGES/tp4-4.jpeg",
    ],
    description:
      "Designed for professional training sessions with reinforced stitching and durable fabric.",
    offers: [
      "15% Instant Discount on HDFC Bank",
      "Free Delivery",
      "7 Days Replacement",
      "Buy 2 Get ₹300 off",
    ],
    reviews: [
      { user: "Deepak", rating: 5, text: "Professional quality" },
      { user: "Sunil", rating: 5, text: "Perfect for intense workouts" },
      { user: "Mohan", rating: 4, text: "Durable and comfortable" },
    ],
  },
  {
    id: 609,
    name: "Casual Slim Fit Track Pants",
    category: "Track Pants",
    price: 1199,
    oldPrice: 1899,
    images: [
      "../IMAGES/tp1-1.jpeg",
      "../IMAGES/tp1-2.jpeg",
      "../IMAGES/tp1-3.jpeg",
      "../IMAGES/tp1-4.jpeg",
    ],
    description:
      "Perfect for casual outings and daily wear with comfortable slim fit design.",
    offers: [
      "35% Instant Discount on SBI Credit Card",
      "Free Delivery",
      "10 Days Return Policy",
      "Extra ₹100 off",
    ],
    reviews: [
      { user: "Karthik", rating: 4, text: "Great for daily use" },
      { user: "Balu", rating: 5, text: "Comfortable all day" },
      { user: "Sai", rating: 4, text: "Value for money" },
    ],
  },
  {
    id: 610,
    name: "Outdoor Sports Track Pants",
    category: "Track Pants",
    price: 1899,
    oldPrice: 2799,
    images: [
      "../IMAGES/tp2-1.jpeg",
      "../IMAGES/tp2-2.jpeg",
      "../IMAGES/tp2-3.jpeg",
      "../IMAGES/tp2-4.jpeg",
    ],
    description:
      "Durable fabric designed for outdoor activities and sports with UV protection.",
    offers: [
      "20% Cashback on PayTM",
      "Free Delivery",
      "Easy Returns",
      "Buy 1 Get 1 25% off",
    ],
    reviews: [
      { user: "Raju", rating: 5, text: "Perfect for outdoor sports" },
      { user: "Shiva", rating: 4, text: "Durable fabric" },
      { user: "Pavan", rating: 5, text: "Great for hiking" },
    ],
  },
  {
    id: 611,
    name: "Comfort Jogger Track Pants",
    category: "Track Pants",
    price: 1399,
    oldPrice: 2099,
    images: [
      "../IMAGES/tp3-1.jpeg",
      "../IMAGES/tp3-2.jpeg",
      "../IMAGES/tp3-3.jpeg",
      "../IMAGES/tp3-4.jpeg",
    ],
    description:
      "Maximum comfort with soft fabric and elastic waistband for all-day wear.",
    offers: [
      "25% Instant Discount on ICICI Bank",
      "Free Delivery",
      "14 Days Return Policy",
      "Flat ₹200 off",
    ],
    reviews: [
      { user: "Venkat", rating: 5, text: "Extremely comfortable" },
      { user: "Nagaraj", rating: 4, text: "Soft fabric" },
      { user: "Charan", rating: 5, text: "Perfect for lounging" },
    ],
  },
  {
    id: 612,
    name: "Advanced Training Track Pants",
    category: "Track Pants",
    price: 2099,
    oldPrice: 3199,
    images: [
      "../IMAGES/tp4-1.jpeg",
      "../IMAGES/tp4-2.jpeg",
      "../IMAGES/tp4-3.jpeg",
      "../IMAGES/tp4-4.jpeg",
    ],
    description:
      "Advanced fabric technology for serious athletes and professional trainers.",
    offers: [
      "15% Instant Discount on Axis Bank",
      "Free Delivery",
      "7 Days Replacement",
      "Extra 10% off on bulk orders",
    ],
    reviews: [
      { user: "Vishal", rating: 5, text: "Professional grade quality" },
      { user: "Ajay", rating: 5, text: "Best for athletes" },
      { user: "Bharat", rating: 4, text: "Premium material" },
    ],
  },

  // PANTS CLOTHS
  {
    id: 701,
    name: "Formal Cotton Pant Cloth — Office Wear",
    category: "formal,cotton",
    price: 2099,
    oldPrice: 2799,
    images: [
      "./IMAGES/pc1.jpeg",
      "./IMAGES/pc5.jpeg",
      "./IMAGES/pc6.jpeg",
      "./IMAGES/pc7.jpeg",
    ],
    description:
      "Tailoring-grade cotton fabric for premium formal pants and office wear.",
    offers: [
      "20% Instant Discount on SBI Credit Card",
      "Flat ₹250 off on first purchase",
      "Free Delivery",
      "30 Days Return Policy",
    ],
    reviews: [
      { user: "OfficeWorker", rating: 5, text: "Perfect for office pants" },
      { user: "TailorPro", rating: 4, text: "Excellent fabric quality" },
      { user: "FormalWear", rating: 5, text: "Best formal pant cloth" },
    ],
  },
  {
    id: 702,
    name: "Lycra Stretch Pant Cloth",
    category: "lycra,stretch",
    price: 1899,
    oldPrice: 2499,
    images: [
      "./IMAGES/pc2.jpeg",
      "./IMAGES/pc8.jpeg",
      "./IMAGES/pc9.jpeg",
      "./IMAGES/pc10.jpeg",
    ],
    description:
      "Stretchable fabric for comfort-fit pants with excellent flexibility.",
    offers: [
      "18% Instant Discount on ICICI Credit Card",
      "Buy 3 meters get 15% off",
      "Free Delivery",
      "15 Days Exchange",
    ],
    reviews: [
      {
        user: "ComfortFirst",
        rating: 4,
        text: "Very comfortable stretch fabric",
      },
      { user: "ActiveWear", rating: 5, text: "Perfect for active lifestyle" },
      { user: "FlexibleFit", rating: 4, text: "Great flexibility" },
    ],
  },
  {
    id: 703,
    name: "Span Blend Pant Cloth",
    category: "span,formal",
    price: 2299,
    oldPrice: 3099,
    images: [
      "./IMAGES/pc3.jpeg",
      "./IMAGES/pc11.jpeg",
      "./IMAGES/pc12.jpeg",
      "./IMAGES/pc13.jpeg",
    ],
    description:
      "Premium span blend for wrinkle-resistant pants and formal wear.",
    offers: [
      "22% Instant Discount on HDFC Credit Card",
      "Flat ₹300 off on orders above ₹4000",
      "Free Delivery",
      "30 Days Return Policy",
    ],
    reviews: [
      { user: "WrinkleFree", rating: 5, text: "Stays wrinkle-free all day" },
      { user: "PremiumBlend", rating: 5, text: "Excellent span blend" },
      { user: "FormalAttire", rating: 4, text: "Perfect for formal pants" },
    ],
  },
  {
    id: 704,
    name: "Wool Blend Regular Pant Cloth",
    category: "regular,wool",
    price: 2599,
    oldPrice: 3499,
    images: [
      "./IMAGES/pc4.jpeg",
      "./IMAGES/pc14.jpeg",
      "./IMAGES/pc15.jpeg",
      "./IMAGES/pc16.jpeg",
    ],
    description:
      "Warm wool blend for winter pant tailoring and cold weather wear.",
    offers: [
      "25% Instant Discount on Axis Credit Card",
      "Free Winter Care Kit",
      "Free Delivery",
      "15 Days Exchange",
    ],
    reviews: [
      { user: "WinterWear", rating: 5, text: "Perfect for winter pants" },
      { user: "WarmComfort", rating: 5, text: "Keeps you warm in cold" },
      { user: "WoolBlend", rating: 4, text: "Excellent wool blend" },
    ],
  },
  {
    id: 705,
    name: "Office Formal Pant Cloth",
    category: "formal,office",
    price: 1799,
    oldPrice: 2399,
    images: [
      "./IMAGES/pc1.jpeg",
      "./IMAGES/pc17.jpeg",
      "./IMAGES/pc18.jpeg",
      "./IMAGES/pc19.jpeg",
    ],
    description:
      "Crisp fabric for corporate pant tailoring and professional office wear.",
    offers: [
      "20% Instant Discount on Kotak Credit Card",
      "Flat ₹200 off on first purchase",
      "Free Delivery",
      "7 Days Replacement",
    ],
    reviews: [
      { user: "CorporateWear", rating: 4, text: "Perfect for corporate pants" },
      { user: "OfficeAttire", rating: 5, text: "Great office fabric" },
      {
        user: "ProfessionalTailor",
        rating: 4,
        text: "Easy to tailor professionally",
      },
    ],
  },
  {
    id: 706,
    name: "Casual Cotton Pant Cloth",
    category: "cotton,regular",
    price: 1499,
    oldPrice: 1999,
    images: [
      "./IMAGES/pc2.jpeg",
      "./IMAGES/pc20.jpeg",
      "./IMAGES/pc21.jpeg",
      "./IMAGES/pc22.jpeg",
    ],
    description:
      "Breathable cotton for daily wear pants and casual comfortable clothing.",
    offers: [
      "15% Instant Discount on ICICI Credit Card",
      "Buy 2 meters get 10% off",
      "Free Delivery",
      "30 Days Return Policy",
    ],
    reviews: [
      { user: "DailyWear", rating: 4, text: "Perfect for everyday pants" },
      {
        user: "ComfortCasual",
        rating: 5,
        text: "Very comfortable casual fabric",
      },
      { user: "Breathable", rating: 4, text: "Great breathable cotton" },
    ],
  },
  {
    id: 707,
    name: "Formal Lycra Pant Cloth",
    category: "lycra,formal",
    price: 1999,
    oldPrice: 2699,
    images: [
      "./IMAGES/pc3.jpeg",
      "./IMAGES/pc23.jpeg",
      "./IMAGES/pc24.jpeg",
      "./IMAGES/pc25.jpeg",
    ],
    description:
      "Stretch formal fabric for comfortable office pants and professional wear.",
    offers: [
      "20% Instant Discount on HDFC Credit Card",
      "Flat ₹250 off on orders above ₹3000",
      "Free Delivery",
      "15 Days Exchange",
    ],
    reviews: [
      { user: "OfficeComfort", rating: 5, text: "Comfortable formal fabric" },
      { user: "StretchFormal", rating: 4, text: "Perfect stretch for office" },
      { user: "ProfessionalFit", rating: 5, text: "Great professional fit" },
    ],
  },
  {
    id: 708,
    name: "Premium Span Pant Cloth",
    category: "span,premium",
    price: 2799,
    oldPrice: 3799,
    images: [
      "./IMAGES/pc4.jpeg",
      "./IMAGES/pc26.jpeg",
      "./IMAGES/pc27.jpeg",
      "./IMAGES/pc28.jpeg",
    ],
    description:
      "High-quality span fabric for luxury pants and premium tailoring.",
    offers: [
      "26% Instant Discount on Citibank Credit Card",
      "Free Premium Packaging",
      "Free Delivery",
      "30 Days Return Policy",
    ],
    reviews: [
      { user: "LuxuryWear", rating: 5, text: "Truly premium fabric" },
      { user: "HighEndTailor", rating: 5, text: "Excellent for luxury pants" },
      { user: "PremiumQuality", rating: 4, text: "Best span fabric available" },
    ],
  },
  {
    id: 709,
    name: "Regular Stretch Pant Cloth",
    category: "regular,stretch",
    price: 1699,
    oldPrice: 2299,
    images: [
      "./IMAGES/pc1.jpeg",
      "./IMAGES/pc29.jpeg",
      "./IMAGES/pc30.jpeg",
      "./IMAGES/pc31.jpeg",
    ],
    description:
      "Comfortable stretch fabric for everyday pants and regular wear.",
    offers: [
      "18% Instant Discount on SBI Credit Card",
      "Flat ₹150 off on first purchase",
      "Free Delivery",
      "10 Days Replacement",
    ],
    reviews: [
      { user: "EverydayComfort", rating: 4, text: "Perfect for daily wear" },
      { user: "RegularFit", rating: 5, text: "Comfortable regular stretch" },
      { user: "DailyComfort", rating: 4, text: "Great for everyday pants" },
    ],
  },
  {
    id: 710,
    name: "Wool Formal Pant Cloth",
    category: "wool,formal",
    price: 2999,
    oldPrice: 3999,
    images: [
      "./IMAGES/pc2.jpeg",
      "./IMAGES/pc32.jpeg",
      "./IMAGES/pc33.jpeg",
      "./IMAGES/pc34.jpeg",
    ],
    description:
      "Warm wool fabric for formal winter pants and cold weather professional wear.",
    offers: [
      "25% Instant Discount on Axis Credit Card",
      "Free Winter Care Guide",
      "Free Delivery",
      "15 Days Exchange",
    ],
    reviews: [
      { user: "WinterFormal", rating: 5, text: "Perfect winter formal fabric" },
      { user: "ColdWeather", rating: 5, text: "Keeps warm in office" },
      { user: "FormalWool", rating: 4, text: "Excellent wool for formal wear" },
    ],
  },
  {
    id: 711,
    name: "Cotton Stretch Pant Cloth",
    category: "cotton,stretch",
    price: 1899,
    oldPrice: 2599,
    images: [
      "./IMAGES/pc3.jpeg",
      "./IMAGES/pc35.jpeg",
      "./IMAGES/pc36.jpeg",
      "./IMAGES/pc37.jpeg",
    ],
    description:
      "Breathable cotton with stretch for comfort and flexible pants.",
    offers: [
      "20% Instant Discount on HDFC Credit Card",
      "Buy 3 meters get 15% off",
      "Free Delivery",
      "30 Days Return Policy",
    ],
    reviews: [
      { user: "BreathableStretch", rating: 5, text: "Best of both worlds" },
      { user: "ComfortFlex", rating: 4, text: "Comfortable and flexible" },
      { user: "CottonFlex", rating: 5, text: "Perfect cotton stretch blend" },
    ],
  },
  {
    id: 712,
    name: "Lycra Casual Pant Cloth",
    category: "lycra,regular",
    price: 1599,
    oldPrice: 2199,
    images: [
      "./IMAGES/pc4.jpeg",
      "./IMAGES/pc38.jpeg",
      "./IMAGES/pc39.jpeg",
      "./IMAGES/pc40.jpeg",
    ],
    description:
      "Flexible lycra for relaxed fit pants and casual comfortable wear.",
    offers: [
      "18% Instant Discount on ICICI Credit Card",
      "Flat ₹200 off on first purchase",
      "Free Delivery",
      "10 Days Replacement",
    ],
    reviews: [
      { user: "CasualComfort", rating: 4, text: "Perfect casual fabric" },
      { user: "RelaxedFit", rating: 5, text: "Great for relaxed fit pants" },
      { user: "FlexibleCasual", rating: 4, text: "Very flexible casual cloth" },
    ],
  },
  // SHIRT CLOTH
  {
    id: 801,
    name: "Formal Shirt Cloth — Premium Cotton",
    category: "formal",
    price: 1899,
    oldPrice: 2499,
    images: [
      "./IMAGES/sh1.jpeg",
      "./IMAGES/sc1.jpeg",
      "./IMAGES/sc2.jpeg",
      "./IMAGES/sc3.jpeg",
    ],
    description:
      "Perfect stitching material for office & functions with premium cotton finish.",
    offers: [
      "15% Instant Discount on SBI Credit Card",
      "Flat ₹200 off on first purchase",
      "Free Delivery",
      "30 Days Return Policy",
    ],
    reviews: [
      {
        user: "TailorRaj",
        rating: 5,
        text: "Excellent fabric for formal shirts",
      },
      { user: "SharmaJi", rating: 4, text: "Good quality cotton" },
      {
        user: "FashionTailor",
        rating: 5,
        text: "Perfect for office wear shirts",
      },
    ],
  },
  {
    id: 802,
    name: "Casual Checked Shirt Cloth",
    category: "casual",
    price: 1599,
    oldPrice: 2099,
    images: [
      "./IMAGES/sh2.jpeg",
      "./IMAGES/sc4.jpeg",
      "./IMAGES/sc5.jpeg",
      "./IMAGES/sc6.jpeg",
    ],
    description:
      "Soft checked fabric for daily wear shirts with comfortable texture.",
    offers: [
      "10% Instant Discount on ICICI Credit Card",
      "Buy 2 meters get 10% off",
      "Free Delivery",
      "7 Days Replacement",
    ],
    reviews: [
      { user: "WeekendWear", rating: 4, text: "Nice checks for casual shirts" },
      { user: "HomeTailor", rating: 5, text: "Soft and easy to stitch" },
      { user: "CasualStyle", rating: 4, text: "Good fabric quality" },
    ],
  },
  {
    id: 803,
    name: "Party Wear Shirt Cloth",
    category: "party",
    price: 2199,
    oldPrice: 2999,
    images: [
      "./IMAGES/sh3.jpeg",
      "./IMAGES/sc7.jpeg",
      "./IMAGES/sc8.jpeg",
      "./IMAGES/sc9.jpeg",
    ],
    description:
      "Premium finish cloth for stylish party shirts with elegant sheen.",
    offers: [
      "20% Instant Discount on HDFC Credit Card",
      "Flat ₹300 off on orders above ₹4000",
      "Free Delivery",
      "15 Days Exchange",
    ],
    reviews: [
      { user: "PartyGoer", rating: 5, text: "Perfect for party shirts" },
      { user: "EventTailor", rating: 4, text: "Good sheen and finish" },
      {
        user: "Celebration",
        rating: 5,
        text: "Makes great celebration shirts",
      },
    ],
  },
  {
    id: 804,
    name: "Linen Shirt Cloth — Summer Wear",
    category: "linen",
    price: 1999,
    oldPrice: 2799,
    images: [
      "./IMAGES/sh4.jpeg",
      "./IMAGES/sc10.jpeg",
      "./IMAGES/sc11.jpeg",
      "./IMAGES/sc12.jpeg",
    ],
    description:
      "Breathable linen fabric for hot climate tailoring and summer shirts.",
    offers: [
      "18% Instant Discount on Axis Credit Card",
      "Flat ₹250 off on first purchase",
      "Free Delivery",
      "7 Days Replacement",
    ],
    reviews: [
      { user: "SummerStyle", rating: 5, text: "Perfect for summer shirts" },
      { user: "HotClimate", rating: 4, text: "Very breathable fabric" },
      { user: "LinenLover", rating: 5, text: "Best linen cloth available" },
    ],
  },
  {
    id: 805,
    name: "Premium Cotton Shirt Cloth",
    category: "cotton",
    price: 1799,
    oldPrice: 2399,
    images: [
      "./IMAGES/sh5.jpeg",
      "./IMAGES/sc13.jpeg",
      "./IMAGES/sc14.jpeg",
      "./IMAGES/sc15.jpeg",
    ],
    description:
      "100% pure cotton for comfortable tailoring and premium shirt making.",
    offers: [
      "15% Instant Discount on Kotak Credit Card",
      "Buy 3 meters get 15% off",
      "Free Delivery",
      "30 Days Return Policy",
    ],
    reviews: [
      { user: "CottonKing", rating: 5, text: "Pure cotton, very comfortable" },
      { user: "TailorPro", rating: 4, text: "Easy to stitch and handle" },
      { user: "QualityFirst", rating: 5, text: "Premium quality cotton" },
    ],
  },
  {
    id: 806,
    name: "Classic Checked Shirt Cloth",
    category: "checked",
    price: 1499,
    oldPrice: 1999,
    images: [
      "./IMAGES/sh6.jpeg",
      "./IMAGES/sc16.jpeg",
      "./IMAGES/sc17.jpeg",
      "./IMAGES/sc18.jpeg",
    ],
    description:
      "Traditional check pattern for casual shirts and everyday wear.",
    offers: [
      "12% Instant Discount on ICICI Credit Card",
      "Flat ₹150 off",
      "Free Delivery",
      "10 Days Replacement",
    ],
    reviews: [
      { user: "ClassicLook", rating: 4, text: "Traditional checks look great" },
      { user: "DailyWear", rating: 5, text: "Perfect for daily shirts" },
      { user: "CheckPattern", rating: 4, text: "Good check design" },
    ],
  },
  {
    id: 807,
    name: "Striped Formal Shirt Cloth",
    category: "striped",
    price: 2099,
    oldPrice: 2899,
    images: [
      "./IMAGES/sh7.jpeg",
      "./IMAGES/sc19.jpeg",
      "./IMAGES/sc20.jpeg",
      "./IMAGES/sc21.jpeg",
    ],
    description:
      "Elegant stripes for business shirt tailoring and professional wear.",
    offers: [
      "18% Instant Discount on HDFC Credit Card",
      "Flat ₹250 off on orders above ₹3000",
      "Free Delivery",
      "15 Days Exchange",
    ],
    reviews: [
      { user: "BusinessMan", rating: 5, text: "Perfect for office shirts" },
      { user: "CorporateStyle", rating: 4, text: "Elegant stripes" },
      { user: "Professional", rating: 5, text: "Great for business shirts" },
    ],
  },
  {
    id: 808,
    name: "Luxury Shirt Cloth",
    category: "premium",
    price: 2599,
    oldPrice: 3599,
    images: [
      "./IMAGES/sh8.jpeg",
      "./IMAGES/sc22.jpeg",
      "./IMAGES/sc23.jpeg",
      "./IMAGES/sc24.jpeg",
    ],
    description:
      "High-end fabric for premium shirt making and luxury clothing.",
    offers: [
      "25% Instant Discount on Citibank Credit Card",
      "Free Premium Packaging",
      "Free Delivery",
      "30 Days Return Policy",
    ],
    reviews: [
      { user: "LuxuryBuyer", rating: 5, text: "Truly premium fabric" },
      { user: "HighEnd", rating: 5, text: "Worth every penny" },
      {
        user: "PremiumQuality",
        rating: 4,
        text: "Excellent for luxury shirts",
      },
    ],
  },
  {
    id: 809,
    name: "Office Formal Shirt Cloth",
    category: "formal",
    price: 1699,
    oldPrice: 2299,
    images: [
      "./IMAGES/sh1.jpeg",
      "./IMAGES/sc25.jpeg",
      "./IMAGES/sc26.jpeg",
      "./IMAGES/sc27.jpeg",
    ],
    description:
      "Crisp fabric perfect for corporate shirts and professional tailoring.",
    offers: [
      "15% Instant Discount on SBI Credit Card",
      "Flat ₹200 off on first purchase",
      "Free Delivery",
      "7 Days Replacement",
    ],
    reviews: [
      { user: "OfficeWear", rating: 4, text: "Good for corporate shirts" },
      {
        user: "ProfessionalTailor",
        rating: 5,
        text: "Easy to stitch professionally",
      },
      { user: "BusinessAttire", rating: 4, text: "Perfect office fabric" },
    ],
  },
  {
    id: 810,
    name: "Soft Casual Shirt Cloth",
    category: "casual",
    price: 1399,
    oldPrice: 1899,
    images: [
      "./IMAGES/sh2.jpeg",
      "./IMAGES/sc28.jpeg",
      "./IMAGES/sc29.jpeg",
      "./IMAGES/sc30.jpeg",
    ],
    description: "Comfortable fabric for weekend shirts and relaxed wear.",
    offers: [
      "10% Instant Discount on Axis Credit Card",
      "Buy 2 meters get 10% off",
      "Free Delivery",
      "30 Days Return Policy",
    ],
    reviews: [
      { user: "WeekendStyle", rating: 4, text: "Perfect for weekend shirts" },
      { user: "ComfortFirst", rating: 5, text: "Very soft and comfortable" },
      { user: "RelaxedFit", rating: 4, text: "Good casual fabric" },
    ],
  },
  {
    id: 811,
    name: "Organic Cotton Shirt Cloth",
    category: "cotton",
    price: 1899,
    oldPrice: 2599,
    images: [
      "./IMAGES/sh3.jpeg",
      "./IMAGES/sc31.jpeg",
      "./IMAGES/sc32.jpeg",
      "./IMAGES/sc33.jpeg",
    ],
    description:
      "Eco-friendly organic cotton fabric for sustainable shirt making.",
    offers: [
      "20% Instant Discount on Yes Bank Credit Card",
      "Flat ₹250 off",
      "Free Eco-friendly Packaging",
      "15 Days Exchange",
    ],
    reviews: [
      { user: "EcoFriendly", rating: 5, text: "Love the organic material" },
      { user: "Sustainable", rating: 4, text: "Good eco-friendly option" },
      { user: "GreenTailor", rating: 5, text: "Perfect sustainable fabric" },
    ],
  },
  {
    id: 812,
    name: "Pure Linen Shirt Cloth",
    category: "linen",
    price: 2299,
    oldPrice: 3199,
    images: [
      "./IMAGES/sh4.jpeg",
      "./IMAGES/sc34.jpeg",
      "./IMAGES/sc35.jpeg",
      "./IMAGES/sc36.jpeg",
    ],
    description: "100% pure linen for summer shirts and breathable clothing.",
    offers: [
      "22% Instant Discount on HDFC Credit Card",
      "Flat ₹300 off on orders above ₹4000",
      "Free Delivery",
      "7 Days Replacement",
    ],
    reviews: [
      { user: "PureLinen", rating: 5, text: "100% pure linen as described" },
      { user: "SummerEssential", rating: 4, text: "Essential for summer" },
      { user: "Breathable", rating: 5, text: "Most breathable fabric" },
    ],
  },
  {
    id: 813,
    name: "Designer Party Shirt Cloth",
    category: "party",
    price: 2399,
    oldPrice: 3299,
    images: [
      "./IMAGES/sh5.jpeg",
      "./IMAGES/sc37.jpeg",
      "./IMAGES/sc38.jpeg",
      "./IMAGES/sc39.jpeg",
    ],
    description:
      "Trendy fabric for party shirt tailoring and designer clothing.",
    offers: [
      "20% Instant Discount on ICICI Credit Card",
      "Buy 3 meters get 20% off",
      "Free Delivery",
      "15 Days Exchange",
    ],
    reviews: [
      { user: "DesignerStyle", rating: 5, text: "Perfect for designer shirts" },
      { user: "PartyTrend", rating: 4, text: "Very trendy fabric" },
      { user: "FashionDesigner", rating: 5, text: "Great for fashion shirts" },
    ],
  },
  {
    id: 814,
    name: "Executive Shirt Cloth",
    category: "premium",
    price: 2799,
    oldPrice: 3799,
    images: [
      "./IMAGES/sh6.jpeg",
      "./IMAGES/sc40.jpeg",
      "./IMAGES/sc41.jpeg",
      "./IMAGES/sc42.jpeg",
    ],
    description:
      "Premium fabric for senior executive shirts and high-end tailoring.",
    offers: [
      "25% Instant Discount on Citibank Credit Card",
      "Free Premium Packaging",
      "Free Delivery",
      "30 Days Return Policy",
    ],
    reviews: [
      {
        user: "ExecutiveWear",
        rating: 5,
        text: "Perfect for executive shirts",
      },
      { user: "HighProfile", rating: 5, text: "Worth the premium price" },
      { user: "LuxuryTailor", rating: 4, text: "Excellent premium fabric" },
    ],
  },
  {
    id: 815,
    name: "Modern Checked Shirt Cloth",
    category: "checked",
    price: 1699,
    oldPrice: 2299,
    images: [
      "./IMAGES/sh7.jpeg",
      "./IMAGES/sc43.jpeg",
      "./IMAGES/sc44.jpeg",
      "./IMAGES/sc45.jpeg",
    ],
    description:
      "Contemporary check patterns for fashion shirts and modern styling.",
    offers: [
      "15% Instant Discount on Kotak Credit Card",
      "Flat ₹200 off on first purchase",
      "Free Delivery",
      "10 Days Replacement",
    ],
    reviews: [
      { user: "ModernStyle", rating: 4, text: "Contemporary check design" },
      { user: "FashionForward", rating: 5, text: "Very modern patterns" },
      { user: "TrendyChecks", rating: 4, text: "Great for fashion shirts" },
    ],
  },
  {
    id: 816,
    name: "Business Striped Shirt Cloth",
    category: "striped",
    price: 1899,
    oldPrice: 2599,
    images: [
      "./IMAGES/sh8.jpeg",
      "./IMAGES/sc46.jpeg",
      "./IMAGES/sc47.jpeg",
      "./IMAGES/sc48.jpeg",
    ],
    description:
      "Professional stripes for office shirt making and business attire.",
    offers: [
      "18% Instant Discount on HDFC Credit Card",
      "Flat ₹250 off on orders above ₹3000",
      "Free Delivery",
      "15 Days Exchange",
    ],
    reviews: [
      { user: "BusinessStripes", rating: 5, text: "Perfect business stripes" },
      {
        user: "OfficeProfessional",
        rating: 4,
        text: "Great for office shirts",
      },
      { user: "CorporateStripes", rating: 5, text: "Professional look" },
    ],
  },
  {
    id: 817,
    name: "Corporate Shirt Cloth",
    category: "formal",
    price: 1999,
    oldPrice: 2799,
    images: [
      "./IMAGES/sh1.jpeg",
      "./IMAGES/sc49.jpeg",
      "./IMAGES/sc50.jpeg",
      "./IMAGES/sc51.jpeg",
    ],
    description:
      "Premium quality for corporate shirt tailoring and professional clothing.",
    offers: [
      "20% Instant Discount on SBI Credit Card",
      "Buy 3 meters get 15% off",
      "Free Delivery",
      "7 Days Replacement",
    ],
    reviews: [
      { user: "CorporateWear", rating: 5, text: "Excellent corporate fabric" },
      {
        user: "ProfessionalTailoring",
        rating: 4,
        text: "Perfect for professional shirts",
      },
      { user: "BusinessFabric", rating: 5, text: "High quality for business" },
    ],
  },
  {
    id: 818,
    name: "Weekend Casual Shirt Cloth",
    category: "casual",
    price: 1299,
    oldPrice: 1799,
    images: [
      "./IMAGES/sh2.jpeg",
      "./IMAGES/sc52.jpeg",
      "./IMAGES/sc53.jpeg",
      "./IMAGES/sc54.jpeg",
    ],
    description: "Comfort fabric for relaxed weekend shirts and leisure wear.",
    offers: [
      "10% Instant Discount on Axis Credit Card",
      "Buy 2 meters get 10% off",
      "Free Delivery",
      "30 Days Return Policy",
    ],
    reviews: [
      { user: "WeekendComfort", rating: 4, text: "Perfect weekend fabric" },
      {
        user: "RelaxedWeekend",
        rating: 5,
        text: "Very comfortable for weekends",
      },
      { user: "LeisureWear", rating: 4, text: "Great casual cloth" },
    ],
  },
  {
    id: 819,
    name: "Soft Touch Cotton Cloth",
    category: "cotton",
    price: 1599,
    oldPrice: 2199,
    images: [
      "./IMAGES/sh3.jpeg",
      "./IMAGES/sc55.jpeg",
      "./IMAGES/sc56.jpeg",
      "./IMAGES/sc57.jpeg",
    ],
    description: "Ultra-soft cotton for comfortable shirts and gentle wear.",
    offers: [
      "15% Instant Discount on ICICI Credit Card",
      "Flat ₹200 off on first purchase",
      "Free Delivery",
      "10 Days Replacement",
    ],
    reviews: [
      { user: "SoftTouch", rating: 5, text: "Extremely soft fabric" },
      { user: "ComfortKing", rating: 4, text: "Most comfortable cotton" },
      { user: "GentleWear", rating: 5, text: "Perfect for sensitive skin" },
    ],
  },
  {
    id: 820,
    name: "Lightweight Linen Cloth",
    category: "linen",
    price: 2099,
    oldPrice: 2899,
    images: [
      "./IMAGES/sh4.jpeg",
      "./IMAGES/sc58.jpeg",
      "./IMAGES/sc59.jpeg",
      "./IMAGES/sc60.jpeg",
    ],
    description:
      "Breathable linen for summer shirt making and lightweight clothing.",
    offers: [
      "20% Instant Discount on HDFC Credit Card",
      "Flat ₹250 off on orders above ₹3500",
      "Free Delivery",
      "7 Days Replacement",
    ],
    reviews: [
      { user: "Lightweight", rating: 5, text: "Very lightweight linen" },
      { user: "SummerBreathable", rating: 4, text: "Perfect for summer" },
      { user: "AiryFabric", rating: 5, text: "Most breathable fabric" },
    ],
  },
  {
    id: 821,
    name: "Celebration Shirt Cloth",
    category: "party",
    price: 2499,
    oldPrice: 3499,
    images: [
      "./IMAGES/sh5.jpeg",
      "./IMAGES/sc61.jpeg",
      "./IMAGES/sc62.jpeg",
      "./IMAGES/sc63.jpeg",
    ],
    description:
      "Festive fabric for celebration shirt tailoring and special occasions.",
    offers: [
      "22% Instant Discount on Kotak Credit Card",
      "Buy 3 meters get 20% off",
      "Free Delivery",
      "15 Days Exchange",
    ],
    reviews: [
      { user: "CelebrationStyle", rating: 5, text: "Perfect for celebrations" },
      { user: "FestiveWear", rating: 4, text: "Great festive fabric" },
      { user: "SpecialOccasion", rating: 5, text: "Ideal for special events" },
    ],
  },
  {
    id: 822,
    name: "Luxury Blend Shirt Cloth",
    category: "premium",
    price: 2999,
    oldPrice: 4199,
    images: [
      "./IMAGES/sh6.jpeg",
      "./IMAGES/sc64.jpeg",
      "./IMAGES/sc65.jpeg",
      "./IMAGES/sc66.jpeg",
    ],
    description:
      "Premium cotton-linen blend for luxury shirts and high-end clothing.",
    offers: [
      "28% Instant Discount on Citibank Credit Card",
      "Free Premium Packaging",
      "Free Delivery",
      "30 Days Return Policy",
    ],
    reviews: [
      { user: "LuxuryBlend", rating: 5, text: "Perfect blend for luxury" },
      { user: "PremiumMix", rating: 5, text: "Excellent cotton-linen mix" },
      { user: "HighEndBlend", rating: 4, text: "Best of both fabrics" },
    ],
  },
  {
    id: 823,
    name: "Vintage Checked Cloth",
    category: "checked",
    price: 1799,
    oldPrice: 2499,
    images: [
      "./IMAGES/sh7.jpeg",
      "./IMAGES/sc67.jpeg",
      "./IMAGES/sc68.jpeg",
      "./IMAGES/sc69.jpeg",
    ],
    description:
      "Retro check patterns for vintage style shirts and classic looks.",
    offers: [
      "15% Instant Discount on SBI Credit Card",
      "Flat ₹200 off on first purchase",
      "Free Delivery",
      "10 Days Replacement",
    ],
    reviews: [
      { user: "VintageStyle", rating: 4, text: "Perfect vintage checks" },
      { user: "RetroLook", rating: 5, text: "Great retro patterns" },
      { user: "ClassicChecks", rating: 4, text: "Authentic vintage style" },
    ],
  },
  {
    id: 824,
    name: "Navy Striped Shirt Cloth",
    category: "striped",
    price: 1999,
    oldPrice: 2799,
    images: [
      "./IMAGES/sh8.jpeg",
      "./IMAGES/sc70.jpeg",
      "./IMAGES/sc71.jpeg",
      "./IMAGES/sc72.jpeg",
    ],
    description:
      "Classic navy stripes for formal shirt making and traditional wear.",
    offers: [
      "20% Instant Discount on HDFC Credit Card",
      "Flat ₹250 off on orders above ₹3000",
      "Free Delivery",
      "15 Days Exchange",
    ],
    reviews: [
      { user: "NavyStripes", rating: 5, text: "Classic navy color" },
      {
        user: "TraditionalStripes",
        rating: 4,
        text: "Perfect traditional stripes",
      },
      { user: "FormalNavy", rating: 5, text: "Great for formal shirts" },
    ],
  },
  // JEWELLERY (901-912)
  {
    id: 901,
    name: "Gold Plated Necklace Set",
    category: "Jewellery",
    price: 3499,
    oldPrice: 5299,
    images: [
      "../IMAGES/j1-1.jpeg",
      "../IMAGES/j1-2.jpeg",
      "../IMAGES/j1-3.jpeg",
      "../IMAGES/j1-4.jpeg",
    ],
    description:
      "Traditional gold plated necklace set with premium finish and elegant design.",
    offers: [
      "30% Instant Discount on SBI Credit Card",
      "Free Delivery",
      "10 Days Return Policy",
      "Buy 1 Get 1 20% off",
    ],
    reviews: [
      { user: "Anjali", rating: 5, text: "Beautiful necklace set" },
      { user: "Priya", rating: 4, text: "Premium finish" },
      { user: "Meera", rating: 5, text: "Perfect for weddings" },
    ],
  },
  {
    id: 902,
    name: "One Gram Gold Bangles Set",
    category: "Jewellery",
    price: 2799,
    oldPrice: 4299,
    images: [
      "../IMAGES/j2-1.jpeg",
      "../IMAGES/j2-2.jpeg",
      "../IMAGES/j2-3.jpeg",
      "../IMAGES/j2-4.jpeg",
    ],
    description:
      "Elegant bangles set with traditional gold finish and intricate designs.",
    offers: [
      "25% Instant Discount on HDFC Bank",
      "Flat ₹300 off on first purchase",
      "Free Delivery",
      "Easy Returns",
    ],
    reviews: [
      { user: "Sneha", rating: 5, text: "Beautiful bangles" },
      { user: "Radha", rating: 4, text: "Traditional designs" },
      { user: "Lakshmi", rating: 5, text: "Good gold plating" },
    ],
  },
  {
    id: 903,
    name: "Gold Plated Earrings",
    category: "Jewellery",
    price: 1499,
    oldPrice: 2299,
    images: [
      "../IMAGES/j3-1.jpeg",
      "../IMAGES/j3-2.jpeg",
      "../IMAGES/j3-3.jpeg",
      "../IMAGES/j3-4.jpeg",
    ],
    description:
      "Lightweight gold plated earrings with rich polish and elegant designs.",
    offers: [
      "20% Cashback on PayTM",
      "Free Delivery",
      "14 Days Return Policy",
      "Extra 5% off on first order",
    ],
    reviews: [
      { user: "Pooja", rating: 4, text: "Lightweight and pretty" },
      { user: "Divya", rating: 5, text: "Beautiful designs" },
      { user: "Swati", rating: 4, text: "Good quality plating" },
    ],
  },
  {
    id: 904,
    name: "Traditional One Gram Haram",
    category: "Jewellery",
    price: 3999,
    oldPrice: 5999,
    images: [
      "../IMAGES/j4-1.jpeg",
      "../IMAGES/j4-2.jpeg",
      "../IMAGES/j4-3.jpeg",
      "../IMAGES/j4-4.jpeg",
    ],
    description:
      "Grand temple-style design haram perfect for weddings and special occasions.",
    offers: [
      "15% Instant Discount on Axis Bank",
      "Free Delivery above ₹999",
      "7 Days Replacement",
      "Buy 2 Get 10% off",
    ],
    reviews: [
      { user: "Rani", rating: 5, text: "Grand design" },
      { user: "Geeta", rating: 5, text: "Perfect for weddings" },
      { user: "Sita", rating: 4, text: "Traditional look" },
    ],
  },
  {
    id: 905,
    name: "Gold Plated Rings Set",
    category: "Jewellery",
    price: 1299,
    oldPrice: 1999,
    images: [
      "../IMAGES/j1-1.jpeg",
      "../IMAGES/j1-2.jpeg",
      "../IMAGES/j1-3.jpeg",
      "../IMAGES/j1-4.jpeg",
    ],
    description:
      "Set of 4 gold plated rings with different designs for various occasions.",
    offers: [
      "30% Instant Discount on SBI Credit Card",
      "Free Delivery",
      "10 Days Return Policy",
      "Extra ₹150 off on first purchase",
    ],
    reviews: [
      { user: "Ananya", rating: 5, text: "Beautiful ring set" },
      { user: "Shreya", rating: 4, text: "Multiple designs" },
      { user: "Kavya", rating: 5, text: "Value for money" },
    ],
  },
  {
    id: 906,
    name: "Gold Plated Chain Set",
    category: "Jewellery",
    price: 2199,
    oldPrice: 3399,
    images: [
      "../IMAGES/j2-1.jpeg",
      "../IMAGES/j2-2.jpeg",
      "../IMAGES/j2-3.jpeg",
      "../IMAGES/j2-4.jpeg",
    ],
    description:
      "Multiple chain styles gold plated set perfect for layering and daily wear.",
    offers: [
      "25% Cashback on Amazon Pay",
      "Free Delivery",
      "Easy Returns",
      "Buy 1 Get 1 15% off",
    ],
    reviews: [
      { user: "Neha", rating: 4, text: "Perfect for layering" },
      { user: "Simran", rating: 5, text: "Multiple chain styles" },
      { user: "Isha", rating: 4, text: "Good daily wear" },
    ],
  },
  {
    id: 907,
    name: "Diamond Studded Necklace",
    category: "Jewellery",
    price: 4599,
    oldPrice: 6899,
    images: [
      "../IMAGES/j3-1.jpeg",
      "../IMAGES/j3-2.jpeg",
      "../IMAGES/j3-3.jpeg",
      "../IMAGES/j3-4.jpeg",
    ],
    description:
      "Luxury gold plated necklace with diamond studded accents for special occasions.",
    offers: [
      "20% Instant Discount on ICICI Bank",
      "Free Delivery",
      "14 Days Return Policy",
      "Flat ₹500 off",
    ],
    reviews: [
      { user: "Rashmi", rating: 5, text: "Luxury look" },
      { user: "Nandini", rating: 5, text: "Beautiful diamonds" },
      { user: "Madhavi", rating: 4, text: "Perfect for parties" },
    ],
  },
  {
    id: 908,
    name: "Antique Gold Bangles",
    category: "Jewellery",
    price: 3299,
    oldPrice: 4999,
    images: [
      "../IMAGES/j4-1.jpeg",
      "../IMAGES/j4-2.jpeg",
      "../IMAGES/j4-3.jpeg",
      "../IMAGES/j4-4.jpeg",
    ],
    description:
      "Traditional antique finish gold bangles with intricate carvings and designs.",
    offers: [
      "15% Instant Discount on HDFC Bank",
      "Free Delivery",
      "7 Days Replacement",
      "Buy 2 Get ₹400 off",
    ],
    reviews: [
      { user: "Latha", rating: 5, text: "Beautiful antique finish" },
      { user: "Sarala", rating: 4, text: "Traditional designs" },
      { user: "Padma", rating: 5, text: "Intricate carvings" },
    ],
  },
  {
    id: 909,
    name: "Jhumka Earrings Gold Plated",
    category: "Jewellery",
    price: 1899,
    oldPrice: 2899,
    images: [
      "../IMAGES/j1-1.jpeg",
      "../IMAGES/j1-2.jpeg",
      "../IMAGES/j1-3.jpeg",
      "../IMAGES/j1-4.jpeg",
    ],
    description:
      "Traditional jhumka design earrings with bells and intricate gold plating.",
    offers: [
      "35% Instant Discount on SBI Credit Card",
      "Free Delivery",
      "10 Days Return Policy",
      "Extra ₹200 off",
    ],
    reviews: [
      { user: "Gayatri", rating: 4, text: "Traditional jhumkas" },
      { user: "Parvati", rating: 5, text: "Beautiful bells design" },
      { user: "Saraswati", rating: 4, text: "Good for festivals" },
    ],
  },
  {
    id: 910,
    name: "Modern Design Haram Set",
    category: "Jewellery",
    price: 3699,
    oldPrice: 5599,
    images: [
      "../IMAGES/j2-1.jpeg",
      "../IMAGES/j2-2.jpeg",
      "../IMAGES/j2-3.jpeg",
      "../IMAGES/j2-4.jpeg",
    ],
    description:
      "Contemporary haram design with pearl accents and modern styling.",
    offers: [
      "20% Cashback on PayTM",
      "Free Delivery",
      "Easy Returns",
      "Buy 1 Get 1 25% off",
    ],
    reviews: [
      { user: "Chitra", rating: 5, text: "Modern design" },
      { user: "Vijaya", rating: 4, text: "Beautiful pearls" },
      { user: "Sumathi", rating: 5, text: "Contemporary look" },
    ],
  },
  {
    id: 911,
    name: "Solitaire Gold Ring",
    category: "Jewellery",
    price: 1699,
    oldPrice: 2599,
    images: [
      "../IMAGES/j3-1.jpeg",
      "../IMAGES/j3-2.jpeg",
      "../IMAGES/j3-3.jpeg",
      "../IMAGES/j3-4.jpeg",
    ],
    description:
      "Elegant solitaire design gold plated ring with stone setting.",
    offers: [
      "25% Instant Discount on ICICI Bank",
      "Free Delivery",
      "14 Days Return Policy",
      "Flat ₹200 off",
    ],
    reviews: [
      { user: "Mohan", rating: 4, text: "Elegant solitaire" },
      { user: "Rohan", rating: 5, text: "Beautiful stone setting" },
      { user: "Sohan", rating: 4, text: "Good for gifting" },
    ],
  },
  {
    id: 912,
    name: "Gold Plated Mangalsutra Chain",
    category: "Jewellery",
    price: 2599,
    oldPrice: 3999,
    images: [
      "../IMAGES/j4-1.jpeg",
      "../IMAGES/j4-2.jpeg",
      "../IMAGES/j4-3.jpeg",
      "../IMAGES/j4-4.jpeg",
    ],
    description:
      "Traditional mangalsutra design chain with black beads and gold plating.",
    offers: [
      "15% Instant Discount on Axis Bank",
      "Free Delivery",
      "7 Days Replacement",
      "Extra 10% off on bulk orders",
    ],
    reviews: [
      { user: "Sunita", rating: 5, text: "Traditional mangalsutra" },
      { user: "Rekha", rating: 5, text: "Perfect black beads" },
      { user: "Usha", rating: 4, text: "Good for married women" },
    ],
  },
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
// Wait for DOM to be fully loaded
document.addEventListener("DOMContentLoaded", function () {
  initializeImageGallery();
});

function initializeImageGallery() {
  // Main image
  const mainImg = document.getElementById("productImage");
  if (!mainImg) {
    console.error("Main image element not found!");
    return;
  }

  // Set main image
  if (product.images && product.images.length > 0) {
    mainImg.src = product.images[0];
    mainImg.alt = product.name || "Product Image";
  }

  // Desktop thumbnails
  initializeDesktopThumbnails();

  // Mobile slider
  initializeMobileSlider();
}

function initializeDesktopThumbnails() {
  const thumbs = document.querySelectorAll(".thumb");

  if (thumbs.length === 0) {
    console.warn("No thumbnail elements found");
    return;
  }

  thumbs.forEach((thumb, index) => {
    if (product.images && product.images[index]) {
      thumb.src = product.images[index];
      thumb.alt = `${product.name} - View ${index + 1}`;

      // Add click handler
      thumb.addEventListener("click", function () {
        changeMainImage(product.images[index]);
        updateActiveThumbnail(index);
      });
    } else {
      thumb.style.display = "none";
    }
  });

  // Set first thumbnail as active
  if (thumbs.length > 0) {
    thumbs[0].classList.add("active");
  }
}

function initializeMobileSlider() {
  const mobileSlider = document.getElementById("mobileSlider");
  if (!mobileSlider || !product.images) return;

  // Clear any existing content
  mobileSlider.innerHTML = "";

  // Add images to slider
  product.images.forEach((img, index) => {
    const slide = document.createElement("div");
    slide.className = "min-w-full flex-shrink-0";
    slide.innerHTML = `
            <img src="${img}" 
                 alt="${product.name} - Image ${index + 1}" 
                 class="w-full h-auto object-contain max-h-[400px]">
        `;
    mobileSlider.appendChild(slide);
  });

  // Create navigation buttons if not already in HTML
  if (!document.querySelector(".slider-nav")) {
    const sliderContainer = mobileSlider.parentElement;
    const navDiv = document.createElement("div");
    navDiv.className = "slider-nav flex justify-between mt-4";
    navDiv.innerHTML = `
            <button onclick="prevSlide()" 
                    class="prev-btn px-4 py-2 bg-gray-800 text-white rounded-full hover:bg-gray-700 transition">
                ←
            </button>
            <div class="slide-indicators flex gap-2">
                ${product.images
                  .map(
                    (_, i) =>
                      `<span class="indicator w-2 h-2 rounded-full bg-gray-300 cursor-pointer ${
                        i === 0 ? "bg-orange-500" : ""
                      }" 
                          onclick="goToSlide(${i})"></span>`
                  )
                  .join("")}
            </div>
            <button onclick="nextSlide()" 
                    class="next-btn px-4 py-2 bg-gray-800 text-white rounded-full hover:bg-gray-700 transition">
                →
            </button>
        `;
    sliderContainer.appendChild(navDiv);
  }

  // Initialize slide indicators
  updateSlideIndicators();
}

// Global variable for current slide
let currentSlide = 0;
const totalSlides = product.images ? product.images.length : 0;

function changeMainImage(imageSrc) {
  const mainImg = document.getElementById("productImage");
  if (mainImg) {
    mainImg.src = imageSrc;
    mainImg.classList.add("fade-in");

    // Remove animation class after animation completes
    setTimeout(() => {
      mainImg.classList.remove("fade-in");
    }, 300);
  }
}

function updateActiveThumbnail(activeIndex) {
  document.querySelectorAll(".thumb").forEach((thumb, index) => {
    if (index === activeIndex) {
      thumb.classList.add("active");
    } else {
      thumb.classList.remove("active");
    }
  });
}

// Mobile slider functions
function updateSlide() {
  const mobileSlider = document.getElementById("mobileSlider");
  if (!mobileSlider) return;

  mobileSlider.style.transform = `translateX(-${currentSlide * 100}%)`;
  updateSlideIndicators();
}

function updateSlideIndicators() {
  const indicators = document.querySelectorAll(".indicator");
  indicators.forEach((indicator, index) => {
    if (index === currentSlide) {
      indicator.classList.add("bg-orange-500");
      indicator.classList.remove("bg-gray-300");
    } else {
      indicator.classList.remove("bg-orange-500");
      indicator.classList.add("bg-gray-300");
    }
  });
}

function nextSlide() {
  if (currentSlide < totalSlides - 1) {
    currentSlide++;
    updateSlide();
  } else {
    currentSlide = 0; // Loop back to first
    updateSlide();
  }
}

function prevSlide() {
  if (currentSlide > 0) {
    currentSlide--;
    updateSlide();
  } else {
    currentSlide = totalSlides - 1; // Loop to last
    updateSlide();
  }
}

function goToSlide(slideIndex) {
  if (slideIndex >= 0 && slideIndex < totalSlides) {
    currentSlide = slideIndex;
    updateSlide();
  }
}

// Optional: Auto-slide for mobile
let autoSlideInterval;
function startAutoSlide() {
  if (window.innerWidth < 768) {
    // Only on mobile
    autoSlideInterval = setInterval(nextSlide, 5000);
  }
}

function stopAutoSlide() {
  if (autoSlideInterval) {
    clearInterval(autoSlideInterval);
  }
}

// Start auto-slide on mobile
startAutoSlide();

// Pause auto-slide on hover/touch
document
  .querySelectorAll("#mobileSlider, .prev-btn, .next-btn, .indicator")
  .forEach((el) => {
    el.addEventListener("mouseenter", stopAutoSlide);
    el.addEventListener("mouseleave", startAutoSlide);
    el.addEventListener("touchstart", stopAutoSlide);
    el.addEventListener("touchend", startAutoSlide);
  });

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
        <a href="../PRODUCTS/product.html?id=${
          p.id
        }" onclick="event.stopPropagation()">
          <img src="${p.images[0]}" alt="${p.name}" class="product-img">
        </a>
      </div>

      <!-- CONTENT -->
      <div class="mt-4">
        <p class="text-sm text-slate-500">${p.category}</p>

        <!-- TITLE CLICKABLE -->
        <a href="../PRODUCTS/product.html?id=${
          p.id
        }" onclick="event.stopPropagation()">
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
       <button onclick="buyNow(this)" class="btn-orange px-4 py-2 rounded-full w-1/2 text-center">Buy</button>

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
      p.reviews.reduce((sum, r) => sum + r.rating, 0) / p.reviews.length
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

// ---------- ADD TO CART ----------
function addToCart(productId) {
  const product = products.find((p) => p.id === productId);
  if (!product) return;

  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  const existing = cart.find((item) => item.id === product.id);

  if (existing) {
    existing.qty += 1;
  } else {
    cart.push({
      id: product.id, // ✅ VERY IMPORTANT
      name: product.name,
      price: product.price,
      img: product.images[0],
      qty: 1,
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
    const avg = product.reviews.reduce((s, r) => s + r.rating, 0) / total;

    return {
      avg: avg.toFixed(1),
      total,
      stars: product.reviews.map((r) => r.rating),
    };
  }

  return {
    avg: product.rating || "0.0",
    total: product.reviewsCount || 0,
    stars: [],
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
document.getElementById(
  "totalRatings"
).innerText = `${ratingData.total} Ratings`;

// Fill bars only if reviews exist
if (ratingData.stars.length > 0) {
  const starCount = { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 };

  ratingData.stars.forEach((r) => starCount[r]++);
  const total = ratingData.stars.length;

  for (let i = 1; i <= 5; i++) {
    const percent = (starCount[i] / total) * 100;
    document.getElementById(`count${i}`).innerText = starCount[i];
    document.getElementById(`bar${i}`).style.width = percent + "%";
  }
}

reviewsContainer.innerHTML = "";

if (product.reviews && product.reviews.length > 0) {
  product.reviews.forEach((r) => {
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

// Sample product data for search
const searchProducts = [
  {
    id: 1,
    name: "Gas Safety Device",
    category: "Home & Safety",
    price: "₹1,499",
    link: "./gas.html",
  },
  {
    id: 2,
    name: "Men's Formal Shirt",
    category: "Clothing",
    price: "₹899",
    link: "./men.html",
  },
  {
    id: 3,
    name: "Silk Saree",
    category: "Clothing",
    price: "₹2,999",
    link: "./sares.html",
  },
  {
    id: 4,
    name: "Gold Necklace",
    category: "Jewellery",
    price: "₹24,999",
    link: "./GOLD/gold.html",
  },
  {
    id: 5,
    name: "Track Pants",
    category: "Clothing",
    price: "₹799",
    link: "./TRACKPANTS/trackp.html",
  },
  {
    id: 6,
    name: "Cotton Shirt Fabric",
    category: "Materials",
    price: "₹299/m",
    link: "./SHIRTSHOOT/shirtshoot.html",
  },
  {
    id: 7,
    name: "Woolen Sweater",
    category: "Clothing",
    price: "₹1,299",
    link: "./SWEATERS/sweater.html",
  },
  {
    id: 8,
    name: "Kids T-Shirt",
    category: "Clothing",
    price: "₹499",
    link: "./kid.html",
  },
  {
    id: 9,
    name: "Ladies Kurti",
    category: "Clothing",
    price: "₹899",
    link: "./leadies.html",
  },
  {
    id: 10,
    name: "Combo Pack 1",
    category: "Home & Safety",
    price: "₹2,999",
    link: "./combo1.html",
  },
];

// Toggle mobile menu
function toggleMenu() {
  const menu = document.getElementById("mobileMenu");
  const overlay = document.getElementById("mobileOverlay");
  if (menu.classList.contains("translate-x-full")) {
    menu.classList.remove("translate-x-full");
    overlay.classList.remove("hidden");
    document.body.style.overflow = "hidden";
  } else {
    menu.classList.add("translate-x-full");
    overlay.classList.add("hidden");
    document.body.style.overflow = "";
  }
}

// Mobile search toggle
document
  .getElementById("mobileSearchToggle")
  .addEventListener("click", function () {
    const searchBar = document.getElementById("mobileSearchBar");
    searchBar.classList.toggle("hidden");
    if (!searchBar.classList.contains("hidden")) {
      document.getElementById("mobileSearchInput").focus();
    }
  });

// Close mobile search
document
  .getElementById("closeMobileSearch")
  .addEventListener("click", function () {
    const searchBar = document.getElementById("mobileSearchBar");
    searchBar.classList.add("hidden");
    hideSearchResults("mobile");
  });

// Close menu when clicking on a link
document.querySelectorAll("#mobileMenu a").forEach((link) => {
  link.addEventListener("click", () => {
    toggleMenu();
  });
});

// Search functionality
function performSearch(query, searchType) {
  if (!query.trim()) {
    hideSearchResults(searchType);
    return;
  }

  const searchTerm = query.toLowerCase();
  const results = searchProducts.filter(
    (product) =>
      product.name.toLowerCase().includes(searchTerm) ||
      product.category.toLowerCase().includes(searchTerm)
  );

  displaySearchResults(results, searchType);
}

function displaySearchResults(results, searchType) {
  const resultsContainer = document.getElementById(
    `${searchType}SearchResults`
  );

  if (results.length === 0) {
    resultsContainer.innerHTML = `
        <div class="p-4 text-center text-gray-500">
          <i class="fa-solid fa-search mb-2 text-2xl"></i>
          <p>No products found</p>
          <p class="text-sm mt-1">Try different keywords</p>
        </div>
      `;
  } else {
    let html = "";
    results.forEach((product) => {
      html += `
          <a href="${product.link}" class="block p-4 hover:bg-orange-50 border-b border-gray-100 last:border-b-0 transition">
            <div class="flex justify-between items-start">
              <div>
                <h4 class="font-medium text-gray-800">${product.name}</h4>
                <p class="text-sm text-gray-500 mt-1">${product.category}</p>
              </div>
              <span class="font-semibold text-orange-600">${product.price}</span>
            </div>
          </a>
        `;
    });

    // Add view all results link
    html += `
        <div class="p-3 bg-gray-50 border-t border-gray-100">
          <a href="#" class="block text-center text-orange-600 font-medium hover:text-orange-700">
            View all ${results.length} results
          </a>
        </div>
      `;

    resultsContainer.innerHTML = html;
  }

  resultsContainer.classList.remove("hidden");
}

function hideSearchResults(searchType) {
  const resultsContainer = document.getElementById(
    `${searchType}SearchResults`
  );
  resultsContainer.classList.add("hidden");
}

// Desktop search
const desktopSearchInput = document.getElementById("desktopSearchInput");
if (desktopSearchInput) {
  desktopSearchInput.addEventListener("input", function (e) {
    performSearch(e.target.value, "desktop");
  });

  desktopSearchInput.addEventListener("focus", function () {
    if (this.value.trim()) {
      performSearch(this.value, "desktop");
    }
  });

  // Hide results when clicking outside
  document.addEventListener("click", function (e) {
    if (
      !desktopSearchInput.contains(e.target) &&
      !document.getElementById("desktopSearchResults").contains(e.target)
    ) {
      hideSearchResults("desktop");
    }
  });
}

// Mobile search
const mobileSearchInput = document.getElementById("mobileSearchInput");
if (mobileSearchInput) {
  mobileSearchInput.addEventListener("input", function (e) {
    performSearch(e.target.value, "mobile");
  });

  mobileSearchInput.addEventListener("focus", function () {
    if (this.value.trim()) {
      performSearch(this.value, "mobile");
    }
  });

  // Hide results when clicking outside (for mobile)
  document.addEventListener("click", function (e) {
    const mobileSearchBar = document.getElementById("mobileSearchBar");
    const mobileResults = document.getElementById("mobileSearchResults");
    if (
      !mobileSearchBar.contains(e.target) &&
      !mobileResults.contains(e.target)
    ) {
      hideSearchResults("mobile");
    }
  });
}

// Handle Enter key press for search
function handleSearchEnter(e, searchType) {
  if (e.key === "Enter" && e.target.value.trim()) {
    e.preventDefault();
    // Redirect to search results page with query
    window.location.href = `./search.html?q=${encodeURIComponent(
      e.target.value
    )}`;
  }
}

if (desktopSearchInput) {
  desktopSearchInput.addEventListener("keypress", (e) =>
    handleSearchEnter(e, "desktop")
  );
}

if (mobileSearchInput) {
  mobileSearchInput.addEventListener("keypress", (e) =>
    handleSearchEnter(e, "mobile")
  );
}



///  BUY

function buyNow(btn) {
  const card = btn.closest(".product-card");

  /* ---------- IMAGE (FIXED) ---------- */
  const imgEl = card.querySelector(".product-img");
  const imgSrc = imgEl ? imgEl.getAttribute("src") : "";
  const image = imgSrc.split("/").pop(); // g1-1.jpeg

  /* ---------- NAME ---------- */
  const name = card.getAttribute("data-name");

  /* ---------- CATEGORY ---------- */
  const category =
    card.querySelector("p.text-slate-500")?.innerText || "";

  /* ---------- PRICE ---------- */
  const priceText =
    card.querySelector("p.text-orange-600")?.innerText || "0";
  const price = parseInt(priceText.replace(/[₹,]/g, ""));

  /* ---------- ORIGINAL PRICE (FAKE FOR DISCOUNT) ---------- */
  const originalPrice = Math.round(price * 1.25);

  /* ---------- RATING (FIXED) ---------- */
  const ratingText =
    card.querySelector(".stars span")?.innerText || "0";
  const rating = parseFloat(ratingText);

  /* ---------- DESCRIPTION ---------- */
  const description =
    card.querySelector("p.text-slate-600")?.innerText || "";

  /* ---------- SAVE ---------- */
  localStorage.setItem(
    "buyProduct",
    JSON.stringify({
      name,
      category,
      price,
      originalPrice,
      image,
      rating,
      description
    })
  );

  /* ---------- REDIRECT ---------- */
  window.location.href = "../buy.html";
}