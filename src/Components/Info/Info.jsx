import React from 'react'
import '../Info/Info.css'
import InOne from '../../assets/info-one.png'
import InTwo from '../../assets/info-two.png'
import InThree from '../../assets/info-three.png'
import InFour from '../../assets/info-four.png'
import InFive from '../../assets/info-five.png'
import InSix from '../../assets/info-six.png'
import { useTranslation } from 'react-i18next'

const Info = () => {
    const {t,i18n} = useTranslation();
  return (
    <div className="info">
        <div className="container info-container">
            <div className="info-add">
            <h2 className="info-title">{t("info.text1")}</h2>
            <ul className="info-list">
                <li className="info-item">
                    <div className="info-item-img">
                    <img src={InOne} alt="info-one" className="info-img" />
                    </div>
                    <p className="info-item-text">
                    {t("info.text2")}
                    </p>
                </li>
                <li className="info-item">
                    <div className="info-item-img">
                    <img src={InTwo} alt="info-two" className="info-img" />
                    </div>
                    <p className="info-item-text">
                    {t("info.text3")}
                    </p>
                </li>
                <li className="info-item">
                    <div className="info-item-img">
                    <img src={InThree} alt="info-three" className="info-img" />
                    </div>
                    <p className="info-item-text">
                    {t("info.text4")}
                    </p>
                </li>
                <li className="info-item">
                    <div className="info-item-img">
                    <img src={InFour} alt="info-four" className="info-img" />
                    </div>
                    <p className="info-item-text">
                    {t("info.text5")}
                    </p>
                </li>
                <li className="info-item">
                    <div className="info-item-img">
                    <img src={InFive} alt="info-five" className="info-img" />
                    </div>
                    <p className="info-item-text">
                    {t("info.text6")}
                    </p>
                </li>
                <li className="info-item">
                    <div className="info-item-img">
                    <img src={InSix} alt="info-six" className="info-img" />
                    </div>
                    <p className="info-item-text">
                    {t("info.text7")}
                    </p>
                </li>
            </ul>
            <a href="/" className="info-link">{t("info.text8")}</a>
            </div>
        </div>
    </div>
  )
}

export default Info