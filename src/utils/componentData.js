import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaCcVisa,
  FaCcMastercard,
  FaCcPaypal,
  FaCcAmex,
  FaCcDiscover,
} from "react-icons/fa";

const footerSections = [
  {
    section: "Quick Links",
    links: [
      { name: "Shop", url: "#" },
      { name: "New Arrivals", url: "#" },
      { name: "Best Sellers", url: "#" },
      { name: "About Us", url: "#" },
      { name: "Contact", url: "#" },
      { name: "FAQs", url: "#" },
      { name: "Privacy Policy", url: "#" },
      { name: "Terms & Conditions", url: "#" },
    ],
  },
  {
    section: "Follow Us",
    links: [
      { name: "Facebook", url: "#", icon: <FaFacebook size={20} /> },
      { name: "Instagram", url: "#", icon: <FaInstagram size={20} /> },
      { name: "Twitter", url: "#", icon: <FaTwitter size={20} /> },
    ],
  },
  {
    section: "We Accept",
    links: [
      { name: "Visa", icon: <FaCcVisa size={28} /> },
      { name: "Mastercard", icon: <FaCcMastercard size={28} /> },
      { name: "PayPal", icon: <FaCcPaypal size={28} /> },
      { name: "Amex", icon: <FaCcAmex size={28} /> },
      { name: "Discover", icon: <FaCcDiscover size={28} /> },
    ],
  },
];

const companyInfo = {
  name: "Rahul Mart",
  description:
    "Your go-to destination for trendy, affordable, and quality shopping experiences.",
  contact: {
    phone: "+91 8291147114",
    email: "rsharma122703@gmail.com",
    address: "123 Market Street, Mumbai, India",
  },
};

const featured_product_data = [
  {
    productName: "Product A",
    image:
      "https://stimg.cardekho.com/images/carexteriorimages/930x620/Rolls-Royce/Spectre/11100/1705661590820/front-left-side-47.jpg?imwidth=420&impolicy=resize",
    price: "$29.99",
  },
  {
    productName: "Product B",
    image: "https://images.pexels.com/photos/3764984/pexels-photo-3764984.jpeg",
    price: "$39.99",
  },
  {
    productName: "Product C",
    image:
      "https://stimg.cardekho.com/images/carexteriorimages/930x620/Rolls-Royce/Rolls-Royce-Phantom/7783/1587206758888/front-left-side-47.jpg?imwidth=420&impolicy=resize",
    price: "$19.99",
  },
  {
    productName: "Product D",
    image:
      "https://www.rolls-roycemotorcars.com/content/dam/rrmc/marketUK/rollsroycemotorcars_com/phantom-series-ii-discover/page-properties/Phantom-II-Discover-Hero-Single-Twin-Card.jpg",
    price: "$49.99",
  },
];

export { footerSections, companyInfo, featured_product_data };
