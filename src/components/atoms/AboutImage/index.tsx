import styles from './styles.module.css';

function AboutImage(props: { path: string }) {
  return (
    <div className={styles.aboutImage}>
      <img src={props.path} alt="" />
    </div>
  );
}

export default AboutImage;
