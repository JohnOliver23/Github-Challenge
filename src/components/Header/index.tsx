import React from 'react';
import Logo from 'assets/img/logo.jpg';
import Dock from 'assets/img/logo-black.png';
import styles from './styles.module.scss';

export default function Header() {
  return (
    <header className={styles.headerContainer}>
      <div className={styles.logoContainer}>
        <img className={styles.logo} src={Logo} alt="Github Search" />
        <h2>Github Search</h2>
      </div>

      <p>Best repository search site</p>

      <span className={styles.logoDockContainer}>
        <img src={Dock} alt="Dock" />
      </span>
    </header>
  );
}
