import React, { useEffect, useState } from 'react'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

import Row from 'react-bootstrap/Row';
import { useParams } from 'react-router-dom';
import axios from 'axios';
function Recipt() {
  // const Print = () => {
  //   window.print()

  // }
  const [time, setTime] = useState(new Date())


  const [payment, setPayment] = useState({
    user_name: "",
    user_regNo: "",
    lab: "",
    equipment_name: "",
    equipment_price: "",
    quantity: "",
    accNo: ""
    
  })

  const { p_id } = useParams()

  useEffect(() => {
    loadPayment()

  }, [])

  const loadPayment = async () => {
    const result = await axios.get(`http://localhost:8080/payment/getById/${p_id}`)
    setPayment(result.data)
  }
  const Print = () => {
    let printContents = document.getElementById("printable").innerHTML;
    let originalContents = document.body.innerHTML;
    document.body.innerHTML = printContents;
    window.print();
    document.body.innerHTML = originalContents;
  }

  //For Get Current Time
  useEffect(() => {
    setInterval(() => setTime(new Date()), 1000)

  }, [])



  return (

    <div>
      <>
        <Card id='printable' className='m-100  xl:max-w-4xl' border="primary" style={{ marginTop: "50px", backgroundColor: "#F7F6FB", fontFamily: "Verdana" }}>
          <Card.Header >
            <span style={{ float: "right" }} >Acc No : 123-456-789 {payment.user_accNo}</span>
            <span style={{ float: "left" }}  > Reg No : {payment.user_regNo} </span>


          </Card.Header>
          <Card.Body>
            <Card.Title></Card.Title>
            <Card.Text>
              {/* <div class="container"> */}
              {/* <Row>
        <div class="col-xl-12">
          <i class="far fa-building text-danger fa-6x float-start"></i>
          
      </div></Row> */}
              <Row>
                <div class="col-xl-12">
                  <ul class="list-unstyled float-end">
                    <li><img src='../images/University_of_Peradeniya_crest.png' alt='uop' style={{ width: "30%" }}></img></li>
                    {/* <li style={{fontSize: '30px', color: 'red'}}>University of Peradeniya</li>  */}
                    <li>Faculty of Science</li>
                    <li>123-456-789</li>
                    <li>{payment.user_regNo}@sci.pdn.ac.lk</li>
                  </ul>
                </div>

                <div class="row text-center">
                  <h3 class="text-uppercase text-center mt-3" style={{ fontSize: ' 40px' }}>Payment </h3>
                  <p>123456789</p>
                </div>

                <div class="row mx-3">
                  <table class="table">
                    <thead>
                      <tr>
                        <th scope="col">Description</th>
                        <th scope="col">Quantity</th>
                        <th scope="col">Amount(Rs.)</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>{payment.equipment_name}</td>
                        <td>{payment.quantity}</td>
                        <td>{payment.equipment_price}</td>
                      </tr>

                    </tbody>
                  </table>

                </div>


                <Row>
                  <div class="col-xl-8">
                    <ul class="list-unstyled float-end me-0">
                      <li><span class="me-3 float-start">Total Amount:</span>240.00
                      </li>



                    </ul>
                  </div>

                </Row>

                <Row class="col-xl-8" style={{ marginLeft: "60px" }}>
                  <p class="float-end"
                    style={{ fontSize: '30px', color: 'red', fontWeight: '400', fontFamily: 'Arial, Helvetica, sans-serif' }}>
                    Total:
                    <span> 240.00</span></p>

                </Row>
                <Row className="row mt-2 mb-5">



                </Row>





              </Row>


            </Card.Text>
          </Card.Body>
          <Card.Footer >
            <span class="fw-bold">Date: <span class="text-muted">{time.toDateString()}</span></span>
            <span class="fw-bold" style={{ float: "right" }}>Time: <span class="text-muted">{time.toLocaleTimeString()}</span></span>
          </Card.Footer>
        </Card>


      </>
      <div ><Button style={{ marginTop: "10px", justifyContent: "end" }} onClick={Print}>Print</Button>
        <Button style={{ marginTop: "10px", marginLeft: "4px" }} variant='warning'>Back</Button></div>
    </div>
  )
}
export default Recipt;
