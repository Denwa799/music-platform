import React, {ChangeEvent, FC, useEffect} from 'react';
import styles from './styles.module.scss';
import TrackProgress from "../TrackProgress";
import {Grid, IconButton} from '@mui/material';
import {Pause, PlayArrow, VolumeUp} from '@mui/icons-material';
import {useTypedSelector} from "hooks/useTypedSelector";
import {useActions} from "hooks/useActions";

let audio;

const Player: FC = () => {
    const {pause, volume, active, duration, currentTime} = useTypedSelector(state => state.player);
    const {pauseTrack, playTrack, setVolume, setCurrentTime, setDuration} = useActions();

    useEffect(() => {
        if (!audio) {
            audio = new Audio();
        } else {
            setAudio();
            play();
        }
    }, [active])

    const setAudio = () => {
        if (active) {
            audio.src = 'http://localhost:5000/' + active.audio;
            audio.volume = volume / 100;
            audio.onloadedmetadata = () => {
                setDuration(Math.ceil(audio.duration));
            }
            audio.ontimeupdate = () => {
                setCurrentTime(Math.ceil(audio.currentTime));
            }
        }
    }

    const play = () => {
        if (pause) {
            playTrack();
            audio.play();
        } else {
            pauseTrack();
            audio.pause();
        }
    }

    const changeVolume = (event: ChangeEvent<HTMLInputElement>) => {
        audio.volume = Number(event.target.value) / 100;
        setVolume(Number(event.target.value));
    }

    const changeCurrentTime = (event: ChangeEvent<HTMLInputElement>) => {
        audio.currentTime = Number(event.target.value);
        setCurrentTime(Number(event.target.value));
    }

    if (!active) {
        return null;
    }

    return (
        <div className={styles.Player}>
            <IconButton onClick={play}>
                {pause
                    ? <PlayArrow/>
                    : <Pause/>
                }
            </IconButton>
            <Grid className={styles.trackContainer} container direction="column">
                <div>{active?.name}</div>
                <div className={styles.artist}>{active?.artist}</div>
            </Grid>
            <TrackProgress left={currentTime} right={duration} onChange={changeCurrentTime}/>
            <VolumeUp className={styles.volume} />
            <TrackProgress left={volume} right={100} onChange={changeVolume}/>
        </div>
    );
};

export default Player;
