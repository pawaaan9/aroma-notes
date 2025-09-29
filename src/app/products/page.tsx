import ProductCard from "../../components/ProductCard";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

export default function ProductsPage() {
  const products = [
    {
      name: "Midnight Bloom",
      price: "$85",
      imageSrc: "https://lh3.googleusercontent.com/aida-public/AB6AXuAGqiYucq73_yJn2PupiLbEySnPDeqYx2iEpKq-Hh6fy7aNycIH912uJ-F0Y96SZb-bqN6QMVV4hnTJpq7oxXuxS2Y4pa3EgX1QTa1JvkmDvmCoektRBXBprSDQd33ghAxupeNODWxuc12dhDIJ2mJeH4e26An2b07kcmb2p5JazXQtA5IG1qSKDkM1a7XVsS7eUBy4GtQpebSamPsiheTd6TXJyExffI-SUr79B1US0B2Sd7f2Kiq2GCBPyuiC6BLID_fDSgB4nCc",
      imageAlt: "Midnight Bloom"
    },
    {
      name: "Citrus Burst",
      price: "$75",
      imageSrc: "https://lh3.googleusercontent.com/aida-public/AB6AXuCJYqAOiLorIR4NwVxxXve_yml6b3eTAwL0A7C-r-BFuohTawuNC-lY8oiExaSiEq2OxBnTdLMB6mihGS6gMBybKQX56UALWhjCykHqNqNIz25kfcKq5tX3EGuUPpAu8h5wIDt-FjKlUah2PE6fI9FrfMhCk-5XE6anrGwtr2uj3AG2qBBD1pAI-E3kAoX_W3LN9y8pgfINMuaFYvjBfo6-qG2rbWqYpsq_cFR3vJI_AaQJZQFQv61YjGEP64C5UemvmZhqzvR7hmg",
      imageAlt: "Citrus Burst"
    },
    {
      name: "Velvet Dusk",
      price: "$95",
      imageSrc: "https://lh3.googleusercontent.com/aida-public/AB6AXuA0Lm3W20lcqrBHfbhuVHu-ErMwmMORc1hb3YbGgZ-VeILt8owB4IeuFOQ7VbMo_--Y3cPikG6778yLT--sG7kgLnzxjM_2Hnh-cDU8zLGGYfmApWKDQR0lsMHXjr8TUDhnuP2G2ApqXBWNJbz_QucxSR7TTCxqeBTFXGGF-Zy7aOjN3jcNAqp0AoQntYRJFGYojzKcqjgU4LKz62UJewYGvsXrwh7updrMfNOFJntdltUzuLrtP6c9zZz6au-7ZwMu5X4xMaePxUI",
      imageAlt: "Velvet Dusk"
    },
    {
      name: "Ocean Breeze",
      price: "$65",
      imageSrc: "https://lh3.googleusercontent.com/aida-public/AB6AXuCyZTtm8hPTlZTIxO3ozUxrsBEKXNFanTc-Zyz24AVdu7fT-H_QcEhjvelDpgBC2XgJTOEiv7NC9GyzNupzntz5zx7YqUsU1S168x-inl_fkkqav9axZPZ0pNeWjyIa-OCEI7t03ZNK30lM0UuCiNZIDQfG27nAB1eEGUaSLe8nM1gYNiUCiybnQ4rddvY3dhOekK87UBgEiDp_CyMjWwnMZpP8ZR5pwVXaIfAn2C9SvtfgSBQYgXA93r5AhxNAUeHb_XptMYqG9rc",
      imageAlt: "Ocean Breeze"
    },
    {
      name: "Spiced Amber",
      price: "$105",
      imageSrc: "https://lh3.googleusercontent.com/aida-public/AB6AXuCF-CFcnNquNIsqQMm-UOMRXbRK0E90yLEpADRRW5ESZ090UwObpzVv_l8m35LNduLxRz7HMutKrYEH06ny8wFQElZ0M0EugMUheMBbuPhRKvXNFQi6MzPSguQeNB3utirgHY3RUj7MpOCAve-KoH6voRUqOysCRq2H5Tw6ZfM__BoDmrlr222xDOj-4GYxPNDAOhjZUcyT9uB9Y8gz1GXAo6054jwVPbyJ9iVOwkYOwmiG3HeDDZkW7rYtsMjWTZIMjCHGkebHHyU",
      imageAlt: "Spiced Amber"
    },
    {
      name: "Floral Whisper",
      price: "$80",
      imageSrc: "https://lh3.googleusercontent.com/aida-public/AB6AXuDYVyyZPfmf9kbngIJoFjEuMTo9dGH1TlvcCwa4M2kreX6Yr1o2YYOXr7oEVKpDulq7OtP7X8uLlgGn7PCP3I6_3g-FiQ8dGsHrwct5QKuyo-0jzsYYn5KxxVWRxxkZIRru7WiqIbSiRGvEPu5PeIW4f2rJnK24-P50SKf3jrlZa53eCFkD9ZW4R_XPcpbFTR9zwqqrA-VpxFwdEc0Sdv3RQU8VjIZ_slBayxjTYV2sI20Aorc6MYQHY7wWq0kK6Lj0GtF1jrducqg",
      imageAlt: "Floral Whisper"
    },
    {
      name: "Woodland Trail",
      price: "$90",
      imageSrc: "https://lh3.googleusercontent.com/aida-public/AB6AXuCQlG7S85SoeCCRTFI6IpQRaxp-Gday0mlQnKVSFUVaoM85rrNFwMLwsIk7PUHkTGstTiwod_5fqxt7kHEsTgWp_iVRks4X6EGfxvAZQN1vBGfwaKxlVQhRguyUSmjXkz_Ds46PL3AppFK5UXDlfjdcNqvc-CwskjKhydahZnx01x1FpVPWJi-XDOepAmNrLuGDn-rWaKpxZ_TtCdAbhRoPZjEA_EVVMnFPLp5Ip_13dR9HJ7spRwYe-Sa6wY6YC3pg5tZPCqrO-Xc",
      imageAlt: "Woodland Trail"
    },
    {
      name: "Desert Mirage",
      price: "$70",
      imageSrc: "https://lh3.googleusercontent.com/aida-public/AB6AXuCrfui2mS4Yl9juz_gGzXGEjdjKXjlvdrspZyP8mCZwQyvwqfzhmEESdp6Vuef_i1IuEJfnC_u1W0GUVK4kxSQtn7b7nkPcwVWtgsgHBzUILd-jUi0aEEChEjGtgR4TZ6hWeE4Ezjs-06v9alm5307HifYGiEL-xAUppEjVwlDFn_c9VoEtvFW6gXSXSkq1j7r9lpOeutI07f6F7RuTATQWUBIWx-FHqoa8EiFRCxXSP0l8c1quImt0wkv5hdZPKnOblGVn9tcV7vc",
      imageAlt: "Desert Mirage"
    }
  ];

  return (
    <div className="flex min-h-screen flex-col bg-gray-900">
      <Header />
      <main className="flex-grow">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl animate-fade-in-up">
              Shop Our Collection
            </h2>
            <div className="mt-6 flex flex-wrap gap-2 animate-fade-in-up delay-300">
              <button className="rounded-full bg-primary px-4 py-2 text-sm font-medium text-white transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/25">
                All
              </button>
              <button className="rounded-full bg-gray-800/50 px-4 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700/50 hover:text-white transition-all duration-300 hover:scale-105">
                Perfume
              </button>
              <button className="rounded-full bg-gray-800/50 px-4 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700/50 hover:text-white transition-all duration-300 hover:scale-105">
                Candles
              </button>
              <button className="rounded-full bg-gray-800/50 px-4 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700/50 hover:text-white transition-all duration-300 hover:scale-105">
                Diffusers
              </button>
            </div>
          </div>
          
          <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
            {products.map((product, index) => (
              <ProductCard
                key={product.name}
                name={product.name}
                price={product.price}
                imageSrc={product.imageSrc}
                imageAlt={product.imageAlt}
                delay={`delay-${(index + 1) * 100}`}
                showQuickAdd={true}
              />
            ))}
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}
