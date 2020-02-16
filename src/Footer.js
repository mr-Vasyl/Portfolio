import React from 'react';

import s from './Footer.module.css'
import facebook from './assets/img/facebook.svg'
import github from './assets/img/github.svg'
import codewars from './assets/img/codewars.svg'

const Footer = () => {
    return (
        <div className={s.footer}>
            <div className={s.container}>
                <div className={s.socialBlock}>
                    <div className={s.socialIcon}>
                        <a href=""> <img src={github} alt=""/></a>
                    </div>
                    <div className={s.socialIcon}>
                        <a href=""> <img src={facebook} alt=""/></a>
                    </div>
                    <div className={s.socialIcon}>
                        <a href=""> <img src={codewars} alt=""/></a>
                    </div>
                </div>
                <div className={s.copyright}>© 2019 Всі права захищені</div>
            </div>
        </div>
    );
}

export default Footer;
