import React, {FC} from 'react';
import { ITrack } from 'types/track';
import { Card, Grid, IconButton } from 'node_modules/@mui/material/index';
import styles from './styles.module.scss';
import {Delete, Pause, PlayArrow } from 'node_modules/@mui/icons-material/index';
import {useRouter} from "node_modules/next/router";

interface ITrackItem {
    track: ITrack;
    active?: boolean;
}

const TrackItem: FC<ITrackItem> = ({track, active = false}) => {
    const router = useRouter();

    return (
        <Card className={styles.TrackItem} onClick={() => router.push('/tracks/' + track._id)}>
            <IconButton onClick={e => e.stopPropagation()}>
                {active
                ? <Pause/>
                : <PlayArrow/>
                }
            </IconButton>
            <img className={styles.img} src={track.picture} />
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