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
    <div className="flex min-h-screen w-full flex-col bg-gray-900">
      <Header />
      
      <main className="flex-grow relative overflow-hidden">
        {/* Perfume Essence Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Jasmine Essence Cloud */}
          <div className="absolute top-20 left-20 w-64 h-64 bg-white/3 rounded-full blur-3xl animate-float-slow"></div>
          <div className="absolute top-30 left-30 w-40 h-40 bg-white/2 rounded-full blur-2xl animate-float-slow delay-500"></div>
          
          {/* Rose Essence Cloud */}
          <div className="absolute bottom-20 right-20 w-56 h-56 bg-rose-200/3 rounded-full blur-3xl animate-float-reverse"></div>
          <div className="absolute bottom-30 right-30 w-36 h-36 bg-rose-100/2 rounded-full blur-2xl animate-float-reverse delay-300"></div>
          
          {/* Sandalwood Essence Cloud */}
          <div className="absolute top-1/2 left-1/3 w-48 h-48 bg-amber-200/2 rounded-full blur-3xl animate-float-slow delay-1000"></div>
          
          {/* Vanilla Essence Cloud */}
          <div className="absolute bottom-1/3 left-1/4 w-52 h-52 bg-yellow-100/2 rounded-full blur-3xl animate-float-reverse delay-700"></div>
          
          {/* Lavender Essence Cloud */}
          <div className="absolute top-1/3 right-1/3 w-44 h-44 bg-violet-200/2 rounded-full blur-3xl animate-float-slow delay-1200"></div>
          
          {/* Oud Essence Cloud */}
          <div className="absolute top-1/4 left-1/2 w-40 h-40 bg-amber-800/2 rounded-full blur-3xl animate-float-reverse delay-600"></div>
        </div>
        
        <div className="relative z-20">
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
          
          <div className="grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
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
        </div>
      </main>
      
      <Footer />
    </div>
  );
}
