import React from "react";

import BootstrapCarousel from '../Components/BootstrapCarousel';
import CarouselB from '../Components/Carousel';
import "../Components/Carousel.css"
import NavBar from '../Components/NavBar';
import SideBar from '../Components/SideBar';
import Tittle from '../Components/Tittle';
import "./Home.css"

export default function Home() {


    return (
    
      <div className='home'>
        
        <NavBar link={"/login"} name={"Login"} link1={"/login"} link2={"/login"}/>
    
        <CarouselB />  
        <SideBar image={"./images/log-in-regular-24.png"}/>
        
        
        <div class="col-sm-12 btn btn-danger" style={{backgroundColor:"darkblue", color:"white",marginBottom:"70px",marginTop:"-40px" }}>  
                    University of Peradeniya  -  Faculty of Science
                </div>   


        <Tittle title={"Information about Laborataries"} />
        <BootstrapCarousel />   

      </div>      
        

    )
  }
