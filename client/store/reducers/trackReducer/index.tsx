import {TrackAction, TrackActionTypes, TrackState} from "./types"

const initialState: TrackState = {
    tracks: [],
    tracksError: ''
}

export const trackReducer = (state = initialState, action: TrackAction): TrackState => {
    switch (action.type) {
        case TrackActionTypes.FETCH_TRACKS:
            return {tracksError: '', tracks: action.payload};

        case TrackActionTypes.FETCH_TRACKS_ERROR:
            return {...state, tracksError: action.payload};

        default:
            return state;
    }
}