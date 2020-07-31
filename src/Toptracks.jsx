import React, { Component } from 'react';
import './App.css';
import { Row, Col } from 'react-bootstrap';

class Toptracks extends Component {
    constructor(props) {
        super(props);
        this.state = {
            playingUrl: '',
            audio: null,
            playing: false
        }
    }

    playAudio(previewUrl) {
        let audio = new Audio(previewUrl);
        if (!this.state.playing) {
            audio.play();
            this.setState({
                playing: true,
                playingUrl: previewUrl,
                audio
            })
        } else {
            if (this.state.playingUrl === previewUrl) {
                this.state.audio.pause();
                this.setState({
                    playing: false
                })
            } else {
                this.state.audio.pause();
                audio.play();
                this.setState({
                    playing: true,
                    playingUrl: previewUrl,
                    audio
                })
            }
        }
    }
    render() {
        console.log('Top track props', this.props);
        const { tracks } = this.props;
        return (
            <div>
                {tracks.map((track, k) => {
                    const trackImg = track.album.images[0].url;
                    return(
                        <div
                        key={k}
                        className="track"
                        onClick={() => this.playAudio(track.preview_url)}
                        >
                            <Row>
                                <Col xs lg="1">
                                </Col>
                                <Col xs lg="2">
                                <img
                                    src={trackImg}
                                    className="track-Img"
                                    alt="track"
                                    />
                                    <div className="track-play">
                                        <div className="track-play-inner">
                                            {
                                                this.state.playingUrl === track.preview_url
                                                                        ? <span><b>| |</b></span>
                                                                        : <span>&#9654;</span>
                                            }
                                        </div>
                                    </div>
                                </Col>
                                <Col>
                                    <div className="textdiv">
                                        <p>{track.name}</p>
                                    </div>
                                </Col>
                            </Row>
                        </div>
                    )
                })}
            </div>
        )
    }
}

export default Toptracks;