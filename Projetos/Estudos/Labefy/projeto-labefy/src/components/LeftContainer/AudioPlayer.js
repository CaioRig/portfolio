import React from 'react';

import { AudioPlayerContainer } from './LeftContainerStyles';

export default class AudioPlayer extends React.Component {
    renderSongNameArtist = () => {
        switch (this.props.songSelected) {
            case true:
                return <div><h2>{this.props.selectSongName} - {this.props.selectSongArtist}</h2>
                    <audio controls src={this.props.selectSongUrl}
                        type='audio/mp3'>
                    </audio>
                </div>
            case false:
                return null
            default:
                return null
        }
    }
    render() {
        return (
            <AudioPlayerContainer>
                {this.renderSongNameArtist()}
            </AudioPlayerContainer>
        );
    }
}