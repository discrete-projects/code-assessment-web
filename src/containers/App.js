import React from 'react'
import ProductsContainer from './ProductsContainer'
import CartContainer from './CartContainer'
import Header from './Header';

const App = () => (
  <div>
    <Header />
    <ProductsContainer />
    <hr/>
    <CartContainer />
  </div>
)

export default App
