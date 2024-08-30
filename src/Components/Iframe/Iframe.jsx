import React from 'react'
import '../Iframe/Iframe.css'
import Marquee from 'react-fast-marquee'
import IfImg from '../../assets/slider.svg'
import { Button, Modal } from 'antd'
import axios from 'axios'
import { Footer } from 'antd/es/layout/layout'

const Iframe = () => {
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
        <div className="container">
            <div className="iframe-box">
                <iframe width="1200" height="635" src="https://www.youtube.com/embed/ADdhbjyKLv8?si=LETtOWkpXkkfmWtt" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                <h3 className="iframe-title">Muvafaqqiyatli bitiruvchilarimizga universitet tanlash va grant yutishda yordam beramiz</h3>
                <div className="iframe-box-add">
                <div className="iframe-left">
                <p className="iframe-text"><span style={{color: "rgb(115, 192, 189)", fontWeight: "500"}}>TOPIK academy consulting</span> jamoasi sizga universitet tanlash, visa olish va grant yutishingizda yaqindan ko’maklashadi</p>
                <div className="iframe-div-text">
                <p className="iframe-text-next">Ko’proq ma’lumot olish uchun bepul konsultatsiyaga yoziling!</p>
                </div>
                <>
                <Button className='iframe-btn' type="primary" onClick={showLoading}>
                    ARIZA QOLDIRISH
                </Button>
                <Modal className='iframe-modal'
                    loading={loading}
                    open={open}
                    onCancel={() => setOpen(false)}
                >
                    <h3 className='iframe-fm-title'>O'z ma'lumotlaringizni qoldiring</h3>
                    <p className="iframe-fm-text">Sizga to'liqroq ma'lumot berish uchun mutaxassislarimiz siz bilan bog'lanishadi</p>
                    <form action="" id='myForm' onSubmit={SendMessage}>
                      <div className="iframe-fm-div">
                    <input className='iframe-input' type="text" id='name' required/>
                    <input className='iframe-input' type="text" id='surname' required />
                    <button className='iframe-fm-btn' type="submit" >Send</button>
                      </div>
                    </form>
                </Modal>
                </>
            </div>
            <div className="iframe-right">
                <Marquee style={{width: "783px"}} gradient={1} speed={60}>
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