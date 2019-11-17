import React, { Component } from 'react';
import {linkData} from './linkData';
import {socialData} from './socialData';

const ProductContext = React.createContext();
// Provider
// Consumer
class ProductProvider extends Component {
  state = {
    sidebarOpen: false,
    cartOpen: false,
    cartItems: 2,
    links: linkData,
    socialIcons: socialData,
    cart: []
  }

  // Sidebar Button Handler
  handleSidebar = () => {
    this.setState({sidebarOpen: !this.state.sidebarOpen})
  }

  // Cart Icon Button Handler
  handleCart = () => {
    this.setState({cartOpen: !this.state.cartOpen})
  }

  // Close Cart Handler
  closeCart = () => {
    this.setState({cartOpen: false})
  }

  // Open Cart Handler
  openCart = () => {
    this.setState({cartOpen: true})
  }


  render() {
    return (
      <ProductContext.Provider value={{
        ...this.state,
        handleSidebar: this.handleSidebar,
        handleCart: this.handleCart,
        closeCart: this.closeCart,
        openCart: this.openCart
      }}>
        { this.props.children }
      </ProductContext.Provider>
    )
  }
}
const ProductConsumer = ProductContext.Consumer;

export { ProductProvider, ProductConsumer };