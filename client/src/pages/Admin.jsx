import React from 'react';
import Sidebar from '../components/admin/Sidebar';
import Topbar from '../components/admin/Topbar';
import './Admin.scss';

const Admin = () => {
  return (
    <div className='admin'>
      <Topbar />
      <div className='admin-container'>
        <Sidebar />
        <div className='other'>other pagers</div>
      </div>
    </div>
  );
};

export default Admin;
