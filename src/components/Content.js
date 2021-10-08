import React from "react";
import styled from "styled-components";

const StyledContent = styled.div`
    padding-bottom: 1%;

    img {
        max-width: 95%;
        object-fit: contain;
        border: 10px inset BlanchedAlmond;
    }

    p {
        padding: 0.75% 4%;
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
            <p><span className='bold-text'>Date:</span> {data.date}</p>
            <p className='explanation'>{data.explanation}</p>
        </StyledContent>
    )
}

export default Content