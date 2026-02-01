import React from 'react'

const ProductCard = ({el , index}) => {
  return (
     <div key={index} className='max-w-54 md:max-w-74 flex flex-col items-start gap-1'>
            <img className='w-54 h-44.5 md:w-74 md:h-74.5 bg-[#F0EEED] rounded-[20px] object-contain p-2  md:px-7 md:py-4' src={el.image} alt="" />
                <p className='line-clamp-1 text-[16px] md:text-[20px] text-[#000000] font-bold'>{el.title}</p>
            <p className='text-[12px] md:text-[14px] text-black font-normal'>Rating: {el.rating?.rate}</p>
                <p className=' text-[16px] md:text-[24px] text-[#000000] font-bold'>$ {el.price}</p>
          </div>
  )
}

export default ProductCard
