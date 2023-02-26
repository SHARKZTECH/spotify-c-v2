

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