import Reactm, { useState, useEffect } from 'react';
import { BsFillChatSquareTextFill } from "react-icons/bs";
import { BiUserCircle } from 'react-icons/bi';
import { IoMdChatboxes } from 'react-icons/io';
import { RiContactsFill } from 'react-icons/ri';


const logoClass = "block mx-auto w-[58px] h-[70px] flex items-center justify-center";
const linkClass = "sidebar-link block mx-auto w-[58px] h-[56px] flex items-center justify-center text-sidebar-icon";
const linkClassActive = "sidebar-link block mx-auto w-[58px] h-[56px] flex items-center justify-center text-primary-color";
const Sidebar = () => {

    const handleActive = (e) => {
        const links = document.querySelectorAll('.sidebar-link');
        links.forEach(el =>{
            el.classList = linkClass;
        })
        e.target.classList = linkClassActive;
    }

    return (
        <div className="sideBar h-screen w-[76px] bg-secondary-color px-2">
            <a href="#" className={logoClass}>
                <BsFillChatSquareTextFill className='text-2xl text-primary-color' />
            </a>
            <a href="#" className={linkClassActive} onClick={handleActive}>
                <BiUserCircle className='text-3xl pointer-events-none' />
            </a>
            <a href="#" className={linkClass} onClick={handleActive} >
                <IoMdChatboxes className='text-3xl pointer-events-none' />
            </a>
            <a href="#" className={linkClass} onClick={handleActive} >
                <RiContactsFill className='text-3xl pointer-events-none' />
            </a>
        </div>
    );
}

export default Sidebar;
