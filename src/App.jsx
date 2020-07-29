import React, { Component } from 'react';
import './App.css';
import { FormGroup, FormControl, InputGroup, Button } from 'react-bootstrap';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            query: ''
        }
    }

    search() {
        console.log('this.state', this.state);
        const BASE_URL = 'https://spotify-api-wrapper.appspot.com/';
        const FETCH_URL = `${BASE_URL}artist/:${this.state.query}`;
        console.log('FETCH_URL', FETCH_URL);
        fetch(FETCH_URL, {
            method:'GET',
            headers: new Headers({
            'Authorization': 'Bearer BQBLsYmIh9...0'
            }),
            })
            .then(response => response.json())
            .then(json => console.log('json', json))
            .catch(error => console.log('errore', error))
    }

    render() {
        return(
            <div className="App">
                <div className="App-title">Music Player</div>
                <FormGroup>
                    <InputGroup>
                    <FormControl 
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
                    <Button onClick={() => this.search()}>Search</Button>
                    </InputGroup>
                </FormGroup>
                <div className="Profile">
                    <div>Artist Picture</div>
                    <div>Artist Name</div>
                </div>
                <div className="Gallery">
                    Gallery
                </div>
            </div>
        )
    }
}

export default App;