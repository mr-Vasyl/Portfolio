import React from 'react';
import styles from './NavMenu.module.css'

function NavMenu() {
    return (
        <div className={styles.nav}>
            <a href="" className={styles.link}>Home</a>
            <a href="" className={styles.link}>Skills</a>
            <a href="" className={styles.link}>Works</a>
            <a href="#contacts" className={styles.link}>Contacts</a>
        </div>
    )
}

export default NavMenu;
