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

export { footerSections, companyInfo };
