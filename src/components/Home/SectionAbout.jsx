import img from "../../assets/cardImage/about-img.png"
const SectionAbout = () => {
  return (
    <div className="min-h-[50vh]  flex flex-wrap px-[2%] md:px-[9%] py-[2%] md:flex-row-reverse  flex-col   content-center justify-center items-center">
  <div className=" w-[100%] md:w-[50%] min-h-[100%]">
        <img src={img} alt="" />
      </div>
      <div className="bg-white w-[100%] md:w-[50%] min-h-full flex flex-col flex-wrap content-center gap-[1rem] justify-center items-start text-textColor">
     
        <span>Know more</span>
        <h5 className="text-black">About CiyaShop</h5>

        <p>
          We are CiyaShop ipsum dolor sit amet, consectetur adipisicing elit,
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
          enim ad minim veni quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
        <p>
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form, by injected
          humour.
        </p>
        <span className="underline text-black">
            Read More...
        </span>
      </div>
     
    </div>
  );
};

export default SectionAbout;
