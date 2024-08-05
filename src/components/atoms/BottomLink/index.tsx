import { Link } from 'react-router-dom';

import styles from './styles.module.css';

function BottomLink(props: { path: string; text: string }) {
  return (
    <Link to={props.path} className={styles.bottomLink}>
      {props.text}
    </Link>
  );
}

export default BottomLink;
