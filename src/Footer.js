import React from 'react';
import styles from './Footer.module.css'
import BlockTitle from "./BlockTitle"
import fecbook from './assets/img/fb.svg'
import {Fade} from "react-reveal";

function Footer() {
    return (
        <div className={styles.footer}>
            <Fade clear>
                <div className={styles.container}>
                    <BlockTitle title={"Герчак Василь"}/>
                    <div className={styles.socialBlock}>
                        <div className={styles.socialIcon}>
                            <a href="">
                                <img src={fecbook} alt=""/>
                            </a>
                        </div>
                        <div className={styles.socialIcon}>
                            <a href="">
                                <img src={fecbook} alt=""/>
                            </a>
                        </div>
                        <div className={styles.socialIcon}>
                            <a href="">
                                <img src={fecbook} alt=""/>
                            </a>
                        </div>
                        <div className={styles.socialIcon}>
                            <a href="">
                                <img src={fecbook} alt=""/>
                            </a>
                        </div>


                    </div>
                    <div className={styles.copyright}>© 2019 Всі права захищені</div>
                </div>
            </Fade>
        </div>
    );
}

export default Footer;
