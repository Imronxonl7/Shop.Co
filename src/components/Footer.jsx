import React from 'react';
import { Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="w-full bg-[#F0F0F0] mt-50 relative">
      {/* Newsletter Section */}
      <div className="max-w-310 mx-auto px-5 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
        <div className='flex justify-center px-5'>
          <div className="bg-black absolute -top-35 rounded-[20px] sm:rounded-[30px] lg:rounded-[40px] px-6 sm:px-12 lg:px-16 py-8 sm:py-10 lg:py-12">
          <div className="flex  flex-col lg:flex-row  items-center justify-between gap-6 lg:gap-12">
            {/* Heading */}
            <h2 className="text-white font-black text-xl sm:text-3xl lg:text-[40px] xl:text-5xl leading-tight text-center lg:text-left max-w-137.5">
              STAY UPTO DATE ABOUT OUR LATEST OFFERS
            </h2>
            
            {/* Form */}
            <div className="w-full lg:w-auto flex flex-col gap-3 sm:gap-4 min-w-70 sm:min-w-87.5">
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="w-full pl-12 pr-4 py-3 sm:py-4 rounded-full bg-white text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-300"
                />
              </div>
              <button className="w-full py-3 sm:py-4 bg-white text-black font-bold rounded-full hover:bg-gray-100 transition-colors">
                Subscribe to Newsletter
              </button>
            </div>
          </div>
        </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-310 mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 mt-20 lg:mt-8 lg:py-16">
        <div className='flex justify-center'>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 sm:gap-10 lg:gap-12">
          {/* Brand Section */}
          <div className="sm:col-span-2 lg:col-span-1">
            <h3 className="text-3xl sm:text-4xl font-black mb-4 sm:mb-6">SHOP.CO</h3>
            <p className="text-gray-600 text-sm leading-relaxed mb-6 sm:mb-8 max-w-62.5">
              We have clothes that suits your style and which you're proud to wear. From women to men.
            </p>
            {/* Social Icons */}
            <div className="flex gap-3">
              <a href="#" className="w-10 h-10 rounded-full border-2 border-gray-200 flex items-center justify-center hover:bg-gray-100 transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                </svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-full border-2 border-gray-200 flex items-center justify-center hover:bg-gray-100 transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm3.066 8.844c.01.142.015.285.015.43 0 4.39-3.341 9.45-9.451 9.45a9.402 9.402 0 01-5.097-1.492 6.673 6.673 0 004.916-1.376 3.325 3.325 0 01-3.102-2.305 3.32 3.32 0 001.5-.057 3.321 3.321 0 01-2.664-3.254v-.042a3.31 3.31 0 001.503.415A3.32 3.32 0 015.63 6.593c0-.632.17-1.224.466-1.733a9.43 9.43 0 006.844 3.468 3.321 3.321 0 015.656-3.027 6.646 6.646 0 002.107-.805 3.333 3.333 0 01-1.459 1.835A6.618 6.618 0 0021 5.77a6.733 6.733 0 01-1.934 1.717z"/>
                </svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-full border-2 border-gray-200 flex items-center justify-center hover:bg-gray-100 transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5 13h-4v8h-3v-8H8v-3h2V8.5C10 6.5 11 5 13.5 5H16v3h-2c-.55 0-1 .45-1 1v1h3l-.5 3z"/>
                </svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-full border-2 border-gray-200 flex items-center justify-center hover:bg-gray-100 transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0C5.373 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="font-bold text-[16px] tracking-wider mb-4 sm:mb-6">COMPANY</h4>
            <ul className="space-y-3 sm:space-y-4">
              <li><a href="#" className=" font-normal text-gray-600 hover:text-black transition-colors text-sm sm:text-base">About</a></li>
              <li><a href="#" className=" font-normal text-gray-600 hover:text-black transition-colors text-sm sm:text-base">Features</a></li>
              <li><a href="#" className=" font-normal text-gray-600 hover:text-black transition-colors text-sm sm:text-base">Works</a></li>
              <li><a href="#" className=" font-normal text-gray-600 hover:text-black transition-colors text-sm sm:text-base">Career</a></li>
            </ul>
          </div>

          {/* Help Links */}
          <div>
            <h4 className="font-bold text-sm tracking-wider mb-4 sm:mb-6">HELP</h4>
            <ul className="space-y-3 sm:space-y-4">
              <li><a href="#" className=" font-normal text-gray-600 hover:text-black transition-colors text-sm sm:text-base">Customer Support</a></li>
              <li><a href="#" className=" font-normal text-gray-600 hover:text-black transition-colors text-sm sm:text-base">Delivery Details</a></li>
              <li><a href="#" className=" font-normal text-gray-600 hover:text-black transition-colors text-sm sm:text-base">Terms & Conditions</a></li>
              <li><a href="#" className=" font-normal text-gray-600 hover:text-black transition-colors text-sm sm:text-base">Privacy Policy</a></li>
            </ul>
          </div>

          {/* FAQ Links */}
          <div>
            <h4 className="font-bold text-sm tracking-wider mb-4 sm:mb-6">FAQ</h4>
            <ul className="space-y-3 sm:space-y-4">
              <li><a href="#" className=" font-normal text-gray-600 hover:text-black transition-colors text-sm sm:text-base">Account</a></li>
              <li><a href="#" className=" font-normal text-gray-600 hover:text-black transition-colors text-sm sm:text-base">Manage Deliveries</a></li>
              <li><a href="#" className=" font-normal text-gray-600 hover:text-black transition-colors text-sm sm:text-base">Orders</a></li>
              <li><a href="#" className=" font-normal text-gray-600 hover:text-black transition-colors text-sm sm:text-base">Payments</a></li>
            </ul>
          </div>

          {/* Resources Links */}
          <div>
            <h4 className="font-bold text-sm tracking-wider mb-4 sm:mb-6">RESOURCES</h4>
            <ul className="space-y-3 sm:space-y-4">
              <li><a href="#" className=" font-normal text-gray-600 hover:text-black transition-colors text-sm sm:text-base">Free eBooks</a></li>
              <li><a href="#" className=" font-normal text-gray-600 hover:text-black transition-colors text-sm sm:text-base">Development Tutorial</a></li>
              <li><a href="#" className=" font-normal text-gray-600 hover:text-black transition-colors text-sm sm:text-base">How to - Blog</a></li>
              <li><a href="#" className=" font-normal text-gray-600 hover:text-black transition-colors text-sm sm:text-base">Youtube Playlist</a></li>
            </ul>
          </div>
        </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 sm:mt-12 lg:mt-16 pt-6 sm:pt-8 border-t border-gray-200">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-4 sm:gap-6">
            {/* Copyright */}
            <p className="text-gray-600 text-xs sm:text-sm text-center sm:text-left">
              Shop.co © 2000-2023, All Rights Reserved
            </p>
            
            {/* Payment Icons */}
            <div className="flex items-center gap-2 sm:gap-3">
              <div className="bg-white border border-gray-200 rounded px-2 py-1 sm:px-3 sm:py-1.5">
                <img src="https://upload.wikimedia.org/wikipedia/commons/0/04/Visa.svg" alt="Visa" className="h-4 sm:h-5" />
              </div>
              <div className="bg-white border border-gray-200 rounded px-2 py-1 sm:px-3 sm:py-1.5">
                <img src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg" alt="Mastercard" className="h-4 sm:h-5" />
              </div>
              <div className="bg-white border border-gray-200 rounded px-2 py-1 sm:px-3 sm:py-1.5">
                <img src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg" alt="PayPal" className="h-4 sm:h-5" />
              </div>
              <div className="bg-white border border-gray-200 rounded px-2 py-1 sm:px-3 sm:py-1.5">
                <img src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg" alt="Apple Pay" className="h-4 sm:h-5" />
              </div>
              <div className="bg-white border border-gray-200 rounded px-2 py-1 sm:px-3 sm:py-1.5">
                <img src="https://upload.wikimedia.org/wikipedia/commons/f/f2/Google_Pay_Logo.svg" alt="Google Pay" className="h-4 sm:h-5" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;