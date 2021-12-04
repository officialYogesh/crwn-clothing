import { createSelector } from "reselect";

// Input selector that doesn't user createSelector
const selectCart = (state) => state.cart;

// Output selector that uses Input selectors and createSelector
// This creates a mentioned selector
export const selectCartItems = createSelector(
  [selectCart],
  (cart) => cart.cartItems
);

export const selectCartItemsCount = createSelector(
  [selectCartItems],
  (cartItems) =>
    cartItems.reduce(
      (accumulatedQuantity, cartItem) =>
        accumulatedQuantity + cartItem.quantity,
      0
    )
);
