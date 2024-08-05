import styles from './styles.module.css';

function HeroImage(props: {path: string}) {
  return (
    <div className={styles.heroImage}>
      <img src={props.path} alt="" />
    </div>
  );
}

export default HeroImage;
