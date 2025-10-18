"use client";
import { useState } from "react";
import Image from "next/image";
import WhatsAppLogo from "@/assets/whatsapp.png";

export default function WhatsAppChat() {
  const [isOpen, setIsOpen] = useState(false);
  const whatsappNumber = "94721922332"; // Sri Lanka number
  const whatsappLink = `https://wa.me/${whatsappNumber}`;

  return (
    <>
      {/* WhatsApp Chat Widget */}
      <div className="fixed bottom-6 right-6 z-40">
        {/* Chat Box */}
        {isOpen && (
          <div className="absolute bottom-20 right-0 w-80 bg-white rounded-lg shadow-2xl overflow-hidden animate-fade-in-up">
            {/* Header */}
            <div className="bg-gradient-to-r from-green-500 to-green-600 text-white p-4 flex justify-between items-center">
              <div>
                <h3 className="font-bold text-lg">Aroma Notes</h3>
                <p className="text-xs text-green-100 font-saira">Typically replies within minutes</p>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-white hover:bg-green-700 rounded p-1 transition-colors"
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

        {/* Floating Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white rounded-full p-3 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-110 flex items-center justify-center w-16 h-16"
          title="Chat with us on WhatsApp"
        >
          <Image
            src={WhatsAppLogo}
            alt="WhatsApp"
            width={32}
            height={32}
          />
        </button>
      </div>
    </>
  );
}
