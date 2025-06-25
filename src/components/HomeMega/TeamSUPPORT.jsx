import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import img1 from "../../assets/HomeCategory/HomeMega/TeamSupport/02-4-150x150.jpg";
import img2 from "../../assets/HomeCategory/HomeMega/TeamSupport/03-150x150.jpg";
import img3 from "../../assets/HomeCategory/HomeMega/TeamSupport/04-2-150x150.jpg";
import img4 from "../../assets/HomeCategory/HomeMega/TeamSupport/05-1-150x150.jpg";
const TeamSupport = () => {
  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={1}
      onSlideChange={() => console.log("تغيير الشريحة")}
      onSwiper={(swiper) => console.log(swiper)}
      className="mySwiper w-[20rem]"
    >
      <SwiperSlide >
        <div className="flex flex-col flex-wrap items-center justify-center w-72">
          <img src={img4} alt=""  className="rounded-full "/>
<div className="flex flex-row flex-wrap items-center justify-center gap-2">
<span className="text-customTeal">- Sara Lisbon</span>|<span>CEO</span>

</div>
          <p className="text-textColor text-[14px] w-[100%] text-center">
            Excellent Customer support! These guys reply within minutes
            sometimes and really help you with when you need them. The theme
            itself is very extended as well. Happy with my purchase!{" "}
          </p>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        {" "}
        <div className="">
          <img src={img1} alt="" />
          <span>- Paul Flavius</span>|<span>Marketing</span>
          <p>
            I had a few things I needed help with on this theme... Their
            customer service was amazing and helped me out many times. One of
            the complete themes with different requirements.
          </p>
        </div>
      </SwiperSlide>

      <SwiperSlide>
        {" "}
        <div className="">
          <img src={img3} alt="" />
          <span> - Felica Queen</span>|<span>CEO</span>
          <p>
            The resulting page looks very well. It was very easy to change
            colors and fill with my info. Since is well based in Bootstrap 4 it
            is very easy to make changes and still dont lose the style
          </p>
        </div>
      </SwiperSlide>

      <SwiperSlide>
        {" "}
        <div className="">
          <img src={img2} alt="" />
          <span>- John Doe </span>|<span>Support </span>
          <p>
            One of the most complete themes here. Thanks a lot for such great
            features, pages, shortcodes and home variations. And the best of
            all, great introductions prices.
          </p>
        </div>
      </SwiperSlide>

      {/* أضف المزيد من الشرائح حسب الحاجة */}
    </Swiper>
  );
};

export default TeamSupport;
