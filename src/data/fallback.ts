
export const fallbackCategories = [
  { id: 1, name: 'Electronics', nameBn: 'ইলেকট্রনিক্স', slug: 'electronics', createdAt: new Date() },
  { id: 2, name: 'Clothing', nameBn: 'পোশাক', slug: 'clothing', createdAt: new Date() },
  { id: 3, name: 'Home & Garden', nameBn: 'বাড়ি ও বাগান', slug: 'home-garden', createdAt: new Date() },
  { id: 4, name: 'Books', nameBn: 'বই', slug: 'books', createdAt: new Date() },
  { id: 5, name: 'Accessories', nameBn: 'আনুষাঙ্গিক', slug: 'accessories', createdAt: new Date() },
  { id: 6, name: 'Jewelry', nameBn: 'গয়না', slug: 'jewelry', createdAt: new Date() },
  { id: 7, name: 'Home Decor', nameBn: 'ঘর সাজানো', slug: 'home-decor', createdAt: new Date() },
  { id: 8, name: 'Sports & Fitness', nameBn: 'খেলাধুলা ও ফিটনেস', slug: 'sports-fitness', createdAt: new Date() },
  { id: 9, name: 'Beauty & Personal Care', nameBn: 'সৌন্দর্য ও ব্যক্তিগত যত্ন', slug: 'beauty-personal-care', createdAt: new Date() },
  { id: 10, name: 'Gift Hampers', nameBn: 'গিফট হ্যাম্পার', slug: 'gift-hampers', createdAt: new Date() },
  { id: 11, name: 'Flowers & Chocolates', nameBn: 'ফুল ও চকলেট', slug: 'flowers-chocolates', createdAt: new Date() }
];

export const fallbackProducts = [
  {
    id: 1,
    name: 'Premium Bluetooth Headphones',
    nameBn: 'প্রিমিয়াম ব্লুটুথ হেডফোন',
    description: 'High-quality wireless headphones with noise cancellation',
    price: '2500',
    originalPrice: '3000',
    categoryId: 1,
    images: ['https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500'],
    featured: true,
    inStock: true,
    stockQuantity: 50,
    rating: '4.5',
    reviewCount: 125,
    tags: ['wireless', 'bluetooth', 'noise-cancellation'],
    variants: {},
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    id: 2,
    name: 'Stylish Cotton T-Shirt',
    nameBn: 'স্টাইলিশ কটন টি-শার্ট',
    description: 'Comfortable and fashionable cotton t-shirt',
    price: '1200',
    originalPrice: '1500',
    categoryId: 2,
    images: ['https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500'],
    featured: true,
    inStock: true,
    stockQuantity: 100,
    rating: '4.3',
    reviewCount: 89,
    tags: ['cotton', 'casual', 'comfortable'],
    variants: { sizes: ['S', 'M', 'L', 'XL'], colors: ['white', 'black', 'blue'] },
    createdAt: new Date(),
    updatedAt: new Date()
  }
];
