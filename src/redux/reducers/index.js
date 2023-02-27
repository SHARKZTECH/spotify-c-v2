import { combineReducers } from "redux";

import { getUserReducer,getCurrentSongReducer,getMyPlayListsReducer,getPlayListsReducer } from "./songReducer";

const reducers=combineReducers({
    user:getUserReducer,
    currentSong:getCurrentSongReducer,
    myplaylists:getMyPlayListsReducer,
    playlist:getPlayListsReducer,
})

export default reducers