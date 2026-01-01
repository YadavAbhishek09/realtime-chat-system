import { HttpClient } from "../config/AxiosHelper"

export  const createRoomApi = async (roomDeatil)=>{
    const response = await HttpClient.post("/api/rooms",roomDeatil)
    return response.data;
}

export const joinRoomApi= async (roomId)=>{
   
    const response = await HttpClient.get(`/api/rooms/${roomId.trim()}`)
        return response.data;

}
// const size = 50;
// const page = 0;
// export const getmessageApi= async (roomId,size,page)=>{
//             const response = await HttpClient.get(`/api/rooms/${roomId}/messages?size=${size}$page=${page}`)

//             return response.data;   
// }
export const getmessageApi = async (roomId) => {
   
        const response = await HttpClient.get(`/api/rooms/${roomId}/messages`);

        return response.data;
     
  
  };








