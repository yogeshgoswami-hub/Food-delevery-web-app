import React from "react";
import Allbanner from "../../assets/all-banner.jpg";
import { FaPhoneSquareAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
const Contect = () => {
  return (
    <div className="h-[50vh] md:w-full md:w-[60vh] mt-25  justify-center">
      <div
        className=" h-[50vh] w-full  flex justify-center items-center bg-center bg-cover relative"
        style={{ backgroundImage: `Url(${Allbanner})` }}
      >
        <h1 className="text-zinc-900 bg-zinc-100 rounded-2xl p-2  font-bold text-4xl justify-center text-center z-10 ">
          Contact us
        </h1>
      </div>
      <div className="bg-zinc-200">
        <div className="bg-amber-300 px-10 py-1">
          {/* <h1 className="text-2xl text-zinc-800 pb-1 font-bold">Contact Support</h1>
          <div className="">
            <div className="text-xl flex  ">
              <FaPhoneSquareAlt />
              <h4></h4>
            </div>
            <div className="text-xl flex">
              <MdEmail /><h4></h4>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Contect;
