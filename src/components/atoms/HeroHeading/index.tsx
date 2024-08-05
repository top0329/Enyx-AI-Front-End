import styles from './styles.module.css';

function HeroHeading(props: { spanText: string; headingText: string }) {
  return (
    <h1 className={styles.heroHeading}>
      <span className={styles.heroSpan}>{props.spanText}</span>{' '}
      {props.headingText}
    </h1>
  );
}

export default HeroHeading;
