import React , { useState, useRef } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Tittle from '../Components/Tittle';
import axios from "axios";

import { isEmail } from "validator";
import {
    MDBContainer,
    MDBCard,
    MDBCardBody,
    MDBCardImage,
    MDBRow,
    MDBCol,
}
    from 'mdb-react-ui-kit';
import { useNavigate } from 'react-router-dom';
function Register3() {

    const [fName, setFname] = useState("");
    const [lName, setLname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [successful, setSuccessful] = useState(false);
    const navigate = useNavigate();

    const required = (value) => {
        if (!value) {
          return (
            <div className="alert alert-danger" role="alert">
              This field is required!
            </div>
          );
        }
      };
      
      const validEmail = (value) => {
        if (!isEmail(value)) {
          return (
            <div className="alert alert-danger" role="alert">
              This is not a valid email.
            </div>
          );
        }
      };
      
      const vusername = (value) => {
        if (value.length < 3 || value.length > 20) {
          return (
            <div className="alert alert-danger" role="alert">
              The username must be between 3 and 20 characters.
            </div>
          );
        }
      };
      
      const vpassword = (value) => {
        if (value.length < 6 || value.length > 40) {
          return (
            <div className="alert alert-danger" role="alert">
              The password must be between 6 and 40 characters.
            </div>
          );
        }
      };
      
     
        const form = useRef();
        const checkBtn = useRef();
      
     
        const onChangefName = (e) => {
          const username = e.target.value;
          setFname(username);
        };
      
        const onChangelName = (e) => {
          const username = e.target.value;
          setLname(username);
        };
      
        const onChangeEmail = (e) => {
          const email = e.target.value;
          setEmail(email);
        };
      
        const onChangePassword = (e) => {
          const password = e.target.value;
          setPassword(password);
        };
      
        const handleRegister = (e) => {
          e.preventDefault();
      
          setSuccessful(false);
      
          form.current.validateAll();
      
      
        };

    async function save(event) {
        event.preventDefault();
        try {
            await axios.post("http://localhost:8080/api/v1/user/save", {
                fName: fName,
                lName: lName,
                email: email,
                password: password,
            });
            alert("Student Registation Sucessful!");
            navigate("/Register")
        } catch (err) {
            alert(err);
        }
    }
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

                                    <Tittle title={"Sign Up"} style={{ marginRight: "100px", color: "red" }} />
                                    <h6 style={{ fontFamily: "Verdana", marginLeft: "0px" }}> Fill this to create a new account </h6>





                                    <Form onSubmit={handleRegister} ref={form}>
                                        {!successful && (
                                            <div>
                                                <div className="form-group">
                                                    <label htmlFor="username">First Name</label>
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        name="fName"
                                                        value={fName}
                                                        onChange={(e) => (
                                                            setFname(e.target.value)
                                                        )
                                                        }
                                                        validations={[required, vusername]}
                                                    />
                                                </div>


                                                <div className="form-group">
                                                    <label htmlFor="username">Last Name</label>
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        name="lName"
                                                        value={lName}
                                                        // onChange={onChangelName}
                                                        onChange={(e) => (
                                                            setLname(e.target.value)
                                                        )
                                                        }
                                                        validations={[required, vusername]}
                                                    />
                                                </div>

                                                <div className="form-group">
                                                    <label htmlFor="email">Email</label>
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        name="email"
                                                        value={email}
                                                        onChange={(e) => (
                                                            setEmail(e.target.value)
                                                        )
                                                        }
                                                        validations={[required, validEmail]}
                                                    />
                                                </div>

                                                <div className="form-group">
                                                    <label htmlFor="password">Password</label>
                                                    <input
                                                        type="password"
                                                        className="form-control"
                                                        name="password"
                                                        value={password}
                                                        onChange={(e) => (
                                                            setPassword(e.target.value)
                                                        )
                                                        }
                                                        validations={[required, vpassword]}
                                                    />
                                                </div>

                                                <div className="form-group">
                                                    <Button className="btn btn-primary btn-block"  onClick={save}>Sign Up</Button>
                                                </div>
                                            </div>
                                        )}

                                    
                                    </Form>




                                </Row>

                                <Form.Group className="mb-3" id="formGridCheckbox" style={{ width: "100%", marginLeft: "0", marginTop: "-50px" }}>
                                    <Form.Check type="checkbox" label="Agree to all terms and conditions" />
                                </Form.Group>

                           
                            </Form>

                        </MDBCardBody>
                    </MDBCol>

                </MDBRow>
            </MDBCard>

        </MDBContainer></>


    );
}

export default Register3;



