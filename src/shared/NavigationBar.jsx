import React from "react";
import { AiOutlineContacts, AiOutlineHome } from "react-icons/ai";
import { FaBlogger } from "react-icons/fa";
import { GoProjectSymlink } from "react-icons/go";
import { GrNotes } from "react-icons/gr";

export const NavigationBar = () => {
  return (
    <div className="w-full flex justify-end">
      <div className=" flex justify-center items-center gap-5 mr-5 w-[503px] border-gray-300 border-2 h-[100px] mt-10 rounded-xl">
        <div className="rounded-xl w-[80px] bg-gray-300 h-[80px]">
          <div className="flex flex-col justify-center items-center mt-5">
            <AiOutlineHome className="text-2xl" />
            <p className="sig ">Home</p>
          </div>
        </div>
        <div className="rounded-xl w-[80px] bg-gray-300 h-[80px]">
          <div className="flex flex-col justify-center items-center mt-5">
            <GrNotes className="text-2xl" />
            <p className="sig ">Resume</p>
          </div>
        </div>
        <div className="rounded-xl w-[80px] bg-gray-300 h-[80px]">
          <div className="flex flex-col justify-center items-center mt-5">
            <GoProjectSymlink className="text-2xl" />
            <p className="sig ">Projects</p>
          </div>
        </div>
        <div className="rounded-xl w-[80px] bg-gray-300 h-[80px]">
          <div className="flex flex-col justify-center items-center mt-5">
            <AiOutlineContacts className="text-2xl" />
            <p className="sig ">Contact</p>
          </div>
        </div>
        <div className="rounded-xl w-[80px] bg-gray-300 h-[80px]">
          <div className="flex flex-col justify-center items-center mt-5">
            <FaBlogger className="text-2xl" />
            <p className="sig ">Blogs</p>
          </div>
        </div>
      </div>
    </div>
  );
};
