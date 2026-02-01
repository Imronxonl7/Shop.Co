import React, { useEffect, useRef, useState } from "react";
import CountUp from "react-countup";
import Marquee from "react-fast-marquee";
import MyComponent from "../../components/MyComponent";

const AboutPage = () => {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      { threshold: 0.2 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section 
      id='brands' 
      ref={ref}
      className={`
        transition-all duration-700 ease-out
        ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}
      `}
    >
      {/* Hero Section */}
      <div className="bg-[#F2F0F1] ">
        <div className="container mx-auto px-4 sm:px-6 lg:px-15">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
            
            {/* Content Side */}
            <div className="w-full lg:w-1/2 flex flex-col gap-6 lg:gap-8">
              {/* Main Content */}
              <div className="flex flex-col gap-4 sm:gap-5 lg:gap-6 items-start">
                <h1
                  style={{ fontFamily: 'Integral CF, sans-serif' }}
                  className="text-4xl sm:text-4xl md:text-5xl lg:text-[50px] xl:text-6xl xl:text-[64px] text-black leading-tight font-bold"
                >
                  FIND CLOTHES THAT MATCHES YOUR STYLE
                </h1>
                
                <p
                  style={{ fontFamily: 'Integral CF, sans-serif' }}
                  className="text-[#00000099] text-sm sm:text-base lg:text-[14px] font-normal max-w-xl"
                >
                  Browse through our diverse range of meticulously crafted
                  garments, designed to bring out your individuality and cater
                  to your sense of style.
                </p>
                
                <button className="w-full sm:w-auto px-12 sm:px-14 lg:px-13.5 py-3 lg:py-4 rounded-full bg-[#000000] text-sm sm:text-base text-white font-medium hover:bg-[#333] transition-colors">
                  Shop Now
                </button>
              </div>
              
              {/* Stats Section */}
              <div className="flex flex-wrap sm:flex items-start sm:items-center gap-4 sm:gap-6 lg:gap-8 mt-4 lg:mt-6 w-full">
                <div className="flex flex-col items-start flex-1 sm:border-r border-[#0000001A] sm:pr-1 lg:pr-2">
                  <p
                    style={{ fontFamily: 'Integral CF, sans-serif' }}
                    className="text-3xl sm:text-4xl lg:text-[40px] text-[#000000] font-bold"
                  >
                    <CountUp end={200} duration={5} />+
                  </p>
                  <p
                    style={{ fontFamily: 'Integral CF, sans-serif' }}
                    className="text-xs sm:text-sm lg:text-[16px] text-[#00000099] font-normal"
                  >
                    International Brands
                  </p>
                </div>
                
                <div className="flex flex-col items-start flex-1 sm:border-r border-[#0000001A] sm:px-1 lg:px-2">
                  <p
                    style={{ fontFamily: 'Integral CF, sans-serif' }}
                    className="text-3xl sm:text-4xl lg:text-[40px] text-[#000000] font-bold"
                  >
                    <CountUp end={2000} duration={5} />+
                  </p>
                  <p
                    style={{ fontFamily: 'Integral CF, sans-serif' }}
                    className="text-xs sm:text-sm lg:text-[16px] text-[#00000099] font-normal"
                  >
                    High-Quality Products
                  </p>
                </div>
                
                <div className="flex flex-col items-start flex-1 sm:pl-1 lg:pl-2">
                  <p
                    style={{ fontFamily: 'Integral CF, sans-serif' }}
                    className="text-3xl sm:text-4xl lg:text-[40px] text-[#000000] font-bold"
                  >
                    <CountUp end={30000} duration={5} />+
                  </p>
                  <p
                    style={{ fontFamily: 'Integral CF, sans-serif' }}
                    className="text-xs sm:text-sm lg:text-[16px] text-[#00000099] font-normal"
                  >
                    Happy Customers
                  </p>
                </div>
              </div>
            </div>
            
            {/* Image Side */}
            <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
              <img
                src="https://sapphireleather.com/cdn/shop/files/Rectangle_2_9e619e9d-663a-4288-ad5c-d4904c89e81f_1500x.png?v=1760274104"
                alt="Fashion models"
                className="w-full max-w-lg xl:max-w-none h-auto object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
      
      {/* Brands Marquee Section */}
      <div className="bg-[#000000]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-15">
          <Marquee 
            speed={50}
            gradient={false}
            className="flex items-center gap-8 sm:gap-12 lg:gap-16"
          >
              <MyComponent />

              <MyComponent />

              <MyComponent />

              <MyComponent />

          </Marquee>
        </div>
      </div>
    </section>
  );
};

export default AboutPage;