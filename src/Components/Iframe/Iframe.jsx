import React from 'react'
import '../Iframe/Iframe.css'
import Marquee from 'react-fast-marquee'
import IfImg from '../../assets/slider.svg'
import { Button, Modal } from 'antd'
import axios from 'axios'
import { useTranslation } from 'react-i18next'

const Iframe = () => {
    const {t,i18n} = useTranslation();
    const [open, setOpen] = React.useState(false);
    const [loading, setLoading] = React.useState(true);
    const showLoading = () => {
    setOpen(true);
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  };

  const SendMessage = (e) => {
    e.preventDefault()
    const mytoken = "7347999104:AAE1ZQ7pzMfArNjQWcTe4vltAsL-yorHr8A";
    const chat_id = 7484007218;
    const url = `https://api.telegram.org/bot${mytoken}/sendMessage`;
    const name = document.getElementById('name').value;
    const surname = document.getElementById('surname').value;
    const twoInfo = `Name: ${name}\nSurname: ${surname}`;
    axios({
        url:url,
        method:"POST",
        data:{
            "chat_id":chat_id,
            "text": twoInfo
        }
      })
      .then((res) => {
        document.getElementById('myForm').reset();
        alert("Successful!")
      })
      .catch((err) => {
        console.log("Fix the code!",err);
      })
  }


  return (
    <div className="iframe">
        <div className="container iframe-container">
            <div className="iframe-box">
                <iframe className='iframe-main'  src="https://www.youtube.com/embed/ADdhbjyKLv8?si=LETtOWkpXkkfmWtt" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                <h3 className="iframe-title">{t("iframe.text1")}</h3>
                <div className="iframe-box-add">
                <div className="iframe-left">
                <p className="iframe-text">{t("iframe.text2")}</p>
                <div className="iframe-div-text">
                <p className="iframe-text-next">{t("iframe.text3")}</p>
                </div>
                <>
                <Button className='iframe-btn' type="primary" onClick={showLoading}>
                {t("iframe.text4")}
                </Button>
                <Modal className='iframe-modal'
                    loading={loading}
                    open={open}
                    onCancel={() => setOpen(false)}
                    footer={null}
                >
                    <h3 className='iframe-fm-title'>{t("iframe.text5")}</h3>
                    <p className="iframe-fm-text">{t("iframe.text6")}</p>
                    <form action="" id='myForm' onSubmit={SendMessage}>
                      <div className="iframe-fm-div">
                    <input className='iframe-input' type="text" id='name' placeholder={t("iframe.text8")} required/>
                    <input className='iframe-input' type="tel" id='surname' placeholder={t("iframe.text9")} required />
                    <button className='iframe-fm-btn' type="submit" >{t("iframe.text7")}</button>
                      </div>
                    </form>
                </Modal>
                </>
            </div>
            <div className="iframe-right">
     
                <Marquee  gradient={0.5} speed={60}>
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
  )
}

export default Iframe