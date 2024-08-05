import styles from './styles.module.css';

function HeroParagraph(props: {content: string}) {
  return (
    <p className={styles.heroParagraph}>
      {props.content}
    </p>
  );
}

export default HeroParagraph;
