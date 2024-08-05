import React from 'react'

import styles from './styles.module.css'
import BottomLink from '../../atoms/BottomLink';

function BottomNav() {
  const data: any = {
    termsOfUse: {path: '#', text: 'Terms of Use'},
    privacyPolicy: {path: '#', text: 'Privacy Policy'},
  }
  const items = Object.keys(data).map((key) => {
    const { path, text } = data[key];
    return <li key={key}><BottomLink path={path} text={text} /></li>
  })
  return (
    <ul className={styles.bottomNav}>
      {items}
    </ul>
  );
}

export default BottomNav