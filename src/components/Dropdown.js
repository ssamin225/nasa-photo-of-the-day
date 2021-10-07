import React from "react";

const Dropdown = ({ setDate }) => {

    const myDate = new Date();
    const date = myDate.toLocaleString("en-US", {timeZone: "America/New_York"});

    const addZero = n => n < 10 ? '0'+n : n;

    const datesArray = [];
    for (let i = 0; i < 10; i++) {
        const d = new Date(date);
        d.setDate(d.getDate() - i)
        const aDate = `${d.getFullYear()}-${addZero(d.getMonth() + 1)}-${addZero(d.getDate())}`;
        datesArray.push(aDate);
    }

    const handleChange = evt => {
        setDate(evt.target.value);
    }

    return (
        <div>
            <form onChange={handleChange}>
                <label>Pick a date:</label>
                {' '}
                <select>
                    {datesArray.map((date, i) =>
                        <option key={i+1} value={date}>{date}</option>
                    )}
                </select>
            </form>
        </div>
    )
}

export default Dropdown;