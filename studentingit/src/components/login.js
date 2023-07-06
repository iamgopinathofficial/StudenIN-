import React from "react";
import {useState } from "react";
import "./SignUP";
import "./login.css"
import { loginAPI } from "../services/Api";
import{storeuserdata} from "../services/storage";
import{isauth} from"../services/Auth";
import { Navigate } from "react-router-dom";
import Navbar from "./navbar/Navbar";


const login = () =>{

  const[input, setinput]= useState({
    email:"",
    password: "",



})
const initialstateerrors={
    email:{required:false},
    password:{required:false},
    custom_error: null
}
const [ errors, seterrors] =useState(initialstateerrors);




const handleInput =(event)=>{
setinput({...input,[event.target.name]:event.target.value})
}

const [loading, setloading] = useState(false);



const handlesumbit=(event)=>{
  event.preventDefault();
  
  let errors=initialstateerrors;
  let haserror= false;

  if(input.email ===""){
      errors.email.required=true;
      haserror=true;
      }
      if(input.password ===""){
          errors.password.required=true;
          haserror=true;
          }
       if (haserror!==true){
      setloading(true)
      //sending login api request
      loginAPI(input).then((response) =>{
          storeuserdata(response.data.idToken);
      console.log(response);
  }).catch((err)=>{
   if(err.code="ERR_BAD_REQUEST"){
seterrors({...errors,custom_error:"INVALID CREDENTIALS"})
   }
  }).finally(()=>{
  
  setloading(false)
  
  })
      
  }
  seterrors({...errors});
      }
      if (isauth())   {
        return <Navigate to="/Profile"/>
            }
        
      
  return(
<div>
    <Navbar/>
<section class="login-block">
            <div class="container">
                <div class="row ">
                    <div class="col login-sec">
                        <h2 class="text-centerlogin">Login Now</h2>
                        <form onSubmit={handlesumbit} class="login-form" action="">
                        <div class="form-group">
                            <label htmlfor="exampleInputEmail1" class="text-uppercase">Email</label>
                            <input type="email"  class="emailform" onChange={handleInput}name="email"  id="" placeholder="email" />
                            { errors.email.required?
                            (<span class="text-danger" >
                                Email is required.
                            </span>):null
                              }
                        </div>
                        <div class="form-group">
                            <label for="exampleInputPassword1" class="text-uppercase">Password</label>
                            <input  class="passwordform" type="password"  onChange={handleInput}name="password" placeholder="password" id="" />
                            { errors.email.required?
                            (<span class="text-danger" >
                                Password is required.
                            </span>):null }
                        </div>
                        <div class="form-group">
                        {loading ?
                            (<div  class="text-center">
                                <div class="spinner-border text-primary " role="status">
                                <span class="sr-only">Loading...</span>
                                </div>
                            </div>): null}
                            <span class="text-danger" >
                            {errors.custom_error?
                            (<p>INVALID CREDENTIALS!</p>):null }
                            </span>

                            <input  type="submit" class="btn-login"  disabled={loading} value="Login" />
                        </div>
                        <div class="clearfix"></div>
                        <div class="form-group">
                        Create new account ? Please <a  href="/SignUP">SignUP</a>
                        </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>


        </div>

)
}
export default login