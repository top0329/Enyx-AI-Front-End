import React from 'react';
import { Link } from 'react-router-dom';

import styles from './styles.module.css';

function NavLink(props: {path: string, text: string}) {
  return (
    <Link
      to={props.path}
      className={styles.link}
    >
      {props.text}
    </Link>
  );
}

export default NavLink;
