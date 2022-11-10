import axios from 'axios';
import { useEffect, useState } from 'react';
import BASE_URL from '../constants/BASE_URL'
import useRequestData from "../hooks/useRequestData";
import GlobalStateContext from "./GlobalStateContext";


const GlobalState = (props) => {
    const [pageNumber, setPageNumber] = useState(0)
    const changePage = (e, value) => setPageNumber((value - 1) * 20)

    const [apiData, isLoading] = useRequestData(`${BASE_URL}pokemon/?limit=20&offset=${pageNumber}`)
    const [isLoadingGlobal, setLoading] = useState(true)
    const [pkmUrl, setUrl] = useState()
    const [pkmData, setData] = useState([])

    const [selectedPokedex, setSelectedPokedex] = useState([])

    useEffect(() => {
        setLoading(true)
        let urls = []
        !isLoading && pkmData &&
            (apiData.results.map((pkm) => {
                urls.push(pkm.url)
                setUrl(urls)
                return null
            }))
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
                        if (individualData.length >= 20) {
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

    const addToPokedex = (pokeName) => {
        const selectedIndex = pkmData.findIndex((pokemon) => {
            return pokemon.name === pokeName
        })
        const selectedData = []
        selectedData.push(...selectedPokedex, pkmData[selectedIndex])
        alert("Pokemon added to Pokedex!")
        setSelectedPokedex(selectedData)
    }
    const removeFromPokedex = (pokeName) => {
        const selectedIndex = selectedPokedex.findIndex((pokemon) => {
            return pokemon.name === pokeName
        })
        const oldSelected = [... selectedPokedex]
        oldSelected.splice(selectedIndex,1)
        alert("Pokemon removed from Pokedex!")
        setSelectedPokedex(oldSelected)
    }

    let globalData = {
        pkmData,
        isLoadingGlobal,
        changePage,
        addToPokedex,
        removeFromPokedex,
        selectedPokedex
    }
    return (
        <GlobalStateContext.Provider value={globalData}>
            {props.children}
        </GlobalStateContext.Provider>
    )
}

export default GlobalState;