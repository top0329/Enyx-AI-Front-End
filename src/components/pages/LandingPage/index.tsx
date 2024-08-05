import Hero from '../../organisms/Hero';
import Service from '../../organisms/Service';
import Model3dArea from '../../organisms/Model3dArea';
import NewsLetter from '../../organisms/NewsLetter';

function LandingPage() {
  return (
    <>
      <Hero
        heroTitle=" models for your work"
        heroTitleSpan="Ready-made "
        heroImagePath="/src/assets/img/hro-img.png"
        heroContent="Generate high-quality 3D models, automatically, in certain object categories using text-prompts. Now in beta!"
        heroMainStyle='col-span-6'
        heroImageStyle='col-span-6 w-full max-w-full'
      />
      <Service />
      <Model3dArea />
      <NewsLetter />
    </>
  );
}

export default LandingPage;
