  import { FaFacebookF, FaPhone, FaPinterestSquare, FaTwitter, FaVimeoV } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import {  logout } from "@/store/authSlice";
import { useDispatch, useSelector } from "react-redux";

 
const Setting = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();;
    
  const { user } = useSelector((state) => state.auth);

   const handleLogout = () => {
    dispatch(logout());
    navigate("/login");
  };
  
    
  return ( 
    <div className="flex bg-white-900 px-5 h-fit border-b-[1px] border-gray-300 justify-between">
<div className="items-center hidden gap-2 lg:flex">
<div className="items-center hidden py-1 mt-2 lg:flex w-fit">
     
     <select className="px-1 py-1 text-sm transition-colors duration-300 rounded-md cursor-pointer hover:text-customTeal">
       <option value="usd">USD ($)</option>
       <option value="eur">EUR</option>
       <option value="gbp">GBP</option>
       <option value="sar">SAR</option>
       <option value="egp">EGP</option>
     </select>
   </div>

   <div className="mt-2 flex items-center text-[13px] space-x-1 gap-2 border-gray-400 hover:text-customTeal duration-300 cursor-pointer">
     <FaPhone />
     <p>026-632-2345</p>
   </div>
</div>

      <div className="flex lg:justify-end items-center gap-4 w-[100%] md:w-fit xs:justify-center">
        {/* روابط السوشيال ميديا */}
        <div className="flex gap-2 lg justify-center lg:justify-end md:m-0 m-[1rem]">
          <span className="text-[#323232] text-[12px] hover:text-customTeal transition-colors duration-300 cursor-pointer flex items-center space-x-2">
       <FaFacebookF />
          </span>
          <span className="text-[#323232] text-[12px] hover:text-customTeal transition-colors duration-300 cursor-pointer flex items-center space-x-2">
        <FaTwitter />
          </span>
          <span className="text-[#323232] text-[12px] hover:text-customTeal transition-colors duration-300 cursor-pointer flex items-center space-x-2">
       <FaVimeoV />
          </span>
          <span className="text-[#323232] text-[12px] hover:text-customTeal transition-colors duration-300 cursor-pointer flex items-center space-x-2">
         <FaPinterestSquare />
          </span>
          {/* إضافة المزيد من الأيقونات هنا */}
        </div>

     

{
!user ? <>   {/* تسجيل الدخول */}
        <div className="items-center hidden gap-1 duration-300 cursor-pointer w-fit hover:text-customTeal lg:flex">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="15"
            height="15"
            fill="currentColor"
            fontSize={"0.875rem"}
          >
            <path d="M4 22C4 17.5817 7.58172 14 12 14C16.4183 14 20 17.5817 20 22H18C18 18.6863 15.3137 16 12 16C8.68629 16 6 18.6863 6 22H4ZM12 13C8.685 13 6 10.315 6 7C6 3.685 8.685 1 12 1C15.315 1 18 3.685 18 7C18 10.315 15.315 13 12 13ZM12 11C14.21 11 16 9.21 16 7C16 4.79 14.21 3 12 3C9.79 3 8 4.79 8 7C8 9.21 9.79 11 12 11Z"></path>
          </svg>
          <h4 className="text-sm font-extralight">
<Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
         
          </h4>
        </div></> :<>
    <div className="space-y-4 text-center">
              <h2 className="text-xl font-semibold">مرحباً، {user.name} 👋</h2>
              <button
              onClick={handleLogout}
              className="px-4 py-2 text-white bg-red-600 rounded hover:bg-red-700"
            >
              تسجيل الخروج
            </button>
          </div> 
</> 

}
        
      </div>
    </div>
        
  )
}

export default Setting