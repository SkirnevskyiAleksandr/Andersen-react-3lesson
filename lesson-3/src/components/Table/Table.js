import React from "react";
import TableStyle from './Table.module.css'

export const Table = ({ inputValue }) => {
    return (
        <div className={TableStyle.main}>
            <h1>{inputValue.Name} {inputValue.LastName}</h1>
            <ul>
                <li><span>birthday: </span> {inputValue.Birthday}</li>
                <li><span>phone-number: </span> {inputValue.PhoneNumber}</li>
                <li><span>web-page: </span> {inputValue.WebPage}</li>
                <li><span>elevator-pitch: </span> <p>{inputValue.ElevatorPitch}</p> </li>
                <li><span>hurd-skills: </span><p>{inputValue.HurdSkills}</p> </li>
                <li><span>Your last project: </span> <p>{inputValue.YourLastProject}</p></li>
            </ul>
        </div>
    )

}
