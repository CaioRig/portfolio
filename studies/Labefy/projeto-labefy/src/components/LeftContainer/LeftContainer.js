import React from 'react';

import { PlaylistContainer } from './LeftContainerStyles';
import Playlists from './Playlists';

export const urlPlaylist = "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/"
export const headers = { headers: { Authorization: "caio-rigotto-guimaraes" } }

export default class LeftContainer extends React.Component {
  render() {
    return (
      <PlaylistContainer>
          <Playlists />
      </PlaylistContainer>
    );
  }
}

