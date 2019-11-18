import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import {FaSearch, FaCartPlus} from 'react-icons/fa';
import {ProductConsumer} from '../context';


export default function Product({product}) {
  return (
    <ProductConsumer>
      {value => {
        const {addToCart, setSingleProduct} = value;
        return (
          <ProductWrapper className="col-10 mx-auto col-sm-8 col-md-6 col-lg-4 my-3">
            <div className="card">
              <div className="img-container">
                <img 
                  src={product.image} 
                  className="card-img-top img-fluid p-5" 
                  alt="Product"
                  // style={{height: '320px', width: '320px'}}
                />
                <div className="product-icons">
                  <Link to={`/products/${product.id}`} onClick={() => setSingleProduct(product.id)}>
                    <FaSearch className="icon" />
                  </Link>
                  <FaCartPlus className="icon" onClick={() => addToCart(product.id)} />
                </div>
              </div>
              <div className="card-body d-flex justify-content-between">
                <p className="mb-0">{product.title}</p>
                <p className="mb-0 text-main">&#36;{product.price}</p>
              </div>
            </div>
          </ProductWrapper>
        )
      }}
    </ProductConsumer>
  )
}


const ProductWrapper = styled.div`
  
  .card {
    transition: var(--mainTransition);
    box-shadow: 1px 1px 1px 0 rgba(0, 0, 0, .1);
    height: 100%;
  }
  .card:hover {
    border: 2px solid var(--primaryColor);
    background-color: var(--mainBlack);
    cursor: pointer;
  }
  .card-img-top {
    transition: var(--mainTransition);
  }
  .card:hover .card-img-top {
    transform: scale(1.03);
    opacity: 0.35;
  }
  .img-container {
    position: relative;
    
  }
  .product-icons {
    /* margin-top: 1.5rem; */
    transition: var(--mainTransition);
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    opacity: 0;
  }
  .icon {
    font-size: 2rem;
    margin: .2rem;
    padding: 0;
    color: var(--primaryColor);
    background: var(--mainWhite);
    padding: 4px;
    border-radius: 5px;
    z-index: 1;
  }
  .card:hover .product-icons {
    opacity: 1;
  }
  .card-body {
    border-top: 1px solid var(--mediumGrey);
    font-weight: 700;
    text-transform: capitalize;
    /* letter-spacing: 1px; */
  }
  .card:hover .card-body {
    color: var(--mainWhite);
    border-top: 1px solid var(--primaryColor);
  }
`;