import { Link } from 'react-router-dom';
import styles from './styles.module.css';

function FooterNav() {
  return (
    <ul className="flex flex-col md:flex-row gap-[20px] md:gap-[40px] mb-[40px] md:mb-0">
      <li>
        <Link to={'/about'} className={styles.footerNav}>
          About us
        </Link>
      </li>
      <li>
        <Link to={'/pricing'} className={styles.footerNav}>
          Pricing
        </Link>
      </li>
      <li>
        <button className={styles.footerNav}>Start generating</button>
      </li>
    </ul>
  );
}

export default FooterNav;
