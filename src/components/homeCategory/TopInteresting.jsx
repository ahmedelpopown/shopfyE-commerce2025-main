import Card from "../../pages/Card"
import data from "../../ProductCard"

 
const TopInteresting = () => {
  
  return (
    <div   className="grid grid-cols-[repeat(auto-fill, minmax(16rem, 1fr))] justify-center items-center w-[85%] md:grid-cols-2 lg:grid-cols-4 gap-8">
      
      {data.ProductCard?.map((item, index) => (
  
  <Card key={index} item={item} />
 

))}
 
  </div>
  )
}

export default TopInteresting
