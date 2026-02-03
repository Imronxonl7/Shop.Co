import React, { useState } from 'react';
import ShopCo from "./pictures/SHOP.CO.svg";
import Search from "./pictures/Frame.svg";
import { PiShoppingCartSimpleBold, PiUserCircleBold } from 'react-icons/pi';
import { Link } from 'react-router-dom';
import { Drawer, Button, Menu } from "antd";
import { MenuOutlined } from "@ant-design/icons";
import { useSelector } from 'react-redux';

const Header = () => {
  const [open, setOpen] = useState(false);
  const cart = useSelector((state) => state.cart)
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) section.scrollIntoView({ behavior: "smooth" });
    setOpen(false); // Close drawer after navigation
  };

  return (
    <header className='fixed top-0 w-full z-50'>
      {/* Promo Banner */}
      <div className='bg-[#000000] text-white text-xs sm:text-sm font-medium py-2 px-4 flex items-center justify-center'>
        <p className='text-[#E0E0E0] text-center'>
          Sign up and get 20% off to your first order. 
          <span className='underline hover:text-white duration-300 transition-all ml-1 cursor-pointer'>
            Sign Up Now
          </span>
        </p>
      </div>
      
      {/* Main Header */}
      <div className='bg-white shadow-sm'>
        <div className="container mx-auto px-4 sm:px-6 lg:px-15 py-4 sm:py-5 lg:py-7">
          <div className='flex items-center justify-between gap-4'>
            {/* Mobile Menu Button */}
            <Button
              type="text"
              icon={<MenuOutlined className='text-xl' />}
              onClick={() => setOpen(true)}
              className='hidden md:hidden'
            />

            {/* Logo */}
            <Link to={'/'} className=''>
              <img src={ShopCo} alt="Shop.CO" className='h-6 sm:h-7' />
            </Link>

            {/* Desktop Navigation */}
            <nav className='hidden md:flex items-center gap-6 xl:gap-8'>
              <div className='relative'>
                <select className='outline-none cursor-pointer text-base font-normal text-[#000000] bg-transparent pr-4' name="Shop">
                  <option value="">Shop</option>
                  <option value="men">Men</option>
                  <option value="women">Women</option>
                  <option value="kids">Kids</option>
                </select>
              </div>
              <button 
                className='cursor-pointer text-base font-normal text-[#000000] hover:text-[#666] transition-colors'
                onClick={() => scrollToSection("onSale")}
              >
                On Sale
              </button>
              <button 
                className='cursor-pointer text-base font-normal text-[#000000] hover:text-[#666] transition-colors'
                onClick={() => scrollToSection("newArrivals")}
              >
                New Arrivals
              </button>
              <button 
                className='cursor-pointer text-base font-normal text-[#000000] hover:text-[#666] transition-colors'
                onClick={() => scrollToSection("brands")}
              >
                Brands
              </button>
            </nav>

            {/* Search Bar - Hidden on mobile, visible on tablet+ */}
            <form className='hidden lg:flex items-center bg-[#F0F0F0] flex-1 max-w-xl h-10 lg:h-12 rounded-full px-4 gap-3 mx-4'>
              <img src={Search} alt="Search" className='w-5 h-5 ' />
              <input 
                className='text-[#00000066] w-full outline-none text-sm lg:text-base font-normal bg-transparent' 
                type="search" 
                placeholder='Search for products...'
              />
            </form>

            {/* Icons */}
            <div className='flex items-center gap-3 sm:gap-4 '>
              <Link to={'/cart'} className='hover:opacity-70 transition-opacity relative'>
                <PiShoppingCartSimpleBold className='w-5 h-5 sm:w-6 sm:h-6' />
                <p className='w-5 h-5 -top-2 -right-2 bg-black border border-white text-[12px] flex items-center justify-center absolute px-0.5 rounded-[100%]  text-white'>{cart.length}</p>
              </Link>
              <Link to={'/registar'} className='hover:opacity-70 transition-opacity'>
                <PiUserCircleBold className='w-5 h-5 sm:w-6 sm:h-6' />
              </Link>
            </div>
          </div>

          {/* Mobile Search Bar */}
          <form className='hidden items-center bg-[#F0F0F0] w-full h-10 rounded-full px-4 gap-3 mt-3'>
            <img src={Search} alt="Search" className='w-4 h-4 ' />
            <input 
              className='text-[#00000066] w-full outline-none text-sm font-normal bg-transparent' 
              type="search" 
              placeholder='Search for products...'
            />
          </form>
        </div>
      </div>

      {/* Mobile Drawer */}
      <Drawer
        placement="left"
        open={open}
        onClose={() => setOpen(false)}
        
        
      >
        <Menu mode="vertical" className='border-0'>
          <Menu.Item key="1" className='text-base py-3'>
            <select className='outline-none w-full bg-transparent' name="Shop">
              <option value="">Shop</option>
              <option value="men">Men</option>
              <option value="women">Women</option>
              <option value="kids">Kids</option>
            </select>
          </Menu.Item>
          <Menu.Item 
            key="2" 
            className='text-base py-3'
            onClick={() => scrollToSection("onSale")}
          >
            On Sale
          </Menu.Item>
          <Menu.Item 
            key="3" 
            className='text-base py-3'
            onClick={() => scrollToSection("newArrivals")}
          >
            New Arrivals
          </Menu.Item>
          <Menu.Item 
            key="4" 
            className='text-base py-3'
            onClick={() => scrollToSection("brands")}
          >
            Brands
          </Menu.Item>
        </Menu>
      </Drawer>
    </header>
  );
};

export default Header;