import ProductCard from "@/components/ProductCard";
import Header from "../../components/Header";
import MobileFilters from "../../components/MobileFilters";
import HeroVideo from "../../components/HeroVideo";
import Footer from "../../components/Footer";
import { fetchProducts, selectDisplayPrice, selectPrimaryImage, select50mlPrice } from "@/lib/sanity";
import { formatLkr } from "@/utils/currency";

export default async function ProductsPage() {
  const products = await fetchProducts();

  return (
    <div className="flex min-h-screen w-full flex-col bg-white animate-fade-in-up">
      <Header />
      
      <main className="flex-grow relative">
        <div className="relative z-20">
        <HeroVideo title="Shop Our Collection" subtitle="Discover artisan fragrances crafted to inspire." />
        </div>
        {/* Removed all smoke/particle decorative layers for clarity */}
        
        <div className="relative z-20">
        <div className="mx-auto max-w-none px-4 py-12 sm:px-6 lg:px-[5vw]">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
            {/* Sidebar filters visible on desktop only */}
            <aside className="hidden lg:block lg:col-span-3">
              <div className="sticky top-28 space-y-10">
                {/* Availability */}
                <div>
                  <div className="mb-3 flex items-center justify-between">
                    <h3 className="text-xs font-semibold tracking-[0.2em] text-gray-700">AVAILABILITY</h3>
                  </div>
                  <label className="flex items-center gap-3 text-sm text-gray-700 font-saira">
                    <input type="checkbox" className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary font-saira" />
                    In stock only
                  </label>
                </div>

                {/* Price */}
                <div>
                  <div className="mb-3 flex items-center justify-between">
                    <h3 className="text-xs font-semibold tracking-[0.2em] text-gray-700">PRICE</h3>
                  </div>
                  <div className="py-2">
                    <input type="range" min={0} max={400} defaultValue={200} className="w-full accent-primary" />
                  </div>
                  <div className="flex items-center gap-3">
                    <input className="w-24 rounded-md border border-gray-300 px-3 py-2 text-sm" placeholder="Min" />
                    <span className="text-gray-400">to</span>
                    <input className="w-24 rounded-md border border-gray-300 px-3 py-2 text-sm" placeholder="Max" />
                  </div>
                </div>

                {/* Gender */}
                <div>
                  <div className="mb-3 flex items-center justify-between">
                    <h3 className="text-xs font-semibold tracking-[0.2em] text-gray-700">GENDER</h3>
                  </div>
                  <div className="space-y-2 text-sm text-gray-700 font-saira">
                    <label className="flex items-center gap-3"><input type="checkbox" className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary" /> Female</label>
                    <label className="flex items-center gap-3"><input type="checkbox" className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary" /> Male</label>
                    <label className="flex items-center gap-3"><input type="checkbox" className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary" /> Unisex</label>
                  </div>
                </div>

                {/* Brand Inspiration */}
                <div>
                  <div className="mb-3 flex items-center justify-between">
                    <h3 className="text-xs font-semibold tracking-[0.2em] text-gray-700">BRAND INSPIRATION</h3>
                  </div>
                  <div className="space-y-2 text-sm text-gray-700 font-saira">
                    <label className="flex items-center gap-3 py-1">
                      <input type="checkbox" className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary" /> YB Originals
                    </label>
                    <label className="flex items-center gap-3 py-1">
                      <input type="checkbox" className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary" /> Inspired
                    </label>
                  </div>
                </div>
              </div>
            </aside>

            {/* Product grid */}
            <section className="lg:col-span-9">
              <div className="mb-8 flex items-end justify-end">
                <div className="lg:hidden"><MobileFilters /></div>
              </div>
              <div className="grid grid-cols-2 gap-x-8 gap-y-16 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
            {products.map((product, index) => {
              const imageSrc = selectPrimaryImage(product) ?? "/yusuf-bhai.webp";
              const path = `/product-view/${product.slug?.current ?? product._id}`;
              const label = product.brand ? product.brand.toUpperCase() : undefined;
              const { originalPrice, discountPrice } = select50mlPrice(product);
              const display50mlPrice = discountPrice != null ? formatLkr(discountPrice) : (originalPrice != null ? formatLkr(originalPrice) : "");
              const displayOriginalPrice = originalPrice != null ? formatLkr(originalPrice) : undefined;
              return (
                <div key={product._id}>
                  <ProductCard
                    name={product.name}
                    price={display50mlPrice}
                    originalPrice={displayOriginalPrice}
                    imageSrc={imageSrc}
                    imageAlt={product.name}
                    delay={`delay-${(index + 1) * 100}`}
                    showQuickAdd={true}
                    href={path}
                    label={label}
                  />
                </div>
              );
            })}
              </div>
            </section>
          </div>
        </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}
