import React from 'react'
import '../Info/Info.css'
import InOne from '../../assets/info-one.png'
import InTwo from '../../assets/info-two.png'
import InThree from '../../assets/info-three.png'
import InFour from '../../assets/info-four.png'
import InFive from '../../assets/info-five.png'
import InSix from '../../assets/info-six.png'

const Info = () => {
  return (
    <div className="info">
        <div className="container">
            <div className="info-add">
            <h2 className="info-title">TOPIK academy aniq siz uchun agar siz:</h2>
            <ul className="info-list">
                <li className="info-item">
                    <div className="info-item-img">
                    <img src={InOne} alt="info-one" className="info-img" />
                    </div>
                    <p className="info-item-text">
                    <span style={{color: "rgb(95, 172, 169)", fontWeight: "500"}}>Qisqa  </span>
                    muddat ichida Koreys tilida gapirishni istaysiz
                    </p>
                </li>
                <li className="info-item">
                    <div className="info-item-img">
                    <img src={InTwo} alt="info-two" className="info-img" />
                    </div>
                    <p className="info-item-text">
                    Koreys tili o’rganib o’z 
                    <span style={{color: "rgb(95, 172, 169)", fontWeight: "500"}}>  karyerangizni  </span>
                    qurmoqchisiz
                    </p>
                </li>
                <li className="info-item">
                    <div className="info-item-img">
                    <img src={InThree} alt="info-three" className="info-img" />
                    </div>
                    <p className="info-item-text">
                    Topik sertifikatini olib Koreyaning nuiversitefuzli untlariga
                    <span style={{color: "rgb(95, 172, 169)", fontWeight: "500"}}>  GRANT  </span>
                    yutmoqchisiz
                    </p>
                </li>
                <li className="info-item">
                    <div className="info-item-img">
                    <img src={InFour} alt="info-four" className="info-img" />
                    </div>
                    <p className="info-item-text">
                    Janubiy Koreya davlatida 
                    <span style={{color: "rgb(95, 172, 169)", fontWeight: "500"}}>  o’qish  </span>
                    va
                    <span style={{color: "rgb(95, 172, 169)", fontWeight: "500"}}>  ishlash  </span>
                    uchun ketmoqchisiz
                    </p>
                </li>
                <li className="info-item">
                    <div className="info-item-img">
                    <img src={InFive} alt="info-five" className="info-img" />
                    </div>
                    <p className="info-item-text">
                    Koreys tilini o’rta darajda bilasiz va darajangizni 
                    <span style={{color: "rgb(95, 172, 169)", fontWeight: "500"}}>  oshirmoqchisiz</span>
                    </p>
                </li>
                <li className="info-item">
                    <div className="info-item-img">
                    <img src={InSix} alt="info-six" className="info-img" />
                    </div>
                    <p className="info-item-text">
                    Ko’p yillardan buyon o’qib ham
                    <span style={{color: "rgb(95, 172, 169)", fontWeight: "500"}}>  natijaga  </span>
                    chiqa olmayapsiz
                    </p>
                </li>
            </ul>
            <a href="/" className="info-link">HA, BU MEN</a>
            </div>
        </div>
    </div>
  )
}

export default Info