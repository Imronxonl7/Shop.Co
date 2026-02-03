import { useQuery } from "@tanstack/react-query";
import { Atom } from "react-loading-indicators";
import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Minus, Plus, ShoppingCart, Star } from "lucide-react";
import useReactQuery from "../../hooks/useReactQuery";
import CustomerReviews from "../../components/CustomerReviews";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, decrease, increase } from "../../app/cartSlice";

const SinglePage = () => {
  const { id } = useParams();
  const cart = useSelector((state) => state.cart)
  const { data, isLoading } = useReactQuery({
    url: `products/${id}`,
    key: ["products", id],
  });
    const dispatch = useDispatch()


  const singleProduct = data?.data;

  // State management
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedSize, setSelectedSize] = useState("Large");
  const [selectedColor, setSelectedColor] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState("details");

  // Mock data for colors and sizes
  const colors = ["#4F4631", "#314F4A", "#31344F"];
  const sizes = ["Small", "Medium", "Large", "X-Large"];

  // Mock images - using the same image 4 times since API only provides one
  const productImages = [
    singleProduct?.image,
    singleProduct?.image,
    singleProduct?.image,
    singleProduct?.image,
  ];

  // Loading state
  if (isLoading) {
    return (
      // <div className="flex items-center justify-center min-h-screen">
      //   <Atom
      //     style={{
      //       display: "flex",
      //       alignItems: "center",
      //       justifyContent: "center",
      //     }}
      //     color="#000000"
      //     size="large"
      //     text=""
      //     textColor=""
      //   />
      // </div>
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <div className="inline-block animate-spin rounded-full h-12 w-12 border-4 border-gray-200 border-t-black"></div>
          <p className="mt-4 text-gray-600">Loading...</p>
        </div>
      </div>
    );
  }

  if (!singleProduct) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <p className="text-xl text-gray-600">Product not found</p>
      </div>
    );
  }

  // Calculate discount price
  const originalPrice = singleProduct.price;
  const discountedPrice = (originalPrice * 0.6).toFixed(2); // 40% off
  const discount = 40;

  // Handlers
  const handleQuantityChange = (type) => {
    if (type === "increment") {
      setQuantity((prev) => prev + 1);
    } else if (type === "decrement" && quantity > 1) {
      setQuantity((prev) => prev - 1);
    }
  };
  return (
    <section className="py-8 sm:py-12 lg:py-16 bg-white">
      <div className="max-w-360 mx-auto px-4 sm:px-6 lg:px-16">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-sm mb-6 sm:mb-8 flex-wrap">
          <Link
            to="/"
            className="text-gray-500 hover:text-black transition-colors"
          >
            Home
          </Link>
          <span className="text-gray-400">›</span>
          <Link
            to="/shop"
            className="text-gray-500 hover:text-black transition-colors"
          >
            Shop
          </Link>
          <span className="text-gray-400">›</span>
          <Link
            to="/shop/men"
            className="text-gray-500 hover:text-black transition-colors"
          >
            Men
          </Link>
          <span className="text-gray-400">›</span>
          <span className="text-black font-medium truncate max-w-50">
            T-shirts
          </span>
        </nav>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16">
          {/* Left Side - Images */}
          <div className="flex flex-col-reverse sm:flex-row gap-4">
            {/* Thumbnail Images */}
            <div className="flex sm:flex-col gap-3 overflow-x-auto sm:overflow-visible">
              {productImages.filter(Boolean).map((img, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`shrink-0 w-20 h-20 sm:w-28 sm:h-28 rounded-[10px] sm:rounded-[20px] overflow-hidden border-2 transition-all ${
                    selectedImage === index
                      ? "border-black"
                      : "border-gray-200 hover:border-gray-400"
                  }`}
                >
                  <img
                    src={img}
                    alt={`Product view ${index + 1}`}
                    className="w-full h-full object-contain p-2 bg-[#F0EEED]"
                  />
                </button>
              ))}
            </div>

            {/* Main Image */}
            <div className="flex-1 rounded-[20px] overflow-hidden bg-[#F0EEED] p-8 sm:p-12 lg:p-16">
              <img
                src={productImages[selectedImage] || singleProduct.image}
                alt={singleProduct.title}
                className="w-full h-auto object-contain max-h-100 sm:max-h-125 lg:max-h-150"
              />
            </div>
          </div>

          {/* Right Side - Product Info */}
          <div className="flex flex-col">
            {/* Product Title */}
            <h1 className="text-3xl sm:text-4xl lg:text-[40px] font-black uppercase mb-3 sm:mb-4 leading-tight">
              {singleProduct.title}
            </h1>

            {/* Rating */}
            <div className="flex items-center gap-2 mb-3 sm:mb-4">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, index) => {
                  const rating = singleProduct.rating?.rate || 0;
                  const isFilled = index < Math.floor(rating);
                  const isHalf =
                    index === Math.floor(rating) && rating % 1 !== 0;

                  return (
                    <Star
                      key={index}
                      className={`w-5 h-5 ${
                        isFilled
                          ? "fill-[#FFC633] text-[#FFC633]"
                          : isHalf
                            ? "fill-[#FFC633] text-[#FFC633]"
                            : "fill-none text-gray-300"
                      }`}
                    />
                  );
                })}
              </div>
              <span className="text-sm font-medium">
                {singleProduct.rating?.rate || 0}/5
              </span>
            </div>

            {/* Price */}
            <div className="flex items-center gap-3 mb-4 sm:mb-6">
              <span className="text-3xl sm:text-4xl font-bold">
                ${discountedPrice}
              </span>
              <span className="text-2xl sm:text-3xl font-bold text-gray-400 line-through">
                ${originalPrice}
              </span>
              <span className="px-3 py-1 bg-red-100 text-red-600 rounded-full text-sm font-medium">
                -{discount}%
              </span>
            </div>

            {/* Description */}
            <p className="text-gray-600 leading-relaxed mb-6 sm:mb-8 border-b border-gray-200 pb-6 sm:pb-8">
              {singleProduct.description}
            </p>

            {/* Select Colors */}
            <div className="mb-6">
              <h3 className="text-sm sm:text-base font-medium text-gray-900 mb-3 sm:mb-4">
                Select Colors
              </h3>
              <div className="flex gap-3">
                {colors.map((color, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedColor(index)}
                    className={`w-10 h-10 sm:w-12 sm:h-12 rounded-full border-2 transition-all ${
                      selectedColor === index
                        ? "border-black scale-110"
                        : "border-transparent hover:border-gray-300"
                    }`}
                    style={{ backgroundColor: color }}
                    aria-label={`Select color ${index + 1}`}
                  >
                    {selectedColor === index && (
                      <svg
                        className="w-5 h-5 sm:w-6 sm:h-6 text-white mx-auto"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={3}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    )}
                  </button>
                ))}
              </div>
            </div>

            {/* Choose Size */}
            <div className="mb-6 sm:mb-8 pb-6 sm:pb-8 border-b border-gray-200">
              <h3 className="text-sm sm:text-base font-medium text-gray-900 mb-3 sm:mb-4">
                Choose Size
              </h3>
              <div className="flex flex-wrap gap-2 sm:gap-3">
                {sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`px-5 sm:px-6 py-2.5 sm:py-3 rounded-full text-sm sm:text-base font-medium transition-all ${
                      selectedSize === size
                        ? "bg-black text-white"
                        : "bg-[#F0F0F0] text-gray-700 hover:bg-gray-200"
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity and Add to Cart */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
             
              {
                cart?.find((el) => el.id === singleProduct.id) ? ( 
              <div className="flex items-center justify-between bg-[#F0F0F0] rounded-full px-5 py-3 sm:py-4 w-full ">
                <button
                  onClick={() => dispatch(decrease(singleProduct?.id))}
                  className="p-1 hover:bg-gray-200 rounded-full cursor-pointer transition-colors"
                  aria-label="Decrease quantity"
                >
                  <Minus className="w-4 lg:w-6 h-4 lg:h-6  sm:w-5 sm:h-5" />
                </button>
                <span className="mx-6 sm:mx-8 font-medium text-base sm:text-lg min-w-5 text-center">
                 {
                  cart?.find((el) => el.id === singleProduct.id)?.qty
                 }
                </span>
                <button
                  onClick={() => dispatch(increase(singleProduct?.id))}
                  className="p-1 hover:bg-gray-200 cursor-pointer rounded-full transition-colors"
                  aria-label="Increase quantity"
                >
                  <Plus 
                  
                  className="w-4 lg:w-6 h-4 lg:h-6  sm:w-5 sm:h-5" />
                </button>
              </div>) : (
              <button onClick={()=> dispatch(addToCart(singleProduct))} className="flex-1 bg-black text-white rounded-full px-8 py-3 sm:py-4 font-medium text-base sm:text-lg hover:bg-gray-900 transition-colors flex items-center justify-center gap-2">
                <ShoppingCart className="lg:w-6 lg:h-6 w-5 h-5" />
                Add to Cart
              </button>)
              }

              
            </div>
          </div>
        </div>

        {/* Tabs Section */}
        <div className="mt-12 sm:mt-16 lg:mt-20">
          {/* Tab Headers */}
          <div className="flex border-b border-gray-200 gap-8 sm:gap-12 overflow-x-auto">
            <button
              onClick={() => setActiveTab("details")}
              className={`pb-4 text-base sm:text-lg font-medium border-b-2 transition-colors whitespace-nowrap ${
                activeTab === "details"
                  ? "border-black text-black"
                  : "border-transparent text-gray-500 hover:text-black"
              }`}
            >
              Product Details
            </button>
            <button
              onClick={() => setActiveTab("reviews")}
              className={`pb-4 text-base sm:text-lg font-medium border-b-2 transition-colors whitespace-nowrap ${
                activeTab === "reviews"
                  ? "border-black text-black"
                  : "border-transparent text-gray-500 hover:text-black"
              }`}
            >
              Rating & Reviews
            </button>
            <button
              onClick={() => setActiveTab("faqs")}
              className={`pb-4 text-base sm:text-lg font-medium border-b-2 transition-colors whitespace-nowrap ${
                activeTab === "faqs"
                  ? "border-black text-black"
                  : "border-transparent text-gray-500 hover:text-black"
              }`}
            >
              FAQs
            </button>
          </div>
          {/* Tab Content */}
          <div className="py-8 sm:py-10">
            {activeTab === "details" && (
              <div className="prose max-w-none">
                <h3 className="text-xl sm:text-2xl font-bold mb-4">
                  Product Information
                </h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  {singleProduct.description}
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Category: {singleProduct.category}
                </p>
              </div>
            )}

            {activeTab === "reviews" && (
              <div>
                <h3 className="text-xl sm:text-2xl font-bold mb-6">
                  All Reviews ({singleProduct.rating?.count || 0})
                </h3>
                <p className="text-gray-600">
                  <CustomerReviews/>
                </p>
              </div>
            )}

            {activeTab === "faqs" && (
              <div>
                <h3 className="text-xl sm:text-2xl font-bold mb-6">
                  Frequently Asked Questions
                </h3>
                <p className="text-gray-600">
                  
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SinglePage;
