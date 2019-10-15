import React from 'react';
import styles from './Slogan.module.css'
import {Fade} from "react-reveal";


function Slogan() {
    return (
        <div className={styles.slogan}>
            <Fade clear>
                <div className={styles.container}>
                    <div className={styles.head}>Розглядаю варіант дистанційної роботи</div>
                    <button className={styles.btnShow}>Найняти</button>
                </div>
            </Fade>
        </div>
    );
}

export default Slogan;
