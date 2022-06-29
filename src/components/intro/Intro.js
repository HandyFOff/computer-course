import React from "react";

export default function Intro() {
    return (
        <div className="intro" id="main">
            <div className="container">
                <h1 className="intro__title">Первый курс<br/>по компьютерной сборке</h1>
                <div className="timer">
                    <div className="timer-item">
                        <span>18</span>
                        <span>Дней</span>
                    </div>
                    <div className="timer-item">
                        <span>18</span>
                        <span>Дней</span>
                    </div>
                    <div className="timer-item">
                        <span>18</span>
                        <span>Дней</span>
                    </div>
                    <div className="timer-item">
                        <span>18</span>
                        <span>Дней</span>
                    </div>
                </div>
            </div>
            <div className="intro__stats">
                <div className="container">
                    <button className="btn-stats btn">Заказать курс</button>
                    <div className="students__amount">
                        <div className="students__all">
                            <span>Учеников всего:</span>
                            <span>200</span>
                        </div>
                        <div className="students__ended">
                            <span>Успешно закончили курс:</span>
                            <span>190</span>
                        </div>
                    </div>
                    <div className="students__earned">
                        <span>Заработано учениками: <span>400 000</span></span>
                        <div className="students__progress">
                            <div></div>
                        </div>
                        <div className="students__goal">
                            <span>0</span>
                            <span>1 000 000₽</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}