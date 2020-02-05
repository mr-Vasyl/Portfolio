import React from 'react';
import styles from './Footer.module.css'
import BlockTitle from "./BlockTitle"
import fecbook from './assets/img/facebook.svg'
import github from './assets/img/github.svg'
import codewars from './assets/img/codewars.svg'

import {Fade} from "react-reveal";

function Footer() {
    return (
        <div className={styles.footer}>
            <Fade clear>
                <div className={styles.container}>
                    
                    <div className={styles.socialBlock}>
                        <div className={styles.socialIcon}>
                            <a href="">
                                <img src={github} alt=""/>
                            </a>
                        </div>
                        <div className={styles.socialIcon}>
                            <a href="">
                                <img src={fecbook} alt=""/>
                            </a>
                        </div>
                        <div className={styles.socialIcon}>
                            <a href="">
                                <img src={codewars} alt=""/>
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
