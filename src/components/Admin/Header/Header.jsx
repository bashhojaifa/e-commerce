import React, { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { MdClose } from "react-icons/md";
import { HiMenuAlt2 } from "react-icons/hi";
import { motion } from "framer-motion";
import { logo, logoLight } from "../../../assets/images";
import Image from "../../designLayouts/Image";
import { navBarList } from "../../../utils";
import Flex from "../../designLayouts/Flex";
import { FaCaretDown } from "react-icons/fa";

const Header = () => {
  const [showMenu, setShowMenu] = useState(true);
  const [sidenav, setSidenav] = useState(false);
  const [showUser, setShowUser] = useState(false);

  const location = useLocation();
  useEffect(() => {
    let ResponsiveMenu = () => {
      if (window.innerWidth < 667) {
        setShowMenu(false);
      } else {
        setShowMenu(true);
      }
    };
    ResponsiveMenu();
    window.addEventListener("resize", ResponsiveMenu);
  }, []);

  return (
    <div className="w-full py-2 bg-white sticky top-0 z-50 border-b-[1px] border-b-gray-200">
      <nav className="h-full px-6 max-w-container mx-auto relative">
        <Flex className="flex items-center justify-between h-full">
          <Link to="/">
            <div className="text-2xl font-semibold">
              BASHAR
              {/* <Image className="w-20 object-cover" imgSrc={logo} /> */}
            </div>
          </Link>
          <div>
            {showMenu && (
              <>
                <motion.ul
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5 }}
                  className="flex items-center w-auto z-50 p-0 gap-2"
                >
                  <>
                    {navBarList.map(({ _id, title, link }) => (
                      <NavLink
                        key={_id}
                        className="flex font-normal hover:font-bold w-20 h-6 justify-center items-center px-3 text-base text-[#767676] hover:underline underline-offset-[4px] decoration-[1px] hover:text-[#262626] hoverEffect "
                        to={link}
                        state={{ data: location.pathname.split("/")[1] }}
                      >
                        <li>{title}</li>
                      </NavLink>
                    ))}
                  </>
                  <div className="flex gap-2 mt-2 lg:mt-0 items-center pr-6 cursor-pointer relative">
                    <div
                      onClick={() => setShowUser(!showUser)}
                      className="flex"
                    >
                      <div class="relative z-10 w-12 h-12 rounded-full overflow-hidden border-4 border-gray-400 hover:border-gray-300 focus:border-gray-300 focus:outline-none">
                        <img src="https://source.unsplash.com/uJ8LNVCBjFQ/400x400" />
                      </div>
                      <FaCaretDown className="relative top-4" />
                    </div>

                    {showUser && (
                      <motion.ul
                        initial={{ y: 30, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.5 }}
                        className="absolute top-14 right-0 z-50 bg-primeColor text-[#767676] h-auto p-4 pb-6"
                      >
                        <li className="text-gray-400 px-4 py-1 border-b-[1px] border-b-gray-400 hover:border-b-white hover:text-white duration-300 cursor-pointer">
                          Profile
                        </li>
                        <li className="text-gray-400 px-4 py-1 border-b-[1px] border-b-gray-400 hover:border-b-white hover:text-white duration-300 cursor-pointer">
                          Logout
                        </li>
                      </motion.ul>
                    )}
                  </div>
                </motion.ul>
              </>
            )}
            <HiMenuAlt2
              onClick={() => setSidenav(!sidenav)}
              className="inline-block md:hidden cursor-pointer w-8 h-6 absolute top-0 right-4"
            />
            {sidenav && (
              <div className="fixed top-0 left-0 w-full h-screen bg-black text-gray-200 bg-opacity-80 z-50">
                <motion.div
                  initial={{ x: -300, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.5 }}
                  className="w-[80%] h-full relative"
                >
                  <div className="w-full h-full bg-primeColor p-6">
                    {/* <img
                      className="w-28 mb-6"
                      src={logoLight}
                      alt="logoLight"
                    /> */}
                    <div className="text-2xl font-semibold w-28 mb-6">
                      BASHAR
                    </div>
                    <ul className="text-gray-200 flex flex-col gap-2">
                      <Link to="/dashboard">
                        <li className="font-normal hover:font-bold items-center text-lg text-gray-200 hover:underline underline-offset-[4px] decoration-[1px] hover:text-white md:border-r-[2px] border-r-gray-300 hoverEffect last:border-r-0">
                          Dashboard
                        </li>
                      </Link>
                      <Link to="/users">
                        <li className="font-normal hover:font-bold items-center text-lg text-gray-200 hover:underline underline-offset-[4px] decoration-[1px] hover:text-white md:border-r-[2px] border-r-gray-300 hoverEffect last:border-r-0">
                          Users
                        </li>
                      </Link>
                      <Link to="/orders">
                        <li className="font-normal hover:font-bold items-center text-lg text-gray-200 hover:underline underline-offset-[4px] decoration-[1px] hover:text-white md:border-r-[2px] border-r-gray-300 hoverEffect last:border-r-0">
                          Orders
                        </li>
                      </Link>
                    </ul>
                  </div>
                  <span
                    onClick={() => setSidenav(false)}
                    className="w-8 h-8 border-[1px] border-gray-300 absolute top-2 -right-10 text-gray-300 text-2xl flex justify-center items-center cursor-pointer hover:border-red-500 hover:text-red-500 duration-300"
                  >
                    <MdClose />
                  </span>
                </motion.div>
              </div>
            )}
          </div>
        </Flex>
      </nav>
    </div>
  );
};

export default Header;
