import * as React from 'react';
import { useParams } from "react-router-dom";
import BASE_URL from "../../constants/BASE_URL";
import useRequestData from "../../hooks/useRequestData";
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { CircularProgress, Typography } from '@mui/material';
import bgColors from '../../constants/bgColors';

export const Details = () => {
    const pkmName = useParams()
    const [pkmDetails, loadingDetails] = useRequestData(`${BASE_URL}pokemon/${pkmName.name}`)

    return (
        <React.Fragment>
            <CssBaseline />
            {
                loadingDetails
                    ? <CircularProgress color='info' />
                    :
                    <Container maxWidth="80vw"
                    >
                        <Box sx={{
                            height: '85vh',
                            display: 'flex',
                            gap: '3vw',
                            justifyContent: 'center',
                            borderRadius: "10px",
                            bgcolor: bgColors[pkmDetails.types[0].type.name],
                            backgroundImage: `url(${pkmDetails.sprites.other.home.front_default})`,
                            backgroundRepeat: 'no-repeat',
                            backgroundPosition: 'center',
                        }}
                        >
                            <Typography
                                key={1}
                                style={{ textTransform: 'capitalize' }}
                                variant="h5"
                                color="text.secondary"
                                align='center'>
                                #{pkmDetails.id} {pkmDetails.species.name}
                            </Typography>
                            <Typography
                                key={1}
                                style={{ textTransform: 'capitalize' }}
                                variant="h5"
                                color="text.secondary"
                                align='left'>
                                Status: <br />
                                {
                                    pkmDetails.stats.map((statDetails) => {
                                        return (
                                            <Typography
                                                key={1}
                                                style={{ textTransform: 'capitalize' }}
                                                variant="h6"
                                                color="text.secondary"
                                                align='left'>
                                                {statDetails.stat.name}: {statDetails.base_stat} <br />
                                            </Typography>
                                        )
                                    })
                                }
                            </Typography>
                            <Typography
                                key={1}
                                style={{ textTransform: 'capitalize' }}
                                variant="h5"
                                color="text.secondary"
                                align='left'>
                                Types: <br />
                                {
                                    pkmDetails.types.map((typeDetails) => {
                                        return (
                                            <Typography
                                                key={1}
                                                style={{ textTransform: 'capitalize' }}
                                                variant="h6"
                                                color="text.secondary"
                                                align='left'>
                                                {typeDetails.type.name} <br />
                                            </Typography>
                                        )
                                    })
                                }
                            </Typography>
                            <Typography
                                key={1}
                                style={{ textTransform: 'capitalize' }}
                                variant="h5"
                                color="text.secondary"
                                align='left'>
                                Moves: <br />
                                {
                                    pkmDetails.moves.slice(0, 5).map((moveDetails) => {
                                        return (
                                            <Typography
                                                key={1}
                                                style={{ textTransform: 'capitalize' }}
                                                variant="h6"
                                                color="text.secondary"
                                                align='left'>
                                                {moveDetails.move.name} <br />
                                            </Typography>
                                        )
                                    })
                                }
                            </Typography>
                            <Typography
                                key={1}
                                style={{ textTransform: 'capitalize' }}
                                variant="h5"
                                color="text.secondary"
                                align='center'>
                                Weight: <br />
                                <Typography
                                    key={1}
                                    style={{ textTransform: 'capitalize' }}
                                    variant="h6"
                                    color="text.secondary"
                                    align='left'>
                                    {pkmDetails.weight}
                                </Typography>
                            </Typography>
                        </Box>
                    </Container>
            }
        </React.Fragment>
    )
}