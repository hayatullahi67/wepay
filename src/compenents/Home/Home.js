import Group40 from '../../assets/images/Group40.png'
import Fingerprint from '../../assets/images/Fingerprint.png'
import FrameII from '../../assets/images/FrameII.png'
import Group41 from '../../assets/images/Group41.png'
import googleplay from '../../assets/images/googleplay.png'
import Finger from '../../assets/images/finger-print.png'
import Like from '../../assets/images/Like.png'
import Naira from '../../assets/images/Naira.png'
import Link from '../../assets/images/Link.png'
import Individual from '../../assets/images/Individual.png'
import carbon from '../../assets/images/carbon.png'
import Market from '../../assets/images/Market.png'
import financial from '../../assets/images/financial.png'
import pos from '../../assets/images/pos.png'
import Ellipse from '../../assets/images/Ellipse.png'
import Ellipse11 from '../../assets/images/Ellipse11.png'
import classes from './Home.module.css'
// import AOS from "aos";
// import "aos/dist/aos.css";
import { useTheme } from "../Themeprovider/Themeprovider"
import { useEffect , useState ,useRef } from 'react'
import CountUp from 'react-countup'
// import ScrollTrigger from 'react-scroll-trigger'
import ScrollTrigger from "gsap/ScrollTrigger";
import gsap from "gsap";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { AiOutlineArrowRight, AiOutlineArrowLeft } from "react-icons/ai";
gsap.registerPlugin(ScrollTrigger);
function Home (){
  const { isDarkMode } = useTheme();

  

  const [sliderSettings, setSliderSettings] = useState({
    
    arrows: true,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
   
    appendDots: (dots) => <ul className={classes.slickDots}>{dots}</ul>,
  });


  useEffect(() => {
    const updateSettings = () => {
      if (window.innerWidth >= 1024) {
        setSliderSettings({
          dots: true, 
          infinite: true,  
          slidesToShow: 2,  
          slidesToScroll: 1,  
        });
      } else {
        setSliderSettings({
          dots: true,
          infinite: true,
          speed: 500,
          slidesToShow: 1,
          slidesToScroll: 1,
        });
      }
    };

    updateSettings(); // Initial check
    window.addEventListener("resize", updateSettings);

    return () => window.removeEventListener("resize", updateSettings);
  }, []);

  
  // const [count1, setCount1] = useState(0);
  // const [count2, setCount2] = useState(0);
  // const [count3, setCount3] = useState(0);
  // const counterRef = useRef(null);
  // const [hasAnimated, setHasAnimated] = useState(false);
  const sectionRef = useRef(null);
  const [startCount, setStartCount] = useState(false);
  const hasAnimated = useRef(false);
  useEffect(() => {
    if (window.AOS) {
      window.AOS.init({
        duration: 1000,
        once: false,
        // mirror: true,
      });
    }
  }, []);

  // useEffect(() => {
  //   const trigger = ScrollTrigger.create({
  //     trigger: sectionRef.current,
  //     start: "top 80%", // Starts animation when 80% of the section is visible
  //     onEnter: () => setStartCount(true),
  //     onLeaveBack: () => setStartCount(false), // Optional: reset when scrolling back up
  //   });

  //   // return () => trigger.kill(); // Cleanup ScrollTrigger when component unmounts
  // }, []);
  
  useEffect(() => {
    const trigger = ScrollTrigger.create({
      trigger: sectionRef.current,
      start: "top 80%", // Starts when 80% of the section is visible
      onEnter: () => {
        if (!hasAnimated.current) {
          setStartCount(true);
          hasAnimated.current = true; // ✅ Prevents re-triggering
        }
      },
    });

    return () => trigger.kill(); // Cleanup on unmount
  }, []);

    return(
        <div className={`${classes.homecontainer}  ${isDarkMode ? "bg-[#00261E]" : "bg-white"}`}>
         <div className={classes.homeinner}>
        {/* banking  */}
        <section className='relative pt-[54px]'>
            {/* inner */}
             <div>
                {/* bgimage  */}
               <div className='absolute'>
                  <img src={Group40} className='w-[400px]' />
               </div>
               {/* banking text */}
                <div  className='  flex justify-center relative'>
                    <div>
                    <div className='   text-center'>
                    <h1 className={`font-[inter] text-[20px] sm:text-[35px] md:text-[65px] text-[#055140] ${isDarkMode ? "text-white" : "text-[#003429]"} `}><b> {isDarkMode ? <span>Banking Wey No Get Boundary</span> : <span> Banking Beyond Boundaries</span> } </b></h1>
                   
                   <p 
                   className={`lg:w-[900px] font-[inter] text-[#055140] text-[17px] sm:text-[22px] md:text-[27px] ${isDarkMode ? "text-white" : "text-[#003429]"}`}> 
                    {isDarkMode ? <span>WePay dey use better biometric technology, plus strong encryption to bring financial freedom come everywhere for Africa.</span> : <span>WePay leverages advanced biometric technology, and cutting-edge encryption to deliver financial freedom across Africa.</span> }</p>

                    </div>


                    

                     
                  
                    </div>
                    

                    
                </div>
                
                {/* cards */}

                <div className='flex sm:justify-center relative pt-[40px]'>
                        {/* inner */}
                      <div data-aos="fade-down" className='max-sm:ml-[20px] max-sm:w-[90%]   max-md:w-[80%]  md:w-[80%] lg:w-[50%]  grid grid-cols-2 gap-[12px]'>
                        {/* cardsdiv1 */}
                          <div
                         style={isDarkMode ? { backgroundColor: "#00261E", borderColor: "#0F7760" } : {}}
                          className={`shadow-[0px_2px_4px_rgba(0,0,0,0.24)] bg-white py-[30px] max-sm:px-[10px] px-[30px] rounded-[24px] ${isDarkMode ? "bg-[#00261E] border border-[#0F7760] " : "bg-white"}`}>
                              {/* innercardsdiv1 */}
                              <div>
                                {/* cardsdivimg */}
                                <div className='w-[100%] flex justify-center pb-[18px]'>
                                  <img src={Fingerprint} className='w-[100px]' />
                                </div>
                                {/* cardsheader */}
                                  <div className='text-center pb-[27px] w-[100%] '>
                                    <h1 className={`text-[#055140]  text-[15.5px] sm:text-[19.5px] md:text-[22.5px] ${isDarkMode ? "text-white" : "text-[#003429]"}`}> <b> {isDarkMode ? <span>Your moni dey your hand</span> : <span>Your money at your fingertips</span> }  </b></h1>
                                  </div>

                                  {/* cardstext */}
                                  <div className={`${classes.cardtext} max-sm:text-[15px]  sm:text-center text-[#055140] text-opacity-70 text-[20px] ${isDarkMode ? "text-white" : "text-[#003429]"} `}>
                                    {isDarkMode ? <span>Enjoy banking wey dey secure and smooth. Send money, pay bills, and buy things sharp-sharp.</span> : <span> Experience secure, seamless banking. Send money, pay bills, and make purchases instantly. </span> }
                                  
                                  </div>
                              </div>
                          </div>
                         
                           {/* cardsdiv2 */}
                          <div  
                          style={isDarkMode ? { backgroundColor: "#00261E", borderColor: "#0F7760" } : {}}
                          className={`shadow-[0px_2px_4px_rgba(0,0,0,0.24)] bg-white py-[30px] max-sm:px-[10px] px-[30px] rounded-[24px] ${isDarkMode ? "bg-[#00261E] border border-[#0F7760] " : "bg-white"}`}>
                              {/* innercardsdiv2 */}
                              <div>
                                {/* cardsdivimg */}
                                <div className='w-[100%] flex justify-center pb-[27px]'>
                                  <img src={FrameII} className='w-[100px]' />
                                </div>
                                {/* cardsheader */}
                                  <div className='text-center pb-[27px] w-[100%]'>
                                    <h1 className={`text-[#055140] text-[15.5px] sm:text-[19.5px] md:text-[22.5px] w-[100%] ${isDarkMode ? "text-white md:text-[19.7px]" : "text-[#003429]"}`}> <b>
                                      {isDarkMode ? <span>What if losing Your Phone No Mean Anything?</span> : <span>What if losing your phone meant nothing?</span>}
                                       
                                       
                                        </b></h1>
                                  </div>

                                  {/* cardstext */}
                                  <div className={`${classes.cardtext} sm:text-center text-[#055140] text-opacity-70 max-sm:text-[15px] text-[20px]  ${isDarkMode ? "text-white" : "text-[#003429]"}`}>
                                   {isDarkMode ? <span>Imagine world where your fingerprint na your wallet, and money matter no get boundary again.</span> : <span> Imagine a world where your fingerprint replaces your wallet, and financial access transcends boundaries. </span>}
                                  
                                  </div>
                              </div>
                          </div>
                      </div>

                     </div>
             </div>

        </section>

           {/* motion numbers  div */}
        <section ref={sectionRef} className=' w-[100%]'>
             {/* bg img */}
             <div className={`  pt-[30px] ${classes.motionbg} `}>
                <div className={`absolute   ${classes.motionbginner} `}>
                <img src={Group41} className='absolute left-[68em] w-[180px] h-[140px]  ' />
                </div>
          
           </div>
            {/* Inner */}
            <div className='relative mt-[-40px] w-[100%] flex justify-center '> 
                <div className='w-[90%] bg-[#043024] flex rounded-[32px]  py-[16px] px-[20px] sm:px-[40px]'>

                
                   <div className='sm:pl-[30px] grid sm:gap-y-[20px] grid-cols-2 sm:grid-cols-2 md:grid-cols-4  items-center sm:w-[90%]'>
                    {/* 360 */}
                    <div>
                    
                        <div className=' text-[20px] sm:text-[30px] lg:text-[55px] font-[inter] text-[#2ff86d]'>
                          <b>  {startCount &&  <CountUp start={0} end={360} duration={6} delay={0} />}M+</b></div> 
                        <p className={`font-[inter] text-white text-[14px] ${isDarkMode ? 'text-[11.6px]' : 'text-[14px]'}`}> {isDarkMode ? <span>People Wey No Get Bank Account</span> : <span>Underserved Population</span>} </p>
                    </div>

                   {/* 10+  */}
                    <div  className='pl-[30px]'>
                        <div className='sm:text-[30px] lg:text-[55px] font-[inter] text-[#2ff86d]'><b>{startCount && <CountUp start={0} end={10} duration={6} delay={0} />}</b><b>+</b></div>
                        <p className={`font-[inter] text-white text-[14px] ${isDarkMode ? 'text-[11.6px]' : 'text-[14px]'}`}> 10 African Countries</p>
                    </div>

                       {/* 500 */}
                    <div className={`md:pb-[20px] lg:pb-[0px]  ${classes.textfive}`}>
                        <div className='sm:text-[30px] lg:text-[55px] font-[inter] text-[#2ff86d]'><b> {startCount &&   <CountUp start={0} end={500} duration={6} delay={0} />}</b><b>M+</b></div>
                        <p className={`font-[inter] text-white text-[14px] ${isDarkMode ? 'text-[11.6px]' : 'text-[14px]'}`}>Potential Customers</p>
                    </div>

                    <div className='sm:pl-[20px] md:pl-[60px] '>
                     <a> <img src={googleplay} /> </a>  
                    </div>
                   </div>
                   
                </div>

            </div>
           
        </section>

        {/* why we are better  */}
         <section>
            <div className='mt-[80px] flex justify-center w-[100%]'> 

                <div className='lg:w-[90%] max-sm:w-[90%]   sm:w-[85%] md:w-[85%]'>
                     <div className='text-center mb-[40px]'>
                       <b>
                        <h1 className={`text-[#043024] font-[inter] text-[34px]  sm:text-[44px]  ${isDarkMode ? "text-white" : "text-[#003429]"}`}> {isDarkMode ? <span>Why We Better Pass </span> : <span>Why We’re Better</span>} </h1>
                         
                       </b>
                     </div>
                      {/* better cards container  */}
                      <div className='max-sm:flex max-sm:justify-center'>
                      <div data-aos="fade-down" className=' max-sm:w-[100%] w-[90%] max-sm:gap-y-[20px] sm:gap-y-[20px] grid lg:grid-cols-3 max-sm:grid-cols-2 sm:grid-cols-2 md:gap-y-[20px]'>

{/* card 1 */}
<div  className={` max-sm:w-[210px] md:w-[260px]  flex justify-center px-[0px] pt-[20px] pb-[1px]     ${classes.bettercards}`}>
 <div className={`  w-[190px]`}>

    {/* card img */}
     <div className='flex justify-center pb-[30px]'> 
         <img src={Finger} className='w-[80px] h-[80px]' />
     </div>

     <div>
         <h1 className={`font-[inter] text-[22px] text-[#043024] ${isDarkMode ? "text-[white]" : "text-[#003429]"} `}><b> Biometric Security </b></h1>
     </div>

     <div className={`font-[inter] text-[#043024] max-sm:text-[14px] text-[17px] text-opacity-70 mb-[100px]  ${isDarkMode ? "text-[white] text-opacity-70 " : "text-[#003429]"}`}>
       
        <p>
           {isDarkMode ? <span>Your fingerprint na your only key, and we lock am with strong encryption.</span> : <span> Your fingerprint is your only key, protected by advanced encryption.</span>}
          </p>
     </div>
 </div>
          
              
          </div>
           {/* card 2 */}
           <div  className={` max-sm:w-[210px] md:w-[260px] flex justify-center px-[0px] pt-[20px] pb-[1px]   ${classes.bettercards}`}>
           <div className={`${classes.bettercardsinner2} w-[180px]`}>
          
              {/* card img */}
               <div className='flex justify-center pb-[30px]'> 
                   <img src={Like} className='w-[80px] h-[80px]' />
               </div>
          
               <div>
                   <h1 className={`${isDarkMode ? "text-[white]" : "text-[#003429]"} font-[inter] text-[22px] text-[#043024]`}><b> Effortless Convenience </b></h1>
               </div>
          
               <div className={`${isDarkMode ? "text-[white] text-opacity-70" : "text-[#003429]"} max-sm:w-[195px] w-[235px] font-[inter] text-[#043024] max-sm:text-[14px] text-[17px] text-opacity-70 mb-[100px]`}>
                  <p>
                    {isDarkMode ? <span>No card, no phone—touch and make payment anytime, anywhere.</span> : <span>No cards, no phones  access your money anytime, anywhere.</span>}
                    
                  </p>
               </div>
           </div>

    
          </div>
         {/* card3 */}
         <div  className={`max-sm:w-[260px] w-[300px] flex justify-center px-[0px] pt-[20px] pb-[1px]  ${classes.bettercards}`}>
         <div className='w-[245px]'>
        
            {/* card img */}
             <div className='flex justify-center pb-[30px]'> 
                 <img src={Naira} className='w-[80px] h-[80px]' />
             </div>
        
             <div>
                 <h1 className={`${isDarkMode ? "text-[white]" : "text-[#003429]"} font-[inter] text-[22px] text-[#043024]`}><b> Affordable Banking Solutions </b></h1>
             </div>
        
             <div className={`${isDarkMode ? "text-[white]" : "text-[#003429]"} font-[inter] text-[#043024] max-sm:text-[14px] text-[17px] text-opacity-70 mb-[100px]`}>
                <p>
                  {isDarkMode ? <span><span className='text-[#00EA48]'>To make money hard, but to commot am no suppose hard.</span>  WePay bring clear, small fees wey make banking easy and cheap for everybody.</span> : <span><span className='text-[#00EA48]'>Making money is hard, withdrawing it shouldn't be.</span> WePay offers transparent, low-cost transaction fees, making banking accessible and affordable for everyone.</span>}
                 
                </p>
             </div>
         </div>

    
        </div>

        </div>
                      </div>
                     
                     
                </div>
            </div>
         </section>


         {/* Get started */}
         
         <section className={`${classes.getstartedsec} bg-[#DEFFF4]  mt-[65px] w-[100%] ${isDarkMode ? "bg-green-900" : "bg-green"}`} >
          <div  className='flex justify-center'>
            <div  className='lg:w-[90%] max-sm:w-[70%] max-sm:w-[95%]  sm:w-[85%] md:w-[85%]  flex items-center md:gap-[135px] justify-between '>
              <div className={`${classes.getimg}`}>
                  
                  <img src={Link} className='max-sm:w-[200px] sm:w-[200px] md:w-[200px] lg:w-[400px]' />
                </div> 

                  {/* steps */}
                  <div className={`lg:mr-[0px]'`}>
                  <div className="  flex items-center justify-center p-6">
      <div className="max-w-lg">
        <h2 className={`${isDarkMode ? "text-white" : "text-[#003429]"} text-[45px]  font-bold font-[inter] mb-[60px]`}>
          {isDarkMode ? <span> How to take open Wepay Account</span> : <span> Get started with WePay </span> }
          
          
          
          </h2>
        
        {/* Step 1 */}
        <div className="flex items-start">
          <div className="relative flex flex-col items-center">
            <div className="w-10 h-10 flex items-center justify-center rounded-full border-2 border-green-500 text-green-500 font-semibold">
              1
            </div>
            <div className="w-[2px] h-[25px] bg-green-400 "></div>
            <div className="w-[2px] h-[25px] bg-gray-400 "></div>
          </div>
          <div className="ml-[60px]">
            <h3 className={`${isDarkMode ? "text-white" : "text-[#003429]"} text-[30px] font-[inter]    mb-6   max-sm:text-[16px]`}>Download the app</h3>
          </div>
        </div>

        {/* Step 2 */}
        <div className="flex items-start ">
          <div className="relative flex flex-col items-center">
            <div className={`${isDarkMode ? "text-white" : "text-[#003429]"} w-10 h-10 flex items-center justify-center rounded-full border-2 border-gray-500 text-gray-900 font-semibold`}>
              2
            </div>
            <div className="w-[2px] h-[60px] bg-gray-400"></div>
          </div>
          <div className="ml-[60px]">
            <h3 className={`${isDarkMode ? "text-white" : "text-[#003429]"} text-[30px]  font-[inter]  mb-1 text-lg     max-sm:text-[16px]`}>Sign Up with Biometrics</h3>
            <p className="text-gray-500 text-sm ">Your fingerprint {isDarkMode ? ' na' : 'is'}  your password</p>
          </div>
        </div>

        {/* Step 3 */}
        <div className="flex items-start ">
          <div className="relative flex flex-col items-center">
            <div className={`${isDarkMode ? "text-white" : "text-[#003429]"}  w-10 h-10 flex items-center justify-center rounded-full border-2 border-gray-500 text-gray-900 font-semibold`}>
              3
            </div>
          </div>
          <div className="ml-[60px]">
            <h3 className={`${isDarkMode ? "text-white" : "text-[#003429]"} text-[30px] font-[inter] max-sm:text-[16px]`}> {isDarkMode ? 'Put Money for Your Account' : 'Fund Your Account'}  </h3>
            <p className="text-gray-500 text-sm">
              {isDarkMode ? 'Start secure and smooth banking today.' : 'Start secure and seamless banking today'}
              </p>
          </div>
        </div>
      </div>
    </div>

                  </div>
            </div>
          </div>
         </section>
           

           {/* Transform */}
           <section className={`relative flex items-center justify-center  ${
  isDarkMode ? "bg-[#00261E]" : "bg-gradient-to-b from-green-50 via-green-200 to-green-50"
} ${classes.transformsec} pt-[80px] pb-[60px]`}>
           <div className='w-[100%]  flex justify-center'>

            <div className='lg:w-[90%] max-sm:w-[95%]   sm:w-[85%] md:w-[85%] '>
                <div>
                   {/* heading */}
                   <div className={` ${isDarkMode ? "text-white" : "text-[#003429]"} text-center flex justify-center text-[#093F2D] font-[inter] sm:text-[32px] md:text-[42px] lg:text-[52px] w-[100%]`}>
                    <h1 className='w-[900px]'>
                     {isDarkMode ?  <b>Come Enjoy Better Banking
                      With Wepay!</b> : <b>Transform Your Financial Journey with WePay!</b> }  </h1>
                   </div>

                   {/* grid template container */}
                   <div className='mt-[40px] grid grid-cols-2   gap-y-[20px]'>
                      {/* grids 1 */}
                      <div 
                      style={isDarkMode ? { backgroundColor: "#042F1A", borderColor: "green" } : {}}
                      className={` ${isDarkMode ? "bg-[#042F1A] border border-[green]" : "bg-white"} flex rounded-[16px] justify-center h-[209px] sm:w-[278px] md:w-[308px] lg:w-[570px]  bg-[white] ${classes.transformdiv}`}>
                       {/* gridinner */}
                       <div className={`flex gap-[20px] pt-[70px]  w-[358px] ${classes.transformgrid}`}>
                        {/* image */}
                        <div className='max-sm:max-w-[100%] max-sm:max-h-[50px] max-sm:flex max-sm:justify-center'>
                           <div className='max-sm:w-[30%]'>
                          <img src={Individual} className=' max-sm:max-h-[50px] sm:ml-[10px] sm:w-[60px]  lg:w-[80px] lg:h-[50px]' />
                            
                           </div>
                        </div>

                        {/* text */}
                        <div className={`${classes.transformtext}`} >
                          <b className={`${isDarkMode ? "text-white" : "text-[#003429]"} text-[#093F2D]  font-[inter] text-[16px]`}>For Individuals</b>
                          <p className={`${isDarkMode ? "text-white" : "text-[#003429]"} max-sm:w-[248px] max-lg:w-[208px] text-[#093F2D] font-[inter] text-[15px] text-opacity-70`}>
                          {isDarkMode ? 'Make payments and withdrawals easy with just one touch.' : 'Simplify payments and withdrawals with just a touch.'}
                          
                          </p>
                        </div>
                       </div>

                      </div>

                     {/* grids 2 */}
                     <div 
                      style={isDarkMode ? { backgroundColor: "#042F1A", borderColor: "green" } : {}}
                     className={`${isDarkMode ? "bg-[#042F1A] border border-[green]" : "bg-white"} flex rounded-[16px] justify-center h-[209px] sm:w-[278px] md:w-[308px] lg:w-[570px]  bg-[white] ${classes.transformdiv}`}>
                       {/* gridinner */}
                       <div className={`flex gap-[20px] pt-[70px]  w-[358px] ${classes.transformgrid}`}>
                        {/* image */}
                        

                        <div className='max-sm:max-w-[100%] max-sm:max-h-[50px] max-sm:flex max-sm:justify-center'>
                           <div className='max-sm:w-[30%]'>
                          <img src={carbon} className=' max-sm:max-h-[50px] sm:ml-[10px] sm:w-[60px]  lg:w-[80px] lg:h-[50px]' />
                            
                           </div>
                        </div>

                        {/* text */}
                        <div className={`${classes.transformtext}`}>
                          <b className={`${isDarkMode ? "text-white" : "text-[#003429]"} text-[#093F2D] font-[inter] text-[16px]`}>For SMEs</b>
                          <p className={`${isDarkMode ? "text-white" : "text-[#003429]"} max-sm:w-[248px] max-lg:w-[208px]  w-[258px] text-[#093F2D] font-[inter] text-[15px] text-opacity-70`}>
                            {isDarkMode ? 'Grow your business with cheap POS systems and smooth transactions.' : 'Empower your business with affordable POS systems and seamless transactions.' }
                          
                          </p>
                        </div>
                       </div>

                      </div>


                      {/* grids 3 */}
                      <div 
                      style={isDarkMode ? { backgroundColor: "#042F1A", borderColor: "green" } : {}}
                      className={`${isDarkMode ? "bg-[#042F1A] border border-[green]" : "bg-white"}  flex rounded-[16px] justify-center h-[209px] sm:w-[278px] md:w-[308px] lg:w-[570px]  bg-[white] ${classes.transformdiv}`}>
                       {/* gridinner */}
                       <div className={`flex gap-[20px] pt-[70px]  w-[358px] ${classes.transformgrid}`}>
                        {/* image */}
                       
                       <div className='max-sm:max-w-[100%] max-sm:max-h-[50px] max-sm:flex max-sm:justify-center'>
                           <div className='max-sm:w-[30%]'>
                          <img src={Market} className=' max-sm:max-h-[50px] sm:ml-[10px] sm:w-[60px]  lg:w-[80px] lg:h-[50px]' />
                            
                           </div>
                        </div>

                        {/* text */}
                        <div className={`${classes.transformtext}`}>
                          <b className={`${isDarkMode ? "text-white" : "text-[#003429]"} text-[#093F2D] font-[inter] text-[16px]`}>For Marketplaces</b>
                          <p className={`${isDarkMode ? "text-white" : "text-[#003429]"} max-sm:w-[248px] max-lg:w-[208px] w-[258px] text-[#093F2D] font-[inter] text-[15px] text-opacity-70`}>
                          {isDarkMode ? 'Give fast, secure, touch-based payments without wahala.' : 'Deliver fast, secure, touch-based payments to your customers effortlessly.'}
                          

                          </p>
                        </div>
                       </div>

                      </div>

                      {/* grids 4 */}

                      <div 
                      style={isDarkMode ? { backgroundColor: "#042F1A", borderColor: "green" } : {}}
                      className={`${isDarkMode ? "bg-[#042F1A] border border-[green]" : "bg-white"}  flex rounded-[16px] justify-center h-[209px] sm:w-[278px] md:w-[308px] lg:w-[570px] bg-[white] ${classes.transformdiv}`}>
                       {/* gridinner */}
                       <div className={`flex gap-[20px] pt-[70px]  w-[358px] ${classes.transformgrid}`}>
                        {/* image */}
                       

                        <div className='max-sm:max-w-[100%] max-sm:max-h-[50px] max-sm:flex max-sm:justify-center'>
                           <div className='max-sm:w-[30%]'>
                          <img src={financial} className=' max-sm:max-h-[50px] sm:ml-[10px] sm:w-[60px]  lg:w-[80px] lg:h-[50px]' />
                            
                           </div>
                        </div>

                        {/* text */}
                        <div className={`${classes.transformtext}`}>
                          <b className={`${isDarkMode ? "text-white" : "text-[#003429]"} text-[#093F2D] font-[inter] text-[16px]`}>For Financial Institutions</b>
                          <p className={`${isDarkMode ? "text-white" : "text-[#003429]"}  max-sm:w-[248px] max-lg:w-[208px] w-[258px] text-[#093F2D] font-[inter] text-[15px] text-opacity-70`}>
                           {isDarkMode ? 'Join cashless movement and identity banking with biometric solutions.' : 'Embrace cashless innovation and identity banking with biometric solutions.'}
                          
                          </p>
                        </div>
                       </div>

                      </div>
                   </div>


                </div>

            </div>
           </div>

           </section>




           <section
           style={{ backgroundColor: isDarkMode ? "#042F1A" : "#DEFFF4" }}
           className={`${isDarkMode ? "bg-[#042F1A] " : "bg-[#Defff4]"} w-[100%] bg-[#Defff4] h-fit pb-[50px]`}>
                  <div className='flex justify-center'>
                      <div className='max-sm:w-[70%] sm:w-[85%]  lg:w-[92%] '>
                        <div className='text-center mt-[50px] mb-[30px]'><h1 className={`  ${classes.join}  ${isDarkMode ? "text-white" : "text-[#003429]"}  font-[inter] text-[30px] text-[#000000]`}><b>Join the WePay revolution today!</b></h1></div>
                        <Slider {...sliderSettings} data-aos="fade-down" className={`${classes.sliderWrapper} slider-custom  w-full max-w-[100vw]`}>
                      {/* bordercard */}
                      <div className={` ${classes.bordercard} max-md:max-w-[440px]  max-sm:ml-[20px] sm:ml-[20px] slider-item relative   lg:max-w-[530px]`}>
      {/* Outer glow container */}
      <div className="absolute -inset-1 rounded-2xl " />

      {/* Card content */}
      <div className="relative   p-[15px]  ">
        {/* Top border: has top but no bottom, left taller than right */}
        <div
          className="absolute top-0 left-0 w-full "
          style={{
            borderTop: "5px solid #00ea48",
            borderLeft: "5px solid #00ea48",
            borderRight: "5px solid #00ea48",
            height: "156px",
            borderTopLeftRadius: "20px",
            borderTopRightRadius: "20px",
            clipPath: "polygon(0 0, 100% 0, 100% 50%, 0 90%)",
          }}
        />
        <div className={`${classes.leftcircle} h-[15px] w-[15px] absolute left-[-6px] rounded-full bottom-[130px] bg-[#00ea48]`}></div>
        {/* Bottom border: has bottom but no top, right taller than left */}
        <div
          className="absolute bottom-0 left-0 w-full"
          style={{
            borderBottom: "5px solid #00ea48",
            borderLeft: "5px solid #00ea48",
            borderRight: "5px solid #00ea48",
            height: "150px",
            borderBottomLeftRadius: "20px",
            borderBottomRightRadius: "20px",
            clipPath: "polygon(0 50% , 100% 0, 100% 100% , 0 100%)",
             
            // clipPath: "polygon(0 50%, 100% 0, 100% 100%, 0% 100%)",
          }}
        />
        <div className='h-[15px] w-[15px] absolute  rounded-full right-[-6px] bottom-[155px]  bg-[#00ea48] '></div>


        <div className="space-y-2 relative z-10 bg-[#145f41] rounded-[10px] flex justify-center py-[30px] ">
          <div className='min-h-[200px] w-[85%]'>

          <h3 className="text-[20px] font-[inter] mb-[15px]  text-white "><b>Real Stories, Real Impact </b> </h3>

<p className="font-[inter] pb-[15px] text-[14px] text-[#dceeff]">
  {isDarkMode ? 'WePay biometric payment don change everything for us. Easy to set up, transactions dey sure, and their customer support dey top-notch. I recommend am well!' : "WePay's biometric payment solution has been a game-changer for me easy setup, reliable transactions and excellent customer support.Highly recommend"}
  
</p>

<div className="flex items-center justify-between gap-3">
  
  <div>
    <p className="text-sm font-medium text-emerald-50">Isaac Samuel</p>
    <p className='text-sm font-medium text-white text-opacity-70'>Small Business Owner</p>
  </div>

  <div className='h-[45px] w-[45px]'>
  <img className='h-[45px] w-[45px]' src={Ellipse} />
  </div>
          </div>
          
          </div>
        </div>
      </div>
    </div>                        
                             {/*second border card  */}
                             <div className={`${classes.bordercard}  max-md:max-w-[440px]  max-sm:ml-[20px] sm:ml-[20px] slider-item relative  lg:max-w-[530px]`}>
      {/* Outer glow container */}
      <div className="absolute -inset-1 rounded-2xl " />

      {/* Card content */}
      <div className="relative   p-[15px]  ">
        {/* Top border: has top but no bottom, left taller than right */}
        <div
          className="absolute top-0 left-0 w-full "
          style={{
            borderTop: "5px solid #00ea48",
            borderLeft: "5px solid #00ea48",
            borderRight: "5px solid #00ea48",
            height: "156px",
            borderTopLeftRadius: "20px",
            borderTopRightRadius: "20px",
            clipPath: "polygon(0 0, 100% 0, 100% 50%, 0 90%)",
          }}
        />
        <div className={`${classes.leftcircle2} h-[15px] w-[15px] absolute left-[-6px] rounded-full bottom-[130px] bg-[#00ea48]`}></div>
        {/* Bottom border: has bottom but no top, right taller than left */}
        <div
          className="absolute bottom-0 left-0 w-full"
          style={{
            borderBottom: "5px solid #00ea48",
            borderLeft: "5px solid #00ea48",
            borderRight: "5px solid #00ea48",
            height: "150px",
            borderBottomLeftRadius: "20px",
            borderBottomRightRadius: "20px",
            clipPath: "polygon(0 50% , 100% 0, 100% 100% , 0 100%)",
             
            // clipPath: "polygon(0 50%, 100% 0, 100% 100%, 0% 100%)",
          }}
        />
        <div className='h-[15px] w-[15px] absolute  rounded-full right-[-6px] bottom-[155px]  bg-[#00ea48] '></div>


        <div className="space-y-2 relative z-10 bg-[#145f41] rounded-[10px] flex justify-center py-[30px] ">
          <div className='min-h-[200px] w-[85%]'>

          <h3 className="text-[20px] font-[inter] mb-[15px]  text-white "><b>Real Stories, Real Impact </b> </h3>

<p className="font-[inter] pb-[15px] text-[14px] text-[#dceeff]">
 {isDarkMode ? 'The smooth sign-up and biometric security don make transactions easier and safer.' : ' The seamless onboarding and biometric security have made transactions easier and safer.'}

</p>

<div className=" mt-[30px] flex items-center justify-between gap-3">
  
  <div>
    <p className="text-sm font-medium text-emerald-50">Idara Ekong</p>
    <p className='text-sm font-medium text-white text-opacity-70'>Marketplace Owner</p>
  </div>

  <div className='h-[45px] w-[45px]'>
  <img className='h-[45px] w-[45px]' src={Ellipse11} />
  </div>
          </div>
          
          </div>
        </div>
      </div>
    </div>            
                      </Slider >  
                      </div>

                  </div>

           </section>



           {/* About WePay */}
           <section
            style={{ backgroundColor: isDarkMode ? "#042F1A" : "#DEFFF4" }}
           className={`${isDarkMode ? "bg-[#042F1A] " : "bg-[#Defff4]"}  bg-[#defff4] w-[100%] mt-[80px]`}>
            <div className='flex justify-center'>

              <div className='lg:max-w-[90%] max-sm:w-[70%]   sm:w-[85%] md:w-[85%] '>
                 <div className={`md:flex justify-between lg:gap-[120px]  pt-[42px] pb-[50px] items-center ${classes.aboutwepay}`}>
                  {/* flex1 */}
                    <div  className={`${classes.aboutfadeleft}`} >
                       <div>
                        <h1 className={`${isDarkMode ? "text-white" : "text-[#093F2D]"} font-[inter] text-[#093F2D] text-[24px] sm:text-[34px] md:text-[64px]`}><b>About WePay </b></h1>
                       </div>

                       <div className=' max-sm:w-[451px] max-md:w-[311px] sm:w-[491px] lg:w-[491px] font-[inter] text-[17px] '>
                        <p className={` ${isDarkMode ? "text-white" : "text-[#093F2D]"} text-opacity-70 text-[black] ${classes.abouttxt}`}>
                          {isDarkMode ? 'WePay Mobile Solutions Limited dey redefine money matter for Africa with biometric authentication. We dey partner with big fintech companies, banks, and local agents all over the continent, to build network wey dey empower people wey no get enough access to banking with secure and inclusive financial services. With WePay, you fit do money transactions with only your fingerprint—no need for card or smartphone. This way dey make payment simple and give everybody, especially people wey dey place wey banking no fit reach, power to join digital economy with confidence. For WePay, we no just dey do digital banking, we dey do identity banking. We dey build bridge where normal banking dey put wall.': "WePay Mobile Solutions Limited is redefining finance in Africa through biometric authentication. Our robust infrastructure is built on strategic partnerships with leading fintech companies, banks, and local merchants across the continent, creating a network that empowers underbanked populations with secure, inclusive financial services. With WePay, users can conduct financial transactions and access their funds using only their fingerprints, eliminating the need for traditional cards or smartphones. This approach simplifies the payment process and empowers everyone, especially those in underbanked markets to participate confidently in the digital economy. At WePay, we’re taking fintech beyond mere digital banking and into identity banking. We're architects of financial inclusion. We build bridges where traditional banking creates walls."}
                          </p>
                       </div>
                      
                    </div>

                    {/* flex2 pos img */}
                    {/* <div className=''>
                      <img src={pos} className=' w-[2500px] h-[450px]' />
                    
                     <div className='absolute  w-[302px] h-[302px] border-4 border-green-500 rounded-full flex justify-center items-center '>
                      <div className='w-[212px] h-[212px] border-4 border-green-500 rounded-full  flex justify-center items-center'>
                        <div className='w-[122px] h-[122px] border-4 border-green-500 rounded-full '>

                        </div>
                      </div>
                     </div>
                    </div> */}
                    <div className={`relative ${classes.aboutposimg}`}>
  
  <img src={pos} className="z-10 left-[40px] relative  w-[2500px] h-[450px]" alt="Background" />

  {/* Outer Circle */}
  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 max-sm:w-[260px] max-sm:h-[260px] w-[302px] h-[302px] border-4 border-green-500 rounded-full flex justify-center items-center">
    
    {/* Middle Circle */}
    <div className="max-sm:w-[190px] max-sm:h-[190px] w-[212px] h-[212px] border-4 border-green-500 rounded-full flex justify-center items-center">
      
      {/* Inner Circle with Image */}
      <div className=" w-[122px] h-[122px] border-4 border-green-500 rounded-full overflow-hidden">
      </div>
      
    </div>
  </div>
</div>

                 </div>
              </div>
            </div>

           </section>

           {/* Get in touch */}
           <section
           style={{ backgroundColor: isDarkMode ? "#042F1A" : "#DEFFF4" }}
           className={`  ${classes.getintouch} mb-[50px] mt-[80px]  ${isDarkMode ? "bg-[#042F1A] " : "bg-[#Defff4]"} bg-[#DEFFF4]`}>
           <div 
           
           className={` pt-[40px] pb-[40px] flex items-center justify-center `}>
      <div className="w-[100%] px-6 py-8 ">
        <div className='flex  justify-center'>
            <div className='w-[55%]'>

            <h1 className={`text-[34px] font-bold font-[inter] text-[#000000] text-center mb-4 ${isDarkMode ? "text-white" : "text-[#000000]"}`}>
          {isDarkMode ? 'Make We Link Up!' : 'Get In Touch with Us'}
          
          </h1>

        <p className={`${isDarkMode ? "text-white" : "text-[black]"} text-center mb-8 text-[black] text-[17px] font-[inter] text-opacity-70`}>
          {isDarkMode ? <span> You wan know more about how WePay fit help your business or personal money needs? Drop your details below, and we go arrange call-back from our team </span>  : <span>Want to learn more about how WePay can support your business or personal financial needs? Share your details
            below, and we&apos;ll arrange a call-back from our team.</span>}
        </p>
            </div>
        
        </div>
          

           <div className=' flex  justify-center'>
           <form  className="w-full max-w-[90%]">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">
                Fast name<span className="text-red-500">*</span>
              </label>
              <input
                id="firstName"
                name="firstName"
                type="text"
                className="w-full px-3 border border-[#055140] py-2 bg-transparent  rounded-md shadow-sm focus:outline-none  "
                placeholder="Idara"
                required
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">
                Last name<span className="text-red-500">*</span>
              </label>
              <input
                id="lastName"
                name="lastName"
                type="text"
                className="w-full px-3 border border-[#055140] py-2 bg-transparent  rounded-md shadow-sm focus:outline-none  "
                placeholder="Joel"
                required
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email<span className="text-red-500">*</span>
              </label>
              <input
                id="email"
                name="email"
                type="email"
                className="w-full px-3 border border-[#055140] py-2 bg-transparent  rounded-md shadow-sm focus:outline-none  "
                placeholder="Idaraekhong@gmail.com"
                required
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-700">
                Phone Number<span className="text-red-500">*</span>
              </label>
              <input
                id="phoneNumber"
                name="phoneNumber"
                type="text"
                className="w-full px-3 border border-[#055140] py-2 bg-transparent  rounded-md shadow-sm focus:outline-none  "
                placeholder="+234"
                required
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">
              Consent<span className="text-red-500">*</span>
            </label>
            <div className="flex items-center space-x-2">
              <input
                type="checkbox"
                id="consent"                
                className="h-4 w-4 text-green-500 focus:ring-green-500 border-[#055140] rounded"
              />
              <label htmlFor="consent" className="text-sm font-medium text-gray-700">
                I agree to receive Emails and Phone calls from WePay Team.
              </label>
            </div>
          </div>

          <button
            type="submit"
            className="bg-[#2FF86D]  text-black font-[inter] text-[12px] rounded-full px-8 py-2 transition-colors duration-200"
          >
           <b> Get in touch</b>
          </button>
        </form>
           </div>
       
      </div>
    </div>
           </section>
      </div>
        </div>
       
    )
}

export default Home

