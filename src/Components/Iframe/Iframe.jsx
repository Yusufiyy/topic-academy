import React, { useState } from 'react';
import './Iframe.css';
import Marquee from 'react-fast-marquee';
import IfImg from '../../assets/slider.svg';
import { Button, message, Modal } from 'antd';
import axios from 'axios';
import { useTranslation } from 'react-i18next';

const Iframe = () => {
  const { t } = useTranslation();
  const [open, setOpen] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  const [name, setName] = useState("")
  const [surname, setSurName] = useState("")
  const SendMessage = (e) => {
    e.preventDefault();
    setLoading(true);

    const mytoken = "7347999104:AAE1ZQ7pzMfArNjQWcTe4vltAsL-yorHr8A";
    const chat_id = 7484007218;
    const url = `https://api.telegram.org/bot${mytoken}/sendMessage`;
    const twoInfo = `Name: ${name}\nSurname: ${surname}`;

    axios.post(url, {
      chat_id: chat_id,
      text: twoInfo,
    })
      .then((res) => {
        setLoading(false);
        message.success("Sent successfully!");
        setOpen(false);
        setName("")
        setSurName("")
      })
      .catch((err) => {
        setLoading(false);
        console.error('Failed to send message:', err);
        message.error('Failed to send message.');
      });
  };

  return (
    <div className="iframe">
      <div className="container iframe-container">
        <div className="iframe-box">
          <iframe
            className="iframe-main"
            src="https://www.youtube.com/embed/xKtdEANnhLA?si=p08qFnrYmxM7Q40H"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
          <h3 className="iframe-title">{t('iframe.text1')}</h3>
          <div className="iframe-box-add">
            <div className="iframe-left">
              <p className="iframe-text">{t('iframe.text2')}</p>
              <div className="iframe-div-text">
                <p className="iframe-text-next">{t('iframe.text3')}</p>
              </div>
              <>
                <Button className="iframe-btn" type="primary" onClick={() => setOpen(true)}>
                  {t('iframe.text4')}
                </Button>
                <Modal
                  className="iframe-modal"
                  open={open}
                  onCancel={() => setOpen(false)}
                  footer={null}
                >
                  <h3 className="iframe-fm-title">{t('iframe.text5')}</h3>
                  <p className="iframe-fm-text">{t('iframe.text6')}</p>
                  <form action="" id="myForm" onSubmit={SendMessage}>
                    <div className="iframe-fm-div">
                      <input
                        className="iframe-input"
                        type="text"
                        id="name"
                        placeholder={t('iframe.text8')}
                        onChange={(e) => setName(e.target.value)}
                        value={name}
                        required
                      />
                      <input
                        className="iframe-input"
                        type="tel"
                        id="surname"
                        placeholder={t('iframe.text9')}
                        onChange={(e) => setSurName(e.target.value)}
                        value={surname}
                        required
                      />
                      <button className="iframe-fm-btn" type="submit" disabled={loading}>
                        {loading ? t('iframe.text10') : t('iframe.text7')}
                      </button>
                    </div>
                  </form>
                </Modal>
              </>
            </div>
            <div className="iframe-right">
              <Marquee className="iframe-marque" gradient={0.5} speed={60}>
                <img src={IfImg} alt="iframe-img" />
                <img src={IfImg} alt="iframe-img" />
                <img src={IfImg} alt="iframe-img" />
                <img src={IfImg} alt="iframe-img" />
                <img src={IfImg} alt="iframe-img" />
              </Marquee>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Iframe;
