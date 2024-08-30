import React from 'react'
import '../Section/Section.css'
import SecImg from '../../assets/section-img.png'

const Section = () => {
  return (
    <div className="section">
        <div className="container">
            <div className="section-main">
            <h2 className="section-title">Koreya Universitetlariga 100% gacha grant yutish imkoniyati</h2>
            <div className="section-box">
                <div className="section-left">
                    <img src={SecImg} alt="section-img" className="section-img" />
                </div>
                <div className="section-right">
                    <div className="sec-top">
                        <h3 className="sec-top-title">GKS (Global Korean Scholarship) <span style={{color: "rgb(171, 221, 177)"}}>$70.000</span>  lik Grant</h3>
                        <p className="sec-top-text">Janubiy Koreya hukumatining stipendiya dasturi (GKS) Koreyaning Xalqaro ta'lim bo'yicha milliy instituti tomonidan <span style={{color: "rgb(115, 192, 189)", fontWeight: "500"}}>xorijiy</span> talabalarning Koreyada bakalavr va magistratura bosqichida 100% gacha to’liq grant va oylik <span style={{color: "rgb(115, 192, 189)", fontWeight: "500"}}>stipendiya</span> olish imkoniyatingiz bor</p>
                    </div>
                    <div className="sec-foot">
                        <h3 className="sec-foot-title">GKS granti sizga nima beradi</h3>
                        <p className="sec-foot-text">"Dastur boshlanganida va tugaganida Koreyaga borish hamda Koreyadan qaytish xarajatlari qoplanadi.</p>
                        <p className="sec-foot-text">Koreyaga yetib borganda joylashib olish uchun bir martalik to'lovberiladi. Miqdori - 200 000 Koreya voni (taxminan 157 AQSh dollari).</p>
                        <p className="sec-foot-text">Til kursi va universitetning kontrak to'lovi to'liq to'lab beriladi (faqat magistr va doktorantlarga)... <span style={{color: "rgb(115, 192, 189)", fontWeight: "500"}}>ko’proq</span> </p>
                    </div>
                </div>
            </div>
            </div>
        </div>
    </div>
  )
}

export default Section