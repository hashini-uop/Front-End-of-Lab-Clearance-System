import * as React from 'react';

import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import TextLinkExample from './DB/Service';
import Modal from 'react-bootstrap/Modal';
import { Navigate } from 'react-router-dom';
import { useSelector } from "react-redux"




function Dashboard(props) {

  // const { user: currentUser } = useSelector((state) => state.auth);

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
 
  //   if (!currentUser) {
  //   return <Navigate to="/login" />;
  // }
    
  return (
    
    <><div className='justify-content-end'>
      {/* <TextLinkExample /> */}
      <h2 style={{ textDecoration:"underline" , fontFamily:"unset" , marginRight:"-200px" }}className='mt-5'>Dashboard</h2>
    </div><Row xs={1} md={3} className="g-4">
        {Array.from({ length: 1 }).map((_, idx) => (
          <><><><><><><Col style={{ marginTop: '100px', backgroundColor: "E4E9F7" }}>

            <>
              <Card border="primary" style={{ width: '18rem' }}>
                <Card.Header style={{ paddingLeft: '90px' }}>Equipments</Card.Header>
                <Card.Img variant="top" src="./images/download7.png" style={{ width: "50%", marginLeft: "70px" }} />
                <Card.Body>
                  <Card.Title>Check Equipments</Card.Title>
                  <Card.Text>
                    You can check the quantity of lab equipments here.
                  </Card.Text>
                  <Button style={{ marginLeft: '50px' }} variant="outline-primary" href="/Check">Click Here</Button>{''}

                </Card.Body>
              </Card>
              <br />

            </>
          </Col><Col style={{ marginTop: '100px' }}>
              <Card border="warning" style={{ width: '18rem' }}>
                <Card.Header style={{ paddingLeft: '90px' }}>Payment</Card.Header>
                <Card.Img variant="top" src="./images/images.png" style={{ width: "50%", marginLeft: "70px" }} />
                <Card.Body>
                  <Card.Title>Lab Payments</Card.Title>
                  <Card.Text>
                    Pay your fines or any payments here.
                  </Card.Text>
                  <Button style={{ marginLeft: '70px' }} variant="outline-warning" href="./Payment">Click Here</Button>{' '}


                </Card.Body>
              </Card>

              <br />
            </Col></><Col style={{ marginTop: '100px' }}>

              <Card border="success" style={{ width: '18rem' }}>
                <Card.Header style={{ paddingLeft: '90px' }}>Output</Card.Header>
                <Card.Img variant="top" src="./images/download5.png" style={{ width: "50%", marginLeft: "70px" }} />
                <Card.Body>
                  <Card.Title>Request Trascript</Card.Title>
                  <Card.Text>
                    You should pay online to receive a transcript.
                  </Card.Text>
                  <Button style={{ marginLeft: '70px' }} variant="outline-success" onClick={handleShow} href="#modal1">Click Here</Button>{' '}
                </Card.Body>
              </Card>
              <br />
            </Col></><Col>
              <Card border="info" style={{ width: '18rem' }}>
                <Card.Header style={{ paddingLeft: '90px' }}>Notice</Card.Header>
                <Card.Img variant="top" src="./images/download6.png" style={{ width: "50%", marginLeft: "70px", marginTop: '10px' }} />
                <Card.Body>
                  <Card.Title>Faculty Notices</Card.Title>
                  <Card.Text>
                    View the latest notices of laborataries in the faculty
                  </Card.Text>
                  <Button style={{ marginLeft: '70px' }} variant="outline-info" href="./Notice">Click Here</Button>{' '}
                </Card.Body>
              </Card>
              <br />


            </Col></><Col>

              <Card border="success" style={{ width: '18rem' }}>
                <Card.Header style={{ paddingLeft: '90px' }}>Laborataries</Card.Header>
                <Card.Img variant="top" src="./images/download3.png" style={{ width: "40%", marginLeft: "80px", marginTop: "20px", marginBottom: "20px" }} />
                <Card.Body>
                  <Card.Title>Check Labs</Card.Title>
                  <Card.Text>
                    You can check all the information about labs.
                  </Card.Text>
                  <Button style={{ marginLeft: '70px' }} variant="outline-success" href="/labs">Click Here</Button>
                </Card.Body>
              </Card>
              <br />


            </Col></><Col>

              <Card border="dark" style={{ width: '18rem' }}>
                <Card.Header style={{ paddingLeft: '90px' }}>Watch Back</Card.Header>
                <Card.Img variant="top" src="./images/download4.png" style={{ width: "40%", marginLeft: "80px", marginTop: "20px", marginBottom: "20px" }} />
                <Card.Body>
                  <Card.Title>History</Card.Title>
                  <Card.Text>
                    View the payment history and your usage here.
                  </Card.Text>
                  <Button style={{ marginLeft: '70px' }} variant="outline-dark" href="/Watch">Click Here</Button>
                </Card.Body>
              </Card>
              <br />

            </Col></><Col>
              <Card border="danger" style={{ width: '18rem' }}>
                <Card.Header style={{ paddingLeft: '90px' }}>Services</Card.Header>
                <Card.Img variant="top" src="./images/download2.png" style={{ width: "50%", marginLeft: "70px", marginTop: "20px", marginBottom: "20px" }} />
                <Card.Body>
                  <Card.Title>Support Services</Card.Title>
                  <Card.Text>
                    Raise the support case
                  </Card.Text>
                  <Button style={{ marginLeft: '70px' }} variant="outline-danger">Click Here</Button>{' '}






                  {/* Modal 1 */}
                  <Modal
                    id="modal1"
                    show={show}
                    onHide={handleClose}
                    backdrop="static"
                    keyboard={false}

                  >
                    <Modal.Header closeButton style={{ marginLeft: "10px" }}>
                      <Modal.Title>Need a recipt?</Modal.Title>
                    </Modal.Header>

                    <Modal.Body>

                      <p>You need to pay your clearance first!... <a href='/Payment'>Click here</a> to pay your payments.</p>
                    </Modal.Body>
                    <Modal.Footer>
                      <Button variant="secondary" onClick={handleClose}>
                        Close
                      </Button>
                      <Button variant="primary">Next</Button>
                    </Modal.Footer>
                  </Modal>

                </Card.Body>
              </Card>

              <br />
              <br />
            </Col></>

        ))}

      </Row></>
      
  
  )
}
export default Dashboard;






