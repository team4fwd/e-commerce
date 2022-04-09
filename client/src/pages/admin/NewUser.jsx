import React from 'react';
import './NewUser.scss';

const NewUser = () => {
  return (
    <div className='newuser'>
      <h1 className='newuser__title'>New User</h1>
      <form className='newuser__form'>
        <div className='newuser__item'>
          <label>Username</label>
          <input type='text' placeholder='username' />
        </div>
        <div className='newuser__item'>
          <label>Full Name</label>
          <input type='text' placeholder='full name' />
        </div>
        <div className='newuser__item'>
          <label>Email</label>
          <input type='email' placeholder='email@example.com' />
        </div>
        <div className='newuser__item'>
          <label>Password</label>
          <input type='password' placeholder='password' />
        </div>
        <div className='newuser__item'>
          <label>Phone</label>
          <input type='text' placeholder='+20 123 456 78' />
        </div>
        <div className='newuser__item'>
          <label>Address</label>
          <input type='text' placeholder='Cairo | EG' />
        </div>
        <div className='newuser__item'>
          <label>Role</label>
          <select className='newuser__select' name='role' id='role'>
            <option value='admin'>Admin</option>
            <option value='customer'>Customer</option>
          </select>
        </div>
        <div className='newuser__item'>
          <label>Active</label>
          <select className='newuser__select' name='active' id='active'>
            <option value='yes'>Yes</option>
            <option value='no'>No</option>
          </select>
        </div>
        <div className='newuser__item'>
          <button className='newuser__btn'>Create</button>
        </div>
      </form>
    </div>
  );
};

export default NewUser;
