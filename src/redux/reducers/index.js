import { combineReducers } from "redux";

import { getCurrentSongReducer,getMyPlayListsReducer } from "./songReducer";

const reducers=combineReducers({
    currentSong:getCurrentSongReducer,
    myplalists:getMyPlayListsReducer,
})

export default reducers