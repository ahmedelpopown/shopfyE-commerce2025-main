   import img1 from "../../assets/ShopLandSwiper/brand-lacoste-1-200x56.png"
   import img2 from "../../assets/ShopLandSwiper/brand-lee-2.png"
   import img3 from "../../assets/ShopLandSwiper/brand-mango-1-200x56.png"
   import img4 from "../../assets/ShopLandSwiper/brand-mexx-2.png"
   import img5 from "../../assets/ShopLandSwiper/brand-puma-1.png"
   import img6 from "../../assets/ShopLandSwiper/brand-zara-1.png"
   const Brand = [
  { id: 1, count: '2',img:img1 },
  { id: 2, count: '5',img:img2 },
  { id: 3, count: '7' ,img:img3},
  { id: 4, count: '3',img:img4 },
  { id: 5, count: '4',img:img5 },
  { id: 6, count: '9',img:img6 },
];
 const ProductBrand = () => {
   return (
     <div className="flex flex-col flex-wrap items-start justify-center gap-2 w-72">
      <h1 className="text-xl font-bold uppercase">Product Brand</h1>
      <div className="flex flex-row flex-wrap items-center w-full gap-2">
{Brand.map((item)=>(
 <>
 <div className="flex flex-row flex-wrap items-center justify-between w-full p-3 border">
<img src={item.img} className="w-[4rem]" alt="" />
<h3>({item.count})</h3>
</div>
 </>
))}
      </div>
     </div>
   )
 }
 
 export default ProductBrand