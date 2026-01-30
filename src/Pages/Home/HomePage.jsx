import React from 'react'
import AboutPage from './AboutPage'
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import { Atom } from 'react-loading-indicators'
import ProductCard from '../../components/ProductCard'


const HomePage = () => {
  const getData = async() => {
    let res = await axios.get(`https://fakestoreapi.com/products`)
    return res
  }
  const {data  , isLoading , error} = useQuery({
    queryKey:["products"],
    queryFn:getData
  })
const products = data?.data
console.log(products);

if(isLoading){
  return <div className='flex items-center justify-center'><Atom style={{display:"flex" , alignItems:"center" , justifyContent:"center"}} color="#000000" size="large" text="" textColor="" /></div>
}  
  return (
    <>
    <AboutPage/>


      <section id='onSale'>
        <div className="container mx-auto px-10x py-7">
          <p>CAtegory Name</p>
        <div className='grid grid-cols-4 gap-5'>
           {
          products?.map((el) => (
            <ProductCard el={el}/>
          ))
         }
        </div>
        </div>
      </section>



      <section id='newArrivals'>
      </section>


      <section>
      </section>
    </>
  )
}

export default HomePage
