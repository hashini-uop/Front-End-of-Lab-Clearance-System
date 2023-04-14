import Carousel from 'react-bootstrap/Carousel';
import "./Carousel.css"


function CarouselB() {
  return (
    
    <div class ="container-fluid-xl " style={{marginTop:"-30px" , top:'0'}}>
    <Carousel fade>
      <Carousel.Item>
        <img
          className="d-block w-100"
          style={{height:"600px" , marginTop:"10px" }}
          src="./images/img99.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>LAB CLEARNCE SYSTEM..</h3>
          <p>From Logging you can-</p>
        </Carousel.Caption>
        <div class="bottom-left"><img src='./images/University_of_Peradeniya_crest.png' alt='log'></img></div>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src="img34.jpg"
          style={{height:"600px",marginTop:"10px"}}
          alt="Second slide"
        />
        <Carousel.Caption>
          <h3>Pay The Fines</h3>
          <p>You can pay payments in here..</p>
        </Carousel.Caption>
        <div class="bottom-left"><img src='./images/University_of_Peradeniya_crest.png' alt='log'></img>
                                  {/* <h2>University of Peradeniya</h2> */}
                                  
                                  
                                  </div>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src="./images/pexels-fox-3829230.jpg"
          style={{height:"600px",marginTop:"10px"}}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Search </h3>
          <p>You can serach for lab equipment(s)/Chemicals here.</p>
        </Carousel.Caption>
        <div class="bottom-left"><img src='./images/University_of_Peradeniya_crest.png' alt='log'></img></div>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/images/img25.jpg"
          style={{height:"600px",marginTop:"10px"}}
          alt="Forth slide"
        />

        <Carousel.Caption>
          <h3>History</h3>
          <p>
            You can check history about your payments and usage.
          </p>
        </Carousel.Caption>
        <div class="bottom-left"><img src='./images/University_of_Peradeniya_crest.png' alt='log'></img></div>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src="./images/pexels-ron-lach-8100067.jpg"
          style={{height:"600px",marginTop:"10px"}}
          alt="Fifth slide"
        />

        <Carousel.Caption>
          <h3>Reciept</h3>
          <p>
            You can recive a recipt after payments.
          </p>
        </Carousel.Caption>
        <div class="bottom-left"><img src='./images/University_of_Peradeniya_crest.png' alt='log'></img></div>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src="./images/img8.jpg"
          style={{height:"600px",marginTop:"10px"}}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>LOG IN </h3>
          <p>Log in using your University email.</p>
        </Carousel.Caption>
        <div class="bottom-left"><img src='./images/University_of_Peradeniya_crest.png' alt='log'></img></div>
      </Carousel.Item>
    </Carousel>
    
    
    </div>
  );
}

export default CarouselB;