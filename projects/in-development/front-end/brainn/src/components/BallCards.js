import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Grid2 from '@mui/material/Unstable_Grid2/Grid2';
import CircularProgress from '@mui/material/CircularProgress';

export default function BallCards(props) {
    const ballNumbers = props.ballNumbers,
        isLoadingNumbers = props.isLoadingNumbers;

    return (
        <Grid2
            container
            disableEqualOverflow
            marginLeft={'auto'}
            marginRight={'auto'}
            justifyContent={'center'}
            alignItems={'center'}
            overflow={'auto'}
            md={5}
            spacing={1}
            rowGap={2}
        >
            {
                isLoadingNumbers
                    ?
                    <CircularProgress color="success" />
                    :
                    ballNumbers.numeros.map((number) => {
                        return (
                            <Grid2
                                key={number}
                            >
                                <Avatar sx={{
                                    bgcolor: '#FFFFFF',
                                    color: '#000000'
                                }}
                                    key={number}
                                >
                                    {number}
                                </Avatar>
                            </Grid2>
                        )
                    })

            }
        </Grid2>
    );
}