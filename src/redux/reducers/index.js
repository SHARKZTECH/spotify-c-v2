import { combineReducers } from "redux";

import { getUserReducer,getCurrentSongReducer,getMyPlayListsReducer,getPlayListsReducer, getRecentPlayedReducer } from "./songReducer";

const reducers=combineReducers({
    user:getUserReducer,
    currentSong:getCurrentSongReducer,
    myplaylists:getMyPlayListsReducer,
    playlist:getPlayListsReducer,
    recent:getRecentPlayedReducer,
})

export default reducers