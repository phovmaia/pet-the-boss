import * as React from 'react';
import { Link, StaticImage } from 'gatsby';
import * as styles from './styles.module.scss';


// TODO Devide the real worlds for those links and "Agende agora 🐶" decide title and icon
const NavBar = () => {
  return (
    <div className={styles.navbar}>
        <div className={styles.navbarInner}>
          <div className={styles.navbarLeft}>
            <a className={styles.logo}>
              Pet The Boss
            </a>
            <ul className={styles.list}>
              <li className={styles.listItem}>
                <a href="#">Sobre</a>
              </li>
              <li className={styles.listItem}>
                <a href="#">Serviços</a>
              </li>
            </ul>
            <a className={styles.contact} href="https://www.instagram.com/pet.theboss/">
              <img src="https://img.icons8.com/fluency/48/000000/instagram-new.png" />
            </a>
          </div>
          <a
            className={styles.cta}
            href="https://api.whatsapp.com/send?phone=5585981859811"
          >
            Agende agora 🐶
          </a>
        </div>
    </div>
  );
};

export default NavBar;
