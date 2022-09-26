import { AppContainer, Main } from "./styles";
import Matches from "./pages/matches/matches";

export const apiUrl = "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/"
export const student = "caio-rigotto/"

export default function App() {

  return (
    <Main>
      <AppContainer>
        <Matches>
        </Matches>
      </AppContainer>
    </Main>
  );
}