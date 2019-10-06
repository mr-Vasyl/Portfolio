import React from 'react';
import styles from './Contacts.module.css'

function Contacts() {
    return (
        <div className={styles.contacts}>
            <div className={styles.container}>
                <span className={styles.blockTitle}>Контакти</span>
                <form className={styles.formWrapper}>
                    <input className={styles.formArea} type="text" placeholder="Імя"/>
                    <input className={styles.formArea} type="text" placeholder="E-mail"/>
                    <textarea className={styles.messageArea}  placeholder="Ваше повідомлення"></textarea>
                    <button className={styles.btnSubmit} type="submit">Відправити</button>
                </form>
            </div>
        </div>
    );
}

export default Contacts;
