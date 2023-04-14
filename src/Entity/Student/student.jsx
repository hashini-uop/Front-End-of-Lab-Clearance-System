import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link, useParams  } from 'react-router-dom';
import { Form } from 'react-bootstrap';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
function Student() {

    const[student , setStudent] = useState([])
    const{s_regNo}=useParams()

    useEffect(() => {
        loadStudent();
    },[]);

    const loadStudent=async()=>{
        const result = await axios.get("http://localhost:8080/student/getAll")
        setStudent(result.data);
    }

    const deleteStudent=async (l_id)=>{
      await axios.delete(`http://localhost:8080/student/delete/${s_regNo}`)
      loadStudent()
    }


  return (
    <div>
      <Row>
        <Col>
    <Button href="/addLab" variant="outline-primary text-center" style={{margin:"20px 0px 10px 0px"}}> Add Student</Button></Col>
    <Col>
    <Form className="d-flex"  style={{width:"50%" ,justifyItems:"right" ,margin:"20px 0px 10px 0px"}}>
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
              
            />
            <Button variant="outline-primary"><img src='./images/searchIcon.png'></img></Button></Form></Col></Row>
    <Table striped bordered hover size="sm" className='table border shadow '>
      <thead>
        <tr>
          <th>Index</th>
          <th>Registration Number</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Year</th>
          <th>Mobile Number</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {
            student.map((student, index) => (
                <tr>
                <th key={index}>{index+1}</th>
                <td>{student.s_regNo}</td>
                <td>{student.s_fName}</td>
                <td>{student.s_lName}</td>
                <td>{student.s_year}</td>          
                <td>{student.s_mobile}</td>
                <td>
                <Link className="btn btn-outline-danger mx-2"
                      to={`/viewStu/${student.s_regNo}`} >Profile</Link>
                    <Link className="btn btn-outline-success mx-2"
                      to={`/editStu/${student.s_regNo}`} >Edit</Link>
                    <Button variant="outline-dark mx-2" onClick={()=>deleteStudent(student.s_regNo)}> <img src='./images/trash-solid-24.png'></img> </Button>
                </td>
                </tr>

            ))
        }
        
       
      </tbody>
    </Table>
    <Button href="/Dashboard" variant="outline-warning text-center" style={{margin:"20px 0px 10px 0px"}}> Back</Button>
    </div>
  );
}

export default Student;