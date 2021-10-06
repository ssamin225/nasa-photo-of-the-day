import React from "react";

const Footer = ({ copyright }) => {
    return (
        <div>
            <footer>
                <p>
                    Data acquired from
                    {' '}
                    <a href='https://api.nasa.gov' target='_blank'>NASA Open APIs</a>
                    <p>{copyright && `Image Copyright: ${copyright}`}</p>
                </p>
            </footer>
        </div>
    )
}

export default Footer;