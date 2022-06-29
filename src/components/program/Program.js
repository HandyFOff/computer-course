import React from "react";
import programsData from "./programsData";
import Week from "./Week";

export default function Program() {

    let weeks_left = [];
    let weeks_right = [];

    const weeksElements = programsData.map(
        (weeks) => <Week
                    key={weeks.id}
                    week={weeks.week}
                    name={weeks.name}
                  />
    );

    function separatorElements(separator) {
        for (let i = 0; i < weeksElements.length; i++) {
            if (separator[i].key % 2) {
                weeks_left.push(separator[i]);
            } else {
                weeks_right.push(separator[i]);
            }
        }
    }

    separatorElements(weeksElements)

    return (
        <section className="program" id="timetable">
            <div className="program__header">
                <img className="program__img" alt="program img" src={require('../../assets/img/main-icon.png')}/>
                <h1 className="program__title">Программа обучения</h1>
                <span className="program__subtitle">Больше 90% учеников прошли полный курс и смогли<br/> собрать свой первый компьютер</span>
            </div>
            {window.innerWidth > 576 ?
            <div className="program__weeks-tree">
                <div className="program__weeks-left weeks">{weeks_left}</div>
                <div className="program__stick"></div>
                <div className="program__weeks-right weeks">{weeks_right}</div>
            </div> : null}
            {window.innerWidth <= 576 ?
            <div className="program__weeks-tree">
                <div className="program__weeks-left weeks">{weeksElements}</div>
            </div> : null}
        </section>
    )
}