import React, { useState } from "react";
import LogoWebsite from "../../../assets/logo-white.jpg";
import { TbMenu } from "react-icons/tb";
import { Link } from "react-router-dom";

const MobileSideBar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };
  return (
    <div className="lg:hidden flex items-center justify-between text-white">
      <img
        src={LogoWebsite}
        alt="Logo"
        className="h-20 w-20 m-4 rounded-full shadow-xl"
      />
      <button scale="sm" class="sc-4142778f-0 gONgRy">
        <p scale="sm" class="sc-4142778f-1 eePRmx text-[13px]">
          CONNECT WALLET
        </p>
      </button>
      <div className="lg:hidden p-4">
        <button
          className="sc-faeae7f8-0 relative ePfABc flex justify-center items-center"
          onClick={toggleMenu}
        >
          {isMenuOpen ? (
            <TbMenu className="text-white w-8 h-8 font-thin" />
          ) : (
            <TbMenu className="text-white w-8 h-8 font-thin" />
          )}
        </button>

        {isMenuOpen && (
          <div className="bg-white  absolute top-0 left-0 text-black h-[100vh] z-30 w-1/2 p-4">
            <ul className="flex flex-col gap-4">
              <Link to="/" className=" ">
                PAMM INVEST
              </Link>
              <Link to="/referrals" className="  ohZ">
                REFERRALS
              </Link>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default MobileSideBar;
