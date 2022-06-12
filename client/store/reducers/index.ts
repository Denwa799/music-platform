import { HYDRATE } from "next-redux-wrapper";
import {combineReducers} from "node_modules/redux";
import {playerReducer} from "./playerReducer";


export const rootReducer = combineReducers({
    player: playerReducer
})

export const reducer = (state, action) => {
    if (action.type === HYDRATE) {
        const nextState = {
            ...state,
            ...action.payload,
        };
        if (state.count) nextState.count = state.count;
        return nextState;
    } else {
        return rootReducer(state, action);
    }
};

export type RootState = ReturnType<typeof rootReducer>