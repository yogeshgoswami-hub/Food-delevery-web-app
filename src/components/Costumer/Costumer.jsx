import React from "react";
import Heading from "../Heading/Heading";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import Customer1 from "../../assets/customer1.jpg";
import Customer2 from "../../assets/customer2.jpg";
import Customer3 from "../../assets/customer3.jpg";
import { FaStar } from "react-icons/fa";
import { useState } from "react";

const Costumer = () => {
  const [active, setActive] = useState(false);
  return (
    <section>
      <div className="max-w-[1400px]  mx-auto py-20  mt-10 ">
        <div className="md:mt-10 text-center ">
          <Heading highlight="Customer" heading="Saying" />
        </div>

        <div className="md:mt-10 text-center ">
          <Heading highlight="Customers" heading="Saying" />
        </div>
        <div className=" flex justify-end py-6 gap-x-3 ">
          <div className="flex md:flex-row flex-col gap-10 justify-center items-center m-15 ">
            {cost.map((item, index) => (
              <div
                key={index}
                // className="bg-zinc-200 p-5 rounded-4xl shadow-lg text-center  active:shadow-zinc-600 shadow-2xl shadow-md active:shadow-2xl active:scale-95 transition-all duration-200 hover:shadow-zinc-400 duration-400 transition-shadow transform-border h-full w-full md:mb-10 pt-10  "
                onClick={() => setActive(!active)}
                className={`p-5 rounded-xl transition-all duration-200 cursor-pointer 
        ${active ? "shadow-2xl scale-95" : "shadow-md"}`}
              >
                <img
                  src={item.image}
                  className="md:w-35 md:h-35 h-40 w-40 mx-auto rounded-full mb-15"
                />
                <h3 className="text-2xl font-semibold text-zinc-800">
                  {item.name}
                </h3>
                <p className="text-zinc-800 text-lg mt-2">{item.para}</p>
                <div className="flex gap-1 justify-center md:mt-2 mt-5 mb-5">
                  <FaStar className="text-yellow-400 text-2xl" />
                  <FaStar className="text-yellow-400 text-2xl" />
                  <FaStar className="text-yellow-400 text-2xl" />
                  <FaStar className="text-yellow-400 text-2xl" />
                  <FaStar className="text-zinc-400 text-2xl" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Costumer;

const cost = [
  {
    id: 1,
    name: "Olivia Davis",
    image: Customer1,
    para: "“Very easy to use website. I ordered groceries in just 5 minutes. Loved the experience!”",
    stars: <FaStar />,
  },
  {
    id: 2,
    name: "John Smith",
    image: Customer2,
    para: "“Fresh vegetables and fruits every time! Delivery is always on time. Highly recommended.”",
    stars: <FaStar />,
  },
  {
    id: 3,
    name: "Ava Anderson",
    image: Customer3,
    para: "“Packaging is clean and safe. Products arrive fresh and in perfect condition.”",
    stars: <FaStar />,
  },
];
