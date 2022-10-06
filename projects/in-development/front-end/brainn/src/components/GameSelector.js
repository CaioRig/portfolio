import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import GlobalContext from '../global/GlobalContext';
import logo from "../img/logo.png"
import { Typography } from '@mui/material';
import CircularProgress from '@mui/material/CircularProgress';

export default function GameSelector(props) {
    const data = React.useContext(GlobalContext);
    const gameSelected = props.gameSelected,
        contestDate = props.contestDate,
        isLoadingNumbers = props.isLoadingNumbers;

    const renderLogo = () => {
        if (!data.isLoadingName && gameSelected !== "") {
            let name = data.gameName[gameSelected].nome

            return (
                <Box sx={{
                    display: 'flex',
                    filter: 'brightness(0) invert(1)',
                    alignItems: 'center'
                }}>
                    <img src={logo}
                        alt='Logo das Loterias Caixa'
                        style={{ width: '20%', }}
                    />
                    <Typography
                        style={{
                            fontFamily: 'Montserrat',
                            fontStyle: 'normal',
                            fontWeight: '700',
                            fontSize: '30px',
                            lineHeight: '37px',
                            color: '#FFFFFF',
                            textTransform: "uppercase"
                        }}
                    >
                        {name}
                    </Typography>
                </Box>
            )
        }
    }

    const renderContest = () => {
        if (!data.isLoadingContest && gameSelected !== "" && isLoadingNumbers === false) {
            let date = new Date(contestDate.data).toLocaleDateString('pt-br'),
                contestId = data.contestData[gameSelected].concursoId;

            return (
                <Box sx={{
                    display: 'flex',
                    filter: 'brightness(0) invert(1)',
                    flexDirection: 'column',
                    alignSelf: 'flex-start',
                    marginLeft: '3vw'
                }}>
                    <Typography
                        style={{
                            fontFamily: 'Montserrat',
                            fontStyle: 'normal',
                            fontWeight: '500',
                            fontSize: '2vh',
                            color: '#FFFFFF',
                            textTransform: "uppercase"
                        }}
                    >
                        Concurso <br />
                        {contestId} - {date}
                    </Typography>
                </Box>
            )
        }
    }

    return (
        <Box
            sx={{
                minWidth: '30vw',
                maxWidth: '30vw',
                width: 'fit-content',
                bgcolor: '#6BEFA3',
                height: '100vh',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'space-between'
            }}>
            <FormControl sx={{
                minWidth: '60%',
                maxWidth: '70%',
                bgcolor: '#FFFFFF',
                borderRadius: '5px'
            }}
                margin='normal'
                variant='standard'
            >
                <InputLabel id="Game">
                    Selecione um jogo
                </InputLabel>
                <Select
                    style={{ textTransform: "uppercase" }}
                    id="Games"
                    value={gameSelected}
                    defaultValue="0"
                    label="Game"
                    onChange={props.handleSelectChange}
                >
                    {data.isLoadingName
                        ? <CircularProgress color="success" />
                        :
                        data.gameName.map((game) => {
                            return (
                                <MenuItem
                                    style={{ textTransform: "uppercase" }}
                                    value={game.id}
                                    key={game.id}
                                    id="Games">
                                    {game.nome}
                                </MenuItem>
                            )
                        })}
                </Select>
            </FormControl>
            {data.isLoadingName && gameSelected !== ""
            ? <CircularProgress color="success" />
            :            
            renderLogo()}
            {isLoadingNumbers
                ?
                <CircularProgress color="success" />
                :
                renderContest()}
        </Box>
    );
}
