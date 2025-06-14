import React, { useState, useEffect } from "react";

import { Link } from "react-router-dom";

import { loadStripe } from "@stripe/stripe-js";

import {
  CardElement,
  useStripe,
  Elements,
  useElements,
} from "@stripe/react-stripe-js";

import axios from "axios";

import { useUserContext } from "../context/user_context.js";
import { useCartContext } from "../context/cart_context.js";

import { STRIPE_PUBLISH_KEY } from "../utils/urls.js";

import styled from "styled-components";

import { useNavigate } from "react-router-dom";

const promise = loadStripe(STRIPE_PUBLISH_KEY);

const CheckoutForm = () => {
  const { cart, shipping_value, price, clearCart } = useCartContext();
  const { user } = useUserContext();

  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);
  const [disabled, setDisabled] = useState(true);
  const [clientid, setClientid] = useState("");
  const [processing, setProcessing] = useState("");

  const stripe = useStripe();
  const elements = useElements();

  const navigate = useNavigate();

  const createPaymentIntent = async () => {
    try {
      const {
        data: { clientSecret },
      } = await axios.post(
        "/api/create-payment-intent",
        JSON.stringify({
          cart,
          shipping_value,
          price,
        })
      );
      console.log("clientSecret");
      console.log(clientSecret);
      setClientid(clientSecret);
    } catch (error) {
      console.log(error.response);
    }
  };

  useEffect(() => {
    createPaymentIntent();
  }, []);

  const handleChange = async (event) => {
    setDisabled(event.empty);
    setError(event.error ? event.error.message : "");
  };
  const handleSubmit = async (ev) => {
    ev.preventDefault();
    setProcessing(true);
    const payload = await stripe.confirmCardPayment(clientid, {
      payment_method: { card: elements.getElement(CardElement) },
    });
    if (payload.error) {
      setError(`Payment Failed : ${payload.error.message}`);
      setProcessing(false);
    } else {
      setError(null);
      setProcessing(false);
      setSuccess(true);
      setTimeout(() => {
        clearCart();
        navigate("/", { replace: true });
      }, 10000);
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white shadow-md rounded-lg h-[76.5vh]">
      {success ? (
        <div className="text-center text-green-600 font-semibold text-lg border border-green-500 p-4 rounded-md mb-4">
          🎉 Your payment was successful!
        </div>
      ) : (
        <div className="mb-6 space-y-4">
          <div className="text-xl font-semibold text-gray-800 border-b pb-2">
            {user ? `Welcome, ${user.name}` : "⚠️ Please login first"}
          </div>
          <div className="text-lg text-gray-700">
            Your total: <strong>{price.subtotal + price.shipping} ₹</strong>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 text-sm text-gray-600">
            <div className="bg-gray-100 px-4 py-2 rounded border">
              Test Card Number: <strong>4242 4242 4242 4242</strong>
            </div>
            <div className="bg-gray-100 px-4 py-2 rounded border">
              Expiry/CVC: <strong>03 / 33 — 3333</strong>
            </div>
          </div>
        </div>
      )}

      <form onSubmit={handleSubmit} id="payment-form" className="space-y-4">
        <div className="border border-gray-300 rounded p-3 bg-gray-50">
          <CardElement id="card-element" onChange={handleChange} />
        </div>

        <button
          disabled={processing || disabled || success}
          className={`w-full py-3 px-6 rounded text-white font-semibold transition-all ${
            processing || disabled || success
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-blue-600 hover:bg-blue-700"
          }`}>
          {processing ? (
            <div className="spinner mx-auto w-5 h-5 border-t-2 border-white border-solid rounded-full animate-spin"></div>
          ) : (
            "💳 PAY NOW"
          )}
        </button>

        {error && (
          <div
            className="text-red-600 text-sm font-medium border border-red-300 bg-red-50 p-2 rounded"
            role="alert">
            {error}
          </div>
        )}

        {success && (
          <p className="text-green-700 text-sm font-medium mt-2">
            View payment details on Stripe:
            <a
              href="https://dashboard.stripe.com/test/payments"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 underline ml-1">
              GO TO STRIPE DASHBOARD
            </a>
          </p>
        )}
      </form>
    </div>
  );
};

const CheckoutPage = () => {
  return (
    <>
      <div className="text-3xl bg-gray-800 dark:bg-gray-900 text-white py-6 px-4 mb-8 flex justify-center">
        <div className="font-semibold text-center flex flex-row flex-wrap">
          <div className="text-white">
            <Link to={"/"}>Home</Link>
          </div>

          <div className="mx-4 text-white">/</div>
          <div className="text-white">Checkout</div>
        </div>
      </div>
      <Wrapper>
        <Elements stripe={promise}>
          <div className="border border-none grid place-content-center">
            <CheckoutForm />
          </div>
        </Elements>
      </Wrapper>
    </>
  );
};

export default CheckoutPage;

const Wrapper = styled.section`
  .App {
    font-family: -apple-system, BlinkMacSystemFont, sans-serif;
    font-size: 16px;
    -webkit-font-smoothing: antialiased;
    display: flex;
    align-items: center;
    flex-direction: column;
    height: 100vh;
    width: 100vw;
  }

  form {
    width: 30vw;
    min-width: 500px;
    align-self: center;
    box-shadow: 0px 0px 0px 0.5px rgba(50, 50, 93, 0.1),
      0px 2px 5px 0px rgba(50, 50, 93, 0.1),
      0px 1px 1.5px 0px rgba(0, 0, 0, 0.07);
    border-radius: 7px;
    padding: 40px;
    margin-top: auto;
    margin-bottom: auto;
  }

  #payment-message {
    color: rgb(105, 115, 134);
    font-size: 16px;
    line-height: 20px;
    padding-top: 12px;
    text-align: center;
  }

  #payment-element {
    margin-bottom: 24px;
  }

  /* Buttons and links */
  button {
    background: #0055de;
    font-family: Arial, sans-serif;
    color: #ffffff;
    border-radius: 4px;
    border: 0;
    padding: 12px 16px;
    font-size: 16px;
    font-weight: 600;
    cursor: pointer;
    display: block;
    transition: all 0.2s ease;
    box-shadow: 0px 4px 5.5px 0px rgba(0, 0, 0, 0.07);
    width: 100%;
  }

  button:hover {
    filter: contrast(115%);
  }

  button:disabled {
    opacity: 0.5;
    cursor: default;
  }

  /* spinner/processing state, errors */
  .spinner,
  .spinner:before,
  .spinner:after {
    border-radius: 50%;
  }

  .spinner {
    color: #ffffff;
    font-size: 22px;
    text-indent: -99999px;
    margin: 0px auto;
    position: relative;
    width: 20px;
    height: 20px;
    box-shadow: inset 0 0 0 2px;
    -webkit-transform: translateZ(0);
    -ms-transform: translateZ(0);
    transform: translateZ(0);
  }

  .spinner:before,
  .spinner:after {
    position: absolute;
    content: "";
  }

  .spinner:before {
    width: 10.4px;
    height: 20.4px;
    background: #0055de;
    border-radius: 20.4px 0 0 20.4px;
    top: -0.2px;
    left: -0.2px;
    -webkit-transform-origin: 10.4px 10.2px;
    transform-origin: 10.4px 10.2px;
    -webkit-animation: loading 2s infinite ease 1.5s;
    animation: loading 2s infinite ease 1.5s;
  }

  .spinner:after {
    width: 10.4px;
    height: 10.2px;
    background: #0055de;
    border-radius: 0 10.2px 10.2px 0;
    top: -0.1px;
    left: 10.2px;
    -webkit-transform-origin: 0px 10.2px;
    transform-origin: 0px 10.2px;
    -webkit-animation: loading 2s infinite ease;
    animation: loading 2s infinite ease;
  }

  /* Payment status page */
  #payment-status {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    row-gap: 30px;
    width: 30vw;
    min-width: 500px;
    min-height: 380px;
    align-self: center;
    box-shadow: 0px 0px 0px 0.5px rgba(50, 50, 93, 0.1),
      0px 2px 5px 0px rgba(50, 50, 93, 0.1),
      0px 1px 1.5px 0px rgba(0, 0, 0, 0.07);
    border-radius: 7px;
    padding: 40px;
    opacity: 0;
    animation: fadeInAnimation 1s ease forwards;
    margin-top: auto;
    margin-bottom: auto;
  }

  #status-icon {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 40px;
    width: 40px;
    border-radius: 50%;
  }

  h2 {
    margin: 0;
    color: #30313d;
    text-align: center;
  }

  a {
    text-decoration: none;
    font-size: 16px;
    font-weight: 600;
    font-family: Arial, sans-serif;
    display: block;
  }
  a:hover {
    filter: contrast(120%);
  }

  #details-table {
    overflow-x: auto;
    width: 100%;
  }

  table {
    width: 100%;
    font-size: 14px;
    border-collapse: collapse;
  }
  table tbody tr:first-child td {
    border-top: 1px solid #e6e6e6; /* Top border */
    padding-top: 10px;
  }
  table tbody tr:last-child td {
    border-bottom: 1px solid #e6e6e6; /* Bottom border */
  }
  td {
    padding-bottom: 10px;
  }

  .TableContent {
    text-align: right;
    color: #6d6e78;
  }

  .TableLabel {
    font-weight: 600;
    color: #30313d;
  }

  #view-details {
    color: #0055de;
  }

  #retry-button {
    text-align: center;
    background: #0055de;
    color: #ffffff;
    border-radius: 4px;
    border: 0;
    padding: 12px 16px;
    transition: all 0.2s ease;
    box-shadow: 0px 4px 5.5px 0px rgba(0, 0, 0, 0.07);
    width: 100%;
  }

  @keyframes loading {
    0% {
      -webkit-transform: rotate(0deg);
      transform: rotate(0deg);
    }
    100% {
      -webkit-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }
  @keyframes fadeInAnimation {
    to {
      opacity: 1;
    }
  }

  @media only screen and (max-width: 600px) {
    form,
    #payment-status {
      width: 80vw;
      min-width: initial;
    }
  }
`;
