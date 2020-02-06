import React, {useState} from 'react';
import styles from './Contacts.module.css'
import BlockTitle from "./BlockTitle";
import {Fade} from "react-reveal";
import {AxiosInstance as axios} from "axios";

function Contacts() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')


    const handleClick = (e) => {
        e.preventDefault()

        if (e.target.id === "name") {
            setName(e.target.value)
        } else {
            setEmail(e.target.value)
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        const dataToSubmit = {
            name,
            email
        }
        axios.post("api/sendMail", dataToSubmit)
    }


    return (
        <div id={"contacts"} className={styles.contacts}>
            <Fade clear>
                <div className={styles.container}>
                    <BlockTitle title={"Напишіть мені"}/>
                    <form className={styles.formWrapper} onSubmit={handleSubmit}>
                        <input className={styles.formArea} type="text" placeholder="Імя" onChange={handleClick}/>
                        <input className={styles.formArea} type="text" placeholder="E-mail" onChange={handleClick}/>
                        {/*<textarea className={styles.messageArea} placeholder="Ваше повідомлення"></textarea>*/}
                        <button className={styles.btnSubmit} onClick={handleSubmit} type="submit">Відправити</button>
                    </form>
                </div>
            </Fade>
        </div>
    );
}

export default Contacts;
