import { useParams } from "react-router-dom";
import ProductCard from "../../ProductCard";
import Layout from "../../components/Layout/Layout";
import { useState } from "react";
import { FaStar } from "react-icons/fa";
import InteractiveRating from "../../components/shop/InteractiveRating";
 import Related from "../../components/shop/Related";

const SingleProduct = () => {
  const [quantity, setQuantity] = useState(1);
    const [activeTab, setActiveTab] = useState('description');

  const { productId } = useParams();

  const product = ProductCard.ProductCard.find(
    (item) => item.id === parseInt(productId)
  );
    const thumbnails = [product.imgCard, product.imgCard2];
  const [mainImage, setMainImage] = useState(thumbnails[0]);
  const [animate, setAnimate] = useState(false);

  const handleImageClick = (img) => {
    if (img !== mainImage) {
      setAnimate(true);
      setTimeout(() => {
        setMainImage(img);
        setAnimate(false);
      }, 300); // مدة الحركة
    }
  };
  

  if (!product) return <p className="text-red-500">المنتج غير موجود</p>;

  // الصور اللي عندك


  const handleIncrease = () => setQuantity((prev) => prev + 1);
  const handleDecrease = () => {
    if (quantity > 1) setQuantity((prev) => prev - 1);
  };

  return (
    <Layout>
      <section className="w-full px-[2%] py-[2%]">
        <div className="flex flex-row flex-wrap items-start justify-center py-[3%]">
          
          <div className="w-[50%]  flex flex-row flex-wrap justify-center items-start  ">
            
            
            <div className="flex flex-col justify-center flex-wrap w-[20%] items-center">
             
              <div className="w-[7rem] h-[10rem]">
                <img src={product.imgCard} alt="" className="w-[100%]" />
              </div>
              {thumbnails.map((img,index)=>(
                 <div className="w-[7rem] h-[10rem] cursor-pointer"     onClick={() => handleImageClick(img)}   key={index}>
                <img src={img}       alt={`thumb-${index}`} className="w-[100%] hover:scale-105 transition duration-300" />
              </div>
              ))}

             

              {/* <div className="w-[7rem] h-[10rem]">
                <img src={product.imgCard} alt="" className="w-[100%]" />
              </div>
              <div className="w-[7rem] h-[10rem]">
                <img src={product.imgCard} alt="" className="w-[100%]" />
              </div> */}
            </div>
            <img    src={mainImage} alt="" className="w-[68%]" />
          </div>
          <div className="w-[50%] flex flex-wrap flex-col items-start justify-start gap-4">
            <div className="flex flex-col flex-wrap items-start justify-start gap-4 ">
              <h1 className="text-sm ">
                <span className="text-gray-400 ">
                  {" "}
                  Home/ Products/ Clothing Blazers/
                </span>{" "}
                <span className="text-black">
                  WD·NY Black – Men’s Pinstripe Seer Sucker Vest
                </span>
              </h1>

              <h1 className="text-xl font-semibold">{product.title}</h1>
              <div className="flex items-center gap-1 text-lg text-yellow-400">
                {"★".repeat(4)}
                {"☆".repeat(1)}
              </div>
              <h1 className="text-2xl font-semibold text-[#04d39f]">
                {product.price}
              </h1>
              <p className="text-sm text-textColor">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi,
                ratione. Non atque quidem a nam consequuntur. Sequi eos delectus
                enim.
              </p>
              <h1>size: {product.sizes}</h1>

              <div className="flex flex-wrap items-center gap-4 flew-row">
                <div className="flex items-center overflow-hidden border border-gray-300 rounded w-max">
                  {" "}
                  <button
                    className="px-3 py-1 text-lg font-bold text-gray-700 hover:bg-gray-100"
                    onClick={handleDecrease}
                  >
                    -
                  </button>
                  <input
                    type="number"
                    className="w-12 text-center border-gray-300 outline-none border-x"
                    value={quantity}
                    min={1}
                    readOnly
                  />
                  <button
                    className="px-3 py-1 text-lg font-bold text-gray-700 hover:bg-gray-100"
                    onClick={handleIncrease}
                  >
                    +
                  </button>
                </div>
                <div>
                  <button className="btn btn-success">add to cart</button>
                </div>
              </div>

              <div className="flex items-center gap-4 ">
                <h2>add to wishlist</h2>
                <h2>compare</h2>
              </div>
            </div>
            <hr className="w-full border-b-4 border-gray-700" />
            <div className="flex flex-col flex-wrap items-start justify-start gap-2">
              <h1 className="font-bold ">
                sku:{" "}
                <span className="font-semibold text-textColor ">12356 </span>
              </h1>
              <h1 className="font-bold ">
                categories:{" "}
                <span className="font-semibold text-textColor ">
                  {product.category}{" "}
                </span>
              </h1>
              <h1 className="font-bold ">
                tag:{" "}
                <span className="font-semibold text-textColor ">.... </span>
              </h1>
            </div>
            <hr className="w-full border-b-4 border-gray-700" />

            <h1 className="text-customTeal">share: F T In p</h1>
            <hr className="w-full border-b-4 border-gray-700" />
          </div>
        </div>
<div className="flex flex-col flex-wrap items-center justify-center w-full">
          <div className="relative flex justify-center w-full mb-4 space-x-2 px-[2%]">
        <button
          onClick={() => setActiveTab('description')}
          className={`px-4 py-2   border-x border-t border-b  relative z-20  font-semibold transition duration-500 ${
            activeTab === 'description' ? 'border-b  border-t-4 border-t-customTeal  border-b-white rounded-[1px] text-customTeal' : 'bg-white text-black'
          }`}
        >
          Description
        </button>
        <button
          onClick={() => setActiveTab('reviews')}
          className={`px-4 py-2  relative z-20   border-x border-t border-b  font-semibold transition duration-500 ${
            activeTab === 'reviews' ? 'border-b  border-t-4 border-t-customTeal  border-b-white rounded-[1px] text-customTeal' : 'bg-white text-black'
          }`}
        >
          Reviews
        </button>
        <button
          onClick={() => setActiveTab('additional')}
          className={`px-4 py-2   border-x border-t border-b relative z-20  font-semibold transition duration-500 ${
            activeTab === 'additional' ?' border-t-4 border-t-customTeal border-b border-b-white rounded-[1px]  text-customTeal  ' : 'bg-white text-black'
          }`}
        >
          Additional Info
        </button>
{
 <div className="absolute bottom-0 w-full border-b "> {" "}</div>
}
      </div>

      {/* المحتوى حسب التاب */}
      <div className="w-[80%] ">
        {activeTab === 'description' && (
       
      <div className="flex flex-col flex-wrap items-start w-full gap-2">
          <p className="text-sm text-textColor text-start">Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, sapiente repellendus! Distinctio maxime ipsa et sit aliquam quas, accusamus totam.</p>
    <ol className="list-disc">
            <li className="text-textColor"><span className="font-semibold text-textColor">Sizing</span>: Junior</li>
            <li className="text-textColor"><span className="font-semibold text-textColor">Material</span>: 100.0% Rayon</li>
            <li className="text-textColor"><span className="font-semibold text-textColor">Garment Length</span>: Mini</li>
            <li className="text-textColor"><span className="font-semibold text-textColor">Features</span>: No pocket, Sleeveless, Behind the neck button</li>
            <li className="text-textColor"><span className="font-semibold text-textColor">Neckline</span>: Crew</li>
            <li className="text-textColor"><span className="font-semibold text-textColor">Care and Cleaning</span>: Machine wash & Tumble dry</li>
          </ol>
      </div>
    
        )}
        {activeTab === 'reviews' && (
           <div className="flex flex-row flex-wrap items-center justify-between w-full">
       <div className="flex flex-col flex-wrap gap-2 text-sm">
             <h1>Reviews</h1>
            <h1 className="text-textColor">there are no reviews</h1>
       </div>
          <div className="w-[40%] flex flex-wrap flex-col  items-start gap-4">
              <div className="flex flex-col flex-wrap items-start w-full gap-4 text-sm font-medium uppercase">
              <h1>be the first to review Product name</h1>
    <span className="flex flex-row flex-wrap gap-4">
                <h1 className="text-textColor">your rating </h1>
        <InteractiveRating onRate={(value) => console.log("Rating selected:", value)}  />

    </span>
            </div>
           <div className="flex flex-col flex-wrap items-start w-full gap-4">
             <h1>your review * </h1>
            <textarea name=""  rows={4} className="w-full border " id=""></textarea>
            <button className="border-none rounded-sm bg-customTeal btn btn-success">submit</button>
           </div>
          </div>
           </div>
        )}
        {activeTab === 'additional' && (
          <p>معلومات إضافية زي المقاس، اللون، الوزن، الخ...</p>
        )}
      </div>
</div>
     
          <Related/>
   
      </section>
    </Layout>
  );
};

export default SingleProduct;
