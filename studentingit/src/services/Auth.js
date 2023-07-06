import { getuserdata, removeuserdata } from "./storage"

export const isauth =()=>{
    return getuserdata()!= null? true:false;

}

export const logout=()=>{
removeuserdata();

}