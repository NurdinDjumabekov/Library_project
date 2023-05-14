import React from 'react';
import style from './ForMobile.module.sass'
import bac from '../../assests/images/ForMobile/bac.jpg'
import kitep from '../../assests/images/ForMobile/kitep.png'
import playMarket from '../../assests/images/ForMobile/playMarket.svg'

const ForMobile = () => {
    return <div className={style.mob}>
        <div style={{background: `url(${bac})`}} className={style.forMobile}>
            <div className={style.container}>
                <div className={style.kitep}>
                    <img src={kitep} alt="kitep"/>
                </div>
                <div className={style.text}>
                    <p>Читайте книги великих кыргызских писателей на нашем сайте или скачайте приложение   “Мурас” в Google Play бесплатно.</p>
                </div>
                <div className={style.play}>
                    <a target='_blank' href="https://play.google.com/store/apps?hl=ru&gl=US&pli=1">
                        <img src={playMarket} alt=""/>
                    </a>
                </div>
            </div>
        </div>
    </div>
};

export default ForMobile;