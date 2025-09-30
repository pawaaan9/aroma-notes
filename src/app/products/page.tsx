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
        {/* Smoke-like Background Effects */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Base Smoke Layer - Large flowing clouds */}
          <div className="absolute top-0 left-0 w-full h-full">
            {/* Primary Smoke Cloud - White/Gray */}
            <div className="absolute top-10 left-10 w-96 h-96 bg-gradient-to-br from-white/8 via-gray-200/6 to-transparent rounded-full blur-3xl animate-smoke-drift-1"></div>
            <div className="absolute top-20 left-20 w-80 h-80 bg-gradient-to-br from-gray-300/6 via-white/4 to-transparent rounded-full blur-3xl animate-smoke-drift-2"></div>
            
            {/* Secondary Smoke Cloud - Warm tones */}
            <div className="absolute top-32 right-16 w-88 h-88 bg-gradient-to-br from-amber-100/6 via-yellow-100/4 to-transparent rounded-full blur-3xl animate-smoke-drift-3"></div>
            <div className="absolute top-40 right-24 w-72 h-72 bg-gradient-to-br from-orange-100/5 via-amber-200/3 to-transparent rounded-full blur-3xl animate-smoke-drift-4"></div>
            
            {/* Tertiary Smoke Cloud - Cool tones */}
            <div className="absolute bottom-20 left-20 w-84 h-84 bg-gradient-to-br from-blue-100/5 via-indigo-100/3 to-transparent rounded-full blur-3xl animate-smoke-drift-5"></div>
            <div className="absolute bottom-32 left-32 w-76 h-76 bg-gradient-to-br from-violet-100/4 via-purple-100/2 to-transparent rounded-full blur-3xl animate-smoke-drift-6"></div>
          </div>
          
          {/* Mid-layer Smoke - Medium flowing wisps */}
          <div className="absolute top-0 left-0 w-full h-full">
            {/* Jasmine Smoke Wisps */}
            <div className="absolute top-16 left-1/4 w-64 h-64 bg-gradient-to-br from-white/4 via-gray-100/3 to-transparent rounded-full blur-2xl animate-smoke-wisp-1"></div>
            <div className="absolute top-24 left-1/3 w-56 h-56 bg-gradient-to-br from-gray-200/3 via-white/2 to-transparent rounded-full blur-2xl animate-smoke-wisp-2"></div>
            
            {/* Rose Smoke Wisps */}
            <div className="absolute top-1/3 right-1/4 w-60 h-60 bg-gradient-to-br from-rose-100/4 via-pink-100/3 to-transparent rounded-full blur-2xl animate-smoke-wisp-3"></div>
            <div className="absolute top-1/2 right-1/3 w-52 h-52 bg-gradient-to-br from-pink-100/3 via-rose-200/2 to-transparent rounded-full blur-2xl animate-smoke-wisp-4"></div>
            
            {/* Sandalwood Smoke Wisps */}
            <div className="absolute bottom-1/3 left-1/3 w-68 h-68 bg-gradient-to-br from-amber-100/4 via-yellow-100/3 to-transparent rounded-full blur-2xl animate-smoke-wisp-5"></div>
            <div className="absolute bottom-1/4 left-1/2 w-48 h-48 bg-gradient-to-br from-yellow-100/3 via-amber-200/2 to-transparent rounded-full blur-2xl animate-smoke-wisp-6"></div>
          </div>
          
          {/* Top-layer Smoke - Small delicate wisps */}
          <div className="absolute top-0 left-0 w-full h-full">
            {/* Vanilla Smoke Particles */}
            <div className="absolute top-1/4 left-1/5 w-40 h-40 bg-gradient-to-br from-cream-100/3 via-yellow-50/2 to-transparent rounded-full blur-xl animate-smoke-particle-1"></div>
            <div className="absolute top-1/3 left-1/6 w-36 h-36 bg-gradient-to-br from-yellow-50/2 via-cream-100/1 to-transparent rounded-full blur-xl animate-smoke-particle-2"></div>
            
            {/* Lavender Smoke Particles */}
            <div className="absolute top-1/2 right-1/5 w-44 h-44 bg-gradient-to-br from-violet-100/3 via-purple-100/2 to-transparent rounded-full blur-xl animate-smoke-particle-3"></div>
            <div className="absolute top-2/3 right-1/6 w-32 h-32 bg-gradient-to-br from-purple-100/2 via-violet-100/1 to-transparent rounded-full blur-xl animate-smoke-particle-4"></div>
            
            {/* Oud Smoke Particles */}
            <div className="absolute bottom-1/4 right-1/3 w-48 h-48 bg-gradient-to-br from-amber-800/2 via-amber-700/1 to-transparent rounded-full blur-xl animate-smoke-particle-5"></div>
            <div className="absolute bottom-1/3 right-1/4 w-40 h-40 bg-gradient-to-br from-amber-700/1 via-amber-800/1 to-transparent rounded-full blur-xl animate-smoke-particle-6"></div>
            
            {/* Musk Smoke Particles */}
            <div className="absolute bottom-1/2 left-1/4 w-36 h-36 bg-gradient-to-br from-gray-200/2 via-gray-100/1 to-transparent rounded-full blur-xl animate-smoke-particle-7"></div>
            <div className="absolute bottom-2/3 left-1/5 w-28 h-28 bg-gradient-to-br from-gray-100/1 via-gray-200/1 to-transparent rounded-full blur-xl animate-smoke-particle-8"></div>
          </div>
          
          {/* Floating Perfume Essence Particles */}
          <div className="absolute inset-0 overflow-hidden">
            {/* Jasmine Essence */}
            <div className="absolute top-20 left-10 w-4 h-4 bg-white/20 rounded-full animate-float-particle shadow-lg shadow-white/10"></div>
            <div className="absolute top-20 left-12 w-2 h-2 bg-white/15 rounded-full animate-float-particle delay-200"></div>
            <div className="absolute top-25 left-8 w-3 h-3 bg-white/18 rounded-full animate-float-particle delay-400"></div>
            <div className="absolute top-15 left-15 w-1 h-1 bg-white/25 rounded-full animate-float-particle delay-600"></div>
            
            {/* Rose Essence */}
            <div className="absolute top-40 right-20 w-3 h-3 bg-rose-200/30 rounded-full animate-float-particle delay-500 shadow-lg shadow-rose-200/20"></div>
            <div className="absolute top-42 right-22 w-1 h-1 bg-rose-100/40 rounded-full animate-float-particle delay-700"></div>
            <div className="absolute top-35 right-25 w-2 h-2 bg-rose-300/25 rounded-full animate-float-particle delay-300"></div>
            <div className="absolute top-45 right-18 w-4 h-4 bg-rose-100/20 rounded-full animate-float-particle delay-900"></div>
            
            {/* Sandalwood Essence */}
            <div className="absolute bottom-40 left-20 w-5 h-5 bg-amber-200/25 rounded-full animate-float-particle delay-1000 shadow-lg shadow-amber-200/15"></div>
            <div className="absolute bottom-38 left-22 w-2 h-2 bg-amber-100/30 rounded-full animate-float-particle delay-1200"></div>
            <div className="absolute bottom-35 left-25 w-3 h-3 bg-amber-300/20 rounded-full animate-float-particle delay-800"></div>
            <div className="absolute bottom-42 left-18 w-1 h-1 bg-amber-100/35 rounded-full animate-float-particle delay-1400"></div>
            
            {/* Bergamot Essence */}
            <div className="absolute top-60 left-1/3 w-2 h-2 bg-yellow-200/35 rounded-full animate-float-particle delay-700 shadow-lg shadow-yellow-200/20"></div>
            <div className="absolute top-62 left-1/3 w-1 h-1 bg-yellow-100/40 rounded-full animate-float-particle delay-900"></div>
            <div className="absolute top-58 left-1/3 w-3 h-3 bg-yellow-300/25 rounded-full animate-float-particle delay-500"></div>
            <div className="absolute top-65 left-1/3 w-1 h-1 bg-yellow-50/45 rounded-full animate-float-particle delay-1100"></div>
            
            {/* Vanilla Essence */}
            <div className="absolute bottom-60 right-1/3 w-4 h-4 bg-cream-200/30 rounded-full animate-float-particle delay-300 shadow-lg shadow-cream-200/15"></div>
            <div className="absolute bottom-58 right-1/3 w-2 h-2 bg-cream-100/35 rounded-full animate-float-particle delay-500"></div>
            <div className="absolute bottom-55 right-1/3 w-3 h-3 bg-cream-300/20 rounded-full animate-float-particle delay-100"></div>
            <div className="absolute bottom-62 right-1/3 w-1 h-1 bg-cream-50/40 rounded-full animate-float-particle delay-700"></div>
            
            {/* Lavender Essence */}
            <div className="absolute top-1/3 right-10 w-3 h-3 bg-violet-200/40 rounded-full animate-float-particle delay-1200 shadow-lg shadow-violet-200/20"></div>
            <div className="absolute top-1/3 right-12 w-1 h-1 bg-violet-100/50 rounded-full animate-float-particle delay-1400"></div>
            <div className="absolute top-1/3 right-8 w-2 h-2 bg-violet-300/30 rounded-full animate-float-particle delay-1000"></div>
            <div className="absolute top-1/3 right-15 w-4 h-4 bg-violet-100/25 rounded-full animate-float-particle delay-1600"></div>
            
            {/* Oud Essence */}
            <div className="absolute top-1/2 left-1/4 w-3 h-3 bg-amber-800/20 rounded-full animate-float-particle delay-600 shadow-lg shadow-amber-800/10"></div>
            <div className="absolute top-1/2 left-1/4 w-1 h-1 bg-amber-700/25 rounded-full animate-float-particle delay-800"></div>
            <div className="absolute top-1/2 left-1/4 w-2 h-2 bg-amber-900/15 rounded-full animate-float-particle delay-400"></div>
            <div className="absolute top-1/2 left-1/4 w-1 h-1 bg-amber-600/30 rounded-full animate-float-particle delay-1000"></div>
            
            {/* Musk Essence */}
            <div className="absolute bottom-1/3 right-1/4 w-2 h-2 bg-gray-200/30 rounded-full animate-float-particle delay-1000 shadow-lg shadow-gray-200/15"></div>
            <div className="absolute bottom-1/3 right-1/4 w-1 h-1 bg-gray-100/35 rounded-full animate-float-particle delay-1200"></div>
            <div className="absolute bottom-1/3 right-1/4 w-3 h-3 bg-gray-300/20 rounded-full animate-float-particle delay-800"></div>
            <div className="absolute bottom-1/3 right-1/4 w-1 h-1 bg-gray-50/40 rounded-full animate-float-particle delay-1400"></div>
            
            {/* Additional Creative Dots - Scattered throughout */}
            <div className="absolute top-1/4 left-1/6 w-2 h-2 bg-emerald-200/25 rounded-full animate-float-particle delay-200"></div>
            <div className="absolute top-1/4 left-1/6 w-1 h-1 bg-emerald-100/35 rounded-full animate-float-particle delay-400"></div>
            
            <div className="absolute top-3/4 right-1/6 w-3 h-3 bg-indigo-200/20 rounded-full animate-float-particle delay-600"></div>
            <div className="absolute top-3/4 right-1/6 w-1 h-1 bg-indigo-100/30 rounded-full animate-float-particle delay-800"></div>
            
            <div className="absolute top-1/6 left-2/3 w-2 h-2 bg-teal-200/25 rounded-full animate-float-particle delay-1000"></div>
            <div className="absolute top-1/6 left-2/3 w-1 h-1 bg-teal-100/35 rounded-full animate-float-particle delay-1200"></div>
            
            <div className="absolute bottom-1/6 right-2/3 w-3 h-3 bg-fuchsia-200/20 rounded-full animate-float-particle delay-400"></div>
            <div className="absolute bottom-1/6 right-2/3 w-1 h-1 bg-fuchsia-100/30 rounded-full animate-float-particle delay-600"></div>
            
            <div className="absolute top-2/3 left-1/5 w-2 h-2 bg-cyan-200/25 rounded-full animate-float-particle delay-800"></div>
            <div className="absolute top-2/3 left-1/5 w-1 h-1 bg-cyan-100/35 rounded-full animate-float-particle delay-1000"></div>
            
            <div className="absolute bottom-2/3 right-1/5 w-3 h-3 bg-lime-200/20 rounded-full animate-float-particle delay-200"></div>
            <div className="absolute bottom-2/3 right-1/5 w-1 h-1 bg-lime-100/30 rounded-full animate-float-particle delay-400"></div>
            
            {/* Glowing Dots with Pulse Effect */}
            <div className="absolute top-1/5 left-1/2 w-4 h-4 bg-white/15 rounded-full animate-pulse-dot shadow-lg shadow-white/20"></div>
            <div className="absolute top-1/5 left-1/2 w-2 h-2 bg-white/25 rounded-full animate-pulse-dot delay-500"></div>
            
            <div className="absolute bottom-1/5 right-1/2 w-4 h-4 bg-amber-200/20 rounded-full animate-pulse-dot delay-300 shadow-lg shadow-amber-200/25"></div>
            <div className="absolute bottom-1/5 right-1/2 w-2 h-2 bg-amber-100/30 rounded-full animate-pulse-dot delay-800"></div>
            
            <div className="absolute top-1/2 left-1/8 w-3 h-3 bg-rose-200/25 rounded-full animate-pulse-dot delay-700 shadow-lg shadow-rose-200/20"></div>
            <div className="absolute top-1/2 left-1/8 w-1 h-1 bg-rose-100/35 rounded-full animate-pulse-dot delay-1200"></div>
            
            <div className="absolute bottom-1/2 right-1/8 w-3 h-3 bg-violet-200/25 rounded-full animate-pulse-dot delay-100 shadow-lg shadow-violet-200/20"></div>
            <div className="absolute bottom-1/2 right-1/8 w-1 h-1 bg-violet-100/35 rounded-full animate-pulse-dot delay-600"></div>
            
            {/* Twinkling Stars */}
            <div className="absolute top-1/8 left-3/4 w-1 h-1 bg-white/40 rounded-full animate-twinkle"></div>
            <div className="absolute top-1/8 left-3/4 w-0.5 h-0.5 bg-white/60 rounded-full animate-twinkle delay-300"></div>
            
            <div className="absolute top-3/8 right-1/8 w-1 h-1 bg-yellow-200/35 rounded-full animate-twinkle delay-500"></div>
            <div className="absolute top-3/8 right-1/8 w-0.5 h-0.5 bg-yellow-100/50 rounded-full animate-twinkle delay-800"></div>
            
            <div className="absolute bottom-1/8 left-1/8 w-1 h-1 bg-blue-200/35 rounded-full animate-twinkle delay-200"></div>
            <div className="absolute bottom-1/8 left-1/8 w-0.5 h-0.5 bg-blue-100/50 rounded-full animate-twinkle delay-700"></div>
            
            <div className="absolute bottom-3/8 right-3/4 w-1 h-1 bg-pink-200/35 rounded-full animate-twinkle delay-400"></div>
            <div className="absolute bottom-3/8 right-3/4 w-0.5 h-0.5 bg-pink-100/50 rounded-full animate-twinkle delay-900"></div>
            
            {/* Floating Orbs */}
            <div className="absolute top-1/3 left-1/12 w-6 h-6 bg-gradient-to-br from-white/10 to-transparent rounded-full animate-orb-float shadow-lg shadow-white/5"></div>
            <div className="absolute top-1/3 left-1/12 w-3 h-3 bg-gradient-to-br from-white/15 to-transparent rounded-full animate-orb-float delay-1000"></div>
            
            <div className="absolute bottom-1/3 right-1/12 w-6 h-6 bg-gradient-to-br from-amber-200/10 to-transparent rounded-full animate-orb-float delay-500 shadow-lg shadow-amber-200/5"></div>
            <div className="absolute bottom-1/3 right-1/12 w-3 h-3 bg-gradient-to-br from-amber-100/15 to-transparent rounded-full animate-orb-float delay-1500"></div>
            
            <div className="absolute top-2/3 left-1/12 w-5 h-5 bg-gradient-to-br from-rose-200/10 to-transparent rounded-full animate-orb-float delay-300 shadow-lg shadow-rose-200/5"></div>
            <div className="absolute top-2/3 left-1/12 w-2 h-2 bg-gradient-to-br from-rose-100/15 to-transparent rounded-full animate-orb-float delay-1300"></div>
            
            <div className="absolute bottom-2/3 right-1/12 w-5 h-5 bg-gradient-to-br from-violet-200/10 to-transparent rounded-full animate-orb-float delay-800 shadow-lg shadow-violet-200/5"></div>
            <div className="absolute bottom-2/3 right-1/12 w-2 h-2 bg-gradient-to-br from-violet-100/15 to-transparent rounded-full animate-orb-float delay-1800"></div>
          </div>
        </div>
        
        <div className="relative z-20">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="text-4xl font-extrabold font-smooch tracking-tight text-white sm:text-5xl animate-fade-in-up">
              Shop Our Collection
            </h2>
            <div className="mt-6 flex flex-wrap gap-2 animate-fade-in-up delay-300">
              <button className="rounded-full bg-primary px-4 py-2 text-sm font-medium font-poppins text-white transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/25">
                All
              </button>
              <button className="rounded-full bg-gray-800/50 px-4 py-2 text-sm font-medium font-poppins text-gray-300 hover:bg-gray-700/50 hover:text-white transition-all duration-300 hover:scale-105">
                Perfume
              </button>
              <button className="rounded-full bg-gray-800/50 px-4 py-2 text-sm font-medium font-poppins text-gray-300 hover:bg-gray-700/50 hover:text-white transition-all duration-300 hover:scale-105">
                Candles
              </button>
              <button className="rounded-full bg-gray-800/50 px-4 py-2 text-sm font-medium font-poppins text-gray-300 hover:bg-gray-700/50 hover:text-white transition-all duration-300 hover:scale-105">
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
