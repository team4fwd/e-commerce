import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from '../../components/admin/Sidebar';
import Topbar from '../../components/admin/Topbar';
import './Admin.scss';

const Admin = () => {
  return (
    <div className='admin'>
      <Topbar />
      <div className='admin-container'>
        <Sidebar />
        <Outlet />
      </div>
    </div>
  );
};

export default Admin;
