import React from "react";
import Heading from "../Heading/Heading";
import fruits from "../../assets/fruits-and-veggies.png";
import dairyandegg from "../../assets/dairy-and-eggs.png";
import seafood from "../../assets/meat-and-seafood.png";
import { Link } from "react-router-dom";

const Category = () => {
  const renderCards = category.map((card) => {
    return (
      // card
      <div
        className="flex-1 basis-[300px] active:scale-90 active:shadow-zinc-400 duration-200  hover:shadow-zinc-400 shadow-xl transform transition duration-400 rounded-2xl"
        key={card.id}
      >
        {/* card image */}
        <div className=" w-full min-h-[30vh] relative -mb-10">
          <img src={card.image} className="absolute bottom-0" />
        </div>
        {/* card content  */}

        <div className=" bg-zinc-100  pt-17 p-8 rounded-xl">
          <h3 className="text-zinc-800 text-3xl font-bold">{card.title}</h3>
          <p className="text-zinc-600 mt-3 mb-9 ">{card.discription}</p>
          <Link
            to={card.path}
            className="bg-orange-400 text-white px-8 py-3 rounded-lg active:scale-120  active:bg-orange-600  transition-all hover:scale-105  hover:bg-orange-600 
  transition-all md:text-lg text-md duration-300 cursor-pointer"
          >
            See All
          </Link>
        </div>
      </div>
    );
  });
  return (
    <section>
      <div className="max-w-[1400px] mx-auto px-10 py-20">
        <Heading highlight="Shop" heading="Category" />
        {/* Category Card */}
        <div className="flex flex-wrap gap-10 md:mt-15 mt-5">{renderCards}</div>
      </div>
    </section>
  );
};
export default Category;

const category = [
  {
    id: 1,
    title: "Fruits & Veggies",
    discription:
      "Fresh,organic produce sourced daily from local farms. Explore a wide range of seasonal fruits and crisp vegetables.",
    image: fruits,
    path: "/fruits",
  },
  {
    id: 2,
    title: "Dairy & Eggs",
    discription:
      "Wholesale dairy products and free-range eggs. From creamy milk and yougurt to artisanal cheeses.",
    image: dairyandegg,
    path: "/dairy",
  },
  {
    id: 3,
    title: "Meat & Seafood",
    discription:
      "High-quality,responsibly sourced meat and seafood. choose from fresh cuts, marinated options, and more.",
    image: seafood,
    path: "/seafood",
  },
];
