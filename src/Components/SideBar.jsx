import React, { useState } from "react";
import {FaTh,FaBars}from "react-icons/fa";
import { MdOutlineTimer } from "react-icons/md";
import { SiGoogletagmanager } from "react-icons/si";
import { IoMdSettings } from "react-icons/io";
import { NavLink } from "react-router-dom";
import { IoOptionsSharp } from "react-icons/io5";

function SideBar({children}) {
    const menuItem=[
        // {
        //     path:"/",
        //     name:"Dashboard",
        //     icon:<FaTh/>
        // },
        {
            path:"/Basic_Settings",
            name:"Basic Settings",
            icon:<IoMdSettings/>
        },
        {
            path:"/Question_Manager",
            name:"Question Manager",
            icon:<SiGoogletagmanager/>
        },
        {
            path:"/Quiz_Timing",
            name:"Quiz Timing",
            icon:<MdOutlineTimer/>
        },
        {
            path:"/Quiz_Types",
            name:"Quiz Types",
            icon:<IoOptionsSharp/>
        },
    ]
    const[isOpen,setIsOpen]=useState(false);
    const toggle=()=>{setIsOpen(!isOpen)};
    return (
    <div className="container">
        <div className="sidebar">
            <div className="top_section">
                <h1 className="logo">KrizKroz</h1>
                <div className="bar">
                    <FaBars onClick={toggle}/>
                </div>
            </div>
            {
                menuItem.map((item,index)=>(
                    <NavLink to={item.path} key={index} className="link text-decoration-none" activeclassName="active">
                        <div className="icon">{item.icon}</div>
                        <div className="link_text">{item.name}</div>
                    </NavLink>
                ))
            }
        </div>
        <main>{children}</main>
    </div>
    );
};
export default SideBar;