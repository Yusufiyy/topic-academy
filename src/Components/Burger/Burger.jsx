import React, { useState } from 'react';
import './Burger.css'; 
import { useTranslation } from 'react-i18next';

const Burger = () => {
  const [isOpen, setIsOpen] = useState(false);
  const {t,i18n} = useTranslation();
  const toggleMenu = () => {
    setIsOpen(!isOpen);
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
          <li><a href="#home">{t("burger.text1")}</a></li>
          <li><a href="#about">{t("burger.text2")}</a></li>
          <li><a href="#services">{t("burger.text3")}</a></li>
          <li><a href="#contact">{t("burger.text4")}</a></li>
        </ul>
      </div>
    </div>
  );
};

export default Burger;
