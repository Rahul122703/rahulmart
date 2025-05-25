import {
  FaShippingFast,
  FaLock,
  FaHeadset,
  FaTags,
  FaUndo,
  FaBoxOpen,
} from "react-icons/fa";

const features = [
  {
    icon: <FaShippingFast className="text-4xl text-primary mb-4" />,
    title: "Fast Delivery",
    description:
      "We ensure your orders reach you as fast as possible with trusted delivery partners.",
  },
  {
    icon: <FaLock className="text-4xl text-primary mb-4" />,
    title: "Secure Payments",
    description:
      "Your transactions are protected with advanced security and encryption protocols.",
  },
  {
    icon: <FaHeadset className="text-4xl text-primary mb-4" />,
    title: "24/7 Customer Support",
    description:
      "Need help? Our support team is here for you any time, any day.",
  },
  {
    icon: <FaTags className="text-4xl text-primary mb-4" />,
    title: "Best Offers",
    description:
      "Shop more and save more with exciting discounts and exclusive deals.",
  },
  {
    icon: <FaUndo className="text-4xl text-primary mb-4" />,
    title: "Easy Returns",
    description:
      "Not satisfied? You can return items easily with our simple return policy.",
  },
  {
    icon: <FaBoxOpen className="text-4xl text-primary mb-4" />,
    title: "Wide Range of Products",
    description:
      "From electronics to fashion — we have everything you need in one place.",
  },
];

const MidSection = () => {
  return (
    <section className="w-full bg-base-200 dark:bg-gray-900 py-20 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-base-content dark:text-white text-center mb-6">
          Why Choose Us?
        </h2>
        <p className="text-center text-base-content/70 dark:text-white/70 max-w-3xl mx-auto mb-14 text-base md:text-lg">
          We're here to make online shopping easier, better, and more enjoyable
          for you. From lightning-fast delivery to secure payments, discover why
          customers love us.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-base-100 dark:bg-gray-800 p-8 rounded-xl shadow-sm hover:shadow-xl transition duration-300 text-center cursor-pointer hover:scale-[1.02]">
              <div className="flex justify-center">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-base-content dark:text-white mb-2">
                {feature.title}
              </h3>
              <p className="text-base-content/70 dark:text-white/70 text-sm">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-20 text-center">
          <h3 className="text-2xl font-semibold text-base-content dark:text-white mb-3">
            Start Shopping Today!
          </h3>
          <p className="text-base-content/70 dark:text-white/70 max-w-xl mx-auto text-sm md:text-base">
            Discover handpicked products at unbeatable prices. Your perfect
            shopping destination awaits just a few clicks away.
          </p>
        </div>
      </div>
    </section>
  );
};

export default MidSection;
