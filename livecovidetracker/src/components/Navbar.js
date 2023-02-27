// import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
// import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
// import NavDropdown from 'react-bootstrap/NavDropdown';
// import PropTypes from 'prop-types'



function nav(props) {
  return (
    <Navbar className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}  my-4`}   >
      <Container fluid>
        <Navbar.Brand href="#">{props.text}</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0 "
            style={{ maxHeight: '100px'}}
            navbarScroll
          >
            <Link to="/" className='mx-2 ' >Home</Link>
            <Link to="about">{props.name}</Link>
            {/* <NavDropdown title="Link" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Something else here
              </NavDropdown.Item>
            </NavDropdown> */}
            {/* <Nav.Link href="#" disabled>
              Link
            </Nav.Link> */}
          </Nav>
          {/* <Form classNameName="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              classNameName="me-2"
              aria-label="Search"
            />
            <Button variant="outline-primary">Search</Button>
          </Form> */}
                <div className={`form-check form-switch text-${props.mode ==='light'?'dark':'light'}`}>
        <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
        <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable darkMode</label>
      </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
export default nav;
 
// nav.propTypes = { 
//  text: PropTypes.string.isRequired,
//  name: PropTypes.string
// }

// nav.defaultprops = {
// text:'CryptoKey',
// name:'solider'
// };