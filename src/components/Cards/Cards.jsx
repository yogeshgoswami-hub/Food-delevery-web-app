import React from "react";
import { FaHeart, FaPlus } from "react-icons/fa";
import Button from "../Button/Button";

const Cards = ({ image, name, price }) => {
  return (
    <div className="bg-zinc-100  hover:shadow-lg shadow-zinc-400   transition-all duration-300 md:p-5 rounded-xl mb-9 h-99 md:h-full mr-2 ml-2 ">
      {/* Card Icons */}

      <div className="flex justify-between">
        <span className="text-3xl text-zinc-300 cursor-pointer m-1  ">
          <FaHeart />
        </span>
        <button className="bg-orange-500 text-white text-xl px-3 py-3   rounded-xl cursor-pointer">
          <FaPlus />
        </button>
      </div>

      {/* Card Img */}
      <div className="w-full md:h-50 h-55 -mt-5    ">
        <img src={image} className="w-full h-full object-contain" />
      </div>

      {/* Card Content */}
      <div className="text-center">
        <h3 className="text-2xl font-semibold m-2">{name}</h3>
        {/* toFixed(2) after decimal put 2 num like 2.00 */}
        <p className="text-2xl font-bold md:mt-2 md:mb-3 mt-2 mb-2">
          ₹{price.toFixed(2)}
        </p>
        <Button content="shop Now" />
      </div>
    </div>
  );
};

export default Cards;
