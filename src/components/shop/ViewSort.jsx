import useGridView from "../../context/useGridView";

import { PiListThin } from "react-icons/pi";
import { PiGridFourFill } from "react-icons/pi";
import { TfiLayoutGrid3Alt } from "react-icons/tfi";
import { TfiLayoutGrid4Alt } from "react-icons/tfi";

const ViewSort = () => {
  const { viewMode, setViewMode } = useGridView();
 
 

const modes= [
  {id:1,name:"xl",icon: <TfiLayoutGrid4Alt />},
  {id:2,name:"lg",icon: <TfiLayoutGrid3Alt />},
  {id:3,name:"md",icon: <PiGridFourFill />},
  {id:4,name:"sm",icon: <PiListThin />},
]
  
  return (
    <div className="flex flex-row items-center justify-between  w-[80%] gap-4 mb-6 lg:flex-row">
      {/* Showing Results */}
      <p className="hidden text-xs text-gray-600 lg:flex">
        Showing 1–12 of 99 results
      </p>

      {/* Sort and View Controls */}
      <div className="flex flex-col justify-between w-full gap-4 md777:flex-row md777:items-center lg:w-auto">
        {/* Show options (text only) */}
        <p className="hidden text-xs text-gray-600 md:block">
          Show: 9 / 12 / 15
        </p>

        {/* View buttons */}
        <div className="hidden lg:flex text-[3vh]">
          {modes.map((mode) => (
            <button
              key={mode.id}
              onClick={() => setViewMode(mode.name)}
              className={`px-3 py-2  rounded ${
                viewMode === mode.name ? "text-[#04d39f]   " : "bg-white"
              }`}
            >
              {mode.icon}
            </button>
          ))}
        </div>

        {/* Sorting Dropdown */}
        <div className="   w-[260px]  ">
          <select className="w-full border rounded outline-none focus:ring-0 focus:outline-none">
            <option value="">Default Sorting</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default ViewSort;
