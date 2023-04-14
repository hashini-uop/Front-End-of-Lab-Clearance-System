import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import "./NavBar.css"





function NavBar({link , name , link1 , link2}) {
  return (
    <Navbar fixed="top" bg="darkblue" expand="lg">
      <Container fluid style={{fontSize:"20px",maxHeight: '250px', color:"white" , backgroundColor:"darkblue",paddingTop:"40px",paddingBottom:"10px"  , position:"fixed"}}>
      <Navbar.Brand   style={{ fontFamily:"cursive" , fontSize:"30px" , color:"red"}} href='#'>Lab Clerance System </Navbar.Brand>   
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0 "
            style={{ maxHeight: '150px',}}
        
            navbarScroll>
          
            <Nav.Link href="/Home" style={{color:"white"}}> Home </Nav.Link>
            {/* <Nav.Link href="/contact" style={{color:"white"}}>Contact </Nav.Link> */}
            <Nav.Link href={link1} style={{color:"white"}}>Contact </Nav.Link>
            <Nav.Link href="/login" style={{color:"white"}}>Dashboard </Nav.Link>
            <Nav.Link href={link2} style={{color:"white"}}> Feedback </Nav.Link> 
            
                    
            
            
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-danger"><img src='./images/searchIcon.png'></img></Button>
            <Button style={{marginLeft:"10px"}} href={link} variant="outline-primary">{name}</Button>

            
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;