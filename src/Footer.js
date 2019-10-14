import React from 'react';
import styles from './Footer.module.css'
import BlockTitle from "./BlockTitle"
import fecbook from './assets/img/fb.svg'

function Footer() {
    return (
        <div className={styles.footer}>
            <div className={styles.container}>
                <BlockTitle title={"Герчак Василь"}/>
                <div className={styles.socialBlock}>
                    <span className={styles.socialIcon}>
                        <a href="">
                            <img src={fecbook} alt=""/>
                        </a>
                    </span>
                    <span className={styles.socialIcon}>
                        <a href="">
                            <img src={fecbook} alt=""/>
                        </a>
                    </span>
                    <span className={styles.socialIcon}>
                        <a href="">
                            <img src={fecbook} alt=""/>
                        </a>
                    </span>
                    <span className={styles.socialIcon}>
                        <a href="">
                            <img src={fecbook} alt=""/>
                        </a>
                    </span>


                </div>
                <div className={styles.copyright}>© 2019 Всі права захищені</div>
            </div>
        </div>
    );
}

export default Footer;
