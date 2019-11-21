import React, { Component } from 'react';
import axios from 'axios';
import Spinner from '../layout/Spinner';
import {Link} from 'react-router-dom';
require('dotenv').config();



class Lyrics extends Component {

    state={
        track: {},
        lyrics: {}
    };
    
    componentDidMount(){
    
        axios.get(`https://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1/track.lyrics.get?track_id=${this.props.match.params.id}&apikey=${process.env.REACT_APP_NYCKELI}`)
            
        .then(res => {
            //console.log(res.data);
            this.setState({lyrics:res.data.message.body.lyrics});

            return axios.get(`https://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1/track.get?track_id=${this.props.match.params.id}&apikey=${process.env.REACT_APP_NYCKELI}`)
           
        })
            .then(res => {
                //console.log(res.data.message.body.track);
                this.setState({track:res.data.message.body.track});
            })
            .catch(err => console.log(err));
    }
    

    render() {
        const { track, lyrics} = this.state;
        if(track === undefined || 
            lyrics === undefined ||
            Object.keys(track).length === 0|| 
            Object.keys(track).length === 0)
            { return (
                <Spinner />
            )
            } else {
                return(
                <React.Fragment>
                    <Link to="" className="btn">Previous</Link>
                    <div className="card">
                        <h5 className="card-header">
                            {track.track_name} by {' '} 
                            <span className="text-secondary">{track.artist_name}</span>
                        </h5>
                        <div className="card-body">
                            <p className="card-text">{lyrics.lyrics_body}</p>
                        </div>
                    </div>

                    <ul>
                        <li>
                            <strong>Album</strong>:{' '}{track.album_name}
                        </li>

                        <li>
                            <strong>Explicit</strong>:{' '}{track.explicit===0? 'Pfff...No' : 'Hell yes!!'}
                        </li>

                        <li>
                            <strong>Genre</strong>:{' '}{track.primary_genres.music_genre_list[0] 
                            !==undefined? track.primary_genres.music_genre_list[0].music_genre.music_genre_name:""}
                        </li>
                    
                        <li>
                            <strong>{'\u00A9'}</strong>:{' '}{lyrics.lyrics_copyright}
                        </li>
                    </ul>

                    
                </React.Fragment>
                )
            }
        
    }
}

export default Lyrics;