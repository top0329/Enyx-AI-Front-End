import AboutImage from '../../atoms/AboutImage';

function About() {
  return (
    <section className="pt-[100px]">
      <div className="container md:max-w-[1280px] max-w-[450px] mx-auto">
        <div className="mx-6">
          <div className="grid grid-cols-2 items-center mb-[100px]">
            <div className="col-span-2 px-3 mb-[60px] md:mb-[50px] lg:mb-[100px]">
              <h1 className="text-[28px] md:text-[36px] lg:text-[40px] mb-2 font-medium text-black font-[Satoshi]">
                What’s <span className="text-default">Enyx AI?</span>
              </h1>
            </div>
            <div className="col-span-2 lg:col-span-1 p-3">
              <p className="font-normal text-[16px] md:text-[18px] lg:text-[20px] text-f-gray leading-[1.3] mb-3">
                At Enyx AI, we understand the challenges that developers face
                when it comes to generating complex 3D designs. With our
                state-of-the-art AI algorithms, we have developed an advanced
                solution that empowers developers to effortlessly transform text
                into captivating 3D visuals.
              </p>

              <p className="font-normal text-[16px] md:text-[18px] lg:text-[20px] text-f-gray leading-[1.3] mb-3">
                Driven by our passion for technology and creativity, our team of
                skilled professionals specializes in AI and computer graphics.
                We are committed to pushing the boundaries of what is possible
                in the realm of 3D generation. Our mission is to empower
                developers by offering them an innovative tool that streamlines
                their workflow and unlocks their creative potential.
              </p>
            </div>
            <div className="col-span-2 lg:col-span-1">
              <AboutImage path="/src/assets/img/about-1.png" />
            </div>
          </div>
          <div className="flex lg:flex-row items-center mb-0 md:mb-[70px] lg:mb-[100px] flex-col-reverse">
            <div className="basis-1/2">
              <AboutImage path="/src/assets/img/about-2.png" />
            </div>
            <div className="basis-1/2 px-3 pb-[30px] lg:pb-0">
              <p className="font-normal text-[16px] md:text-[18px] lg:text-[20px] text-f-gray leading-[1.3] mb-3">
                Our AI-powered text to 3D generation tool is designed to cater
                to a wide range of industries. Whether you are a video game
                developer, an architect, or working in virtual reality
                experiences, Enyx AI is here to simplify and enhance your
                creative process. Say goodbye to time-consuming manual 3D design
                tasks and embrace the future of efficient shape generation.
              </p>

              <p className="font-normal text-[16px] md:text-[18px] lg:text-[20px] text-f-gray leading-[1.3] mb-3">
                We pride ourselves on delivering a seamless user experience and
                providing exceptional customer support. Your success is our
                priority, and we are constantly improving our technology to meet
                your evolving needs. We strive to offer you a tool that not only
                meets but exceeds your expectations.
              </p>

              <p className="font-normal text-[16px] md:text-[18px] lg:text-[20px] text-f-gray leading-[1.3] mb-3">
                Join us on this exhilarating journey as we reshape the landscape
                of 3D generation. Stay up-to-date with the latest developments
                and gain access to exclusive resources by signing up for our
                newsletter. Together, let's unlock a new dimension of creativity
                and transform the way we bring ideas to life in the world of 3D.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
