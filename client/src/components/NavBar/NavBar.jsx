import { Container, Nav, Navbar} from "react-bootstrap";
import {FaShoppingCart} from 'react-icons/fa'
import {BsSearch} from 'react-icons/bs';
import {CgProfile} from 'react-icons/cg'
function NavBar() {
  return (
    <Navbar bg="light" expand="lg" variant="light">
      <Container fluid>
        <Navbar.Brand href="#">Navbar</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
          className="me-auto my-2 my-lg-0"
          style={{ maxHeight: '100px' }}
          navbarScroll
          >
            <Nav.Link href="#home" className='text-capitalize'>home</Nav.Link>
            <Nav.Link href="#aboutUs" className='text-capitalize'>about us</Nav.Link>
            <Nav.Link href="#myAccount" className='text-capitalize'>my account</Nav.Link>
            <Nav.Link href="#contact-us" className='text-capitalize'>contact us</Nav.Link>
          </Nav>
          <ul className="d-flex list-unstyled align-items-baseline">
            <li className="me-3 fs-4"><CgProfile/></li>
            <li className="me-3 fs-4"><BsSearch/></li>
            <li className="me-3 fs-4"><FaShoppingCart/></li>
          </ul>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavBar