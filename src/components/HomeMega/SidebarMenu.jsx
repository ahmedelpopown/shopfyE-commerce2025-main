 import data from "../../ProductCard";
import {   ChevronRight } from "lucide-react";
import { GiHamburgerMenu } from "react-icons/gi";

const SidebarMenu = () => {
  return (
    <div className="w-[100%] h-full bg-white text-black px-4 pt-3">
      <h2 className="text-xl font-bold flex items-center gap-4 bg-customTeal text-white p-4">
        <GiHamburgerMenu /> Categories
      </h2>
      <ul className="border">
        {data.Categories.map(({ id, title, items }) => (
          <li
            key={id}
            className="relative group border-b p-2 hover:bg-[#eaeaea] hover:text-customTeal duration-300"
          >
            <span className="flex justify-between items-center w-full px-3 py-2">
              {title}
              {items.length > 0 && <ChevronRight size={20} />}
            </span>

            {items.length > 0 && (
              <ul className="absolute left-full top-0 z-10 w-48 bg-white shadow-md text-textColor hidden group-hover:block">
                {items.map((subItem, index) => (
                  <li key={subItem.id || index} className="relative group">
                    <span className="flex justify-between items-center w-full px-3 py-2 hover:bg-[#eaeaea] hover:text-customTeal duration-300">
                      {subItem.title || subItem}
                      {subItem.items?.length > 0 && <ChevronRight size={16} />}
                    </span>

                    {subItem.items?.length > 0 ? (
                      <>
                         
                        <ul className="absolute left-full  top-0 z-20 w-64 bg-gray-600 rounded shadow-md text-gray-400 hidden group-hover:block">
                          {subItem.items.map((item, idx) => (
                            <li
                              key={idx}
                              className="py-1 px-3 hover:text-white"
                            >
                              {item}
                            </li>
                          ))}
                        </ul>
                         
                      </>
                    ) : (
                      <></>
                    )}
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SidebarMenu;
