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
  let avatar =
    'https://cdn-icons.flaticon.com/png/512/668/premium/668709.png?token=exp=1650660805~hmac=cb7a07ddf26c627c1022395c83d8b182';
  if (user) avatar = user?.userProfile[0].avatar?.url || avatar;

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
                  <Search onClose={hideSearchHandler} />
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
