import React from "react";
import Banner from "../Banner/Banner";
import Productlist from "../Product.list/ProductList";
import Cards from "../Cards/Cards";
const CategoryPage = ({ title, bgImage, categories = [] }) => {
  let filteredItem = categories.includes("All")
    ? Productlist
    : Productlist.filter((item) => categories.includes(item.category));

  const renderProduct = filteredItem.map((product) => {
    return (
      <Cards
       key={product.id}
        image={product.image}
        name={product.name}
        price={product.price}
        Category={product.category}
      />
    );
  });

  return (
    <div>
      <Banner title={title} bgimage={bgImage} />
      <div className="grid gap-9 py-20 md:grid-cols-4 grid-cols-1 max-w-[1400px] mx-auto px-10">
        {renderProduct}
      </div>
    </div>
  );
};

export default CategoryPage;
