import img1 from "../../assets/season-img1.jpg"
import img2 from "../../assets/season-img2.jpg"
import img3 from "../../assets/banner-video-bg.png"
const SectionTow = () => {
  return (
    <section className="flex items-center justify-evenly flex-wrap flex-row p-3">
 
        
 
      <div className="flex flex-col flex-wrap  items-center mb-[1rem]  md:m-0 md:items-end text-end content-center ">
        <h1 className="mb-2 text-[3rem]  ">
          {" "}
          <b>
          End of <br />
          Season
          </b>
          
        </h1>
        <p className="text-textColor mb-2">
          Avail massive discounts and get exciting <br />
          offers with our shopping across all new <br />
          arrival categories <br />
        </p>
        <button className="btn btn-dark rounded-none">Shop Now</button>
      </div>

      <div className="grid items-center  md:max-w-[60%] max-w-[100%] grid-cols-[repeat(auto-fit,_minmax(15rem,_1fr))] gap-4">
        <div className="max-w-[20rem] relative">

          <img src={img1} alt="" className="w-[100%]" />

          <p className="absolute left-[1rem] bottom-[2rem] text-white text-xl ">- Women&apos;s</p>


        </div>

        <div className="max-w-[20rem] relative">
          <img src={img2} alt="" className="w-[100%]" />
          <p className="absolute left-[1rem] bottom-[2rem] text-black text-xl">- Kid&apos;s</p>

        </div>
        <div className="max-w-[20rem] relative">
          <img src={img3} alt="" className="w-[100%]" />
          <p className="absolute left-[1rem] bottom-[2rem] text-black text-xl">- Men&apos;s</p>

        </div>
      </div>
     
     
    </section>
  );
};

export default SectionTow;
