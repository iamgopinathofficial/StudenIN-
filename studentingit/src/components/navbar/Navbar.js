import React from 'react'
import "./Navbarstyle.css"
import { Link } from 'react-router-dom'
import { isauth } from '../../services/Auth'


const Navbar = (props) => {
    
    return (

        <nav class="navbar navbar-expand-md navbar-dark bg-dark">
        <a class="navbar-title" >StudentIN</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExampleDefault" aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarsExampleDefault">
            <ul class="navbar-nav mr-auto"  >
               { !isauth()?<li class="nav-item"><Link  class="SignUP" to="/SignUP">SignUP</Link></li>:null }
               { !isauth()? <li><Link class="login" to="/login" >Login</Link></li>:null }
                 { isauth()? <li class="Home"><Link class="nav-link" to="/Home">Home</Link></li>:null }
                 { isauth()? <li class="Profile"><Link class="nav-link" to="/Profile">Profile</Link></li>:null }
                 { isauth()?<li class="About"><Link class="nav-link" to="/About" >About</Link></li>:null }
                 { isauth()? <li class="Support"><Link class="nav-link"to="/Support" >Support</Link></li>:null }
                 { isauth()? <li class="logout" ><a  onClick={props.logoutuser} style={{cursor:"pointer"}} >Logout</a></li>:null }
            </ul>
        </div>
    </nav>
       
    )

    }

export default Navbar