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

function PkmCard() {
    const data = useContext(GlobalStateContext)

    React.useEffect(() => {

    }, [])

    return <>
        {
            data.isLoadingGlobal
                ? <p>Loading</p>
                :
                data.pkmData
                    .sort(function (a, b) { return a.id - b.id })
                    .map((pkm) => {
                        return (
                            <Grid2 xs={3}>
                                <Card key={pkm.id} sx={{ maxWidth: '25vw' }}>
                                    <CardMedia
                                        component="img"
                                        height="100%"
                                        image={pkm.sprites.other.home.front_default}
                                        alt={pkm.name}
                                    />
                                    <CardContent>
                                        <Typography key={pkm.id} gutterBottom variant="h5" component="div">
                                            {pkm.name}
                                        </Typography>
                                        <Typography variant="h5" color="text.secondary">
                                            {pkm.types[0].type.name}
                                        </Typography>
                                    </CardContent>
                                    <CardActions>
                                        <Button size="small">Details</Button>
                                        <Button size="small">Add To Pokedex</Button>
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
        <Grid2 container spacing={2} disableEqualOverflow>
            <PkmCard />
        </Grid2>
    )
}