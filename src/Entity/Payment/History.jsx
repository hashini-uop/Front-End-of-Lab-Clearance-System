import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link, useParams  } from 'react-router-dom';
import { Form } from 'react-bootstrap';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
function History() {

    const[payment , setPayment] = useState([])
    const{p_id}=useParams()

    useEffect(() => {
        loadPayments();
    },[]);

    const loadPayments=async()=>{
        const result = await axios.get("http://localhost:8080/payment/getAll")
        setPayment(result.data);
    }
    const deletePayment=async (p_id)=>{
      await axios.delete(`http://localhost:8080/payment/${p_id}`)
      loadPayments()
    }
  return (
    <div>
      <Row>
        <Col>
    <Button href="/payment" variant="outline-primary text-center" style={{margin:"20px 0px 10px 0px"}}> + Go to another payment </Button></Col>
    <Col>
    <Form className="d-flex"  style={{width:"50%" ,float:"right" ,margin:"20px 0px 10px 0px"}}>
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
          
          <th>User Reg No.</th>
          <th>Lab</th>
          <th>Equipment Name</th>
          <th>Price(Rs.)</th>
          <th>Quantity</th>
          <th>Action</th>        
        </tr>
      </thead>
      <tbody>
        {
            payment.map((payment , index) => (
                <tr>
                <th key={index}>{index+1}</th>
                
                <td>{payment.user_regNo}</td>
                <td>{payment.user_lab}</td>
                <td>{payment.equipment_name}</td>
                <td>{payment.equipment_price}</td>
                <td>{payment.quantity}</td>
                <td>
                {/* <Link className="btn btn-outline-danger mx-2"
                      to={`/view/${payment.p_id}`} >View </Link> */}
                    <Link className="btn btn-outline-dark mx-2"
                      to={`/Recipt/${payment.p_id}`} >Print </Link>
                    <Button variant="outline-success mx-2" onClick={()=>deletePayment(payment.p_id)}>Delete</Button>
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

export default History;