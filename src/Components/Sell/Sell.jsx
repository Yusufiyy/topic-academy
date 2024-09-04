import React from 'react'
import '../Sell/Sell.css'
import SOne from '../../assets/sell-one.png'
import STwo from '../../assets/sell-two.png'
import SThree from '../../assets/sell-three.png'
import { useTranslation } from 'react-i18next'

const Sell = () => {
    const {t,i18n} = useTranslation();
  return (
    <div className="sell">
        <div className="container sell-container">
            <div className="sell-div">
                <div className="sell-title-div">
                <h2 className="sell-title">{t("sell.text1")}</h2>
                </div>
                <div className="sell-list-div">
                <ul className="sell-list">
                    <li className="sell-item">
                        <img src={SOne} alt="sell-one" className='sell-img' />
                        <div className="sell-one">
                            <p className="sell-one-text-st">{t("sell.text2")}</p>
                            <p className="sell-one-text-all">{t("sell.text3")}</p>
                        </div>
                        <div className="sell-two">
                            <p className="sell-two-text" style={{width: "239px"}}>{t("sell.text4")}</p>
                        </div>
                        <div className="sell-three">
                            <button className="sell-btn-all">{t("sell.text5")}</button>
                            <p className="sell-three-text">{t("sell.text6")}</p>
                        </div>
                    </li>
                </ul>
                <ul className="sell-list">
                    <li className="sell-item">
                        <img src={STwo} alt="sell-two" className='sell-img' />
                        <div className="sell-one">
                            <p className="sell-one-text-st">{t("sell.text7")}</p>
                            <p className="sell-one-text-all">{t("sell.text3")}</p>
                        </div>
                        <div className="sell-two">
                            <p className="sell-two-text" style={{width: "190px"}}>{t("sell.text8")}</p>
                        </div>
                        <div className="sell-three">
                            <button className="sell-btn-all">{t("sell.text5")}</button>
                            <p className="sell-three-text">{t("sell.text9")}</p>
                        </div>
                    </li>
                </ul>
                <ul className="sell-list">
                    <li className="sell-item">
                        <img src={SThree} alt="sell-tree" className='sell-img' />
                        <div className="sell-one">
                            <p className="sell-one-text-st">{t("sell.text10")}</p>
                            <p className="sell-one-text-all">{t("sell.text3")}</p>
                        </div>
                        <div className="sell-two">
                            <p className="sell-two-text" style={{width: "301px"}}>{t("sell.text11")}</p>
                        </div>
                        <div className="sell-three">
                            <button className="sell-btn-all">{t("sell.text5")}</button>
                            <p className="sell-three-text">{t("sell.text12")}</p>
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