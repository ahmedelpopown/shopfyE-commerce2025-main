import img from  "../../assets/cardImage/deal-bg.png" 

const SectionFive = () => {
  return (
<div className="w-full min-h-[50vh] sm:min-h-[70vh] lg:h-[90vh] py-[5%]">
  <div
    style={{ backgroundImage: `url(${img})` }}
    className="w-full h-full bg-center bg-cover bg-no-repeat flex justify-center items-center"
  >
    <div className="flex flex-col gap-4 justify-center items-center text-center px-4">
      
      <span className="bg-[#04d39f] text-[3vw] sm:text-[1.2rem] font-medium px-4 py-3 text-white">
        50% off
      </span>

      <h1 className="font-medium tracking-widest text-[7vw] sm:text-[3rem]">
        Deal of The Week
      </h1>

      <span className="text-[2.5vw] sm:text-[1rem] font-bold bg-black text-white px-4 py-2 shadow-lg">
        This offer has expired!
      </span>

      <button className="bg-black text-white px-6 py-3 text-[4vw] sm:text-[1rem] rounded-none">
        Shop Now
      </button>

    </div>
  </div>
</div>

  )
}

export default SectionFive