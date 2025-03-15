import { useState, useEffect } from "react";
import { useTheme } from "../Themeprovider/Themeprovider";
function Bgtoggler() {

  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <div className={`w-[100%] pt-[44px] flex justify-center ${isDarkMode ? "bg-[#00261E]" : "bg-white"}`}>
      <div className="w-[10%]">

      <div 
      className={`w-14 h-7 flex items-center rounded-full p-1 cursor-pointer 
      ${isDarkMode  ? "bg-green-500" : "bg-[#9CFFEA]"}`} 
      onClick={toggleTheme}
    >
      <div 
        className={`w-6 h-6 rounded-full shadow-md transition-all 
        ${isDarkMode  ? "translate-x-7 bg-white" : "bg-green-900"}`}
      ></div>
    </div>
      </div>
    </div>
    
  );
}

export default Bgtoggler;
