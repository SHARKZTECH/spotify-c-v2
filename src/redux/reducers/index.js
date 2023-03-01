import { combineReducers } from "redux";

import { getUserReducer,getCurrentSongReducer,getMyPlayListsReducer,getPlayListsReducer, getRecentPlayedReducer, getLikedReducer } from "./songReducer";

const reducers=combineReducers({
    user:getUserReducer,
    currentSong:getCurrentSongReducer,
    myplaylists:getMyPlayListsReducer,
    playlist:getPlayListsReducer,
    recent:getRecentPlayedReducer,
    liked:getLikedReducer,
})

export default reducers