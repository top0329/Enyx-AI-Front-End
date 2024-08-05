import styles from './styles.module.css';
import HeroTitle from '../../molecules/HeroTitle';
import HeroButtonGroup from '../../molecules/HeroButtonGroup';
import HeroImage from '../../atoms/HeroImage';

function Hero(props: {heroTitle: string, heroTitleSpan: string, heroImagePath: string, heroContent: string, heroMainStyle: string, heroImageStyle: string }) {
  return (
    <section className={styles.heroSection}>
      <div className={styles.heroContainer}>
        <div className={styles.heroGrid}>
          <div className={props.heroMainStyle}>
            <HeroTitle heroTitle={props.heroTitle} heroTitleSpan={props.heroTitleSpan} heroContent={props.heroContent} />
            <HeroButtonGroup
              loginButtonText={'See plans'}
              joinButtonText={'Join for free'}
            />
          </div>
          <div className={props.heroImageStyle}>
            <HeroImage path={props.heroImagePath} />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
