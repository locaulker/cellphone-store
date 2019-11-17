import React from 'react';
import styled from 'styled-components';
import mainBcg from '../images/mainBcg.jpeg';


export default function Hero({img, title, max, children}) {
  return (
    <HeroWrapper max={max} img={img}>
      <div className="banner">
        <h1 className="title">{title}</h1>
        { children }
      </div>
    </HeroWrapper>
  )
}


const HeroWrapper = styled.div`
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: ${props => (props.max ? '100vh' : '60vh')};
  /* background: lightblue; */
  color: var(--mainWhite);
  background: linear-gradient(var(--primaryRGBA), var(--primaryRGBA)), url(${props => props.img}) center/cover no-repeat;

  .title {
    padding-top: 2rem;
    font-size: 4.5rem;
    text-transform: uppercase;
    font-family: "Montserrat", sans-serif;
    font-weight: 100;
    text-shadow: 4px 4px 2px rgba(0, 0, 0, 0.3);
    letter-spacing: var(--mainSpacing);
    margin-bottom: 2.5rem;
  }
`;

Hero.defaultProps = {
  img: mainBcg
}