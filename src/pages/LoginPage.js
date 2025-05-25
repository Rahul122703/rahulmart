import React from "react";
import { Link } from "react-router-dom";
import { FaGoogle } from "react-icons/fa";

const Loginpage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-start bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
      <div className="w-full bg-gray-100 dark:bg-gray-800 py-6 px-4 mb-8 flex justify-center">
        <div className="text-3xl font-semibold text-center">
          <Link to="/" className="hover:underline">
            Home
          </Link>
          <span className="mx-4">/</span>
          <span>Login</span>
        </div>
      </div>
      <div className="w-full max-w-[35rem] p-8 bg-white dark:bg-gray-800 shadow-lg rounded-2xl mt-[10rem] border border-gray-200 dark:border-gray-700">
        <h2 className="text-2xl font-semibold text-center mb-6">Login</h2>
        <form className="space-y-4">
          <div>
            <label className="block font-medium mb-2" htmlFor="usernameOrEmail">
              Username or Email
            </label>
            <input
              type="text"
              id="usernameOrEmail"
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary"
              placeholder="Enter your username or email"
            />
          </div>
          <div>
            <label className="block font-medium mb-2" htmlFor="password">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary"
              placeholder="Enter your password"
            />
          </div>
          <button
            type="submit"
            className="w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition focus:outline-none focus:ring-2 focus:ring-blue-400">
            Login
          </button>
        </form>
        <div className="mt-6 text-center">
          <button className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white flex items-center justify-center gap-2 hover:bg-gray-100 dark:hover:bg-gray-600 transition">
            <FaGoogle className="h-5 w-5" />
            Login with Google
          </button>
          <p className="mt-4">
            Don't have an account?
            <Link
              to="/signup"
              className="text-blue-600 hover:underline dark:text-blue-400">
              Signup
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Loginpage;
