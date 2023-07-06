import React, { useState } from 'react'
import"./login"
import"./SignUP.css"
import { RegisterApi } from '../services/Api'
import { storeuserdata } from '../services/storage'
import { isauth } from '../services/Auth'
import { Navigate } from 'react-router-dom'
import "./Profile";
import Navbar from './navbar/Navbar'







const  SignUP= () =>{


    const[input, setinput]= useState({
        name:"",
        email:"",
        password: "",
        
    
    
    })
    const initialstateerrors={
        name:{required:false},
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

if(input.name ===""){
errors.name.required=true;
haserror=true;
}
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
    //sending register api request
    RegisterApi(input).then((response) =>{
        storeuserdata(response.data.idToken);
    console.log(response);
}).catch((err)=>{
if(err.response.data.error.message==="EMAIL_EXISTS"){
seterrors({...errors,custom_error:"Already This Email Has Been Registered!"})

}
    console.log(err);
}).finally(()=>{

setloading(false)

})
    
}
seterrors({...errors});
    }
       
    
    if (isauth())   {
return <Navigate to="/"/>
    }


    
return(
    <div>
        <Navbar/>


    <section class="register-block">
    <div class="container">
       <div class="row ">
          <div class="register-sec">
             <h2 class="text-center">Register Now</h2>
             <form onSubmit={handlesumbit}class="register-form" action="" >
              <div class="form-group">
                <label htmlfor="exampleInputEmail1" class="text-uppercase">Name</label>
                <input type="text" class="form-control" onChange={handleInput} name="name" id=""  />
                { errors.name.required?
                (<span class="text-danger" >
                    Name is required.
                </span>):null
                }  
             </div>
              <div class="form-group">
                <label htmlfor="exampleInputEmail1" class="text-uppercase">Email</label>
  
                <input type="text"  class="form-control" onChange={handleInput} name="email" id=""  />
                { errors.email.required?
                (<span class="text-danger" >
                    Email is required.
                </span>):null
                  }
             </div>
             <div class="form-group">
                <label htmlfor="exampleInputPassword1" class="text-uppercase">Password</label>
                <input  class="form-control" type="password" onChange={handleInput} name="password" id="" />
                { errors.password.required?
                (<span class="text-danger" >
                    Password is required.
                </span>):null
                 }
             </div>
             
             <div class="form-group">
  
                <span class="text-danger" >
                    {errors.custom_error?
                  (<p>Already This Email Has Been Registered!</p>):null
                    }
                </span>
                {loading ?
                (<div  class="text-center">
                  <div class="spinner-border text-primary " role="status">
                    <span class="sr-only">Loading...</span>
                  </div>
                </div>):null
                   }
                <input type="submit" class="btnregister"  disabled={loading} value="Register"/>
             </div>
             <div class="clearfix"></div>
             <div class="form-group">
               Already have account ? Please <a href="/login">Login</a>
             </div>
            
  
  
             </form>
  
  
          </div>
  
       </div>
  
  
    </div>
  </section>

  </div>
)

}
export default SignUP;