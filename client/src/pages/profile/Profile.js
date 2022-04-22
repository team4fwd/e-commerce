import React from 'react';
import Tab from 'react-bootstrap/Tab';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import './Profile.scss';
import ProfileInformation from '../../components/Profile/ProfileInformation';
import SectionTitle from '../../components/layout/SectionTitle';
import ProfileOrders from '../../components/Profile/ProfileOrders';
import { useLocation } from 'react-router-dom';
import ChangePassword from '../../components/Profile/changePassword';
import AcountDetailsForm from '../../components/Profile/AcountDetailsForm';


const Profile = () => {
  const location = useLocation();
  const redirect = location.search ? location.search.split('=')[1] : '';
  const defaultKey = redirect ? redirect : 'dash';
  console.log(redirect);
  console.log(defaultKey);

  return (
    <>
      <SectionTitle title='My Profile' />
      <Container className='mt-5 mx-auto'>
        <Tab.Container id='left-tabs-example' defaultActiveKey={defaultKey}>
          <Row>
            <Col sm={3}>
              <Nav variant='pills' className='flex-column nav-pills-custom'>
               
              <Nav.Item>
                  <Nav.Link className='mb-3 p-3 shadow' eventKey='account'>
                    <span className='font-weight-bold text-uppercase'>
                      Account details
                    </span>
                  </Nav.Link>
                </Nav.Item>

              <Nav.Item>
                  <Nav.Link className='mb-3 p-3 shadow' eventKey='information'>
                    <span className='font-weight-bold text-uppercase'>
                      profile information
                    </span>
                  </Nav.Link>
                </Nav.Item>

                <Nav.Item>
                  <Nav.Link className='mb-3 p-3 shadow' eventKey='order'>
                    <span className='font-weight-bold text-uppercase'>Orders</span>
                  </Nav.Link>
                </Nav.Item>              
               
                <Nav.Item>
                  <Nav.Link className='mb-3 p-3 shadow' eventKey='changePassword'>
                    <span className='font-weight-bold text-uppercase'>change Password</span>
                  </Nav.Link>
                </Nav.Item>

              </Nav>
            </Col>
            <Col sm={9}>
              <Tab.Content>

              <Tab.Pane
                  className='shadow rounded bg-white p-5'
                  eventKey='account'
                >
                   <AcountDetailsForm />
                </Tab.Pane>

              <Tab.Pane
                  className='shadow rounded bg-white p-5'
                  eventKey='information'
                >
                  <ProfileInformation />
                </Tab.Pane>

                <Tab.Pane
                  className='shadow rounded bg-white p-5'
                  eventKey='order'
                >
                  <ProfileOrders />
                </Tab.Pane>

                <Tab.Pane
                  className='shadow rounded bg-white p-5'
                  eventKey='changePassword'
                >
                  <ChangePassword />
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
