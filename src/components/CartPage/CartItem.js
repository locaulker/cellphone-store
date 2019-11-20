import React from 'react';
import { 
  FaTrash, 
  FaChevronCircleUp, 
  FaChevronCircleDown,
  FaMinus
} from 'react-icons/fa';

export default function CartItem({
  cartItem, increment, decrement, removeItem
}) {
  const { id, title, price, count, total, image } = cartItem;
  return (
    <div className="row mt-5 mt-lg-0 text-capitalize text-center align-items-center">

      {/* Image Starts here */}
      <div className="col-10 mx-auto col-lg-2 pb-2">
        <img src={image} alt={title} width="60" className="img-fluid"/>
      </div>

      {/* Product Name Starts here */}
      <div className="col-10 mx-auto col-lg-2 pb-2">
        <span className="d-lg-none">Item: </span>
        <small><FaMinus /></small>&nbsp;{title}
      </div>

      {/* Price Starts here */}
      <div className="col-10 mx-auto col-lg-2 pb-2">
        <span className="d-lg-none">price: </span>
        ${price}
      </div>

      {/* Increment/Decrement Starts here */}
      <div className="col-10 mx-auto col-lg-2 my-2 my-lg-0">
        <div className="d-flex justify-content-center">
          <div>
            <FaChevronCircleDown 
              onClick={ () => decrement(id) } 
              className="cart-icon text-primary"
            />
            <span className="text-title text-muted mx-3">{count}</span>
            <FaChevronCircleUp 
              onClick={ () => increment(id) } 
              className="cart-icon text-primary"
            />
          </div>
        </div>
      </div>

      {/* RemoveItem Starts here */}
      <div className="col-10 mx-auto col-lg-2">
        <FaTrash 
          className="text-danger cart-icon"
          onClick={ () => removeItem(id) }
        />
      </div>

      {/* Item Total Cost starts here */}
      <div className="col-10 mx-auto col-lg-2">
        ${total}
      </div>
      
    </div>
  )
}
