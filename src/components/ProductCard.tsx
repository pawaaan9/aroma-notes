"use client";
import Image from "next/image";
import Link from "next/link";

interface ProductCardProps {
  name: string;
  description?: string;
  price: string;
  imageSrc: string;
  imageAlt: string;
  delay?: string;
  showQuickAdd?: boolean;
  href?: string;
}

export default function ProductCard({ 
  name, 
  description, 
  price, 
  imageSrc, 
  imageAlt, 
  delay = "delay-100",
  showQuickAdd = false,
  href
}: ProductCardProps) {
  if (showQuickAdd) {
    // Products page layout with Quick Add button
    const CardInner = (
      <div className={`group relative animate-fade-in-up ${delay}`}>
        <div className="aspect-[3/4] w-full overflow-hidden rounded-lg bg-gray-200 shadow-xl transition-all duration-300 group-hover:shadow-2xl group-hover:shadow-primary/10">
          <Image
            alt={imageAlt}
            className="h-full w-full object-cover object-center transition-transform duration-300"
            src={imageSrc}
            width={400}
            height={533}
          />
          {/* Removed floating view pill on hover over image */}
        </div>
        <div className="mt-4 flex items-start justify-between gap-4">
          <div>
            <h3 className="text-base font-semibold text-gray-900 group-hover:text-primary transition-colors duration-300">
              {name}
            </h3>
            <p className="mt-1 text-sm text-primary font-medium">
              {price}
            </p>
          </div>
        </div>
      </div>
    );
    if (href) {
      return <Link href={href} className="block">{CardInner}</Link>;
    }
    return CardInner;
  }

  // Home page layout with overlay details
  const CardInner = (
    <div className={`group relative animate-fade-in-up ${delay}`}> 
      {/* Hover gradient frame using brand colors */}
      <div className="pointer-events-none absolute -inset-0.5 rounded-2xl bg-gradient-to-br from-amber-500/40 to-rose-500/40 opacity-0 blur-sm transition-opacity duration-300 group-hover:opacity-100"></div>
      <div className="relative rounded-xl border border-gray-200 bg-white shadow-sm transition-all duration-300 transform group-hover:shadow-lg group-hover:shadow-amber-500/20 group-hover:border-amber-400/60 group-hover:-translate-y-1">
      <div className="aspect-[4/5] w-full overflow-hidden rounded-t-xl bg-gray-100">
        <div className="relative overflow-hidden h-full">
          <Image
            alt={imageAlt}
            className="h-full w-full object-cover object-center transition-all duration-500"
            src={imageSrc}
            width={300}
            height={375}
          />
          {/* Overlay disabled on all viewports since details are below image */}
          <div className="hidden"></div>
          <div className="hidden"></div>
        </div>
      </div>
      {/* Details below image (all viewports) */}
      <div className="p-4 space-y-2">
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 sm:gap-4">
          <div>
            <h3 className="text-lg font-semibold text-gray-900">
              {name}
            </h3>
            {description ? (
              <p className="mt-1 text-sm text-gray-600 line-clamp-2">
                {description}
              </p>
            ) : null}
          </div>
          <p className="text-base font-bold text-primary mt-2 sm:mt-1 sm:text-right sm:whitespace-nowrap">{price}</p>
        </div>
        <div className="pt-1">
          <div className="group w-full inline-flex items-center justify-center gap-2 rounded-full border-2 border-amber-400/60 bg-white text-amber-700 font-semibold py-2.5 px-4 transition-all duration-300 hover:border-rose-400 hover:text-rose-600">
            <span>View</span>
            <svg className="h-4 w-4 transition-transform group-hover:translate-x-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14" />
              <path d="M12 5l7 7-7 7" />
            </svg>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
  if (href) {
    return <Link href={href} className="block">{CardInner}</Link>;
  }
  return CardInner;
}
