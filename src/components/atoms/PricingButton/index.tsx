import React from 'react';

function PricingButton(props: {text: string}) {
  return (
    <button className="bg-none text-default py-[14px] px-[20px] md:px-[30px] rounded-[10px] box-border uppercase font-bold inline-block border-[1px] border-default leading-[1.3] text-center w-full text-sm md:text-[15px] lg:text-base">
      {props.text}
    </button>
  );
}

export default PricingButton;
