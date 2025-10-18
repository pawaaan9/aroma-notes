import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { fetchProductByIdOrSlug } from "@/lib/sanity";
import ProductDetail from "../ProductDetail";

type PageProps = {
  params: { id: string };
};

export default async function ProductViewPage({ params }: PageProps) {
  const { id } = params;
  const product = await fetchProductByIdOrSlug(id);

  if (!product) {
    return (
      <div className="flex min-h-screen w-full flex-col">
        <div className="absolute top-0 left-0 right-0 z-50">
          <Header currentPage="products" />
        </div>
        <main className="flex-grow flex items-center justify-center bg-white">
          <p className="text-gray-300">Product not found.</p>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="flex min-h-screen w-full flex-col">
      <div className="absolute top-0 left-0 right-0 z-50">
        <Header currentPage="products" />
      </div>
      <main className="flex-grow bg-white pt-20">
        <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
          <ProductDetail product={product} />
        </div>
      </main>
      <Footer />
    </div>
  );
}


