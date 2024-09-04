import React from 'react'
import '../Section/Section.css'
import SecImg from '../../assets/section-img.png'
import { useTranslation } from 'react-i18next';

const Section = () => {
    const {t,i18n} = useTranslation();
  return (
    <div className="section">
        <div className="container section-container">
            <div className="section-main">
            <h2 className="section-title">{t("section.text1")}</h2>
            <div className="section-box">
                <div className="section-left">
                    <img src={SecImg} alt="section-img" className="section-img" />
                </div>
                <div className="section-right">
                    <div className="sec-top">
                        <h3 className="sec-top-title">{t("section.text2")}</h3>
                        <p className="sec-top-text">{t("section.text3")}</p>
                    </div>
                    <div className="sec-foot">
                        <h3 className="sec-foot-title">{t("section.text4")}</h3>
                        <p className="sec-foot-text">{t("section.text5")}</p>
                        <p className="sec-foot-text">{t("section.text6")}</p>
                        <p className="sec-foot-text">{t("section.text7")}</p>
                    </div>
                </div>
            </div>
            </div>
        </div>
    </div>
  )
}

export default Section