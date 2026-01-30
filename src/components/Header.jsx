import React from 'react'
import ShopCo from "./pictures/SHOP.CO.svg"
import Search from "./pictures/Frame.svg"
import { PiShoppingCartSimpleBold, PiUserCircleBold } from 'react-icons/pi';
import { Link } from 'react-router-dom';
const Header = () => {
    const scrollToSection = (id) => {
  const section = document.getElementById(id);
  if (section) section.scrollIntoView({ behavior: "smooth" });
};
  return (
    <header className='fixed top-0 w-full z-10'>
        <div className='bg-[#000000] text-white text-[14px] font-medium py-2 flex items-center justify-center'>
            <p className='text-[#E0E0E0]'>Sign up and get 20% off to your first order. <span className='underline hover:text-white duration-300 transition-all'>Sign Up Now</span></p>
        </div>
      <div className='bg-white'>
        <div className="container mx-auto  px-10 py-7">
        <div className='flex items-center justify-evenly'>
            <Link to={'/'} ><img src={ShopCo} alt="" /></Link>
        <ul className='flex items-center gap-5 text-[16px] font-normal text-[#000000] '>
            <li className='cursor-pointer'>
                <select className='outline-none' name="Shop" id="">
                    <option value="">Shop</option>
                </select>
            </li>
            <li className='cursor-pointer' onClick={() => scrollToSection("onSale")}>
                On Sale
            </li>
            <li className='cursor-pointer' onClick={() => scrollToSection("newArrivals")}>
                New Arrivals
            </li>
            <li className='cursor-pointer' onClick={() => scrollToSection("brands")}>
               Brands
            </li>
        </ul>
        <form className='flex items-center bg-[#F0F0F0] w-xl h-12 rounded-[62px] px-4 py-3 gap-5'>
            <img src={Search} alt="" />
            <input className='text-[#00000066] w-full outline-none text-[16px] font-normal' type="search" placeholder='Search for products...'/>
        </form>
        <div className='flex items-center gap-5'>
            <Link to={'/cart'}><PiShoppingCartSimpleBold className='w-6 h-6' /></Link>
            <Link to={'/registar'}> <PiUserCircleBold className='w-6 h-6' /></Link>
        </div>
        </div>
      </div>
      </div>
    </header>
  )
}

export default Header