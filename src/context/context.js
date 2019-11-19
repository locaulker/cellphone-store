import React, { Component } from 'react';
import {linkData} from './linkData';
import {socialData} from './socialData';
import {items} from './productData';

const ProductContext = React.createContext();
// Provider
// Consumer
class ProductProvider extends Component {
  state = {
    sidebarOpen: false,
    cartOpen: false,
    links: linkData,
    socialIcons: socialData,
    cart: [],
    cartItems: 0, //double
    cartSubTotal: 0,
    cartTax: 0,
    CartTotal: 0,
    storeProducts: [],
    filteredProducts: [],
    featuredProducts: [],
    singleProduct: {},
    loading: false
  };

  componentDidMount() {
    // from contentful items
  
    this.setProducts(items);
  }

  // set products
  setProducts = (products) => {
    let storeProducts = products.map(item => {
      const {id} = item.sys;
      const image = item.fields.image.fields.file.url;
      const product = {id, ...item.fields, image};
      return product;
    });

    // featured products
    let featuredProducts = storeProducts.filter(item => item.featured === true);

    this.setState({
      storeProducts,
      filteredProducts: storeProducts,
      featuredProducts,
      cart: this.getStorageCart(),
      singleProduct: this.getStorageProduct(),
      loading: false
    }, 
      () => {
        this.addTotals();
      }
    );
  };


  // get cart from  local storage
  getStorageCart = () => {
    return [];
  }

  // get product from local storage
  getStorageProduct = () => {
    return [];
  }

  // get totals
  getTotals = () => {
    let subTotal = 0;
    let cartItems = 0;
    this.state.cart.forEach( item => {
      subTotal += item.total;
      cartItems += item.count;
    });

    subTotal = parseFloat(subTotal.toFixed(2));

    // Set Tax Rate here. Change the 1st number
    let stateTaxRate = 7 / 100;

    let tax = subTotal * stateTaxRate;
    tax = parseFloat(tax.toFixed(2));

    let total = subTotal + tax;
    total = parseFloat(total.toFixed(2));

    return {
      cartItems,
      subTotal,
      tax,
      total
    }
  };

  // add totals
  addTotals = () => {
    const totals = this.getTotals();
    this.setState ({
      cartItems: totals.cartItems,
      cartSubToTal: totals.subTotal,
      cartTax: totals.tax,
      cartTotal: totals.total
    });
  };

  // sync storage
  syncStorage = () => {

  }

  // add to cart
  addToCart = (id) => {
    // console.log(`add to cart ${id}`);
    let tempCart = [...this.state.cart];
    let tempProducts = [...this.state.storeProducts];
    let tempItem = tempCart.find(item => item.id === id);
    if (!tempItem) {
      tempItem = tempProducts.find( item => item.id === id );
      let total = tempItem.price;
      let cartItem = { ...tempItem, count: 1, total };
      tempCart = [ ...tempCart, cartItem ];
    } else {
      tempItem.count++;
      tempItem.total = tempItem.price * tempItem.count;
      tempItem.total = parseFloat(tempItem.total.toFixed(2));
    }
    this.setState( () => {
      return { cart: tempCart }
    }, () => {
      this.addTotals();
      this.syncStorage();
      this.openCart();
    })
  }

  // set single product
  setSingleProduct = (id) => {
    console.log(`to set single product ${id}`);
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
        openCart: this.openCart,
        addToCart: this.addToCart,
        setSingleProduct: this.setSingleProduct
      }}>
        { this.props.children }
      </ProductContext.Provider>
    )
  }
}
const ProductConsumer = ProductContext.Consumer;

export { ProductProvider, ProductConsumer };