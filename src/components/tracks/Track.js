import React from 'react'
/*Tuodaan Link mahdollistamaan navigointi (korvaa a href) */
import {Link} from 'react-router-dom';

/*käytetään välitetään propseilla kappaleen tiedot Card -elementissä sivulle*/
const Track = (props) => {
    const {track} = props;
    return (
        /*Luokkien nimiin lisätty Bootstrap CSS -määritykset */
        <div className="col-md-6">
            <div className="card bg-dark text-light mb-4 shadow-sm">
                <div className="card-body">
                    {/*Api palautteesta parsittu artistin nimi */}
                    <h5>{track.artist_name}</h5>
                    <p className="card-text">
                        {/*Api palautteesta parsittu kappaleen nimi */}
                        <strong>Track</strong>: {track.track_name}
                        <br/>
                        {/*Api palautteesta parsittu albumin nimi */}
                        <strong>Album</strong>: {track.album_name}
                    </p>
                    {/*Api palautteesta parsittu kappaleen id ja linkkin sanoituksiin*/}
                        <Link to={`lyrics/track/${track.track_id}`} className="btn bg-secondary text-light">
                           View Lyrics 
                        </Link>
                </div>
            </div>
        </div>
    );
};
/*Exportataan Track komponentti*/
export default Track;
