import React from "react";
import dairy from "../../assets/dairy-banner.jpg";
import CategoryPage from "../CategoryPage/CategoryPage";
import Bgdairy from "../../assets/dairy-banner.jpg" 
const Dairy = () => {
  return (
    <div>
      <CategoryPage title={"Dairy & Eggs"} bgImage={Bgdairy} categories={['Dairy']} />
    </div>
  );
};

export default Dairy;
