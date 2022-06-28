import React from "react";

export default function About() {
    return (
        <section className="about">
            <div className="about__img">
                <img alt="computer" src={require('../../assets/img/pc.png')}/>
            </div>
            <div className="about__content">
                <h1 className="about__title">Чем мы занимаемся?</h1>
                <p className="about__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget neque, dignissim et feugiat elit augue in suspendisse egestas. Dictum vestibulum mi et sed nunc, orci fermentum vestibulum, morbi. Et neque, adipiscing sapien sem senectus praesent aenean consequat. Aenean facilisi turpis aliquet fringilla. Nunc sem felis sed interdum feugiat mattis elit, sollicitudin. Quam pharetra rhoncus risus, cursus id elementum aliquet. Nullam turpis arcu malesuada arcu interdum placerat nisi, lobortis.</p>
            </div>
        </section>
    )
}