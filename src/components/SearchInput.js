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
      if (modalRef.current && !modalRef.current.contains(e.target)) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen, onClose]);

  const searchHighlight = (productName, searched) => {
    if (!searched) return productName;

    const lowerProduct = productName.toLowerCase();
    const lowerSearched = searched.toLowerCase();

    const startIndex = lowerProduct.indexOf(lowerSearched);
    if (startIndex === -1) {
      return productName;
    }

    const endIndex = startIndex + searched.length;

    return (
      <>
        {productName.slice(0, startIndex)}

        {productName.slice(startIndex, endIndex).toUpperCase()}

        {productName.slice(endIndex)}
      </>
    );
  };

  useEffect(() => {
    const term = searchTerm.trim().toLowerCase();
    if (term === "") {
      setSearchProducts([]);
      return;
    }

    const filtered = products.filter((item) =>
      item.name.toLowerCase().includes(term)
    );
    console.clear();
    console.log(filtered);
    setSearchProducts(filtered);
  }, [searchTerm, products]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-sm bg-black/30">
      <div
        ref={modalRef}
        className="relative bg-base-100 rounded-2xl shadow-xl p-6 flex flex-col h-[600px] w-[600px] max-w-[90vw] max-h-[90vh]">
        <button
          className="absolute top-4 right-4 text-lg btn btn-sm btn-circle btn-ghost"
          onClick={onClose}
          aria-label="Close modal">
          ✕
        </button>

        <div className="sticky top-0 bg-base-100 pb-4 pt-2 z-10">
          <input
            type="text"
            placeholder="Search products..."
            className="input input-bordered w-full"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            autoFocus
          />
        </div>

        <div className="overflow-y-auto mt-4 flex-1 grid grid-cols-1 sm:grid-cols-2 gap-4">
          {searchedProducts.length > 0
            ? searchedProducts.map(({ id, image, name }) => (
                <div
                  key={id}
                  className="card card-side bg-base-200 shadow-md w-[16rem] h-[5rem]"
                  onClick={() => {
                    onClose();
                    navigate(`product/${id}`, { replace: true });
                  }}>
                  <figure>
                    <img
                      src={image}
                      alt={name}
                      className="object-cover w-20 h-20"
                    />
                  </figure>
                  <div className="card-body p-4">
                    <h2 className="card-title text-base font-medium">
                      {searchHighlight(name, searchTerm)}
                    </h2>
                  </div>
                </div>
              ))
            : searchTerm && (
                <p className="col-span-full text-center text-base-content opacity-70">
                  No products found.
                </p>
              )}
        </div>
      </div>
    </div>
  );
};

export default SearchModal;
