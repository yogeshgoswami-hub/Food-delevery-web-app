import React from "react";
import Bgfruits from "../../assets/fruits-banner.jpg";
import CategoryPage from "../CategoryPage/CategoryPage";
const Fruits = () => {
  return (
    <div>
      <CategoryPage title="Fruits & Vegetables" bgImage={Bgfruits}categories={['Vegetables','Fruits']} />
    </div>
  );
};

export default Fruits;
