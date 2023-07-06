export const storeuserdata =(data)=>{
    localStorage.setItem('idToken',data)


}

export const getuserdata=()=>{
   return  localStorage.getItem('idToken');
}

export const removeuserdata =()=>{
    localStorage.removeItem('idToken')
}