import React from "react";

const Content = ({ data }) => {
    return (
        <div>
            <img src={data.url} alt={data.title}/>
            <h2>{data.title}</h2>
            <p>Date: {data.date}</p>
            <p>{data.explanation}</p>
        </div>
    )
}

export default Content;