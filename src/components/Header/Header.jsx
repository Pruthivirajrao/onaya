import React, { useState } from "react";
import { FaChevronDown, FaSearch } from "react-icons/fa";
import { CiSearch, CiHeart, CiShoppingCart } from "react-icons/ci";
import { CgProfile } from "react-icons/cg";
import { IoMdClose } from "react-icons/io";
import { MdMenu } from "react-icons/md";
import logo from "../../assets/onaya-logo.png";
import { useSelector } from "react-redux";
const Header = () => {
  const [showShiiping, setShowShipping] = useState(true);
  const [searchClick,setSearchClick] = useState(false)

  const cartValue = useSelector(state=>state.cart)

  return (
    <>
      {/* For all large devices */}
      <div
        className={`text-center bg-gray-200 py-2 justify-between md:justify-center items-center hidden lg:flex ${
          showShiiping ? "block" : "hidden"
        } `}
      >
        Free Shipping Worldwide | For customizations & other queries, please
        reach out to +91 8334000666
        <p className="block md:hidden" onClick={() => setShowShipping(false)}>
          <IoMdClose />
        </p>
      </div>
      <header className="mb-2 lg:flex items-center justify-between hidden ">
        <div className="flex md:items-center md:gap-12 gap-4 lg:px-40 lg:py-3">
          <div className="flex items-center">
            <img src={logo} alt="" className="h-12" />
          </div>
          <nav className="lg:flex items-center gap-8 ml-8 text-xs hidden">
            <p>HOME</p>
            <p className="flex items-center gap-1">
              SHOP <FaChevronDown />
            </p>
            <p>VIDEO CALL APPOINTMENT</p>
            <p>CONTACT US</p>
            <p>SEADY TO SHIP</p>
            <p>BESTSELLER</p>
            <p className="flex items-center gap-1">
              INR <FaChevronDown />
            </p>
          </nav>
          <div className="flex items-center md:gap-4 md:ml-4 lg:gap-8 text-xl lg:ml-8">
            <p>
              {
                searchClick?<IoMdClose onClick={()=>setSearchClick(!searchClick)}/> : <CiSearch onClick={()=>setSearchClick(!searchClick)} />
              }

            </p>
            <p>
              <CiHeart />
            </p>
            <p>
              <CgProfile />
            </p>
            <p className="relative">
              <CiShoppingCart />
              <p className=" bg-black rounded-full w-4 h-4 flex items-center justify-center text-white absolute top-[-10px] text-xs right-[-2px]">{cartValue}</p>
            </p>
          </div>
        </div>
      </header>
            <div className="hidden md:block">
            <div className={`flex justify-center ${searchClick?"":"hidden"}`}>
        <div className="border-[3px] border-black flex items-center px-2 text-lg"> 
          <input type="text" placeholder="Search here" className="py-1 px-2 w-[20rem]"  />
          <FaSearch />
        </div>
      </div>
            </div>

      {/* For small and medium devices */}
      <div>
        <div
          className={`lg:hidden text-center bg-gray-200 py-2  flex justify-between md:justify-center items-center ${
            showShiiping ? "block" : "hidden"
          } `}
        >
          Free Shipping Worldwide | For customizations & other queries, please
          reach out to +91 8334000666
          <p className="block md:hidden" onClick={() => setShowShipping(false)}>
            <IoMdClose />
          </p>
        </div>
        <div className="lg:hidden flex justify-between items-center px-1 md:px-12 my-4">
          <div className="flex items-center">
            <div className="block lg:hidden text-5xl">
              <MdMenu />
            </div>
            <img src={logo} alt="" className="h-12" />
          </div>
          <div className="flex items-center gap-2 md:gap-4 md:ml-4 lg:gap-8 text-2xl lg:ml-8">
          <p>
              {
                searchClick?<IoMdClose onClick={()=>setSearchClick(!searchClick)}/> : <CiSearch onClick={()=>setSearchClick(!searchClick)} />
              }

            </p>
            <p>
              <CiHeart />
            </p>
            <p>
              <CgProfile />
            </p>
            <p className="relative">
              <CiShoppingCart />
              <p className=" bg-black rounded-full w-4 h-4 flex items-center justify-center text-white absolute top-[-10px] text-sm right-[-2px]">{cartValue}</p>
            </p>
          </div>
        </div>
        <div className={`flex md:hidden justify-center ${searchClick?"":"hidden"}`}>
        <div className="border-[3px] border-black flex items-center px-3"> 
          <input type="text" placeholder="Search here" className="py-1 px-2 w-[20rem]"  />
          <FaSearch />
        </div>
      </div>
      </div>
    </>
  );
};

export default Header;
