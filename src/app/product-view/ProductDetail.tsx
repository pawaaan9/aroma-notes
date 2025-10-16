"use client";
import Image from "next/image";
import { useMemo, useState } from "react";
import type { SanityProduct } from "@/lib/sanity";
import VariantSelector from "./VariantSelector";

type Props = {
  product: SanityProduct;
};

export default function ProductDetail({ product }: Props) {
  const variants = useMemo(() => product.variants ?? [], [product]);
  const [selectedIdx, setSelectedIdx] = useState<number>(-1);

  const selected = selectedIdx >= 0 ? (variants[selectedIdx] ?? null) : null;
  const imageSrc = selected?.photoUrl || product.coverImageUrl || "/yusuf-bhai.webp";

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
      <div className="rounded-xl overflow-hidden bg-gray-800/40 border border-gray-700">
        <Image
          alt={product.name}
          src={imageSrc}
          width={800}
          height={1000}
          className="w-full h-auto object-cover"
        />
      </div>
      <div>
        <h1 className="text-3xl font-bold text-white">{product.name}</h1>
        {product.brand ? (
          <p className="text-sm text-gray-300 mt-1">{product.brand}</p>
        ) : null}

        {variants.length ? (
          <div className="mt-8">
            <h2 className="text-white font-semibold mb-3">AvailableSizes</h2>
            <VariantSelector variants={variants} value={selectedIdx} onChange={setSelectedIdx} />
          </div>
        ) : null}

        {product.descriptionText ? (
          <div className="mt-10">
            <h3 className="text-white font-semibold mb-3">Description</h3>
            <p className="text-gray-300 leading-relaxed whitespace-pre-wrap">
              {product.descriptionText}
            </p>
          </div>
        ) : null}

        {product.mainAccords?.length ? (
          <div className="mt-10">
            <h3 className="text-white font-semibold mb-3">Main Accords</h3>
            <div className="flex flex-wrap gap-3">
              {product.mainAccords?.map((a, i) => (
                <div key={i} className="px-3 py-1 rounded-full text-sm border border-gray-700 text-gray-200 flex items-center gap-2">
                  <span
                    className="inline-block w-2 h-2 rounded-full"
                    style={{ backgroundColor: a?.color?.hex || '#999' }}
                  />
                  <span>{a?.name}</span>
                  {typeof a?.percentage === 'number' ? (
                    <span className="text-gray-400">{` ${a?.percentage}%`}</span>
                  ) : null}
                </div>
              ))}
            </div>
          </div>
        ) : null}

        <div className="mt-10">
          <button className="bg-primary/90 hover:bg-primary text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/25">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}


