import React from 'react';
import Sidebar from '../../components/admin/Sidebar';
import Topbar from '../../components/admin/Topbar';
import Home from './Home';
import './Admin.scss';

const Admin = () => {
  return (
    <div className='admin'>
      <Topbar />
      <div className='admin-container'>
        <Sidebar />
        <Home />
      </div>
    </div>
  );
};

export default Admin;
