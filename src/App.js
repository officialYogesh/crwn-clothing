import React, { useEffect } from "react";
import { Switch, Route, Redirect } from "react-router";
import { useSelector, useDispatch } from "react-redux";
// import { createStructuredSelector } from "reselect";
// import { onAuthStateChanged } from "firebase/auth";
// import { doc, onSnapshot } from "@firebase/firestore";

import { selectCurrentUser } from "./redux/user/user.selectors";
import { checkUserSession } from "./redux/user/user.actions";
// import { db, auth } from "./firebase/firebase.utils";

import ShopPage from "./pages/shop/shop.component";
import SignInAndSignUpPage from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component";
import CheckoutPage from "./pages/checkout/checkout.component";

import Home from "./pages/homepage/home.component";
import Header from "./components/header/header.component";

import "./App.css";

const App = () => {
  // unsubscribeFromAuth = null;
  // unsubscribeFromSnapshot = null;

  const currentUser = useSelector(selectCurrentUser);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(checkUserSession());
  }, [dispatch]);

  // todo: Can add below code in useEffect cleanup function
  // componentWillUnmount() {
  //   this.unsubscribeFromAuth();
  //   this.unsubscribeFromSnapshot();
  // }

  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/shop" component={ShopPage} />
        <Route exact path="/checkout" component={CheckoutPage} />
        <Route
          exact
          path="/signin"
          render={() =>
            currentUser ? <Redirect to="/" /> : <SignInAndSignUpPage />
          }
        />
        <Redirect from="*" to="/" />
      </Switch>
    </div>
  );
};

// const mapStateToProps = createStructuredSelector({
//   currentUser: selectCurrentUser,
// });

// const mapDispatchToProps = (dispatch) => ({
//   checkUserSession: () => dispatch(checkUserSession()),
// });

export default App;
