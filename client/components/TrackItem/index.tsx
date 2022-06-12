import React, {FC} from 'react';
import { ITrack } from 'types/track';
import styles from './styles.module.scss';
import { Card, Grid, IconButton } from '@mui/material';
import {Delete, Pause, PlayArrow} from '@mui/icons-material';
import { useRouter } from 'next/router';
import {useActions} from "../../hooks/useActions";

interface ITrackItem {
    track: ITrack;
    active?: boolean;
}

const TrackItem: FC<ITrackItem> = ({track, active = false}) => {
    const router = useRouter();
    const {playTrack, setActiveTrack} = useActions();

    const play = (event) => {
        event.stopPropagation();
        setActiveTrack(track);
        playTrack();
    }

    return (
        <Card className={styles.TrackItem} onClick={() => router.push('/tracks/' + track._id)}>
            <IconButton onClick={play}>
                {active
                ? <Pause/>
                : <PlayArrow/>
                }
            </IconButton>
            <img className={styles.img} src={'http://localhost:5000/' + track.picture} alt={track.name} />
            <Grid className={styles.trackContainer} container direction="column">
                <div>{track.name}</div>
                <div className={styles.artist}>{track.artist}</div>
            </Grid>
            {active && <div>0:42 / 03:22</div>}
            <IconButton className={styles.deleteBtn} onClick={e => e.stopPropagation()}>
                <Delete />
            </IconButton>
        </Card>
    );
};

export default TrackItem;