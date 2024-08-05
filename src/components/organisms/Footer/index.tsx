import { Link } from 'react-router-dom';

import styles from './styles.module.css';
import Logo from '../../atoms/Logo';
import FooterNav from '../../molecules/FooterNav';
import SocialLinks from '../../molecules/SocialLinks';
import BottomNav from '../../molecules/BottomNav';

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>
        <div className={styles.footerFlex}>
          <div className={styles.logoFlex}>
            <Link to="/">
              <Logo />
            </Link>
          </div>
          <div className={styles.footerNavFlex}>
            <FooterNav />
          </div>
          <div className={styles.socialLinkFlex}>
            <SocialLinks />
          </div>
          <div className={styles.bottomNavFlex}>
            <div className={styles.bottomNav}>
              <BottomNav />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
