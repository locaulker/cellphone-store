import React from 'react';
import Hero from '../components/Hero';
import {Link} from 'react-router-dom';
import Services from '../components/HomePage/Services';
import FeaturedProducts from '../components/HomePage/Featured';


export default function HomePage() {
  return (
    <>
      <Hero title="awesome gadgets" max="true">
        <Link to="/products" className="main-link">
          our products
        </Link>
      </Hero>
      <Services />
      <FeaturedProducts />
    </>
  )
}