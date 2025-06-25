import "./css.css" 
 
const FilterBySize = () => {

 
  return (
    <div className="flex w-full h-auto gap-4 ">
<div
  className="max-h-[300px]  overflow-y-scroll p-3 rounded w-72 scrollbar-container"
>
  {[...Array(20)].map((_, i) => (
    <div
      key={i}
      className="flex items-center justify-between gap-3 px-3 py-2 mb-2 border-gray-400 rounded cursor-pointer select-none hover:text-[#04d39f]"
    >
     <div className="flex flex-wrap gap-2">
       <input type="checkbox" className="bg-black hover:bg-[#04d39f] border-0"  />
      <span>Size{i + 1}</span>
     </div>
      <span>{i + 1}</span>
    </div>
  ))}
</div>




    
    </div>
    )
};

export default FilterBySize;
 