import React from "react";
import styled from "styled-components";
import SecaoMensagemLogs from "./components/SecaoMensagemLog/SecaoMensagemLog";

const MainContainer = styled.div`
  border: 2px solid black;
  background-image: url('https://cdn.pixabay.com/photo/2015/02/07/02/17/paper-626781_960_720.jpg');
  background-size: cover;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`

class App extends React.Component{
  render() {
    return (
      <MainContainer>
        <SecaoMensagemLogs>
        </SecaoMensagemLogs>
      </MainContainer>
    );
  }
}

export default App;
