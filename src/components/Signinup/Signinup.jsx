import React from "react";
import Button from "../Button/Button";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Signinup = () => {
  const [isSignup, setSignup] = useState(false);
  const [user, setUser] = useState({ email: "", password: "" });
 

  return (
    <div className="md:m-20 my-20 md:mx-12 px-10 py-10 text-center items-center justify-center text-3xl">
      <form className="flex md:flex-col">
        <div className="bg-zinc-200 md:mx-75  rounded-4xl  text-center hover: hover:shadow-zinc-400 shadow-2xl duration-300 ">
          <h2 className="mb-10 pt-10 font-bold text-center text-4xl font-serif">
            {isSignup ? "Create Account" : "login Now"}
          </h2>
          <div className="mx-auto md:px-12 px-12 justify-center overflow-hidden    ">
            {isSignup && (
              <input
                className="text-xl md:w-full h-10 mb-5 border rounded px-2 focus:outline-none items-center justify-center"
                type="text"
                placeholder="Enter Your name"
                required
              />
            )}
            <input
              className="text-xl w-full h-10 mb-5 border rounded px-2"
              type="email"
              placeholder="Enter your email"
              onChange={(e) => setUser({ ...user, email: e.target.value })}
            />
            <input
              className="text-xl flex flex-col gap-10 md:w-full mb-2  h-10 border rounded px-2 focus:outline-none"
              type="password"
              placeholder="Password"
              required
              onChange={(e) => setUser({ ...user, password: e.target.value })}
            />
            {isSignup && (
              <div className="text-lg text-start text-gray-700  ">
                <a href="#">Forget password!</a>
              </div>
            )}
          </div>
          <br />

          <div
            className="md:text-2xl text-xl -mb-10 mb-1  -mt-4  w-full"
            
          >
            <Button content={isSignup ? "Sign Up" : "Login"} />
          </div>
          <br />
          {/* toogle Link */}
          <p
            className="text-xl text-zinc-700 cursor-pointer pd-12 mb-5 hover:text-orange-500 "
            onClick={() => setSignup(!isSignup)}
          >
            {isSignup
              ? "Already have an account? Login"
              : "Create your Account?"}
          </p>
        </div>
      </form>
    </div>
  );
};

export default Signinup;
