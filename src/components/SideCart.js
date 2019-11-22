import React from 'react';
import {ProductConsumer} from '../context';
import styled from 'styled-components';
import { Link } from 'react-router-dom';


export default function SideCart() {
  return (
    <ProductConsumer>
      {value => {
        const { cartOpen, closeCart, cart, cartTotal } = value;
          return (
            <CartWrapper show={cartOpen} onClick={closeCart}>
              <h6 className="text-center text-main text-uppercase">Side Cart Items</h6>
              <hr/>
              <ul>
                {cart.map(item => {
                  return (
                    <li className="cart-item mb-4" key={item.id}>
                      <img src={`${item.image}`} alt={item.title} width="35" />
                      <div className="mt-3">
                        <h6 className="text-capitalize text-muted">{item.title}</h6>
                        <h6 className="text-title">qty: {item.count}</h6>
                      </div>
                    </li>
                  )
                })}
              </ul>
              <hr/>
              <h4 className="text-uppercase text-main text-center">cart total: ${cartTotal}</h4>
              <hr/>
              <div className="text-center my-5">
                <Link to="/cart" className="small-link">view main cart</Link>
              </div>

            </CartWrapper>
          );
      }}
    </ProductConsumer>
  )
}


const CartWrapper = styled.div`
  position: fixed;
  top: 70px;
  right: 0;
  width: 100%;
  height: 100%;
  background: var(--mainGrey);
  z-index: 1;
  transform: ${props => (props.show ? 'translateX(0)' : 'translateX(100%)')};
  border-left: 4px solid var(--primaryColor);
  transition: var(--mainTransition);

  @media (min-width: 576px) {
    width: 20rem;
  }

  overflow: scroll;
  padding: 3rem 2rem 4rem 2rem;

  ul {
    padding: 0 !important;
  }
  .cart-item {
    list-style-type: none;
  }

`;