import { useState } from 'react';
import TokenBlockGroup from '../../molecules/TokenBlockGroup';
import PricingButton from '../../atoms/PricingButton';

function PricingPage() {
  const [pricingMethod, setPricingMethod]: boolean = useState(true);
  return (
    <>
      <section className="mt-[50px] mb-[150px]">
        <div className="container md:max-w-[1280px] max-w-[450px] mx-auto">
          <div className="mx-[20px] md:mx-6">
            <div className="grid grid-cols-12">
              <div className="col-span-12 text-center px-3 mb-12">
                <h1 className="mb-2 text-[40px] md:text-[48px] lg:text-[60px] font-medium text-black">
                  Pricing
                </h1>
              </div>
              <div className="col-span-12 m-auto">
                <ul className="justify-center mb-[30px] overflow-hidden rounded-[10px] flex flex-auto">
                  <li>
                    <button
                      className="bg-[#D6DDEF] text-black font-medium border-none px-[20px] py-3"
                      onClick={() => setPricingMethod(true)}
                    >
                      Annual
                    </button>
                  </li>
                  <li>
                    <button
                      className="bg-grey text-f-gray font-medium border-none px-[20px] py-3"
                      onClick={() => setPricingMethod(false)}
                    >
                      Monthly
                    </button>
                  </li>
                </ul>
              </div>
              {pricingMethod ? (
                <>
                  <div className="col-span-12 md:col-span-6 lg:col-span-4 px-3">
                    <div className="p-[30px] relative mb-[30px] text-center rounded-[20px] bg-white shadow-custom border-[1px] border-white">
                      <h4 className="mb-[20px] text-lg md:text-xl lg:text-2xl font-medium">
                        Basic
                      </h4>
                      <h1 className="mt-[20px] mb-[10px] font-bold text-[28px] md:text-[36px] lg:text-[40px]">
                        $17/mo
                      </h1>
                      <div className="flex items-center justify-center gap-[10px] mb-[10px]">
                        <del className="text-lg md:text-xl lg:text-2xl text-f-gray font-medium">
                          $34/mo
                        </del>
                        <span className="p-1.5 text-[#52C38C] font-bold rounded-[4px] bg-custom-green">
                          -50%
                        </span>
                      </div>
                      <span>$204 billed annually as a reccuring payment</span>
                      <h5 className="my-[30px] lg:text-[20px] text-[18px] font-medium">
                        <b>20 downloads / month</b> <br />
                        <b>100 generations / month</b>
                      </h5>
                      <ul className="mb-[30px] m-0 p-0">
                        <li className="text-left ml-[20px] mb-[10px] list-disc">
                          14-day risk-free cancellation
                        </li>
                        <li className="text-left ml-[20px] mb-[10px] list-disc">
                          Annual plan
                        </li>
                        <li className="text-left ml-[20px] mb-[10px] list-disc">
                          Rollover unused credits for next year (excluding
                          cancellation or downgrade)
                        </li>
                      </ul>
                      <PricingButton text="Choose plan" />
                    </div>
                  </div>
                  <div className="col-span-12 md:col-span-6 lg:col-span-4 px-3">
                    <div className="p-[30px] relative mb-[30px] text-center rounded-[20px] bg-white shadow-custom border-[1px] border-white">
                      <h4 className="mb-[20px] text-lg md:text-xl lg:text-2xl font-medium">
                        Pro
                      </h4>
                      <h1 className="mt-[20px] mb-[10px] font-bold text-[28px] md:text-[36px] lg:text-[40px]">
                        $30/mo
                      </h1>
                      <div className="flex items-center justify-center gap-[10px] mb-[10px]">
                        <del className="text-lg md:text-xl lg:text-2xl text-f-gray font-medium">
                          $60/mo
                        </del>
                        <span className="p-1.5 text-[#52C38C] font-bold rounded-[4px] bg-custom-green">
                          -50%
                        </span>
                      </div>
                      <span>$360 billed annually as a reccuring payment</span>
                      <h5 className="my-[30px] lg:text-[20px] text-[18px] font-medium">
                        <b>50 downloads / month</b> <br />
                        <b>200 generations / month</b>
                      </h5>
                      <ul className="mb-[30px] m-0 p-0">
                        <li className="text-left ml-[20px] mb-[10px] list-disc">
                          14-day risk-free cancellation
                        </li>
                        <li className="text-left ml-[20px] mb-[10px] list-disc">
                          Annual plan
                        </li>
                        <li className="text-left ml-[20px] mb-[10px] list-disc">
                          Rollover unused credits for next year (excluding
                          cancellation or downgrade)
                        </li>
                      </ul>
                      <PricingButton text="Choose plan" />
                    </div>
                  </div>
                  <div className="col-span-12 md:col-span-6 lg:col-span-4 px-3">
                    <div className="p-[30px] relative mb-[30px] text-center rounded-[20px] bg-white shadow-custom border-[1px] border-[#638BBC]">
                      <div className="absolute bg-default text-white left-0 px-[10px] py-[5px] top-[20px]">
                        <img
                          className="absolute right-[-11px] top-0 inline-block max-w-full align-middle"
                          src="/src/assets/img/stk.svg"
                          alt=""
                        />
                        <h6 className="mb-0 text-[18px] font-medium leading-[1.2]">
                          <b>Best-seller</b>
                        </h6>
                      </div>
                      <h3 className="mb-0 text-[30px] text-default font-extrabold uppercase leading-none">
                        VIP
                      </h3>
                      <h1 className="mt-[20px] mb-[10px] font-bold text-[28px] md:text-[36px] lg:text-[40px]">
                        $35/mo
                      </h1>
                      <div className="flex items-center justify-center gap-[10px] mb-[10px]">
                        <del className="text-lg md:text-xl lg:text-2xl text-f-gray font-medium">
                          $70/mo
                        </del>
                        <span className="p-1.5 text-[#52C38C] font-bold rounded-[4px] bg-custom-green">
                          -50%
                        </span>
                      </div>
                      <span>$420 billed annually as a reccuring payment</span>
                      <h5 className="my-[30px] lg:text-[20px] text-[18px] font-medium">
                        <b>Unlimited generations</b> <br />
                        <b>and downloads</b>
                      </h5>
                      <ul className="mb-[30px] m-0 p-0">
                        <li className="text-left ml-[20px] mb-[10px] list-disc">
                          14-day risk-free cancellation
                        </li>
                        <li className="text-left ml-[20px] mb-[10px] list-disc">
                          Annual plan
                        </li>
                        <li className="text-left ml-[20px] mb-[10px] list-disc">
                          Rollover unused credits for next year (excluding
                          cancellation or downgrade)
                        </li>
                      </ul>
                      <PricingButton text="Choose plan" />
                    </div>
                  </div>
                </>
              ) : (
                <>
                  <div className="col-span-12 md:col-span-6 lg:col-span-4 px-3">
                    <div className="p-[30px] relative mb-[30px] text-center rounded-[20px] bg-white shadow-custom border-[1px] border-white">
                      <h4 className="mb-[20px] text-lg md:text-xl lg:text-2xl font-medium">
                        Basic
                      </h4>
                      <h1 className="mt-[20px] mb-[10px] font-bold text-[28px] md:text-[36px] lg:text-[40px]">
                        $25/mo
                      </h1>
                      <div className="flex items-center justify-center gap-[10px] mb-[10px]">
                        <del className="text-lg md:text-xl lg:text-2xl text-f-gray font-medium">
                          $50/mo
                        </del>
                        <span className="p-1.5 text-[#52C38C] font-bold rounded-[4px] bg-custom-green">
                          -50%
                        </span>
                      </div>
                      <span>$3/one download</span>
                      <h5 className="my-[30px] lg:text-[20px] text-[18px] font-medium">
                        <b>20 downloads / month</b> <br />
                        <b>100 generations / month</b>
                      </h5>
                      <PricingButton text="Choose plan" />
                    </div>
                  </div>
                  <div className="col-span-12 md:col-span-6 lg:col-span-4 px-3">
                    <div className="p-[30px] relative mb-[30px] text-center rounded-[20px] bg-white shadow-custom border-[1px] border-white">
                      <h4 className="mb-[20px] text-lg md:text-xl lg:text-2xl font-medium">
                        Pro
                      </h4>
                      <h1 className="mt-[20px] mb-[10px] font-bold text-[28px] md:text-[36px] lg:text-[40px]">
                        $40/mo
                      </h1>
                      <div className="flex items-center justify-center gap-[10px] mb-[10px]">
                        <del className="text-lg md:text-xl lg:text-2xl text-f-gray font-medium">
                          $80/mo
                        </del>
                        <span className="p-1.5 text-[#52C38C] font-bold rounded-[4px] bg-custom-green">
                          -50%
                        </span>
                      </div>
                      <span>$2/one download</span>
                      <h5 className="my-[30px] lg:text-[20px] text-[18px] font-medium">
                        <b>50 downloads / month</b> <br />
                        <b>200 generations / month</b>
                      </h5>
                      <PricingButton text="Choose plan" />
                    </div>
                  </div>
                  <div className="col-span-12 md:col-span-6 lg:col-span-4 px-3">
                    <div className="p-[30px] relative mb-[30px] text-center rounded-[20px] bg-white shadow-custom border-[1px] border-[#638BBC]">
                      <div className="absolute bg-default text-white left-0 px-[10px] py-[5px] top-[20px]">
                        <img
                          className="absolute right-[-11px] top-0 inline-block max-w-full align-middle"
                          src="/src/assets/img/stk.svg"
                          alt=""
                        />
                        <h6 className="mb-0 text-[18px] font-medium leading-[1.2]">
                          <b>Best-seller</b>
                        </h6>
                      </div>
                      <h3 className="mb-0 text-[30px] text-default font-extrabold uppercase leading-none">
                        VIP
                      </h3>
                      <h1 className="mt-[20px] mb-[10px] font-bold text-[28px] md:text-[36px] lg:text-[40px]">
                        $50/mo
                      </h1>
                      <div className="flex items-center justify-center gap-[10px] mb-[10px]">
                        <del className="text-lg md:text-xl lg:text-2xl text-f-gray font-medium">
                          $100/mo
                        </del>
                        <span className="p-1.5 text-[#52C38C] font-bold rounded-[4px] bg-custom-green">
                          -50%
                        </span>
                      </div>
                      <span>$1.75/one download</span>
                      <h5 className="my-[30px] lg:text-[20px] text-[18px] font-medium">
                        <b>Unlimited generations</b> <br />
                        <b>and downloads</b>
                      </h5>
                      <PricingButton text="Choose plan" />
                    </div>
                  </div>
                </>
              )}
            </div>
            <div className="flex items-center gap-[15px] rounded-[10px] bg-[#D6DDEF] px-[30px] mx-3 py-[15px]">
              <img
                className="align-middle"
                src="/src/assets/img/info-circle.svg"
                alt=""
              />
              <p className="font-bold text-[16px] md:text-[18px] lg:text-[20px] leading-[1.3]">
                Limited Time Deal: Don't miss your chance to save big with our
                irresistible launch offer! Get 50% off for life on all
                subscription plans when you sign up today
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="mb-[100px]">
        <div className="container md:max-w-[1280px] max-w-[450px] mx-auto">
          <div className="mx-[20px] md:mx-6">
            <div className="grid grid-cols-12">
              <div className="col-span-12">
                <div className="text-center mb-[100px]">
                  <h1 className="font-medium mb-2 text-[40px] md:text-[48px] lg:text-[60px]">
                    Buy more tokens
                  </h1>
                  <h5 className="mt-[20px] text-f-gray text-[18px] lg:text-[20px] font-medium mb-2">
                    1 token - 1 generation or 1 download
                  </h5>
                </div>
              </div>
              <TokenBlockGroup />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default PricingPage;
