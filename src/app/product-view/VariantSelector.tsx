"use client";
import { useMemo, useState } from "react";
import type { SanityVariant } from "@/lib/sanity";
import { formatLkr } from "@/utils/currency";

type VariantSelectorProps = {
  variants: SanityVariant[];
  value?: number;
  onChange?: (index: number) => void;
};

export default function VariantSelector({ variants, value, onChange }: VariantSelectorProps) {
  const inOrder = useMemo(() => [...variants], [variants]);
  const [internalIdx, setInternalIdx] = useState(-1);
  const selectedIdx = typeof value === 'number' ? value : internalIdx;
  const selected = selectedIdx >= 0 ? inOrder[selectedIdx] ?? null : null;
  const price = selected ? (selected.discountPrice ?? selected.price ?? null) : null;
  const hasDiscount = !!selected && typeof selected.discountPrice === 'number' && typeof selected.price === 'number' && selected.discountPrice < selected.price;

  return (
    <div>
      <div className="flex flex-wrap gap-2">
        {inOrder.map((v, i) => {
          const isActive = i === selectedIdx;
          return (
            <button
              key={i}
              type="button"
              className={`px-3 py-1 rounded-full text-sm border transition-colors ${
                isActive ? "border-primary text-primary" : "border-gray-700 text-gray-200 hover:border-gray-500"
              }`}
              onClick={() => {
                setInternalIdx(i);
                onChange?.(i);
              }}
            >
              {v.size}
            </button>
          );
        })}
      </div>
      {price != null ? (
        <div className="mt-4">
          <p className="text-xl font-bold text-primary">
            {formatLkr(price)}
            {hasDiscount && selected?.price != null ? (
              <span className="ml-2 text-base font-normal text-gray-400 line-through">{formatLkr(selected.price)}</span>
            ) : null}
          </p>
        </div>
      ) : null}
    </div>
  );
}


