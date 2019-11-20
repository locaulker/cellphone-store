import React from 'react';
import {ProductConsumer} from '../../context';


export default function CartTotals() {
  return (
    <div className="container">
      <div className="row">
        <ProductConsumer>
          {value => {
            const { clearCart, cartSubTotal, cartTax, cartTotal } = value;
            return (
              <div className="col text-title text-center my-4">
                <button 
                  className="btn btn-outline-danger text-capitalize mb-4"
                  onClick={clearCart}
                >clear cart</button>
                <h6 className="text-muted">subtotal: ${cartSubTotal}</h6>
                <h6 className="text-muted">tax: ${cartTax}</h6>
                <h3>total: ${cartTotal}</h3>
              </div>
            )
          }}
        </ProductConsumer>
      </div>
    </div>
  )
}
