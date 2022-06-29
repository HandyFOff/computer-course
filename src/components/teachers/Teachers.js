import React from "react";
import Teacher from "./Teacher";
import teachersData from "./teachersData";

export default function Teachers() {

    const teacherElements = teachersData.map(
        (data) => <Teacher
                    key={data.id}
                    name={data.name}
                    job={data.job}
                    img={data.img}
                    bio={data.bio}
                  />
    )

    return (
        <section className="teachers" id="teachers">
            <h1 className="teachers__title">Ваши преподаватели</h1>
            <div className="teachers__cards">
                {teacherElements}
            </div>
        </section>
    )
}