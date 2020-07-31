import React, { Component } from 'react';
import './App.css';
import { FormGroup, FormControl, InputGroup, Button, Container } from 'react-bootstrap';
import Profile from './Profile';
import Toptracks from './Toptracks';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            query: '',
            artist: null,
            tracks: []
        }
    }

    search() {
        console.log('this.state', this.state);
        const BASE_URL = 'https://api.spotify.com/v1/search?';
        let FETCH_URL = `${BASE_URL}q=$${this.state.query}&type=artist&limit=1`;
        const ALBUM_URL = 'https://api.spotify.com/v1/artists/';
        
        const userAccessToken = 'Bearer BQDrjRmcuSwHokp4jVrr1uVHndJuXqgYxTU7jhrSPHC2hmrwpBDJv1FzWapN-lzkrkKuyNq9ChC5W2U62E5CHVEEQIcHaT7Gb4TAygNONW5dGFvnUYXEFCcFbuGuLivEYpIyYWNXfuWdncGLy0OQRb7k9j9IKkOd3ih0bT1C6QqnrmtVjQ';
        fetch(FETCH_URL, {
            method:'GET',
            headers: new Headers({
                Authorization: `Bearer ${userAccessToken}`
            })
            })
            .then(response => response.json())
            .then(json => {
                const artist = json.artists.items[0];
                console.log('artist', artist);
                this.setState({artist});

                FETCH_URL = `${ALBUM_URL}${artist.id}/top-tracks?country=US&`;
                fetch(FETCH_URL, {
                    method:'GET',
                    headers: new Headers({
                        Authorization: `Bearer ${userAccessToken}`
                    })
                })
                .then(response => response.json())
                .then(json => {
                    console.log('top tracks:', json)
                const { tracks } = json;
                this.setState({tracks});
            })
            .catch(error => console.log('error', error))
        });
    }

    render() {
        return(
            <Container className="App">
                <div className="wrapper">
                    <div className="App-title">Music Player</div>
                    <FormGroup>
                        <InputGroup className="mb-3">
                            <FormControl
                                aria-label="Artist"
                                aria-describedby="basic-addon2"
                                type="text"
                                placeholder="Artist"

                                value={this.state.query}
                                onChange={event => {this.setState({query: event.target.value})}}
                                onKeyPress={ event => {
                                    if (event.key === 'Enter') {
                                        this.search()
                                    }
                                }}
                            />
                            <InputGroup.Append>
                            <Button variant="outline-secondary" onClick={() => this.search()}>Search</Button>
                            </InputGroup.Append>
                        </InputGroup>
                    </FormGroup>
                </div>

                {
                    this.state.artist !== null
                    ?
                    <div className="Artist-card">
                        <Profile 
                            artist={this.state.artist}
                        />
                        <Toptracks 
                            tracks={this.state.tracks}
                        />
                    </div>
                    : <div></div>
                }
            </Container>
        )
    }
}

export default App;