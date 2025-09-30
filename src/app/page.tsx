import Image from "next/image";
import ProductCard from "../components/ProductCard";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className="flex min-h-screen w-full flex-col bg-gray-900">
      <Header />
      
      <main className="flex-grow">
        {/* Hero Section with Video Background */}
        <section className="relative flex min-h-screen items-center justify-center overflow-hidden">
          {/* Video Background */}
          <video
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 w-full h-full object-cover z-0"
            style={{ objectFit: 'cover' }}
          >
            <source src="/hero-video.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          
          {/* Overlay Gradients */}
          <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/50 to-black/80 z-10"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-transparent to-transparent z-20"></div>
          
          {/* Floating Perfume Particles */}
          <div className="absolute inset-0 overflow-hidden z-30">
            <div className="absolute top-20 left-10 w-4 h-4 bg-amber-300/30 rounded-full animate-float-particle"></div>
            <div className="absolute top-40 right-20 w-3 h-3 bg-rose-300/40 rounded-full animate-float-particle delay-500"></div>
            <div className="absolute bottom-40 left-20 w-5 h-5 bg-violet-300/25 rounded-full animate-float-particle delay-1000"></div>
            <div className="absolute top-60 left-1/3 w-2 h-2 bg-emerald-300/35 rounded-full animate-float-particle delay-700"></div>
            <div className="absolute bottom-60 right-1/3 w-4 h-4 bg-orange-300/30 rounded-full animate-float-particle delay-300"></div>
            <div className="absolute top-1/3 right-10 w-3 h-3 bg-pink-300/40 rounded-full animate-float-particle delay-1200"></div>
          </div>
          
          {/* Main Content */}
          <div className="relative z-40 mx-auto max-w-5xl text-center text-white px-4">
            <div className="animate-fade-in-up">
              <div className="inline-block mb-6 px-4 py-2 bg-gradient-to-r from-amber-500/20 to-rose-500/20 rounded-full border border-amber-400/30 backdrop-blur-sm">
                <span className="text-amber-300 text-sm font-medium tracking-wider uppercase">Luxury Fragrances</span>
              </div>
              <h1 className="text-5xl font-extrabold tracking-tight sm:text-6xl md:text-7xl lg:text-8xl bg-gradient-to-r from-white via-amber-100 to-rose-100 bg-clip-text text-transparent animate-gradient-x">
                Aroma Notes
              </h1>
            </div>
            <div className="animate-fade-in-up delay-300">
              <p className="mt-8 max-w-3xl mx-auto text-xl text-gray-200 leading-relaxed font-light">
                Where every scent tells a story. Discover our exclusive collection of artisanal perfumes, 
                each bottle a masterpiece of olfactory artistry.
              </p>
            </div>
            <div className="mt-12 animate-fade-in-up delay-500">
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <a className="group inline-block rounded-full bg-gradient-to-r from-amber-500 to-rose-500 px-10 py-4 text-lg font-bold text-white shadow-2xl transition-all duration-300 hover:shadow-amber-500/25 hover:shadow-2xl hover:scale-105 hover:-translate-y-1 relative overflow-hidden" href="#products">
                  <span className="relative z-10">Explore Collection</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-rose-500 to-amber-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute inset-0 bg-white/20 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                </a>
                <a className="group inline-block rounded-full border-2 border-amber-400/50 px-10 py-4 text-lg font-semibold text-amber-300 hover:bg-amber-400/10 hover:border-amber-400 transition-all duration-300 backdrop-blur-sm" href="#about">
                  <span className="relative z-10">Our Story</span>
                </a>
              </div>
            </div>
            
            {/* Perfume Bottle Icon */}
            <div className="mt-16 animate-bounce-subtle">
              <div className="inline-block p-4 bg-gradient-to-b from-amber-500/20 to-rose-500/20 rounded-full border border-amber-400/30 backdrop-blur-sm">
                <svg className="w-8 h-8 text-amber-300" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 2.38 1.19 4.47 3 5.74V17c0 1.1.9 2 2 2h4c1.1 0 2-.9 2-2v-2.26c1.81-1.27 3-3.36 3-5.74 0-3.87-3.13-7-7-7zm2.85 11.1l-.85.6V16h-4v-2.3l-.85-.6C7.8 12.16 7 10.63 7 9c0-2.76 2.24-5 5-5s5 2.24 5 5c0 1.63-.8 3.16-2.15 4.1z"/>
                </svg>
              </div>
            </div>
          </div>
        </section>
        
        {/* Featured Collection Section */}
        <section id="products" className="py-20 sm:py-32 bg-gradient-to-b from-gray-900 to-black relative overflow-hidden">
          {/* Background Elements */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-20 left-10 w-32 h-32 bg-amber-500/5 rounded-full blur-3xl animate-float-slow"></div>
            <div className="absolute bottom-20 right-10 w-40 h-40 bg-rose-500/5 rounded-full blur-3xl animate-float-reverse"></div>
          </div>
          
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center mb-20">
              <div className="inline-block mb-6 px-6 py-3 bg-gradient-to-r from-amber-500/10 to-rose-500/10 rounded-full border border-amber-400/20 backdrop-blur-sm">
                <span className="text-amber-300 text-sm font-medium tracking-wider uppercase">Signature Collection</span>
              </div>
              <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl mb-6 animate-fade-in-up">
                Masterpiece Fragrances
              </h2>
              <p className="max-w-3xl mx-auto text-lg text-gray-300 leading-relaxed animate-fade-in-up delay-300">
                Each fragrance is a carefully crafted symphony of notes, designed to evoke emotions and create lasting memories.
              </p>
              <div className="w-32 h-1 bg-gradient-to-r from-amber-500 to-rose-500 mx-auto rounded-full mt-8 animate-fade-in-up delay-500"></div>
            </div>
            
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:gap-12">
              <ProductCard
                name="Midnight Jasmine"
                description="An intoxicating blend of jasmine sambac, sandalwood, and vanilla. A seductive fragrance that captures the essence of moonlit gardens."
                price="$185"
                imageSrc="/yusuf-bhai.webp"
                imageAlt="Midnight Jasmine luxury perfume bottle"
                delay="delay-100"
              />
              
              <ProductCard
                name="Citrus Éclat"
                description="A vibrant composition of Sicilian bergamot, blood orange, and white musk. Fresh, energizing, and perfect for any occasion."
                price="$145"
                imageSrc="/yusuf-bhai.webp"
                imageAlt="Citrus Éclat fresh perfume bottle"
                delay="delay-200"
              />
              
              <ProductCard
                name="Amber Mystique"
                description="A warm, sensual blend of amber, oud, and rose. This luxurious fragrance embodies sophistication and timeless elegance."
                price="$220"
                imageSrc="/yusuf-bhai.webp"
                imageAlt="Amber Mystique luxury perfume bottle"
                delay="delay-300"
              />
            </div>
            
            {/* Call to Action */}
            <div className="text-center mt-16 animate-fade-in-up delay-700">
              <a className="group inline-block rounded-full bg-gradient-to-r from-amber-500/20 to-rose-500/20 border border-amber-400/30 px-8 py-4 text-lg font-semibold text-amber-300 hover:bg-gradient-to-r hover:from-amber-500/30 hover:to-rose-500/30 transition-all duration-300 backdrop-blur-sm" href="/products">
                <span className="relative z-10">View All Fragrances</span>
                <div className="absolute inset-0 bg-gradient-to-r from-amber-500/10 to-rose-500/10 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </a>
            </div>
          </div>
        </section>
        
        {/* About Section */}
        <section id="about" className="py-20 sm:py-32 bg-black relative overflow-hidden">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="animate-fade-in-up">
                <div className="inline-block mb-6 px-4 py-2 bg-gradient-to-r from-amber-500/20 to-rose-500/20 rounded-full border border-amber-400/30 backdrop-blur-sm">
                  <span className="text-amber-300 text-sm font-medium tracking-wider uppercase">Our Craft</span>
                </div>
                <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl mb-6">
                  The Art of Perfumery
                </h2>
                <p className="text-lg text-gray-300 leading-relaxed mb-8">
                  At Aroma Notes, we believe that fragrance is more than just a scent—it's an expression of personality, 
                  a memory in a bottle, and a journey of the senses. Our master perfumers combine traditional techniques 
                  with innovative approaches to create unique olfactory experiences.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-amber-400 rounded-full"></div>
                    <span className="text-gray-300">Hand-selected ingredients from around the world</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-amber-400 rounded-full"></div>
                    <span className="text-gray-300">Small-batch production for exceptional quality</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-amber-400 rounded-full"></div>
                    <span className="text-gray-300">Sustainable and ethical sourcing practices</span>
                  </div>
                </div>
              </div>
              <div className="animate-fade-in-up delay-300">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-amber-500/20 to-rose-500/20 rounded-2xl blur-3xl"></div>
                  <div className="relative bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-2xl p-8 border border-amber-400/20 backdrop-blur-sm">
                    <div className="text-center">
                      <div className="inline-block p-6 bg-gradient-to-b from-amber-500/20 to-rose-500/20 rounded-full border border-amber-400/30 mb-6">
                        <svg className="w-12 h-12 text-amber-300" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 2C8.13 2 5 5.13 5 9c0 2.38 1.19 4.47 3 5.74V17c0 1.1.9 2 2 2h4c1.1 0 2-.9 2-2v-2.26c1.81-1.27 3-3.36 3-5.74 0-3.87-3.13-7-7-7zm2.85 11.1l-.85.6V16h-4v-2.3l-.85-.6C7.8 12.16 7 10.63 7 9c0-2.76 2.24-5 5-5s5 2.24 5 5c0 1.63-.8 3.16-2.15 4.1z"/>
                        </svg>
                      </div>
                      <h3 className="text-2xl font-bold text-white mb-4">Craftsmanship</h3>
                      <p className="text-gray-300">
                        Every bottle is a testament to our commitment to excellence and attention to detail.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}
