import {Button, Grid, TextField} from 'node_modules/@mui/material/index';
import React, {useState} from 'react';
import MainLayout from "layouts/MainLayout/index";
import styles from './styles.module.scss';
import {GetServerSideProps} from "next";
import axios from 'axios';
import {useInput} from "hooks/useInput";
import {ITrack} from "types/track";
import {useRouter} from "next/router";

const TrackPage = ({serverTrack}) => {
    const [track, setTrack] = useState<ITrack>(serverTrack);
    const router = useRouter();
    const username = useInput('');
    const text = useInput('');

    const addComment = async () => {
        try {
            const response = await axios.post('http://localhost:5000/tracks/comment', {
                username: username.value,
                text: text.value,
                trackId: track._id
            });
            setTrack({...track, comments: [...track.comments, response.data]});
        } catch (err) {
            console.log(err);
        }

    }

    return (
        <MainLayout title={track.name + " - " + track.artist} description={"Песня от " + track.artist} keywords={"трек, музыка, лучшее, " + track.artist}>
            <div className={styles.TrackPage}>
                <Button variant="outlined"
                        className={styles.button}
                        onClick={() => router.push('/tracks')}>
                    К списку
                </Button>
                <Grid container className={styles.content}>
                    <img className={styles.img} src={'http://localhost:5000/' + track.picture} alt={track.name}/>
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
                        {...username}
                    />
                    <TextField
                        label="Комментарий"
                        {...text}
                        fullWidth
                        multiline
                        rows={4}
                    />
                    <Button onClick={addComment}>Отправить</Button>
                </Grid>
                <div>
                    {track.comments.map(comment =>
                        <div key={`${comment.username} ${comment.text}`}>
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

export const getServerSideProps: GetServerSideProps = async ({params}) => {
    const response = await axios.get('http://localhost:5000/tracks/' + params.id)
    return {
        props: {
            serverTrack: response.data
        }
    }
}