import React from 'react'
import Casual from "./photos/casual.svg";
import Formal from "./photos/formal.svg";


const NewArrivals = () => {
  return (
    <div className="container mx-auto px-15">
          <div className="w-full bg-[#F0F0F0] py-20 md:px-15 px-5 rounded-[40px]">
            <p className="xl:text-5xl lg:text-4xl sm:text-3xl font-bold text-center">
              BROWSE BY DRESS STYLE
            </p>
            <div className="flex flex-col gap-5 mt-15">
              {/* Birinchi qator - sm dan katta ekranlarda */}
              <div className="flex flex-col md:flex-row items-center justify-center gap-5">
                <div className="relative">
                  <img
                    className="w-77.5 h-47.5 object-cover rounded-[20px] lg:w-107.75 lg:h-72.25"
                    src={Casual}
                    alt=""
                  />
                  <p className="absolute top-8 left-9 text-2xl md:text-3xl lg:text-[36px] font-bold">
                    Casual
                  </p>
                </div>
                <div className="relative">
                  <img
                    className="w-77.5 h-47.5 object-cover rounded-[20px] lg:w-171 lg:h-72.25"
                    src={Formal}
                    alt=""
                  />
                  <p className="absolute top-8 left-9 text-2xl md:text-3xl lg:text-[36px] font-bold">
                    Formal
                  </p>
                </div>
              </div>
              {/* Ikkinchi qator - sm dan katta ekranlarda */}
              <div className="flex flex-col md:flex-row items-center justify-center gap-5">
                <div className="relative">
                  <img
                    className="w-77.5 h-47.5 object-cover rounded-[20px] lg:w-171 lg:h-72.25"
                    src="https://x-shop-eight.vercel.app/_next/static/media/gallery3.42e9e483.png"
                    alt=""
                  />
                  <p className="absolute top-8 left-9 text-2xl md:text-3xl lg:text-[36px] font-bold">
                    Party
                  </p>
                </div>
                <div className="relative">
                  <img
                    className="w-77.5 h-47.5 object-cover rounded-[20px] lg:w-107.75 lg:h-72.25"
                    src="https://turkcell-final-shopco.vercel.app/_next/image?url=%2Fimages%2FGymbg.png&w=3840&q=75"
                    alt=""
                  />
                  <p className="absolute top-8 left-9 text-2xl md:text-3xl lg:text-[36px] font-bold">
                    Gym
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
  )
}

export default NewArrivals
