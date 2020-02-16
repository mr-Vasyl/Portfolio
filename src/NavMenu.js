import React from 'react';

import s from './NavMenu.module.css'

function NavMenu() {
    return (
        <div className={s.nav}>
           <a href="#home" className={s.link}>Home</a>
            <a href="#skills" className={s.link}>Skills</a>
            <a href="#projects" className={s.link}>Works</a>
            <a href="#contacts" className={s.link}>Contacts</a>
        </div>
    )
}

export default NavMenu;
