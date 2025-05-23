import React from "react";

const ContactUs = () => {
  return (
    <div className="border border-base-300 rounded-2xl p-6 sm:p-8 max-w-[1280px] mx-auto my-10 shadow-md flex flex-col text-primary transition-colors duration-300 bg-base-100">
      <h2 className="text-2xl sm:text-3xl font-semibold mb-6 text-base-content">
        Contact Us
      </h2>

      <div className="flex flex-col md:flex-row justify-between items-start gap-6 md:gap-10">
        <p className="text-base-content/70 text-base md:text-lg max-w-[30rem]">
          We'd love to hear from you! Whether you have questions about your
          orders, suggestions, or just want to say hello — drop us a message.
          This e-commerce platform is dedicated to delivering high-quality
          products with exceptional customer service.
        </p>

        <form
          className="flex flex-row flex-wrap sm:flex-row gap-4 w-full md:w-auto"
          action="https://formspree.io/f/xqaqpded"
          method="POST">
          <input
            type="email"
            placeholder="Your email address"
            className="flex-1 min-w-[300px] p-1 text-sm sm:text-base border border-base-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition duration-200 bg-base-200 text-base-content"
            name="_replyto"
          />
          <textarea
            placeholder="Your message"
            name="message"
            rows={3}
            className="flex-1 min-w-[300px] px-4 py-2 text-sm sm:text-base border border-base-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition duration-200 resize-none bg-base-200 text-base-content"
          />
          <button
            type="submit"
            className="px-6 py-2 text-sm sm:text-base bg-primary text-primary-content rounded-lg hover:bg-primary-focus focus:ring-2 focus:ring-primary transition duration-200">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
