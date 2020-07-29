import React, { Component } from 'react';
import './App.css';
import { FormGroup, FormControl, InputGroup } from 'react-bootstrap';

class App extends Component {
    render() {
        return(
            <div className="App">
                <div className="App-title">Music Player</div>
                <FormGroup>
                    <InputGroup>
                    <FormControl 
                        type="text"
                        placeholder="Artist"
                    />
                    <InputGroup.Addon>
                        <span>Search</span>
                    </InputGroup.Addon>
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