import React from 'react';
import styles from './NavMenu.module.css'

function NavMenu() {
    return (
        <div className={styles.nav}>
            <a href="" className={styles.link}>Головна</a>
            <a href="" className={styles.link}>Скіли</a>
            <a href="" className={styles.link}>Проекти</a>
            <a href="" className={styles.link}>Контакти</a>
        </div>
    )
}

export default NavMenu;
