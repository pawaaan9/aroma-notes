import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { fetchProductByIdOrSlug, selectPrimaryImage, select100mlPrice } from "@/lib/sanity";
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
          <Header currentPage="products" dark />
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
        <Header currentPage="products" dark />
      </div>
      <main className="flex-grow bg-white pt-20">
        <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
          {/* Product JSON-LD structured data */}
          {(() => {
            const baseUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'http://localhost:3000';
            const urlPath = `/product-view/${product.slug?.current ?? product._id}`;
            const image = selectPrimaryImage(product) ?? '/yusuf-bhai.webp';
            const price = select100mlPrice(product);
            const offers = (price.discountPrice ?? price.originalPrice) != null ? {
              '@type': 'Offer',
              priceCurrency: 'LKR',
              price: (price.discountPrice ?? price.originalPrice) ?? undefined,
              availability: 'http://schema.org/InStock',
              url: `${baseUrl}${urlPath}`,
            } : undefined;
            const jsonLd = {
              '@context': 'https://schema.org',
              '@type': 'Product',
              name: product.name,
              image: [image],
              brand: product.brand ? { '@type': 'Brand', name: product.brand } : undefined,
              description: product.descriptionText ?? undefined,
              url: `${baseUrl}${urlPath}`,
              offers,
            };
            return (
              <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
            );
          })()}
          <ProductDetail product={product} />
        </div>
      </main>
      <Footer />
    </div>
  );
}


export async function generateMetadata(
  { params }: { params: { id: string } }
): Promise<Metadata> {
  const product = await fetchProductByIdOrSlug(params.id);
  if (!product) {
    return {
      title: 'Product not found',
      robots: { index: false, follow: false },
    };
  }
  const title = `${product.name}${product.brand ? ` by ${product.brand}` : ''}`;
  const description = product.descriptionText ?? 'Discover this artisan fragrance at Aroma Notes.';
  const image = selectPrimaryImage(product) ?? '/yusuf-bhai.webp';
  const urlPath = `/product-view/${product.slug?.current ?? product._id}`;
  return {
    title,
    description,
    alternates: { canonical: urlPath },
    openGraph: {
      title,
      description,
      type: 'website',
      url: urlPath,
      images: [
        { url: image, width: 1200, height: 630, alt: title },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [image],
    },
  };
}


