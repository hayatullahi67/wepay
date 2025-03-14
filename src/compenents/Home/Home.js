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
import classes from './Home.module.css'
function Home (){

  
    return(
        <div className={classes.homecontainer}>
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
                <div className='  flex justify-center relative'>
                    <div>
                    <div className='   text-center'>
                    <h1 className='font-[inter] text-[20px] sm:text-[35px] md:text-[65px] text-[#055140]'><b>Banking Beyond Boundaries</b></h1>
                   
                   <p className='lg:w-[900px] font-[inter] text-[#055140] text-[17px] sm:text-[22px] md:text-[27px] '> WePay leverages advanced biometric technology, and cutting-edge encryption to deliver financial freedom across Africa.</p>

                    </div>


                    

                     
                  
                    </div>
                    

                    
                </div>
                
                {/* cards */}

                <div className='flex justify-center relative pt-[40px]'>
                        {/* inner */}
                      <div className='max-sm:ml-[20px]  sm:w-[50%] md:w-[80%] lg:w-[50%] grid md:grid-cols-2 gap-[12px]'>
                        {/* cardsdiv1 */}
                          <div className=' shadow-[0px_2px_4px_rgba(0,0,0,0.24)] bg-white py-[30px] px-[30px] rounded-[24px]'>
                              {/* innercardsdiv1 */}
                              <div>
                                {/* cardsdivimg */}
                                <div className='w-[100%] flex justify-center pb-[18px]'>
                                  <img src={Fingerprint} className='w-[100px]' />
                                </div>
                                {/* cardsheader */}
                                  <div className='text-center pb-[27px] w-[100%]'>
                                    <h1 className='text-[#055140] text-[15.5px] sm:text-[19.5px] md:text-[22.5px]'> <b> Your money at your fingertips </b></h1>
                                  </div>

                                  {/* cardstext */}
                                  <div className='sm:text-center text-[#055140] text-opacity-70 text-[20px]'>
                                  Experience secure, seamless banking. Send money, pay bills, and make purchases instantly.
                                  </div>
                              </div>
                          </div>
                         
                           {/* cardsdiv2 */}
                          <div className=' shadow-[0px_2px_4px_rgba(0,0,0,0.24)] bg-white py-[30px] px-[30px] rounded-[24px]'>
                              {/* innercardsdiv2 */}
                              <div>
                                {/* cardsdivimg */}
                                <div className='w-[100%] flex justify-center pb-[27px]'>
                                  <img src={FrameII} className='w-[100px]' />
                                </div>
                                {/* cardsheader */}
                                  <div className='text-center pb-[27px] w-[100%]'>
                                    <h1 className='text-[#055140] text-[15.5px] sm:text-[19.5px] md:text-[22.5px] w-[100%]'> <b> What if losing your phone meant nothing? </b></h1>
                                  </div>

                                  {/* cardstext */}
                                  <div className='text-center text-[#055140] text-opacity-70 text-[20px]'>
                                  Imagine a world where your fingerprint replaces your wallet, and financial access transcends boundaries.
                                  </div>
                              </div>
                          </div>
                      </div>

                     </div>
             </div>

        </section>

           {/* motion numbers  div */}
        <section className=' w-[100%]'>
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
                        <div className=' text-[20px] sm:text-[30px] lg:text-[55px] font-[inter] text-[#2ff86d]'><b>360</b><b>M+</b></div>
                        <p className='font-[inter] text-white text-[14px]'>Underserved Population</p>
                    </div>

                   {/* 10+  */}
                    <div className='pl-[30px]'>
                        <div className='sm:text-[30px] lg:text-[55px] font-[inter] text-[#2ff86d]'><b>10</b><b>+</b></div>
                        <p className='font-[inter] text-white text-[14px]'>10 African Countries</p>
                    </div>

                       {/* 500 */}
                    <div className={`md:pb-[20px] lg:pb-[0px]  ${classes.textfive}`}>
                        <div className='sm:text-[30px] lg:text-[55px] font-[inter] text-[#2ff86d]'><b>500</b><b>M+</b></div>
                        <p className='font-[inter] text-white text-[14px]'>Potential Customers</p>
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

                <div className='w-[90%]'>
                     <div className='text-center mb-[40px]'>
                       <b>
                        <h1 className='text-[#043024] font-[inter] text-[34px]  sm:text-[44px] '>Why We’re Better</h1>
                         
                       </b>
                     </div>
                      {/* better cards container  */}
                      <div className='max-sm:flex max-sm:justify-center'>
                      <div className=' max-sm:w-[70%] max-sm:gap-y-[20px] grid lg:grid-cols-3 md:grid-cols-2 md:gap-y-[20px]'>

{/* card 1 */}
<div className={` w-[300px]  flex justify-center px-[0px] pt-[20px] pb-[1px]   ${classes.bettercards}`}>
 <div className='w-[220px]'>

    {/* card img */}
     <div className='flex justify-center pb-[30px]'> 
         <img src={Finger} className='w-[80px] h-[80px]' />
     </div>

     <div>
         <h1 className='font-[inter] text-[22px] text-[#043024] '><b> Biometric Security </b></h1>
     </div>

     <div className='font-[inter] text-[#043024] text-[17px] text-opacity-70 mb-[100px]'>
        <p>Your fingerprint is your only key, protected by advanced encryption.</p>
     </div>
 </div>
          
              
          </div>
           {/* card 2 */}
           <div className={` w-[300px] flex justify-center px-[0px] pt-[20px] pb-[1px]   ${classes.bettercards}`}>
           <div className='w-[245px]'>
          
              {/* card img */}
               <div className='flex justify-center pb-[30px]'> 
                   <img src={Like} className='w-[80px] h-[80px]' />
               </div>
          
               <div>
                   <h1 className='font-[inter] text-[22px] text-[#043024] '><b> Effortless Convenience </b></h1>
               </div>
          
               <div className='w-[235px] font-[inter] text-[#043024] text-[17px] text-opacity-70 mb-[100px]'>
                  <p>No cards, no phones—access your money anytime, anywhere.
                  </p>
               </div>
           </div>

    
          </div>
         {/* card3 */}
         <div className={` w-[300px] flex justify-center px-[0px] pt-[20px] pb-[1px]  ${classes.bettercards}`}>
         <div className='w-[245px]'>
        
            {/* card img */}
             <div className='flex justify-center pb-[30px]'> 
                 <img src={Naira} className='w-[80px] h-[80px]' />
             </div>
        
             <div>
                 <h1 className='font-[inter] text-[22px] text-[#043024] '><b> Affordable Banking Solutions </b></h1>
             </div>
        
             <div className='font-[inter] text-[#043024] text-[17px] text-opacity-70 mb-[100px]'>
                <p>
                 <span className='text-[#00EA48]'>Making money is hard, withdrawing it shouldn't be.</span> WePay offers transparent, low-cost transaction fees, making banking accessible and affordable for everyone.
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

         <section className='bg-[#DEFFF4] sm:h-[550px] mt-[65px] w-[100%]' >
          <div className='flex justify-center'>
            <div className='w-[90%]  sm:flex items-center md:gap-[135px] lg:gap-[235px] '>
                <div className='max-sm:hidden'>
                  
                  <img src={Link} className='max-sm:w-[200px] sm:w-[200px] md:w-[200px] lg:w-[300px]' />
                </div> 

                  {/* steps */}
                  <div>
                  <div className=" min-h-screen flex items-center justify-center p-6">
      <div className="max-w-lg">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Get started with WePay</h2>
        
        {/* Step 1 */}
        <div className="flex items-start">
          <div className="relative flex flex-col items-center">
            <div className="w-10 h-10 flex items-center justify-center rounded-full border-2 border-green-500 text-green-500 font-semibold">
              1
            </div>
            <div className="w-[2px] h-6 bg-green-400 "></div>
            <div className="w-[2px] h-6 bg-gray-400 "></div>
          </div>
          <div className="ml-4">
            <h3 className="text-lg font-semibold text-gray-900">Download the app</h3>
          </div>
        </div>

        {/* Step 2 */}
        <div className="flex items-start ">
          <div className="relative flex flex-col items-center">
            <div className="w-10 h-10 flex items-center justify-center rounded-full border-2 border-gray-500 text-gray-900 font-semibold">
              2
            </div>
            <div className="w-[2px] h-12 bg-gray-400"></div>
          </div>
          <div className="ml-4">
            <h3 className="text-lg font-semibold text-gray-900">Sign Up with Biometrics</h3>
            <p className="text-gray-500 text-sm">Your fingerprint is your password</p>
          </div>
        </div>

        {/* Step 3 */}
        <div className="flex items-start ">
          <div className="relative flex flex-col items-center">
            <div className="w-10 h-10 flex items-center justify-center rounded-full border-2 border-gray-500 text-gray-900 font-semibold">
              3
            </div>
          </div>
          <div className="ml-4">
            <h3 className="text-lg font-semibold text-gray-900">Fund Your Account</h3>
            <p className="text-gray-500 text-sm">Start secure and seamless banking today</p>
          </div>
        </div>
      </div>
    </div>

                  </div>
            </div>
          </div>
         </section>
           

           {/* Transform */}
           <section className='pt-[80px] min-hif-fit lg:min-h-screen bg-[linear-gradient(to_bottom,#ECFDF5,#FFFFFF)]'>
           <div className='w-[100%]  flex justify-center'>

            <div className='w-[90%] '>
                <div>
                   {/* heading */}
                   <div className='text-center flex justify-center text-[#093F2D] font-[inter] sm:text-[32px] md:text-[42px] lg:text-[52px] w-[100%] '>
                    <h1 className='w-[900px]'><b>Transform Your Financial Journey with WePay!</b></h1>
                   </div>

                   {/* grid template container */}
                   <div className='mt-[40px] grid sm:grid-cols-2 gap-y-[20px]'>
                      {/* grids 1 */}
                      <div className={`flex rounded-[16px] justify-center h-[209px] sm:w-[278px] md:w-[328px] lg:w-[478px] border border-gray bg-[white] ${classes.transformdiv}`}>
                       {/* gridinner */}
                       <div className='flex gap-[20px] items-center w-[358px]'>
                        {/* image */}
                        <div className='max-sm:max-w-[20%]'>
                          <img src={Individual} className=' sm:ml-[10px] sm:w-[60px]  lg:w-[80px] lg:h-[70px]' />

                        </div>

                        {/* text */}
                        <div>
                          <b className='text-[#093F2D] font-[inter] text-[16px]'>For Individuals</b>
                          <p className=' max-sm:w-[248px] max-lg:w-[208px] text-[#093F2D] font-[inter] text-[15px] text-opacity-70'>
                          Simplify payments and withdrawals with just a touch.
                          </p>
                        </div>
                       </div>

                      </div>

                     {/* grids 2 */}
                     <div className={`flex rounded-[16px] justify-center h-[209px] sm:w-[278px] md:w-[328px] lg:w-[478px] border border-gray bg-[white] ${classes.transformdiv}`}>
                       {/* gridinner */}
                       <div className='flex gap-[20px] items-center w-[358px]'>
                        {/* image */}
                        <div className='max-sm:max-w-[20%]'>
                          <img src={carbon} className='sm:ml-[10px] sm:w-[60px]  lg:w-[80px] lg:h-[70px]' />

                        </div>

                        {/* text */}
                        <div>
                          <b className='text-[#093F2D] font-[inter] text-[16px]'>For SMEs</b>
                          <p className=' max-sm:w-[248px] max-lg:w-[208px]  w-[258px] text-[#093F2D] font-[inter] text-[15px] text-opacity-70'>
                          Empower your business with affordable POS systems and seamless transactions.
                          </p>
                        </div>
                       </div>

                      </div>


                      {/* grids 3 */}
                      <div className={`flex rounded-[16px] justify-center h-[209px] sm:w-[278px] md:w-[328px] lg:w-[478px] border border-gray bg-[white] ${classes.transformdiv}`}>
                       {/* gridinner */}
                       <div className='flex gap-[20px] items-center w-[358px]'>
                        {/* image */}
                        <div className='max-sm:max-w-[20%]'>
                          <img src={Market} className='sm:ml-[10px] sm:w-[60px]  lg:w-[80px] lg:h-[70px]' />

                        </div>

                        {/* text */}
                        <div>
                          <b className='text-[#093F2D] font-[inter] text-[16px]'>For Marketplaces</b>
                          <p className='max-sm:w-[248px] max-lg:w-[208px] w-[258px] text-[#093F2D] font-[inter] text-[15px] text-opacity-70'>
                          Deliver fast, secure, touch-based payments to your customers effortlessly.

                          </p>
                        </div>
                       </div>

                      </div>

                      {/* grids 4 */}

                      <div className={`flex rounded-[16px] justify-center h-[209px] sm:w-[278px] md:w-[328px] lg:w-[478px] border border-gray bg-[white] ${classes.transformdiv}`}>
                       {/* gridinner */}
                       <div className='flex gap-[20px] items-center w-[358px]'>
                        {/* image */}
                        <div className='max-sm:max-w-[20%]'>
                          <img src={financial} className='sm:ml-[10px] sm:w-[60px]  lg:w-[80px] lg:h-[70px]' />

                        </div>

                        {/* text */}
                        <div>
                          <b className='text-[#093F2D] font-[inter] text-[16px]'>For Financial Institutions</b>
                          <p className='max-sm:w-[248px] max-lg:w-[208px] w-[258px] text-[#093F2D] font-[inter] text-[15px] text-opacity-70'>
                          Embrace cashless innovation and identity banking with biometric solutions.
                          </p>
                        </div>
                       </div>

                      </div>
                   </div>


                </div>

            </div>
           </div>

           </section>




           <section className='mt-[80px] w-[100%] bg-[#Defff4] h-[811px]'>
                  <div className='flex justify-center'>
                      <div className='w-[90%]'>
                      <div className="relative w-64 h-64">
        {/* Top border - shorter to create opening on right */}
        <div className="absolute top-0 left-0 w-48 h-4 bg-green-500"></div>
        
        {/* Right border - shorter to create opening on top */}
        <div className="absolute right-0 bottom-0 w-4 h-48 bg-green-500"></div>
        
        {/* Bottom border - full width */}
        <div className="absolute bottom-0 left-0 right-0 h-4 bg-green-500 rounded-b-md"></div>
        
        {/* Left border - with gap at bottom */}
        <div className="absolute top-0 left-0 h-48 w-4 bg-green-500"></div>
      </div>
                      
                      </div>

                  </div>

           </section>



           {/* About WePay */}
           <section className='bg-[#defff4] w-[100%] mt-[80px]'>
            <div className='flex justify-center'>

              <div className='max-w-[90%]'>
                 <div className='sm:flex justify-between mr-[50px] pt-[42px] pb-[50px] items-center '>
                  {/* flex1 */}
                    <div>
                       <div>
                        <h1 className='font-[inter] text-[#093F2D] text-[24px] sm:text-[34px] md:text-[64px]'><b>About WePay </b></h1>
                       </div>

                       <div className='sm:w-[268px] max-sm:w-[451px] max-md:w-[311px] md:w-[311px] lg:w-[491px] font-[inter] text-[17px] '>
                        <p className={`text-opacity-70 text-[black] ${classes.abouttxt}`}>WePay Mobile Solutions Limited is redefining finance in Africa through biometric authentication. Our robust infrastructure is built on strategic partnerships with leading fintech companies, banks, and local merchants across the continent, creating a network that empowers underbanked populations with secure, inclusive financial services. With WePay, users can conduct financial transactions and access their funds using only their fingerprints, eliminating the need for traditional cards or smartphones. This approach simplifies the payment process and empowers everyone, especially those in underbanked markets to participate confidently in the digital economy. At WePay, we’re taking fintech beyond mere digital banking and into identity banking. We're architects of financial inclusion. We build bridges where traditional banking creates walls.</p>
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
                    <div className="relative">
  {/* Background Image */}
  <img src={pos} className="z-10 left-[40px] relative w-[2500px] h-[450px]" alt="Background" />

  {/* Outer Circle */}
  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[302px] h-[302px] border-4 border-green-500 rounded-full flex justify-center items-center">
    
    {/* Middle Circle */}
    <div className="w-[212px] h-[212px] border-4 border-green-500 rounded-full flex justify-center items-center">
      
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
           <section className='mt-[80px]'>
           <div className="min-h-screen flex items-center justify-center bg-[#DEFFF4]">
      <div className="w-full max-w-3xl px-6 py-8">
        <h1 className="text-[34px] font-bold font-[inter] text-[#000000] text-center mb-4">Get In Touch with Us</h1>

        <p className="text-center mb-8 text-[black] text-[17px] font-[inter] text-opacity-70">
          Want to learn more about how WePay can support your business or personal financial needs? Share your details
          below, and we&apos;ll arrange a call-back from our team.
        </p>

        <form  className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">
                Fast name<span className="text-red-500">*</span>
              </label>
              <input
                id="firstName"
                name="firstName"
                type="text"
                className="w-full px-3 py-2 bg-white border border-gray-200 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
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
                className="w-full px-3 py-2 bg-white border border-gray-200 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
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
                className="w-full px-3 py-2 bg-white border border-gray-200 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
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
                className="w-full px-3 py-2 bg-white border border-gray-200 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
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
                className="h-4 w-4 text-green-500 focus:ring-green-500 border-gray-300 rounded"
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
           </section>
      </div>
        </div>
    )
}

export default Home