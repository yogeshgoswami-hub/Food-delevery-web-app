import React, { useState } from "react";
import Heading from "../Heading/Heading";
import ProductList from "../Product.list/ProductList";
import Cards from "../Cards/Cards";
import { Link } from "react-router-dom";
const Products = () => {
  const Categories = ["All", "Fruits", "Vegetables", "Dairy", "Seafood"];
  const [activetab, setactivetab] = useState("All");

  let filteredItems =
    activetab === "All"
      ? ProductList
      : ProductList.filter((item) => item.category === activetab);
  const rendercards = filteredItems.slice(0, 8).map((Product) => {
    return (
      <Cards
        image={Product.image}
        name={Product.name}
        price={Product.price}
        key={Product.id}
      />
    );
  });

  return (
    <section>
      <div className="max-w-[1400px] mx-auto md:px-10 pb-20 py-20 ">
        <Heading highlight="Our" heading="Products" />

        {/* tabs */}
        <div className="flex flex-wrap gap-3 justify-center items-center mt-10">
          {Categories.map((category) => {
            return (
              <button
                key={category}
                className={`cursor-pointer md:px-5 px-[5px]  py-2 text-lg  rounded-lg
             ${activetab === category ? "bg-orange-500 text-white" : "bg-zinc-100"}`}
                onClick={() => setactivetab(category)}
              >
                {category}
              </button>
            );
          })}
        </div>
      </div>

      {/* Product listing */}
      <div className="grid md:grid-cols-4 grid-cols-1 md:gap-9 gap-5  md:mt-20">
        {rendercards}
      </div>
      <div className=" text-center md:m-8 m-10">
       <Link
            to="/allproducts" 
            className="bg-orange-400 text-white px-8 py-3 rounded-lg hover:scale-105  hover:bg-orange-600 
  transition-all md:text-lg text-md duration-300 cursor-pointer"
          >
           View All
          </Link>
      </div>
    </section>
  );
};

export default Products;
