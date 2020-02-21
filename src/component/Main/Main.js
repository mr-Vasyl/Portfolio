import React, {Component} from 'react';
import ScrollableAnchor from 'react-scrollable-anchor'
import Particles from "react-particles-js";
import logo from '../../assets/img/logo.jpg'
import s from './Main.module.css'

class Main extends Component {

// animation
    particlesOpt = {
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

    render() {
        return (
            <ScrollableAnchor id={'home'}>
                <div className={s.main}>
                    <Particles className={s.particles} params={this.particlesOpt}/>
                    <div className={s.container}>
                        <div className={s.greeting}>
                            <span>Привіт!</span>
                            <span>Я Василь <span>Герчак</span></span>
                            <h1>Я Front-end розробник</h1>
                        </div>
                        <div className={s.photo}>
                            <div className={s.image}><img alt="avatar" src={logo}/></div>
                        </div>
                    </div>
                </div>
            </ScrollableAnchor>
        );
    }
}

export default Main;
