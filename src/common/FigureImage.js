import React from 'react';

function FigureImage({figureClass,image,caption, imageStyle}){
    return(
        <figure className={`figure ${figureClass}`}>
            <img src={ image} alt="Fotografia" style={imageStyle} className="figure-img rounded d-block w-100" />
            <figcaption className="figure-caption text-right">{caption}</figcaption>
        </figure>
    );
};

export default FigureImage;