import React, { useState } from "react";
import Layout from "../components/Layout/Layout";
import "./invest.css";
import { MdArrowOutward } from "react-icons/md";
import { IoIosArrowDown } from "react-icons/io";
import Eth from '../../assets/tether.svg'

const Invest = () => {
  const [isDetailsVisible, setIsDetailsVisible] = useState(false);
  const [activeTab, setActiveTab] = useState(1);

  const toggleDetails = () => {
    setIsDetailsVisible(!isDetailsVisible);
  };

  const handleTabClick = (tabNumber) => {
    setActiveTab(tabNumber);
  };
  return (
    <Layout>
      <div className="lg:ml-6 text-white my-6 flex flex-col gap-6 sm:mr-0 md:mr-6">
        <div className="grid md:grid-cols-[2fr_1fr] grid-cols-1 gap-6">
          <div className="flex flex-col gap-6">
            <div className="flex flex-row gap-6">
              <div class="sc-995918ed-5 dlQWRi h-[100%] w-[100%]">
                <div class="sc-995918ed-0 sc-995918ed-3 kLMfbJ cIKxLG">
                  <div class="sc-995918ed-1 dDpolt"></div>
                  <div class="sc-995918ed-1 jmGTBd"></div>
                </div>
                <div class="sc-995918ed-2 gInJTp">
                  <div class="flex flex-col px-6 py-3">
                    <p class="text-[18px] uppercase text-[#9B9BA2]">TVL</p>
                    <p class="mt-[24px] uppercase text-[#FFFFFF] sm:text-[24px] md:text-[32px]">
                      $352544.93
                    </p>
                  </div>
                </div>
                <div class="sc-995918ed-0 sc-995918ed-4 kLMfbJ leUcmd">
                  <div class="sc-995918ed-1 gFTLcQ"></div>
                  <div class="sc-995918ed-1 lmWtGY"></div>
                </div>
                <div class="sc-995918ed-6 vOLPD"></div>
              </div>
              <div class="sc-995918ed-5 dlQWRi h-[100%] w-[100%]">
                <div class="sc-995918ed-0 sc-995918ed-3 kLMfbJ cIKxLG">
                  <div class="sc-995918ed-1 dDpolt"></div>
                  <div class="sc-995918ed-1 jmGTBd"></div>
                </div>
                <div class="sc-995918ed-2 gInJTp">
                  <div class="flex flex-col px-6 py-3">
                    <p class="text-[18px] uppercase text-[#9B9BA2]">WIN RATE</p>
                    <p class="mt-[24px] uppercase text-[#FFFFFF] sm:text-[24px] md:text-[32px]">
                      71.95 %
                    </p>
                  </div>
                </div>
                <div class="sc-995918ed-0 sc-995918ed-4 kLMfbJ leUcmd">
                  <div class="sc-995918ed-1 gFTLcQ"></div>
                  <div class="sc-995918ed-1 lmWtGY"></div>
                </div>
                <div class="sc-995918ed-6 vOLPD"></div>
              </div>
            </div>
            <div>CHART</div>
            <div class="sc-23d25b86-0 hjnXua flex flex-col gap-[24px]">
              <p class="text-[24px] uppercase">ALLOCATION</p>
              <div class="grid grid-cols-[1fr] gap-x-10">
                <div class="sc-30d7cfea-0 UBwSK">
                  <div class="grid grid-cols-[2fr_1fr]">
                    <div class="px-[16px] py-[25px] text-[22px] text-[#9B9BA2]">
                      Seletti A.i Forex Trader
                    </div>
                    <div class="px-[16px] py-[25px] text-[22px] text-[#9B9BA2]">
                      100%
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* mkdfg */}
          <div className="flex flex-col gap-4">
            <div>
              <div className="flex flex-row rounded-tl-[6px] rounded-tr-[6px] bg-[#0A090F] sc-24cebd8a-0 faZbtb">
                <button
                  className={`w-[50%] p-[10px] uppercase border-b-[1px] ${
                    activeTab === 1
                      ? "border-[#9B9BA2] text-white"
                      : "border-transparent text-[#9B9BA2]"
                  }`}
                  onClick={() => handleTabClick(1)}
                >
                  Deposit
                </button>
                <button
                  className={`w-[50%] p-[10px] uppercase  ${
                    activeTab === 2
                      ? "border-b-[1px] text-white border-[#9B9BA2]"
                      : "border-transparent text-[#9B9BA2]"
                  }`}
                  onClick={() => handleTabClick(2)}
                >
                  Withdraw
                </button>
              </div>
              <div>
                {activeTab === 1 && (
                  <div class="sc-23d25b86-0 hjnXua flex flex-col gap-[24px]">
                    <div class="flex flex-col gap-3">
                      <p class="grow-[1] text-[18px] text-[#9B9BA2]">
                        Deposit USDT BEP-20
                      </p>
                      <div class="flex w-full justify-between">
                        <div class="flex w-full flex-col items-start gap-[8px]">
                          <p class="text-[18px] text-[#9B9BA2]">Available</p>
                          <p class="text-[18px] text-[#FFFFFF]">0</p>
                        </div>
                        <div class="flex w-full flex-col items-end gap-[8px]">
                          <p class="text-[18px] text-[#9B9BA2]">Deposited</p>
                          <p class="text-[18px] text-[#FFFFFF]">0</p>
                        </div>
                      </div>
                      <div class="flex flex-row items-center gap-[16px]">
                        <img
                          alt="ETH"
                          loading="lazy"
                          width="40"
                          height="40"
                           src={Eth}
                         />
                        <label
                          data-domain=""
                          class="sc-a9e872e3-0 sc-a9e872e3-1 coKMcz dLmlyL"
                        >
                          <input type="number" />
                        </label>
                        <button class="sc-4142778f-2 dAmSWC">MAX</button>
                      </div>
                      <div class="flex flex-row items-center gap-[16px]">
                        <p>Inviter</p>
                        <label
                          data-domain=""
                          class="sc-a9e872e3-0 sc-a9e872e3-1 coKMcz dLmlyL"
                        >
                          <input type="text"  />
                        </label>
                      </div>
                    </div>
                    <button
                      scale="lg"
                      class="sc-4142778f-0 sc-4142778f-3 hbpQIt lmNGEv"
                    >
                      <p scale="lg" class="sc-4142778f-1 eePRrB">
                        CONNECT WALLET
                      </p>
                    </button>
                  </div>
                )}
              </div>
              <div>
                {activeTab === 2 && (
                  <div class="sc-23d25b86-0 hjnXua flex flex-col gap-[24px]">
                    <div class="flex flex-col gap-[16px]">
                      <div class="flex flex-row">
                        <p class="grow-[1] text-[18px] text-[#9B9BA2]">
                          Withdraw
                        </p>
                        <p class="text-[18px] text-[#9B9BA2]">
                          Available:&nbsp;<span class="text-[#FFFFFF]">0</span>
                        </p>
                      </div>
                    </div>
                    <div class="flex flex-col gap-[16px]">
                      <button
                        scale="lg"
                        class="sc-4142778f-0 sc-4142778f-3 hbpQIt lmNGEv w-full"
                      >
                        <p scale="lg" class="sc-4142778f-1 eePRrB">
                          CONNECT WALLET
                        </p>
                      </button>
                    </div>
                    <hr class="sc-4ecb9fdc-0 eqALCG" />
                    <div class="flex flex-row">
                      <p class="grow-[1] text-[18px] text-[#9B9BA2]">
                        Withdrawal fee
                      </p>
                      <p class="text-[18px]">3%</p>
                    </div>
                  </div>
                )}
              </div>
            </div>
            <div class="sc-995918ed-5 dlQWRi h-[60vh] w-[100%]">
              <div width="10" class="sc-995918ed-0 sc-995918ed-3 gWUPBy grNOHG">
                <div width="10" class="sc-995918ed-1 cTFYJn"></div>
                <div width="10" class="sc-995918ed-1 gLmBdD"></div>
              </div>
              <div class="sc-995918ed-2 gInJTp py-8">
                <div class="flex flex-col items-center justify-center h-full w-full grid-cols-[0.8fr,1fr] grid-rows-2 gap-4  pl-6 md:flex md:flex-col md:justify-between pr-6 text-[18px]">
                  <div class="flex w-full justify-between gap-1  uppercase text-[#9B9BA2] md:flex-row md:items-center md:justify-between md:gap-0 md:border-0">
                    <div>Recent results</div>
                    <div>Mar 08 2024</div>
                  </div>
                  <div class="row-span-2 flex w-full justify-center">
                    <div class="sc-abd91802-0 ejlXWS">0.89%</div>
                  </div>
                  <div class="mt-10 md:mt-0 w-full flex gap-1 justify-between flex-row md:items-center md:justify-between md:gap-0 [&amp;>button>a]:justify-start">
                    <div class="uppercase text-white">
                      Seletti A.I. Forex Trader
                    </div>
                    <button scale="sm" class="sc-b1899c93-0 kBRKUV">
                      <a rel="noreferrer" href="/trades/mar-08-2024">
                        <MdArrowOutward />
                      </a>
                    </button>
                  </div>
                </div>
              </div>
              <div width="10" class="sc-995918ed-0 sc-995918ed-4 gWUPBy hvQLqd">
                <div width="10" class="sc-995918ed-1 eTNqqe"></div>
                <div width="10" class="sc-995918ed-1 gVHaXq"></div>
              </div>
            </div>
            <div class="sc-23d25b86-0 hjnXua flex flex-col gap-[24px]">
              <div class="flex flex-row">
                <p class="grow-[1] uppercase sm:text-[16px] md:text-[24px]">
                  Fund Strategy
                </p>
                <button onClick={toggleDetails}>
                  <IoIosArrowDown className="w-7 h-7" />
                </button>
              </div>
              {isDetailsVisible && (
                <div className="flex flex-col gap-4">
                  <p className="leading-[26.4px] text-[#9B9BA2] sm:text-[18px] md:text-[22px]">
                    The Quantitative Forex PAMM Fund is a managed, automatic
                    forex trading system that is powered by the Seletti A.i. The
                    Seletti A.i continuously analyzes financial data, including
                    historical price movements, market news, technical
                    indicators, and more. It uses this analysis to make
                    data-driven decisions about future market trends and
                    potential trading opportunities.
                  </p>
                  <p className="leading-[26.4px] text-[#9B9BA2] sm:text-[18px] md:text-[22px]">
                    Based on its analysis, the Seletti A.i generates trading
                    signals and strategies. These strategies include buy/sell
                    executions, risk management parameters, and position sizing
                    calculations.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Invest;
