import React, { useState, useEffect } from 'react';

import styles from './styles.module.css';
import LoginButton from '../../atoms/LoginButton';
import StartGenerateButton from '../../atoms/StartGenerateButton';

function HeaderButtonGroup() {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleWindowSizeChange = () => {
      setWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleWindowSizeChange);
    return () => {
      window.removeEventListener('resize', handleWindowSizeChange);
    };
  });
  return (
    <div className={styles.headerButtonGroup}>
      <div className={styles.loginButton}>
        <LoginButton text={'Login'} />
      </div>
      <div className={styles.startGenerateButton}>
        <StartGenerateButton text={width < 768 ? 'Start' : 'Start Generate'} />
      </div>
    </div>
  );
}

export default HeaderButtonGroup;
