import React from "react";
import axios from "axios";

const Footer = props => {
    return (
        <div>
            <footer>
                <p>
                    Data acquired from
                    {' '}
                    <a href='https://api.nasa.gov' target='_blank'>NASA Open APIs</a>
                </p>
            </footer>
        </div>
    )
}

export default Footer;