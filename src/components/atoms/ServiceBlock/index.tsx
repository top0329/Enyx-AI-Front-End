function ServiceBlock(props: { imagePath: string; text: string }) {
  return (
    <div className="text-center block">
      <i className="mb-[20px] h-[80px] flex items-center justify-center">
        <img src={props.imagePath} alt="" />
      </i>
      <p className="text-[16px] lg:text-[20px] md:text-[18px] text-f-gray max-w-custom mb-3 leading-[1.3]">
        {props.text}
      </p>
    </div>
  );
}

export default ServiceBlock;
