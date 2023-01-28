import axios from 'axios'


const url = 'http://localhost:8000';

export const adduser =async (data) => {
    try {
        return await axios.post(`${url}/add`, data)
    } catch (e) {
        console.log("Error in calling  add user api", e);        
    }
}


export const getUsers = async() => {
    try {
        return await axios.get (`${url}/all`)
        
    } catch (e) {
        console.log("erroe while calling", e)
    }
    
}


export const getUser = async (id) => {
    try{
        return await axios.get(`${url}/${id}`)
    }
    catch(e) {

    }
}

export const edituser =async (data, id) => {
    try {
        return await axios.put(`${url}/${id}`, data)
    } catch (e) {
        console.log("Error in calling  add user api", e);        
    }
}


export const deleteUser = async (id) => {
    try{
        return await axios.delete(`${url}/${id}`);
    }catch(e){
        console.log(e)
    }
}