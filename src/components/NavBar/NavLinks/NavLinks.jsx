import { Link } from "react-router-dom";
import { links } from "../MyLinks/MyLinks";
import { useState } from "react";

const NavLinks = () => {
  const [heading, setHeading] = useState("");
  const [subHeading, setSubHeading] = useState("");
  return (
    <>
      {links.map((link, index) => (
        <div key={index} >
          <div className="  px-2 text-[15px]  leading-[22px]   duration-300 font-[400] text-center mdS:cursor-pointer group">
          <p
  className="flex items-center py-4 group hover:text-[#04d39f]"
  style={{ pointerEvents: "none", cursor: "pointer" }}
  onClick={(e) => {
    e.preventDefault();
    heading !== link.name ? setHeading(link.name) : setHeading("");
    setSubHeading("");
  }}
>
  {link.name}
  <span className="inline ml-1 mdS:hidden hover:text-[#04d39f]     text-[15px] ">
    <ion-icon
      name={`${heading === link.name ? "chevron-up" : "chevron-down"}`}
    ></ion-icon>
  </span>
  <span className="hidden mdS:mt-0 mdS:ml-1 mdS:flex group-hover:rotate-180">
    <ion-icon name="chevron-down"></ion-icon>
  </span>
</p>

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
                    className={`bg-white    ${
                      link.subLinks.length > 2
                        ? "grid grid-cols-5 w-full  py-[3rem]"
                        : "grid grid-cols-1"
                    } gap-10`}
                  >
                    {link.subLinks.map((mySubLinks, index) => (
                      <div
                        key={index}
                        className={`p-[0.5rem] flex flex-col items-start flex-wrap min-w-[230px] mb-[1rem] landing-[30px]  ${
                          link.subLinks.length > 2
                            ? "border-r-[1px] border-gray-500"
                            : ""
                        }`}
                      >
                        <li className="text-lg   pl-[1rem] font-semibold">
                          {mySubLinks.Head}
                        </li>
                        {/* <ul className="gap-4 min-w-[230px] "> */}
                          {mySubLinks.subLinks.map((slink, index) => (
                            <li className="   py-[5px] px-[20px]  landing-[30px]  text-[#323232] flex" key={index}>
                              <Link
                                to={slink.link}
                                className="text-base hover:text-customTeal text-[#323232]"
                              >
                                {slink.name}
                              </Link>
                            </li>
                          ))}
                        {/* </ul> */}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
          {/* Mobile menus */}
          <div
            className={`
            ${heading === link.name ? "mdS:flex" : "hidden"}
          `}
          >
            {/* subLinks */}
            {link.subLinks.map((slinks, index) => (
              <div key={index}>
                <div>
                  <h1
                    onClick={() =>
                      subHeading !== slinks.Head
                        ? setSubHeading(slinks.Head)
                        : setSubHeading("")
                    }
                    className="flex items-center justify-between py-4 pr-5 font-semibold pl-7 mdS:pr-0"
                  >
                    {slinks.Head}

                    <span className="inline text-xl mdS:mt-1 mdS:ml-2">
                      <ion-icon
                        name={`${
                          subHeading === slinks.Head
                            ? "chevron-up"
                            : "chevron-down"
                        }`}
                      ></ion-icon>
                    </span>
                  </h1>
                  <div
                    className={`${
                      subHeading === slinks.Head ? "mdS:hidden" : "hidden"
                    }`}
                  >
                    {slinks.subLinks.map((slink, index) => (
                      <li className="py-0 pl-14  text-[#323232] text-[12px]" key={index}>
                        <Link to={slink.link}>{slink.name}</Link>
                      </li>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </>
  );
};

export default NavLinks;
