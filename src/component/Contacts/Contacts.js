import React from 'react';
import ScrollableAnchor from 'react-scrollable-anchor'

import s from './Contacts.module.css'
import BlockTitle from "../BlockTitle/BlockTitle";
import fileCv from "../../assets/Vasyl_Herchak_resume.pdf";


const Contacts = () => {
    return (
        <ScrollableAnchor id={'contacts'}>
            <div className={s.slogan}>
                <div className={s.container}>
                    <BlockTitle title={"CONTACT INFO"}/>
                    <div className={s.contact}>
                       <div><b>CV: </b><a href={fileCv} download='Vasyl_Herchak.pdf'
                               className={s.link + " " + s.transition}>Download</a></div>
                        <div><b>Phone: </b>+380966917833</div>
                        <div><b>Skype: </b>Vasyl.Herchak</div>
                        <div><b>E-mail: </b>herchak.vasyl@gmail.com</div>
                        <div><b>Location: </b>Lviv, Ukraine</div>
                    </div>
                </div>
            </div>
        </ScrollableAnchor>
    );
}

export default Contacts;
