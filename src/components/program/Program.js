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
        <section className="program">
            <div className="program__weeks-left weeks">{weeks_left}</div>
            <div className="program__stick"></div>
            <div className="program__weeks-right weeks">{weeks_right}</div>
        </section>
    )
}