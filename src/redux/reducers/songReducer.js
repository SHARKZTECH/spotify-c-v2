
export const getUserReducer=(state={},{type,payload})=>{
    switch(type){
        case "GET_USER_REQUEST":
            return {loading:true} 
        case "GET_USER_SUCCESS":
            return {loading:false,user:payload,success:true}
        case "GET__FAIL":
                return {}
        default:
            return state;
    }
}
export const getCurrentSongReducer=(state={},{type,payload})=>{
    switch(type){
        case "GET_CURRENT_SONG_REQUEST":
            return {loading:true} 
        case "GET_CURRENT_SONG_SUCCESS":
            return {loading:false,currentSong:payload,success:true}
        case "GET_CURRENT_SONG_FAIL":
                return {}
        default:
            return state;
    }
}

export const getMyPlayListsReducer=(state={},{type,payload})=>{
    switch(type){
        case "GET_MYPlAYLIST_REQUEST":
            return {loading:true} 
        case "GET_MYPLAYLISY_SUCCESS":
            return {loading:false,playlists:payload,success:true}
        case "GET_MYPLAYLIST_FAIL":
                return {}
        default:
            return state;
    }
}

export const getPlayListsReducer=(state={},{type,payload})=>{
    switch(type){
        case "GET_PlAYLIST_REQUEST":
            return {loading:true} 
        case "GET_PLAYLIST_SUCCESS":
            return {loading:false,playlist:payload,success:true}
        case "GET_PLAYLIST_FAIL":
                return {}
        case "GET_PLAYLIST_RESET":
            return {}        
        default:
            return state;
    }
}

export const getRecentPlayedReducer=(state={},{type,payload})=>{
    switch(type){
        case "GET_RECENT_REQUEST":
            return {loading:true} 
        case "GET_RECENT_SUCCESS":
            return {loading:false,recent:payload,success:true}
        case "GET_RECENT_FAIL":
                return {}
        default:
            return state;
    }
}

export const getLikedReducer=(state={},{type,payload})=>{
    switch(type){
        case "GET_LIKED_REQUEST":
            return {loading:true} 
        case "GET_LIKED_SUCCESS":
            return {loading:false,liked:payload,success:true}
        case "GET_LIKED_FAIL":
                return {}
        default:
            return state;
    }
}

export const getSearchReducer=(state={},{type,payload})=>{
    switch(type){
        case "GET_SEARCH_REQUEST":
            return {loading:true} 
        case "GET_SEARCH_SUCCESS":
            return {loading:false,search:payload,success:true}
        case "GET_SEARCH_FAIL":
                return {}
        default:
            return state;
    }
}
export const getAudioFeaturesReducer=(state={},{type,payload})=>{
    switch(type){
        case "GET_AUDIO_FEATURES_REQUEST":
            return {loading:true} 
        case "GET_AUDIO_FEATURES_SUCCESS":
            return {loading:false,audio_features:payload,success:true}
        case "GET_AUDIO_FEATURES_FAIL":
                return {}
        default:
            return state;
    }
}

export const getTopReducer=(state={},{type,payload})=>{
    switch(type){
        case "GET_TOP_REQUEST":
            return {loading:true} 
        case "GET_TOP_SUCCESS":
            return {loading:false,top:payload,success:true}
        case "GET_TOP_FAIL":
                return {}
        default:
            return state;
    }
}
export const getReapetReducer=(state={},{type,payload})=>{
    switch(type){
        case "GET_REAPET_REQUEST":
            return {loading:true} 
        case "GET_REAPET_SUCCESS":
            return {loading:false,reapet:payload,success:true}
        case "GET_REAPET_FAIL":
                return {}
        default:
            return state;
    }
}
export const getWeekyReducer=(state={},{type,payload})=>{
    switch(type){
        case "GET_WEEKLY_REQUEST":
            return {loading:true} 
        case "GET_WEEKLY_SUCCESS":
            return {loading:false,weekly:payload,success:true}
        case "GET_WEEKLY_FAIL":
                return {}
        default:
            return state;
    }
}