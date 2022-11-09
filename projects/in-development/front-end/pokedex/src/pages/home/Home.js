import * as React from 'react';
import { useContext } from 'react';
import Grid2 from '@mui/material/Unstable_Grid2';
import GlobalStateContext from '../../global/GlobalStateContext';
import { CircularProgress, Pagination, Stack } from '@mui/material';
import { PkmCard } from '../../components/pkmCard';

export const Home = () => {
    const data = useContext(GlobalStateContext)
    return (
        <Grid2 container
            spacing={3}
            disableEqualOverflow
            style={{ marginTop: '1vh' }}
        >
            {
                data.isLoadingGlobal && data.pkmData.length >= 19
                ? <CircularProgress color='info' />
                :
                <PkmCard />
            }
            <Stack spacing={2}>
                <Pagination count={20} variant="outlined" shape="rounded" onChange={data.changePage} />
            </Stack>
        </Grid2>
    )
}