import React from "react";
import Layout from "../components/Layout/Layout";
import "./referrals.css";

const Referrals = () => {
  return (
    <Layout>
      <div className="lg:ml-6">
        <div className="sc-b34d32a8-0 gGjWEI ">
          <div className="sc-b34d32a8-1 IEDuw">
            <div class="sc-b34d32a8-2 izBjId">
              <div class="sc-b34d32a8-3 fpXvEA __className_18663b">
                Referral rewards
              </div>
              <p class="sc-b34d32a8-4 iBmuNm">
                Invite someone with your referral link and earn 10%, 5% and 1%
                of your referral’s daily profits up to three levels.
              </p>
              <button scale="lg" class="sc-4142778f-0 hbpQIt">
                <p scale="lg" class="sc-4142778f-1 eePRrB">
                  <a target="_blank" href="/">
                    KNOW MORE
                  </a>
                </p>
              </button>
            </div>
            <div className="hPkaII">
              <div class="sc-995918ed-5 dlQWRi">
                <div class="sc-995918ed-0 sc-995918ed-3 kLMfbJ cIKxLG">
                  <div class="sc-995918ed-1 dDpolt"></div>
                  <div class="sc-995918ed-1 jmGTBd"></div>
                </div>
                <div class="sc-995918ed-2 gInJTp">
                  <div class="sc-b34d32a8-6 grjaPy">
                    <p>Level</p>
                    <p>-</p>
                  </div>
                </div>
                <div class="sc-995918ed-0 sc-995918ed-4 kLMfbJ leUcmd">
                  <div class="sc-995918ed-1 gFTLcQ"></div>
                  <div class="sc-995918ed-1 lmWtGY"></div>
                </div>
              </div>
              <div class="sc-995918ed-5 dlQWRi">
                <div class="sc-995918ed-0 sc-995918ed-3 kLMfbJ cIKxLG">
                  <div class="sc-995918ed-1 dDpolt"></div>
                  <div class="sc-995918ed-1 jmGTBd"></div>
                </div>
                <div class="sc-995918ed-2 gInJTp">
                  <div class="sc-b34d32a8-6 grjaPy">
                    <p>Referrals</p>
                    <p>-</p>
                  </div>
                </div>
                <div class="sc-995918ed-0 sc-995918ed-4 kLMfbJ leUcmd">
                  <div class="sc-995918ed-1 gFTLcQ"></div>
                  <div class="sc-995918ed-1 lmWtGY"></div>
                </div>
              </div>
              <div class="sc-995918ed-5 dlQWRi">
                <div class="sc-995918ed-0 sc-995918ed-3 kLMfbJ cIKxLG">
                  <div class="sc-995918ed-1 dDpolt"></div>
                  <div class="sc-995918ed-1 jmGTBd"></div>
                </div>
                <div class="sc-995918ed-2 gInJTp">
                  <div class="sc-b34d32a8-6 grjaPy">
                    <p>Their deposit</p>
                    <p>-</p>
                  </div>
                </div>
                <div class="sc-995918ed-0 sc-995918ed-4 kLMfbJ leUcmd">
                  <div class="sc-995918ed-1 gFTLcQ"></div>
                  <div class="sc-995918ed-1 lmWtGY"></div>
                </div>
              </div>
              <div class="sc-995918ed-5 dlQWRi">
                <div class="sc-995918ed-0 sc-995918ed-3 kLMfbJ cIKxLG">
                  <div class="sc-995918ed-1 dDpolt"></div>
                  <div class="sc-995918ed-1 jmGTBd"></div>
                </div>
                <div class="sc-995918ed-2 gInJTp">
                  <div class="sc-b34d32a8-6 grjaPy">
                    <p>Your profit</p>
                    <p>-</p>
                  </div>
                </div>
                <div class="sc-995918ed-0 sc-995918ed-4 kLMfbJ leUcmd">
                  <div class="sc-995918ed-1 gFTLcQ"></div>
                  <div class="sc-995918ed-1 lmWtGY"></div>
                </div>
              </div>
            </div>
          </div>
          <div
            class="sc-b34d32a8-1 sc-b34d32a8-11 IEDuw jXQZaI"
            style={{ display: "flex", flexDirection: "column" }}
          >
            <div class="sc-b34d32a8-7 kiqJSt">
              <div class="sc-b34d32a8-8 jGcWAi">
                <div class="sc-b34d32a8-3 fpXvEA __className_18663b">
                  Total referral rewards
                </div>
                <p class="sc-b34d32a8-9 dCcjnL">0 USDT</p>
              </div>
              <button scale="lg" class="sc-4142778f-0 hbpQIt">
                <p scale="lg" class="sc-4142778f-1 eePRrB">
                  <a target="_blank" href="/">
                    REFERRAL GUIDE
                  </a>
                </p>
              </button>
            </div>
            <div class="sc-b34d32a8-10 eNJvsB">
              <div class="flex max-w-[280px] items-center gap-[8px]">
                <input
                  readonly=""
                  class="sc-b34d32a8-12 eQkJa-d w-[80%]"
                  value="https://www.seletti.ai/?ref=undefined"
                />
                <button disabled="" class="sc-b34d32a8-13 ilKPxf">
                  Copy
                </button>
              </div>
              <button scale="lg" disabled="" class="sc-4142778f-0 hbpQIt">
                <p scale="lg" class="sc-4142778f-1 eePRrB">
                  CLAIM REFERRAL REWARDS
                </p>
              </button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Referrals;
