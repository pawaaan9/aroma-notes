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
      <div className="flex min-h-screen w-full flex-col bg-white">
        <Header />
        <main className="flex-grow flex items-center justify-center">
          <p className="text-gray-300">Product not found.</p>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="flex min-h-screen w-full flex-col bg-white">
      <Header />
      <main className="flex-grow">
        <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
          <ProductDetail product={product} />
        </div>
      </main>
      <Footer />
    </div>
  );
}


