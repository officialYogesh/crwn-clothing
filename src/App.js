import React from "react";
import { Switch, Route, Redirect } from "react-router";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { onAuthStateChanged } from "firebase/auth";
import { doc, onSnapshot } from "@firebase/firestore";

import { selectCurrentUser } from "./redux/user/user.selectors";
import { db, auth } from "./firebase/firebase.utils";
import { setCurrentUser } from "./redux/user/user.actions";

import ShopPage from "./pages/shop/shop.component";
import SignInAndSignUpPage from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component";
import CheckoutPage from "./pages/checkout/checkout.component";

import Home from "./pages/homepage/home.component";
import Header from "./components/header/header.component";

import "./App.css";

class App extends React.Component {
  unsubscribeFromAuth = null;
  unsubscribeFromSnapshot = null;

  componentDidMount() {
    const { setCurrentUser } = this.props;

    this.unsubscribeFromAuth = onAuthStateChanged(auth, async (userAuth) => {
      if (userAuth) {
        this.unsubscribeFromSnapshot = onSnapshot(
          doc(db, "users", userAuth.uid),
          (doc) => {
            setCurrentUser({
              id: doc.id,
              ...doc.data(),
            });
          }
        );
      } else {
        setCurrentUser(userAuth);
      }
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
    this.unsubscribeFromSnapshot();
  }

  render() {
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
              this.props.currentUser ? (
                <Redirect to="/" />
              ) : (
                <SignInAndSignUpPage />
              )
            }
          />
          <Redirect from="*" to="/" />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
