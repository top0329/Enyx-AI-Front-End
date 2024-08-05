function NewsLetter() {
  return (
    <div className="py-[100px] bg-custom-image md:bg-center bg-inherit bg-cover">
      <div className="container md:max-w-[1280px] max-w-[450px] mx-auto">
        <div className="mx-6 flex flex-wrap px-3 justify-center items-center">
          <div className="text-center text-white">
            <h1 className="leading-[1.2] mb-[20px] text-[28px] md:text-[36px] lg:text-[40px] font-medium">
              Ready to generate 3D models?
            </h1>
            <button className="px-[30px] py-[14px] rounded-[10px] box-border uppercase font-bold inline-block border-[1px] border-white bg-white text-default leading-[1.3] text-center text-[14px] md:text-[15px] lg:text-[16px]">
              Join for free
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NewsLetter;
