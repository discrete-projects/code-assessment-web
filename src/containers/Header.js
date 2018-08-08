import React from 'react'
import PropTypes from 'prop-types'

const Header = () => (
  <header className="header">
    <div className="header__title">
      <h2>Acme Store</h2>
    </div>

    <div className="header__scs">
      <span>Your cart is empty</span>
    </div>
  </header>
)

export default Header