import React from 'react';
import ScrollableAnchor from 'react-scrollable-anchor'

import s from './Contacts.module.css'
import BlockTitle from "../BlockTitle/BlockTitle";


function Contacts() {
    return (
        <ScrollableAnchor id={'contacts'}>
            <div className={s.slogan}>
                <div className={s.container}>
                    <BlockTitle title={"CONTACT INFO"}/>
                    <div className={s.contact}>
                        <div><b>Phone: </b>+380966917833</div>
                        <div><b>E-mail: </b>motivi.shop@gmail.com</div>
                        <div><b>Location: </b>Lviv, Ukraine</div>
                    </div>
                </div>
            </div>
        </ScrollableAnchor>
    );
}

export default Contacts;
