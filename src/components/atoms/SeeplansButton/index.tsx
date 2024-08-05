import { useNavigate } from 'react-router-dom';
import styles from './styles.module.css';

function SeeplansButton(props: { text: string }) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/pricing');
  };

  return (
    <button className={styles.btn} onClick={handleClick}>
      {props.text}
    </button>
  );
}

export default SeeplansButton;
