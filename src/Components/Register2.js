import React, { useState, useRef } from "react";
// import { useDispatch, useSelector } from "react-redux";
import { Form } from "react-bootstrap";
import { isEmail } from "validator";

import { register } from "../actions/auth";
import axios from "axios";
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

function Register2() {
  const form = useRef();
  const checkBtn = useRef();

  const [fName, setFname] = useState("");
  const [lName, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [successful, setSuccessful] = useState(false);

  // const { message } = useSelector(state => state.message);
  // const dispatch = useDispatch();

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
    } catch (err) {
      alert(err);
    }
  }

  return (
    <div className="col-md-12">
      <div className="card card-container">
        <img
          src="//ssl.gstatic.com/accounts/ui/avatar_2x.png"
          alt="profile-img"
          className="profile-img-card"
        />

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
                <button className="btn btn-primary btn-block" onClick={save}>Sign Up</button>
                <button className="btn btn-success btn-block" > <a href="/RegStudent">If you are student click here</a></button>
              </div>
            </div>
          )}

          {(
            <div className="form-group">
              <div className={successful ? "alert alert-success" : "alert alert-danger"} role="alert">

              </div>
            </div>
          )}
          {/* <CheckButton style={{ display: "none" }} ref={checkBtn} /> */}
        </Form>

      </div>
    </div>

  );
};

export default Register2;