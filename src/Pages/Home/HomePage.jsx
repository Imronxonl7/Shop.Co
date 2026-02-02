import React from "react";
import AboutPage from "./AboutPage";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Atom } from "react-loading-indicators";
import SwiperProduct from "../../components/SwiperProduct";
import NewArrivals from "../../components/NewArrivals";
import { reviews } from "../../components/CommentData";
import CustomerReviews from "../../components/CustomerReviews";
import useReactQuery from "../../hooks/useReactQuery";

const HomePage = () => {
  

  const { data, isLoading} = useReactQuery({url:'products' , key:'products'});
  const products = data?.data;
  console.log(products);
  
  
  const categories = products?.map((item) => {
    return item?.category;
  });
  const allCategories = [...new Set(categories)];

  if (isLoading) {
    return (
      // <div className="flex items-center justify-center mt-50">
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
  return (
    <>
      <AboutPage />

      <section id="onSale" className="">
        <div className="container mx-auto px-15 py-7">
          <SwiperProduct allCategories={allCategories} products={products} />
        </div>
      </section>

      <section id="newArrivals" className="mt-20">
        <NewArrivals />
      </section>

      <section className="mt-20">
        <CustomerReviews/>
      </section>
    </>
  );
};

export default HomePage;
