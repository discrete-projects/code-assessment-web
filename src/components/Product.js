import React from "react"
import PropTypes from "prop-types"
import ProductItem from './ProductItem'

const Product = ({ price, inventory, title, onAddToCartClicked }) => (
  <div>
    <div className="product">
      <div className="product__inner">
        <div className="product__img">
          <img
            className="img"
            alt="Image of Chronograph Watch"
            src="chronograph.png"
          />
        </div>
        <div className="product__details">
          <div className="product__details-inner">
            <div className="product__title">{title} </div>
            <div className="product__price">{price}</div>
            <div className="product__quantity">
              {inventory ? ` x ${inventory}` : null} remaining
            </div>           
            <div className="product__cta">
              <button
                className="product__cta-btn"
                onClick={onAddToCartClicked}
                disabled={inventory > 0 ? '' : 'disabled'}>
                {inventory > 0 ? 'Add to cart' : 'Sold Out'}
              </button>            
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

Product.propTypes = {
  price: PropTypes.number,
  inventory: PropTypes.number,
  title: PropTypes.string,
  onAddToCartClicked: PropTypes.func.isRequired
};

export default Product;
