import React from "react";
import { Link } from "react-router-dom";
import { FaGoogle } from "react-icons/fa6";

const SignupPage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <div className="font-medium text-xl">
        <Link to="/">
          Home
          <span className="w-[50px] h-1 "> </span>
        </Link>
        <span className="w-[50px] h-1 "> </span>/
        <span className="w-[50px] h-1 "> </span>
        Signup
      </div>
      <div className="w-full max-w-md p-8 bg-white shadow-md rounded-lg">
        <h2 className="text-2xl font-semibold text-center text-gray-800 mb-6">
          Register
        </h2>
        <form className="space-y-4">
          <div>
            <label
              className="block text-gray-700 font-medium mb-2"
              htmlFor="username">
              Username
            </label>
            <input
              type="text"
              id="username"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-gray-400"
              placeholder="Enter your username"
            />
          </div>
          <div>
            <label
              className="block text-gray-700 font-medium mb-2"
              htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-gray-400"
              placeholder="Enter your email"
            />
          </div>
          <div>
            <label
              className="block text-gray-700 font-medium mb-2"
              htmlFor="password">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-gray-400"
              placeholder="Enter your password"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-gray-800 text-white py-2 rounded-md font-semibold hover:bg-gray-700 transition duration-200">
            Register
          </button>
        </form>
        <div className="mt-6 text-center">
          <button className="w-full bg-gray-200 text-gray-700 py-2 rounded-md font-semibold hover:bg-gray-300 transition duration-200 flex items-center justify-center">
            <FaGoogle className="h-5 w-5 mr-2" />
            Regsiter with Google
          </button>
          <p className="mt-4 text-gray-600">
            Already have an account?
            <Link to="/login" className="text-gray-800 hover:underline">
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;
