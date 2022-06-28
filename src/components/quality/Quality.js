import React from "react";
import qualityData from "./qualityData";
import Card from './Card';

export default function Quality(props) {

    const qualityElements = qualityData.map(
        (card) => <Card
                    key={card.id}
                    img={card.img}
                    name={card.name}
                    text={card.text}
                  />
    )

    return (
        <section className="quality">
            <h1 className="quality__title">Получите профессию прямо сейчас</h1>
            <div className="quality__cards">
                {qualityElements}
            </div>
        </section>
    )
}