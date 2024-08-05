import styles from './styles.module.css'
import JoinButton from '../../atoms/JoinButton';
import SeeplansButton from '../../atoms/SeeplansButton';

function HeroButtonGroup(props: {joinButtonText:string, loginButtonText:string}) {
  return (
    <div className={styles.heroButtonGroupFlex}>
      <JoinButton text={props.joinButtonText} />
      <SeeplansButton text={props.loginButtonText} />
    </div>
  );
}

export default HeroButtonGroup