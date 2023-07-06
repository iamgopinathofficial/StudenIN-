import { useEffect, useState } from "react"
import React from "react"
import './Profile.css';
import { userdetilesAPI } from "../services/Api";
import { useNavigate, Navigate } from "react-router-dom";
import { logout, isauth } from "../services/Auth";
import Navbar from "./navbar/Navbar";







const profile = () =>{
const [user, setUser] = useState({name:"", email:"", localId:""})


useEffect(()=>{
  if(isauth()){
    
    userdetilesAPI().then((response)=>{

      setUser({
      
        name:response.data.users[0].displayName,
        email:response.data.users[0].email,
        localId:response.data.users[0].localId,
       
      });
      })

  }
 
    
    
},[])
 


const navigate =useNavigate();

const logoutuser =()=>{
  logout();
  navigate('/login')

}


if (!isauth())   {
  return <Navigate to="/login"/>
      }

 
return(

  <div>
    <Navbar logoutuser={logoutuser}/>

    <main role="main" class="containerprofile">
    <div class="containerp">
        { user.name && user.email && user.localId  ?
        (<div>
        <p class="username " >{user.name}</p>
        <p class="emailtext">your email is {user.email}</p>
        
        </div>): <p class="profileload"> loading......please wait</p>
        }
       
      
    </div>
</main>

</div>

)
}
export default profile;