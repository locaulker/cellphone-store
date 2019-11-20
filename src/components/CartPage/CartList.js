import React from 'react';
import {ProductConsumer} from '../../context';
import CartItem from './CartItem';
import Title from '../Title';
import { FaCentercode } from 'react-icons/fa';

export default function CartList() {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col">
          <ProductConsumer>
            {value => {
              const {cart, increment, decrement, removeItem} = value;
              if (cart.length === 0) {
                return <h2 className="text-title text-center my-4">your cart is empty</h2>
              } else {
                return (
                  <>
                    {cart.map(item => (
                        <CartItem
                          key={item.id} 
                          cartItem={item}
                          increment={increment}
                          decrement={decrement}
                          removeItem={removeItem}
                        />
                      ))
                    }
                  </>
                )
              }
            }}
          </ProductConsumer>
        </div>
      </div>
      {/* 
      CartList
      <CartItem /> */}
    </div>
  )
}
