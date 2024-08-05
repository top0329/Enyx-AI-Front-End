import styles from './styles.module.css';

function SocialLink(props: { path: string; social: string }) {
  return (
    <a href={props.path} className={styles.socialLink}>
      <i className={`fab fa-${props.social}`}></i>
    </a>
  );
}

export default SocialLink;
