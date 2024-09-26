import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";

function Footer() {
  return (
    <div
      className=" w-screen flex flex-col justify-center items-center pb-4 md:px-0 px-10 bg-[linear-gradient(0deg,#250101,#7A0000)] 
     lg:rounded-tl-[50px] lg:rounded-tr-[50px] 
                md:rounded-tl-[40px] md:rounded-tr-[40px] 
                rounded-tl-[30px] rounded-tr-[30px] "
    >
      <div className="icon lg:w-[80px] md:w-[70px] w-[60px]  lg:h-[80px] md:h-[70px] h-[60px] rounded-full bg-[#400101] mt-4 flex items-center justify-center relative group hover:cursor-pointer md:hover:w-[320px] sm:hover:w-[220px] hover:w-[200px]  duration-500">
        <img
          className="absolute inset-0 w-full h-full object-cover transition-opacity duration-800 ease-in opacity-100 group-hover:opacity-0"
          src="ElogoElicit.png"
          alt="Icon"
        />
        <div className="absolute flex md:space-x-20 space-x-10 opacity-0 group-hover:opacity-100 transition-all duration-300 ease-in-out">
          <FaInstagram className="text-white lg:text-[35px] sm:text-[30px] text-[25px] relative left-[120px] group-hover:left-0 transition-all duration-300 ease-in-out" />
          <FaFacebookF className="text-white lg:text-[35px] sm:text-[30px] text-[25px] relative" />
          <FaLinkedinIn className="text-white lg:text-[35px] sm:text-[30px] text-[25px] relative right-[120px] group-hover:right-0 transition-all duration-300 ease-in-out" />
        </div>
      </div>
      <div className="flex flex-col items-center ">
        <div className="flex flex-col items-center gap-4 md:flex-row md:mt-3 mt-5 md:justify-between">
          <img
            src="logoElicit.png"
            alt="Logo"
            className="w-[150px] sm:w-[200px] h-auto"
          />
          <span className="text-white text-[20px] sm:text-[24px] font-bold text-center relative md:top-0.5">
            Association For Computing Machinery
          </span>
        </div>
        <div className="h-[2px] bg-white min-[860px]:w-[773px] md:w-[100%] min-[540px]:w-[140%] min-[465px]:w-[120%] w-[100%] mt-2"></div>
        <div className="text-center mt-2">
          <p className="text-white text-[16px] sm:text-[20px] font-semibold">
            Developed by Elicit Web Development Team
          </p>
          <p className="text-white text-[12px] sm:text-[16px] font-thin">
            © Elicit 2024. All Rights Reserved
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
