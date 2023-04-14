import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link, useParams  } from 'react-router-dom';
import { Form } from 'react-bootstrap';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
function Lab() {

    const[lab , setLab] = useState([])
    const{l_id}=useParams()

    useEffect(() => {
        loadLab();
    },[]);

    const loadLab=async()=>{
        const result = await axios.get("http://localhost:8080/lab/getAll")
        setLab(result.data);
    }

    const deleteLab=async (l_id)=>{
      await axios.delete(`http://localhost:8080/lab/delete/${l_id}`)
      loadLab()
    }


  return (
    <div>
      <Row>
        <Col>
    <Button href="/addLab" variant="outline-primary text-center" style={{margin:"20px 0px 10px 0px"}}> Add Lab</Button></Col>
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
          <th>Lab ID</th>
          <th>Lab Name</th>
          <th>Category</th>
          <th>Type</th>
          <th>Location</th>
          <th>Number</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {
            lab.map((lab, index) => (
                <tr>
                <th key={index}>{index+1}</th>
                <td>{lab.code}</td>
                <td>{lab.l_name}</td>
                <td>{lab.l_category}</td>
                <td>{lab.l_type}</td>          
                <td>{lab.l_location}</td>
                <td>{lab.l_num}</td>
                <td>
                <Link className="btn btn-outline-danger mx-2"
                      to={`/viewlab/${lab.l_id}`} >View</Link>
                    <Link className="btn btn-outline-success mx-2"
                      to={`/edit/${lab.l_id}`} >Edit</Link>
                    <Button variant="outline-dark mx-2" onClick={()=>deleteLab(lab.l_id)}> <img src='./images/trash-solid-24.png'></img> </Button>
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

export default Lab;