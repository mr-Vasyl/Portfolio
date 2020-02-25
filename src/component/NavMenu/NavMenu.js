import React from 'react';
import s from './NavMenu.module.css'

const NavMenu = () => {
    const link = s.link + " " + s.transition;
    return (
        <div className={s.nav}>
            <a href="#home" className={link}>Home</a>
            <a href="#skills" className={link}>Skills</a>
            <a href="#projects" className={link}>Works</a>
            <a href="#contacts" className={link}>Contacts</a>

        </div>
    )
}

export default NavMenu;
