import React from 'react';
/*Tuodaan Tracks komponentti */
import Tracks from '../tracks/Tracks';
/*Tuodaan Search komponentti */
import Search from '../tracks/Search';

const Index = () => {
    return (
        /*Fragmenteilla voidaan ryhmittää elementtejä, ilman että tarvitsee
        luodaa turhia elementtejä. Fragmentit eivät näy dom puussa */
        <React.Fragment>
            <Search />
            <Tracks />
        </React.Fragment>
    );
};

export default Index;
