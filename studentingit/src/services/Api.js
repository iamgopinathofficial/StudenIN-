import axios from "axios"
import {getuserdata} from "../services/storage"




axios.defaults.baseURL= "https://identitytoolkit.googleapis.com/v1"
const API_KEY ="AIzaSyB4Es27N1YqP6v5FsL9RrgjWZ-JVTK20Mw"
const Registerurl =`/accounts:signUp?key=${API_KEY}`;
const loginurl=`/accounts:signInWithPassword?key=${API_KEY}`;
const userdetileurl=`/accounts:lookup?key=${API_KEY}`;
const storagebuket=`/studentin-b27bd.appspot.com`;


export const RegisterApi =(input)=>{
    let data ={displayName : input.name, email: input.email, password: input.password}
return axios.post(Registerurl,data)
}

export const loginAPI =(input)=>{
    let data ={email:input.email, password:input.password}
return axios.post(loginurl,data)
}

export const userdetilesAPI =()=>{
    let data ={idToken:getuserdata()}
    return axios.post(userdetileurl,data)
}