import React from "react";
import styled from "styled-components";
import Dropdown from "./Dropdown";

const StyledHeader = styled.div`
    background-color: #3e4444;
`

const Header = props => {
    return (
        <StyledHeader>
            <h1>NASA Astronomy Picture of the Day</h1>
            <Dropdown setDate={props.setDate} />
        </StyledHeader>
    )
}

export default Header;