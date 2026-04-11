import React from "react";
import Heading from "../Heading/Heading";
import { FaHeart, FaLeaf, FaSeedling, FaShieldAlt } from "react-icons/fa";
import Basket from "../../assets/basket-full-vegetables.png";
const Value = () => {
  const LeftValues = value.slice(0,2).map((item) => {
    return (
      <div key={item.id} className="flex md:flex-row-reverse items-center gap-7">
        <div>
          <span className="flex justify-center items-center bg-orange-500 text-3xl text-white w-15 h-15 rounded-full">{item.icon}</span>
        </div>
        <div className="md:text-right">
          <h3 className="text-zinc-800 text-3xl font-bold ">{item.title}</h3>
          <p className="text-zinc-600 mt-2">{item.para}</p>
        </div>
      </div>
    );
  });

  const RightValues = value.slice(2,4).map((item1) => {
    return (
      <div key={item1.id} className="flex items-center gap-7">
        <div>
          <span className="flex justify-center items-center bg-orange-500 text-3xl text-white w-15 h-15 rounded-full">{item1.icon}</span>
        </div>
        <div>
          <h3 className="text-zinc-800 text-3xl font-bold ">{item1.title}</h3>
          <p className="text-zinc-600 mt-2">{item1.para}</p>
        </div>
      </div>
    );
  });
  return (
    <section>
      <div className="max-w-[1400px] mx-auto px-10 py-20 ">
        <Heading highlight="our" heading="Value" />


        <div className="flex md:flex-row flex-col md:gap-5 gap-15 mt-15">
          {/* left values */}
          <div className="md:min-h-100 gap-15 flex flex-col justify-between">
          {LeftValues}
          </div>
          <div className="md:flex w-1/2 hidden">
            <img src={Basket} />
          </div>
          {/* right values */}
           <div className="md:min-h-100 gap-15 flex flex-col justify-between">
            {RightValues}
        </div>
        </div>
       
      </div>
    </section>
  );
};

export default Value;

const value = [
  {
    id: 1,
    title: "Trust",
    para: "It is a long established fact that a reader will be distracted by the readable",
    icon: <FaHeart />,
  },
  {
    id: 2,
    title: "Always Fresh",
    para: "It is a long established fact that a reader will be distracted by the readable",
    icon: <FaLeaf />,
  },
  {
    id: 3,
    title: "Food Safety",
    para: "It is a long established fact that a reader will be distracted by the readable",
    icon: <FaShieldAlt />,
  },
  {
    id: 4,
    title: "100% Organic",
    para: "It is a long established fact that a reader will be distracted by the readable",
    icon: <FaSeedling />,
  },
];
