import React from 'react';
import styles from './Main.module.css'
import Particles from "react-particles-js";
import logo from './logo.svg';

const particlesOpt = {
    particles: {
        number: {
            value: 150,
            density: {
                enable: true,
                value_area: 800
            }
        }
    }
}
function Main() {

    return (

        <div className={styles.main}>
            <Particles className={styles.particles} params={particlesOpt}/>
            <div className={styles.container}>
                <div className={styles.greeting}>
                    <span>Привіт!</span>
                    <span>Я Василь <span>Герчак</span></span>
                    <h1>Я Front-end розроботчик</h1>
                </div>
                <div className={styles.photo}>
                    <div className={styles.image}><img src={window.location.origin + '/logo.png'}/></div>
                </div>
            </div>
        </div>
    );
}

export default Main;
