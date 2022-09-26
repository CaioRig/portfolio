import styled from "styled-components";

// LeftContainer.js

export const PlaylistContainer = styled.div`
  display: flex;
  border: 2px solid black;
  background-color: lightgrey;
  height: 90vh;
  margin-left: auto;
  margin-right: auto;
  border-radius: 10px;
`

// Songs.js

export const SongSelector = styled.div`
  /* display: flex;
  flex-direction: column;
  border-bottom: 2px solid black;
  height: 90%; */
`
export const SongsSelectorContainer = styled.div`
  display: flex;
  flex-direction: column;
  border-bottom: 2px solid black;
  height: 90%;
`
export const SongContainer = styled.div`
    display: flex;
    justify-content: space-between;
    &:hover{
        background-color: grey;
        border-radius: 10px;
        border: 1px solid black;
    }
`
export const ButtonSong = styled.button`
    width: 100%;
    border: transparent;
    background-color: transparent;    
    height: 5vh;
    font-size: large;
    margin-bottom: 1vh;
`
export const ButtonDeleteSong = styled.button`
    color: red;
    border-radius: 10px;
    height: 50%;
    align-self: center;
    margin-right: 5px;
`
export const ButtonAddSong = styled.button`
    align-self: center;
    margin-top: auto;
    margin-bottom: 2vh;
    padding-left: 10%;
    padding-right: 10%;
    border-radius: 10px;
    color: green;
    font-size: large;
`
export const AddSongContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: grey;
    border: solid black 2px;
    border-radius: 10px; 
    position: absolute;
    padding: 2%;
    top: 5vh;
    left: 0; 
    right: 0; 
    margin-left: auto; 
    margin-right: auto; 
    width: fit-content;
    height: fit-content;
`
export const CloseAddSongButton = styled.button`
    color: red;
    border-radius: 10px;
    position: absolute;
    right: 0;
    top: 0;
    background-color: transparent;
    border: 1px lightgrey solid;
    align-self: end;
    margin-right: 10px;
    &:hover{
        background-color: lightgrey;
    }
`

// Playlists.js

export const SongPlaylistContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 60vw;
`
export const PlaylistRenderedName = styled.h2`
    line-break: auto;
    max-width: fit-content;
    text-align: center;
    align-self: center;
`
export const PlaylistSelector = styled.select`
  margin-top: auto;
  margin-bottom: 1vh;
  background-color: lightgrey;
  border: 1px solid grey;
  padding: 2%;
  font-size: large;
  &:focus{
      outline: none;
    }
`
export const CreatePlaylistContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: grey;
    border: solid black 2px;
    border-radius: 10px; 
    position: absolute;
    padding: 2%;
    top: 5vh;
    left: 0; 
    right: 0; 
    margin-left: auto; 
    margin-right: auto; 
    width: fit-content;
    height: fit-content;
`
export const ClosePlaylistCreatorButton = styled.button`
    color: red;
    border-radius: 10px;
    position: absolute;
    right: 0;
    top: 0;
    background-color: transparent;
    border: 1px lightgrey solid;
    align-self: end;
    margin-right: 10px;
    &:hover{
        background-color: lightgrey;
    }
`
export const PlaylistButtonsContainer = styled.div`
        display: flex;
        justify-content: space-around;
        margin-bottom: 2vh;
`
export const SelectPlaylistButtons = styled.button`
    font-size: large;
`
export const DeletePlaylistButton = styled.button`
    color: red;
    border-radius: 10px;
`
export const AddPlaylistButton = styled.button`
    border-radius: 10px;
    color: green;
    font-size: large;
`

// AudioPlayer.js

export const AudioPlayerContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: lightgrey;
  margin-right: 3vw;
  border-radius: 10px;
`