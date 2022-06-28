import React from "react";

export default function Header() {

    window.onscroll = function() {
        var scrolled = window.pageYOffset || document.documentElement.scrollTop;
        if(scrolled !== 0){
          document.querySelector('.header').style.backgroundColor = '#000';
        }else{
          document.querySelector('.header').style.backgroundColor = 'rgba(255, 255, 255, 0)';
        };
      };

    return (
        <header className="header">
            <div className="header__container">
                <img className="header__logo" alt="logotype" src={require('../assets/img/logo.png')}/>
                <nav className="header__nav nav">
                    <a className="nav__item" href="#">Главная</a>
                    <a className="nav__item" href="#">Курсы</a>
                    <a className="nav__item" href="#">Расписание</a>
                    <a className="nav__item" href="#">Преподаватели</a>
                    <a className="nav__item" href="#">Рассылка</a>
                    <a className="nav__item" href="#">Контакты</a>
                </nav>
                <button className="header__btn-login btn">Зайти в кабинет</button>
            </div>
        </header>
    )
}