import React from "react";
import sponsersData from "./sponsersData";

export default function Sponsers() {

    const sponsers = sponsersData.map(
        (sponser) => <img key={sponser.id} src={sponser.img} alt={sponser.name} className="sponser"/>
    )

    return (
        <section className="sponsers">
            <h1 className="sponsers__title">Партнеры - топовые бренды</h1>
            <div className="sponsers__body">
                {sponsers}
            </div>
        </section>
    )
}