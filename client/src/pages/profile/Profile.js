import React from 'react';
import Tab from 'react-bootstrap/Tab';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import './Profile.scss';
import ProfileAdressForm from '../../components/Profile/ProfileAdressForm';
import SectionTitle from '../../components/layout/SectionTitle';
import ProfileOrders from '../../components/Profile/ProfileOrders';

const Profile = () => {
  return (
    <>
      <SectionTitle title='My Profile' />
      <Container className='mt-5 mx-auto'>
        <Tab.Container id='left-tabs-example' defaultActiveKey='dash'>
          <Row>
            <Col sm={3}>
              <Nav variant='pills' className='flex-column nav-pills-custom'>
                <Nav.Item>
                  <Nav.Link className='mb-3 p-3 shadow' eventKey='dash'>
                    <span class='font-weight-bold text-uppercase'>
                      Dashboard
                    </span>
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link className='mb-3 p-3 shadow' eventKey='order'>
                    <span class='font-weight-bold text-uppercase'>Orders</span>
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link className='mb-3 p-3 shadow' eventKey='address'>
                    <span class='font-weight-bold text-uppercase'>
                      Addresses
                    </span>
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link className='mb-3 p-3 shadow' eventKey='account'>
                    <span class='font-weight-bold text-uppercase'>
                      Account details
                    </span>
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link className='mb-3 p-3 shadow' eventKey='logout'>
                    <span class='font-weight-bold text-uppercase'>Logout</span>
                  </Nav.Link>
                </Nav.Item>
              </Nav>
            </Col>
            <Col sm={9}>
              <Tab.Content>
                <Tab.Pane
                  className='shadow rounded bg-white p-5'
                  eventKey='dash'
                >
                  <p class='font-italic text-muted mb-2'>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum.
                  </p>
                </Tab.Pane>
                <Tab.Pane
                  className='shadow rounded bg-white p-5'
                  eventKey='order'
                >
                  <ProfileOrders />
                </Tab.Pane>
                <Tab.Pane
                  className='shadow rounded bg-white p-5'
                  eventKey='address'
                >
                  <ProfileAdressForm />
                </Tab.Pane>
                <Tab.Pane
                  className='shadow rounded bg-white p-5'
                  eventKey='account'
                >
                  <Row>
                    <Col>
                      <Card className='shadow-sm' style={{ width: '18rem' }}>
                        <Card.Body>
                          <Card.Title>Shipping Address</Card.Title>
                          <Card.Text>
                            You have not set up this type of address yet.
                          </Card.Text>
                          <Card.Link className='btn btn-light' href='#'>
                            ADD
                          </Card.Link>
                        </Card.Body>
                      </Card>
                    </Col>
                    <Col>
                      <Card className='shadow-sm' style={{ width: '18rem' }}>
                        <Card.Body>
                          <Card.Title>Billing Address</Card.Title>
                          <Card.Text>
                            You have not set up this type of address yet.
                          </Card.Text>
                          <Card.Link className='btn btn-light' href='#'>
                            ADD
                          </Card.Link>
                        </Card.Body>
                      </Card>
                    </Col>
                  </Row>
                </Tab.Pane>
              </Tab.Content>
            </Col>
          </Row>
        </Tab.Container>
      </Container>
    </>
  );
};

export default Profile;
