import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaGoogle } from "react-icons/fa6";

const Loginpage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center bg-base-100">
      <div className="w-full bg-base-200 text-base-content py-6 px-4 mb-8 justify-center">
        <div className="text-3xl font-semibold text-center">
          <Link to="/">Home</Link>
          <span className="mx-4">/</span>
          <span>Login</span>
        </div>
      </div>
      <div className="w-full max-w-[35rem] p-8 bg-base-100 shadow-lg rounded-box mt-[10rem] border border-base-300">
        <h2 className="text-2xl font-semibold text-center text-base-content mb-6">
          Login
        </h2>
        <form className="space-y-4">
          <div>
            <label
              className="block text-base-content font-medium mb-2"
              htmlFor="usernameOrEmail">
              Username or Email
            </label>
            <input
              type="text"
              id="usernameOrEmail"
              className="input input-bordered w-full"
              placeholder="Enter your username or email"
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
            Login
          </button>
        </form>
        <div className="mt-6 text-center">
          <button className="btn w-full btn-outline flex items-center justify-center gap-2">
            <FaGoogle className="h-5 w-5" />
            Login with Google
          </button>
          <p className="mt-4 text-base-content">
            Don't have an account?{" "}
            <Link to="/signup" className="link link-hover">
              Signup
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Loginpage;
