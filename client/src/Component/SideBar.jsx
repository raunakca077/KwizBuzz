import React from "react";
import { FaBars } from "react-icons/fa";
import { MdOutlineTimer } from "react-icons/md";
import { SiGoogletagmanager } from "react-icons/si";
import { IoMdSettings } from "react-icons/io";
import { NavLink, useLocation } from "react-router-dom";

function SideBar({ children }) {
  const menuItem = [
    {
      path: "/BasicSettings",
      name: "Basic Settings",
      icon: <IoMdSettings />,
    },
    {
      path: "/QuestionManager",
      name: "Question Manager",
      icon: <SiGoogletagmanager />,
    },
    {
      path: "/QuizTiming",
      name: "Quiz Timing",
      icon: <MdOutlineTimer />,
    },
  ];

  const location = useLocation();
  if (location.pathname === "/QuizPortal") return null;

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <div className="w-64 bg-gray-800 text-white">
        <div className="p-4 flex items-center justify-between">
          <h1 className="text-2xl font-bold">KrizKroz</h1>
          {/* Uncomment if you want a toggle button */}
          {/* <FaBars className="text-xl cursor-pointer" onClick={toggle} /> */}
        </div>
        <div className="flex flex-col mt-4">
          {menuItem.map((item, index) => (
            <NavLink
              to={item.path}
              key={index}
              className="flex items-center py-2 px-4 text-gray-300 hover:bg-gray-700"
              activeClassName="bg-gray-700"
            >
              <div className="mr-2">{item.icon}</div>
              <div>{item.name}</div>
            </NavLink>
          ))}
        </div>
      </div>
      {/* Main content */}
      <main className="flex-grow p-4">{children}</main>
    </div>
  );
}

export default SideBar;
