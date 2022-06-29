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
                    <a className="nav__item" href="#main">Главная</a>
                    <a className="nav__item" href="#course">Курсы</a>
                    <a className="nav__item" href="#timetable">Расписание</a>
                    <a className="nav__item" href="#teachers">Преподаватели</a>
                    <a className="nav__item" href="#contacts">Рассылка</a>
                    <a className="nav__item" href="#contacts">Контакты</a>
                </nav>
                <button className="header__btn-login btn">Зайти в кабинет</button>
            </div>
        </header>
    )
}