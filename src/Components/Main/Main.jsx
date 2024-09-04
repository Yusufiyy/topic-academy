import React from 'react'
import '../Main/Main.css'
import { useTranslation } from 'react-i18next';

const Main = () => {
  const {t,i18n} = useTranslation();
  return (
    <div className="main">
        <div className="container -container">
            <div className="main-div">
                <div className="main-title-div">
                    <h2 className="main-title">{t("main.text1")}</h2>
                </div>
                <div className="main-list-div">
                  <ul className="main-list">
                    <li className="main-item">
                      <mark className="main-text-top">01</mark>
                      <p className="main-text-middle">{t("main.text2")}</p>
                      <p className="main-text-foot">{t("main.text3")}</p>
                    </li>
                    <li className="main-item">
                      <mark className="main-text-top">02</mark>
                      <p className="main-text-middle">{t("main.text4")}</p>
                      <p className="main-text-foot">{t("main.text3")}</p>
                    </li>
                    <li className="main-item">
                      <mark className="main-text-top">03</mark>
                      <p className="main-text-middle">{t("main.text5")}</p>
                      <p className="main-text-foot">{t("main.text3")}</p>
                    </li>
                    <li className="main-item">
                      <mark className="main-text-top">04</mark>
                      <p className="main-text-middle">{t("main.text6")}</p>
                      <p className="main-text-foot">{t("main.text3")}</p>
                    </li>
                    <li className="main-item">
                      <mark className="main-text-top">05</mark>
                      <p className="main-text-middle">{t("main.text7")}</p>
                      <p className="main-text-foot">{t("main.text3")}</p>
                    </li>
                    <li className="main-item">
                      <mark className="main-text-top">06</mark>
                      <p className="main-text-middle">{t("main.text8")}</p>
                      <p className="main-text-foot">{t("main.text3")}</p>
                    </li>
                  </ul>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Main