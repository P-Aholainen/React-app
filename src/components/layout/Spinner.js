import React from 'react';
import spinner from './spinner.gif';

export default () => {
return (
    <div>
        <img
        src={spinner}
        alt="Hetkonen"
        style={{width:'170px', margin: '40 px auto', display: 'block'}}
        />
    </div>
);
};