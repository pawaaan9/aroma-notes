import Header from "../../components/Header";
import Footer from "../../components/Footer";

export default function AboutPage() {
  return (
    <div className="flex min-h-screen flex-col bg-gray-900">
      <Header />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative flex min-h-[60vh] items-center justify-center bg-cover bg-center py-20 md:py-32 overflow-hidden">
          <div 
            className="absolute inset-0 bg-cover bg-center transition-transform duration-[20s] ease-out hover:scale-110"
            style={{
              backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.5) 0%, rgba(0, 0, 0, 0.7) 100%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuDX5QhdEJ-tQlzGoHnp6UgtcqsGfaue7KLgSqNWbEaQmPjj5CN7Lvh9xu9kxpnwJEfwLXIIfSqkqCltlkkrSO5xADOCHk3uoioz7r-h9bOPjSL5tzi3mk8Zhwre08RNAgw93QkoYGF7lJBDTSrzZY4drKTVabAMhwt3Zg1dZOKL13AF6tF31iNzIsl6dPdrs1bI0GK7uMr3p3SYNdSx1reHlSNnq1al3wCibpgXs7CW6UXKYAnaGGNeah4uZ5yfdGaE83ebfA9-iy4")'
            }}
          />
          
          {/* Animated background elements */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/10 rounded-full blur-3xl animate-pulse animate-float"></div>
            <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse delay-1000 animate-float-reverse"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-primary/5 rounded-full blur-2xl animate-pulse delay-500 animate-float-slow"></div>
            <div className="absolute top-1/4 right-1/4 w-32 h-32 bg-orange-500/20 rounded-full blur-xl animate-bounce delay-700"></div>
            <div className="absolute bottom-1/4 left-1/3 w-48 h-48 bg-yellow-500/10 rounded-full blur-2xl animate-ping delay-1000"></div>
          </div>
          
          {/* Floating particles */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-primary rounded-full animate-float-particle delay-300"></div>
            <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-orange-400 rounded-full animate-float-particle delay-700"></div>
            <div className="absolute bottom-1/3 left-1/2 w-1.5 h-1.5 bg-yellow-400 rounded-full animate-float-particle delay-1000"></div>
            <div className="absolute top-2/3 right-1/4 w-1 h-1 bg-primary rounded-full animate-float-particle delay-500"></div>
            <div className="absolute bottom-1/4 right-1/2 w-2 h-2 bg-orange-300 rounded-full animate-float-particle delay-1200"></div>
          </div>
          
          <div className="container mx-auto px-4 text-center text-white relative z-10">
            <div className="animate-fade-in-up">
              <h1 className="text-4xl font-extrabold font-smooch leading-tight tracking-tight md:text-6xl bg-gradient-to-r from-white via-gray-100 to-gray-300 bg-clip-text text-transparent animate-gradient-x hover:animate-pulse">
                Crafting Scents, Defining Moments
              </h1>
            </div>
            <div className="animate-fade-in-up delay-300">
              <p className="mx-auto mt-6 max-w-2xl text-lg text-white/90 leading-relaxed font-poppins animate-typewriter">
                At Aroma Essence, fragrance is more than a scent; it&apos;s an expression of individuality, a memory in the making, and a journey of the senses.
              </p>
            </div>
            <div className="animate-fade-in-up delay-500">
              <button className="mt-8 group inline-block rounded-lg bg-gradient-to-r from-primary to-orange-600 px-8 py-4 text-base font-bold font-poppins text-white shadow-2xl transition-all duration-300 hover:shadow-primary/25 hover:shadow-2xl hover:scale-110 hover:-translate-y-2 relative overflow-hidden animate-bounce-subtle">
                <span className="relative z-10 flex items-center gap-2">
                  Explore Our Collection
                  <svg className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-orange-600 to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute inset-0 bg-white/20 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
              </button>
            </div>
          </div>
        </section>

        {/* Our Story Section */}
        <section className="py-16 sm:py-24 bg-gray-900">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
              <div className="space-y-6 animate-fade-in-up">
                <h2 className="text-3xl font-bold font-smooch tracking-tight text-white sm:text-4xl">
                  Our Story
                </h2>
                <p className="text-lg text-gray-300 leading-relaxed font-poppins">
                  Founded in 2010 by renowned perfumer, Isabella Rossi, Aroma Essence was born from a passion for creating exceptional fragrances that capture the essence of life&apos;s most precious moments. Inspired by nature&apos;s beauty and the art of perfumery, Isabella embarked on a mission to redefine luxury scents, blending traditional techniques with modern innovation.
                </p>
                <div className="flex items-center gap-4 pt-4">
                  <div className="h-1 w-16 bg-gradient-to-r from-primary to-orange-600 rounded-full"></div>
                  <span className="text-sm text-gray-400 font-medium">Since 2010</span>
                </div>
              </div>
              <div className="animate-fade-in-up delay-300">
                <div className="h-80 w-full overflow-hidden rounded-xl shadow-2xl group">
                  <div 
                    className="h-full w-full bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                    style={{
                      backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCrQPLBdY6vvKhEVW1qYvK0Cwe39XP_qw_hpkD3ZoA9R5c6eC6LkilmZfgPp7w-ZDwF8CpOopwQ5rXawf0Gpgh9wkMt1GqZ1Xo4LsLrpmUy_-qEwvoSHjZ3OOurkBP_RudEQmtiMtes6Xj1p81P08tKh5_3SJbU2yPl_bF2EdYfQEY3-yAipxjXneF6SvSNmsOqEU7UG-0_WetLTh_zsH2DYQTUdVQiby332_IWZMmyQ50qzc-wBYq2ENwsCq1JQNE8-j-0412JQjM")'
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="bg-gray-800 py-16 sm:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center mb-16">
              <div className="animate-fade-in-up">
                <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl mb-4">
                  Our Values
                </h2>
                <div className="w-24 h-1 bg-gradient-to-r from-primary to-orange-600 mx-auto rounded-full mb-6"></div>
              </div>
              <div className="animate-fade-in-up delay-300">
                <p className="text-lg text-gray-300 leading-relaxed">
                  At Aroma Essence, our values are the cornerstone of everything we do. We are dedicated to crafting exceptional fragrances that embody elegance, sophistication, and timeless allure.
                </p>
              </div>
            </div>
            
            <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
              <div className="group flex flex-col items-center gap-6 rounded-xl bg-gray-900/50 p-8 text-center shadow-xl transition-all duration-500 hover:shadow-2xl hover:shadow-primary/20 hover:scale-110 hover:-translate-y-3 animate-fade-in-up delay-100 hover:bg-gray-800/60 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-orange-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-primary/20 to-orange-600/20 text-primary transition-all duration-500 group-hover:scale-125 group-hover:rotate-12 group-hover:bg-gradient-to-br group-hover:from-primary/30 group-hover:to-orange-600/30 relative z-10 animate-spin-slow">
                  <svg fill="currentColor" height="28" viewBox="0 0 256 256" width="28" xmlns="http://www.w3.org/2000/svg" className="group-hover:animate-pulse">
                    <path d="M223.45,40.07a8,8,0,0,0-7.52-7.52C139.8,28.08,78.82,51,52.82,94a87.09,87.09,0,0,0-12.76,49c.57,15.92,5.21,32,13.79,47.85l-19.51,19.5a8,8,0,0,0,11.32,11.32l19.5-19.51C81,210.73,97.09,215.37,113,215.94q1.67.06,3.33.06A86.93,86.93,0,0,0,162,203.18C205,177.18,227.93,116.21,223.45,40.07ZM153.75,189.5c-22.75,13.78-49.68,14-76.71.77l88.63-88.62a8,8,0,0,0-11.32-11.32L65.73,179c-13.19-27-13-54,.77-76.71,22.09-36.47,74.6-56.44,141.31-54.06C210.2,114.89,190.22,167.41,153.75,189.5Z"></path>
                  </svg>
                  <div className="absolute inset-0 rounded-full border-2 border-primary/30 group-hover:border-primary/60 transition-colors duration-300 animate-ping"></div>
                </div>
                <h3 className="text-xl font-bold text-white group-hover:text-primary transition-all duration-300 relative z-10 group-hover:scale-105">
                  Sustainability
                </h3>
                <p className="text-gray-300 leading-relaxed group-hover:text-gray-200 transition-colors duration-300 relative z-10">
                  We are committed to sustainable practices, sourcing our ingredients responsibly and minimizing our environmental impact.
                </p>
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary to-orange-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
              </div>
              
              <div className="group flex flex-col items-center gap-6 rounded-xl bg-gray-900/50 p-8 text-center shadow-xl transition-all duration-500 hover:shadow-2xl hover:shadow-primary/20 hover:scale-110 hover:-translate-y-3 animate-fade-in-up delay-200 hover:bg-gray-800/60 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-orange-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-primary/20 to-orange-600/20 text-primary transition-all duration-500 group-hover:scale-125 group-hover:rotate-12 group-hover:bg-gradient-to-br group-hover:from-primary/30 group-hover:to-orange-600/30 relative z-10 animate-spin-slow">
                  <svg fill="currentColor" height="28" viewBox="0 0 256 256" width="28" xmlns="http://www.w3.org/2000/svg" className="group-hover:animate-pulse">
                    <path d="M221.69,199.77,160,96.92V40h8a8,8,0,0,0,0-16H88a8,8,0,0,0,0,16h8V96.92L34.31,199.77A16,16,0,0,0,48,224H208a16,16,0,0,0,13.72-24.23ZM110.86,103.25A7.93,7.93,0,0,0,112,99.14V40h32V99.14a7.93,7.93,0,0,0,1.14,4.11L183.36,167c-12,2.37-29.07,1.37-51.75-10.11-15.91-8.05-31.05-12.32-45.22-12.81ZM48,208l28.54-47.58c14.25-1.74,30.31,1.85,47.82,10.72,19,9.61,35,12.88,48,12.88a69.89,69.89,0,0,0,19.55-2.7L208,208Z"></path>
                  </svg>
                  <div className="absolute inset-0 rounded-full border-2 border-primary/30 group-hover:border-primary/60 transition-colors duration-300 animate-ping"></div>
                </div>
                <h3 className="text-xl font-bold text-white group-hover:text-primary transition-all duration-300 relative z-10 group-hover:scale-105">
                  Quality
                </h3>
                <p className="text-gray-300 leading-relaxed group-hover:text-gray-200 transition-colors duration-300 relative z-10">
                  We use only the finest, ethically sourced ingredients, ensuring the highest quality and longevity of our fragrances.
                </p>
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary to-orange-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
              </div>
              
              <div className="group flex flex-col items-center gap-6 rounded-xl bg-gray-900/50 p-8 text-center shadow-xl transition-all duration-500 hover:shadow-2xl hover:shadow-primary/20 hover:scale-110 hover:-translate-y-3 animate-fade-in-up delay-300 hover:bg-gray-800/60 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-orange-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-primary/20 to-orange-600/20 text-primary transition-all duration-500 group-hover:scale-125 group-hover:rotate-12 group-hover:bg-gradient-to-br group-hover:from-primary/30 group-hover:to-orange-600/30 relative z-10 animate-spin-slow">
                  <svg fill="currentColor" height="28" viewBox="0 0 256 256" width="28" xmlns="http://www.w3.org/2000/svg" className="group-hover:animate-pulse">
                    <path d="M178,32c-20.65,0-38.73,8.88-50,23.89C116.73,40.88,98.65,32,78,32A62.07,62.07,0,0,0,16,94c0,70,103.79,126.66,108.21,129a8,8,0,0,0,7.58,0C136.21,220.66,240,164,240,94A62.07,62.07,0,0,0,178,32ZM128,206.8C109.74,196.16,32,147.69,32,94A46.06,46.06,0,0,1,78,48c19.45,0,35.78,10.36,42.6,27a8,8,0,0,0,14.8,0c6.82-16.67,23.15-27,42.6-27a46.06,46.06,0,0,1,46,46C224,147.61,146.24,196.15,128,206.8Z"></path>
                  </svg>
                  <div className="absolute inset-0 rounded-full border-2 border-primary/30 group-hover:border-primary/60 transition-colors duration-300 animate-ping"></div>
                </div>
                <h3 className="text-xl font-bold text-white group-hover:text-primary transition-all duration-300 relative z-10 group-hover:scale-105">
                  Passion
                </h3>
                <p className="text-gray-300 leading-relaxed group-hover:text-gray-200 transition-colors duration-300 relative z-10">
                  Our passion for perfumery drives us to create unique and captivating scents that evoke emotions and leave a lasting impression.
                </p>
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary to-orange-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 sm:py-24 bg-gray-900 relative overflow-hidden">
          {/* Background animation */}
          <div className="absolute inset-0">
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-primary/5 via-transparent to-orange-600/5 animate-pulse"></div>
          </div>
          
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
              <div className="group text-center animate-fade-in-up delay-100 hover:scale-110 transition-all duration-500 cursor-pointer">
                <div className="relative">
                  <div className="text-4xl font-bold text-primary mb-2 group-hover:text-orange-400 transition-colors duration-300 animate-count-up">14+</div>
                  <div className="absolute inset-0 text-4xl font-bold text-primary/20 mb-2 animate-pulse">14+</div>
                </div>
                <div className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-300">Years of Excellence</div>
                <div className="mt-2 w-0 h-0.5 bg-gradient-to-r from-primary to-orange-600 group-hover:w-full transition-all duration-500 mx-auto"></div>
              </div>
              
              <div className="group text-center animate-fade-in-up delay-200 hover:scale-110 transition-all duration-500 cursor-pointer">
                <div className="relative">
                  <div className="text-4xl font-bold text-primary mb-2 group-hover:text-orange-400 transition-colors duration-300 animate-count-up">50+</div>
                  <div className="absolute inset-0 text-4xl font-bold text-primary/20 mb-2 animate-pulse">50+</div>
                </div>
                <div className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-300">Unique Fragrances</div>
                <div className="mt-2 w-0 h-0.5 bg-gradient-to-r from-primary to-orange-600 group-hover:w-full transition-all duration-500 mx-auto"></div>
              </div>
              
              <div className="group text-center animate-fade-in-up delay-300 hover:scale-110 transition-all duration-500 cursor-pointer">
                <div className="relative">
                  <div className="text-4xl font-bold text-primary mb-2 group-hover:text-orange-400 transition-colors duration-300 animate-count-up">100K+</div>
                  <div className="absolute inset-0 text-4xl font-bold text-primary/20 mb-2 animate-pulse">100K+</div>
                </div>
                <div className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-300">Happy Customers</div>
                <div className="mt-2 w-0 h-0.5 bg-gradient-to-r from-primary to-orange-600 group-hover:w-full transition-all duration-500 mx-auto"></div>
              </div>
              
              <div className="group text-center animate-fade-in-up delay-500 hover:scale-110 transition-all duration-500 cursor-pointer">
                <div className="relative">
                  <div className="text-4xl font-bold text-primary mb-2 group-hover:text-orange-400 transition-colors duration-300 animate-count-up">25+</div>
                  <div className="absolute inset-0 text-4xl font-bold text-primary/20 mb-2 animate-pulse">25+</div>
                </div>
                <div className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-300">Countries Served</div>
                <div className="mt-2 w-0 h-0.5 bg-gradient-to-r from-primary to-orange-600 group-hover:w-full transition-all duration-500 mx-auto"></div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}
