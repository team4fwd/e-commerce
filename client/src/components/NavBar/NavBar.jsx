import './NavBar.scss';
import { Container, Nav, Navbar } from 'react-bootstrap';
import Badge from 'react-bootstrap/Badge';
import { MdSearch, MdShoppingCart } from 'react-icons/md';
import { CgProfile } from 'react-icons/cg';
import { useDispatch, useSelector } from 'react-redux';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { logoutUser } from '../../store/actions/userActions';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useState } from 'react';
import Modal from '../layout/Modal';
import Search from '../search/Search';

function NavBar() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const items = useSelector((state) => state.cart.items);
  const itemsCount = items
    ? items.reduce((pre, curr) => pre + curr.amount, 0)
    : 0;
  const user = useSelector((state) => state.user.userInfo);
  // const avatar = user.userProfile[0].avatar[0];
  const avatar =
    'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YXZhdGFyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60';

  const [searchIsShown, setSearchIsShown] = useState(false);

  const showSearchHandler = () => {
    setSearchIsShown(true);
  };

  const hideSearchHandler = () => {
    setSearchIsShown(false);
  };

  const logoutHandler = () => {
    dispatch(logoutUser());
    navigate('/');
  };

  return (
    <Navbar bg='white' expand='lg' variant='light'>
      <Container fluid>
        <Navbar.Brand as={NavLink} to='/'>
          4Commerce
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='navbarScroll' />
        <Navbar.Collapse id='navbarScroll'>
          <Nav className='me-auto my-2 my-lg-0'>
            <Nav.Link as={NavLink} to='/'>
              home
            </Nav.Link>
            <Nav.Link as={NavLink} to='/products'>
              Products
            </Nav.Link>
            <NavDropdown title='Shop' id='navbarScrollingDropdown'>
              <NavDropdown.Item as={NavLink} to='/products'>
                Mens
              </NavDropdown.Item>
              <NavDropdown.Item as={NavLink} to='/products'>
                Womens
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item as={NavLink} to='/products'>
                Kids
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link as={NavLink} to='/contact'>
              contact us
            </Nav.Link>
            <Nav.Link as={NavLink} to='/about'>
              about us
            </Nav.Link>
          </Nav>
          <ul className='d-flex list-unstyled align-items-baseline'>
            <li>
              <MdSearch
                className='navbar__search-icon'
                onClick={showSearchHandler}
              />
              {searchIsShown && (
                <Modal onClose={hideSearchHandler}>
                  <Search />
                </Modal>
              )}
            </li>
            <li className='position-relative'>
              <Link className='route-link' to='/cart'>
                <MdShoppingCart className='navbar__search-icon' />
                <Badge className='navbar__badge' pill bg='danger'>
                  {itemsCount}
                </Badge>
              </Link>
            </li>
            {user && (
              <li>
                <NavDropdown
                  className='navbar__user'
                  title={
                    <>
                      <span className='navbar__name'>{`Hi,${user.firstName}`}</span>
                      {avatar ? (
                        <img
                          src={avatar}
                          className='navbar__avatar'
                          alt={user.firstName}
                        />
                      ) : (
                        <CgProfile />
                      )}
                    </>
                  }
                  id='navbarScrollingDropdown'
                >
                  <NavDropdown.Item as={NavLink} to='/profile'>
                    Profile
                  </NavDropdown.Item>
                  <NavDropdown.Item onClick={logoutHandler}>
                    Logout
                  </NavDropdown.Item>
                </NavDropdown>
              </li>
            )}
            {/* <li className='navbar__user'>
              {user ? (
                <span className='navbar__name'>{`Hi,${user.firstName}`}</span>
              ) : (
                ''
              )}
              {avatar ? (
                <img
                  src={avatar}
                  className='navbar__avatar'
                  alt={user.firstName}
                />
              ) : (
                <CgProfile />
              )}
            </li> */}
            {!user && (
              <li>
                <Link className='route-link navbar__btn' to='/login'>
                  Login
                </Link>
              </li>
            )}
          </ul>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
