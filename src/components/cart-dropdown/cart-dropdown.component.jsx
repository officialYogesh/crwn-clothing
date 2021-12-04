import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { selectCartItems } from "../../redux/cart/cart.selectors";
import CartItem from "../cart-item/cart-item.component";
import CustomButton from "../custom-button/custom-button.component";

import "./cart-dropdown.styles.scss";

const CartDropdown = ({ cartItems }) => {
  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {cartItems.map((cartItem) => (
          <CartItem key={cartItem.id} item={cartItem} />
        ))}
      </div>
      <CustomButton>GO TO CHECKOUT</CustomButton>
    </div>
  );
};

// * Another approach to destructure and use state
// const mapStateToProps = ({ cart: { cartItems } }) => ({
//   cartItems,
// });

// * Can pass state manually to single or multiple selectors
// const mapStateToProps = (state) => ({
//   cartItems: selectCartItems(state),
// });

// * createStructuredSelector will automatically pass the top level state received by mapStateToProps to selectors
const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
});

export default connect(mapStateToProps)(CartDropdown);
