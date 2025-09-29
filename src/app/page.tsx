import Image from "next/image";
import ProductCard from "../components/ProductCard";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className="flex min-h-screen w-full flex-col bg-gray-900">
      <Header />
      
      <main className="flex-grow">
        <section className="relative flex min-h-[60vh] items-center justify-center bg-hero-image bg-cover bg-center py-20 md:min-h-[80vh] overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/50 to-black/70"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-transparent to-transparent"></div>
          
          {/* Animated background elements */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
          </div>
          
          <div className="relative z-10 mx-auto max-w-4xl text-center text-white">
            <div className="animate-fade-in-up">
              <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl bg-gradient-to-r from-white via-gray-100 to-gray-300 bg-clip-text text-transparent animate-gradient-x">
                Discover Your Signature Scent
              </h1>
            </div>
            <div className="animate-fade-in-up delay-300">
              <p className="mt-6 max-w-2xl mx-auto text-lg text-gray-200 leading-relaxed">
                Explore our curated collection of exquisite fragrances, crafted with passion and precision.
              </p>
            </div>
            <div className="mt-10 animate-fade-in-up delay-500">
              <a className="group inline-block rounded-lg bg-gradient-to-r from-primary to-orange-600 px-8 py-4 text-base font-bold text-white shadow-2xl transition-all duration-300 hover:shadow-primary/25 hover:shadow-2xl hover:scale-105 hover:-translate-y-1 relative overflow-hidden" href="#">
                <span className="relative z-10">Shop Now</span>
                <div className="absolute inset-0 bg-gradient-to-r from-orange-600 to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute inset-0 bg-white/20 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
              </a>
            </div>
          </div>
        </section>
        
        <section className="py-16 sm:py-24 bg-gray-900">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl mb-4 animate-fade-in-up">
                Featured Fragrances
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-primary to-orange-600 mx-auto rounded-full animate-fade-in-up delay-300"></div>
            </div>
            <div className="mt-12 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
              <ProductCard
                name="Midnight Bloom"
                description="A captivating blend of jasmine and sandalwood."
                price="$120"
                imageSrc="https://lh3.googleusercontent.com/aida-public/AB6AXuDVqrDVf4jllOvpD1dea6UbMW4W8f0TxqzfFHm8pMfWQ2CRTpkGHLCycPnG0FUIHt-OpydPWHZX1WzXDsCfvycRUptWHmA_omPbcGJg7n_7yEdJMr6frbIKvJ8RsE2BJVPIkzB0hU_qy4G6V2lp3so2QoQ7gnm0uxQzHEhO0EbuN6kRg0P7hQZKC00lnnDbK55eosl6u2--dE8qfbGHuCjdKA7OYVvF0Gn-CKruh-gIv4nKB3RtttlTW2FBlShhkhPgdpmFP4SUde0"
                imageAlt="Midnight Bloom perfume bottle"
                delay="delay-100"
              />
              
              <ProductCard
                name="Citrus Burst"
                description="A refreshing mix of orange and bergamot."
                price="$95"
                imageSrc="https://lh3.googleusercontent.com/aida-public/AB6AXuCxkBYWjH87DS0NVPpvZg-3CHu81S_TGbDmS4F9NRTyUkWbFXky38trjna4mnKVZBPPfdJJ43eI4QuzkL9SfDT0IFumJQ1TF2rQtaXMaXhS3-Gl36mZA4ETThuNDUB_KMo5Kd8ABUs5wUffji1RmrAileWQdC_Pp4jfMaEqNfEvEkJ1bZQITMDDlUhfc2k38nDIz3RCSuWs9J7m8UdlVJcHIf8dWxeqJsC7wxBUfgUDt9FmKrWXfWqbrYM5Fo-2OUP9zuKDfh6PTZU"
                imageAlt="Citrus Burst perfume bottle"
                delay="delay-200"
              />
              
              <ProductCard
                name="Velvet Dusk"
                description="A warm and sensual aroma with notes of amber."
                price="$150"
                imageSrc="https://lh3.googleusercontent.com/aida-public/AB6AXuD5GeAvsjhcMngWuXUSEcw3kvnbI8KhyyIAQ7RL7tsTXlGjmJuOWKTm4qrsoU5xH62BxXdWvGzkzQEWrG6oPC1xqLjaYk1qYAMbcJxK3ccRhCtJJ_aixTvxUo3DwkaWitejuvnDXGWXAfp7vieWr_DfsyGVCMMsbqw6kRkobn3cQ1dKROnn7XUghY17--pGZHbO7FR0Q3BHyZAOTlkaVJkosxV_9g4VjwXsGLRVmO5vbyWbT_bb-Hm0QzL28Co5LkT22HYNWQTRcYU"
                imageAlt="Velvet Dusk perfume bottle"
                delay="delay-300"
              />
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}
