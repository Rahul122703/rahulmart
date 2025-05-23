import React from "react";
import { Link } from "react-router-dom";
import { FaGoogle } from "react-icons/fa6";

const SignupPage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center bg-base-100">
      <div className="w-full bg-base-200 text-base-content py-6 px-4 mb-8 justify-center">
        <div className="text-3xl font-semibold text-center">
          <Link to="/">Home</Link>
          <span className="mx-4">/</span>
          <span>Register</span>
        </div>
      </div>
      <div className="w-full max-w-[35rem] p-8 bg-base-100 shadow-lg rounded-box mt-[10rem] border border-base-300">
        <h2 className="text-2xl font-semibold text-center text-base-content mb-6">
          Register
        </h2>
        <form className="space-y-4">
          <div>
            <label
              className="block text-base-content font-medium mb-2"
              htmlFor="username">
              Username
            </label>
            <input
              type="text"
              id="username"
              className="input input-bordered w-full"
              placeholder="Enter your username"
            />
          </div>
          <div>
            <label
              className="block text-base-content font-medium mb-2"
              htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="input input-bordered w-full"
              placeholder="Enter your email"
            />
          </div>
          <div>
            <label
              className="block text-base-content font-medium mb-2"
              htmlFor="password">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="input input-bordered w-full"
              placeholder="Enter your password"
            />
          </div>
          <button type="submit" className="btn btn-neutral w-full">
            Register
          </button>
        </form>
        <div className="mt-6 text-center">
          <button className="btn w-full btn-outline flex items-center justify-center gap-2">
            <FaGoogle className="h-5 w-5" />
            Register with Google
          </button>
          <p className="mt-4 text-base-content">
            Already have an account?
            <Link to="/login" className="link link-hover">
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;
