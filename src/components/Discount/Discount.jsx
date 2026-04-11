import React, { PureComponent } from "react";
import freshfruit from '../../assets/fresh-fruits.png'
import Button from "../Button/Button";
export class Discount extends PureComponent {
  render() {
    return (
      <section className="bg-zinc-100 bg-no-repeat bg-right bg-contain " style={{backgroundImage: `url(${freshfruit})`}}>
        <div className="md:bg-transparent bg-zinc-100 flex md:flex-row flex-col max-w-[1400px] mx-auto px-10 py-10 hover:shadow-lg shadow-zinc-400 transform transition duration-300   " >
          <span className="text-orange-500 transform md:-rotate-90  font-bold md:text-8xl text-6xl h-fit md:self-center ">20%</span>
          <div className="max-w-[700px]">
            <h3 className="md:text-7xl text-4xl text-zinc-800 font-bold mt-1 ">First Order Discount!</h3>
            <p className="font-semibold text-zinc-600 my-6">
              Enjoy an exculsive first order discount on QuickBasket Website! shop fresh essentials and save big on your first purchase. fast delivery and quality guaranteed.
            </p>
            <Button content="Get a Discount"/>
          </div>

        </div>
      </section>
    );
  }
}

export default Discount;
