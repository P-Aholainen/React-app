import React, { Component } from 'react'
/*Importataan axios */
import axios from 'axios';
/*Tuodaan Consumer komponentti */
import {Consumer} from '../../context';

class Search extends Component {
/*Luodaan state -olio */
state = {
    trackOrArtist: ''

};

/*findTrackOrArtist funktio jolle annetaan ensimmäisenä parametrina dispatch*/
findTrackOrArtist = (dispatch, e) => {
    /*estetään lomakkeen lähetys */
    e.preventDefault();
    /*API -kutsu artistille sekä kappaleelle */
    axios.get(`https://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1/track.search?q_track_artist=${this.state.trackOrArtist}&page=3&page_size=50&country=xw&f_has_lyrics=1&apikey=${process.env.REACT_APP_NYCKELI}`)
        /*API -palaute */
    .then(res => {
        //console.log(res.data);

        /*dispatch funktioon sijoitetaan olio, johon määritetään mitä halutaan palauttaa */
        dispatch({
            type:'SEARCH_TRACKS_OR_ARTISTS',
            /*payload sisältää vastauksesta parsitun datan */
            payload:res.data.message.body.track_list
        });
       // this.setState({track_list:res.data.message.body.track_list});

       /*Alustetaan etsintäkenttä */
            this.setState({trackOrArtist:''})
    })
        .catch(err => console.log(err));
}

/*Kun alempana luotavan etsintä kentän arvo muuttuu,
 käyttjän kirjoittama syöte sijoitetaan state olion arvoksi*/
onChange = e => {
    this.setState({[e.target.name]: e.target.value});
}

    render() {
        return (
            /*Palautetaan context.Consumer*/
           <Consumer>
               {/*Value palauttaa koko context state olion arvot */}
               {value => {
                   //console.log(value);

                   /*Noudetaan State -olion dispatch arvo*/
                   const {dispatch} = value;
                   return(
                       /*Otsikoile div -elemetit Bootstrap CSS määrityksin*/
                   <div className="card bg-dark text-light card-body mb-4 p-4 mt-3">
                       <h1 className="display-4 text-center">
                           <i className="src"></i>Forgot the lyrics?
                        </h1>

                        <p className="lead text-center">Browse lyrics of the song chosen</p>
                        {/*Luodaan etsi -kenttä*/}
                        <form onSubmit={this.findTrackOrArtist.bind(this, dispatch)}>
                            <div className="Search">
                                {/*input kenttä*/}
                                <input type="text" className="form-control form-control-lg" placeholder="Search by Artist or Track name.."
                                name="trackOrArtist"
                                /*Syötetään state oliolle käyttäjän kirjoittama arvo*/
                                value={this.state.trackOrArtist}
                                onChange={this.onChange}
                                />
                            </div>
                            {/*Luodaan etsintä painike */}
                            <button className="btn bg-secondary text-light mt-4">Search</button>
                        </form>
            

                   </div>
                   )
               }}
           </Consumer>

        )
    }
}
/*exportataan Search */
export default Search;