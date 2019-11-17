import React from 'react';
import Hero from '../components/Hero';
import contactImg from '../images/contactBcg.jpg';
import Contact from '../components/ContactPage/Contact';


export default function CartPage() {
  return (
    <>
      <Hero img={contactImg} />
      <Contact />
    </>
  )
}