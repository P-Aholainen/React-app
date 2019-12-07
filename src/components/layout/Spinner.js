import React from 'react';
//Tuodaan spinner gif
import spinner from './SpinnerBlack.gif';

/*Exportataan spinner ja annetaan sille koko ja sijainti */
export default () => {
return (
    <div>
        <img
        src={spinner}
        alt="Hetkonen"
        style={{width:'270px', margin: '100px auto', display: 'block'}}
        />
    </div>
);
};