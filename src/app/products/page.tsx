import Header from "../../components/Header";
import HeroVideo from "../../components/HeroVideo";
import Footer from "../../components/Footer";
import { fetchProducts } from "@/lib/sanity";
import ProductsCatalog from "@/components/ProductsCatalog";

export default async function ProductsPage() {
  const products = await fetchProducts();

  return (
    <div className="flex min-h-screen w-full flex-col animate-fade-in-up">
      <div className="absolute top-0 left-0 right-0 z-50">
        <Header currentPage="products" />
      </div>
      
      <main className="flex-grow relative">
        <div className="relative z-20">
        <HeroVideo title="Shop Our Collection" subtitle="Discover artisan fragrances crafted to inspire." />
        </div>
        {/* Removed all smoke/particle decorative layers for clarity */}
        
        <div className="relative z-20">
          <div className="mx-auto max-w-none px-4 py-12 sm:px-6 lg:px-[5vw]">
            <ProductsCatalog products={products} />
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}
