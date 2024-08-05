import NavLink from '../../atoms/NavLink';
import styles from './styles.module.css'

function HeaderNavLinks() {
  const data: any = {
    about: { path: '/about', text: 'About us' },
    pricing: { path: '/pricing', text: 'Pricing' },
  };
  const items = Object.keys(data).map((key) => {
    const { path, text } = data[key];
    return (
      <li className='inline-block list-none' key={key}>
        <NavLink path={path} text={text} />
      </li>
    );
  });
  return <ul className={styles.headerNavLinks}>{items}</ul>;
}

export default HeaderNavLinks;
