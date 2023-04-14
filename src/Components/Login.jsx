import React, { useState,  useEffect } from "react";
import { useNavigate } from 'react-router-dom'
import "./LogIn.css"
import Tittle from './Tittle';
import Form from 'react-bootstrap/Form';
import { isEmail } from "validator";
import {
  MDBBtn,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBRow,
  MDBCol,
  MDBIcon,
  MDBInput,
  MDBCheckbox
}
  from 'mdb-react-ui-kit';
import axios from "axios";


function LogIn2() {
  const initialValues = { email: "", password: "" }
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
  };

  useEffect(() => {
    console.log(formErrors);
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(formValues);
    }


  }, [formErrors])

  const validate = (values) => {
    const errors = {};

    if (!values.email) {
      errors.email = <div className="alert alert-danger" role="alert">This field is required!</div>
    } else if (!isEmail(values.email)) {
      errors.email = <div className="alert alert-danger" role="alert">This Email is not valid!</div>
    }
    if (!values.password) {
      errors.password = <div className="alert alert-danger" role="alert">This field is required!</div>
    } else if (values.password.length < 3) {
      errors.password = <div className="alert alert-danger" role="alert">Password should contain more than 3 characters!</div>
    } else if (values.password.length > 10) {
      errors.password = <div className="alert alert-danger" role="alert">Password should contain less than 10 characters!</div>
    }


    return errors;

  };









    


  

  async function login(event) {
    event.preventDefault();
    <span className="spinner-border spinner-border-sm"></span>
    try {
      await axios.post("http://localhost:8080/api/v1/user/login", {
        email: email,
        password: password,
      }).then((res) => {
        console.log(res.data);

        if (res.data.message == "Email not exist") {
          alert("Email not exist")
        } else if (res.data.message == "Login Success") {
          setLoading(true);
          navigate("/Dashboard")
        } else {
          alert("Incorrect Email and password not match")
        }
      }, fail => {
        console.error(fail);

      });

    }
    catch (err) {
      alert(err);
    }

  }
  return (
    <MDBContainer className="my-5" style={{ fontFamily: "Verdana" }} >

      <MDBCard>
        <MDBRow className='g-0'>

          <MDBCol md='6'>
            <MDBCardImage src='lg1.jpg' alt="login form" className='rounded-start w-100' />
          </MDBCol>

          <MDBCol md='6'>
            <MDBCardBody className='d-flex flex-column'>

              <div className='d-flex flex-row mt-2'>
                <MDBIcon fas icon="cubes fa-3x me-3" style={{ color: '#ff6219' }} />
                <span className="h1 fw-bold mb-0"><Tittle title={"LOG IN"} style={{ marginLeft: "20px" }} /></span>
              </div>


              {/* {Object.keys(formErrors).length === 0 && isSubmit ? (
                <div className="alert alert-success">Signed in succesfully</div>) : (

                <pre></pre>


              )} */}

              <h5 className="fw-normal my-4 pb-3" style={{ letterSpacing: '1px', fontFamily: "Verdana, Geneva, Tahoma, sans-serif", color: "black" }}>Log into your account...</h5>
              <Form >
                <MDBInput wrapperClass='mb-4' label='Email address' id='email' type='email' style={{ width: "450px" }} placeholder="Enter Your University Email Here..."
                  name="email"
                  // value={formValues.email}
                  value={email}
                  onChange={(event) => {
                    setEmail(event.target.value);
                  }}


                />
                <p>{formErrors.email}</p>

                <MDBInput wrapperClass='mb-4' label='Password' id='formControlLg' type='password' style={{ width: "450px" }} placeholder="Enter Your Paaword Here..."
                  name="password"
                  value={password}
                  onChange={(event) => {
                    setPassword(event.target.value);
                  }}

                />
                <p>{formErrors.password}</p>
                <MDBBtn className="mb-4 px-5" color='primary' size='lg' style={{ width: "450px" }} onClick={login} disabled={loading}>
{loading && (<span className="spinner-border spinner-border-sm"></span>)}
                  <span>Login</span>
                </MDBBtn>

                <a className="small text-muted" href="#!">Forgot password?</a><br />
                <p className="mb-8 pb-lg-2" style={{ color: '#393f81' }}>Don't have an account? <a href="/RegStudent" style={{ color: '#393f81' }}>Register here</a></p>
                <a className="small text-muted" href="/adminlog">Log as Admin..</a>
                <div className='d-flex flex-row justify-content-start'>

                  <Form.Group className="mb-3" id="formGridCheckbox">
                    <Form.Check type="checkbox" label="Agree to all terms and conditions" />

                  </Form.Group>
                </div>
              </Form>
            </MDBCardBody>
          </MDBCol>

        </MDBRow>
      </MDBCard>

    </MDBContainer>
  );
}

export default LogIn2;

