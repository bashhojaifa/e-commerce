import React, { useEffect, useState } from "react";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import { MdClose } from "react-icons/md";
import { HiMenuAlt2 } from "react-icons/hi";
import { motion } from "framer-motion";
import { navBarList } from "../../../utils";
import Flex from "../../designLayouts/Flex";
import { FaCaretDown, FaSearch, FaShoppingCart, FaUser } from "react-icons/fa";
import { useSelector } from "react-redux";
import { paginationItems } from "../../../utils";

const Header = () => {
  const navigate = useNavigate();

  const products = useSelector((state) => state.bashReducer.products);

  const [showMenu, setShowMenu] = useState(true);
  const [sidenav, setSidenav] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [showSearchBar, setShowSearchBar] = useState(false);
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

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  useEffect(() => {
    const filtered = paginationItems.filter((item) =>
      item.productName.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredProducts(filtered);
  }, [searchQuery]);

  return (
    <div className="w-full h-20 bg-white sticky top-0 z-50 border-b-[1px] border-b-gray-200">
      <nav className="h-full px-4 max-w-container mx-auto relative">
        <Flex className="flex items-center justify-between h-full">
          <Link to="/">
            <div className="text-2xl font-semibold w-20">BASHAR</div>
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
                    <div className="relative mt-1 w-full h-[50px] text-base text-primeColor bg-white flex items-center gap-2 justify-between px-6 rounded-xl">
                      <input
                        className="flex-1 h-full outline-none placeholder:text-[#C4C4C4] placeholder:text-[14px]"
                        type="text"
                        onChange={handleSearch}
                        value={searchQuery}
                        placeholder="Search your products here"
                      />
                      <FaSearch className="w-5 h-5" />
                      {searchQuery && (
                        <div
                          className={`w-full mx-auto h-96 bg-white top-16 absolute left-0 z-50 overflow-y-scroll shadow-2xl scrollbar-hide cursor-pointer`}
                        >
                          {searchQuery &&
                            filteredProducts.map((item) => (
                              <div
                                onClick={() =>
                                  navigate(
                                    `/product/${item.productName
                                      .toLowerCase()
                                      .split(" ")
                                      .join("")}`,
                                    {
                                      state: {
                                        item: item,
                                      },
                                    }
                                  ) &
                                  setShowSearchBar(true) &
                                  setSearchQuery("")
                                }
                                key={item._id}
                                className="max-w-[600px] h-28 bg-gray-100 mb-3 flex items-center gap-3"
                              >
                                {/* <img
                                  className="w-24"
                                  src={item.img}
                                  alt="productImg"
                                /> */}
                                <div className="text-2xl font-semibold">
                                  BASHAR
                                </div>
                                <div className="flex flex-col gap-1">
                                  <p className="font-semibold text-lg">
                                    {item.productName}
                                  </p>
                                  <p className="text-xs">{item.des}</p>
                                  <p className="text-sm">
                                    Price:{" "}
                                    <span className="text-primeColor font-semibold">
                                      ${item.price}
                                    </span>
                                  </p>
                                </div>
                              </div>
                            ))}
                        </div>
                      )}
                    </div>
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
                    <Link to="/cart">
                      <li className="relative px-5">
                        <FaShoppingCart />
                        <span className="absolute font-titleFont font-semibold bottom-3 right-2  text-xs w-4 h-4 flex items-center justify-center rounded-full bg-primeColor text-white">
                          {products.length > 0 ? products.length : 0}
                        </span>
                      </li>
                    </Link>
                    <div
                      onClick={() => setShowUser(!showUser)}
                      className="flex"
                    >
                      <FaCaretDown />
                      <FaUser />
                    </div>

                    {showUser && (
                      <motion.ul
                        initial={{ y: 30, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.5 }}
                        className="absolute top-6 left-0 z-50 bg-primeColor text-[#767676] h-auto p-4 pb-6"
                      >
                        <Link to="/signin">
                          <li className="text-gray-400 px-4 py-1 border-b-[1px] border-b-gray-400 hover:border-b-white hover:text-white duration-300 cursor-pointer">
                            Login
                          </li>
                        </Link>
                        <Link onClick={() => setShowUser(false)} to="/signup">
                          <li className="text-gray-400 px-4 py-1 border-b-[1px] border-b-gray-400 hover:border-b-white hover:text-white duration-300 cursor-pointer">
                            Sign Up
                          </li>
                        </Link>
                        <Link to="/dashboard">
                          <li className="text-gray-400 px-4 py-1 border-b-[1px] border-b-gray-400 hover:border-b-white hover:text-white duration-300 cursor-pointer">
                            Dashboard
                          </li>
                        </Link>
                      </motion.ul>
                    )}
                  </div>
                </motion.ul>
              </>
            )}
            <HiMenuAlt2
              onClick={() => setSidenav(!sidenav)}
              className="inline-block md:hidden cursor-pointer w-8 h-6 absolute top-6 right-4"
            />
            <Link to="/cart">
              <div className="relative right-8 bottom-1 mr-4 md:hidden">
                <FaShoppingCart />
                <span className="absolute  font-titleFont font-semibold bottom-3 left-3 text-xs w-4 h-4 flex items-center justify-center rounded-full bg-primeColor text-white">
                  {products.length > 0 ? products.length : 0}
                </span>
              </div>
            </Link>
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
                      {navBarList.map((item) => (
                        <li
                          className="font-normal hover:font-bold items-center text-lg text-gray-200 hover:underline underline-offset-[4px] decoration-[1px] hover:text-white md:border-r-[2px] border-r-gray-300 hoverEffect last:border-r-0"
                          key={item._id}
                        >
                          <NavLink
                            to={item.link}
                            state={{ data: location.pathname.split("/")[1] }}
                            onClick={() => setSidenav(false)}
                          >
                            {item.title}
                          </NavLink>
                        </li>
                      ))}
                      <Link to="/signin">
                        <li className="font-normal hover:font-bold items-center text-lg text-gray-200 hover:underline underline-offset-[4px] decoration-[1px] hover:text-white md:border-r-[2px] border-r-gray-300 hoverEffect last:border-r-0">
                          Login
                        </li>
                      </Link>
                      <Link to="/signup">
                        <li className="font-normal hover:font-bold items-center text-lg text-gray-200 hover:underline underline-offset-[4px] decoration-[1px] hover:text-white md:border-r-[2px] border-r-gray-300 hoverEffect last:border-r-0">
                          Sign Up
                        </li>
                      </Link>
                    </ul>

                    <div className="relative mt-4 w-full lg:w-[600px] h-[50px] text-base text-primeColor bg-white flex items-center gap-2 justify-between px-6 rounded-xl">
                      <input
                        className="flex-1 h-full outline-none placeholder:text-[#C4C4C4] placeholder:text-[14px]"
                        type="text"
                        onChange={handleSearch}
                        value={searchQuery}
                        placeholder="Search your products here"
                      />
                      <FaSearch className="w-5 h-5" />
                      {searchQuery && (
                        <div
                          className={`w-full mx-auto h-96 bg-white top-16 absolute left-0 z-50 overflow-y-scroll shadow-2xl scrollbar-hide cursor-pointer`}
                        >
                          {searchQuery &&
                            filteredProducts.map((item) => (
                              <div
                                onClick={() =>
                                  navigate(
                                    `/product/${item.productName
                                      .toLowerCase()
                                      .split(" ")
                                      .join("")}`,
                                    {
                                      state: {
                                        item: item,
                                      },
                                    }
                                  ) &
                                  setShowSearchBar(true) &
                                  setSearchQuery("")
                                }
                                key={item._id}
                                className="max-w-[600px] h-28 bg-gray-100 mb-3 flex items-center gap-3"
                              >
                                <img
                                  className="w-24"
                                  src={item.img}
                                  alt="productImg"
                                />
                                <div className="flex flex-col gap-1">
                                  <p className="font-semibold text-lg">
                                    {item.productName}
                                  </p>
                                  <p className="text-xs">{item.des}</p>
                                  <p className="text-sm">
                                    Price:{" "}
                                    <span className="text-primeColor font-semibold">
                                      ${item.price}
                                    </span>
                                  </p>
                                </div>
                              </div>
                            ))}
                        </div>
                      )}
                    </div>
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
