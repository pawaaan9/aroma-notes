import ProductCard from "../../components/ProductCard";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

export default function ProductsPage() {
  const products = [
    {
      name: "Midnight Bloom",
      price: "$85",
      imageSrc: "/yusuf-bhai.webp",
      imageAlt: "Midnight Bloom"
    },
    {
      name: "Citrus Burst",
      price: "$75",
      imageSrc: "/yusuf-bhai.webp",
      imageAlt: "Citrus Burst"
    },
    {
      name: "Velvet Dusk",
      price: "$95",
      imageSrc: "/yusuf-bhai.webp",
      imageAlt: "Velvet Dusk"
    },
    {
      name: "Ocean Breeze",
      price: "$65",
      imageSrc: "/yusuf-bhai.webp",
      imageAlt: "Ocean Breeze"
    },
    {
      name: "Spiced Amber",
      price: "$105",
      imageSrc: "/yusuf-bhai.webp",
      imageAlt: "Spiced Amber"
    },
    {
      name: "Floral Whisper",
      price: "$80",
      imageSrc: "/yusuf-bhai.webp",
      imageAlt: "Floral Whisper"
    },
    {
      name: "Woodland Trail",
      price: "$90",
      imageSrc: "/yusuf-bhai.webp",
      imageAlt: "Woodland Trail"
    },
    {
      name: "Desert Mirage",
      price: "$70",
      imageSrc: "/yusuf-bhai.webp",
      imageAlt: "Desert Mirage"
    }
  ];

  return (
    <div className="flex min-h-screen flex-col bg-gray-900">
      <Header />
      <main className="flex-grow">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl animate-fade-in-up">
              Shop Our Collection
            </h2>
            <div className="mt-6 flex flex-wrap gap-2 animate-fade-in-up delay-300">
              <button className="rounded-full bg-primary px-4 py-2 text-sm font-medium text-white transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/25">
                All
              </button>
              <button className="rounded-full bg-gray-800/50 px-4 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700/50 hover:text-white transition-all duration-300 hover:scale-105">
                Perfume
              </button>
              <button className="rounded-full bg-gray-800/50 px-4 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700/50 hover:text-white transition-all duration-300 hover:scale-105">
                Candles
              </button>
              <button className="rounded-full bg-gray-800/50 px-4 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700/50 hover:text-white transition-all duration-300 hover:scale-105">
                Diffusers
              </button>
            </div>
          </div>
          
          <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
            {products.map((product, index) => (
              <ProductCard
                key={product.name}
                name={product.name}
                price={product.price}
                imageSrc={product.imageSrc}
                imageAlt={product.imageAlt}
                delay={`delay-${(index + 1) * 100}`}
                showQuickAdd={true}
              />
            ))}
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}
