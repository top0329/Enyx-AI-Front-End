import styles from './styles.module.css';
import logo from '../../../assets/img/logo.svg';

function Logo() {
  return <img className={styles.logoButton} src={logo} />;
}

export default Logo;
