import React from 'react'
import '../Footer/Footer.css'
import { useTranslation } from 'react-i18next';

const Footer = () => {
    const {t,i18n} = useTranslation();
  return (
    <div className="footer">
        <div className="footer-container">
            <div className="footer-div">
                <div className="footer-left">
                    <h2 className="footer-title">{t("footer.text1")}</h2>
                    <p className="footer-text">{t("footer.text2")}</p>
                </div>
                <div className="footer-right">
                    <form action="" className='footer-form'>
                        <input type="text" placeholder={t("footer.text3")} className='footer-input' required />
                        <input type="tel" placeholder={t("footer.text4")} className='footer-input' required />
                        <a href='#iframe-id' className="footer-btn">{t("footer.text5")}</a>
                    </form>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer