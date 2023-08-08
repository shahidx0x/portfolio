import React from "react";
import { BsMoon } from "react-icons/bs";
export const Header = () => {
  return (
    <div className=" h-16 w-full">
      <div className="flex justify-between items-center">
        <p className=" text-4xl ml-7 mt-7 sig  ">dev.imshahid</p>
        <div className=" mr-7 lg:mr-5 transition ease-in-out delay-150 duration-300 hover:bg-indigo-300 w-[50px] h-[50px] mt-7 flex justify-center items-center bg-[#EBF2FA] rounded-full shadow-xl border-gray-400">
          <BsMoon className="text-2xl" />
        </div>
      </div>
    </div>
  );
};
