import React from "react";
import axios from "axios";

import { urlPlaylist } from "./LeftContainer";
import { headers } from "./LeftContainer";
import { PlaylistRenderedName, CreatePlaylistContainer, ClosePlaylistCreatorButton, SongPlaylistContainer, PlaylistSelector, PlaylistButtonsContainer, SelectPlaylistButtons, AddPlaylistButton, DeletePlaylistButton } from "./LeftContainerStyles";

import Songs from "./Songs"; 

export default class Playlists extends React.Component {
    state = {
        inputName: '',
        playlists: [],
        selectPlaylistName: '',
        selectPlaylistId: '',
        playlistNameRender: '',
        songsPlaylist: [],
        renderPlaylistName: '',
        renderingPlaylistName: false,
        creatingPlaylist: false,
    }
    componentDidMount() {
        this.getAllPlaylists()
    }
    getAllPlaylists = () => {
        axios.get(urlPlaylist, headers)
            .then((resp) => {
                this.setState({ playlists: resp.data.result.list })
            }).catch((err) => {
                alert(`Deu algo de errado! ${err.message}`)
            })
    }
    getPlaylistTracks = () => {
        axios.get(`${urlPlaylist}${this.state.selectPlaylistId}/tracks`, headers)
            .then((resp) => {
                this.setState({ songsPlaylist: resp.data.result.tracks })
                this.setState({ renderingPlaylistName: true })
                const renderName = this.state.selectPlaylistName
                this.setState({ renderPlaylistName: renderName })
            }).catch((err) => {
                alert(`Deu algo de errado! ${err.message}`)
            })
    }
    createPlaylist = () => {
        const body = {
            "name": this.state.inputName,
        }
        axios.post(urlPlaylist, body, headers)
            .then((resp) => {
                alert(`Playlist ${this.state.inputName} criada com sucesso!`)
                const createPlaylist = !this.state.creatingPlaylist
                this.setState({ inputName: '' })
                this.setState({ creatingPlaylist: createPlaylist })
                this.getAllPlaylists()
            }).catch((err) => {
                alert(`Deu algo de errado! ${err.message}`)
            })
    }
    deletePlaylist = () => {
        if (this.state.selectPlaylistId === '') {
            alert("Nenhuma playlist selecionada!")
        } else {
            if (window.confirm("Você deseja escluir esta playlist?")) {
                axios.delete(`${urlPlaylist}${this.state.selectPlaylistId}`, headers)
                    .then((resp) => {
                        alert("Playlist excluída com sucesso!")
                        this.setState({renderPlaylistName: ''})
                        this.setState({selectPlaylistId: ''})
                        this.getAllPlaylists()
                    }).catch((err) => {
                        alert(`Deu algo de errado! ${err.message}`)
                    })
            }
        }
    }
    onChangeInputName = (event) => {
        this.setState({ inputName: event.target.value })
    }
    onChangeSelect = (event) => {
        const [id, name] = event.target.value.split("*")

        this.setState({ selectPlaylistId: id })
        this.setState({ selectPlaylistName: name })
    }
    onClickCreatingPlaylist = () => {
        const createPlaylist = !this.state.creatingPlaylist
        this.setState({ creatingPlaylist: createPlaylist })
    }
    renderPlaylistName = () => {
        switch (this.state.renderingPlaylistName) {
            case false:
                return null
            case true:
                return <PlaylistRenderedName>{this.state.renderPlaylistName}</PlaylistRenderedName>
            default:
                return null
        }
    }
    renderCreatePlaylist = () => {
        switch (this.state.creatingPlaylist) {
            case true:
                return <CreatePlaylistContainer>
                    <ClosePlaylistCreatorButton onClick={this.onClickCreatingPlaylist}>X</ClosePlaylistCreatorButton>
                    <label>Nova Playlist:</label>
                    <input placeholder="Nome" onChange={this.onChangeInputName}
                        value={this.state.inputName}
                    ></input>
                    <button onClick={this.createPlaylist}>Criar playlist</button>
                </CreatePlaylistContainer>
            case false:
                return null
            default:
                return null
        }
    }
    renderSelectEmpty = () => {
        if (this.state.selectPlaylistId === "") {
            return <option value={this.state.selectPlaylistId}>Selecione uma playlist...</option>
        } else {
            return null
        }
    }
    render() {
        const renderPlaylists = this.state.playlists
            .sort((a, b) => a.name.localeCompare(b.name))
            .map((playlist) => {
                return <option
                    key={playlist.name}
                    value={`${playlist.id}*${playlist.name}`}>
                    {playlist.name}
                </option>
            })
        return (
            <SongPlaylistContainer>
                {this.renderPlaylistName()}
                <Songs
                    songs={this.state.songsPlaylist}
                    selectPlaylistId={this.state.selectPlaylistId}
                    getPlaylistTracks={this.getPlaylistTracks}
                />
                {this.renderCreatePlaylist()}
                <PlaylistSelector onChange={this.onChangeSelect}>
                    {this.renderSelectEmpty()}
                    {renderPlaylists}
                </PlaylistSelector>
                <PlaylistButtonsContainer>
                    <SelectPlaylistButtons title="Selecionar playlist" onClick={this.getPlaylistTracks}>Selecionar playlist</SelectPlaylistButtons>
                    <AddPlaylistButton title="Adicionar playlist" onClick={this.onClickCreatingPlaylist}>Criar playlist</AddPlaylistButton>
                    <DeletePlaylistButton title="Deletar playlist" onClick={this.deletePlaylist}>Excluir playlist</DeletePlaylistButton>
                </PlaylistButtonsContainer>
            </SongPlaylistContainer>
        )
    }
}