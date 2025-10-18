export default function Footer() {
  return (
    <footer className="bg-white/90 backdrop-blur-sm border-t border-gray-200 relative overflow-hidden">
      {/* soft gradient accent behind footer */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-amber-100/20 via-rose-100/10 to-transparent"></div>
      <div className="absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-amber-400/60 to-transparent"></div>
      <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-[5vw]">
        <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-3 md:justify-start">
            <a className="text-sm text-gray-600 hover:text-primary transition-all duration-300 relative group font-saira" href="#">
              <span className="relative z-10 font-saira uppercase">About</span>
              <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></div>
            </a>
            <a className="text-sm text-gray-600 hover:text-primary transition-all duration-300 relative group font-saira" href="#">
              <span className="relative z-10 font-saira uppercase">Contact</span>
              <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></div>
            </a>
            <a className="text-sm text-gray-600 hover:text-primary transition-all duration-300 relative group font-saira" href="#">
              <span className="relative z-10 font-saira uppercase">FAQ</span>
              <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></div>
            </a>
            <a className="text-sm text-gray-600 hover:text-primary transition-all duration-300 relative group font-saira" href="#">
              <span className="relative z-10 font-saira uppercase">Privacy</span>
              <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></div>
            </a>
            <a className="text-sm text-gray-600 hover:text-primary transition-all duration-300 relative group font-saira" href="#">
              <span className="relative z-10 font-saira uppercase">Terms</span>
              <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></div>
            </a>
          </div>
          <div className="flex justify-center gap-4">
            <a className="text-gray-600 hover:text-primary transition-all duration-300 hover:scale-110" href="https://www.instagram.com/aroma.notes_?igsh=aGRjdW1oYzQ1ZmJh" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <svg fill="currentColor" height="24" viewBox="0 0 256 256" width="24" xmlns="http://www.w3.org/2000/svg">
                <path d="M128,80a48,48,0,1,0,48,48A48.05,48.05,0,0,0,128,80Zm0,80a32,32,0,1,1,32-32A32,32,0,0,1,128,160ZM176,24H80A56.06,56.06,0,0,0,24,80v96a56.06,56.06,0,0,0,56,56h96a56.06,56.06,0,0,0,56-56V80A56.06,56.06,0,0,0,176,24Zm40,152a40,40,0,0,1-40,40H80a40,40,0,0,1-40-40V80A40,40,0,0,1,80,40h96a40,40,0,0,1,40,40ZM192,76a12,12,0,1,1-12-12A12,12,0,0,1,192,76Z"></path>
              </svg>
            </a>
            <a className="text-gray-600 hover:text-primary transition-all duration-300 hover:scale-110" href="#">
              <svg fill="currentColor" height="24" viewBox="0 0 256 256" width="24" xmlns="http://www.w3.org/2000/svg">
                <path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm8,191.63V152h24a8,8,0,0,0,0-16H136V112a16,16,0,0,1,16-16h16a8,8,0,0,0,0-16H152a32,32,0,0,0-32,32v24H96a8,8,0,0,0,0,16h24v63.63a88,88,0,1,1,16,0Z"></path>
              </svg>
            </a>
          </div>
        </div>
        <div className="text-center">
          <p className="mt-6 text-sm text-gray-500 font-saira uppercase">© 2025 Aroma Notes. All rights reserved.</p>
          <div className="mt-2 flex justify-center space-x-4">
            <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
            <div className="w-2 h-2 bg-primary/60 rounded-full animate-pulse delay-300"></div>
            <div className="w-2 h-2 bg-primary/40 rounded-full animate-pulse delay-700"></div>
          </div>
        </div>
      </div>
    </footer>
  );
}
