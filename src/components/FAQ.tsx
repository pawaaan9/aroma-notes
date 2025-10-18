"use client";
import { useState } from "react";

interface FAQItem {
  question: string;
  answer: string;
}

const faqItems: FAQItem[] = [
  {
    question: "What makes Aroma Notes fragrances unique?",
    answer: "Aroma Notes is a luxury fragrance house imported to Sri Lanka by Yusuf Bhai. Each fragrance features world-class compositions inspired by high-end niche perfumes, crafted with premium oils and exceptional precision. Our commitment to quality ensures every bottle delivers an authentic luxury experience with outstanding longevity."
  },
  {
    question: "How long do the fragrances last?",
    answer: "Our fragrances are formulated for exceptional longevity, typically lasting 6 to 8 hours on the skin. The exact duration depends on your body chemistry and application method. For extended wear, we recommend reapplying throughout the day or using our complementary products."
  },
  {
    question: "Are all Aroma Notes fragrances imported?",
    answer: "Yes, Aroma Notes is an imported luxury fragrance house exclusively brought to Sri Lanka by Yusuf Bhai. All our fragrances feature world-class compositions and premium ingredients sourced internationally, ensuring authentic quality and exceptional performance."
  },
  {
    question: "Do you offer samples or testers?",
    answer: "Yes, we offer fragrance samples for many of our collections, allowing you to experience the luxury before committing to a full bottle. Contact us through WhatsApp to request samples or discuss fragrance consultations with our team."
  },
  {
    question: "Can I return or exchange a fragrance?",
    answer: "We want you to be completely satisfied with your purchase. Please contact our customer service team within 30 days of purchase for return or exchange options. Check our Exchange Policy for complete details."
  },
  {
    question: "How should I store my fragrance?",
    answer: "Store your fragrance in a cool, dark place away from direct sunlight and heat. The ideal storage temperature is between 15 to 25 degrees Celsius. Avoid storing in bathrooms due to humidity, as this can affect the fragrance's integrity and longevity."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 sm:py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="mx-auto max-w-none px-4 sm:px-6 lg:px-[5vw]">
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center mb-16">
          <div className="animate-fade-in-up">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-4">
              Frequently Asked Questions
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-amber-500 to-rose-500 mx-auto rounded-full mb-6"></div>
          </div>
          <div className="animate-fade-in-up delay-300">
            <p className="text-lg text-gray-700 leading-relaxed">
              Find answers to common questions about our fragrances, ordering, and care.
            </p>
          </div>
        </div>

        {/* FAQ Items */}
        <div className="mx-auto max-w-3xl space-y-4">
          {faqItems.map((item, index) => (
            <div
              key={index}
              className="group border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 animate-fade-in-up"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              {/* FAQ Question - Clickable Header */}
              <button
                onClick={() => toggleItem(index)}
                className="w-full px-6 py-5 flex items-center justify-between bg-white hover:bg-gray-50 transition-colors duration-200 text-left"
              >
                <h3 className="text-lg font-semibold text-gray-900 group-hover:text-amber-600 transition-colors duration-200">
                  {item.question}
                </h3>
                <div className="flex-shrink-0 ml-4">
                  <div className="w-8 h-8 flex items-center justify-center rounded-full bg-gradient-to-br from-amber-500/10 to-rose-500/10 group-hover:from-amber-500/20 group-hover:to-rose-500/20 transition-all duration-200">
                    {openIndex === index ? (
                      // Minus icon
                      <svg
                        className="w-5 h-5 text-amber-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2.5}
                          d="M20 12H4"
                        />
                      </svg>
                    ) : (
                      // Plus icon
                      <svg
                        className="w-5 h-5 text-amber-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2.5}
                          d="M12 4v16m8-8H4"
                        />
                      </svg>
                    )}
                  </div>
                </div>
              </button>

              {/* FAQ Answer - Expandable Content */}
              {openIndex === index && (
                <div className="px-6 py-5 bg-gradient-to-br from-gray-50 to-white border-t border-gray-200 animate-fade-in-up">
                  <p className="text-gray-700 leading-relaxed font-poppins">
                    {item.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Contact CTA */}
        <div className="mx-auto max-w-3xl mt-16 text-center p-8 rounded-lg bg-gradient-to-r from-amber-50 to-rose-50 border border-amber-200/50 animate-fade-in-up">
          <h3 className="text-xl font-semibold text-gray-900 mb-3">
            Didn&apos;t find your answer?
          </h3>
          <p className="text-gray-700 mb-5">
            Our customer service team is here to help! Feel free to reach out through WhatsApp or contact us directly.
          </p>
          <a
            href="https://wa.me/94721922332"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-gradient-to-r from-amber-500 to-rose-500 text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105"
          >
            Chat with Us on WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
