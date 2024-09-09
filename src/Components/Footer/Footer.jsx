import React from 'react';
import './Footer.css';
import axios from 'axios';
import { message } from 'antd'; // message import qilindi
import { useTranslation } from 'react-i18next';

const Footer = () => {
    const { t } = useTranslation();
    const [loading, setLoading] = React.useState(false);

    const SendMessage = (e) => {
        e.preventDefault();
        setLoading(true);

        const mytoken = "7347999104:AAE1ZQ7pzMfArNjQWcTe4vltAsL-yorHr8A";
        const chat_id = 7484007218;
        const url = `https://api.telegram.org/bot${mytoken}/sendMessage`;
        const name = document.getElementById('name').value;
        const surname = document.getElementById('surname').value;
        const twoInfo = `Name: ${name}\nSurname: ${surname}`;

        axios.post(url, {
            chat_id: chat_id,
            text: twoInfo
        })
        .then((res) => {
            setLoading(false);
            document.getElementById('myForm').reset();
            message.success("Message successfully sent!"); // Success xabari
        })
        .catch((err) => {
            setLoading(false);
            console.error("Error sending message:", err);
            message.error("Failed to send message."); // Error xabari
        });
    };

    return (
        <div className="footer" id='footer-id'>
            <div className="footer-container">
                <div className="footer-div">
                    <div className="footer-left">
                        <h2 className="footer-title">{t("footer.text1")}</h2>
                        <p className="footer-text">{t("footer.text2")}</p>
                    </div>
                    <div className="footer-right">
                        <form className='footer-form' id='myForm' onSubmit={SendMessage}>
                            <input type="text" placeholder={t("footer.text3")} className='footer-input' id='name' required />
                            <input type="tel" placeholder={t("footer.text4")} className='footer-input' id='surname' required />
                            <button type="submit" className="footer-btn" disabled={loading}>
                                {loading ? t('footer.text6') : t("footer.text5")}
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
