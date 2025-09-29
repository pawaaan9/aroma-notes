"use client";

import { useState, useEffect } from "react";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    console.log('Mobile menu toggle clicked, current state:', isMobileMenuOpen);
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Debug: Log menu state changes
  useEffect(() => {
    console.log('Mobile menu state changed:', isMobileMenuOpen);
  }, [isMobileMenuOpen]);

  return (
    <header className="sticky top-0 z-10 w-full bg-gray-900/95 backdrop-blur-md border-b border-gray-800/50 transition-all duration-300 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-32 h-32 bg-primary/5 rounded-full blur-2xl animate-float-slow"></div>
        <div className="absolute top-0 right-1/4 w-24 h-24 bg-orange-500/5 rounded-full blur-xl animate-float-reverse"></div>
        <div className="absolute bottom-0 left-1/3 w-20 h-20 bg-yellow-500/5 rounded-full blur-lg animate-float"></div>
      </div>
      
      <div className="container mx-auto flex items-center justify-between px-4 py-4 sm:px-6 lg:px-8 relative z-10">
        {/* Enhanced Logo */}
        <a className="flex items-center gap-3 group" href="/">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-primary to-orange-600 rounded-full blur-lg opacity-0 group-hover:opacity-30 transition-opacity duration-500 animate-pulse"></div>
            <div className="relative bg-gradient-to-br from-primary/20 to-orange-600/20 p-2 rounded-full group-hover:from-primary/30 group-hover:to-orange-600/30 transition-all duration-300">
              <svg className="h-6 w-6 text-primary transition-all duration-500 group-hover:rotate-180 group-hover:scale-125 group-hover:text-orange-400" fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                <g clipPath="url(#clip0_6_319)">
                  <path d="M8.57829 8.57829C5.52816 11.6284 3.451 15.5145 2.60947 19.7452C1.76794 23.9758 2.19984 28.361 3.85056 32.3462C5.50128 36.3314 8.29667 39.7376 11.8832 42.134C15.4698 44.5305 19.6865 45.8096 24 45.8096C28.3135 45.8096 32.5302 44.5305 36.1168 42.134C39.7033 39.7375 42.4987 36.3314 44.1494 32.3462C45.8002 28.361 46.2321 23.9758 45.3905 19.7452C44.549 15.5145 42.4718 11.6284 39.4217 8.57829L24 24L8.57829 8.57829Z" fill="currentColor"></path>
                </g>
                <defs>
                  <clipPath id="clip0_6_319">
                    <rect fill="white" height="48" width="48"></rect>
                  </clipPath>
                </defs>
              </svg>
            </div>
            <div className="absolute -inset-1 bg-gradient-to-r from-primary to-orange-600 rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-500 animate-ping"></div>
          </div>
          <div className="relative">
            <h1 className="text-xl font-bold bg-gradient-to-r from-white via-gray-100 to-white bg-clip-text text-transparent transition-all duration-300 group-hover:from-primary group-hover:via-orange-400 group-hover:to-primary group-hover:animate-gradient-x">
              Aroma
            </h1>
            <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-primary to-orange-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
          </div>
        </a>

        {/* Enhanced Desktop Navigation */}
        <nav className="hidden items-center gap-8 md:flex">
          <a className="text-sm font-medium text-gray-300 hover:text-primary transition-all duration-300 relative group px-3 py-2 rounded-lg hover:bg-primary/10" href="/">
            <span className="relative z-10 transition-all duration-300 group-hover:scale-105 group-hover:text-white">Home</span>
            <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-primary to-orange-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-orange-600/5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </a>
          <a className="text-sm font-medium text-gray-300 hover:text-primary transition-all duration-300 relative group px-3 py-2 rounded-lg hover:bg-primary/10" href="/products">
            <span className="relative z-10 transition-all duration-300 group-hover:scale-105 group-hover:text-white">Products</span>
            <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-primary to-orange-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-orange-600/5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </a>
          <a className="text-sm font-medium text-gray-300 hover:text-primary transition-all duration-300 relative group px-3 py-2 rounded-lg hover:bg-primary/10" href="/about">
            <span className="relative z-10 transition-all duration-300 group-hover:scale-105 group-hover:text-white">About</span>
            <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-primary to-orange-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-orange-600/5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </a>
        </nav>

        {/* Enhanced Desktop Actions */}
        <div className="hidden items-center gap-4 md:flex">
          <button className="group relative flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-gray-800/50 to-gray-700/50 text-gray-300 hover:from-primary/20 hover:to-orange-600/20 hover:text-primary transition-all duration-500 hover:scale-110 hover:shadow-2xl hover:shadow-primary/25 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-orange-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <svg fill="currentColor" height="20" viewBox="0 0 256 256" width="20" xmlns="http://www.w3.org/2000/svg" className="relative z-10 transition-all duration-500 group-hover:scale-125 group-hover:rotate-12">
              <path d="M229.66,218.34l-50.07-50.06a88.11,88.11,0,1,0-11.31,11.31l50.06,50.07a8,8,0,0,0,11.32-11.32ZM40,112a72,72,0,1,1,72,72A72.08,72.08,0,0,1,40,112Z"></path>
            </svg>
            <div className="absolute inset-0 rounded-full border-2 border-primary/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-ping"></div>
          </button>
          
          {/* Cart Button */}
          <button className="group relative flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-gray-800/50 to-gray-700/50 text-gray-300 hover:from-primary/20 hover:to-orange-600/20 hover:text-primary transition-all duration-500 hover:scale-110 hover:shadow-2xl hover:shadow-primary/25 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-orange-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <svg fill="currentColor" height="20" viewBox="0 0 256 256" width="20" xmlns="http://www.w3.org/2000/svg" className="relative z-10 transition-all duration-500 group-hover:scale-125 group-hover:-rotate-12">
              <path d="M96,216a16,16,0,1,1-16-16A16,16,0,0,1,96,216Zm96,0a16,16,0,1,1-16-16A16,16,0,0,1,192,216ZM232,80H68.7L61.9,51.2A16,16,0,0,0,46.1,40H24A16,16,0,0,1,24,8H46.1A48,48,0,0,1,93.3,56H232a8,8,0,0,1,0,16Z"></path>
            </svg>
            <div className="absolute -top-1 -right-1 h-4 w-4 bg-primary rounded-full flex items-center justify-center text-xs text-white font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-bounce">
              3
            </div>
            <div className="absolute inset-0 rounded-full border-2 border-primary/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-ping"></div>
          </button>
        </div>

        {/* Simple Mobile Menu Button */}
        <button 
          className="md:hidden flex h-10 w-10 items-center justify-center rounded-lg bg-primary/20 text-primary hover:bg-primary/30 transition-all duration-300 border border-primary/30"
          onClick={toggleMobileMenu}
          aria-label="Toggle mobile menu"
        >
          <svg 
            className={`w-6 h-6 transition-transform duration-300 ${isMobileMenuOpen ? 'rotate-90' : ''}`} 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            {isMobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Simple Mobile Navigation Menu */}
      <div className={`md:hidden transition-all duration-300 ease-in-out overflow-hidden ${
        isMobileMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
      }`}>
        <div className="bg-gray-900/95 backdrop-blur-md border-t border-gray-800/50">
          <nav className="container mx-auto px-4 py-4 space-y-3">
            <a 
              className="block text-base font-medium text-gray-300 hover:text-primary transition-all duration-300 py-3 px-4 rounded-lg hover:bg-primary/10" 
              href="/"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Home
            </a>
            <a 
              className="block text-base font-medium text-gray-300 hover:text-primary transition-all duration-300 py-3 px-4 rounded-lg hover:bg-primary/10" 
              href="/products"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Products
            </a>
            <a 
              className="block text-base font-medium text-gray-300 hover:text-primary transition-all duration-300 py-3 px-4 rounded-lg hover:bg-primary/10" 
              href="/about"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              About
            </a>
            
            {/* Mobile Actions */}
            <div className="flex items-center justify-between pt-4 border-t border-gray-800/50">
              <button className="flex items-center gap-2 text-gray-300 hover:text-primary transition-all duration-300 px-4 py-2 rounded-lg hover:bg-primary/10">
                <svg fill="currentColor" height="20" viewBox="0 0 256 256" width="20" xmlns="http://www.w3.org/2000/svg">
                  <path d="M229.66,218.34l-50.07-50.06a88.11,88.11,0,1,0-11.31,11.31l50.06,50.07a8,8,0,0,0,11.32-11.32ZM40,112a72,72,0,1,1,72,72A72.08,72.08,0,0,1,40,112Z"></path>
                </svg>
                <span className="text-sm">Search</span>
              </button>
              
              <button className="flex items-center gap-2 text-gray-300 hover:text-primary transition-all duration-300 px-4 py-2 rounded-lg hover:bg-primary/10">
                <svg fill="currentColor" height="20" viewBox="0 0 256 256" width="20" xmlns="http://www.w3.org/2000/svg">
                  <path d="M96,216a16,16,0,1,1-16-16A16,16,0,0,1,96,216Zm96,0a16,16,0,1,1-16-16A16,16,0,0,1,192,216ZM232,80H68.7L61.9,51.2A16,16,0,0,0,46.1,40H24A16,16,0,0,1,24,8H46.1A48,48,0,0,1,93.3,56H232a8,8,0,0,1,0,16Z"></path>
                </svg>
                <span className="text-sm">Cart (3)</span>
              </button>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}
