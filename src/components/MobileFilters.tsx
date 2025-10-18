"use client";

import { useEffect, useState } from "react";

export default function MobileFilters() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <div className="lg:hidden">
      {/* Trigger */}
      <div className="flex items-center justify-between">
        <button
          onClick={() => setOpen(true)}
          className="inline-flex items-center gap-2 rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50"
        >
          <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M3 6h18M6 12h12M10 18h4" />
          </svg>
          Filter
        </button>
      </div>

      {/* Overlay */}
      {open ? (
        <div className="fixed inset-0 z-50">
          <div
            className="absolute inset-0 bg-black/40 backdrop-blur-sm"
            onClick={() => setOpen(false)}
          />

          {/* Drawer */}
          <div className="absolute inset-y-0 right-0 w-[85vw] max-w-[360px] h-full bg-white shadow-2xl flex flex-col overflow-y-auto animate-slide-in-right">
            {/* Header */}
            <div className="flex items-center justify-between px-4 py-4 border-b">
              <h3 className="text-sm font-semibold tracking-[0.2em] text-gray-800">FILTERS</h3>
              <button
                onClick={() => setOpen(false)}
                className="rounded-full bg-gray-100 p-2 text-gray-600 hover:text-gray-800 hover:bg-gray-200"
                aria-label="Close filters"
              >
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Sections */}
            <div className="px-4 py-3 space-y-6">
              {/* Availability */}
              <section>
                <div className="mb-3 flex items-center justify-between">
                  <h4 className="text-xs font-semibold tracking-[0.2em] text-gray-700">AVAILABILITY</h4>
                </div>
                <label className="flex items-center gap-3 text-sm text-gray-700 font-saira">
                  <input type="checkbox" className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary font-saira" />
                  In stock only
                </label>
              </section>

              {/* Price */}
              <section>
                <div className="mb-3 flex items-center justify-between">
                  <h4 className="text-xs font-semibold tracking-[0.2em] text-gray-700">PRICE</h4>
                </div>
                <div className="py-2">
                  <input type="range" min={0} max={400} defaultValue={200} className="w-full accent-primary" />
                </div>
                <div className="flex items-center gap-3">
                  <input className="w-24 rounded-md border border-gray-300 px-3 py-2 text-sm" placeholder="Min" />
                  <span className="text-gray-400">to</span>
                  <input className="w-24 rounded-md border border-gray-300 px-3 py-2 text-sm" placeholder="Max" />
                </div>
              </section>

              {/* Gender */}
              <section>
                <div className="mb-3 flex items-center justify-between">
                  <h4 className="text-xs font-semibold tracking-[0.2em] text-gray-700">GENDER</h4>
                </div>
                <div className="space-y-2 text-sm text-gray-700 font-saira">
                  <label className="flex items-center gap-3"><input type="checkbox" className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary" /> Female</label>
                  <label className="flex items-center gap-3"><input type="checkbox" className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary" /> Male</label>
                  <label className="flex items-center gap-3"><input type="checkbox" className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary" /> Unisex</label>
                </div>
              </section>

              {/* Brand */}
              <section>
                <div className="mb-3 flex items-center justify-between">
                  <h4 className="text-xs font-semibold tracking-[0.2em] text-gray-700">BRAND INSPIRATION</h4>
                </div>
                <div className="space-y-2 text-sm text-gray-700 font-saira">
                  <label className="flex items-center gap-3">
                    <input type="checkbox" className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary" /> YB Originals
                  </label>
                  <label className="flex items-center gap-3">
                    <input type="checkbox" className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary" /> Inspired
                  </label>
                </div>
              </section>
            </div>

            {/* Footer */}
            <div className="border-t p-4">
              <button
                onClick={() => setOpen(false)}
                className="w-full rounded-full bg-black px-6 py-3 text-sm font-semibold text-white hover:bg-gray-900 font-saira uppercase"
              >
                VIEW RESULTS
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}


