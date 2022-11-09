import GlobalStateContext from '../../global/GlobalStateContext';
import { useContext } from 'react';


import pokeballLogo from '../../img/Pokeball.png'
import bgColors from '../../constants/bgColors';
import { goToDetails } from '../../router/Coordinator';
import Card from '@mui/material/Card';
import Grid2 from '@mui/material/Unstable_Grid2';
import { Container } from '@mui/material';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export const Pokedex = () => {
    const data = useContext(GlobalStateContext)
    console.log(data.selectedPokedex)
    return (
        <>{
            data.selectedPokedex
                .sort(function (a, b) { return a.id - b.id })
                .map((pkm) => {
                    return (
                        <Grid2
                            xs={3}>
                            <Card key={pkm.id}
                                sx={{
                                    maxWidth: '25vw',
                                    minHeight: '90%',
                                    backgroundColor: bgColors[pkm.types[0].type.name],
                                    backgroundImage: `url(${pokeballLogo})`,
                                    backgroundRepeat: "no-repeat",
                                    backgroundPosition: "center",
                                    backgroundSize: "85%"
                                }}>
                                <CardMedia

                                    component="img"
                                    height="100%"
                                    image={pkm.sprites.versions["generation-v"]["black-white"].animated.front_default}
                                    alt={pkm.name}
                                />
                                <CardContent>
                                    <Typography
                                        key={pkm.id}
                                        style={{
                                            textTransform: 'capitalize',
                                        }}
                                        gutterBottom
                                        variant="h5"
                                        component="div"
                                        align='center'>
                                        #{pkm.id} {pkm.name}
                                    </Typography>
                                    <Container sx={{
                                        display: "flex",
                                        justifyContent: "space-evenly"
                                    }}>
                                        {
                                            pkm.types.map((type) => {
                                                return <>
                                                    <Typography
                                                        key={type.type.name}
                                                        style={{
                                                            textTransform: 'capitalize'
                                                        }}
                                                        variant="h5"
                                                        color="text.secondary"
                                                        align='center'>
                                                        {type.type.name}
                                                    </Typography>
                                                </>
                                            })
                                        }
                                    </Container>
                                </CardContent>
                                <CardActions style={{
                                    display: 'flex',
                                    justifyContent: 'space-around'
                                }}>
                                    <Button
                                        variant='outlined'
                                        color='inherit'
                                        size="small"
                                    >
                                        Details
                                    </Button>
                                    <Button
                                        onClick={() => data.removeFromPokedex(pkm.name)}
                                        variant='outlined'
                                        color='inherit'
                                        size="small">
                                        Remove from Pokedex
                                    </Button>
                                </CardActions>
                            </Card>
                        </Grid2>
                    )
                })
        }
        </>
    )
}