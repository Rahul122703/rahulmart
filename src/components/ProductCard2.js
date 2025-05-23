import React from "react";
import { useNavigate } from "react-router-dom";
import { FaSearchPlus } from "react-icons/fa";

const SmallCard = ({ id, image, price, name }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/product/${id}`, { replace: true });
  };

  return (
    <div
      onClick={handleClick}
      className="cursor-pointer border border-white -base-100 rounded-xl hover:shadow-lg w-full md:w-[18rem] overflow-hidden transition-all duration-300 mb-4 md:m-4">
      <div className="h-48 w-full overflow-hidden flex-1 relative">
        <div className="w-full h-full absolute bg-neutral opacity-0 hover:opacity-50 flex justify-center items-center text-neutral-content text-[1.5rem] transition-all duration-500">
          <FaSearchPlus />
        </div>
        <img
          src={image}
          alt="product"
          className="h-full w-full object-cover rounded-t-xl"
        />
      </div>

      <div className="p-4">
        <div className="font-semibold text-lg text-base-content truncate">
          {name}
        </div>
        <div className="text-sm text-base-content/70 mt-1">{price} ₹</div>
      </div>
    </div>
  );
};

export default SmallCard;
