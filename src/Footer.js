import React from 'react';
import styles from './Footer.module.css'

function Footer() {
    return (
        <div className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.blockTitle}>Герчак Василь</div>
                <div className={styles.socialBlock}>
                    <span className={styles.socialIcon}></span>
                    <span className={styles.socialIcon}></span>
                    <span className={styles.socialIcon}></span>
                    <span className={styles.socialIcon}></span>
                    <span className={styles.socialIcon}></span>
                    <span className={styles.socialIcon}></span>

                </div>
                <div className={styles.copyright}>© 2019 Всі права захищені</div>
            </div>
        </div>
    );
}

export default Footer;
