import React, {useState} from 'react';
import axios from "axios";
import s from './ContactsForm.module.css'
import BlockTitle from "../BlockTitle/BlockTitle";


// In the process of work

const ContactsForm = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    // const [message, setMessage] = useState('')

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
            email,
            // message
        }
        axios.post("http://localhost:3010/sendMessage", dataToSubmit)
    }

    return (
        <div id={"contacts"} className={s.contacts}>
            <div className={s.container}>
                <BlockTitle title={"Напишіть мені"}/>
                <form className={s.formWrapper} onSubmit={handleSubmit}>
                    <input className={s.formArea} type="text" placeholder="Імя" onChange={handleClick}/>
                    <input className={s.formArea} type="text" placeholder="E-mail" onChange={handleClick}/>
                    {/*<textarea className={s.messageArea} placeholder="Ваше повідомлення"></textarea>*/}
                    <button className={s.btnSubmit} onClick={handleSubmit} type="submit">Відправити</button>
                </form>
            </div>
        </div>
    )
}
export default ContactsForm;
