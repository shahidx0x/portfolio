import React from "react";
import { AiOutlineContacts, AiOutlineHome } from "react-icons/ai";
import { FaBlogger } from "react-icons/fa";
import { GoNote, GoProjectSymlink } from "react-icons/go";
import { NavLink } from "react-router-dom";

export const NavigationBar = ({ props }) => {
  const { isHidden } = props;
  return (
    <div className={`${isHidden} w-full md:flex lg:flex justify-end`}>
      <div className=" flex justify-center items-center gap-5 mr-5 w-[503px] shadow-sm  h-[100px] mt-10 rounded-xl">
        <NavLink
          to="/"
          className={({ isActive, isPending }) =>
            isPending
              ? "rounded-xl w-[80px] bg-[#e1e8ef] h-[80px]"
              : isActive
              ? "rounded-xl w-[80px] bg-purple-600 text-white h-[80px] transition delay-100  "
              : "rounded-xl w-[80px] bg-[#e1e8ef] h-[80px]"
          }
        >
          <div className="flex flex-col justify-center items-center mt-5">
            <AiOutlineHome className="text-2xl" />
            <p className="sig ">Home</p>
          </div>
        </NavLink>
        <NavLink
          to="/resume"
          className={({ isActive, isPending }) =>
            isPending
              ? "rounded-xl w-[80px] bg-gray-300 h-[80px]"
              : isActive
              ? "rounded-xl w-[80px] bg-purple-600 text-white h-[80px] transition delay-100 "
              : "rounded-xl w-[80px] bg-[#e1e8ef] h-[80px]"
          }
        >
          <div className="flex flex-col justify-center items-center mt-5">
            <GoNote className="text-2xl" />
            <p className="sig ">Resume</p>
          </div>
        </NavLink>
        <NavLink
          to="/projects"
          className={({ isActive, isPending }) =>
            isPending
              ? "rounded-xl w-[80px] bg-gray-300 h-[80px]"
              : isActive
              ? "rounded-xl w-[80px] bg-purple-600 text-white h-[80px] transition delay-100 "
              : "rounded-xl w-[80px] bg-[#e1e8ef] h-[80px]"
          }
        >
          <div className="flex flex-col justify-center items-center mt-5">
            <GoProjectSymlink className="text-2xl" />
            <p className="sig ">Projects</p>
          </div>
        </NavLink>
        <NavLink
          to="/contact"
          className={({ isActive, isPending }) =>
            isPending
              ? "rounded-xl w-[80px] bg-gray-300 h-[80px]"
              : isActive
              ? "rounded-xl w-[80px] bg-purple-600 text-white h-[80px] transition delay-100 "
              : "rounded-xl w-[80px] bg-[#e1e8ef] h-[80px]"
          }
        >
          <div className="flex flex-col justify-center items-center mt-5">
            <AiOutlineContacts className="text-2xl" />
            <p className="sig ">Contact</p>
          </div>
        </NavLink>
        <NavLink
          to="/blogs"
          className={({ isActive, isPending }) =>
            isPending
              ? "rounded-xl w-[80px] bg-gray-300 h-[80px]"
              : isActive
              ? "rounded-xl w-[80px] bg-purple-600 text-white h-[80px] transition delay-100 "
              : "rounded-xl w-[80px] bg-[#e1e8ef] h-[80px]"
          }
        >
          <div className="flex flex-col justify-center items-center mt-5">
            <FaBlogger className="text-2xl" />
            <p className="sig ">Blogs</p>
          </div>
        </NavLink>
      </div>
    </div>
  );
};
