import axios from 'axios'


const url = 'http://localhost:8000';

export const adduser =async (data) => {
    try {
        return await axios.post(`${url}/add`, data)
    } catch (e) {
        console.log("Error in calling  add user api", e);        
    }
}


export const getUser = async() => {
    try {
        return await axios.get (`${url}/all`)
        
    } catch (e) {
        console.log("erroe while calling", e)
    }
    
}