import Router from "./routes/Router";

import { useEffect } from "react";

export const apiUrl = 'https://us-central1-labenu-apis.cloudfunctions.net/labeX/'
export const student = 'caio-rigotto-guimaraes/'

function App() {
  useEffect(() => {
    document.title = "LabeX - Ao infinito e além"
  }, [])
  return (
    <Router />
  );
}

export default App;
