import axios from 'axios';
import { useEffect, useState } from 'react';
import BASE_URL from '../constants/BASE_URL'
import useRequestData from "../hooks/useRequestData";
import GlobalStateContext from "./GlobalStateContext";


const GlobalState = (props) => {
    const [apiData, isLoading] = useRequestData(`${BASE_URL}pokemon/?limit=20`)
    const [isLoadingGlobal, setLoading] = useState(true)
    const [pkmUrl, setUrl] = useState()
    const [pkmData, setData] = useState()

    useEffect(() => {
        setLoading(true)
        let urls = []
        !isLoading && pkmData &&
            apiData.results.map((pkm) => {
                urls.push(pkm.url)
                setUrl(urls)
                return null
            })
    }, [apiData])

    useEffect(() => {
        setLoading(true)
        let individualData = []
        !isLoading && pkmUrl &&
            pkmUrl.map((url) => {
                axios
                    .get(url)
                    .then((res) => {
                        individualData.push(res.data)
                        console.log(individualData)
                        if (individualData.length >= 19) {
                            setLoading(false)
                        }
                    })
                    .catch((err) => {
                        console.log(err)
                    })
                return null
            })
        setData(individualData)
    }, [pkmUrl])


    let globalData = {
        pkmData,
        isLoadingGlobal
    }
    return (
        <GlobalStateContext.Provider value={globalData}>
            {props.children}
        </GlobalStateContext.Provider>
    )
}

export default GlobalState;