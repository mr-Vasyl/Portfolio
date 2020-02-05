import React from 'react';
import styles from './Slogan.module.css'
import {Fade} from "react-reveal";
import BlockTitle from "./BlockTitle";


function Slogan() {
    return (
        <div className={styles.slogan}>
            <Fade clear>
                <div className={styles.container}>
                    <BlockTitle title={"Мої Контакти"}/>
                    {/*<div className={styles.head}>Контакти</div>*/}
                    {/*<button className={styles.btnShow}>Найняти</button>*/}
<div className={styles.contact}>
    <div><b>Phone: </b>+380966917833</div>
    <div> <b>E-mail: </b>motivi.shop@gmail.com</div>
    <div><b>Location: </b>Lviv, Ukraine</div>
</div>



                </div>
            </Fade>
        </div>
    );
}

export default Slogan;
