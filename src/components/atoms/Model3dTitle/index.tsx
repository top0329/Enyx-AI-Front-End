import styles from './styles.module.css';

function Model3dTitle() {
  return (
    <div className={styles.model3dTitle}>
      <h1 className={styles.model3dTitleHeading}>
        Explore examples of models you <br className='hidden md:block' /> can generate with{' '}
        <span className={styles.model3dTitleSpan}>EnyxAI Prompt</span>
      </h1>
    </div>
  );
}

export default Model3dTitle;
