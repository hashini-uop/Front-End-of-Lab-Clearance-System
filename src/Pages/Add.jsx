import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Spinner from 'react-bootstrap/Spinner';
import InputGroup from 'react-bootstrap/InputGroup';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useEffect } from 'react';

function Add() {
  
  let navigate = useNavigate();  
  const [equipment ,setEquipment]=useState({
    name:"",
    type:"",
    description:"",
    e_price:"",
    quantity:""
    
});



    const {name,type,description,e_price,quantity} = equipment;
    
  
    const onInputChange = (e) => {
      setEquipment({...equipment, [e.target.name]: e.target.value});
};

    const onSubmit=async (e) =>{
      e.preventDefault();
      await axios.post("http://localhost:8080/equipment/add", equipment);
      navigate("/Check");
      
    };
  
      
  
  return (
    <div className='container-fluid'>
      <div>
    <h2 className='mt-5' style={{ width:"100%"}}>  Add <hr/>Equipments</h2></div>
    <Form  style={{ width:"100%" , marginTop:"100px"}} onSubmit={(e) => onSubmit(e)}> 
      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridName">
          <Form.Label>Equipment Name</Form.Label>
          <Form.Control   
          type={'text'}
          name={"name"}
          value={name}
          onChange={(e)=>onInputChange(e)} />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridQuantity">
          <Form.Label>Quantity</Form.Label>
          <Form.Control type="number" placeholder="0" value={quantity} name="quantity" onChange={(e)=>onInputChange(e)}/>
        </Form.Group>
      </Row>

      
      <Row className="mb-3">
      <Form.Group as={Col} controlId="formGridDes">
        <Form.Label>Description</Form.Label>
        <Form.Control as="textarea" rows={3}placeholder="This is...."  value={description} name="description" onChange={(e)=>onInputChange(e)}/>
      </Form.Group>

      
      </Row>
      <Row className="mb-3">
      <Form.Label >Price</Form.Label>
      <InputGroup as={Col} controlId="formGridAddress1" >
        
        <Form.Control aria-label="Amount (to the nearest dollar)" value={e_price} name="e_price" onChange={(e)=>onInputChange(e)} />
        <InputGroup.Text>.00</InputGroup.Text>
      </InputGroup></Row>

      <Row className="mb-3">
   
        <Form.Group as={Col} controlId="formGridState">
                    <Form.Label>Lab</Form.Label>
                    
                    <Form.Select defaultValue="Choose..." value={type} name="type" onChange={(e)=>onInputChange(e)}>
                      
                      <option>Chemistry</option>
                      <option>Physics</option>
                    </Form.Select>
                  </Form.Group>


      </Row>

      <Form.Group className="mb-3" id="formGridCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>

      <Button variant="primary" type="submit" >
        Submit
      </Button>

         <Link className='btn btn-danger mx-2' type="cancel" to={"/Check"} >
        Cancel
        </Link>
    </Form></div>
  );
}

export default Add;