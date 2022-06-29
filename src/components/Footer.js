import React from "react";

export default function Footer() {

    const [toggler, setToggler] = React.useState(false);

    function handlerToggler() {
        setToggler(prevToggler => !prevToggler)
    }

    const handlerStyle = {
        justifyContent: toggler ? "end" : "start",
        transition: 'all .5s ease'
    }

    return (
        <footer className="footer" id="contacts">
            <div className="footer__head">
                <h1 className="footer__title">Статьи каждую неделю</h1>
                <span className="footer__subtitle">Больше 90% учеников прошли полный курс и смогли собрать свой первый компьютер</span>
                <div className="footer__toggler" style={handlerStyle}>
                    <button className="toggler-item btn" onClick={handlerToggler}>{
                    toggler ? "Подписаться" : "E-mail"
                    }</button>
                </div>
            </div>
            <div className="footer__content">
                <div className="footer__social">
                    <img className="footer__social-icon" alt="vk" src={require('../assets/img/vk.png')}/>
                    <img className="footer__social-icon" alt="youtube" src={require('../assets/img/youtube.png')}/>
                    <img className="footer__social-icon" alt="facebook" src={require('../assets/img/facebook.png')}/>
                    <img className="footer__social-icon" alt="instagram" src={require('../assets/img/instagram.png')}/>
                </div>
                <span className="footer__copyright">Templates #18. More on Figma.info</span>
            </div>
        </footer>
    )
} 