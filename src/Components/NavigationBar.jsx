import React from 'react'
import {Link } from "react-router-dom"
import "./NavigationBar.css"



export default function NavigationBar() {
 
  return (
    
    <nav className='nav' >
      <ul>
      <Link to="/" className='ti'><b style={{color:"white" 
                                          , textAlign:"center"
                                          , textDecoration:"solid"
                                          , paddingTop:"40px"
                                          , fontFamily:"Cursive"
                                          , fontSize:"30px"}}>LAB CLEARANCE SYSTEM</b></Link>
        <li><a href="/Home" aria-active="page" >Home</a></li>
        <li><a href="/feedback"> Feedback</a></li>
        <li><a href="/login" >Login</a></li> 
        <li><a href="/contact">Contact </a></li>
        <li><a href="/dashboard">Dashboard</a></li>
        
    </ul>
     </nav>
  )
}

// function CustomerLink({to, Children, ...props}){
// const resolvedPath =  useResolvedPath(to)
// const isActive = useMatch({path : resolvedPath.pathname, end:true})
  
//    return(
//      <li className={isActive ? 'active' : ""}>
//        <Link to={to}{...props}>{Children}</Link>
//        </li>

//    )
//  }
