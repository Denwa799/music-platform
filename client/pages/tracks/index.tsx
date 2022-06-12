import React from 'react';
import MainLayout from 'layouts/MainLayout';
import {ITrack} from "types/track";
import TrackList from 'components/TrackList';
import {useRouter} from "next/router";
import { Grid, Card, Box, Button } from '@mui/material';

const Index = () => {
    const router = useRouter();
    const tracks: ITrack[] = [
        {_id: '1', name: 'Трек 1', artist: 'Исполнитель 1', text: 'Какой-то текст', listens: 5, audio: 'http://localhost:5000/audio/57d5170d-ad71-460c-ac79-005ff65d6db1.mp3', picture: 'http://localhost:5000/image/5d81780f-a00d-4032-a9d1-b0b48780582d.jpg', comments: []},
        {_id: '2', name: 'Трек 2', artist: 'Исполнитель 1', text: 'Какой-то текст', listens: 5, audio: 'http://localhost:5000/audio/57d5170d-ad71-460c-ac79-005ff65d6db1.mp3', picture: 'http://localhost:5000/image/5d81780f-a00d-4032-a9d1-b0b48780582d.jpg', comments: []},
        {_id: '3', name: 'Трек 3', artist: 'Исполнитель 1', text: 'Какой-то текст', listens: 5, audio: 'http://localhost:5000/audio/57d5170d-ad71-460c-ac79-005ff65d6db1.mp3', picture: 'http://localhost:5000/image/5d81780f-a00d-4032-a9d1-b0b48780582d.jpg', comments: []},
    ]

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
                        <TrackList tracks={tracks} />
                    </Card>
                </Grid>
            </MainLayout>
        </div>
    );
};

export default Index;