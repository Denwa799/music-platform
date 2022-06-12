import React, {FC} from 'react';
import {Grid, IconButton} from "node_modules/@mui/material/index";
import { Pause, PlayArrow, VolumeUp } from 'node_modules/@mui/icons-material/index';
import styles from './styles.module.scss';
import {ITrack} from "types/track";
import TrackProgress from "../TrackProgress/index";

const Player: FC = () => {
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
    const active = false;

    return (
        <div className={styles.Player}>
            <IconButton onClick={e => e.stopPropagation()}>
                {active
                    ? <Pause/>
                    : <PlayArrow/>
                }
            </IconButton>
            <Grid className={styles.trackContainer} container direction="column">
                <div>{track.name}</div>
                <div className={styles.artist}>{track.artist}</div>
            </Grid>
            <TrackProgress left={0} right={100} onChange={() => ({})}/>
            <VolumeUp className={styles.volume} />
            <TrackProgress left={0} right={100} onChange={() => ({})}/>
        </div>
    );
};

export default Player;
