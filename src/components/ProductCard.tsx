import Image from "next/image";

interface ProductCardProps {
  name: string;
  description?: string;
  price: string;
  imageSrc: string;
  imageAlt: string;
  delay?: string;
  showQuickAdd?: boolean;
}

export default function ProductCard({ 
  name, 
  description, 
  price, 
  imageSrc, 
  imageAlt, 
  delay = "delay-100",
  showQuickAdd = false
}: ProductCardProps) {
  if (showQuickAdd) {
    // Products page layout with Quick Add button
    return (
      <div className={`group relative animate-fade-in-up ${delay}`}>
        <div className="aspect-[3/4] w-full overflow-hidden rounded-lg bg-gray-200 shadow-xl transition-all duration-300 group-hover:shadow-2xl group-hover:shadow-primary/10">
          <Image
            alt={imageAlt}
            className="h-full w-full object-cover object-center transition-transform duration-300 group-hover:scale-105"
            src={imageSrc}
            width={400}
            height={533}
          />
          
          {/* Quick Add Button */}
          <button className="absolute bottom-20 right-4 hidden rounded-lg bg-primary/80 px-3 py-2 text-xs font-bold text-white opacity-0 backdrop-blur-sm transition-all duration-300 group-hover:bottom-24 group-hover:opacity-100 group-hover:block hover:bg-primary hover:scale-105">
            Quick Add
          </button>
        </div>
        
        <div className="mt-4 flex items-start justify-between gap-4">
          <div>
            <h3 className="text-base font-semibold text-white group-hover:text-primary transition-colors duration-300">
              {name}
            </h3>
            <p className="mt-1 text-sm text-primary font-medium">
              {price}
            </p>
          </div>
        </div>
      </div>
    );
  }

  // Home page layout with overlay details
  return (
    <div className={`group relative animate-fade-in-up ${delay}`}>
      <div className="aspect-[4/5] w-full overflow-hidden rounded-xl bg-gray-200 shadow-2xl transition-all duration-500 group-hover:shadow-primary/20 group-hover:shadow-2xl">
        <div className="relative overflow-hidden h-full">
          <Image
            alt={imageAlt}
            className="h-full w-full object-cover object-center transition-all duration-500 group-hover:scale-110 group-hover:rotate-1"
            src={imageSrc}
            width={300}
            height={375}
          />
          
          {/* Product Details Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500">
            <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-8 group-hover:translate-y-0 transition-all duration-500">
              <h3 className="text-xl font-bold text-white mb-2 group-hover:text-primary transition-colors duration-300">
                {name}
              </h3>
              <p className="text-sm text-gray-300 mb-4 leading-relaxed">
                {description}
              </p>
              <div className="flex items-center justify-between">
                <p className="text-2xl font-bold text-primary group-hover:scale-110 transition-transform duration-300">
                  {price}
                </p>
                <button className="bg-primary/90 hover:bg-primary text-white font-semibold py-2 px-6 rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/25">
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
          
          {/* Subtle overlay for better text readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </div>
      </div>
    </div>
  );
}
