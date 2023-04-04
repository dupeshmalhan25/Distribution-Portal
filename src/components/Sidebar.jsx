import React, { useState } from 'react';
import {
    FaHome,
    FaRegCalendarAlt,
    FaEye,
    FaCertificate,
    FaImage,
   
}from "react-icons/fa";

import { NavLink } from 'react-router-dom';


const Sidebar = ({children}) => {   
    const[isOpen ,setIsOpen] = useState(false);
    const toggle = () => setIsOpen (!isOpen);
    const menuItem=[
        {
            path:"/",
            name:"Home",
            icon:<FaHome/>
        },
        {
            path:"/viewEvent",
            name:"View Event",
            icon:<FaRegCalendarAlt/>
        },
        {
            path:"/issueCertificate",
            name:"Issue Certificate",
            icon:<FaCertificate/>
        },
        {
            path:"/viewUsers",
            name:"View Users",
            icon:<FaEye/>
        },
        {
            path:"/createUser",
            name:"Create User",
            icon:<FaImage/>
        }]
       
    return (
        <div className="container">
           <div style={{width: isOpen ? "200px" : "50px"}} className="sidebar">
               <div className="top_section">
                   <h1 style={{display: isOpen ? "block" : "none"}} className="logo">Distribution Portal</h1>
                   <div style={{marginLeft: isOpen ? "50px" : "0px"}} className="bars">
                       <FaRegCalendarAlt onClick={toggle}/>
                   </div>
               </div>
               {
                   menuItem.map((item, index)=>(
                       <NavLink to={item.path} key={index} className="link" activeclassName="active">
                           <div className="icon">{item.icon}</div>
                           <div style={{display: isOpen ? "block" : "none"}} className="link_text">{item.name}</div>
                       </NavLink>
                   ))
               }
           </div>
           <main>{children}</main>
        </div>
    );
};

export default Sidebar;