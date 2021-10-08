import React from "react";
import styled from "styled-components";

const StyledFooter = styled.div`
    background-color: #c4b7a6;
    padding: 2.5%;
    border-top: 2px solid crimson;
    color: #4d4d4d;

    p {
        padding: 0.2%;
    }
`

const Footer = ({ copyright }) => {
    return (
        <StyledFooter>
            <footer>
                <p>
                    Data acquired from
                    {' '}
                    <a href='https://api.nasa.gov' target='_blank' rel='noopener noreferrer'>NASA Open APIs</a>
                </p>
                <p>{copyright && `Image Copyright: ${copyright}`}</p>
            </footer>
        </StyledFooter>
    )
}

export default Footer;