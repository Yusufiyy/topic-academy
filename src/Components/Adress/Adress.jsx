import React from 'react';
import { MdCall } from 'react-icons/md';
import { FaTelegramPlane, FaYoutube } from 'react-icons/fa';
import { RiInstagramFill } from 'react-icons/ri';
import AdImg from '../../assets/logo-end.svg';
import '../Adress/Adress.css';
import { useTranslation } from 'react-i18next';

const Adress = () => {
  const {t,i18n} = useTranslation();
  return (
    <div className="adress">
      <div className="container adress-container">
          <ul className="adress-list-one">
          <img src={AdImg} alt="Company logo" className="adress-img" />
          </ul>
            <ul className="adress-list-two">
              <li className="adress-item-two">
                <a href="/" className="adress-link">{t("adress.text1")}</a>
              </li>
              <li className="adress-item-two">
                <a href="/" className="adress-link">{t("adress.text2")}</a>
              </li>
              <li className="adress-item-two">
                <a href="/" className="adress-link">{t("adress.text3")}</a>
              </li>
              <li className="adress-item-two">
                <a href="/" className="adress-link">{t("adress.text4")}</a>
              </li>
            </ul>
            <ul className="adress-list-three">
              <li className="adress-item-three">
                <a href="+998903685453" className="adress-icon-link"><MdCall aria-label="Call" /></a>
              </li>
              <li className="adress-item-three">
                <a href="https://t.me/yusufdev" className="adress-icon-link"><FaTelegramPlane aria-label="Telegram" /></a>
              </li>
              <li className="adress-item-three">
                <a href="https://t.me/yusufdev" className="adress-icon-link"><RiInstagramFill aria-label="Instagram" /></a>
              </li>
              <li className="adress-item-three">
                <a href="https://t.me/yusufdev" className="adress-icon-link"><FaYoutube aria-label="YouTube" /></a>
              </li>
            </ul>
        </div>
      </div>
  );
};

export default Adress;
