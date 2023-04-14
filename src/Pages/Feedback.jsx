import React from 'react';
import './Feedback.css'
import Tittle from '../Components/Tittle';
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
import Accordion from 'react-bootstrap/Accordion';
import {


  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBRow,
  MDBCol,

}
from 'mdb-react-ui-kit';
import { Navigate } from 'react-router-dom';
import { useSelector } from "react-redux"
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

function Feedback() {
  const { user: currentUser } = useSelector((state) => state.auth);
 
    if (!currentUser) {
    return <Navigate to="/login" />;
  }
    
  return (

    <MDBContainer className="my-5">
  
        <MDBCard>
          <MDBRow className='g-0'>
  
            <MDBCol md='6'>
              <MDBCardImage src="feed.jpg" alt="login form" className='rounded-start w-100'/>
            </MDBCol>
  
            <MDBCol md='6'>
              <MDBCardBody className='d-flex flex-column'>
              <Form className='form' style={{ width: "100%" }}>
                <Row className="mb-3" style={{width:"100%" , marginLeft:"0"}}>
              {/* <img className='phot' src='f2.png' alt='login' style={{width:"20%" , marginLeft:"310px",marginTop:"0px"}}/> */}
        <Tittle title={"FeedBack"} />
          <Form.Group as={Col} controlId="formGridNumber">
          <Form.Label>Registation Number</Form.Label>
          <Form.Control  placeholder="S/xx/xxx" />
       
       <Row />
          <Form.Label>Name</Form.Label>
          <Form.Control placeholder="A.B. Nimal Silva" />
        </Form.Group>
      </Row>

      <Form.Group className="mb-3" controlId="formGridAddress">
        <Form.Label>Subject</Form.Label>
        <Form.Control placeholder="Subject" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formGridFeedback">
        <Form.Label >Feedback</Form.Label>
        <Form.Control size="lg" lg={5} type="text" placeholder="Feedback....." />
      </Form.Group>

      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridYear">
          <Form.Label>Year</Form.Label>
          <Form.Control type='Year'/>
        </Form.Group>

        <Form.Group as={Col} controlId="formGridLab">
          <Form.Label>Lab</Form.Label>
          <Form.Select defaultValue="Choose...">
            <option>Choose...</option>
            <option>...</option>
          </Form.Select>
        </Form.Group>

       
      </Row>
      <Stack style={{marginLeft:"200px"}} spacing={1}>
      <Rating name="half-rating" defaultValue={2.5} precision={0.5} />
      <Rating name="half-rating-read" defaultValue={2.5} precision={0.5} readOnly />
    </Stack>

      <Form.Group className="mb-3" id="formGridCheckbox">
        <Form.Check type="checkbox" label="Agree to all terms and conditions" />
      </Form.Group>

      <Button variant="primary" type="submit"> Submit</Button>
      
       

    </Form>
  
                
              </MDBCardBody>
            </MDBCol>
  
          </MDBRow>
        </MDBCard>
  
      </MDBContainer>
      













   
  );
}

export default Feedback;