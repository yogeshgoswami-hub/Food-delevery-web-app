import React from 'react'
import CategoryPage from '../CategoryPage/CategoryPage'
import Bgseafood from "../../assets/seafood-banner.jpg";
const SeaFood = () => {
  return (
    <div>
      <CategoryPage title={"Meat & Seafood"} bgImage={Bgseafood} categories={['Seafood']}/>
    </div>
  )
}

export default SeaFood
