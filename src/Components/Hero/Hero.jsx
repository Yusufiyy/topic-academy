import React from 'react'
import '../Hero/Hero.css'
import HeroAdd from '../../assets/hero-add.svg'
import HeroBack from '../../assets/hero-back.png'
import HeroImg from '../../assets/hero-img.svg'
  
const Hero = () => {
  return (
    <div className="hero">
        <div className="container">
            <div className="hero-left">
                <div className="hero-head">
                    <div className="hero-start">
                        <img src={HeroImg} alt="hero-img" />
                    <p className="hero-text">3 oyda Koreys tilida gapirishni boshlang</p>
                    </div>
                    <h1 className="hero-title">Janubiy Koreya Universitetlarida 100% gacha grant asosida o’qish imkoniyati</h1>
                </div>
                <div className="hero-middle">
                    <li className="hero-item">
                        <img src={HeroAdd} alt="hero-add" />
                        <p className="hero-add-text">5 oyda Topikdan 6 <br /> darajagacha olishda <br /> yordam beramiz</p>
                    </li>
                    <li className="hero-item">
                        <img src={HeroAdd} alt="hero-add" />
                        <p className="hero-add-text">Topikdan yuqori darajani qo’lga kiritib, Janubiy Koreyada o’qish va ishlash imkoniyati</p>
                    </li>
                </div>
                <div className="hero-foot">
                    <li className="hero-foot-item"><a href="/" className="hero-link">BEPUL DARSGA YOZILISH</a></li>
                    <li className="hero-foot-item"><p className="hero-foot-text">Birinchi darsga bepul yoziling!</p></li>
                </div>
            </div>
            <div className="hero-right">
                <img className='hero-foot-img' src={HeroBack} alt="hero-back" />
            </div>
        </div>
    </div>
  )
}

export default Hero