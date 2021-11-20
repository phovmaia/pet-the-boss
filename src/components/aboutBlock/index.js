import * as React from 'react';

import * as styles from './styles.module.scss';


const AboutBlock = () => {
  return (
    <div className={styles.aboutBlock}>
        <h1 className={styles.aboutBlockTitle}>
          <span>Sobre nós</span>
        </h1>
        <h2 className={styles.aboutBlockText}>
          Mussum Ipsum, cacilds vidis litro abertis. Pra lá , depois divoltis
          porris, paradis. In elementis mé pra quem é amistosis quis leo. Mauris
          nec dolor in eros commodo tempor. Aenean aliquam molestie leo, vitae
          iaculis nisl. Quem num gosta di mé, boa gentis num é. Si num tem leite
          então bota uma pinga aí cumpadi! Quem manda na minha terra sou euzis!
          Mais vale um bebadis conhecidiss, que um alcoolatra anonimis.
          Interessantiss quisso pudia ce receita de bolis, mais bolis eu num
          gostis.
        </h2>
    </div>
  );
};

export default AboutBlock;
