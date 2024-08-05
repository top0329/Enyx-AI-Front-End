import HeroTitle from '../../molecules/HeroTitle';
import HeroButtonGroup from '../../molecules/HeroButtonGroup';
import HeroImage from '../../atoms/HeroImage';
import About from '../../organisms/About';
import NewsLetter from '../../organisms/NewsLetter';

function AboutPage() {
  return (
    <>
      <section className="pb-[50px] bg-grey">
        <div className="container md:max-w-[1280px] max-w-[450px] mx-auto">
          <div className="grid grid-cols-12 mx-6">
            <div className="col-span-12 lg:col-span-7 px-3 pt-[70px]">
              <HeroTitle
                heroTitle={'About us'}
                heroTitleSpan={''}
                heroContent={
                  'Welcome to Enyx AI, where innovation and AI-driven technology merge to revolutionize the world of 3D shape generation. Founded by two ambitious young entrepreneurs, our company is dedicated to providing developers with a powerful tool that simplifies the process of creating stunning 3D shapes'
                }
              />
              <HeroButtonGroup
                loginButtonText={'See plans'}
                joinButtonText={'Join for free'}
              />
            </div>
            <div className="col-span-12 lg:col-span-5">
              <HeroImage path={'/src/assets/img/camera-img.svg'} />
            </div>
          </div>
        </div>
      </section>
      <About />
      <NewsLetter />
    </>
  );
}

export default AboutPage;
