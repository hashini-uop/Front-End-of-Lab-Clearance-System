import * as React from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import axios from 'axios';
import Lab from './labs';


function ViewLab() {

    const [lab ,setLab]=useState({
        l_id:"",
        l_name:"",
        l_type:"",
        l_location:"",
        l_number:"",
        l_category:""
    })

    const {l_id}=useParams();

    useEffect(()=>{
        loadLab()

    }, [])

    const loadLab=async ()=>{
        const result=await axios.get(`http://localhost:8080/lab/getById/${l_id}`)
        setLab(result.data)
    }


    return(
    <Card style={{ padding: '50px 50px 50px 50px' }} border="primary" >
    <Card.Header style={{ padding: '50px 50px 50px 50px' }}>Details of Lab ID :  {lab.l_id}
                                                
    </Card.Header>
    {/* <Card.Img variant="top" src="./images/download7.png" style={{ width: "50%", marginLeft: "70px" }} /> */}
    <Card.Body>
    <ul className='list-group list-group-flush'>
                                                    <li className='list-group-item'>
                                                        <b>Code : </b>
                                                        {lab.code}
                                                    </li> 
                                                    <li className='list-group-item'>
                                                        <b>Name : </b>
                                                        {lab.l_name}
                                                    </li>

                                                    <li className='list-group-item'>
                                                        <b>Type: </b>
                                                        {lab.l_type}
                                                    </li>


                                                    <li className='list-group-item'>
                                                        <b>Category: </b>
                                                        {lab.l_category}
                                                    </li>

                                                    <li className='list-group-item'>
                                                        <b>Location :  </b>
                                                        {lab.l_location}
                                                    </li>

                                                    <li className='list-group-item'>
                                                        <b>Number :  </b>
                                                        {lab.l_num}
                                                    </li>
                                                 </ul> 
      {/* <Card.Title>Check Equipments</Card.Title>
      <Card.Text>
        You can check the quantity of lab equipments here.
      </Card.Text> */}
      

    </Card.Body>
    <Card.Footer><Button  variant="outline-danger" href="/labs">Cancel</Button>{''}</Card.Footer>
  </Card>

)}
export default ViewLab;