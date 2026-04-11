import React from "react";
import { Link } from "react-router-dom";
const Aboutus = () => {
  return (
    <div className="bg-zinc-100 mt-24 pb-10  md:mt-35 md:h-[60vh] px-10 items-center mb-20 hover:shadow-zinc-400 shadow-xl duration-400 transform transition-shadow">
      <div>
        <h1 className=" text-zinc-800 md:mt-21  text-2xl pt-5   md:text-4xl font-bold text-center justify-center items-center-safe mb-5  ">
          Welcome to Quick<span className="text-orange-500">B</span>asket😋
        </h1>
        <p className="md:text-lg text-zinc-700 justify-center text-center ">
          Welcome to <Link to="/" className="cursor-pointer">QuickBasket😋</Link>, your one-stop
          destination for fresh groceries and everyday essentials. We are
          dedicated to providing a seamless and convenient shopping experience
          right from the comfort of your home. At QuickBasket, quality and
          freshness are our top priorities. We carefully select and source our
          products to ensure that customers receive only the best. From
          farm-fresh fruits and vegetables to dairy products and daily household
          needs, we bring everything together on a single platform. Our goal is
          to simplify your daily shopping by offering a user-friendly interface,
          reliable service, and timely delivery. We believe in saving your time
          while maintaining the highest standards of quality and customer
          satisfaction. We are continuously working to improve and expand our
          services to meet the evolving needs of our customers. With
          QuickBasket, you can shop with confidence, knowing that your needs are
          handled with care and efficiency. QuickBasket – Freshness Delivered,
          Convenience Simplified.
        </p>
        <h3 className="text-zinc-800 text-2xl font-bold text-center mt-5">
          Thank You!.😉
        </h3>
      </div>
    </div>
  );
};

export default Aboutus;
