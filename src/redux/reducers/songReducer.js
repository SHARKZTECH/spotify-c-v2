

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