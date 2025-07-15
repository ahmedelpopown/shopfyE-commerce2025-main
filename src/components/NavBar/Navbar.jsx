import logo from "../../assets/logo.svg";
import NavLinks from "./NavLinks/NavLinks";
import Icons from "./Icons/Icons";
import { useState } from "react";
import { Link } from "react-router-dom";
import {links}  from "../NavBar/MyLinks/MyLinks"; // ضروري علشان نرندرهم داخل الموبايل

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [heading, setHeading] = useState("");
  const [subHeading, setSubHeading] = useState("");
  return (
    <nav className="top-0 left-0 z-50 flex flex-row flex-wrap items-center justify-between w-full bg-white border-b p-[1.5rem] ">
      <div className="flex items-center justify-between w-[100%] pt-5px font-medium bg-white mdS:px-10">
        {/* Logo + Hamburger */}
        <div className="flex justify-between w-full mdS:w-auto">
          <img src={logo} alt="logo" className="cursor-pointer h-9" />

          {/* Hamburger button for mobile */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="flex items-center justify-center text-3xl mdS:hidden"
          >
            <ion-icon name={mobileMenuOpen ? "close" : "menu"}   ></ion-icon>
          </button>
        </div>

        {/* Desktop NavLinks */}
        <ul className="items-center hidden gap-6 mdS:flex">
          <NavLinks />
        </ul>

        {/* Desktop Icons */}
        <div className="items-center hidden space-x-4 mdS:flex">
          <Icons />
        </div>
      </div>
{/* ✅ Mobile Menu */}
{/* // /"max-h-[1000px]  " : "max-h-0 " */}
<div
  className={`
    absolute left-0 top-full w-full z-[100] 
    bg-white mdS:hidden transition-all duration-100 ease-in-out
    ${mobileMenuOpen ? "max-h-[1000px]" : "max-h-0 overflow-hidden"}
  `}
>
  {links.map((link, index) => (
    <div
      key={index}
      className="border-b border-gray-200"
    >
      {/* قائمة رئيسية */}
      <div
        onClick={() =>
          setHeading(heading === link.name ? "" : link.name)
        }
        className="flex justify-between items-center py-3 px-4 cursor-pointer font-medium text-[#323232]"
      >
        {link.name}
        <ion-icon
          name={heading === link.name ? "chevron-up" : "chevron-down"}
        ></ion-icon>
      </div>

      {/* عرض العناصر الفرعية */}
      <div
        className={`
          overflow-hidden transition-all duration-500 ease-in-out 
          ${heading === link.name ? "max-h-[500px]" : "max-h-0"}
        `}
      >
        {link.subMenu &&
          link.subLinks.map((group, i) => (
            <div key={i} className="pb-2 pl-6 border-t border-gray-100">
              {group.Head && (
                <div
                  onClick={() =>
                    setSubHeading(
                      subHeading === group.Head ? "" : group.Head
                    )
                  }
                  className="flex items-center justify-between py-2 font-semibold text-gray-700 cursor-pointer"
                >
                  {group.Head}
                  <ion-icon
                    name={
                      subHeading === group.Head
                        ? "chevron-up"
                        : "chevron-down"
                    }
                  ></ion-icon>
                </div>
              )}

              {/* روابط داخلية */}
              <div
                className={`
                  transition-all duration-500 ease-in-out overflow-hidden
                  ${subHeading === group.Head ? "max-h-[500px]" : "max-h-0"}
                `}
              >
                <ul className="pl-4 mt-1 space-y-2">
                  {group.subLinks.map((slink, j) => (
                    <li key={j}>
                      <Link
                        to={slink.link}
                        className="block text-sm text-gray-600 hover:text-[#04d39f]"
                      >
                        {slink.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}

        {!link.subMenu && heading === link.name && (
          <Link
            to={link.href}
            className="block py-2 pl-6 text-sm text-gray-600 hover:text-[#04d39f]"
          >
            {link.name}
          </Link>
        )}
      </div>
    </div>
  ))}
</div>



 

    </nav>
  );
};

export default Navbar;
