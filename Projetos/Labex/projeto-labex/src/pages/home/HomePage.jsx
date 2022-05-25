
import { HomeText, MainHomeButtons, MainHomeButtonsContainer, MainHomePageContainer } from "./styles";
import { useNavigate } from "react-router-dom";

export default function HomePage() {
    const navigate = useNavigate()

    const goToTripsPage = () =>{
        navigate('/trips/list')
    }
    return (
        <MainHomePageContainer>
            <HomeText>A infinidade das estrelas nunca esteve tão perto de você!</HomeText>
            <MainHomeButtonsContainer>
                <MainHomeButtons onClick={goToTripsPage}
                >Explorar</MainHomeButtons>
            </MainHomeButtonsContainer>
        </MainHomePageContainer>        
    )
};