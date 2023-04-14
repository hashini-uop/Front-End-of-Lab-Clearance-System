import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link, useParams  } from 'react-router-dom';
import { Form } from 'react-bootstrap';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
function ChemLab() {

    const[equipmnet , setEquipment] = useState([])
    const{e_id}=useParams()

    useEffect(() => {
        loadEquiments();
    },[]);

    const loadEquiments=async()=>{
        const result = await axios.get("http://localhost:8080/equipment/getAll")
        setEquipment(result.data);
    }

    const deleteEquipment=async (e_id)=>{
      await axios.delete(`http://localhost:8080/equipment/equipment/${e_id}`)
      loadEquiments()
    }
  return (
    <div>
      <Row>
        <Col>
    <Button href="/Add" variant="outline-primary text-center" style={{margin:"20px 0px 10px 0px"}}> Add Equipment</Button></Col>
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
          <th>Name</th>
          <th>Lab Type</th>
          <th>Lab</th>
          <th>Price(Rs.)</th>
          <th>Quantity</th>
          <th>Description</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {
            equipmnet.map((equipmnet , index) => (
                <tr>
                <th key={index}>{index+1}</th>
                <td>{equipmnet.name}</td>
                <td>{equipmnet.type}</td>
                <td>{equipmnet.lab_id}</td>
                <td>{equipmnet.e_price}</td>
                <td>{equipmnet.quantity}</td>
                <td>{equipmnet.description}</td>
                <td>
                <Link className="btn btn-outline-danger mx-2"
                      to={`/view/${equipmnet.e_id}`} >View </Link>
                    <Link className="btn btn-outline-success mx-2"
                      to={`/edit/${equipmnet.e_id}`} ><img src='./images/pencil-solid-24.png'></img> </Link>
                    <Button variant="outline-dark mx-2" onClick={()=>deleteEquipment(equipmnet.e_id)}> <img src='./images/trash-solid-24.png'></img> </Button>
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

export default ChemLab;