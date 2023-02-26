import axios from "axios";
import {GET_MYPlAYLIST_REQUEST,GET_MYPLAYLISY_SUCCESS,GET_MYPLAYLIST_FAIL} from "../constants/index"

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

export const getMyPlayLists=()=>{
    return async(dispatch,getState)=>{
        let token=window.localStorage.getItem("token"); 

        try{
            dispatch({type:GET_MYPlAYLIST_REQUEST});
            const config={
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }  
            
            const {data} = await axios.get("https://api.spotify.com/v1/me/playlists", config)

            dispatch({type:GET_MYPLAYLISY_SUCCESS,payload:data.items});         

        }catch(error){
            dispatch({
                type:GET_MYPLAYLIST_FAIL,
                payload:error.response && error.response.data.detail
                ? error.response.data.detail
                :error.message
            })
        }
    }
}