import React from "react";
import Laptop from "../assets/laptop.jpg";

function Analytics({ analytics1, analytics2, analytics3, analyticsimg }) {
  return (
    <div className="w-full bg-white py-16 px-4">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
        <img className="w-[500px] mx-auto my-4" src={analyticsimg} />
        <div className="flex flex-col justify-center">
          <p className="text-[#00df9a] font-bold;"> {analytics3} </p>
          <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2">
            {analytics1}
          </h1>
          <p>{analytics2}</p>
          <button className="bg-black text-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3 ">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
}

export default Analytics;
