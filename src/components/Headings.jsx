import React from "react";

export const Headings = ({ props }) => {
  return (
    <div className="flex lg:flex-row flex-col gap-12 mt-7 justify-start items-center ml-5">
      <div className="sig text-5xl">{props}</div>
      <div className="lg:w-[400px] w-56 mt-5 h-1 bg-orange-500 rounded-md"></div>
    </div>
  );
};
