import React from "react";
import Versace from "./pictures/Versace.svg";
import Zara from "./pictures/Zara.svg";
import Gucci from "./pictures/Gucci.svg";
import Prada from "./pictures/Prada.svg";
import CalvinKlein from "./pictures/CalvinKlein.svg";

const AboutPage = () => {
  const fontStyle = `fontFamily: 'Integral CF, sans-serif'`;

  return (
    <section id='brands'>
      <div className="bg-[#F2F0F1]">
        <div className="container mx-auto px-5  ">
          <div className="flex items-center justify-evenly">
            <div>
              <div className="w-xl flex flex-col gap-6 items-start">
                <p
                  style={{ fontStyle }}
                  className="text-[64px] text-black leading-20 font-bold"
                >
                  FIND CLOTHES THAT MATCHES YOUR STYLE
                </p>
                <p
                  style={{ fontStyle }}
                  className="text-[#00000099] text-[16px] font-normal "
                >
                  Browse through our diverse range of meticulously crafted
                  garments, designed to bring out your individuality and cater
                  to your sense of style.
                </p>
                <button className="w-52.5 h-13 rounded-[62px] py-4 px-13.5 bg-[#000000] text-[16px] text-white font-medium">
                  Shop Now
                </button>
              </div>
              <div className="flex items-start mt-6">
                <div className="flex flex-col items-start border-r border-[#0000001A] pr-10">
                  <p
                    style={{ fontStyle }}
                    className="text-[40px] text-[#000000] font-bold"
                  >
                    200+
                  </p>
                  <p
                    style={{ fontStyle }}
                    className="text-[16px] text-[#00000099] font-normal"
                  >
                    International Brands
                  </p>
                </div>
                <div className="flex flex-col items-start border-r border-[#0000001A] px-10">
                  <p
                    style={{ fontStyle }}
                    className="text-[40px] text-[#000000] font-bold"
                  >
                    2,000+
                  </p>
                  <p
                    style={{ fontStyle }}
                    className="text-[16px] text-[#00000099] font-normal"
                  >
                    High-Quality Products
                  </p>
                </div>
                <div className="flex flex-col items-start  pl-10">
                  <p
                    style={{ fontStyle }}
                    className="text-[40px] text-[#000000] font-bold"
                  >
                    30,000+
                  </p>
                  <p
                    style={{ fontStyle }}
                    className="text-[16px] text-[#00000099] font-normal"
                  >
                    Happy Customers
                  </p>
                </div>
              </div>
            </div>
            <img
              src="https://sapphireleather.com/cdn/shop/files/Rectangle_2_9e619e9d-663a-4288-ad5c-d4904c89e81f_1500x.png?v=1760274104"
              alt=""
            />
          </div>
        </div>
      </div>
      <div className="bg-[#000000] ">
        <div className=" container mx-auto ">
          <div className="flex flex-wrap items-center justify-evenly gap-10 py-10">
            <img src={Versace} alt="" />
            <img src={Zara} alt="" />
            <img src={Gucci} alt="" />
            <img src={Prada} alt="" />
            <img src={CalvinKlein} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPage;
