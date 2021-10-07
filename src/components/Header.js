import React from "react";
import Dropdown from "./Dropdown";

const Header = props => {
    return (
        <div>
            <h1>NASA Astronomy Picture of the Day</h1>
            <Dropdown setDate={props.setDate} />
        </div>
    )
}

export default Header;