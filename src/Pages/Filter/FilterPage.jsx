import React, { useState, useMemo } from 'react';
import useReactQuery from '../../hooks/useReactQuery';
import { X, SlidersHorizontal, ChevronRight, Star } from 'lucide-react';
import { Link } from 'react-router-dom';

const FilterPage = () => {
  const { data, isLoading } = useReactQuery({ url: "products", key: "products" });
  const products = data?.data || [];

  // Filter states
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [priceRange, setPriceRange] = useState([0, 300]);
  const [selectedColors, setSelectedColors] = useState([]);
  const [selectedSizes, setSelectedSizes] = useState([]);
  const [showFilters, setShowFilters] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 9;

  // Available colors and sizes
  const colors = [
    { name: 'Green', value: '#00C12B' },
    { name: 'Red', value: '#F50606' },
    { name: 'Yellow', value: '#F5DD06' },
    { name: 'Orange', value: '#F57906' },
    { name: 'Blue', value: '#06CAF5' },
    { name: 'Navy', value: '#063AF5' },
    { name: 'Purple', value: '#7D06F5' },
    { name: 'Pink', value: '#F506A4' },
    { name: 'Black', value: '#000000' },
  ];

  const sizes = ['XX-Small', 'X-Small', 'Small', 'Medium', 'Large', 'X-Large', 'XX-Large', '3X-Large', '4X-Large'];

  // Extract unique categories from products
  const categories = useMemo(() => {
    const uniqueCategories = [...new Set(products.map(p => p.category))];
    return uniqueCategories;
  }, [products]);

  // Filter logic
  const filteredProducts = useMemo(() => {
    return products.filter(product => {
      // Category filter
      if (selectedCategory !== 'all' && product.category !== selectedCategory) {
        return false;
      }

      // Price filter
      if (product.price < priceRange[0] || product.price > priceRange[1]) {
        return false;
      }

      // If no filters selected, show all
      return true;
    });
  }, [products, selectedCategory, priceRange]);

  // Pagination logic
  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentProducts = filteredProducts.slice(startIndex, endIndex);

  // Reset to page 1 when filters change
  React.useEffect(() => {
    setCurrentPage(1);
  }, [selectedCategory, priceRange]);

  // Handlers
  const handleColorToggle = (color) => {
    setSelectedColors(prev =>
      prev.includes(color)
        ? prev.filter(c => c !== color)
        : [...prev, color]
    );
  };

  const handleSizeToggle = (size) => {
    setSelectedSizes(prev =>
      prev.includes(size)
        ? prev.filter(s => s !== size)
        : [...prev, size]
    );
  };

  const resetFilters = () => {
    setSelectedCategory('all');
    setPriceRange([0, 300]);
    setSelectedColors([]);
    setSelectedSizes([]);
  };

  // Filter Sidebar Component
  const FilterSidebar = ({ isMobile }) => (
    <div className={`
      ${isMobile 
        ? 'fixed inset-0 z-50 bg-white' 
        : 'border border-gray-200 rounded-[20px] p-6 sticky top-4'
      } 
      ${isMobile && !showFilters ? 'hidden' : ''}
    `}>
      {/* Mobile Header */}
      {isMobile && (
        <div className="flex items-center justify-between p-4 border-b border-gray-200">
          <h2 className="text-xl font-bold">Filters</h2>
          <button onClick={() => setShowFilters(false)} className="p-2">
            <X className="w-6 h-6" />
          </button>
        </div>
      )}

      <div className={`${isMobile ? 'p-4 overflow-y-auto  h-[calc(100vh-140px)]' : ''}`}>
        {/* Desktop Header */}
        {!isMobile && (
          <div className="flex items-center justify-between mb-6 pb-6 border-b border-gray-200">
            <h2 className="text-xl font-bold">Filters</h2>
            <SlidersHorizontal className="w-5 h-5 text-gray-400" />
          </div>
        )}

        {/* Category Filter */}
        <div className="mb-6 pb-6 border-b  border-gray-200">
          <div className="space-y-4">
            {/* All Products */}
            <label className="flex items-center gap-3 cursor-pointer group">
              <div className="relative">
                <input
                  type="radio"
                  name="category"
                  checked={selectedCategory === 'all'}
                  onChange={() => setSelectedCategory('all')}
                  className="w-4 h-4 accent-black cursor-pointer"
                />
              </div>
              <div className="flex items-center justify-between flex-1">
                <span className="text-gray-700 group-hover:text-black transition-colors">
                  All Products
                </span>
                <ChevronRight className="w-4 h-4 text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            </label>

            {/* Categories from API */}
            {categories.map((category) => (
              <label key={category} className="flex items-center gap-3 cursor-pointer group">
                <div className="relative">
                  <input
                    type="radio"
                    name="category"
                    checked={selectedCategory === category}
                    onChange={() => setSelectedCategory(category)}
                    className="w-4 h-4 accent-black cursor-pointer"
                  />
                </div>
                <div className="flex items-center justify-between flex-1">
                  <span className="text-gray-700 group-hover:text-black transition-colors capitalize">
                    {category}
                  </span>
                  <ChevronRight className="w-4 h-4 text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </label>
            ))}
          </div>
        </div>

        {/* Price Filter */}
        <div className="mb-6 pb-6 border-b border-gray-200">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-medium">Price</h3>
            <button onClick={() => setPriceRange([0, 300])} className="text-sm text-gray-500 hover:text-black">
              Reset
            </button>
          </div>
          
          <div className="space-y-4">
            {/* Dual Range Slider */}
            <div className="relative pt-2 pb-6">
              {/* Track */}
              <div className="absolute w-full h-2 bg-gray-200 rounded-full top-2"></div>
              
              {/* Active Range */}
              <div 
                className="absolute h-2 bg-black rounded-full top-2"
                style={{
                  left: `${(priceRange[0] / 300) * 100}%`,
                  right: `${100 - (priceRange[1] / 300) * 100}%`
                }}
              ></div>
              
              {/* Min Handle */}
              <input
                type="range"
                min="0"
                max="300"
                value={priceRange[0]}
                onChange={(e) => {
                  const value = Number(e.target.value);
                  if (value < priceRange[1]) {
                    setPriceRange([value, priceRange[1]]);
                  }
                }}
                className="absolute w-full h-2 bg-transparent appearance-none cursor-pointer pointer-events-none top-2"
                style={{
                  zIndex: priceRange[0] > 300 - 100 ? 5 : 3,
                }}
              />
              
              {/* Max Handle */}
              <input
                type="range"
                min="0"
                max="300"
                value={priceRange[1]}
                onChange={(e) => {
                  const value = Number(e.target.value);
                  if (value > priceRange[0]) {
                    setPriceRange([priceRange[0], value]);
                  }
                }}
                className="absolute w-full h-2 bg-transparent appearance-none cursor-pointer pointer-events-none top-2"
                style={{
                  zIndex: 4,
                }}
              />
            </div>
            
            {/* Price Display */}
            <div className="flex items-center justify-between text-sm">
              <span className="font-medium">${priceRange[0]}</span>
              <span className="font-medium">${priceRange[1]}</span>
            </div>
          </div>
        </div>

        {/* Colors Filter */}
        <div className="mb-6 pb-6 border-b border-gray-200">
          <h3 className="font-medium mb-4">Colors</h3>
          <div className="flex flex-wrap gap-3">
            {colors.map((color) => (
              <button
                key={color.name}
                onClick={() => handleColorToggle(color.value)}
                className={`w-10 h-10 rounded-full border-2 transition-all ${
                  selectedColors.includes(color.value)
                    ? 'border-black scale-110'
                    : 'border-gray-300 hover:border-gray-400'
                }`}
                style={{ backgroundColor: color.value }}
                title={color.name}
              >
                {selectedColors.includes(color.value) && (
                  <svg className="w-5 h-5 text-white mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Size Filter */}
        <div className="mb-6">
          <h3 className="font-medium mb-4">Size</h3>
          <div className="flex flex-wrap gap-2">
            {sizes.map((size) => (
              <button
                key={size}
                onClick={() => handleSizeToggle(size)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  selectedSizes.includes(size)
                    ? 'bg-black text-white'
                    : 'bg-[#F0F0F0] text-gray-700 hover:bg-gray-200'
                }`}
              >
                {size}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Mobile Apply Button */}
      {isMobile && (
        <div className="fixed bottom-0 left-0 right-0 p-4 bg-white border-t border-gray-200">
          <button
            onClick={() => setShowFilters(false)}
            className="w-full bg-black text-white py-4 rounded-full font-medium hover:bg-gray-900 transition-colors"
          >
            Apply Filter
          </button>
        </div>
      )}
    </div>
  );

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <div className="inline-block animate-spin rounded-full h-12 w-12 border-4 border-gray-200 border-t-black"></div>
          <p className="mt-4 text-gray-600">Loading...</p>
        </div>
      </div>
    );
  }

  return (
    <section className="py-8 sm:py-12 lg:py-16 bg-white">
      <div className="max-w-360  mx-auto px-4 sm:px-6 lg:px-15">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-sm mb-6 flex-wrap">
          <Link to="/" className="text-gray-500 hover:text-black transition-colors">Home</Link>
          <span className="text-gray-400">›</span>
          <span className="text-black font-medium capitalize">{selectedCategory === 'all' ? 'Casual' : selectedCategory}</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-[280px,1fr] gap-6 lg:gap-8">
          {/* Desktop Filters - Left Sidebar */}
          <div className='flex'>
            <aside className="hidden lg:block lg:max-w-100 ">
            <FilterSidebar isMobile={false} />
          </aside>

          {/* Products Section - Right Side */}
          <main>
            <div>
              {/* Header */}
            <div className="flex items-center justify-between mb-6">
              
              
              <div className="flex items-center gap-3">
                {/* Mobile Filter Button */}
                <button
                  onClick={() => setShowFilters(true)}
                  className="lg:hidden flex items-center gap-2 px-4 py-2 bg-[#F0F0F0] rounded-full hover:bg-gray-200 transition-colors"
                >
                  <SlidersHorizontal className="w-4 h-4" />
                  <span className="text-sm font-medium">Filters</span>
                </button>
                
                
              </div>
            </div>

          <div className='flex flex-col'>
            <div className='flex justify-between items-center lg:ml-6 mb-6'>
              <h1 className="text-2xl sm:text-3xl font-bold capitalize">
                All products
              </h1>
              <div className="text-sm text-gray-600">
                  Showing {startIndex + 1}-{Math.min(endIndex, filteredProducts.length)} of {filteredProducts.length} Products
                </div>
            </div>
              {/* Products Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 lg:ml-6 lg:gap-6">
              {currentProducts.map((product) => (
                <Link
                  key={product.id}
                  to={`/single/${product.id}`}
                  className="group"
                >
                  <div className="bg-[#F0EEED] rounded-[20px] overflow-hidden mb-3 aspect-square p-4 sm:p-6">
                    <img
                      src={product.image}
                      alt={product.title}
                      className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  
                  <div>
                    <h3 className="font-bold text-base sm:text-lg mb-2 line-clamp-1 group-hover:text-gray-600 transition-colors">
                      {product.title}
                    </h3>
                    
                    {/* Rating */}
                    <div className="flex items-center gap-2 mb-2">
                      <div className="flex items-center">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`w-4 h-4 ${
                              i < Math.floor(product.rating?.rate || 0)
                                ? 'fill-[#FFC633] text-[#FFC633]'
                                : 'fill-none text-gray-300'
                            }`}
                          />
                        ))}
                      </div>
                      <span className="text-sm text-gray-600">
                        {product.rating?.rate || 0}/5
                      </span>
                    </div>
                    
                    {/* Price */}
                    <div className="flex items-center gap-2">
                      <span className="text-xl sm:text-2xl font-bold">
                        ${(product.price * 0.6).toFixed(0)}
                      </span>
                      <span className="text-lg sm:text-xl font-bold text-gray-400 line-through">
                        ${product.price}
                      </span>
                      <span className="px-2 py-0.5 bg-red-100 text-red-600 rounded-full text-xs font-medium">
                        -40%
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
            </div>

            {/* Empty State */}
            {currentProducts.length === 0 && (
              <div className="text-center py-20">
                <p className="text-gray-600 text-lg mb-4">No products found</p>
                <button
                  onClick={resetFilters}
                  className="px-6 py-3 bg-black text-white rounded-full hover:bg-gray-900 transition-colors"
                >
                  Reset Filters
                </button>
              </div>
            )}

            {/* Pagination */}
            {filteredProducts.length > 0 && totalPages > 1 && (
              <div className="flex items-center justify-center gap-2 mt-8 flex-wrap">
                {/* Previous Button */}
                <button
                  onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))}
                  disabled={currentPage === 1}
                  className={`px-4 py-2 rounded-lg transition-colors ${
                    currentPage === 1
                      ? 'text-gray-400 cursor-not-allowed'
                      : 'text-gray-600 hover:text-black hover:bg-gray-100'
                  }`}
                >
                  ← Previous
                </button>

                {/* Page Numbers */}
                {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => {
                  // Show first page, last page, current page, and pages around current
                  const showPage = 
                    page === 1 || 
                    page === totalPages || 
                    (page >= currentPage - 1 && page <= currentPage + 1);

                  // Show dots
                  const showDots = 
                    (page === 2 && currentPage > 3) || 
                    (page === totalPages - 1 && currentPage < totalPages - 2);

                  if (showDots) {
                    return (
                      <span key={page} className="px-2 text-gray-400">
                        ...
                      </span>
                    );
                  }

                  if (!showPage) return null;

                  return (
                    <button
                      key={page}
                      onClick={() => setCurrentPage(page)}
                      className={`px-4 py-2 rounded-lg transition-colors ${
                        currentPage === page
                          ? 'bg-black text-white'
                          : 'text-gray-600 hover:bg-gray-100'
                      }`}
                    >
                      {page}
                    </button>
                  );
                })}

                {/* Next Button */}
                <button
                  onClick={() => setCurrentPage(prev => Math.min(totalPages, prev + 1))}
                  disabled={currentPage === totalPages}
                  className={`px-4 py-2 rounded-lg transition-colors ${
                    currentPage === totalPages
                      ? 'text-gray-400 cursor-not-allowed'
                      : 'text-gray-600 hover:text-black hover:bg-gray-100'
                  }`}
                >
                  Next →
                </button>
              </div>
            )}</div>
          </main>
          </div>
        </div>
      </div>

      {/* Mobile Filter Overlay */}
      <FilterSidebar isMobile={true} />

      {/* Dual Range Slider Styles */}
      <style>{`
        input[type="range"] {
          pointer-events: all;
        }
        
        input[type="range"]::-webkit-slider-thumb {
          appearance: none;
          width: 20px;
          height: 20px;
          border-radius: 50%;
          background: black;
          cursor: pointer;
          border: 2px solid white;
          box-shadow: 0 2px 4px rgba(0,0,0,0.2);
          pointer-events: all;
          position: relative;
          z-index: 999;
        }
        
        input[type="range"]::-moz-range-thumb {
          width: 20px;
          height: 20px;
          border-radius: 50%;
          background: black;
          cursor: pointer;
          border: 2px solid white;
          box-shadow: 0 2px 4px rgba(0,0,0,0.2);
          pointer-events: all;
        }
        
        input[type="range"]::-webkit-slider-runnable-track {
          height: 8px;
          background: transparent;
        }
        
        input[type="range"]::-moz-range-track {
          height: 8px;
          background: transparent;
        }
      `}</style>
    </section>
  );
};

export default FilterPage;