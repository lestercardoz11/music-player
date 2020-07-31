import React, { Component } from 'react';
import './App.css';
import { Row, Col } from 'react-bootstrap';

class Profile extends Component {
    render() {
        let artist = {name: '', followers: {total: ''}, images: [{url: ''}], genres: []};
        artist = this.props.artist !== null? this.props.artist : artist;


        return (
            <div className="Profile">
                    <div className="Profile-info">
                        <Row className="justify-content-md-center">
                            <Col xs lg="4">
                                <img 
                                alt="Profile"
                                className="Profile-img"
                                src={artist.images[0].url}                
                                />
                            </Col>
                            <Col> 
                                <div className="Profile-name">{artist.name}</div>
                                <div className="Profile-followers">{artist.followers.total}  followers</div>
                                <div className="Profile-genres d-flex justify-content-left flex-wrap">
                                    {
                                        artist.genres.map((genre, k) => {
                                            return (
                                                <span className="genre" key={k}>{genre}</span>
                                            )
                                        })
                                    }
                                </div>
                            </Col>
                        </Row>
                    </div>
            </div>
        )
    }
}

export default Profile;