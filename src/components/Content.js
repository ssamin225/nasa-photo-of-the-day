import React from "react";
import styled from "styled-components";

const StyledContent = styled.div`
    img {
        max-width: 95%;
        object-fit: contain;
    }

    p {
        padding: 0.75% 5%;
    }

    .explanation {
        text-align: left;
        text-indent: 2rem;
    }
`

const Content = ({ data }) => {
    return (
        <StyledContent>
            <img src={data.url} alt={data.title}/>
            <h2>{data.title}</h2>
            <p>Date: {data.date}</p>
            <p className='explanation'>{data.explanation}</p>
        </StyledContent>
    )
}

export default Content