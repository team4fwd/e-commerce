import React from 'react';
import Tab from 'react-bootstrap/Tab';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import './Profile.css';

const Profile = () => {
  return (
    <Container className='mt-5 mx-auto'>
      <Tab.Container id='left-tabs-example' defaultActiveKey='dash'>
        <Row>
          <Col sm={3}>
            <Nav variant='pills' className='flex-column nav-pills-custom'>
              <Nav.Item>
                <Nav.Link className='mb-3 p-3 shadow' eventKey='dash'>
                  <span class='font-weight-bold text-uppercase'>Dashboard</span>
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link className='mb-3 p-3 shadow' eventKey='order'>
                  <span class='font-weight-bold text-uppercase'>Orders</span>
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link className='mb-3 p-3 shadow' eventKey='address'>
                  <span class='font-weight-bold text-uppercase'>Addresses</span>
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
              <Tab.Pane className='shadow rounded bg-white p-5' eventKey='dash'>
                <p class='font-italic text-muted mb-2'>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </p>
              </Tab.Pane>
              <Tab.Pane
                className='shadow rounded bg-white p-5'
                eventKey='order'
              >
                <p class='font-italic text-muted mb-2'>
                  No order has been made yet.
                </p>
              </Tab.Pane>
              <Tab.Pane
                className='shadow rounded bg-white p-5'
                eventKey='address'
              >
                <Form>
                  <Row className='mb-3'>
                    <Form.Group as={Col} controlId='formGridEmail'>
                      <Form.Label>Email</Form.Label>
                      <Form.Control type='email' placeholder='Enter email' />
                    </Form.Group>

                    <Form.Group as={Col} controlId='formGridPassword'>
                      <Form.Label>Password</Form.Label>
                      <Form.Control type='password' placeholder='Password' />
                    </Form.Group>
                  </Row>

                  <Form.Group className='mb-3' controlId='formGridAddress1'>
                    <Form.Label>Address</Form.Label>
                    <Form.Control placeholder='1234 Main St' />
                  </Form.Group>

                  <Form.Group className='mb-3' controlId='formGridAddress2'>
                    <Form.Label>Address 2</Form.Label>
                    <Form.Control placeholder='Apartment, studio, or floor' />
                  </Form.Group>

                  <Row className='mb-3'>
                    <Form.Group as={Col} controlId='formGridCity'>
                      <Form.Label>City</Form.Label>
                      <Form.Control />
                    </Form.Group>

                    <Form.Group as={Col} controlId='formGridState'>
                      <Form.Label>State</Form.Label>
                      <Form.Select defaultValue='Choose...'>
                        <option>Choose...</option>
                        <option>...</option>
                      </Form.Select>
                    </Form.Group>

                    <Form.Group as={Col} controlId='formGridZip'>
                      <Form.Label>Zip</Form.Label>
                      <Form.Control />
                    </Form.Group>
                  </Row>

                  <Form.Group className='mb-3' id='formGridCheckbox'>
                    <Form.Check type='checkbox' label='Check me out' />
                  </Form.Group>

                  <Button variant='primary' type='submit'>
                    Submit
                  </Button>
                </Form>
              </Tab.Pane>
              <Tab.Pane
                className='shadow rounded bg-white p-5'
                eventKey='account'
              >
                <Row>
                  <Col>
                    <Card style={{ width: '18rem' }}>
                      <Card.Body>
                        <Card.Title>Shipping Address</Card.Title>
                        <Card.Text>
                          You have not set up this type of address yet.
                        </Card.Text>
                        <Card.Link href='#'>ADD</Card.Link>
                      </Card.Body>
                    </Card>
                  </Col>
                  <Col>
                    <Card style={{ width: '18rem' }}>
                      <Card.Body>
                        <Card.Title>Billing Address</Card.Title>
                        <Card.Text>
                          You have not set up this type of address yet.
                        </Card.Text>
                        <Card.Link href='#'>ADD</Card.Link>
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
  );
};

export default Profile;
