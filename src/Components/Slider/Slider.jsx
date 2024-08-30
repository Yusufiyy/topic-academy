import React from 'react'
import '../Slider/Slider.css'
import Marquee from 'react-fast-marquee'
import SrImg from '../../assets/slider.svg'


const Slider = () => {
  return (
    <div className="slider">
        <div className="container">
            <div className="slider-div">
                <h2 className="slider-title">O’quvchilarimizning natijalari TOPIK 6 gacha</h2>
                <Marquee style={{width: "1200px"}} speed={60}>
                    <img src={SrImg} alt="slider-img" className='slider-img' />
                    <img src={SrImg} alt="slider-img" className='slider-img' />
                    <img src={SrImg} alt="slider-img" className='slider-img' />
                    <img src={SrImg} alt="slider-img" className='slider-img' />
                    <img src={SrImg} alt="slider-img" className='slider-img' />
                    <img src={SrImg} alt="slider-img" className='slider-img' />
                </Marquee>
                <Marquee style={{width: "1200px"}} speed={60} direction='right'>
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