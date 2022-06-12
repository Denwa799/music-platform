import React, {ChangeEvent, useState} from 'react';
import MainLayout from 'layouts/MainLayout';
import TrackList from 'components/TrackList';
import {useRouter} from "next/router";
import {Grid, Card, Box, Button, TextField} from '@mui/material';
import {useTypedSelector} from "hooks/useTypedSelector";
import {NextThunkDispatch, wrapper} from "store";
import {fetchTracks, searchTracks} from 'store/actions-creators/track';
import {useDispatch} from "react-redux";

const Index = () => {
    const router = useRouter();
    const {tracks, tracksError} = useTypedSelector(state => state.track);
    const [query, setQuery] = useState('');
    const dispatch = useDispatch() as NextThunkDispatch;
    const [timer, setTimer] = useState(null);

    const search = async (event: ChangeEvent<HTMLInputElement>) => {
        setQuery(event.target.value);
        if (timer) {
            clearTimeout(timer);
        }
        setTimer(
            setTimeout(async () => {
                await dispatch(await searchTracks(event.target.value));
            }, 500)
        )
    }

    if (tracksError) {
        return (
            <MainLayout>
                <h1>{tracksError}</h1>
            </MainLayout>
        )
    }

    return (
        <div>
            <MainLayout title="Список треков">
                <Grid container justifyContent='center'>
                    <Card style={{width: 900}}>
                        <Box p={3}>
                            <Grid container justifyContent='space-between'>
                                <h1>Список треков</h1>
                                <Button onClick={() => router.push('/tracks/create')}>Загрузить</Button>
                            </Grid>
                        </Box>
                        <TextField
                            fullWidth
                            value={query}
                            onChange={search}
                        />
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