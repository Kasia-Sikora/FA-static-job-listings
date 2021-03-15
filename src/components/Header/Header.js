import React from 'react'
import { ReactComponent as HeaderMobileLogo } from "../../assets/images/bg-header-mobile.svg";
import { ReactComponent as HeaderDesktopLogo } from "../../assets/images/bg-header-desktop.svg";
import styles from './Header.module.scss';

const Header = () => {
    return (
        <div className={styles.header}>
        <HeaderMobileLogo className={styles.mobileLogo} />
        <HeaderDesktopLogo className={styles.logo} />
        <div className={styles.opacity} />
      </div>
    )
}

export default Header
