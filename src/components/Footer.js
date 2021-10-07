import React from "react";

const Footer = ({ copyright }) => {
    return (
        <div>
            <footer>
                <p>
                    Data acquired from
                    {' '}
                    <a href='https://api.nasa.gov' target='_blank' rel='noopener noreferrer'>NASA Open APIs</a>
                </p>
                <p>{copyright && `Image Copyright: ${copyright}`}</p>
            </footer>
        </div>
    )
}

export default Footer;