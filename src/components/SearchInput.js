import React, { useRef, useEffect, useState } from "react";
import { useProductContext } from "../context/product_context.js";
import { useNavigate } from "react-router-dom";

const SearchModal = ({ isOpen, onClose }) => {
  const modalRef = useRef(null);
  const { products = [] } = useProductContext();
  const [searchedProducts, setSearchProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (modalRef.current && !modalRef.current.contains(e.target)) onClose();
    };
    if (isOpen) document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen, onClose]);

  const searchHighlight = (name, term) => {
    if (!term) return name;
    const lowName = name.toLowerCase();
    const lowTerm = term.toLowerCase();
    const i = lowName.indexOf(lowTerm);
    if (i === -1) return name;
    const end = i + term.length;
    return (
      <>
        {name.slice(0, i)}
        <span className="font-semibold uppercase text-gray-900 dark:text-white">
          {name.slice(i, end)}
        </span>
        {name.slice(end)}
      </>
    );
  };

  useEffect(() => {
    const term = searchTerm.trim().toLowerCase();
    if (!term) {
      setSearchProducts([]);
      return;
    }
    setSearchProducts(
      products.filter((p) => p.name.toLowerCase().includes(term))
    );
  }, [searchTerm, products]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm">
      <div
        ref={modalRef}
        className="relative flex flex-col w-[600px] max-w-[90vw] h-[600px] max-h-[90vh] p-6 rounded-2xl shadow-xl bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-700">
        <button
          aria-label="Close"
          onClick={onClose}
          className="absolute top-4 right-4 h-8 w-8 flex items-center justify-center rounded-full text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition">
          ✕
        </button>

        <div className="sticky top-0 z-10 pb-4">
          <input
            autoFocus
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search products..."
            className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>

        <div className="mt-4 flex-1 overflow-y-auto grid grid-cols-1 sm:grid-cols-2 gap-4">
          {searchedProducts.length ? (
            searchedProducts.map(({ id, image, name }) => (
              <div
                key={id}
                onClick={() => {
                  const product = { productName: name };
                  onClose();
                  navigate(
                    `/product/${id}`,
                    { state: product },
                    { replace: true }
                  );
                }}
                className="flex w-[16rem] h-[5rem] cursor-pointer border border-gray-300 dark:border-gray-600 rounded-lg overflow-hidden bg-gray-100 dark:bg-gray-800 hover:shadow-md transition">
                <img
                  src={image}
                  alt={name}
                  className="w-20 h-full object-cover flex-shrink-0"
                />
                <div className="flex items-center px-4 text-gray-900 dark:text-white">
                  <h2 className="text-base font-medium line-clamp-2">
                    {searchHighlight(name, searchTerm)}
                  </h2>
                </div>
              </div>
            ))
          ) : searchTerm ? (
            <p className="col-span-full text-center text-gray-700 dark:text-gray-300">
              No products found.
            </p>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default SearchModal;
