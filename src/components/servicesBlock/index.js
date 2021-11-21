import React from 'react';
import Layout from '../layout';
import * as styles from './styles.module.scss';

const ServicesBlock = () => {
  return (
    <Layout>
      <div className={styles.serviceBlock}>
          <h1 className={styles.serviceBlockTitle}>
            <span>Nossos serviços</span>
          </h1>
      </div>
    </Layout>
  );
};

export default ServicesBlock;
