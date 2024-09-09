import React from 'react'
import '../Hero/Hero.css'
import HeroAdd from '../../assets/hero-add.svg'
import HeroBack from '../../assets/hero-back.png'
import HeroImg from '../../assets/hero-img.svg'
import { useTranslation } from 'react-i18next'


const Hero = () => {
    const { t } = useTranslation();

    return (
        <div className="hero">
            <div className="container hero-container">
                <div className="hero-left">
                    <div className="hero-head">
                        <div className="hero-start">
                            <img src={HeroImg} alt="hero-img" className='hero-start-img' />
                            <p className="hero-text">{t("hero.text1")}</p>
                        </div>
                        <h1 className="hero-title">{t("hero.text2")}</h1>
                    </div>
                    <div className="hero-middle">
                        <li className="hero-item">
                            <img src={HeroAdd} alt="hero-add" className='hero-item-img' />
                            <p className="hero-add-text">{t("hero.text3")}</p>
                        </li>
                        <li className="hero-item">
                            <img src={HeroAdd} alt="hero-add" className='hero-item-img' />
                            <p className="hero-add-text">{t("hero.text4")}</p>
                        </li>
                    </div>
                    <div className="hero-foot">
                        <li className="hero-foot-item"><a href="#footer-id" className="hero-link">{t("hero.text5")}</a></li>
                        <li className="hero-foot-item"><p className="hero-foot-text">{t("hero.text6")}</p></li>
                    </div>
                </div>
                <img className='hero-foot-img' src={HeroBack} alt="hero-back" />
            </div>
        </div>
    )
}

export default Hero