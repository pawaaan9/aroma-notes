import ProductCard from "../../components/ProductCard";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { fetchProducts, selectDisplayPrice, selectPrimaryImage } from "@/lib/sanity";
import { formatLkr } from "@/utils/currency";

export default async function ProductsPage() {
  const products = await fetchProducts();

  return (
    <div className="flex min-h-screen w-full flex-col bg-white">
      <Header />
      
      <main className="flex-grow relative">
        {/* Removed all smoke/particle decorative layers for clarity */}
        
        <div className="relative z-20">
        <div className="mx-auto max-w-none px-4 py-12 sm:px-6 lg:px-[10vw]">
          <div className="mb-12">
            <h2 className="text-4xl font-extrabold font-smooch tracking-tight text-gray-900 sm:text-5xl animate-fade-in-up">
              Shop Our Collection
            </h2>
            <div className="mt-6 flex flex-wrap gap-2 animate-fade-in-up delay-300">
              <button className="rounded-full bg-primary px-4 py-2 text-sm font-medium font-poppins text-white transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/25">
                All
              </button>
              <button className="rounded-full bg-gray-100 px-4 py-2 text-sm font-medium font-poppins text-gray-700 hover:bg-gray-200 hover:text-gray-900 transition-all duration-300 hover:scale-105">
                Perfume
              </button>
              <button className="rounded-full bg-gray-100 px-4 py-2 text-sm font-medium font-poppins text-gray-700 hover:bg-gray-200 hover:text-gray-900 transition-all duration-300 hover:scale-105">
                Candles
              </button>
              <button className="rounded-full bg-gray-100 px-4 py-2 text-sm font-medium font-poppins text-gray-700 hover:bg-gray-200 hover:text-gray-900 transition-all duration-300 hover:scale-105">
                Diffusers
              </button>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
            {products.map((product, index) => {
              const imageSrc = selectPrimaryImage(product) ?? "/yusuf-bhai.webp";
              const priceNumber = selectDisplayPrice(product);
              const displayPrice = priceNumber != null ? formatLkr(priceNumber) : "";
              const path = `/product-view/${product.slug?.current ?? product._id}`;
              return (
                <div key={product._id}>
                  <ProductCard
                    name={product.name}
                    price={displayPrice}
                    imageSrc={imageSrc}
                    imageAlt={product.name}
                    delay={`delay-${(index + 1) * 100}`}
                    showQuickAdd={true}
                    href={path}
                  />
                </div>
              );
            })}
          </div>
        </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}
