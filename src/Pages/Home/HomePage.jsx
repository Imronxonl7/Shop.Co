import React from "react";
import AboutPage from "./AboutPage";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Atom } from "react-loading-indicators";
import ProductCard from "../../components/ProductCard";
import SwiperProduct from "../../components/SwiperProduct";
import NewArrivals from "../../components/NewArrivals";
import { reviews } from "../../components/CommentData";


const HomePage = () => {
  const getData = async () => {
    let res = await axios.get(`https://fakestoreapi.com/products`);
    return res;
  };
  
  const { data, isLoading, error } = useQuery({
    queryKey: ["products"],
    queryFn: getData,
  });
  const products = data?.data;
  const categories = products?.map((el) => {
    return el?.category;
  });
  const allCategories = [...new Set(categories)];

  if (isLoading) {
    return (
      <div className="flex items-center justify-center mt-50">
        <Atom
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
          color="#000000"
          size="large"
          text=""
          textColor=""
        />
      </div>
    );
  }
  const comment = reviews?.map((el) => {
    return el
    
  })
  return (
    <>
      <AboutPage />

      <section id="onSale" className="">
        <div className="container mx-auto px-15 py-7">
          <SwiperProduct allCategories={allCategories} products={products} />
        </div>
      </section>

      <section id="newArrivals" className="mt-20">
        <NewArrivals/>
      </section>

      <section>

        
         {/* {
          comment?.map((el) => (
            
          ))
         } */}
      </section>
    </>
  );
};

export default HomePage;
