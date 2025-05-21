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
      className="cursor-pointer bg-white rounded-xl hover:shadow-lg w-[18rem] overflow-hidden transition-all duration-300 m-4">
      <div className="h-48 w-full overflow-hidden flex-1 relative">
        <div
          className="w-full h-full border border-black absolute bg-black opacity-0 hover:opacity-50 flex
                  flex-row justify-center items-center text-white text-[1.5rem] transition-all duration-[0.5s]">
          <FaSearchPlus />
        </div>
        <img
          src={image}
          alt="product"
          className="h-full w-full object-cover rounded-t-xl"
        />
      </div>

      <div className="p-4 ">
        <div className="font-semibold text-lg text-gray-800 truncate">
          {name}
        </div>
        <div className="text-gray-600 mt-1">{price} ₹</div>
      </div>
    </div>
  );
};

export default SmallCard;
