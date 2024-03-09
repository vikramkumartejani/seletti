import React from "react";
import "./sidebar.css";
import { Link } from "react-router-dom";

import Logo from "../../../assets/logo.webp";
import Robet from "../../../assets/robot.gif";
// import Icons from "../../../assets/home.0bf542fa.svg"

const Sidebar = () => {
  return (
    <div className="h-full text-white fixed mr-10 ">
      <div class="sc-8a51e25a-1 iwULQu">
        <div class="sc-dfe9a692-0 cykrde">
          <div class="sc-995918ed-5 dlQWRi">
            <div class="sc-995918ed-0 sc-995918ed-3 kLMfbJ cIKxLG">
              <div class="sc-995918ed-1 dDpolt"></div>
              <div class="sc-995918ed-1 jmGTBd"></div>
            </div>
            <div class="sc-995918ed-2 gInJTp ">
              <div className="flex items-center gap-3 crTtFs">
                <img
                  alt="logo"
                  loading="lazy"
                  width="51.211"
                  height="76.933"
                  src={Logo}
                />
                SELETTI
              </div>
              <div class="sc-dfe9a692-2 jeiPlC">
                <div class="sc-dfe9a692-3 dBqzSf">
                  <div class="sc-7e209e53-1 jujpfO mt-4 pt-6 ">
                    <div className="flex flex-col gap-5 w-full ml-[23px] text-xl ">
                      <Link to="/" className="iCDohZ">PAMM INVEST</Link>
                      <Link to="/referrals" className="iCDohZ">REFERRALS</Link>
                    </div>
                  </div>
                </div>
                <div class="sc-dfe9a692-4 dpqA-Dd">
                  <img
                    alt="Robot"
                    loading="lazy"
                    className="pt-10 pb-2"
                    src={Robet}
                  />
                </div>
              </div>
            </div>
            <div class="sc-995918ed-0 sc-995918ed-4 kLMfbJ leUcmd">
              <div class="sc-995918ed-1 gFTLcQ"></div>
              <div class="sc-995918ed-1 lmWtGY"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
