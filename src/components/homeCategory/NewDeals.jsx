 
import News from "../../assets/HomeCategory/NewDeals/banner2-1-1.jpg"
import Deals from "../../assets/HomeCategory/NewDeals/banner2-2-1.jpg"
const NewDeals = () => {
  return (
<>
<div className="w-[80%] grid grid-cols-1 md:grid-cols-2 gap-4">
  {/* العنصر الأول */}
  <div className="relative h-64 md:h-80 overflow-hidden group">
    <img
      src={News}
      alt="image"
      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
    />
    <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
      <h2 className="text-2xl font-thin bg-white text-textBg px-2 py-1">New Collection</h2>
      <p className="text-lg">Get Ready for Summer 2018</p>
    </div>
  </div>

  {/* العنصر الثاني */}
  <div className="relative h-64 md:h-80 overflow-hidden group">
    <img
      src={Deals}
      alt="image"
      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
    />
    <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
      <h2 className="text-2xl font-bold">Title</h2>
      <p className="text-lg">#123</p>
    </div>
  </div>
</div>

</>
  )
}

export default NewDeals