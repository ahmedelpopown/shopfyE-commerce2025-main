 import img2 from "../../../assets/8au3ligq.png"
const LandingMd = () => {
  return (
    <div className="relative md:gap-5 px-[10px] max-w-full w-full justify-around md:px-[4rem] flex">
    <div className="mdS:min-w-[10rem] mdS:max-w-[26rem] mdS:text-[28px] mdS:py-2 mdS:tracking-[5px] mdS:flex-col mdS:flex mdS:items-start min-w-fit flex flex-col flex-wrap items-start justify-center">
      <span className="flex items-center justify-start flex-wrap w-fit p-[6px] text-xs bg-landingSel text-white">
        <b className="flex text-[27px]">20</b>
        <p className="flex flex-col text-[9px]">
          <b>%</b> <b>OFF</b>
        </p>
      </span>
      <h1 className="mdS:text-[10vw] text-[7vw]">
        <b>Spring</b>
      </h1>
      <b className="text-[16px] mb-1 md777:text-[36px]">
        season festival
      </b>
      <span className="mdS:tracking-[4px] bg-landingSpan">
        <b className="text-[10px]">CATALOGUE 2018</b>
      </span>
    </div>
    <div className="animate relative">
      <div className="bg-landingService absolute rounded-full left-[2rem] h-[10rem] w-[10rem] sm425:h-[15rem] sm425:w-[15rem] sm425:left-[6rem] md:h-[15rem] md:w-[15rem] mdS:w-[30rem] mdS:h-[30em]" id="green-box-2"></div>
      <div className="relative block min-w-[10rem] max-w-[26rem]">
        <img src={img2} className="w-[19rem]" alt="Product" />
      </div>
    </div>
    <div className="mdS:text-[28px] z-1 mdS:font-semibold mdS:min-w-[10rem] mdS:max-w-[16rem] mdS:min-h-[10rem] mdS:max-h-[17rem] flex text-[13px] min-w-fit font-semibold flex-col flex-wrap items-end justify-center">
      <span className="text-right">Limited</span>
      <span className="text-right">Time</span>
      <span>Offer</span>
      <span className="underline text-[7px] pb-[10px] tracking-[-1px]">
        GET THE OFFER
      </span>
    </div>
  </div>
  )
}

export default LandingMd