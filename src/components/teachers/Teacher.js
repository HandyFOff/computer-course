import React from "react";

export default function Teacher(props) {
    return (
        <div className="teacher">
            <img className="teacher__img" alt="teacher" src={props.img}/>
            <div className="teacher__header">
                <h4 className="teacher__name">{props.name}</h4>
                <span className="teacher__job">{props.job}</span>
            </div>
            <a className="teacher__bio" href={props.bio}>
                <button className="btn-teacher__bio btn">Биография</button>
            </a>
        </div>
    )
}