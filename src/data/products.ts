
import { Product } from '../components/ProductCard';

export const products: Product[] = [
  {
    id: 1,
    name: "Premium Wireless Headphones",
    price: 299,
    points: 2990,
    originalPrice: 399,
    originalPoints: 3990,
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&q=80",
    rating: 4.5,
    reviewCount: 128,
    description: "Experience superior sound quality with our premium wireless headphones. Featuring advanced noise cancellation and 30-hour battery life.",
    specifications: {
      "Battery Life": "30 hours",
      "Noise Cancellation": "Active",
      "Connectivity": "Bluetooth 5.0",
      "Driver Size": "40mm",
      "Weight": "250g"
    },
    category: "Electronics"
  },
  {
    id: 2,
    name: "Smart Fitness Watch",
    price: 199,
    points: 1990,
    originalPrice: 249,
    originalPoints: 2490,
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&q=80",
    rating: 4.3,
    reviewCount: 89,
    description: "Track your fitness goals with this advanced smartwatch featuring heart rate monitoring, GPS, and water resistance.",
    specifications: {
      "Display": "1.4 inch AMOLED",
      "Battery Life": "7 days",
      "Water Resistance": "50M",
      "GPS": "Built-in",
      "Health Sensors": "Heart Rate, SpO2"
    },
    category: "Wearables"
  },
  {
    id: 3,
    name: "Professional Coffee Maker",
    price: 149,
    points: 1490,
    image: "https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=400&q=80",
    rating: 4.7,
    reviewCount: 203,
    description: "Brew the perfect cup with our professional-grade coffee maker. Features programmable settings and thermal carafe.",
    specifications: {
      "Capacity": "12 cups",
      "Brew Time": "6 minutes",
      "Carafe": "Thermal stainless steel",
      "Filter": "Permanent gold tone",
      "Programming": "24-hour"
    },
    category: "Kitchen"
  },
  {
    id: 4,
    name: "Gaming Mechanical Keyboard",
    price: 129,
    points: 1290,
    originalPrice: 159,
    originalPoints: 1590,
    image: "https://images.unsplash.com/photo-1541140532154-b024d705b90a?w=400&q=80",
    rating: 4.6,
    reviewCount: 156,
    description: "Enhance your gaming experience with this mechanical keyboard featuring RGB backlighting and tactile switches.",
    specifications: {
      "Switch Type": "Mechanical Blue",
      "Backlighting": "RGB",
      "Connectivity": "USB-C",
      "Key Layout": "Full-size",
      "Response Time": "1ms"
    },
    category: "Gaming"
  },
  {
    id: 5,
    name: "Wireless Charging Pad",
    price: 39,
    points: 390,
    originalPrice: 49,
    originalPoints: 490,
    image: "https://images.unsplash.com/photo-1586816001966-79b736744398?w=400&q=80",
    rating: 4.2,
    reviewCount: 67,
    description: "Convenient wireless charging for your devices. Compatible with all Qi-enabled smartphones and accessories.",
    specifications: {
      "Output": "15W Fast Charging",
      "Compatibility": "Qi-enabled devices",
      "Design": "Ultra-slim",
      "Safety": "Over-current protection",
      "LED Indicator": "Charging status"
    },
    category: "Accessories"
  },
  {
    id: 6,
    name: "Smart Home Security Camera",
    price: 79,
    points: 790,
    image: "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=400&q=80",
    rating: 4.4,
    reviewCount: 94,
    description: "Keep your home secure with this smart camera featuring 1080p video, night vision, and mobile alerts.",
    specifications: {
      "Resolution": "1080p HD",
      "Night Vision": "Up to 30ft",
      "Storage": "Cloud & Local",
      "Connectivity": "WiFi",
      "Mobile App": "iOS & Android"
    },
    category: "Home Security"
  }
];
