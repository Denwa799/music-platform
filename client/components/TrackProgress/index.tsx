import React, {FC} from 'react';
import styles from './styles.module.scss'

interface ITrackProgress {
    left: number;
    right: number;
    onChange: (event) => void;
}

const TrackProgress: FC<ITrackProgress> = ({left, right, onChange}) => {
    return (
        <div className={styles.TrackProgress}>
            <input
                type="range"
                min={left}
                max={right}
                value={left}
                onChange={onChange}
            />
            <div>{left} / {right}</div>
        </div>
    );
};

export default TrackProgress;
