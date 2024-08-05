import React from 'react';

import styles from './styles.module.css';

function JoinButton(props: { text: string }) {
  return <button className={styles.joinBtn}>{props.text}</button>;
}

export default JoinButton;
