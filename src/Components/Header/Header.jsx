import React from 'react'
import '../Header/Header.css'
import Logo from '../../assets/logo.svg'

const Header = () => {
  return (
    <div className="header">
        <div className="container">
            <div className="header-left">
                <a href="/" className="header-logo-link"><img src={Logo} alt="logo" className="header-logo" /></a>
                <p className="header-text">Toshkentda joylashgan Koreys tili hamda Topik o’quv markazi</p>
            </div>
            <div className="header-middle">
                <li className="header-item"><a href="" className="header-link">Nega biz</a></li>
                <li className="header-item"><a href="" className="header-link">Natijalar</a></li>
                <li className="header-item"><a href="" className="header-link">Kurslar</a></li>
                <li className="header-item"><a href="" className="header-link">Ko’p beriladigan savollar</a></li>
            </div>
            <div className="header-right">
                <p className="header-call">+998 (33) 306 0098</p>
                <p className="header-call">Hoziroq bog’laning</p>
            </div>
        </div>
    </div>
  )
}

export default Header