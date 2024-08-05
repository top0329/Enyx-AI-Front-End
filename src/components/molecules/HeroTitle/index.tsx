import HeroHeading from '../../atoms/HeroHeading';
import HeroParagraph from '../../atoms/HeroParagraph';

function HeroTitle(props: {heroTitle: string, heroTitleSpan: string, heroContent: string}) {
  return (
    <div className='md:text-center md:px-[41px] lg:text-left lg:px-0'>
      <HeroHeading
        spanText={props.heroTitleSpan}
        headingText={props.heroTitle}
      />
      <HeroParagraph
        content={props.heroContent}
      />
    </div>
  );
}

export default HeroTitle;
