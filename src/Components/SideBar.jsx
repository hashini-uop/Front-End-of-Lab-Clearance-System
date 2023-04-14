import React from 'react'
import "./SideBar.css"
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import Profile from '../Pages/Profile';
import TextLinkExample from '../Pages/DB/Service';




function SideBar({image}) {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    
    document.addEventListener("DOMContentLoaded", function(event) {

        const showNavbar = (toggleId, navId, bodyId, headerId) =>{
        const toggle = document.getElementById(toggleId),
        nav = document.getElementById(navId),
        bodypd = document.getElementById(bodyId),
        headerpd = document.getElementById(headerId)
        
        // Validate that all variables exist
        if(toggle && nav && bodypd && headerpd){
        toggle.addEventListener('click', ()=>{
        // show navbar
        nav.classList.toggle('show')
        // change icon
        toggle.classList.toggle('bx-x')
        // add padding to body
        bodypd.classList.toggle('body-pd')
        // add padding to header
        headerpd.classList.toggle('body-pd')
        })
        }
        }
        
        showNavbar('header-toggle','nav-bar','body-pd','header')
        
        /*===== LINK ACTIVE =====*/
        const linkColor = document.querySelectorAll('.nav_link')
        
        function colorLink(){
        if(linkColor){
        linkColor.forEach(l=> l.classList.remove('active'))
        this.classList.add('active')
        }
        }
        linkColor.forEach(l=> l.addEventListener('click', colorLink))
        
    
        });









return (
    <><><div >
        <body id="body-pd" style={{ marginTop: "100px"}}>
            <header class="header" id="header">
                <div class="header_toggle"> <img src='./images/menu.png' id="header-toggle"></img> </div>
                <TextLinkExample as={"Hashini Lakshman"}/>
                
                <div class="header_img"> <img src="./images/FB_IMG.jpg" alt=""></img> </div>

                 </header>

            <div class="l-navbar" id="nav-bar">
                <nav class="nav">
                    <div>
                        <a
                            href="#"
                            class="nav_logo">
                            <img src='./images/layer.png'>
                            </img>
                            <span class="nav_logo-name">UOP </span>
                        </a>
                        <div class="nav_list">
                            <a href="/Dashboard" title="Dashboard" class="nav_link active"> <img src='./images/gr.png'></img><span class="nav_name">Dashboard</span> </a>
                            <a  href="/Profile" title="Profile" class="nav_link"> <img src='./images/user.png'></img> <span class="nav_name">Profile</span> </a>
                            <a onClick={handleShow} href="#" title="Messages" class="nav_link"> <img src='./images/message.png'></img><span class="nav_name">Messages</span> </a>
                            <a href="#" class="nav_link" title="Bookmark"> <img src='./images/bookmarks.png'></img><span class="nav_name">Bookmark</span> </a>
                            <a href="#" class="nav_link" title="Files"> <img src='./images/file.png'></img> <span class="nav_name">Files</span> </a>
                            <a href="#" class="nav_link" title="Status"> <img src='./images/stats.png'></img><span class="nav_name">Stats</span> </a>
                        </div>
                    </div>
                    <a href="#" class="nav_link" style={{ marginLeft: "0px" }}> <img src={image}></img> <span class="nav_name">SignOut</span> </a>
                </nav>
            </div>
        </body>
        </div>
        <div class="height-10 bg-light">
    </div></><Modal
        id="modal1"
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}

    >
            <Modal.Header closeButton style={{ marginLeft: "10px" }}>
                <Modal.Title>Profile</Modal.Title>
            </Modal.Header>

            <Modal.Body style={{ backgroundImage: "./images/images.png" }}>



            






            </Modal.Body>



            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
                <Button variant="primary">Next</Button>
            </Modal.Footer>
        </Modal></>
)

};
export default SideBar;
    


                