import React from 'react'
import '../Header/Header.css'
import Logo from '../../assets/logo.svg'
import { useTranslation } from 'react-i18next'
import Burger from '../Burger/Burger'

const Header = () => {
    const {t,i18n} = useTranslation();
    const handleChange = (e) => {
        const selectedLanguage = e.target.value;
        i18n.changeLanguage(selectedLanguage);
    }
  return (
    <div className="header">
        <div className="container header-container">
            <div className="header-left">
                <a href="/" className="header-logo-link"><img src={Logo} alt="logo" className="header-logo" /></a>
                <p className="header-text">{t("header.text1")}</p>
            </div>
            <ul className="header-middle">
                <li className="header-item"><a href="" className="header-link">{t("header.text2")}</a></li>
                <li className="header-item"><a href="" className="header-link">{t("header.text3")}</a></li>
                <li className="header-item"><a href="" className="header-link">{t("header.text4")}</a></li>
                <li className="header-item"><a href="" className="header-link">{t("header.text5")}</a></li>
            </ul>
            <div className="header-right">
                <p className="header-call">+998 (33) 306 0098</p>
                <li className="header-item-x"><Burger className="burger" /></li>
                <p className="header-call">{t("header.text6")}</p>
                <select className='lng-select' name="lng" id="lng" onChange={handleChange}>
                    <option className='lng-option' value="uz">Uzbek</option>
                    <option className='lng-option' value="en">English</option>
                    <option className='lng-option' value="ru">Russian</option>
                </select>
            </div>
        </div>
    </div>
  )
}

export default Header