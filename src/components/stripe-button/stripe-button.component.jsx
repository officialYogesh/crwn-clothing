import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({ price }) => {
  const priceForStipe = price * 100;
  const publishableKey =
    "pk_test_51K47kXSJ9dFPl1KfAW9H7ieanRaYTep8froBG44HOT2WW1fx6mzfxGLdQDpMZV7iWQX1G2TPl49cAMh8uAk9vsUJ00NNQkE27Z";

  const onToken = (token) => {
    console.log("token :>> ", token);
    alert("Payment successful!!");
  };

  return (
    <StripeCheckout
      label="Pay Now"
      name="CRWN Clothing Ltd."
      currency="USD"
      billingAddress
      shippingAddress
      allowRememberMe={true}
      image="../../assets/images/crown.svg"
      description={`Your total is $${price}`}
      amount={priceForStipe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
