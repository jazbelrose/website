const SVGThumbnail = ({ initial, className }) => {
    // Calculate center of the rectangle
    const centerX = 7.41 + 321.17 / 2;
    const centerY = 7.07 + 355 / 2;
    

    return (
        <svg className={className} width="336" height="336" viewBox="0 0 336 336" xmlns="http://www.w3.org/2000/svg">
            <text
                x={centerX} 
                y={centerY}
                textAnchor="middle"
                dominantBaseline="middle"
                style={{ fill: "#fff", fontFamily: "HelveticaNeueLT-Roman, 'HelveticaNeue LT 55 Roman', 'Helvetica'", fontSize: "241.23px" }}>
                {initial}
            </text>
            <rect x="7.41" y="7.07" width="321.17" height="321.86" rx="40" ry="40" style={{ fill: "none", stroke: "#fff", strokeMiterlimit: 10, strokeWidth: "9px" }}/>
        </svg>
    );
};

export default SVGThumbnail;
