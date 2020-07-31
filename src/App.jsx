import React, { Component } from 'react';
import './App.css';
import { FormGroup, FormControl, InputGroup, Button, Container, Row } from 'react-bootstrap';
import Profile from './Profile';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            query: '',
            artist: null
        }
    }

    search() {
        console.log('this.state', this.state);
        const BASE_URL = 'https://spotify-api-wrapper.appspot.com/';
        const FETCH_URL = `${BASE_URL}artist/:${this.state.query}`;
        console.log('FETCH_URL', FETCH_URL);
        fetch(FETCH_URL, {
            method:'GET',
            /*headers: new Headers({
            'Authorization': 'Bearer BQBLsYmIh9...0'
            }),*/
            })
            .then(response => response.json())
            .then(json => {
                const artist = json.artists.items[0];
                console.log('artist', artist);
                this.setState({artist});
            })
            .catch(error => console.log('errore', error))
    }

    render() {
        return(
            <Container className="App">
                <div className="wrapper">
                    <div className="App-title">Music Artists</div>
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
                    <div>
                        <Profile 
                            artist={this.state.artist}
                        />
                    </div>
                    : <div></div>
                }
            </Container>
        )
    }
}

export default App;