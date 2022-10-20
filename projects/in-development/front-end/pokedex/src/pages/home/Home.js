import * as React from 'react';
import { useContext } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid2 from '@mui/material/Unstable_Grid2';
import GlobalStateContext from '../../global/GlobalStateContext';
import { goToDetails } from '../../router/Coordinator';
import { useNavigate } from 'react-router-dom';
import { CircularProgress } from '@mui/material';

function PkmCard() {
    const navigate = useNavigate()
    const data = useContext(GlobalStateContext)

    return <>
        {
            data.isLoadingGlobal
                ? <CircularProgress color='info' />
                :
                data.pkmData
                    .sort(function (a, b) { return a.id - b.id })
                    .map((pkm) => {
                        return (
                            <Grid2 xs={3}>
                                <Card key={pkm.id}
                                    sx={{
                                        maxWidth: '25vw',
                                        minHeight: '100%'
                                    }}>
                                    <CardMedia
                                        onClick={() => goToDetails(navigate, pkm.name)}
                                        component="img"
                                        height="100%"
                                        image={pkm.sprites.other.home.front_default}
                                        alt={pkm.name}
                                    />
                                    <CardContent>
                                        <Typography
                                            onClick={() => goToDetails(navigate, pkm.name)}
                                            key={pkm.id}
                                            style={{ textTransform: 'capitalize' }}
                                            gutterBottom
                                            variant="h5"
                                            component="div"
                                            align='center'>
                                            #{pkm.id} {pkm.name}
                                        </Typography>
                                        {
                                            pkm.types.map((type) => {
                                                return <>
                                                    <Typography
                                                        key={type.type.name}
                                                        style={{ textTransform: 'capitalize' }}
                                                        variant="h5"
                                                        color="text.secondary"
                                                        align='center'>
                                                        {type.type.name}
                                                    </Typography>
                                                </>
                                            })
                                        }
                                    </CardContent>
                                    <CardActions style={{
                                        display: 'flex',
                                        justifyContent: 'space-around'
                                    }}>
                                        <Button onClick={() => goToDetails(navigate, pkm.name)}
                                            variant='outlined'
                                            size="small">
                                            Details
                                        </Button>
                                        <Button variant='outlined'
                                            size="small">
                                            Add To Pokedex
                                        </Button>
                                    </CardActions>
                                </Card>
                            </Grid2>
                        )
                    })
        }
    </>
}
export const Home = () => {
    return (
        <Grid2 container
            spacing={2}
            disableEqualOverflow
            style={{ marginTop: '1vh' }}>
            <PkmCard />
        </Grid2>
    )
}