import React from 'react';
import HeaderImg from './HlklogoHackingLK.png';

function Header() {
  return (
    <header className="header sticky top-0 bg-white shadow-md flex flex-col md:flex-row px-8 py-2 h-16 bg-opacity-0 justify-between lg:justify-around">
        {/* <!-- logo --> */}
        <h1 className="w-48">
            <img src={HeaderImg} alt="Hacking lk" />
        </h1>

        {/* <!-- navigation --> */}
        <nav className="nav font-semibold text-lg">
            <ul className="flex items-center">
                <li className="p-4 border-b-2 border-green-500 border-opacity-0 hover:border-opacity-100 hover:text-green-500 duration-200 cursor-pointer">
                    <a href="#">Home</a>
                </li>
                <li className="p-4 border-b-2 border-green-500 border-opacity-0 hover:border-opacity-100 hover:text-green-500 duration-200 cursor-pointer">
                    <a href="#">Blog</a>
                </li>
                <li className="p-4 border-b-2 border-green-500 border-opacity-0 hover:border-opacity-100 hover:text-green-500 duration-200 cursor-pointer">
                    <a href="#">Course</a>
                </li>
                <li className="p-4 border-b-2 border-green-500 border-opacity-0 hover:border-opacity-100 hover:text-green-500 duration-200 cursor-pointer">
                    <a href="#">News</a>
                </li>
                <li className="p-4 border-b-2 border-green-500 border-opacity-0 hover:border-opacity-100 hover:text-green-500 duration-200 cursor-pointer">
                    <a href="#">Contact</a>
                </li>
            </ul>
        </nav>

    </header>
  )
}

export default Header;
