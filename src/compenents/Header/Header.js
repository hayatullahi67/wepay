// import { useState, useEffect } from "react";
// import Group4 from '../../assets/images/Group4.png'

// function Header() {

  

//   return (
//     <div>
//        <header className="w-[100%] relative flex justify-center pt-[35px] item-center bg-white">
//          <div className="  w-[90%] flex justify-between items-center">
//           {/* Logo */}
//             <div className="logo"> 
//               <img src={Group4} className="w-[150px] h-[58px]" />
//             </div>
//             {/* List */}

//             <div className="font-[inter] text-opacity-70  text-[#003429] text-[16px] grid grid-cols-5 gap-[15px]">
//               <div>Home</div>
//               <div>Personal</div>
//               <div>Business</div>
//               <div>Company</div>
//               <div>Sign Up</div>
//             </div>
//             {/* Register */}
//             <div>
//               <div className="w-[119px] h-[59px] rounded-[80px] bg-[#2FF86D] flex justify-center items-center">
//                 <div className="font-[inter] text-[#000000] text-[16px]">Register</div>
//               </div>
//             </div>
//          </div>

         
//        </header>
//     </div>
//   );
// }

// export default Header;



import { useState } from "react"
// Using a placeholder image since the actual image path is not available
import Group4 from '../../assets/images/Group4.png'
import { useTheme } from "../Themeprovider/Themeprovider"


function Header() {
  const { isDarkMode } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <div>
      <header className={`max-md:hidden w-[100%] relative flex justify-center pt-[35px] item-center  pb-[20px] ${isDarkMode ? "bg-[#00261E]" : "bg-white"}`}>
        <div className="  w-[90%] flex justify-between items-center">
          {/* Logo */}
          <div className="logo">
            <img src={Group4} className="w-[150px] h-[58px]" />
          </div>
          {/* List */}

          <div className={`font-[inter] text-opacity-70  text-[#003429]  ${isDarkMode ? "text-white" : "text-[#003429]"} text-[16px] grid grid-cols-5 gap-[15px]`}>
            <div>Home</div>
            <div>Personal</div>
            <div>Business</div>
            <div>Company</div>
            <div>Sign Up</div>
          </div>
          {/* Register */}
          <div>
            <div className="w-[119px] h-[59px] rounded-[80px] bg-[#2FF86D] flex justify-center items-center">
              <div className="font-[inter] text-[#000000] text-[16px]">Register</div>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Header - This will only show on mobile screens */}
      <header className={` ${isDarkMode ? "bg-[#00261E]" : "bg-white"} w-full bg-white pt-4 pb-4  md:hidden`}>
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="logo">
            <img src={Group4} className="w-[150px] h-[58px]" />
          </div>

          {/* Hamburger Menu Button */}
          <button onClick={toggleMenu} className="flex flex-col justify-center items-center w-10 h-10">
            <span
              className={`block w-6 h-0.5 bg-[#003429] mb-1.5 transition-transform ${isMenuOpen ? "rotate-45 translate-y-2" : ""}`}
            ></span>
            <span className={`block w-6 h-0.5 bg-[#003429] mb-1.5 ${isMenuOpen ? "opacity-0" : "opacity-100"}`}></span>
            <span
              className={`block w-6 h-0.5 bg-[#003429] transition-transform ${isMenuOpen ? "-rotate-45 -translate-y-2" : ""}`}
            ></span>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="mt-4 bg-white">
            <nav className="flex flex-col space-y-4 font-[inter] text-[#003429] text-[16px]">
              <div className="py-2 border-b border-gray-100">Home</div>
              <div className="py-2 border-b border-gray-100">Personal</div>
              <div className="py-2 border-b border-gray-100">Business</div>
              <div className="py-2 border-b border-gray-100">Company</div>
              <div className="py-2 border-b border-gray-100">Sign Up</div>
            </nav>
            <div className="mt-6 flex justify-center">
              <div className="w-full h-[50px] rounded-[80px] bg-[#2FF86D] flex justify-center items-center">
                <div className="font-[inter] text-[#000000] text-[16px]">Register</div>
              </div>
            </div>
          </div>
        )}
      </header>
    </div>
  )
}

export default Header

