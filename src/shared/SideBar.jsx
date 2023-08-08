import React from "react";
import {
  AiFillGithub,
  AiOutlineDownload,
  AiOutlineMail,
  AiOutlineMobile,
} from "react-icons/ai";
import { BiLogoLinkedin } from "react-icons/bi";
import { CiLocationOn } from "react-icons/ci";
import { FiFacebook, FiTwitter } from "react-icons/fi";
export const SideBar = () => {
  return (
    <div className="bg-white  w-[400px] h-[800px]  border-gray-200 rounded-xl  mt-28 lg:mt-0">
      <div className="flex justify-center -mt-28 ">
        <div className="w-[270px] h-[270px] bg-orange-400 rounded-md">
          <img
            className="mt-[-5.8rem] w-full rounded-md"
            src="./profile-bg.png"
            alt=""
          />
        </div>
      </div>
      <div className="mt-10 flex flex-col gap-3 justify-center items-center">
        <h1 className="sig  text-4xl"> Abdulla Al Shahid</h1>
        <p className="text-xl font-mono"> MERN Stack Developer</p>
        <div className="mt-5 w-[296px] h-[60px] flex gap-5 justify-center ">
          <div className="w-[60px] h-full bg-[#F2F7FC] rounded-md  flex justify-center items-center">
            <FiFacebook className="text-4xl text-blue-500" />
          </div>
          <div className="w-[60px] h-full bg-[#F2F7FC] rounded-md shadow-sm flex justify-center items-center">
            <BiLogoLinkedin className="text-4xl text-blue-500" />
          </div>
          <div className="w-[60px] h-full bg-[#F2F7FC] rounded-md shadow-sm flex justify-center items-center">
            <FiTwitter className="text-3xl text-blue-400" />
          </div>
          <div className="w-[60px] h-full bg-[#F2F7FC] rounded-md shadow-sm flex justify-center items-center">
            <AiFillGithub className="text-4xl" />
          </div>
        </div>
      </div>
      <div className="flex justify-center  lg:w-full">
        <div className="mt-10 w-[350px] h-[350px] rounded-lg shadow-sm bg-[#F2F5F9]">
          <div className=" sig flex flex-col justify-center items-center gap-5 mt-3">
            <div className="w-[256px] h-[66px] border-b border-gray-400">
              <div className="flex gap-3">
                <AiOutlineMobile className="text-4xl mt-4" />
                <div className="flex flex-col mt-2">
                  <p className="text-[#4467c7bd]">Phone</p>
                  <p className="text-[#4467c7]">+8801811218207</p>
                </div>
              </div>
            </div>
            <div className="w-[256px] h-[66px] border-b border-gray-400">
              <div className="flex gap-3">
                <AiOutlineMail className="text-4xl mt-4" />
                <div className="flex flex-col mt-2">
                  <p className="text-[#4467c7bd]">Email</p>
                  <p className="text-[#4467c7]">dev.imshahid@gmail.com</p>
                </div>
              </div>
            </div>
            <div className="w-[256px] h-[66px] border-b border-gray-400">
              <div className="flex gap-3">
                <CiLocationOn className="text-4xl mt-4" />
                <div className="flex flex-col mt-2">
                  <p className="text-[#4467c7bd]">Location</p>
                  <p className="text-[#4467c7]">Mirpur,Dhaka,Bangladesh</p>
                </div>
              </div>
            </div>
            <div className="flex justify-center items-center">
              <div className="w-64 h-16 bg-slate-400 rounded-lg">
                <p className="flex gap-3 justify-center items-center mt-5 text-xl text-white">
                  <AiOutlineDownload className="text-2xl" />
                  <p>Download Resume</p>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
