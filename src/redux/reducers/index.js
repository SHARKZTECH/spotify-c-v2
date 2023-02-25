import { combineReducers } from "redux";

import { getCurrentSongReducer } from "./songReducer";

const reducers=combineReducers({
    currentSong:getCurrentSongReducer,
})

export default reducers