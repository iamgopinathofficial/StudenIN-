import { Firestore } from "firebase/firestore";
import{addDoc, collection, } from 'firebase/firestore'
import { firestore } from "./firebaseconfig";


let dbRef = collection(firestore, "post");
export const postStatus =(status)=>{
addDoc(dbRef)


}