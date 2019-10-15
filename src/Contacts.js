import React from 'react';
import styles from './Contacts.module.css'
import BlockTitle from "./BlockTitle";
import {Fade} from "react-reveal";

function Contacts() {
    return (
        <div id={"contacts"} className={styles.contacts}>
            <Fade clear>
                <div className={styles.container}>
                    <BlockTitle title={"Контакти"}/>
                    <form className={styles.formWrapper}>
                        <input className={styles.formArea} type="text" placeholder="Імя"/>
                        <input className={styles.formArea} type="text" placeholder="E-mail"/>
                        <textarea className={styles.messageArea} placeholder="Ваше повідомлення"></textarea>
                        <button className={styles.btnSubmit} type="submit">Відправити</button>
                    </form>
                </div>
            </Fade>
        </div>
    );
}

export default Contacts;
