import { useState } from 'react';
import styles from './styles.module.css';
import LoginModel from '../../organisms/LoginModal';

function LoginButton(props: { text: string }) {
  const [modalShow, setModalShow] = useState<boolean>(false);

  const handleModalShow = () => {
    setModalShow(!modalShow);
    console.log(modalShow);
  };

  return (
    <>
      <button className={styles.btn} onClick={handleModalShow}>
        {props.text}
      </button>
      {modalShow && (
        <div
          className="fixed w-screen h-screen top-0 left-0 flex items-center justify-center z-[1050] bg-opacity-20"
          onClick={handleModalShow}
        >
          <LoginModel />
        </div>
      )}
    </>
  );
}

export default LoginButton;
