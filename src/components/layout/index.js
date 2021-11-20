import * as React from "react";
import * as styles from './styles.module.scss';

const Layout = ({ children }) => {
    return (
        <div className={styles.layout}>
        <main>{children}</main>
      </div> 
    )
};

export default Layout;