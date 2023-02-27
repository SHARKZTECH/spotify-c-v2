
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
        default:
            return state;
    }
}
