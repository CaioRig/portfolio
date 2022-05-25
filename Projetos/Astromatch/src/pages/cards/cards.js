import { useEffect, useState } from "react"
import axios from "axios"

import HeartPic from "./img/heart.svg"
import RefusePic from "./img/refuse.svg"
import Loading from "./img/beating-heart.webp"

import { apiUrl, student } from "../../App"

import { Card, BioPerson, MatchSuccessContainer, CardsButtonRefuse, CardsButtonHeart, CardsButtonsContainer, CardsContainer, NamePerson, LoadingScreen, MatchSucessIMG, MatchSuccessText, MatchSuccessCloseText, MatchSuccessTextContainer } from "./styles"

export default function Cards() {
    const [personAge, setPersonAge] = useState("")
    const [personBio, setPersonBio] = useState("")
    const [personId, setPersonId] = useState("")
    const [personName, setPersonName] = useState("")
    const [personPhoto, setPersonPhoto] = useState("")
    const [match, setMatch] = useState(false)
    const [matchSuccesName, setSuccessName] = useState("")
    const [matchSuccessPhoto, setSuccessPhoto] = useState("")
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        getProfile()
    }, [])

    const getProfile = async () => {
        try {
            await axios
                .get(`${apiUrl}${student}person`)
                .then(res => {
                    setPersonAge(res.data.profile.age)
                    setPersonBio(res.data.profile.bio)
                    setPersonId(res.data.profile.id)
                    setPersonName(res.data.profile.name)
                    setPersonPhoto(res.data.profile.photo)
                });
            setLoading(true);
        } catch (err) {
            alert("Ocorreu algo de errado com sua requisição!")
        }
    }
    const choosePerson = (id) => {
        const body = {
            "id": id,
            "choice": true
        }
        axios
            .post(`${apiUrl}${student}choose-person`, body)
            .then(res => {
                setMatch(res.data.isMatch)
                switch (res.data.isMatch) {
                    case true:
                        setSuccessName(personName)
                        setSuccessPhoto(personPhoto)
                }
                getProfile()
            })
            .catch(err => {
                alert("Ocorreu algo de errado com sua requisição!")
            })
    }
    const onClickRefuse = () => {
        getProfile()
    }
    const onClickHeart = () => {
        choosePerson(personId)
    }
    const onClickMatchSuccess = () => {
        setMatch(false)
    }
    const renderMatchSucess = () => {
        switch (match) {
            case true:
                return <MatchSuccessContainer onClick={onClickMatchSuccess}>
                    <MatchSucessIMG src={matchSuccessPhoto}></MatchSucessIMG>
                    <MatchSuccessTextContainer>
                    <MatchSuccessText>Você deu match com {matchSuccesName}!</MatchSuccessText>
                    <MatchSuccessCloseText>(clique para fechar)</MatchSuccessCloseText>
                    </MatchSuccessTextContainer>
                </MatchSuccessContainer>
            case false:
                return null
            default:
                return null
        }
    }

    return (
        <CardsContainer>
            {loading ? <Card url={personPhoto}>
                <BioPerson>{personBio}</BioPerson>
                <NamePerson>{personName}, {personAge}</NamePerson>
            </Card>
                :
                <LoadingScreen src={Loading}></LoadingScreen>
            }
            {renderMatchSucess()}
            <CardsButtonsContainer>
                <CardsButtonRefuse onClick={onClickRefuse}><img src={RefusePic}></img></CardsButtonRefuse>
                <CardsButtonHeart onClick={onClickHeart}><img src={HeartPic}></img></CardsButtonHeart>
            </CardsButtonsContainer>
        </CardsContainer>
    )
}