import React from 'react';
import Info from '../components/AboutPage/Info';
import Hero from '../components/Hero';
import aboutHeaderBcg from '../images/aboutHeaderBcg.jpeg';


export default function AboutPage() {
  return (
    <>
      <Hero img={aboutHeaderBcg} />
      <Info />
    </>
  )
};
