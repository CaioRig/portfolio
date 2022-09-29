import * as React from 'react';
import { useContext } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import GlobalStateContext from '../../global/GlobalStateContext';

function PkmCard() {
    const data = useContext(GlobalStateContext)
    console.log(data)

    return <>
        {
            data.isLoading
                ? <p>Loading</p>
                : <Card sx={{ maxWidth: '25vw' }}>
                    <CardMedia
                        component="img"
                        height="100%"
                        image={data[0].pkmData.sprites.other.home.front_default}
                        alt={data.pkmData.name}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {data.pkmData.name}
                        </Typography>
                        <Typography variant="h5" color="text.secondary">
                            {data.pkmData.types[0].type.name}
                            
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="small">Details</Button>
                        <Button size="small">Add To Pokedex</Button>
                    </CardActions>
                </Card>
        }
    </>
}


export const Home = () => {
    return (
        <PkmCard />
    )
}