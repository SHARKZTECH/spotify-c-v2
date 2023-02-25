export const getCurrentSong=()=>{
    return async(dispatch,getState)=>{
        let {token:{token}}=getState();       

        try{
            dispatch({type:"GET_CURRENT_SONG_REQUEST"});
            const config={
                headers:{
                    'Content-type':'application/json',
                    "Bearer":token
                }
            }  
            
            const {data}=await axios.get(``,config);

            dispatch({type:"GET_CURRENT_SONG_SUCCESS",payload:data});         

        }catch(error){
            dispatch({
                type:"GET_CURRENT_SONG_FAIL",
                payload:error.response && error.response.data.detail
                ? error.response.data.detail
                :error.message
            })
        }
    }
}