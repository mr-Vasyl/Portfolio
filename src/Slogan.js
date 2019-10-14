import React from 'react';
import styles from './Slogan.module.css'

function Slogan() {
    return (
        <div className={styles.slogan}>
            <div className={styles.container}>
                <div className={styles.head}>Розглядаю варіант дистанційної роботи</div>
                <button className={styles.btnShow}>Найняти мене</button>
            </div>
        </div>
    );
}

export default Slogan;
