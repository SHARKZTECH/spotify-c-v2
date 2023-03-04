import { combineReducers } from "redux";

import { getUserReducer,getCurrentSongReducer,getMyPlayListsReducer,getPlayListsReducer, getRecentPlayedReducer, getLikedReducer, getSearchReducer, getAudioFeaturesReducer, getReapetReducer, getWeekyReducer ,getTopReducer} from "./songReducer";

const reducers=combineReducers({
    user:getUserReducer,
    currentSong:getCurrentSongReducer,
    myplaylists:getMyPlayListsReducer,
    playlist:getPlayListsReducer,
    recent:getRecentPlayedReducer,
    liked:getLikedReducer,
    search:getSearchReducer,
    audio_features:getAudioFeaturesReducer,
    top:getTopReducer,
    reapet:getReapetReducer,
    weekly:getWeekyReducer,
})

export default reducers