import PricingButton from "../PricingButton";

function TokenBlock(props: { price: string, tokens: string, pricePerToken: string }) {
  return (
    <div className="rounded-[20px] border-[1px] border-grey bg-white shadow-custom mb-[8px] py-[20px] px-[10px] text-center flex flex-col gap-y-[20px]">
      <h2 className="font-bold text-default m-0 xl:text-4xl lg:text-3xl md:text-[32px] text-2xl">
        {props.price}
      </h2>
      <h1 className="font-bold m-0 md:w-max-content ml-auto mr-auto text-[28px] md:text-[36px] lg:text-[26px] xl:text-[40px] w-auto">
        {props.tokens}<br className="md:hidden block" /> tokens
      </h1>
      <PricingButton text="Buy tokens" />
      <h5 className="text-f-gray text-[16px] md:text-[18px] lg:text-[20px] font-medium">
        {props.pricePerToken}
      </h5>
    </div>
  );
}

export default TokenBlock;
