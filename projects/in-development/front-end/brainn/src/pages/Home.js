import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import GameSelector from '../components/GameSelector';
import BallCards from '../components/BallCards';
import useRequestData from '../hooks/useRequestData';
import BASE_URL from '../constants/BASE_URL';
import GlobalContext from '../global/GlobalContext';

export default function Home() {
    const data = React.useContext(GlobalContext)
    const [gameSelected, setSelected] = React.useState(0)
    const [contestId, setContestId] = React.useState(2359)
    const [ballNumbers, isLoadingNumbers] = useRequestData(`${BASE_URL}/concursos/${contestId}`)

    React.useEffect(() => {
        gameSelected &&
        setContestId(data.contestData[gameSelected].concursoId)
    }, [gameSelected])

    const handleSelectChange = (event) => {
        setSelected(event.target.value);
    };

    return (
        <React.Fragment>
            <CssBaseline />
            <Container maxWidth="100sm"
                disableGutters>
                <Box sx={{
                    bgcolor: '#EFEFEF',
                    height: '100vh',
                    display: 'flex'
                }}>
                    <GameSelector handleSelectChange={handleSelectChange}
                        gameSelected={gameSelected}
                        contestDate={ballNumbers}
                        isLoadingNumbers={isLoadingNumbers}
                    />
                    {

                    }
                    <BallCards
                        gameSelected={gameSelected}
                        ballNumbers={ballNumbers}
                        isLoadingNumbers={isLoadingNumbers}
                    />
                </Box>
            </Container>
        </React.Fragment>
    );
}
