import React from 'react';

import s from './Footer.module.css'
import linkedin from '../../assets/img/linkedin.svg'
import github from '../../assets/img/github.svg'
import codewars from '../../assets/img/codewars.svg'

const Footer = () => {
    return (
        <div className={s.footer}>
            <div className={s.container}>
                <div className={s.socialBlock}>
                    <div className={s.socialIcon}>
                        <a href="https://github.com/mr-Vasyl"> <img src={github} alt="github"/></a>
                    </div>
                    <div className={s.socialIcon}>
                        <a href="https://www.linkedin.com/in/vasyl-herchak/"> <img src={linkedin} alt="facebook"/></a>
                    </div>
                    <div className={s.socialIcon}>
                        <a href="https://www.codewars.com/users/mr-Vasyl"> <img src={codewars} alt="codewars"/></a>
                    </div>
                </div>
                <div className={s.copyright}>© 2019 Всі права захищені</div>
            </div>
        </div>
    );
}

export default Footer;
