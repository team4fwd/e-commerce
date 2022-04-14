import { Container, Nav, Navbar } from 'react-bootstrap';
import { FaShoppingCart } from 'react-icons/fa';
import Badge from 'react-bootstrap/Badge';
import { BsSearch } from 'react-icons/bs';
import { CgProfile } from 'react-icons/cg';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
function NavBar() {
  const items = useSelector((state) => state.cart.items);
  const itemsCount = items.reduce((pre, curr) => pre + curr.amount, 0);
  return (
    <Navbar bg='light' expand='lg' variant='light'>
      <Container fluid>
        <Navbar.Brand href='#'>Navbar</Navbar.Brand>
        <Navbar.Toggle aria-controls='navbarScroll' />
        <Navbar.Collapse id='navbarScroll'>
          <Nav
            className='me-auto my-2 my-lg-0'
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href='#home' className='text-capitalize'>
              home
            </Nav.Link>
            <Nav.Link href='#aboutUs' className='text-capitalize'>
              about us
            </Nav.Link>
            <Nav.Link href='#myAccount' className='text-capitalize'>
              my account
            </Nav.Link>
            <Nav.Link href='#contact-us' className='text-capitalize'>
              contact us
            </Nav.Link>
          </Nav>
          <ul className='d-flex list-unstyled align-items-baseline'>
            <li className='me-3 fs-4'>
              <CgProfile />
            </li>
            <li className='me-3 fs-4'>
              <BsSearch />
            </li>
            <li className='me-3 fs-4 position-relative'>
              <Link className='route-link' to='/cart'>
                <FaShoppingCart />
                <Badge
                  style={{
                    position: 'absolute',
                    top: '0px',
                    fontWeight: 'normal',
                    fontSize: '12px',
                    display: 'flex',
                    alignItems: 'center',
                    right: '-15px',
                  }}
                  pill
                  bg='danger'
                >
                  {itemsCount}
                </Badge>
              </Link>
            </li>
          </ul>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
