import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { Minus, Plus, Trash2, ArrowRight, Tag, Mail } from 'lucide-react';
import { decrease, deleteProduct, increase } from '../../app/cartSlice';

const CartPage = () => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  
  const [promoCode, setPromoCode] = useState('');
  const [email, setEmail] = useState('');
  const [appliedPromo, setAppliedPromo] = useState(false);

  // Calculate totals with 40% discount
  const subtotal = cart.reduce((sum, item) => {
    const discountedPrice = item.price * 0.6; // 40% off
    return sum + (discountedPrice * item.qty);
  }, 0);
  
  const discountPercent = appliedPromo ? 20 : 0;
  const discountAmount = (subtotal * discountPercent) / 100;
  const deliveryFee = 15;
  const total = subtotal - discountAmount + deliveryFee;



  const handleApplyPromo = () => {
    if (promoCode.trim()) {
      setAppliedPromo(true);
    }
  };

  const handleSubscribe = () => {
    if (email.trim()) {
      console.log('Subscribe:', email);
    }
  };

  // Order Summary Component (reusable for both desktop and mobile)
  const OrderSummary = () => (
    <div className="border lg:max-w-126.25 border-gray-200 rounded-[20px] p-5 sm:p-6">
      <h2 className="text-xl sm:text-2xl font-bold mb-6">Order Summary</h2>

      {/* Summary Details */}
      <div className="space-y-4 mb-6 pb-6 border-b border-gray-200">
        <div className="flex items-center justify-between text-gray-600">
          <span>Subtotal</span>
          <span className="font-bold text-black text-lg">${subtotal.toFixed(2)}</span>
        </div>

        <div className="flex items-center justify-between text-gray-600">
          <span>Discount (-{discountPercent}%)</span>
          <span className="font-bold text-red-600 text-lg">
            {discountAmount > 0 ? `-$${discountAmount.toFixed(2)}` : '-$0'}
          </span>
        </div>

        <div className="flex items-center justify-between text-gray-600">
          <span>Delivery Fee</span>
          <span className="font-bold text-black text-lg">${deliveryFee}</span>
        </div>
      </div>

      {/* Total */}
      <div className="flex items-center justify-between mb-6 pb-6 border-b border-gray-200">
        <span className="font-medium">Total</span>
        <span className="font-bold text-2xl">${total.toFixed(2)}</span>
      </div>

      {/* Promo Code Input */}
      <div className="mb-6">
        <div className="flex gap-2">
          <div className="flex-1 relative">
            <Tag className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Add promo code"
              value={promoCode}
              onChange={(e) => setPromoCode(e.target.value)}
              className="w-full pl-10 pr-4 py-3 bg-[#F0F0F0] rounded-full focus:outline-none focus:ring-2 focus:ring-gray-300"
            />
          </div>
          <button
            onClick={handleApplyPromo}
            disabled={!promoCode.trim()}
            className="px-6 py-3 bg-black text-white rounded-full hover:bg-gray-900 transition-colors disabled:bg-gray-300 disabled:cursor-not-allowed font-medium"
          >
            Apply
          </button>
        </div>
        {appliedPromo && (
          <p className="text-green-600 text-sm mt-2 ml-3">
            ✓ Promo code applied successfully!
          </p>
        )}
      </div>

      {/* Checkout Button */}
      <button className="w-full bg-black text-white py-4 rounded-full font-medium text-base sm:text-lg hover:bg-gray-900 transition-colors flex items-center justify-center gap-2 group">
        Go to Checkout
        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
      </button>
    </div>
  );

  return (
    <section className="py-8 sm:py-12 lg:py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-15">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-sm mb-6 flex-wrap">
          <Link to="/" className="text-gray-500 hover:text-black transition-colors">
            Home
          </Link>
          <span className="text-gray-400">›</span>
          <span className="text-black font-medium">Cart</span>
        </nav>

        {/* Page Title */}
        <h1 className="text-3xl sm:text-4xl lg:text-[40px] font-black mb-6 sm:mb-8 uppercase">
           CART 
        </h1>

        {/* Main Content Grid */}
        <div className="flex flex-col lg:flex-row lg:justify-between gap-6 lg:gap-8">
          {/* Cart Items - Left Side */}
          <div className="space-y-4 sm:space-y-6">
            {cart.map((item) => {
              const originalPrice = item.price;
              const discountedPrice = (originalPrice * 0.6).toFixed(0); // 40% off
              
              return (
                <div
                  key={item.id}
                  className="flex gap-4 p-4 lg:max-w-166.75 sm:p-6 border border-gray-200 rounded-[20px] relative"
                >
                  {/* Product Image */}
                  <div className="w-24 h-24 sm:w-32 sm:h-32 bg-[#F0EEED] rounded-[10px] shrink-0 p-2">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-contain"
                    />
                  </div>

                  {/* Product Info */}
                  <div className="flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex items-start justify-between gap-4 mb-1">
                        <h3 className="font-bold line-clamp-1 text-base sm:text-lg">
                          {item.title}
                        </h3>
                        
                        {/* Delete Button */}
                        <button
                        onClick={() => dispatch(deleteProduct(item?.id))}
                          className="text-red-500 hover:text-red-700 transition-colors p-1"
                          aria-label="Remove item"
                        >
                          <Trash2 className="w-5 h-5 sm:w-6 sm:h-6" />
                        </button>
                      </div>

                      {/* Description */}
                      <div className="text-sm text-gray-600 space-y-0.5 mb-3">
                        <p className='flex gap-2'>
                          Description: <span className="text-black line-clamp-1">{item.description}</span>
                        </p>
                      </div>
                    </div>

                    {/* Price and Quantity */}
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                      {/* Price with discount */}
                      <div className="flex items-center gap-2 flex-wrap">
                        <span className="text-xl sm:text-2xl lg:text-3xl font-bold">
                          ${discountedPrice}
                        </span>
                        <span className="text-base sm:text-lg lg:text-xl font-bold text-gray-400 line-through">
                          ${originalPrice}
                        </span>
                        <span className="px-2 py-0.5 bg-red-100 text-red-600 rounded-full text-xs font-medium">
                          -40%
                        </span>
                      </div>

                      {/* Quantity Controls */}
                      <div className="flex items-center gap-3 bg-[#F0F0F0] rounded-full px-3 sm:px-4 py-2 w-fit">
                        <button
                          onClick={() => dispatch(decrease(item.id))}
                          className="hover:text-black transition-colors p-1"
                          aria-label="Decrease quantity"
                        >
                          <Minus className="w-4 h-4" />
                        </button>
                        
                        <span className="font-medium text-sm sm:text-base min-w-5 text-center">
                          {item.qty}
                        </span>
                        
                        <button
                          onClick={() => dispatch(increase(item.id))}
                          className="hover:text-black transition-colors p-1"
                          aria-label="Increase quantity"
                        >
                          <Plus className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}

            {/* Empty Cart State */}
            {cart.length === 0 && (
              <div className="text-center max-w-166.75 lg:w-full py-20 border border-gray-200 rounded-[20px]">
                <p className="text-gray-600 text-lg mb-4">Your cart is empty</p>
                <Link
                  to="/filter"
                  className="inline-block px-6 py-3 bg-black text-white rounded-full hover:bg-gray-900 transition-colors"
                >
                  Continue Shopping
                </Link>
              </div>
            )}

            {/* Order Summary - Mobile (below cart items) */}
            <div className="lg:hidden">
              <OrderSummary />
            </div>
          </div>

          {/* Order Summary - Desktop (right side, sticky) */}
          <div className="hidden lg:block">
            <div className="sticky top-4">
              <OrderSummary />
            </div>
          </div>
        </div>

     
      </div>
    </section>
  );
};

export default CartPage;