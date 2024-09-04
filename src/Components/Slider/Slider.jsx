import React from 'react'
import '../Slider/Slider.css'
import Marquee from 'react-fast-marquee'
import SrImg from '../../assets/slider.svg'
import { useTranslation } from 'react-i18next'


const Slider = () => {
    const {t,i18n} = useTranslation();
  return (
    <div className="slider">
        <div className="container slider-container">
            <div className="slider-div">
                <h2 className="slider-title">{t("slider.text1")}</h2>
                <Marquee speed={60}>
                    <img src={SrImg} alt="slider-img" className='slider-img' />
                    <img src={SrImg} alt="slider-img" className='slider-img' />
                    <img src={SrImg} alt="slider-img" className='slider-img' />
                    <img src={SrImg} alt="slider-img" className='slider-img' />
                    <img src={SrImg} alt="slider-img" className='slider-img' />
                    <img src={SrImg} alt="slider-img" className='slider-img' />
                </Marquee>
                <Marquee speed={60} direction='right'>
                <img src={SrImg} alt="slider-img" className='slider-img' />
                    <img src={SrImg} alt="slider-img" className='slider-img' />
                    <img src={SrImg} alt="slider-img" className='slider-img' />
                    <img src={SrImg} alt="slider-img" className='slider-img' />
                    <img src={SrImg} alt="slider-img" className='slider-img' />
                    <img src={SrImg} alt="slider-img" className='slider-img' />
                </Marquee>
            </div>
        </div>      
    </div>
  )
}

export default Slider