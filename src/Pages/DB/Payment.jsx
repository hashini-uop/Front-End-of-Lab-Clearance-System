import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Modal from 'react-bootstrap/Modal';
import "./payment.css"
import { useEffect } from 'react';

function Payment() {
  
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const[user_regNo,setUser_regNo]=useState("")
  const[accNo,setAccNo]=useState("")
  const[user_lab,setUser_lab]=useState("")
  const[equipment_name,setEquipment_name]=useState("")
  const[equipment_price,setEquipment_price]=useState("")
  const[e_price,setE_price]=useState("")
  const[quantity,setQuantity]=useState("");
  const[total,setTotal]=useState(0);
  const [equipmentList , setEquipmentList] = useState([{'e_id':'','name':'','type':'','description':'','e_price':'','quantity':''}])

  
  const required = (value) => {
  if (!value) {
    return (
      <div className="alert alert-danger" role="alert">
        This field is required!
      </div>
    );
  }
};

  

  

  const handleClick=(e)=>{
    e.preventDefault()
    const student={user_regNo,accNo,user_lab,equipment_name,equipment_price,quantity}
    console.log(student)
    

    fetch("http://localhost:8080/payment/add",{ method:"POST", headers:{"Content-Type":"application/json"}, body:JSON.stringify(student)
  
  }).then(()=>{
    console.log("New payment added")
  })
  }

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`http://localhost:8080/equipment/getAll`)
      const newData = await response.json();
      setEquipmentList(newData);
      // console.log(newData);
    };
    fetchData();
  },[])

  const handleChange = (event) => {
    setEquipment_name(event.target.value)
  
  }


  function getTotal() {
    setTotal(Number(quantity) * Number(equipment_price));
  }


  return (  

    
        <Form className='m-100  xl:max-w-4xl xl:mx-auto'style={{ width: "80%" , marginLeft: "100px"}} >
            <div class="col-sm-12 btn btn-danger" style={{backgroundColor:"darkblue", color:"white",marginTop:"20px" }}>Payment Page</div>  
              <Row className="mb-3" >


                

              <Form.Group  as={Col} controlId="formGridName" style={{width:"100%" }} >
              <Form.Label>Payment ID</Form.Label>
                   <Form.Control  placeholder="1" disabled/>
        
                  </Form.Group>
                
                  <Form.Group  as={Col} controlId="formGridEmail" style={{width:"100%" }} >
                  <Form.Label>Registation Number</Form.Label>
                    <Form.Control type="email" placeholder="Enter Registation Number"  required  value={user_regNo} onChange={(e)=>setUser_regNo(e.target.value)}/>
                    
                  </Form.Group>

                  
                </Row>
                <Row className="mb-3" >
    
    

    <Form.Group  as={Col} controlId="formGridName" style={{width:"100%" , marginTop:"-30px"}} >

                  
                  
                  <Form.Label>Name</Form.Label>
                   <Form.Control type="name"  placeholder="A.B.C. PERERA" />
        
                  </Form.Group>



      
    </Row>

  
                
                

                <Row className="mb-3" style={{width:"100%" ,marginTop:"-30px"}}>

                <Form.Group as={Col} controlId="formGridState" >
                    <Form.Label>Lab </Form.Label>
                    <Form.Select defaultValue="Choose..." value={user_lab} onChange={(e)=>setUser_lab(e.target.value)} >
                       
                      <option>Chemistry</option>
                      <option>CS</option>
                      <option>Physics</option>
                    </Form.Select>
                  </Form.Group>

                  <Form.Group as={Col} controlId="formGridState">
                    <Form.Label>Lab Equipment </Form.Label>
                    <Form.Select defaultValue="Choose..."  value={equipment_name} onChange={handleChange}>
                    
                     
                      
                      {equipmentList.map(equipment =>(
                        <option value={equipment.name}  key={equipment.e_id}>{equipment.name}</option>
                        
                      ) )
                        
                      }
                    </Form.Select>
                  </Form.Group>

                 
                </Row>

                <Row className="mb-3" style={{width:"100%" ,marginTop:"-30px"}}>

                <Form.Group as={Col} controlId="formGridState">
                    <Form.Label>Quantity</Form.Label>
                    <Form.Control placeholder="1" type='number'  value={quantity} onChange={(e)=>setQuantity(e.target.value)} />
                  </Form.Group>

                  
                <Form.Group as={Col} controlId="formGridState">
                    <Form.Label>Price(Rs.)</Form.Label>
                    <Form.Control placeholder="0.00 "  value={e_price} onChange={handleChange}
                    //  value={equipment_price} onChange={(e)=>setEquipment_price(e.target.value)}
                      />

                  </Form.Group>

                  
                <Form.Group as={Col} controlId="formGridTotal">
                    <Form.Label>Total</Form.Label>
                    <Form.Control placeholder="The Price you have to pay.."  disabled value={total} 
                      // value={total} onChange={(e)=>setTotal(e.target.value)} 
                      />
                      <Button onClick={getTotal} className='btn btn-warning mt-4'>Get Total</Button> 
                  </Form.Group>

                </Row>
                
                <Form.Group className="mb-3" id="formGridCheckbox" style={{width:"100%" , marginTop:"-30px"}}>
                  <Form.Check type="checkbox" label="Agree to all terms and conditions" id='accept' name='accept'  />
                </Form.Group>
                
                <Button  variant="outline-info" onClick={handleClick}><a href='#bank'>Next</a></Button>          
              
              
              
              
              
              
              
              {/* bank page */}
              
               <a id='bank'></a>
               <div class="col-sm-12 btn btn-danger" style={{backgroundColor:"darkblue", color:"white",marginTop:"100px" }}>Add Your Bank Details Here</div> 
                <Row className="mb-3">
                       
                       <Form.Group className="mb-3" controlId="formGridName" style={{ width: "100%", marginTop: "-30px" }}>
                         <Form.Label>Owner</Form.Label>
                         <Form.Control placeholder="A.B.C. PERERA" />
               
                       </Form.Group>
               
               
                       <Form.Group className="mb-3" controlId="formGridName" style={{ width: "100%", marginTop: "-30px" }}>
                         <Form.Label>Account Number</Form.Label>
                         <Form.Control placeholder="0000 0000 0000" value={accNo} onChange={(e)=>setAccNo(e.target.value)}/>
               
                       </Form.Group>
               
                     </Row>
               
                     <Row className="mb-3" style={{ width: "100%", marginLeft: "0", marginTop: "-50px" }}>
                       <Form.Group as={Col} controlId="formGridCity">
                         <Form.Label>CVV</Form.Label>
                         <Form.Control placeholder='0000' />
                       </Form.Group>
               
                       <Form.Group as={Col} controlId="formGridState">
                         <Form.Label>Expiry Date</Form.Label>
                         <Form.Control type='date' />
                       </Form.Group>
               
               
                     </Row>
               
                     <Row className="mb-3" style={{ width: "100%",  marginTop: "-10px" }}>
                       <img src="./images/pp.png" alt='paypal' style={{ width: "30%" }}></img>
                       <img src="./images/mc.png" alt='MC' style={{ width: "30%" }}></img>
                       <img src="./images/vi.png" alt='Visa'style={{ width: "30%" }}></img>
               
               
                     </Row>
               
               
               
               
                     <Form.Group className="mb-3" id="formGridCheckbox" style={{ width: "100%", marginLeft: "0", marginTop: "-30px" }}>
                       <Form.Check type="checkbox" label="Agree to all terms and conditions" />
                     </Form.Group>
               
               

               
               
               <Button   variant="outline-primary" onClick={handleShow} >Submit</Button>    
               
               <Modal
                                   id="modal1"
                                   show={show}
                                   onHide={handleClose}
                                   backdrop="static"
                                   keyboard={false}
                                   
                                 >
                                   <Modal.Header closeButton style={{marginLeft:"10px"}}>
                                   <Modal.Title>Succesfull!!!</Modal.Title>
                                   </Modal.Header>
                                   
                                   <Modal.Body >    
                                   
                                   <p>You have succesfully submitted your clearance .</p>
                     
                                   <p className='mb-3'>Do you need a <a href='/History'>Reciept?</a></p>    
                                   </Modal.Body>
                                   <Modal.Footer>
                                    
                                     <Button  href="/Request" variant="outline-danger" onClick={handleClose}>Close</Button>    
                                    
                                     
                                   </Modal.Footer>
                                 </Modal>
              
              
              
              
              </Form>   
      
  ); 
}

export default Payment;




      



      