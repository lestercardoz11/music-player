import React, { Component } from 'react';
import './App.css';
import { Card } from 'react-bootstrap';

class Profile extends Component {
    render() {
        let artist = {name: '', followers: {total: ''}, images: [{url: ''}], genres: []};
        artist = this.props.artist !== null? this.props.artist : artist;


        return (
            <div className="Profile">
                <Card className="Card-style">
                    <div className="Profile-wrapper">
                        <img 
                            alt="Profile"
                            className="Profile-img"
                            src={artist.images[0].url}                
                        />
                    </div>
                    <div className="Profile-info">
                            <div className="Profile-name">{artist.name}</div>
                            <div className="Profile-followers">{artist.followers.total}  followers</div>
                            <div className="Profile-genres d-flex justify-content-center flex-wrap">
                                {
                                    artist.genres.map((genre, k) => {
                                        return (
                                            <span className="genre" key={k}>{genre}</span>
                                        )
                                    })
                                }
                            </div>
                    </div>
                </Card>
            </div>
        )
    }
}

export default Profile;