import styles from './styles.module.css'

function ModalFormButton(props: {text: string}) {
  return (
    <button className={styles.btn}>
      {props.text}
    </button>
  );
}

export default ModalFormButton;
