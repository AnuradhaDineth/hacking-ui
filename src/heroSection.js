import React from 'react';
import { Button } from "@material-tailwind/react";
import './style.css';
import HeroImg from './heroimg.png';
import Arrow from './gcarrow.png';


function HeroSection() {
  return (
    <div className='w-full h-9 grid grid-cols-1 lg:grid-cols-2 p-6 justify-center lg:px-20'>
      <div className="flex flex-col content-center justify-start ps-4 min-w-fit">
        <p className="text-green-500 text-2xl text-start py-10">
          The Sri Lankan Best Web for
        </p>
        <p className="text-white-500 text-[100px] text-start font-bold leading-none">
          Hacking Experiences
        </p>
        <div className="flex justify-start py-16">
          <div className="grid justify-items-center">
            <Button className='bg-orange-300 font-medium text-black text-xl rounded-xl px-14 py-4 m-3 hover:-translate-y-2 transition hover:duration-700'>Join Now</Button>
            <div className="h-20 ps-5 flex items-end">
              <div className='arrow overflow-y-hidden flex items-end'>
                <img src={Arrow} alt="join us"/>
              </div>
            </div>
          </div>
          <div>
            <Button className='hover:bg-lime-600 border-dashed border-2 border-lime-600 font-medium text-white text-xl rounded-xl px-14 py-4 m-3 hover:-translate-y-2 transition hover:duration-700'>Course Content</Button>
          </div>
        </div>
      </div>
      <div className='flex justify-center min-w-fit'>
        <img src={HeroImg} alt="m" />
      </div>
    </div>
  )
}

export default HeroSection;
