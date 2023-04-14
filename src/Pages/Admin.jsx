import * as React from 'react';

import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import TextLinkExample from './DB/Service';


function Admin() {
   
    
  return (
    
    <><div className='justify-content-end'>
       <h2 style={{ textDecoration:"underline" , fontFamily:"unset" , marginRight:"-200px" }}className='mt-5'>Admin Dashboard</h2>

    </div><Row xs={1} md={3} className="g-4">
        {Array.from({ length: 1 }).map((_, idx) => (
          <><><><><><Col style={{ marginTop: '100px', backgroundColor:"E4E9F7"}}>

            <>
              <Card border="primary"  style={{ width: '18rem' }}>
                <Card.Header style={{ paddingLeft: '50px' }}>Update Equipment(s) </Card.Header>
                <Card.Body>
                  <Card.Img variant="top" src="./images/download7.png" style={{ width: "50%", marginLeft: "50px" }} />
                  <hr/><Card.Text>
                  You can check , add , update , delete any equipment details by using this.
                  </Card.Text>
                  <Button style={{ marginLeft: '70px' }} variant="outline-primary" href="/Check">Click Here</Button>{''}
                </Card.Body>
              </Card>
              <br />

            </>
            </Col><Col style={{ marginTop: '100px' }}>
              <Card border="danger" style={{ width: '18rem' }}>
                <Card.Header style={{ paddingLeft: '70px' }}>Update Student(s)</Card.Header>
                <Card.Body>
                <Card.Img variant="top" src="./images/download.png" style={{ width: "50%", marginLeft: "70px" }} />
                  <hr/><Card.Text>
                  You can check , add , update , delete any student details by using this.
                  </Card.Text>
                  <Button style={{ marginLeft: '70px' }} variant="outline-danger"  href="/student">Click Here</Button>{' '}
                  
                  
                </Card.Body>
              </Card>

              <br />
          </Col><Col style={{ marginTop: '100px' }}>
              <Card border="warning" style={{ width: '18rem' }}>
                <Card.Header style={{ paddingLeft: '90px' }}>Check Payment</Card.Header>
                <Card.Body>
                <Card.Img variant="top" src="./images/images.png" style={{ width: "50%", marginLeft: "70px" }} />
                  <hr/><Card.Text>
                  You can check all fine payments are over and how many to left.
                  </Card.Text>
                  <Button style={{ marginLeft: '70px' }} variant="outline-warning"  href="/History">Click Here</Button>{' '}
                  
                  
                </Card.Body>
              </Card>

              <br />
            </Col></><Col style={{ marginTop: '20px' }}>

              <Card border="success" style={{ width: '18rem' }}>
                <Card.Header style={{ paddingLeft: '50px' }}>Check Exsisting Recipts</Card.Header>
                <Card.Body>
                <Card.Img variant="top" src="./images/download5.png" style={{ width: "50%", marginLeft: "50px" }} />
                <hr/><Card.Text>Check how many payment recipts are printed</Card.Text>
                  <Button style={{ marginLeft: '70px' }} variant="outline-success"  >Click Here</Button>{' '}
                </Card.Body>
              </Card>
              <br />
            </Col></><Col>
              <Card border="info" style={{ width: '18rem' }}>
                <Card.Header style={{ paddingLeft: '70px' }}>Upload Notices</Card.Header>
                <Card.Body>
                  
                <Card.Img variant="top" src="./images/download3.png" style={{ width: "40%", marginLeft: "50px", marginTop: '10px' }} />
                <hr/><Card.Text>Upload latest notise about laborataries.</Card.Text>
                  <Button style={{ marginLeft: '70px' }} variant="outline-info" href="./Notice">Click Here</Button>{' '}
                </Card.Body>
              </Card>
              <br />


            </Col></><Col>

              <Card border="dark" style={{ width: '18rem' }}>
                <Card.Header style={{ paddingLeft: '70px' }}>Change Settings</Card.Header>
                <Card.Body>
                <Card.Img variant="top" src="./images/download91.jpg" style={{ width: "50%", marginLeft: "70px", marginBottom: "10px" }} />
                <hr/><Card.Text>Change settings and privacy policies</Card.Text>
                  <Button style={{ marginLeft: '70px' }} variant="outline-dark"  href="#">Click Here</Button>
                </Card.Body>
              </Card>
              <br />

            </Col></><Col>
              <Card border="danger" style={{ width: '18rem' }}>
                <Card.Header style={{ paddingLeft: '90px' }}>Support Services</Card.Header>
                <Card.Body>
                <Card.Img variant="top" src="./images/download2.png" style={{ width: "40%", marginLeft: "70px", marginTop: "20px", marginBottom: "20px" }} />
                <hr/><Card.Text>Check feedbacks and provide answers to messages which are comes through Contact page.</Card.Text>
                  <Button style={{ marginLeft: '70px' }} variant="outline-danger" >Click Here</Button>{' '}
                 
                 

                </Card.Body>
              </Card>
              <br />
              <br />
            </Col></>

        ))}

      </Row></>
      
   
  )
}
export default Admin;







