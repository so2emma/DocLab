import React from "react";
import { FaRegArrowAltCircleRight } from "react-icons/fa";

const HomePage = () => {
  return (
    <>
      <div className="shadow-xl">
        <nav className="max-w-[1240px] m-auto px-7">
          <div className="flex justify-between items-center p-7">
            <h1 className="text-5xl font-bold text-blue-700 ">DocLab.</h1>
            <p className="font-bold">Access Page..</p>
          </div>
        </nav>
      </div>

      <div className="max-w-[1240px] m-auto  mt-56 px-10">
        <div className="grid md:grid-cols-2 gap-10">
          <div className="h-[300px] shadow-2xl border border-slate-300  flex flex-col items-center justify-center rounded-lg">
            <h2 className="text-4xl font-bold text-blue-700">LABORATORY</h2>
            <p className="font-bold text-2xl">access</p>
            <a className="bg-blue-700 text-white py-2 px-8 rounded-lg mt-8 flex items-center justify-between text-xl" href="">Continue <FaRegArrowAltCircleRight className="ml-3"/>
            </a>
          </div>
          <div className="h-[300px] shadow-2xl  border border-slate-300 flex flex-col items-center justify-center rounded-lg">
            <h2 className="text-4xl font-bold text-blue-700">DOCTOR</h2>
            <p className="font-bold text-2xl">access</p>
            <a className="bg-blue-700 text-white py-2 px-8 rounded-lg mt-8 flex items-center justify-between text-xl" href="">Continue <FaRegArrowAltCircleRight className="ml-3"/></a>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
