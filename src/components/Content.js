import React from "react";

const Content = ({ data }) => {
    return (
        <div>
            <img src={data.url} alt={`an image of ${data.title}`}/>
            <h2>{data.title}</h2>
            <p>{data.explanation}</p>
        </div>
    )
}

export default Content;