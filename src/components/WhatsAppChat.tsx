"use client";
import { useState } from "react";
import Image from "next/image";
import { ShoppingCart } from "lucide-react";
import WhatsAppLogo from "@/assets/whatsapp.png";

export default function WhatsAppChat() {
  const [isWhatsOpen, setIsWhatsOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const whatsappNumber = "94721922332"; // Sri Lanka number
  const whatsappLink = `https://wa.me/${whatsappNumber}`;
  const toggleWhats = () => {
    setIsWhatsOpen((prev) => {
      const next = !prev;
      if (next) setIsCartOpen(false);
      return next;
    });
  };
  const toggleCart = () => {
    setIsCartOpen((prev) => {
      const next = !prev;
      if (next) setIsWhatsOpen(false);
      return next;
    });
  };

  return (
    <>
      {/* Floating action widgets */}
      <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-3">
        {/* Cart wrapper */}
        <div className="relative">
          {isCartOpen && (
            <div className="absolute bottom-16 right-0 w-80 bg-white rounded-lg shadow-2xl overflow-hidden animate-fade-in-up">
              {/* Header */}
              <div className="bg-gradient-to-r from-amber-500 to-rose-500 text-white p-4 flex justify-between items-center">
                <div>
                  <h3 className="font-bold text-lg">Your Cart</h3>
                  <p className="text-xs text-white/80 font-saira">Review items and checkout</p>
                </div>
                <button
                  onClick={() => setIsCartOpen(false)}
                  className="text-white hover:bg-white/20 rounded p-1 transition-colors"
                  aria-label="Close cart"
                >
                  ✕
                </button>
              </div>

              {/* Cart content */}
              <div className="p-4 bg-gray-50 min-h-[160px] flex flex-col justify-between">
                <div className="space-y-3">
                  <div className="text-gray-700 text-sm font-saira">Your cart is empty.</div>
                </div>
                <a
                  href="/products"
                  className="mt-4 w-full bg-gradient-to-r from-amber-500 to-rose-500 text-white rounded-lg py-3 px-4 font-semibold hover:shadow-lg transition-all duration-300 text-center font-saira uppercase"
                >
                  Browse Products
                </a>
              </div>
            </div>
          )}
          {/* Cart button */}
          <button
            onClick={toggleCart}
            className="bg-gradient-to-r from-amber-500 to-rose-500 hover:from-amber-600 hover:to-rose-600 text-white rounded-full p-2.5 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-110 flex items-center justify-center w-14 h-14"
            title="Open cart"
            aria-expanded={isCartOpen}
            aria-controls="cart-panel"
          >
            <ShoppingCart size={28} strokeWidth={2.2} />
          </button>
        </div>

        {/* WhatsApp wrapper */}
        <div className="relative">
          {isWhatsOpen && (
            <div className="absolute bottom-16 right-0 w-80 bg-white rounded-lg shadow-2xl overflow-hidden animate-fade-in-up">
              {/* Header */}
              <div className="bg-gradient-to-r from-green-500 to-green-600 text-white p-4 flex justify-between items-center">
                <div>
                  <h3 className="font-bold text-lg">Aroma Notes</h3>
                  <p className="text-xs text-green-100 font-saira">Typically replies within minutes</p>
                </div>
                <button
                  onClick={() => setIsWhatsOpen(false)}
                  className="text-white hover:bg-green-700 rounded p-1 transition-colors"
                  aria-label="Close chat"
                >
                  ✕
                </button>
              </div>

              {/* Message Area - WhatsApp Background */}
              <div className="p-4 bg-gray-50 min-h-[200px] flex flex-col justify-between" style={{
                backgroundColor: '#ece5dd'
              }}>
                <div className="space-y-3">
                  <div className="flex justify-start">
                    <div className="bg-white rounded-lg p-3 max-w-xs text-sm shadow-sm">
                      <p className="text-gray-900 font-medium font-saira">👋 Hi, feel free to contact us if you have any questions!</p>
                    </div>
                  </div>
                </div>

                {/* Action Button */}
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 w-full bg-gradient-to-r from-green-500 to-green-600 text-white rounded-lg py-3 px-4 font-semibold hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2 text-center font-saira uppercase"
                >
                  <Image
                    src={WhatsAppLogo}
                    alt="WhatsApp"
                    width={20}
                    height={20}
                  />
                  Start Chat with us
                </a>
              </div>
            </div>
          )}
          {/* WhatsApp button */}
          <button
            onClick={toggleWhats}
            className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white rounded-full p-2.5 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-110 flex items-center justify-center w-14 h-14"
            title="Chat with us on WhatsApp"
            aria-expanded={isWhatsOpen}
            aria-controls="whatsapp-panel"
          >
            <Image
              src={WhatsAppLogo}
              alt="WhatsApp"
              width={32}
              height={32}
            />
          </button>
        </div>
      </div>
    </>
  );
}
