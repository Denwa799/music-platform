import React from 'react';
import MainLayout from 'layouts/MainLayout';
import TrackList from 'components/TrackList';
import {useRouter} from "next/router";
import {Grid, Card, Box, Button} from '@mui/material';
import {useTypedSelector} from "hooks/useTypedSelector";
import {NextThunkDispatch, wrapper} from "store";
import { fetchTracks } from 'store/actions-creators/track';

const Index = () => {
    const router = useRouter();
    const {tracks, tracksError} = useTypedSelector(state => state.track);

    if (tracksError) {
        return (
            <MainLayout>
                <h1>{tracksError}</h1>
            </MainLayout>
        )
    }

    return (
        <div>
            <MainLayout>
                <Grid container justifyContent='center'>
                    <Card style={{width: 900}}>
                        <Box p={3}>
                            <Grid container justifyContent='space-between'>
                                <h1>Список треков</h1>
                                <Button onClick={() => router.push('/tracks/create')}>Загрузить</Button>
                            </Grid>
                        </Box>
                        <TrackList tracks={tracks}/>
                    </Card>
                </Grid>
            </MainLayout>
        </div>
    );
};

export default Index;

export const getServerSideProps = wrapper.getServerSideProps((store) => async (context) => {
    const dispatch = store.dispatch as NextThunkDispatch;
    await dispatch(await fetchTracks());
    return null;
})