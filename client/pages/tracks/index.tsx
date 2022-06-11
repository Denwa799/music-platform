import { useRouter } from 'node_modules/next/router';
import React from 'react';
import {Box, Button, Card, Grid } from 'node_modules/@mui/material/index';
import MainLayout from 'layouts/MainLayout';
import {ITrack} from "types/track";
import TrackList from 'components/TrackList';

const Index = () => {
    const router = useRouter();
    const tracks: ITrack[] = [
        {_id: '1', name: 'Трек 1', artist: 'Исполнитель 1', text: 'Какой-то текст', listens: 5, audio: 'http://localhost:5000/audio/57d5170d-ad71-460c-ac79-005ff65d6db1.mp3', picture: 'http://localhost:5000/image/5d81780f-a00d-4032-a9d1-b0b48780582d.jpg', comments: []},
        {_id: '1', name: 'Трек 1', artist: 'Исполнитель 1', text: 'Какой-то текст', listens: 5, audio: 'http://localhost:5000/audio/57d5170d-ad71-460c-ac79-005ff65d6db1.mp3', picture: 'http://localhost:5000/image/5d81780f-a00d-4032-a9d1-b0b48780582d.jpg', comments: []},
        {_id: '1', name: 'Трек 1', artist: 'Исполнитель 1', text: 'Какой-то текст', listens: 5, audio: 'http://localhost:5000/audio/57d5170d-ad71-460c-ac79-005ff65d6db1.mp3', picture: 'http://localhost:5000/image/5d81780f-a00d-4032-a9d1-b0b48780582d.jpg', comments: []},
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