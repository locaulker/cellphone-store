import React from 'react';
import Products from '../components/ProductsPage/Products';
import Hero from '../components/Hero';
import productsBcg from '../images/productsBcg.jpg';

export default function ProductsPage() {
  return (
    <>
      <Hero img={productsBcg} />
      <Products />
    </>
  )
}