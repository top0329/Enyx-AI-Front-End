import ServiceBlockGroup from '../../molecules/ServiceBlockGroup';

function Service() {
  return (
    <section className="py-[100px]">
      <div className="container md:max-w-[1280px] max-w-[450px] mx-auto">
        <div className="mx-6">
          <div className="flex-row">
            <div className="mb-[100px]">
              <h1 className="text-[28px] md:text-[36px] lg:text-[40px] font-medium text-black font-[Satoshi]">
                Share and embed 3D models <br />{' '}
                <span className="text-default">anywhere online</span>
              </h1>
            </div>
            <div className="mb-[100px]">
              <ServiceBlockGroup />
            </div>
          </div>
          <div className="grid grid-cols-12">
            <div className="lg:col-span-4 md:col-span-6 col-span-12 flex-auto px-3">
              <div className="flex flex-col justify-between px-[30px] py-[10px] h-full border-box">
                <div>
                  <h1 className="mb-[20px] text-[28px] md:text-[36px] lg:text-[40px] font-medium text-black leading-[1.2] mt-0">
                    Ethical AI
                  </h1>
                  <p className="mb-[10px] leading-[1.2] text-[19px] text-f-gray">
                    We at EnyxAI care about ethical AI. We don’t use data from
                    the internet that may cause legal or ethical problems. We
                    create our own data in-house, so you can trust our
                    technology.
                  </p>
                  <p className="mb-[10px] leading-[1.2] text-[19px] text-f-gray">
                    We're excited to offer our customers a new and innovative
                    way to bring their ideas to life, without copyright or
                    ethical concerns.
                  </p>
                </div>
                <button className="bg-none text-default font-bold mt-[50px] py-3.5 w-full box-border uppercase border rounded-[10px] inline-block text-center leading-[1.3]">
                  Start generating
                </button>
              </div>
            </div>
            <div className="lg:col-span-4 md:col-span-6 col-span-12 flex-auto px-3 py-[40px] my-[40px] md:py-0 md:my-0 lg:border-l-[1px] lg:border-r-[1px] md:border-t-0 md:border-b-0 border-t-[1px] border-b-[1px]">
              <div className="flex flex-col justify-between px-[35px] py-[10px] h-full text-f-gray">
                <div>
                  <h1 className="mb-[20px] text-[28px] md:text-[36px] lg:text-[40px] font-medium text-black leading-[1.2] mt-0">
                    Key Technical Features
                  </h1>
                  <p className="mb-[10px] leading-[1.2] text-[19px] text-f-gray">
                    Unique models within a few minutes (you won’t find them
                    anywhere else).
                  </p>
                  <p className="mb-[10px] leading-[1.2] text-[19px] text-f-gray">
                    Currently we support a few sample object categories. We
                    constantly add more and improve existing ones!
                  </p>
                  <p className="mb-[10px] leading-[1.2] text-[19px] text-f-gray">
                    Adjustable texture and mesh quality. Models are divided into
                    semantically meaningful parts, ready for download (.glb,
                    .blend, .fbx) and further editing.
                  </p>
                </div>
                <button className="bg-none text-default font-bold mt-[50px] py-3.5 w-full box-border uppercase border rounded-[10px] inline-block text-center leading-[1.3]">
                  Download an example
                </button>
              </div>
            </div>
            <div className="lg:col-span-4 md:col-span-6 col-span-12 flex-auto px-3">
              <div className="flex flex-col justify-between px-[30px] py-[10px] h-full">
                <div>
                  <h1 className="mb-[20px] text-[28px] md:text-[36px] lg:text-[40px] font-medium text-black leading-[1.2] mt-0">
                    Affordable 3D generation
                  </h1>
                  <p className="mb-[10px] leading-[1.2] text-[19px] text-f-gray">
                    We use unique generative AI technology to significantly
                    reduce the human labor required to create 3D models and save
                    costs, making 3D modeling accessible to everyone regardless
                    of their budget.
                  </p>
                  <p className="mb-[10px] leading-[1.2] text-[19px] text-f-gray">
                    While accuracy may vary depending on the complexity of the
                    text prompt, we're committed to ensuring that our models
                    meet contemporary industry quality standards.
                  </p>
                </div>
                <button className="bg-none text-default font-bold mt-[50px] py-3.5 w-full box-border uppercase border rounded-[10px] inline-block text-center leading-[1.3]">
                  Check our pricing
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Service;
