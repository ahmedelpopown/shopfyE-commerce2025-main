  import { IoIosSend } from "react-icons/io";
import img from "../../assets/cardImage/subscribe-bg.jpg"
 
 const SectionSex = () => {
 

  return (
<div className="flex items-center justify-center">
  <div
    style={{ backgroundImage: `url(${img})` }}
    className="lg:w-[85%] text-[50px] bg-center h-[50vh] w-[100%] bg-cover lg:bg-contain bg-no-repeat flex px-1 md:px-[3rem] md:py-[4rem] justify-center items-center"
  >
    <div className="flex flex-col md:text-[1.5em]  gap-4 justify-center items-center text-center px-4">
      <h1 className="  font-[700]  text-[0.3em]  md:text-[0.4em] sm:text-[0.4em]">
        Subscribe today and get 25% off on <br /> your first order!
      </h1>

       
      <div className="  w-[100%] h-[3.5rem] text-[0.6em] flex items-center relative">
        <input
          type="text"
          placeholder="Enter your email"
          className="w-[100%] h-full px-4 pr-[4rem] border text-[0.4em] border-gray-300 rounded-md focus:outline-none"
        />
        <button className="absolute right-0  text-[0.4em]    text-black  px-5 py-2 flex items-center justify-center rounded-r-md">
    <IoIosSend />     SubScribe
        </button>
       </div>

     
    </div>
  </div>
</div>
  )
}

export default SectionSex