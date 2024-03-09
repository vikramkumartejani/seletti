import React from "react";

const Navbar = () => {
  return (
    <section className="lg:ml-6 ml-0">
      <div class="sc-8a51e25a-3 bclHhC mb-5 lg:border-none border-b lg:pb-0 pb-4">
        <div class="sc-8a51e25a-4 jIxhzv">
          <div class="sc-4b077879-0 iTowdi">
            <span class="sc-4b077879-1 iCyQuZ">
              <p class="whitespace-nowrap">Active users</p>
            </span>
            <span class="sc-4b077879-2 hEPdtl">
              <div class="flex items-center gap-[16px] pb-[5px] pl-[8px] pt-[5px] md:pb-0 md:pl-0 md:pt-0">
                <div color="blue" class="sc-4936f139-0 lgzvTq"></div> <p>324</p>
              </div>
            </span>
          </div>
          <div class="sc-4b077879-0 iTowdi">
            <span class="sc-4b077879-1 iCyQuZ">
              <p>Value staked</p>
            </span>
            <span class="sc-4b077879-2 hEPdtl">
              <div class="flex items-center gap-[16px] pl-0 md:pb-[5px] md:pl-[8px] md:pt-[5px]">
                <div color="green" class="sc-4936f139-0 kONphL"></div>
                <p class="whitespace-nowrap">$420252.13</p>
              </div>
            </span>
          </div>
        </div>
        <button class="sc-4142778f-0 hbpQIt connect-btn">
          <p class="sc-4142778f-1 eePRrB">CONNECT WALLET</p>
        </button>
      </div>
    </section>
  );
};

export default Navbar;
