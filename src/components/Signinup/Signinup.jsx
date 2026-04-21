import React from "react";
import Button from "../Button/Button";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Signinup = () => {
  const [user, setUser] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  const handleLogin = () => {
    fetch("/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          alert("Login successful");
          navigate("/home");
        } else {
          alert("Invalid login");
        }
      });
  };
  const [placeholder, setPlaceholder] = useState("Enter your email");

  const handleClick = () => {
    setPlaceholder("Please enter email first ⚠️");
  };

  return (
    <div className="md:m-20 my-15  mx-12 py-10 text-center text-3xl py-10">
      <div className="bg-zinc-200 md:mx-70 my-10 rounded-4xl md:h-100 text-center hover: hover:shadow-zinc-400 shadow-2xl duration-300 ">
        <h2 className="mb-10 pt-10 font-bold">Login Now</h2>
        <div className="mx-auto px-12 flex-wrap gap-12">
          <input
            className="text-xl md:w-full md:h-10 mb-5 border rounded px-2 focus:outline-none"
            type="text"
            placeholder="Enter Your name"
            required
          />
          <input
            className="text-xl flex flex-col gap-10 md:w-full mb-2 md:h-10 border rounded px-2 focus:outline-none"
            type="password"
            placeholder="Password"
            required
          />
          <div className="text-lg text-start text-gray-700  ">
            <a href="#">Forget password!</a>
          </div>
        </div>
        <br />

        <div
          className="md:text-2xl text-xl -mb-10 -mt-4 w-full text-xl"
          onClick={handleClick}
        >
        <Button content="Login" />
        </div>
        <br />
        <a href=""></a>
        <a href="" className=" text-xl text-zinc-700">
          Create your Account?
        </a>
      </div>
    </div>
  );
};

export default Signinup;
