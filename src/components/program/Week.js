import React from "react";

export default function Week(props) {
    return (
        <div className="week">
            <div className="week__header">
                <span className="week__week">{props.week}</span>
                <h1 className="week__name">{props.name}</h1>
            </div>
            <div className="week__arrow"></div>
        </div>
    )
}