import React from 'react';
import logo2 from '../../assets/images/logo2.png'
import instagram from '../../assets/images/instagram.png'
import facebook from '../../assets/images/facebook.png'
import twitter from '../../assets/images/twitter.png'
import linkedin from '../../assets/images/linkedin.png'
import WhatsApp from '../../assets/images/whatsapp.png'
import classes from './Footer.module.css'

const Footer = () => {
  return (
    <footer className=" bg-[#002D24] text-white pt-[60px]">
      <div className="flex justify-center  ">
        <div className='w-[90%]'>

        
        <div className={`grid  gap-y-[20px] max-sm:grid-cols-1 sm:grid-cols-2 md:gap-y-[20px] lg:grid-cols-4 gap-x-[50px] ${classes.ftcontainer}`}>
          {/* Company Info */}
          <div className={` w-[263px] lg:w-[363px] ${classes.company}`}>
            <div className="mb-4">
              <img src={logo2} />
            </div>
            <div className="  text-[13px] lg:w-[353px]">
              <p className="font-semibold"><b> Head Office:</b></p>
                <p className='font-[inter] text-white text-opacity-70'>14th Floor, Udom Emmanuel Towers, Banking Layout, Udo Udoma Avenue, Uyo 521110, Akwa Ibom State, Nigeria.</p>

                <div className='max-sm:w-[263px] my-[24px] border-[1.5px] border-dashed border-[#096B3A] h-[1px]'></div>
            
                <p className="font-semibold"><b> Branch Office:</b></p>
                <p className='font-[inter] text-white text-opacity-70'>3rd Floor, Workcity, Plot 1, Maruwa Bus Stop, 128 Remi Olowude Street, Lekki Phase 1, Lagos 105102, Lagos State, Nigeria.</p>

            </div>
            
            
          </div>
          
          {/* Products */}
          <div className='lg:w-[275px] lg:ml-[150px]'>
            <h3 className="text-green-400 font-bold mb-4 uppercase">Products</h3>
            <ul className="space-y-2 text-sm font-[inter] text-white text-opacity-70">
              <li>Biometric POS Terminals</li>
              <li>Mobile Wallet Integration</li>
              <li>Fingerprint-Based Transactions</li>
              <li>Affordable POS Services</li>
              <li>Instant Debit Card</li>
            </ul>
          </div>
          
          {/* Who We Serve */}
          <div className='lg:w-[275px] lg:ml-[100px]'>
            <h3 className="text-green-400 font-bold mb-4 uppercase">Who We Serve</h3>
            <ul className="space-y-2 text-sm font-[inter] text-white text-opacity-70">
              <li>Individual Consumers</li>
              <li>Small & Medium Enterprises</li>
              <li>Financial Institutions</li>
              <li>Marketplaces</li>
            </ul>
          </div>
          
          {/* Company */}
          <div className='lg:w-[205px] lg:ml-[60px]'>
            <h3 className="text-green-400 font-bold mb-4 uppercase">Company</h3>
            <ul className="space-y-2 text-sm font-[inter] text-white text-opacity-70">
              <li>About Us</li>
              <li>Contact: 08141551867</li>
            </ul>
            
            <div className="flex space-x-2 mt-4">
              <a href="#" className="">
                <img src={instagram} alt="Instagram" className='w-[32px] h-[32px]' />
              </a>
              <a href="#" className="">
                <img src={facebook} alt="Facebook" className='w-[32px] h-[32px]' />
              </a>
              <a href="#" className="">
                <img src={twitter} alt="Twitter" className='w-[32px] h-[32px]' />
              </a>
              <a href="#" className="">
                <img src={linkedin} alt="LinkedIn" className='w-[32px] h-[32px]' />
              </a>
              <a href="#" className="">
                <img src={WhatsApp} alt="WhatsApp" className='w-[32px] h-[32px]' />
              </a>
            </div>
          </div>
        </div>
        
        {/* Bottom section */}
          <div className=' lg:w-[70%] mt-[60px] mb-[60px]'>
            <div className={`flex justify-between ${classes.bottom}` }>
              <div>
               <div className="mb-4 md:mb-0 font-[inter]">
                 <h3 className="text-[#2FF86D] text-[14px] "><b>DOWNLOAD OUR APP </b> </h3>
                  <a href="#" className="text-[#DCEEFF] mt-[16px] text-[12px] underline">
                    Google Playstore Link
                 </a>
               </div>
              </div>

              <div>
              <div className="font-[inter] text-center text-[#6B8580]">
              <a href="#" className="">
                Privacy Policy
              </a>
              <span className="mx-2">|</span>
              <a href="#" className="">
                Terms of Use
              </a>
            </div>
            <div className="text-[#6B8580] text-[14px] font-[inter]">© 2023 WePay Mobile Solutions Limited. All rights reserved.</div>
          </div>
        </div>
              </div>

            </div>
          
       
        
      </div>
    </footer>
  );
};

export default Footer;