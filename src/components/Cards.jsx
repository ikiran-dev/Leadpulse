import React from "react";
import Single from "../assets/single.png";
import Double from "../assets/double.png";
import Triple from "../assets/triple.png";

function Cards() {
  return (
    <div className="w-full py-[5rem] px-4 bg-white">
      <div className="max-w-[800px]  mx-auto  text-center flex flex-col justify-center">
        <h1 className="text-4xl font-bold">Services</h1>
      </div>
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8 pb-[100px]">
        <div className="w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300">
          <h2 className="text-2xl font-bold text-center py-3">
            <span className="text-[#00df9a]">Facility</span> Management Services
          </h2>
          <div className=" font-medium pb-8">
            <p className="py-2 border-b mx-4 mt-1">
              Huesoul Management Private Limited wide range of experienced
              skilled and semi skilled workforce to work in your manufacturing
              and administrative locations. For any requirement, you do not have
              to worry about ramping up; as we can do that at very short notice.
              Moreover we handle the statutory obligations relating to employees
              placed at your premises so that you can concentrate on your
              business operations.
            </p>
          </div>
          <button className="bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3">
            Delve Deeper
          </button>
        </div>
        <div className="w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300">
          <h2 className="text-2xl font-bold text-center py-3">
            <span className="text-[#00df9a]">Contract</span> Staffing &
            Outsourcing
          </h2>
          <div className=" font-medium">
            <p className="py-2 border-b mx-4 mt-1">
              Huesoul Management Private Limited wide range of experienced
              skilled and semi skilled workforce to work in your manufacturing
              and administrative locations. For any requirement, you do not have
              to worry about ramping up; as we can do that at very short notice.
              Moreover we handle the statutory obligations relating to employees
              placed at your premises so that you can concentrate on your
              business operations.
            </p>
          </div>
          <button className="bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3">
            Delve Deeper
          </button>
        </div>
        <div className="w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300">
          <h2 className="text-2xl font-bold text-center py-3">
            <span className="text-[#00df9a]">Statutory</span> Compliance
          </h2>
          <div className=" font-medium pb-[6.6rem]">
            <p className="py-2 border-b mx-4 mt-1">
              Maintenance of Statutory Records such as ESI, PF, Leave with
              Wages, Bonus, Professional Tax, Factories Act, Contract Labour Act
              etc can strain an organization’s resources. At Huesoul Management
              Private Limited, we provide the complete support in handling these
              compliance procedures.
            </p>
          </div>
          <button className="bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3">
            Delve Deeper
          </button>
        </div>
        <div className="w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300">
          <h2 className="text-2xl font-bold text-center py-3">
            <span className="text-[#00df9a]">Registration</span> of Statutory
            Obligations
          </h2>
          <div className=" font-medium pb-[6.6rem]">
            <p className="py-2 border-b mx-4 mt-1">
              Huesoul Management Private Limited the statutory registration
              services of an organization, like ESI, EPF, Professional Tax,
              Company Orders, Contract Licenses, Corporate Licenses and Payroll
              Systems ect.
            </p>
          </div>
          <button className="bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3">
            Delve Deeper
          </button>
        </div>
        <div className="w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300">
          <h2 className="text-2xl font-bold text-center py-3">
            <span className="text-[#00df9a]">Payroll</span> Systems
          </h2>
          <div className=" font-medium pb-[8.5rem]">
            <p className="py-2 border-b mx-4 mt-1">
              Huesoul Management Private Limited the statutory registration
              services of an organization, like ESI, EPF, Professional Tax,
              Company Orders, Contract Licenses, Corporate Licenses and Payroll
              Systems ect.
            </p>
          </div>
          <button className="bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3">
            Delve Deeper
          </button>
        </div>

        <div className="w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300">
          <h2 className="text-2xl font-bold text-center py-3">
            <span className="text-[#00df9a]">Manpower</span> Consultancy
          </h2>
          <div className=" font-medium pb-[1.2rem]">
            <p className="py-2 border-b mx-4 mt-1">
              Being an organization that is committed to highest quality,
              Huesoul Management Private Limited tailor made solution in
              Manpower Consulting to our clients. We provide consultancy in
              assessment and recruitment of right candidates for your
              organization. Our data-bank of candidates is regularly updated and
              enhanced to make sure that you have the best candidates foray
              requirement.
            </p>
          </div>
          <button className="bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3">
            Delve Deeper
          </button>
        </div>
      </div>
    </div>
  );
}

export default Cards;
