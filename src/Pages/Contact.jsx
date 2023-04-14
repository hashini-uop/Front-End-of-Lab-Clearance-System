import React from 'react'
import "./Contact.css"
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Tittle from '../Components/Tittle';
import {
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBRow,
  MDBCol,
}
  from 'mdb-react-ui-kit';
function Contact() {
  return (
    <><MDBContainer className="my-5">

      <MDBCard style={{ marginLeft: "10px", marginTop: "0px" }}>
        <MDBRow className='g-0'>

          <MDBCol md='6'>
            <MDBCardImage src='cnt1.jpg' alt="login form" className='rounded-start w-100' />
          </MDBCol>

          <MDBCol md='6'>
            <MDBCardBody className='d-flex flex-column'>

              <Form className='form1' style={{ marginTop: "0px", width: "100%" }}>
                <Row className="mb-3" style={{ width: "100%", marginLeft: "0" }}>

                  <Tittle title={"Contact Us"} style={{ marginRight: "100px", color: "red" }} />
                  <h6 style={{ fontFamily: "Verdana", marginLeft: "0px" }}>If you have questions or just want to get in touch,use the form below.</h6>
                  <Form.Group as={Col} controlId="formGridEmail" style={{ marginTop: "0px", marginLeft: "0" }}>
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />

                  </Form.Group>
                </Row>
                <Form.Group className="mb-3" controlId="formGridName" style={{ width: "100%", marginLeft: "10px", marginTop: "-50px" }}>
                  <Form.Label>Name</Form.Label>
                  <Form.Control placeholder="A.B.C. PERERA" />

                </Form.Group>

                <Form.Group className="mb-3" controlId="formGridMsg" style={{ width: "100%", marginLeft: "10px", marginTop: "-50px" }}>
                  <Form.Label>Message</Form.Label>
                  <Form.Control placeholder="Enter your message here.." />

                </Form.Group>
                <Row className="mb-3" style={{ width: "100%", marginLeft: "0", marginTop: "-50px" }}>
                  <Form.Group as={Col} controlId="formGridCity">
                    <Form.Label>Year</Form.Label>
                    <Form.Control />
                  </Form.Group>

                  <Form.Group as={Col} controlId="formGridState">
                    <Form.Label>Lab</Form.Label>
                    <Form.Select defaultValue="Choose...">
                      <option>CS</option>
                      <option>Chemistry</option>
                      <option>Physics</option>
                    </Form.Select>
                  </Form.Group>
                </Row>

                <Form.Group className="mb-3" id="formGridCheckbox" style={{ width: "100%", marginLeft: "0", marginTop: "-50px" }}>
                  <Form.Check type="checkbox" label="Agree to all terms and conditions" />
                </Form.Group>

                <Button variant="primary" type="submit">
                  Submit
                </Button>
              </Form>

            </MDBCardBody>
          </MDBCol>

        </MDBRow>
      </MDBCard>

    </MDBContainer></>


  );
}

export default Contact;



