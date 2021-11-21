import React from 'react';
import Layout from '../layout';
import * as styles from './styles.module.scss';

const IntroBlock = () => {
  // TODO add images introblock 1, 2 and 3 btw h1 and h1
  return (
    <div className={styles.introBlock}>
        <h1 className={styles.introBlockText}>
        Estética animal de um jeito completamente diferente
        </h1>
        <img
          className={styles.introBlockPicture}
          src="https://i.postimg.cc/9MGYRRp4/intro-Block1.jpg"
          alt="Snoopy no banho"
          height="300x240"
        />
        <img
          className={styles.introBlockPicture}
          src="https://i.postimg.cc/GtKPKW6d/intro-Block2.jpg"
          alt="Snoopy no banho"
          height="300x240"
        />
        <img
          className={styles.introBlockPicture}
          src="https://i.postimg.cc/j2tQzxgM/intro-Block3.jpg"
          alt="Snoopy no banho"
          height="300x240"
        />
        <h1 className={styles.introBlockText}>
        <span>Sem uso de gaiolas ou amarras, adestramento positivo, banho climatizado e relaxante e muito mais!</span>
        </h1>
    </div>
  );
};

export default IntroBlock;
