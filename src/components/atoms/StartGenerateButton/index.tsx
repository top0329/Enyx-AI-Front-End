import styles from './styles.module.css'

function StartGenerateButton(props: {text: string}) {
  return (
    <div className={styles.startBtn}>
      {props.text}
    </div>
  );
}

export default StartGenerateButton;
