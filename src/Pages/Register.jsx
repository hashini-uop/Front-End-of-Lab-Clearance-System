import React, { useEffect, useState, useRef } from 'react';
import { useDispatch, useSelector } from "react-redux";
import Form from 'react-bootstrap/Form';
import Tittle from '../Components/Tittle';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
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
}
  from 'mdb-react-ui-kit';
import { json } from 'react-router-dom';



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

const vusernum = (value) => {
  if (value.length == 6) {
    return (
      <div className="alert alert-danger" role="alert">
        The password must be between 6 .
      </div>
    );
  }
};


// function Register() {
const Register = () => {
  const [s_regNo, setS_regNo] = useState("")
  const [s_fName, setS_fName] = useState("")
  const [s_lName, setS_lName] = useState("")
  const [s_mobile, setS_mobile] = useState("")
  const [s_password, setS_password] = useState("")
  const [s_year, setS_year] = useState("");
  const [student, setStudents] = useState([]);
  const [successful, setSuccessful] = useState(false);
  
 

  // const { message } = useSelector(state => state.message);
  // const dispatch = useDispatch()

  const form = useRef();
  const checkBtn = useRef();



  const handleClick = (e) => {
    e.preventDefault()
    const student = { s_regNo, s_fName, s_lName, s_year, s_mobile, s_password }
    console.log(student)

    fetch("http://localhost:8080/student/add", {
      method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(student)

    }).then(() => {
      console.log("New student added")
    })
  }

  useEffect(() => {
    fetch("http://localhost:8080/student/getAll")
      .then(res => res.json())
      .then((result) => {
        setStudents(result);
      })
  }, [])


  // const handleRegister = (e) => {
  //   e.preventDefault();

  //   setSuccessful(false);

  //   form.current.validateAll();

  //   if (checkBtn.current.context._errors.length === 0) {
  //     dispatch(Register(s_regNo,s_fName,s_lName,s_year,s_mobile,s_password))
  //       .then(() => {
  //         setSuccessful(true);
  //       })
  //       .catch(() => {
  //         setSuccessful(false);
  //       });
  //   }
  // };




  return (
    <MDBContainer className="my-5" style={{ fontFamily: "Verdana" }} >

      <MDBCard>
        <MDBRow className='g-0'>

          <MDBCol md='6'>
            <MDBCardImage src='./images/img60.jpg' alt="login form" className='rounded-start w-100' />
          </MDBCol>

          <MDBCol md='6' style={{ marginTop: "0px" }}>
            <MDBCardBody className='d-flex flex-column'>

              <div className='d-flex flex-row mt-2' style={{ marginTop: "0px" }}>
                <MDBIcon fas icon="cubes fa-3x me-3" style={{ color: '#ff6219' }} />
                <span className="h1 fw-bold mb-0"></span>
              </div>
              <form >
                <Form ref={form} className='form1' style={{ marginTop: "0px", width: "100%" }}>
                  <Row className="mb-3" style={{ width: "100%", marginLeft: "0" }}>

                    <Tittle title={"SIGN In"} />
                    <h6 style={{ fontFamily: "Verdana", marginLeft: "0px" }}>Fill this form to create new account.</h6>

                    {!successful && (
                      <Form.Group as={Col} controlId="formGridEmail" style={{ marginTop: "0px", marginLeft: "0" }}>
                        <Form.Label>Registation Number</Form.Label>
                        <Form.Control placeholder="Enter Registation number.." value={s_regNo} onChange={(e) => setS_regNo(e.target.value)} validations={[required, vusernum]} />
                      </Form.Group>

                    )}

                  </Row>
                  {!successful && (
                    <Form.Group className="mb-3" controlId="formGridName" style={{ width: "100%", marginLeft: "10px", marginTop: "-50px" }}>
                      <Form.Label>First Name</Form.Label>
                      <Form.Control placeholder="Enter your first name here.." value={s_fName} onChange={(e) => setS_fName(e.target.value)} validations={[required, vusername]} />

                    </Form.Group>)}

                  <Form.Group className="mb-3" controlId="formGridMsg" style={{ width: "100%", marginLeft: "10px", marginTop: "-50px" }}>
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control placeholder="Enter your last name here.." value={s_lName} onChange={(e) => setS_lName(e.target.value)} validations={[required, vusername]} />

                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formGridMsg" style={{ width: "100%", marginLeft: "10px", marginTop: "-50px" }}>
                    <Form.Label>Phone Number</Form.Label>
                    <Form.Control type='tel' placeholder="Enter a valid phone number here.." value={s_mobile} onChange={(e) => setS_mobile(e.target.value)} />

                  </Form.Group>


                  <Row className="mb-3" style={{ width: "100%", marginLeft: "0", marginTop: "-50px" }}>
                    <Form.Group as={Col} controlId="formGridCity">
                      <Form.Label>Academic Year</Form.Label>
                      <Form.Control type='year' placeholder='2020/2021' value={s_year} onChange={(e) => setS_year(e.target.value)} />
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


                </Form>
                {/* {s_regNo}
              {s_fName}
              {s_lName}
              {s_year}
              {s_mobile} */}






                {/* <MDBInput wrapperClass='mb-4' label='Email address' id='email' type='email' placeholder="Enter Your University Email Here..."  />
              <MDBInput wrapperClass='mb-4' label='Password' id='formControlLg' type='password' placeholder="Enter Your Paaword Here..."  /> */}

                <MDBBtn className="mb-4 px-5" color='dark' size='lg' style={{ width: "450px" }} onClick={handleClick}><a href="/LogIn" >Register</a></MDBBtn>
                {/* <a className="small text-muted" href="#!">Forgot password?</a>  */}
                <p className="mb-5 pb-lg-2" style={{ color: '#393f81' }}> </p>
                {/* {message && (
            <div className="form-group">
              <div className={ successful ? "alert alert-success" : "alert alert-danger" } role="alert">
                {message} */}
                {/* </div>
            </div> */}
                {/* )} */}
                {/* <CheckButton style={{ display: "none" }} ref={checkBtn} /> */}
                <div className='d-flex flex-row justify-content-start'>

                  <a href="#!" className="small text-muted me-1">Terms of use.</a>
                  <a href="#!" className="small text-muted">Privacy policy</a>
                </div>
              </form>

            </MDBCardBody>
          </MDBCol>

        </MDBRow>
      </MDBCard>

    </MDBContainer>
  );
}

export default Register;


