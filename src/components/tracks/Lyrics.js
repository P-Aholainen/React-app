/*Tuodaan React -komponentti */
import React, { Component } from 'react';
/*Tuodaan axios API -kutsuja varten */
import axios from 'axios';
/*Tuodaan Spinner komponentissa määritetty Spinner gif */
import Spinner from '../layout/Spinner';
/*Tuodaan Link mahdollistamaan navigaatio sivulla */
import {Link} from 'react-router-dom';
/*Lause .env tiedoston käyttöä varten */
require('dotenv').config();


/*Luodaan luokka komponentti */
class Lyrics extends Component {
/*Luodaan state olio */
    state={
        track: {},
        lyrics: {}
    };
    /*LifeCycle -metodi, joka suoritetaan vasta kun kaikki muu on renderöity */
    componentDidMount(){
        /*API -kutsu sanoituksille */
        axios.get(`https://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1/track.lyrics.get?track_id=${this.props.match.params.id}&apikey=${process.env.REACT_APP_NYCKELI}`)
            /*API -vastaus, joka sijoitetaan lyrics -objektiin. */
        .then(res => {
            //console.log(res.data);
            this.setState({lyrics:res.data.message.body.lyrics});
            /*API -kutsu kappaleen tiedoille */
            return axios.get(`https://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1/track.get?track_id=${this.props.match.params.id}&apikey=${process.env.REACT_APP_NYCKELI}`)
           
        })
            .then(res => {
                /*API -vastaus sijoitetaan track -objektiin */
                //console.log(res.data.message.body.track);
                this.setState({track:res.data.message.body.track});
            })
            /*Virheen sieppaus */
            .catch(err => console.log(err));
    }
    

    render() {
        /*Testataan if -lauseella tyhjiä tietoja, ja 
        pyöritetään Spinner -animaatiota niin kauan kuin tietoja ei saada */
        const { track, lyrics} = this.state;
        if(track === undefined || 
            lyrics === undefined ||
            Object.keys(track).length === 0|| 
            Object.keys(track).length === 0)
            { return (
                <Spinner />
            )
            /*muuten palautetaan kappaleen tiedot ja sanat */
            } else {
                return(
                <React.Fragment>
                    {/*Navigointipainike pääsivulle */}
                    <Link to="" className="btn bg-secondary mb-3 mt-3 text-light">Previous</Link>
                    {/*div -elementti kappaleen tiedoille Bootstrap CSS -määrityksineen */}
                    <div className="card bgdark">
                        <h5 className="card-header bg-dark">
                            {track.track_name} by {' '} 
                            <span className="text-light">{track.artist_name}</span>
                        </h5>
                        {/*div -elementti sanoituksille, Bootstrap CSS -määrityksineen */}
                        <div className="card-body bg-dark">
                            <p className="card-text">{lyrics.lyrics_body}</p>
                        </div>
                    </div>
                        {/*API -vastauksesta parsittuja kappaleen tietoja listattuna*/}
                    <ul>
                        <li>
                            {/*Näytetään albumin nimi*/}
                            <strong>Album</strong>:{' '}{track.album_name}
                        </li>

                        <li>{/*Näytetään sisältövaroitus*/}
                            <strong>Explicit</strong>:{' '}{track.explicit===0? 'Pfff...No' : 'Hell yes!!'}
                        </li>

                        <li>{/*Näytetään genremääritys*/}
                            <strong>Genre</strong>:{' '}{track.primary_genres.music_genre_list[0] 
                            !==undefined? track.primary_genres.music_genre_list[0].music_genre.music_genre_name:""}
                        </li>
                    
                        <li>{/*Näytetään copyright symboli, sekä oikeuslauseke*/}
                            <strong>{'\u00A9'}</strong>:{' '}{lyrics.lyrics_copyright}
                        </li>
                    </ul>{/*Painike edelliselle sivulle, Bootstrap määrityksineen*/}
                    <Link to="" className="btn bg-secondary bm-4 mt-3 text-light">Previous</Link>
                    
                </React.Fragment>
                )
            }
        
    }
}

export default Lyrics;