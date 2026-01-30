import React from 'react'

const ProductCard = ({el}) => {
  return (
     <div className='max-w-74 flex flex-col items-start gap-1'>
            <img className='w-74 h-74.5 bg-[#F0EEED] rounded-[20px] object-contain px-7 py-4' src={el.image} alt="" />
                <p className='line-clamp-1 text-[20px] text-[#000000] font-bold'>{el.title}</p>
            <p className='text-[14px] text-black font-normal'>Rating: {el.rating?.rate}</p>
                <p className='text-[24px] text-[#000000] font-bold'>$ {el.price}</p>
          </div>
  )
}

export default ProductCard
