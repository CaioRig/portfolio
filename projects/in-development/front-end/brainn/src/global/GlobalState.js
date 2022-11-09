import BASE_URL from "../constants/BASE_URL"
import useRequestData from "../hooks/useRequestData"
import GlobalContext from "./GlobalContext"

const GlobalState = (props) => {
    const [gameName, isLoadingName] = useRequestData(`${BASE_URL}/loterias`)
    const [contestData, isLoadingContest] = useRequestData(`${BASE_URL}/loterias-concursos`)

    let globalData = {
        gameName,
        isLoadingName,
        contestData,
        isLoadingContest
    }

    return (
        <GlobalContext.Provider value={globalData}>
            {props.children}
        </GlobalContext.Provider>
    )
}

export default GlobalState;