import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

// Web Pages
import Home from './pages/HomePage';
import About from './pages/AboutPage';
import Products from './pages/ProductsPage';
import Contact from './pages/ContactPage';
import SingleProduct from './pages/SingleProductPage';
import Cart from './pages/CartPage';
import Default from './pages/Default';

import {Route, Switch} from 'react-router-dom';


import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import SideCart from './components/SideCart';
import Footer from './components/Footer';


class App extends Component {
  render() {
    return (
      <>
        {/* Navbar, Sidebar, Cart & Footer Components */}
        <Navbar />
        <Sidebar />
        <SideCart />

        <Switch>
          <Route path="/" exact component={ Home } />
          <Route path="/about" component={ About } />
          <Route path="/contact" component={ Contact } />
          <Route path="/products" exact component={ Products } />
          <Route path="/products/:id" component={ SingleProduct } />
          <Route path="/cart" component={ Cart } />
          <Route component={ Default } />
        </Switch>

        <Footer />
      </>
    );
  }
}


export default App;