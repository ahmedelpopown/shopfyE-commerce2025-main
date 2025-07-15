 
import { Link } from "react-router-dom";
import { links } from "../MyLinks/MyLinks";
import { useState } from "react";
 const NavLinks = () => {
  const [heading, setHeading] = useState("");
  // eslint-disable-next-line no-unused-vars
  const [subHeading, setSubHeading] = useState("");
 
  
  return (
<>
  {links.map((link, index) => (
    <div key={index}>
<div className="px-2 text-[15px] text-[#323232] leading-[22px] hover:text-[#04d39f] duration-300 font-[400] text-center mdS:cursor-pointer group">
        <Link 
          to={link.page}
          className="flex items-center py-4 group"
          style={{ pointerEvents: "none", cursor: "pointer" }}
          onClick={(e) => {
            e.preventDefault();
            heading !== link.name ? setHeading(link.name) : setHeading("");
            setSubHeading("");
          }}
        >
          {link.name}
          <span className="hidden mdS:mt-0 mdS:ml-1 mdS:flex group-hover:rotate-180">
            <ion-icon name="chevron-down"></ion-icon>
          </span>
        </Link>

        {link.subMenu && (
          <div>
            <div
              className={`absolute top-[4rem] shadow-lg ${
                link.subLinks.length > 2
                  ? "left-0 w-full"
                  : link.subLinks.length === 1
              } hidden group-hover:mdS:flex hover:mdS:flex`}
            >
              <div
                className={`bg-white ${
                  link.subLinks.length > 2
                    ? "grid grid-cols-5 w-full py-[3rem]"
                    : "grid grid-cols-1"
                } gap-10`}
              >
                {link.subLinks.map((mySubLinks, index) => (
                  <div
                    key={index}
                    className={`p-[0.5rem] flex flex-col items-start flex-wrap min-w-[230px] mb-[1rem] landing-[30px] ${
                      link.subLinks.length > 2
                        ? "border-r-[1px] border-gray-500"
                        : ""
                    }`}
                  >
                    <li className="text-lg pl-[1rem] font-semibold">
                      {mySubLinks.Head}
                    </li>
                    {mySubLinks.subLinks.map((slink, index) => (
                      <li
                        key={index}
                        className="py-[5px] px-[20px] landing-[30px] text-gray-400 flex"
                      >
                        <Link
                          to={slink.link}
                          className="text-base hover:text-customTeal"
                        >
                          {slink.name}
                        </Link>
                      </li>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  ))}
</>



  );
};

export default NavLinks;