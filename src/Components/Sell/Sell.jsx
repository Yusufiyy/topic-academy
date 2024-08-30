import React from 'react'
import '../Sell/Sell.css'
import SOne from '../../assets/sell-one.png'
import STwo from '../../assets/sell-two.png'
import SThree from '../../assets/sell-three.png'

const Sell = () => {
  return (
    <div className="sell">
        <div className="container">
            <div className="sell-div">
                <div className="sell-title-div">
                <h2 className="sell-title">O’zingizga mos kursga ro’yxatdan o’ting</h2>
                </div>
                <div className="sell-list-div">
                <ul className="sell-list">
                    <li className="sell-item">
                        <img src={SOne} alt="sell-one" className='sell-img' />
                        <div className="sell-one">
                            <p className="sell-one-text-st">Intiensive</p>
                            <p className="sell-one-text-all">Davomiyligi: 5 oy</p>
                        </div>
                        <div className="sell-two">
                            <p className="sell-two-text" style={{width: "239px"}}><span style={{color: "rgb(229, 178, 7)", fontWeight: "500"}}>Koreys tilini </span>chuqur o’zlashtirmoqchi bo’lganlar uchun haftada 6 kun 1.5 soatdan intensive kurs.</p>
                        </div>
                        <div className="sell-three">
                            <button className="sell-btn-all">RO'YXATDAN O'TISH</button>
                            <p className="sell-three-text">970.000 so’m /oy</p>
                        </div>
                    </li>
                </ul>
                <ul className="sell-list">
                    <li className="sell-item">
                        <img src={STwo} alt="sell-two" className='sell-img' />
                        <div className="sell-one">
                            <p className="sell-one-text-st">Odatiy</p>
                            <p className="sell-one-text-all">Davomiyligi: 5 oy</p>
                        </div>
                        <div className="sell-two">
                            <p className="sell-two-text" style={{width: "190px"}}>Haftada 3 kun 1.5 soatdan iborat odatiy Koreys tili darslari.</p>
                        </div>
                        <div className="sell-three">
                            <button className="sell-btn-all">RO'YXATDAN O'TISH</button>
                            <p className="sell-three-text">560.000 so’m /oy</p>
                        </div>
                    </li>
                </ul>
                <ul className="sell-list">
                    <li className="sell-item">
                        <img src={SThree} alt="sell-tree" className='sell-img' />
                        <div className="sell-one">
                            <p className="sell-one-text-st">Individual</p>
                            <p className="sell-one-text-all">Davomiyligi: 5 oy</p>
                        </div>
                        <div className="sell-two">
                            <p className="sell-two-text" style={{width: "301px"}}>O’qituvchidan <span style={{color: "rgb(229, 178, 7)", fontWeight: "500"}}>individual</span> dars olmoqchi bo’lganlar uchun haftada 3 kun 1.5 soatdan darslar. Moslashuvchan grafik va individual yondashuv.</p>
                        </div>
                        <div className="sell-three">
                            <button className="sell-btn-all">RO'YXATDAN O'TISH</button>
                            <p className="sell-three-text">1.800.000 so’m /oy</p>
                        </div>
                    </li>
                </ul>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Sell