import React, { useEffect, useState } from 'react'
import Tittle from '../Components/Tittle';
import { Navigate, useParams } from 'react-router-dom';
import { useSelector } from "react-redux";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import "./Profile.css"
import Row from 'react-bootstrap/Row';
import { Col } from 'react-bootstrap';
import Student from '../Entity/Student/student';
import axios from 'axios';

function Profile() {


  const [student, setStudent] = useState({
    s_regNo: "",
    s_fName: "",
    s_lName: "",
    s_mobile: "",
    s_year: ""

  })

  const { s_regNo } = useParams();

  useEffect(() => {
    loadStudent()

  }, [])

  const loadStudent = async () => {
    const result = await axios.get(`http://localhost:8080/student/getById/${s_regNo}`)
    setStudent(result.data)
  }



  return (



    <>
      <Card border="primary" className='vh-105' style={{ marginLeft: '250px', marginTop: '40px', backgroundColor: "#E4E9F7", width: '100vh' }}>
        <div class="container py-5 h-100">
          <Card.Header className='mb-3 pb-3 pt-3 gradient-custom jumbotron' style={{ borderRadius: '.5rem' }}>

            <Row className='d-flex justify-content-center align-items-center h-100'>

              <Col className='col-lg-6 mb-4 mb-lg-0'>
                <Row className='g-0'>
                  <div className="col-md-4  text-center c"
                    style={{ borderTopLeftRadius: '.5rem', borderBottomLeftRadius: '.5rem' }}>
                    <img src="../images/avatar2.png"
                      alt="Avatar" className="img-fluid my-5" style={{ width: '80px' }} /></div>
                  <Col className="col-8 mb-3 my-5 text-white" > <h5><strong>{student.s_fName} {student.s_lName} </strong></h5>
                    <p>Student</p>
                    <i class="far fa-edit mb-5"></i>

                  </Col>
                </Row>
              </Col>
            </Row>
          </Card.Header>
          <Card.Body className='p-4'>

            <Col>
              <Card.Title></Card.Title>

              <Card.Text>

                <h6>Information</h6>
                <hr className="mt-0 mb-4" />


                <Row className="pt-1">
                  <Col className="col-6 mb-3">
                    <h6>Name</h6>
                    <p class="text-muted">{student.s_fName}</p>


                  </Col>
                  <Col className="col-6 mb-3">
                    <h6>Year</h6>
                    <p className="text-muted">{student.s_year}</p>
                  </Col>

                </Row>

                <Row className="pt-1">
                  <Col className="col-6 mb-3">
                    <h6>Email</h6>
                    <p class="text-muted">{student.s_regNo}@sci.pdn.ac.lk</p>


                  </Col>
                  <Col className="col-6 mb-3">
                    <h6>Phone</h6>
                    <p className="text-muted">{student.s_mobile}</p>
                  </Col>

                </Row>



                <h6>Used Labs and Dates</h6>
                <hr class="mt-0 mb-4"></hr>

                <Row className="pt-1">
                  <Col className="col-6 mb-3">
                    <h6>Chemistry</h6>
                    <p class="text-muted">Monday</p>
                  </Col>
                  <Col className="col-6 mb-3">
                    <h6>Physics</h6>
                    <p class="text-muted">-</p>

                  </Col>
                  <strong>Authorities:</strong>
                  <p class="text-muted">User</p>
                  {/* <ul>
        {currentUser.roles &&
          currentUser.roles.map((role, index) => <li key={index}>{role}</li>)}
      </ul> */}


                </Row>
                <div class="d-flex justify-content-start">
                  <a href="#!"><img src="../images/facebook1.png" className='"fab fa-facebook fa-lg me-3 "'></img></a>
                  <a href="#!"><img src="../images/twitter-logo-24.png" className="fab fa-twitter fa-lg me-3 "></img></a>
                  <a href="#!"><img src="../images/linkedin-square-logo-24.png" className="fab fa-instagram fa-lg"></img></a>
                </div>

              </Card.Text>
            </Col>
          </Card.Body>
          <Card.Footer >
            <Button href="/home">Back</Button>
          </Card.Footer>
        </div>
      </Card>
    </>



  )
} export default Profile;
