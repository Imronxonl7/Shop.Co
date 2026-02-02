import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import { ArrowLeft, ArrowRight } from 'lucide-react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

const CustomerReviews = () => {
  // Reviews data with useMemo for performance
  const reviews = React.useMemo(() => [
    {
      id: 1,
      name: "Daniel R.",
      rating: 4.5,
      text: "Shopo.co clothes feel premium and stylish. Every item looks exactly like the photos.",
      verified: true
    },
    {
      id: 2,
      name: "Emma K.",
      rating: 4,
      text: "Great selection of elegant and casual wear. Quality is consistently good.",
      verified: true
    },
    {
      id: 3,
      name: "Oliver M.",
      rating: 5,
      text: "Amazing experience overall. The designs are modern and very well made.",
      verified: true
    },
    {
      id: 4,
      name: "Sophia T.",
      rating: 4.5,
      text: "I love how fashionable yet comfortable the outfits are. Definitely recommend.",
      verified: true
    },
    {
      id: 5,
      name: "William S.",
      rating: 4,
      text: "Stylish clothing with solid quality. Delivery was quick too.",
      verified: true
    },
    {
      id: 6,
      name: "Ava L.",
      rating: 4.5,
      text: "The dresses are elegant and flattering. Fabric quality exceeded my expectations.",
      verified: true
    },
    {
      id: 7,
      name: "Benjamin H.",
      rating: 5,
      text: "One of the best online clothing stores I've tried. Unique and trendy pieces.",
      verified: true
    },
    {
      id: 8,
      name: "Mia C.",
      rating: 4,
      text: "Nice balance between casual and classy styles. Easy to mix and match.",
      verified: true
    },
    {
      id: 9,
      name: "Lucas P.",
      rating: 4.5,
      text: "Everything I ordered fits perfectly. Shopo.co really understands style.",
      verified: true
    },
    {
      id: 10,
      name: "Ella N.",
      rating: 4,
      text: "Beautiful designs and reasonable prices. Will order again.",
      verified: true
    },
    {
      id: 11,
      name: "Henry D.",
      rating: 5,
      text: "Top-notch quality and attention to detail. Feels like a luxury brand.",
      verified: true
    },
    {
      id: 12,
      name: "Grace F.",
      rating: 4.5,
      text: "The variety is impressive. From daily wear to special occasions.",
      verified: true
    },
    {
      id: 13,
      name: "Jack W.",
      rating: 4,
      text: "Comfortable, stylish, and well-made clothes. Exactly what I was looking for.",
      verified: true
    },
    {
      id: 14,
      name: "Lily A.",
      rating: 4.5,
      text: "Every piece feels thoughtfully designed. Elegant without being overdone.",
      verified: true
    },
    {
      id: 15,
      name: "Samuel B.",
      rating: 5,
      text: "Exceeded expectations. The styles are fresh and modern.",
      verified: true
    },
    {
      id: 16,
      name: "Chloe E.",
      rating: 4,
      text: "Great quality fabrics and flattering cuts. Very happy with my purchase.",
      verified: true
    },
    {
      id: 17,
      name: "Nathan J.",
      rating: 4.5,
      text: "Perfect mix of trendy and timeless fashion. Shopo.co nailed it.",
      verified: true
    },
    {
      id: 18,
      name: "Zoe K.",
      rating: 4,
      text: "The clothes feel premium and look amazing in person.",
      verified: true
    },
    {
      id: 19,
      name: "Andrew V.",
      rating: 5,
      text: "High-end look without the high-end price. Highly impressed.",
      verified: true
    },
    {
      id: 20,
      name: "Hannah Q.",
      rating: 4.5,
      text: "Stylish, elegant, and comfortable. These outfits boost my confidence.",
      verified: true
    }
  ], []);

  // Error handling
  if (!reviews || reviews.length === 0) {
    return null;
  }

  return (
    <section className="w-full py-12 sm:py-16 lg:py-20 bg-white overflow-hidden">
      <div className="max-w-360 mx-auto px-4 sm:px-6 lg:px-16">
        {/* Header with Navigation */}
        <div className="flex items-start sm:items-center justify-between mb-8 sm:mb-10 lg:mb-12">
          <h2 className="text-[32px] sm:text-[40px] lg:text-[48px] font-black text-black leading-tight uppercase max-w-70 sm:max-w-none">
            OUR HAPPY CUSTOMERS
          </h2>
          
          {/* Navigation Buttons - Desktop */}
          <div className="hidden sm:flex gap-3 lg:gap-4 shrink-0">
            <button 
              className="swiper-button-prev-custom w-10 h-10 lg:w-12 lg:h-12 flex items-center justify-center hover:bg-gray-50 transition-colors group"
              aria-label="Previous review"
            >
              <ArrowLeft className="w-5 h-5 lg:w-6 lg:h-6 text-black" strokeWidth={2} />
            </button>
            <button 
              className="swiper-button-next-custom w-10 h-10 lg:w-12 lg:h-12 flex items-center justify-center hover:bg-gray-50 transition-colors group"
              aria-label="Next review"
            >
              <ArrowRight className="w-5 h-5 lg:w-6 lg:h-6 text-black" strokeWidth={2} />
            </button>
          </div>
        </div>

        {/* Swiper Slider */}
        <div className="relative -mx-4 sm:mx-0">
          <Swiper
            modules={[Navigation, Autoplay]}
            spaceBetween={20}
            slidesPerView={1.1}
            centeredSlides={true}
            loop={true}
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true
            }}
            navigation={{
              prevEl: '.swiper-button-prev-custom',
              nextEl: '.swiper-button-next-custom',
            }}
            breakpoints={{
              480: {
                slidesPerView: 1.3,
                spaceBetween: 16,
                centeredSlides: true,
              },
              640: {
                slidesPerView: 1.8,
                spaceBetween: 20,
                centeredSlides: true,
              },
              768: {
                slidesPerView: 2.5,
                spaceBetween: 20,
                centeredSlides: true,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 20,
                centeredSlides: true,
              },
              1280: {
                slidesPerView: 3,
                spaceBetween: 20,
                centeredSlides: true,
              },
              1536: {
                slidesPerView: 3,
                spaceBetween: 24,
                centeredSlides: true,
              }
            }}
            className="reviews-swiper overflow-visible! px-4 sm:px-0"
          >
            {reviews.map((review) => (
            <div className='flex justify-center'>
                <SwiperSlide key={review.id} className="h-auto!">
                <div className="w-full h-full min-h-55 sm:min-h-60 border border-gray-200 rounded-[20px] p-6 sm:p-7 lg:p-8 flex flex-col bg-white transition-all duration-300 hover:shadow-md">
                  {/* Stars */}
                  <div className="flex gap-1.5 mb-4">
                    {Array.from({ length: 5 }).map((_, index) => {
                      const fullStars = Math.floor(review.rating);
                      const hasHalfStar = review.rating % 1 !== 0;
                      
                      if (index < fullStars) {
                        // Full star
                        return (
                          <svg
                            key={`star-${review.id}-${index}`}
                            className="w-4.5 h-4.5 sm:w-5 sm:h-5 text-[#FFC633] fill-current"
                            viewBox="0 0 20 20"
                          >
                            <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                          </svg>
                        );
                      } else if (index === fullStars && hasHalfStar) {
                        // Half star
                        return (
                          <svg
                            key={`star-${review.id}-${index}`}
                            className="w-4.5 h-4.5 sm:w-5 sm:h-5 text-[#FFC633]"
                            viewBox="0 0 20 20"
                          >
                            <defs>
                              <linearGradient id={`half-${review.id}-${index}`}>
                                <stop offset="50%" stopColor="#FFC633" />
                                <stop offset="50%" stopColor="#E5E7EB" />
                              </linearGradient>
                            </defs>
                            <path 
                              fill={`url(#half-${review.id}-${index})`}
                              d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" 
                            />
                          </svg>
                        );
                      } else {
                        // Empty star
                        return (
                          <svg
                            key={`star-${review.id}-${index}`}
                            className="w-4.5 h-4.5 sm:w-5 sm:h-5 text-gray-300 fill-current"
                            viewBox="0 0 20 20"
                          >
                            <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                          </svg>
                        );
                      }
                    })}
                  </div>

                  {/* Name and Verification */}
                  <div className="flex items-center gap-1.5 mb-3">
                    <h3 className="text-[18px] sm:text-[20px] font-bold text-black">{review.name}</h3>
                    {review.verified && (
                      <svg 
                        className="w-5 h-5 sm:w-6 sm:h-6 text-green-500" 
                        viewBox="0 0 24 24" 
                        fill="none"
                        stroke="currentColor"
                      >
                        <path 
                          strokeLinecap="round" 
                          strokeLinejoin="round" 
                          strokeWidth={2.5} 
                          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" 
                        />
                      </svg>
                    )}
                  </div>

                  {/* Review Text */}
                  <p className="text-gray-600 text-[14px] sm:text-[15px] lg:text-[16px] leading-relaxed grow">
                    "{review.text}"
                  </p>
                </div>
              </SwiperSlide>
            </div>
            ))}
          </Swiper>

          {/* Fade Effect on Sides - Only on large screens */}
          <div className="absolute left-0 top-0 bottom-0 w-16 lg:w-24 bg-linear-to-r from-white via-white to-transparent pointer-events-none z-10 hidden lg:block" />
          <div className="absolute right-0 top-0 bottom-0 w-16 lg:w-24 bg-linear-to-l from-white via-white to-transparent pointer-events-none z-10 hidden lg:block" />
        </div>

        {/* Navigation Buttons - Mobile */}
        <div className="flex sm:hidden justify-center gap-4 mt-6">
          <button 
            className="swiper-button-prev-custom w-10 h-10 flex items-center justify-center border border-gray-300 rounded-full hover:bg-gray-50 transition-colors"
            aria-label="Previous review"
          >
            <ArrowLeft className="w-5 h-5 text-black" strokeWidth={2} />
          </button>
          <button 
            className="swiper-button-next-custom w-10 h-10 flex items-center justify-center border border-gray-300 rounded-full hover:bg-gray-50 transition-colors"
            aria-label="Next review"
          >
            <ArrowRight className="w-5 h-5 text-black" strokeWidth={2} />
          </button>
        </div>
      </div>

      <style>{`
        .reviews-swiper .swiper-slide {
          opacity: 0.3;
          transition: opacity 0.4s ease;
        }
        
        .reviews-swiper .swiper-slide-active {
          opacity: 1;
        }
        
        .reviews-swiper .swiper-slide-next {
          opacity: 1;
        }

        .reviews-swiper .swiper-slide-prev {
          opacity: 1;
        }

        /* Keyingi va oldingi slide'lardan keyin xira bo'ladi */
        .reviews-swiper .swiper-slide-next + .swiper-slide,
        .reviews-swiper .swiper-slide-prev + .swiper-slide {
          opacity: 1;
        }

        /* Mobile - barcha slide'lar to'liq ko'rinadi */
        @media (max-width: 1023px) {
          .reviews-swiper .swiper-slide {
            opacity: 1;
          }
        }

        /* Swiper navigation button hover effect */
        .swiper-button-prev-custom:hover,
        .swiper-button-next-custom:hover {
          background-color: #f3f4f6;
        }
      `}</style>
    </section>
  );
};

export default CustomerReviews;