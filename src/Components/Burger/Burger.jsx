import React, { useState } from 'react';
import './Burger.css'; 
import { useTranslation } from 'react-i18next';

const Burger = () => {
  const [isOpen, setIsOpen] = useState(false);
  const lg = localStorage.getItem('i18nextLng');
  const { t, i18n } = useTranslation();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleChange = (e) => {
    const selectedLanguage = e.target.value;
    i18n.changeLanguage(selectedLanguage);
  };

  return (
    <div className="burger-menu">
      <div className={`menu-icon ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>
      
      <div className={`menu-content ${isOpen ? 'show' : ''}`}>
        <ul>
          <li><a href="#main-id">{t("burger.text1")}</a></li>
          <li><a href="#slider-id">{t("burger.text2")}</a></li>
          <li><a href="#sell-id">{t("burger.text3")}</a></li>
          <li><a href="#accordion-id">{t("burger.text4")}</a></li>
        </ul>
        <select className='lng-select-br' name="lng" id="lng" onChange={handleChange} value={lg}>
          <option className='lng-option-br' value="uz">Uzbek</option>
          <option className='lng-option-br' value="en">English</option>
          <option className='lng-option-br' value="ru">Russian</option>
        </select>
      </div>
    </div>
  );
};

export default Burger;
