import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import InputGroup from 'react-bootstrap/InputGroup';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

function AddLab() {
    let navigate = useNavigate(); 
  
    const [lab ,setLab]=useState({
        code:"",
        l_name:"",
        l_type:"",
        l_location:"",
        l_num:"",
        l_category:""
    })





    const {code,l_name,l_type,l_category,l_num,l_location} = lab;
    
  
    const onInputChange = (e) => {
      setLab({...lab, [e.target.name]: e.target.value});
};

    const onSubmit=async (e) =>{
      e.preventDefault();
      await axios.post("http://localhost:8080/lab/add", lab);
      navigate("/labs");
      
    };
  
      
  
  return (
    <div className='container-fluid'>
      <div>
    <h2 className='mt-5' style={{ width:"100%"}}>  Add Labs</h2></div>
    <Form  style={{ width:"100%" , marginTop:"100px"}} onSubmit={(e) => onSubmit(e)}> 
      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridCode">
          <Form.Label>Lab Code</Form.Label>
          <Form.Control   
          type={'text'}
          name={"code"}
          value={code}
          onChange={(e)=>onInputChange(e)} />
        </Form.Group> 


        <Form.Group as={Col} controlId="formGridType">     
        <Form.Label>Type</Form.Label>
        <Form.Control placeholder="Lab Type"  value={l_type} name="type" onChange={(e)=>onInputChange(e)}/> 
        </Form.Group>
      </Row>

      
      <Row className="mb-3">
      <Form.Group as={Col} controlId="formGridDes">
      <Form.Label>Name</Form.Label>
          <Form.Control  placeholder="Enter The Name of lab" value={l_name} name="l_name" onChange={(e)=>onInputChange(e)}/>
      </Form.Group>   
      </Row>

      <Row className="mb-3">
      <Form.Group as={Col} controlId="formGridLoc">
      <Form.Label>Location</Form.Label>
          <Form.Control   value={l_location} name="l_name" onChange={(e)=>onInputChange(e)} />
      </Form.Group>   
      </Row>

      <Row className="mb-3">
      <Form.Group as={Col} controlId="formGridCode">
      <Form.Label >Category</Form.Label>  
        <Form.Control  value={l_category} name="l_category" onChange={(e)=>onInputChange(e)} />
       </Form.Group>
    
      
    
      <Form.Group as={Col} controlId="formGridCode">
      <Form.Label >Number</Form.Label>
      <InputGroup as={Col} controlId="formGridAddress1" >     
       <Form.Control  value={l_num} name="number" onChange={(e)=>onInputChange(e)} />
       
      </InputGroup>
      
      </Form.Group>
      </Row>




      <Form.Group className="mb-3" id="formGridCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>

      <Button variant="primary" type="submit" >
        Submit
      </Button>

         <Link className='btn btn-danger mx-2' type="cancel" to={"/labs"} >
        Cancel
        </Link>
    </Form></div>
  );
}

export default AddLab;