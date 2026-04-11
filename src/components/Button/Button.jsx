import React from "react";

const Button = (props) => {
  return (
  <button className="bg-orange-400 text-white px-8 py-3 rounded-lg hover:scale-105  hover:bg-orange-600 
  transition-all md:text-lg text-md duration-300 cursor-pointer">
    {props.content}</button>
  )
};

export default Button;
