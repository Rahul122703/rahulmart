import React from "react";

const ContactUs = () => {
  return (
    <div className="border border-base-300 rounded-2xl p-6 sm:p-8 max-w-[1280px] mx-auto my-10 shadow-md flex flex-col text-primary transition-colors duration-300 bg-base-100 dark:bg-gray-900 dark:border-gray-700 dark:text-primary">
      <h2 className="text-2xl sm:text-3xl font-semibold mb-6 text-base-content dark:text-gray-100">
        Contact Us
      </h2>

      <div className="flex flex-col md:flex-row justify-between items-start gap-6 md:gap-10">
        <p className="text-base-content/70 text-base md:text-lg max-w-[30rem] dark:text-gray-400">
          We'd love to hear from you! Whether you have questions about your
          orders, suggestions, or just want to say hello — drop us a message.
          This e-commerce platform is dedicated to delivering high-quality
          products with exceptional customer service.
        </p>

        <form
          className="flex flex-col sm:flex-row flex-wrap gap-4 w-full md:w-auto"
          action="https://formspree.io/f/xqaqpded"
          method="POST">
          <div className="flex flex-col justify-center items-center">
            <div className="flex flex-col">
              <input
                type="email"
                placeholder="Your email address"
                name="_replyto"
                className="flex-grow min-w-[280px] sm:min-w-[350px] md:min-w-[400px] p-3 text-base border border-base-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition duration-200 bg-base-200 text-base-content dark:bg-gray-800 dark:border-gray-600 dark:text-gray-100"
              />
              <textarea
                placeholder="Your message"
                name="message"
                rows={5}
                className="mt-4 flex-grow min-w-[280px] sm:min-w-[350px] md:min-w-[400px] px-4 py-3 text-base border border-base-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition duration-200 resize-y bg-base-200 text-base-content dark:bg-gray-800 dark:border-gray-600 dark:text-gray-100"
              />
            </div>
            <button
              type="submit"
              className="mt-4 max-w-[100px] max-h-[50px] px-6 py-3 text-base rounded-lg transition duration-200
               bg-primary text-primary-content hover:bg-primary-focus focus:ring-2 focus:ring-primary
               dark:bg-blue-700 dark:text-white dark:hover:bg-blue-800 dark:focus:ring-blue-600">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
