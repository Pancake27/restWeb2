import React from 'react';

const CardStandart = ({cardTitle, cardDescription, bgImage}) => {
    return (
        <article className='card-container'>
            <div className='card-image' style={{backgroundImage: `url(${bgImage})`}}></div>
            <h1>{cardTitle}</h1>
            <p>{cardDescription}</p>
        </article>
    );
};

export default CardStandart;