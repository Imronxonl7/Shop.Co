import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import HomePage from "./Pages/Home/HomePage";
import FilterPage from "./Pages/Filter/FilterPage";
import CartPage from "./Pages/Cart/CartPage";
import RegistarPage from "./Pages/Registar/RegistarPage";
import SinglePage from "./Pages/Single/SinglePage";

const App = () => {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="filter" element={<FilterPage />} />
            <Route path="cart" element={<CartPage />} />
            <Route path="registar" element={<RegistarPage />} />
            <Route path="single/:id" element={<SinglePage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
};

export default App;
