"use client";

import { ChevronDown } from "lucide-react";
import React, { useState } from "react";

import { DialogDemo } from "./dialogbutton";
import { Kolker_Brush as KolkSans } from "next/font/google";
import { DialogCloseButton } from "@/components/custom/blockwarning";

const kolkSans = KolkSans({
  weight: ["400"],
  subsets: ["latin", "latin-ext"],
  variable: "--kolk-sans",
});

const UserTable = () => {
  const [subRow, setSubRow] = useState(false);
  return (
    <main className=" relative w-full py-12 px-6 shadow-lg mt-5 shadow-gray-400 border-2 border-[#80808023] ">
      <div className=" w-[19rem] absolute -top-[3.6rem] right-0">
        <div className=" w-full pl-5 pb-3 rounded-2xl bg-[#153645]">
          <p
            className={` text-white  text-[2.6rem] ${kolkSans.variable} font-kolk `}
          >
            More than your thought?
          </p>
        </div>
        <div className=" absolute w-6 h-6 translate-x-6 -translate-y-5 bg-[#153645] rotate-45"></div>
      </div>

      <table className=" w-full">
        <thead className=" w-full mb-2 ">
          <th className=" w-[20%] text-left text-xl font-normal">Name</th>
          <th className=" w-[20%] text-left text-xl font-normal">Email</th>
          <th className=" w-[20%] text-left text-xl font-normal">Adress</th>
          <th className=" w-[20%] text-left text-xl font-normal">
            Recently Used
          </th>
          <th className=" w-[20%] text-left"></th>
        </thead>
        <br />
        <tbody className=" hover:bg-gray-200 transition-all duration-200">
          <tr className=" border-t-2  border-gray-200">
            <td className=" capitalize text-lg py-4 pl-4">Samsumg</td>
            <td className=" capitalize text-lg py-4">mobile pasby</td>
            <td className=" capitalize text-lg py-4">Danske bank</td>
            <td className=" capitalize text-lg py-4">2024-05-01</td>
            <td className=" flex space-x-4 items-center py-4">
              <DialogCloseButton />
              <button
                className=" border-none outline-none"
                onClick={() => setSubRow(!subRow)}
              >
                <ChevronDown size={32} />
              </button>
              <DialogDemo />
            </td>
          </tr>
          <tr
            className={` border-t-2   border-gray-200 px-4 ${
              subRow ? "" : "hidden"
            } transition-all overflow-hidden  duration-200 ease-in-out `}
          >
            <td className=" capitalize text-lg py-4 pl-6">
              <div className=" gap-y-5">
                <h2 className=" font-semibold text-lg">Recently Used</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illo
                  nam officiis{" "}
                </p>
              </div>
            </td>
            <td className=" capitalize text-lg py-4">
              <div className=" gap-y-5">
                <h2 className=" font-semibold text-lg">Created</h2>
                <p>2024</p>
              </div>
              <br />
              <div className=" gap-y-5">
                <h2 className=" font-semibold text-lg">Valid Until</h2>
                <p>2024</p>
              </div>
            </td>
            <td className=" capitalize text-lg py-4">
              <div className=" gap-y-5">
                <h2 className=" font-semibold text-lg">Release notes</h2>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
              </div>
            </td>
            <td className=" capitalize text-lg py-4">2024-05-01</td>
            <td className=" flex space-x-4 items-center pt-4">
              <div className=" gap-y-5">
                <h2 className=" font-semibold text-lg">Serial Number</h2>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt
                  autem voluptates atque facere sit repudiandae illum dicta.
                </p>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </main>
  );
};

export default UserTable;
