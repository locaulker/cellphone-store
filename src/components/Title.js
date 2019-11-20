import React from 'react';
import styled from 'styled-components';


export default function Title({ title, center }) {
  return (
    <TitleWrapper className="row" center={center}>
      <div className="col">
        <h2 className="text-title">{title}</h2>
        <div className="title-underline" />
      </div>
    </TitleWrapper>
  )
}


const TitleWrapper = styled.div`
  text-align: ${props => (props.center ? "center" : "left")};

  h2 {
    font-family: 'Oswald', sans-serif;
    font-weight: 300;
    text-transform: uppercase;
    letter-spacing: 3px;
    margin-top: 3rem;
  }

  .title-underline {
    height: 0.2rem;
    width: 5rem;
    background: var(--primaryColor);
    margin: ${props => (props.center ? "0 auto" : "0")};
    margin-bottom: 1.6rem;
  }
`;