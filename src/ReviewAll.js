import React from "react";
import arrow from "./arrow.svg"

const ReviewAll = () => {
  return (
    <div className="bg-gray-50 rounded-2xl m-5 items-center grid grid-cols-1">
      <div className="text-center p-2 mt-6">
        <label className="text-black font-bold text-2xl uppercase">
        Check All Reviews on the Course Page 
        </label>
        <div className="ml-12">
            <img src={arrow} className="h-20"/>
        </div>
        
      </div>
      
    </div>
  );
};

export default ReviewAll;
