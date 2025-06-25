import {
  FaEnvelope,
  FaFacebookF,
  FaPhone,
  FaPinterestSquare,
  FaTwitter,
  FaVimeoV,
} from "react-icons/fa";
import FooterLogo from "../../assets/logo.svg";
import app_btn from "../../assets/app-btn-text.png";
import google_play from "../../assets/google-play-img.png";
import app_store from "../../assets/app-store-btn.png";
import payments from "../../assets/payments.png";
import { IoIosArrowForward } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";

const Footer = () => {
  return (
    <>
      <div className="flex w-[100%] flex-wrap items-center min-h-[50vh] py-[2%] px-[9%] flex-row ">
   
      <div className="flex flex-row flex-wrap justify-between w-[100%] items-center  ">
       
      <div className="flex flex-col flex-wrap content-center items-start max-w-[325px] gap-4">
          <div className="max-w-[15rem]">
            <img src={FooterLogo} alt="" />
          </div>
          <p className="text-textColor">
            CiyaShop is an enchanting and easy to use e-Commerce WP theme that
            allows you to sell your products in a dynamic way.
          </p>
          <p className="text-textColor">
            The theme is packed with everything you need to create a new
            website.
          </p>
          <ul className="flex flex-row flex-wrap justify-between items-start gap-[1rem]">
            <li className="border p-2 text-textColor hover:bg-[#04d39f] hover:text-white duration-300 ">
              <FaFacebookF />
            </li>
            <li className="border p-2 text-textColor hover:bg-[#04d39f] hover:text-white duration-300 ">
              <FaTwitter />
            </li>
            <li className="border p-2 text-textColor hover:bg-[#04d39f] hover:text-white duration-300 ">
              <FaVimeoV />
            </li>
            <li className="border p-2 text-textColor hover:bg-[#04d39f] hover:text-white duration-300 ">
              <FaPinterestSquare />
            </li>
          </ul>
        </div>

        <div>
          <div className="flex flex-col flex-wrap content-center justify-center items-start">
            <h1 className="font-[500] mb-[1rem]">Useful Links</h1>
            <ul className="flex flex-col flex-wrap gap-[1rem] content-center items-start">
           

              <li className="flex items-center text-textColor hover:text-[#04d39f] cursor-pointer">
                <IoIosArrowForward />
              <span>  Home</span>
              </li>
              <li className="flex items-center text-textColor hover:text-[#04d39f] cursor-pointer">
                <IoIosArrowForward />
                <span>About us</span>
              </li>
              <li className="flex items-center text-textColor hover:text-[#04d39f] cursor-pointer">
             
                <IoIosArrowForward /><span> Stores Locator</span>
              </li>
              <li className="flex items-center text-textColor hover:text-[#04d39f] cursor-pointer">
                <IoIosArrowForward />
                <span>Shop</span>
              </li>
              <li className="flex items-center text-textColor hover:text-[#04d39f] cursor-pointer">
                <IoIosArrowForward />
                <span>Contact Us</span>
              </li>
              <li className="flex items-center text-textColor hover:text-[#04d39f] cursor-pointer">
                <IoIosArrowForward /><span> Privacy Policy</span>
              </li>
              <li className="flex items-center text-textColor hover:text-[#04d39f] cursor-pointer">
                <IoIosArrowForward /><span> Terms & Conditions</span>
              </li>
            </ul>
          </div>
        </div>

        <div>
          <div className="flex flex-col flex-wrap content-center justify-center items-start">
            <h1 className="font-[500] mb-[1rem]">Information</h1>
            <ul className="flex flex-col flex-wrap gap-[1rem] content-center items-start">
              <li className="flex items-center text-textColor hover:text-[#04d39f] cursor-pointer">
                <IoIosArrowForward /> Look Book{" "}
              </li>
            
              <li className="flex items-center text-textColor hover:text-[#04d39f] cursor-pointer">
                {" "}
                <IoIosArrowForward /> Information
              </li>
              <li className="flex items-center text-textColor hover:text-[#04d39f] cursor-pointer">
                {" "}
                <IoIosArrowForward /> Instagram Wall{" "}
              </li>
              <li className="flex items-center text-textColor hover:text-[#04d39f] cursor-pointer">
                {" "}
                <IoIosArrowForward /> Typography
              </li>
              <li className="flex items-center text-textColor hover:text-[#04d39f] cursor-pointer">
                <IoIosArrowForward /> Parallax Presentation{" "}
              </li>
              <li className="flex items-center text-textColor hover:text-[#04d39f] cursor-pointer">
                <IoIosArrowForward /> Modern Process
              </li>
              <li className="flex items-center text-textColor hover:text-[#04d39f] cursor-pointer">
                {" "}
                <IoIosArrowForward /> Warranty and Services{" "}
              </li>
            </ul>
          </div>
        </div>

        <div>
          <div className=" max-w-[350px] flex flex-col gap-4 flex-wrap content-center justify-center items-start">
            <h1 className="font-[500] mb-[1rem]">Contact Info</h1>
            <ul className="flex flex-col flex-wrap gap-[1rem] content-center items-start">
              <li className="flex items-center gap-4 text-textColor">
                <FaLocationDot className="text-[#04d39f]" />
                <p>
                  1635 Franklin Street Montgomery, Near Sherwood Mall. AL 36104
                </p>
              </li>
              <li className="flex items-center gap-4 text-textColor">
                <FaEnvelope className="text-[#04d39f]" />
                <p>support@ciyashop.com</p>
              </li>
              <li className="flex items-center gap-4 text-textColor">
                <FaPhone className="text-[#04d39f]" /> <p>126-632-2345</p>
              </li>
            </ul>
            <h1>Newsletter</h1>
            <input type="text" placeholder="Enter your email" />
          </div>
        </div>

      </div>
{/* 
    width: 100%;
    display: flex
;
    justify-content: space-between;
*/}
        <div className="flex w-[100%] gap-4 flex-wrap flex-row  justify-between items-center">
        <div className="flex flex-wrap">
          <p className="text-[13px] py-[2rem] ">
            CiyaShop Mobile app is Available now. Download it now on your
            favorite device and indulge in a seamless shopping experience.
          </p>
          <img src={app_btn} alt="" />
        </div>
        <div>
          <img src={google_play} alt="" />
        </div>
        <div>
          <img src={app_store} alt="" />
        </div>
      </div>

     
      </div>
 
      <div className="bg-[#f5f5f5] p-[2rem] flex-row flex-wrap flex justify-between items-center">
        {/* 
 
 
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
        */}
        <p>© Copyright 2025 OnVeggy All Rights Reserved.</p>
        <img src={payments} alt="" />
      </div>
    </>
  );
};

export default Footer;
