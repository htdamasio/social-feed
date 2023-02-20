import styles from './Header.module.css'
import SocialLogo from '../assets/social-logo.svg'

export function Header() {
  return (
    <header className={styles.header}>
      <img src={SocialLogo} alt="Social Logo"/>
      <strong>Social Feed</strong>
    </header>
  );
}