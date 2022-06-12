import {Box, Grid } from 'node_modules/@mui/material/index';
import React, {FC} from 'react';
import {ITrack} from "types/track";
import Index from './TrackItem/index';

interface ITrackList {
    tracks: ITrack[];
}

const TrackList: FC<ITrackList> = ({tracks}) => {
    return (
        <Grid container direction="column">
            <Box p={2}>
                {tracks.map(track =>
                    <Index
                        key={track._id}
                        track={track}
                    />
                )}
            </Box>
        </Grid>
    );
};

export default TrackList;