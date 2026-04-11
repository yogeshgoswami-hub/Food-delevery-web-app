import React from "react";
import CategoryPage from "../CategoryPage/CategoryPage";
import Bgall from '../../assets/all-banner.jpg'
const AllProducts = () => {
  return (
    <div>
      <CategoryPage title="All Products" bgImage={Bgall} categories={['All']} />
    </div>
  );
};

export default AllProducts;
