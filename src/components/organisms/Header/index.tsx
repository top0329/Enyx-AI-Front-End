import { Link } from 'react-router-dom';

import styles from './styles.module.css';
import Logo from '../../atoms/Logo';
import HeaderNavLinks from '../../molecules/HeaderNavLinks';
import HeaderButtonGroup from '../../molecules/HeaderButtonGroup';

function Header() {
  return (
    <div className={styles.headerContainer}>
      <div className={styles.headerGrid}>
        <div className={styles.logo}>
          <Link to="/">
            <Logo />
          </Link>
        </div>
        <div className={styles.headerPart}>
          <div className={styles.headerFlex}>
            <nav className="block">
              <HeaderNavLinks />
            </nav>
            <HeaderButtonGroup />
          </div>
        </div>
        <div className='col-span-2 px-3 text-center block box-border md:hidden'>
          {' '}
          <div className="box-border text-center">
            <button className="w-[30px] h-[35px] float-right relative box-border">
              <span className='w-full h-[2px] bg-black block relative top-[-4px] rounded-[30px] box-border text-center'></span>
              <span className='w-full h-[2px] bg-black block relative top-1 rounded-[30px] box-border text-center'></span>
              <span className='ml-3 w-3/5 h-[2px] bg-black block relative top-[12px] rounded-[30px] box-border text-center'></span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
