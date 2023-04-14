import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

function TextLinkExample({as}) {
  return (
    <Navbar>
      <Container>
    
        <Navbar.Collapse className="justify-content-end" >
          <Navbar.Text>
            Signed in as: <a href="#login">{as}</a>
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default TextLinkExample;