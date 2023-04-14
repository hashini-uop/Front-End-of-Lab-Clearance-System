import * as React from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import axios from 'axios';


function View() {

    const [equipment ,setEquipment]=useState({
        name:"",
        type:"",
        description:"",
        e_price:"",
        quantity:""
    })

    const {e_id}=useParams();

    useEffect(()=>{
        loadEquipment()

    }, [])

    const loadEquipment=async ()=>{
        const result=await axios.get(`http://localhost:8080/equipment/getById/${e_id}`)
        setEquipment(result.data)
    }


    return(
    <Card style={{ padding: '50px 50px 50px 50px' }} border="primary" >
    <Card.Header style={{ padding: '50px 50px 50px 50px' }}>Details of Equipments id :  {equipment.e_id}
                                                
    </Card.Header>
    {/* <Card.Img variant="top" src="./images/download7.png" style={{ width: "50%", marginLeft: "70px" }} /> */}
    <Card.Body>
    <ul className='list-group list-group-flush'>
                                                    <li className='list-group-item'>
                                                        <b>Name : </b>
                                                        {equipment.name}
                                                    </li>

                                                    <li className='list-group-item'>
                                                        <b>Price : </b>
                                                        {equipment.e_price}
                                                    </li>


                                                    <li className='list-group-item'>
                                                        <b>Quantity : </b>
                                                        {equipment.quantity}
                                                    </li>

                                                    <li className='list-group-item'>
                                                        <b>Description :  </b>
                                                        {equipment.description}
                                                    </li>

                                                    <li className='list-group-item'>
                                                        <b>Type :  </b>
                                                        {equipment.type}
                                                    </li>
                                                 </ul> 
      {/* <Card.Title>Check Equipments</Card.Title>
      <Card.Text>
        You can check the quantity of lab equipments here.
      </Card.Text> */}
      

    </Card.Body>
    <Card.Footer><Button  variant="outline-danger" href="/Check">Cancel</Button>{''}</Card.Footer>
  </Card>

)}
export default View;