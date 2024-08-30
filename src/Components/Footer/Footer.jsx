import React from 'react'
import '../Footer/Footer.css'

const Footer = () => {
  return (
    <div className="footer">
        <div className="footer-container">
            <div className="footer-div">
                <div className="footer-left">
                    <h2 className="footer-title">Savollaringiz qoldimi?</h2>
                    <p className="footer-text">Ma’lumotlaringizni qoldiring siz bilan bog’lanib barcha savollaringizga javob beramiz.</p>
                </div>
                <div className="footer-right">
                    <form action="" className='footer-form'>
                        <input type="text" placeholder='Ismingiz' className='footer-input' required />
                        <input type="tel" placeholder='Raqamingiz' className='footer-input' required />
                        <button className="footer-btn">SAVOL BERISH</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer