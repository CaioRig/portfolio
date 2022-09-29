import { useState } from 'react';
import BASE_URL from '../constants/BASE_URL'
import useRequestData from "../hooks/useRequestData";
import GlobalStateContext from "./GlobalStateContext";


const GlobalState = (props) => {
    const [pkmData, isLoading] = useRequestData(`${BASE_URL}pokemon/?limit=20`)
    const [pkmUrl, setUrl] = useState()

    
    
    let globalData = {
        pkmData, isLoading
    }
    return (
        <GlobalStateContext.Provider value={globalData}>
            {props.children}
        </GlobalStateContext.Provider>
    )
}

export default GlobalState;