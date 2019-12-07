import React, { Component } from 'react';
/*Asennettu axios importataan API kutsujen suoritusta varten */
import axios from 'axios';
/*.env tiedosto vaatii toimiakseen seuraavan lauseen */
require('dotenv').config();

/*Muuttuja johon sijoitetaan createContext */
const Context = React.createContext();

/*Luodaan reducer hakutulosten tuomiseksi sivulle TOP10 tulosten sijaan */
const reducer = (state, action) => {

switch(action.type){
    case'SEARCH_TRACKS_OR_ARTISTS':
    return {
        /*State olioon määritellään, mistä renderöidään ja kuinka se käyttäytyy */
        ...state, 
        track_list: action.payload,
        heading: 'Here is what we have found for you!'
    };
    default:
        return state;
}

}
/*Context API:n Provider komponentti, jolla helpotetaan komponentteihin
käsiksi pääsyä mistä tahansa */
export class Provider extends Component {
/*luodaan konstruktori */
    constructor() {
        super();
    this.state = {
        //Luodaan tyhjä track_list taulukko
        track_list : [],
        //luodaan otsikko
        heading: 'Top 10 Tracks',
        /*Jotta Search.js tiedostossa voitaan TOP 10 tulosten sijaan
        renderöidä sivulle haku tulokset, luodaan state olioon dispatch arvo, joho sijoitetaan reducer funktio,
        jolle annetaan parametrina state ja action*/
        dispatch: action => this.setState(state => reducer(state,action))
        
    };
}
/*componentDidMount metodi suoritetaan vasta kun kaikki muu sisältö on renderöity*/
componentDidMount() {
    /*Suoritetaan API -kutsu TOP10 kappaleille. Lauseeseen on sijoitettu
    myös .env tiedostossa kirjoitetut avaimet */
    axios.get(`https://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1/chart.tracks.get?chart_name=top&page=1&page_size=10&country=fi&f_has_lyrics=1&apikey=${process.env.REACT_APP_NYCKELI}`)
        
    .then(res => {
        /*console logilla testattu toimivuutta. Axiosissa palautunut sisältö saadaan esiin res.data lauseella */
        //console.log(res.data);

        /*Asetetaan State olio, ja sijoitetaan siihen halutttu data */
        this.setState({track_list:res.data.message.body.track_list});
    })
        .catch(err => console.log(err));
}

    render() {
        return (
            /*Context provider valueen sijoitetaan ylempänä luotu state 
            -komponentti */
            <Context.Provider value={this.state}>
                {this.props.children}
            </Context.Provider>
            
        )
    }
}

/*Exportataan Consumer, jotta se voidaan importata toisaalla */
export const Consumer = Context.Consumer;