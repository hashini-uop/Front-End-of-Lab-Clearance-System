import Accordion from 'react-bootstrap/Accordion';
import Button from 'react-bootstrap/Button';
import ChemLab from './ChemLab';

function AllCollapseExample() {
  return (
    
    <Accordion style={{width:"100%" , marginTop:"100px"}} alwaysOpen>
      <Button href="/Add" variant="outline-primary text-center" style={{marginBottom:"10px"}}>Add Equipment</Button>
      <Accordion.Item eventKey="0" style={{width:"100%"}}>
        <Accordion.Header>Chemitry Lab </Accordion.Header>
        <Accordion.Body style={{width:"1200px"}}>
          <ChemLab />

        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Physics Lab</Accordion.Header>
        <Accordion.Body>

        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}

export default AllCollapseExample;