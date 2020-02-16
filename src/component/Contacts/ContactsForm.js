import React from 'react';

import s from './ContactsForm.module.css'
import BlockTitle from "../BlockTitle/BlockTitle";


// In the process of work

function ContactsForm() {

    return (
        <div id={"contacts"} className={s.contacts}>
            <div className={s.container}>
                <BlockTitle title={"Напишіть мені"}/>
                <form className={s.formWrapper}>
                    <input className={s.formArea} type="text" placeholder="Імя"/>
                    <input className={s.formArea} type="text" placeholder="E-mail"/>
                    <button className={s.btnSubmit} type="submit">Відправити</button>
                </form>
            </div>
        </div>
    )
}
export default ContactsForm;
