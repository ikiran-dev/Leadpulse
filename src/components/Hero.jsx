import React from "react";
import Typed from "react-typed";

function Hero({ hero1, hero2, hero3, typed, typing }) {
  return (
    <div
      className="text-white
    "
    >
      <div className="max-w-[800px] mt-[-96px] w-full h-screen mx-auto  text-center flex flex-col justify-center">
        <p
          className="text-[#00df9a] font-bold p-2
        "
        >
          {hero1}
        </p>
        <h1 className="md:text-7xl sm:text-6xl sm:py-4 text-4xl py-2 font-bold md:py-6">
          {hero2}
        </h1>
        <div className="flex justify-center items-center">
          <p className="md:text-5xl sm:text-4xl text-xl font-bold py-4">
            {typed}
          </p>
          <Typed
            className="md:text-5xl sm:text-4xl text-xl font-bold pl-2 md:pl-4"
            strings={typing}
            typeSpeed={120}
            backSpeed={140}
            loop
          />
        </div>
        <p className="md:text-2xl text-xl font-bold text-gray-500  px-4">
          {hero3}
        </p>
        <button className="bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black">
          Get Started
        </button>
      </div>
    </div>
  );
}

export default Hero;
