import React from 'react';
import styled from 'styled-components';
import {ProductConsumer} from '../context';


export default function Footer() {
  return (
    <ProductConsumer>
      {value => {
        return (
          <FooterWrapper>
            <div className="container py-3">
              <div className="row">
                <div className="col-md-6">
                  <p className="pt-2">
                    Copyright &copy; &ndash; <strong>eStore {new Date().getFullYear()}</strong> | <small>All Rights Reserved</small>
                  </p>
                </div>
                <div className="col-md-6 text-right">
                  {value.socialIcons.map(item => <a href={item.url} key={item.id} target="_blank" rel="noopener noreferrer">{item.icon}</a>)}
                </div>
              </div>
            </div>
          </FooterWrapper>
        )
      }}
    </ProductConsumer>
  )
}


const FooterWrapper = styled.footer`
  background: var(--mainBlack);
  color: var(--mainWhite);

  .icon {
    font-size: 2.5rem;
    color: var(--mainWhite);
    transition: var(--mainTransition);
    padding-left: 1rem;
  }
  .icon:hover {
    color: var(--primaryColor);
    cursor: pointer;
  }
`;