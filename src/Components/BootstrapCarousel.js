import React , {Component} from 'react'
import Carousel from 'react-bootstrap/Carousel'
import "./BootstrapCarousel.css"
import Row from 'react-bootstrap/Row';


export class BootstrapCarousel extends Component {  
render() {  

        return (  
        <div>  
                <div class="container-fluid">  
                <div className="row title" style={{ marginBottom: "20px" , width:"100%" ,  minWidth: "1000px"}} >  
                
                </div>  
                </div>  
                <div className='wide' >  
                <Carousel>  
                <Carousel.Item style={{'height':"600px"}} >  
                <img    style={{height:"600px" }}  
                        className="d-block w-100"  
                        src={'./images/img100.jpg'}  
                        alt="First Slide"/>  
                <Carousel.Caption>  
                        <p><h3>University of Peradeniya </h3></p>

                        </Carousel.Caption>  
                        </Carousel.Item  >  


                
                <Carousel.Item style={{'height':"600px"}} >  
                <img    style={{'height':"600px" }}  
                        className="d-block w-100"  
                        src={'./images/2017-08-24.jpg'}  
                        alt="First Slide"/>  
                <Carousel.Caption>  
                        <p><h3>Department of Chemistry </h3></p><br/>
                        <Row className="mb-3" >
                   <img src="./images/46854.png" alt="Call" style={{width:"10%"}}></img>
                   <img src="./images/64113.png" alt="Call" style={{width:"10%"}}></img>
                   <img src="./images/website.png"alt="Call"  style={{width:"10%"}}></img>

                   <li style={{ float:"left" }}>
                        Address : Department of Chemistry, <br/>
                                  Faculty of Science,<br/>
                                  University Of Peradeniy. <br/> </li>
                      <li style={{ float:"left"}}> 
                      Hours :   Closed Opens 8 am Mon    
                      </li>     
                       {/* <ul> Hours   : Closed : Opens 8 am Mon</ul> */}

                       <li style={{ float:"left"}}> 
                      Phone :   0812 394 422</li>
                  

                 
                 </Row>


                </Carousel.Caption>  
                        </Carousel.Item  >  
                <Carousel.Item style={{'height':"600px"}}>  
                <img    style={{'height':"600px"}}  
                        className="d-block w-100"  
                        src={"./images/2022-03-11.jpg"} 
                        alt="Second Slide"/>      
                <Carousel.Caption>  
                        <h3>Department of Physics</h3><br/>  
                        <Row className="mb-3" >
                        <img src="./images/46854.png" alt="Call" style={{width:"10%"}}></img>
                        <img src="./images/64113.png" alt="Call" style={{width:"10%"}}></img>
                   <img src="./images/website.png"alt="Call"  style={{width:"10%"}}></img>

                   <li style={{float:"left"}}>
                        Address : Department of Physics, <br/>
                                  Faculty of Science,<br/>
                                  University Of Peradeniy. <br/> </li>
                  <li style={{ float:"left"}}> 
                      Hours :   Closed : Opens 7 am Wed    </li>
                 <li style={{ float:"left"}}> 
                      Phone :   0812 394 580</li>
                 </Row>

                </Carousel.Caption>  
                </Carousel.Item>  
                <Carousel.Item style={{'height':"600px"}}>  
                <img    style={{'height':"600px"}}  
                        className="d-block w-100"  
                        src={'./images/FB_IMG3.jpg'}  
                        alt="Third Slide"/>    
                <Carousel.Caption>  
                        <h3>Department of Computer Science & Statistics</h3>  <br/> 
                        <Row className="mb-3" >
                        <img src="./images/46854.png" alt="Call" href="#" style={{width:"10%"}}></img>
                        <img src="./images/64113.png" alt="Call" style={{width:"10%"}}></img>
                   <img src="./images/website.png" alt="Call"  style={{width:"10%"}}></img>
                   <li style={{ float:"left"}}>
                        Address : Department of Computer Science & Statistics, <br/>
                                  Faculty of Science,<br/>
                                  University Of Peradeniy. <br/> </li>
                      <li style={{float:"left"}}> 
                      Hours :   Closed Opens 8 am Mon    
                      </li>    
                      <li style={{float:"left"}}> 
                      Phone :   0812 394 580</li> 
                 
                 </Row>

                </Carousel.Caption>  
                </Carousel.Item>  
                <Carousel.Item style={{'height':"600px"}} >  
                <img    style={{'height':"600px"  }}  
                        className="d-block w-100"  
                        src={'./images/geo1.jpg'}  
                        alt="Forth Slide"/>  
                <Carousel.Caption>  
                        <h3>Department of Geology </h3>  <br/> 
                        <Row className="mb-3" >
                        <img src="./images/46854.png"  alt="Call" style={{width:"10%" }}></img>
                        <img src="./images/64113.png"  alt="Location" style={{width:"10%"}}></img>
                   <img src="./images/website.png"  alt="Website" style={{width:"10%"}}></img>
                   <li style={{ float:"left"}}>
                        Address : Department of Geology, <br/>
                                  Faculty of Science,<br/>
                                  University Of Peradeniy. <br/> </li>
                      <li style={{ float:"left"}}> 
                      Hours :   Closed Opens 8 am Wed    
                      </li>    
                      <li style={{ float:"left"}}> 
                      Phone :   0812 394 200</li> 
                 </Row>

                </Carousel.Caption>  
                </Carousel.Item  > 

                 <Carousel.Item style={{'height':"600px"}}>  
                <img    style={{'height':"600px"}}  
                        className="d-block w-100"  
                        src={'./images/81.jpg'}  
                        alt="Third Slide"/>    
                <Carousel.Caption>  
                        <h3>Log In to get more information about laborataries</h3>  <br/> 
                    
                  
                

                </Carousel.Caption>  
                </Carousel.Item>   
                </Carousel>  
        </div>  
        </div>  
        )  
}  
}  export default BootstrapCarousel 