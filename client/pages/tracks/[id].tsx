import { Button, Grid, TextField } from 'node_modules/@mui/material/index';
import React from 'react';
import {ITrack} from "types/track";
import MainLayout from "layouts/MainLayout/index";
import {useRouter} from "node_modules/next/router";
import styles from './styles.module.scss';

const TrackPage = () => {
    const track: ITrack = {
        _id: '1',
        name: 'Трек 1',
        artist: 'Исполнитель 1',
        text: 'Какой-то текст',
        listens: 5,
        audio: 'http://localhost:5000/audio/57d5170d-ad71-460c-ac79-005ff65d6db1.mp3',
        picture: 'http://localhost:5000/image/5d81780f-a00d-4032-a9d1-b0b48780582d.jpg',
        comments: []
    };
    const router = useRouter();

    return (
        <MainLayout>
            <div className={styles.TrackPage}>
                <Button variant="outlined"
                        className={styles.button}
                        onClick={() => router.push('/tracks')}>
                    К списку
                </Button>
                <Grid container className={styles.content}>
                    <img className={styles.img} src={track.picture} alt={track.name}/>
                    <div className={styles.titlesContainer}>
                        <h1>Название трека - {track.name}</h1>
                        <h1>Исполнитель - {track.artist}</h1>
                        <h1>Прослушиваний - {track.listens}</h1>
                    </div>
                </Grid>
                <h1>Слова в треке</h1>
                <p>{track.text}</p>
                <h1>Комментарии</h1>
                <Grid container>
                    <TextField
                        label="Ваше имя"
                        fullWidth
                    />
                    <TextField
                        label="Комментарий"
                        fullWidth
                        multiline
                        rows={4}
                    />
                    <Button>Отправить</Button>
                </Grid>
                <div>
                    {track.comments.map(comment =>
                        <div>
                            <div>Автор - {comment.username}</div>
                            <div>Комментарий - {comment.text}</div>
                        </div>
                    )}
                </div>
            </div>
        </MainLayout>
    );
};

export default TrackPage;