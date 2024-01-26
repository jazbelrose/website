import React from 'react';

const SVGThumbnail = ({ initial, className }) => {
    return (
        <svg className={className} width="336" height="336" viewBox="0 0 336 336" xmlns="http://www.w3.org/2000/svg">
            <text transform="translate(80 250)" style={{ fill: "#fff", fontFamily: "HelveticaNeueLT-Roman, 'HelveticaNeue LT 55 Roman', 'Helvetica'", fontSize: "241.23px" }}>
                <tspan x="0" y="0">{initial}</tspan>
            </text>
            <rect x="7.41" y="7.07" width="321.17" height="321.86" rx="40" ry="40" style={{ fill: "none", stroke: "#fff", strokeMiterlimit: 10, strokeWidth: "9px" }}/>
        </svg>
    );
};

export default SVGThumbnail;
