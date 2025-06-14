import stripe from "stripe";

import dotenv from "dotenv";
dotenv.config();

const stripe_initializer = new stripe(process.env.REACT_APP_STRIPE_SECRETKEY);

export const handler = async (event) => {
  const {
    price: { subtotal, shipping },
  } = JSON.parse(event.body);
  const calculateOrderAmount = () => {
    return subtotal + shipping;
  };

  try {
    const paymentIntent = await stripe_initializer.paymentIntents.create({
      amount: calculateOrderAmount(),
      currency: "inr",
    });
    return {
      statusCode: 200,
      body: JSON.stringify({ clientSecret: paymentIntent.client_secret }),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify(error),
    };
  }
};
