import React, { Component } from 'react'
import {Consumer} from '../../context';
/*Tuodaan Spinner gif */
import Spinner from '../layout/Spinner';
/*importataan Track komponentti */
import Track from '../tracks/Track';

class Tracks extends Component {
    render() {
        return (
            <Consumer>
                 {/*Palautetaan Context komponentissa luotu Value, jhon sijoitettiin koko State olio */}
                {value => {
                    const { track_list, heading } = value;
                    /*Tehdään if -lause, joka pyörittää gif -animaatiota niin kauan, kuin data ei ole saatavissa */
                    if(track_list === undefined || track_list.length === 0) {
                        return <Spinner />
                    }else {

                        return (
                        <React.Fragment>
                        {/*tuodaan heading State -oliosta*/}
                            <h3 className="heading">{heading}</h3>
                            {/*row luokkaan tuodaan kappaleiden tiedot*/}
                        <div className="row">
                            {/*loopataan kappaleet läpi State oliosta*/}
                            {
                                track_list.map(item => {
                                return(
                                    /*renderöidään Track -komponentti*/
                                <Track key={item.track.track_id} track={item.track}/>
                            )
                            })
                        }
                        </div>
                        </React.Fragment>
                        )
                    }

                }}
            </Consumer>
        )
    }
}

export default Tracks;