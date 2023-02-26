import { combineReducers } from "redux";

import { getCurrentSongReducer,getMyPlayListsReducer } from "./songReducer";

const reducers=combineReducers({
    currentSong:getCurrentSongReducer,
    myplaylists:getMyPlayListsReducer,
})

export default reducers