import { AppName, MatchesMainContainer, MatchesButton, MatchesContainer, MatchIMG, ShowMatchesContainer, MatchName, ResetMatchesButton } from "./styles";

import MatchesPic from "./img/matchesIMG.svg"
import axios from "axios";
import { apiUrl, student } from "../../App";
import { useEffect, useState } from "react";
import Cards from "../cards/cards";

export default function Matches() {
    const [matches, setMatches] = useState([])
    const [showingMatches, setShowingMatches] = useState(false)

    useEffect(() => {
        getMatches()
    }, [])

    const getMatches = () => {
        axios
        .get(`${apiUrl}${student}matches`)
            .then(res => {
                setMatches(Object.values(res.data))
            })
            .catch(err => {
                alert("Ocorreu algo de errado com sua requisição!")
            })
    }
    const clearMatches = () => {
        axios
        .put(`${apiUrl}${student}clear`)
        .then(res => {
            alert("Matches resetados!")
            getMatches()
        })
        .catch(err => {
            alert("Ocorreu algo de errado com sua requisição!")
        })
    }
    const onClickShowMatches = () => {
        getMatches()
        setShowingMatches(!showingMatches)
    }
    const onClickResetMatches = () => {
        clearMatches()
    }
    const renderMatchs = matches
        .map((match) => {
            switch (showingMatches) {
                case true:
                    return match.map((match) => {
                        return <ShowMatchesContainer key={match.id}>
                            <MatchIMG src={match.photo}></MatchIMG>
                            <MatchName>{match.name}</MatchName>
                        </ShowMatchesContainer>
                    })
                case false:
                    return <Cards key={Math.random}/>
                default:
                    return <Cards key={Math.random}/>
            }
        })

    return (
        <MatchesMainContainer>
            <MatchesContainer>
                <AppName>
                    astromatch
                </AppName>
                <MatchesButton onClick={onClickShowMatches}>
                    <img src={MatchesPic} alt="ícone perfis de matches"></img>
                </MatchesButton>
            </MatchesContainer>
            {renderMatchs}
            <ResetMatchesButton onClick={onClickResetMatches}>Limpar matches/swipes</ResetMatchesButton>
        </MatchesMainContainer>
    )
}