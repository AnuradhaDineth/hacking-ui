import React from 'react';

function Header() {
  return (
    <header class="header sticky top-0 bg-white shadow-md flex items-center px-8 py-02 h-15 bg-opacity-0 justify-around">
        {/* <!-- logo --> */}
        <h1 class="w-48">
            <img src="https://hacking.lk/wp-content/uploads/2023/02/croped-Hacking-LK-White-Text-Horizontal-300x80.png" alt="#" />
        </h1>

        {/* <!-- navigation --> */}
        <nav class="nav font-semibold text-lg">
            <ul class="flex items-center">
                <li class="p-4 border-b-2 border-green-500 border-opacity-0 hover:border-opacity-100 hover:text-green-500 duration-200 cursor-pointer">
                    <a href="#">Home</a>
                </li>
                <li class="p-4 border-b-2 border-green-500 border-opacity-0 hover:border-opacity-100 hover:text-green-500 duration-200 cursor-pointer">
                    <a href="#">Blog</a>
                </li>
                <li class="p-4 border-b-2 border-green-500 border-opacity-0 hover:border-opacity-100 hover:text-green-500 duration-200 cursor-pointer">
                    <a href="#">Course</a>
                </li>
                <li class="p-4 border-b-2 border-green-500 border-opacity-0 hover:border-opacity-100 hover:text-green-500 duration-200 cursor-pointer">
                    <a href="#">News</a>
                </li>
                <li class="p-4 border-b-2 border-green-500 border-opacity-0 hover:border-opacity-100 hover:text-green-500 duration-200 cursor-pointer">
                    <a href="#">Contact</a>
                </li>
            </ul>
        </nav>

    </header>
  )
}

export default Header;
