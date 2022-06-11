import React, {FC} from 'react';
import { ITrack } from 'types/track';

interface ITrackItem {
    track: ITrack;
    active?: boolean;
}

const TrackItem: FC<ITrackItem> = ({track, active = false}) => {
    return (
        <div>
            {track.name}
        </div>
    );
};

export default TrackItem;