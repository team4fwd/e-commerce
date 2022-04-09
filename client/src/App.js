import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Cart from './pages/Cart';
import Order from './pages/Order';
import Profile from './pages/Profile';
import './App.css';
import React, { useState } from 'react';
import LogIn from './components/Authentication/Login/login';
import SignUp from './components/Authentication/Registration/signUp';
import { LogInAPI } from './API';
import { SignUpAPI } from './API';
import Admin from './pages/admin/Admin';
import AdminHome from './pages/admin/AdminHome';
import UsersList from './pages/admin/UsersList';
import User from './pages/admin/User';
import NewUser from './pages/admin/NewUser';

function App() {
  const [LoginError, setLoginError] = useState('');

  // submit function & API for sign up
  const signSubmit = (values) => {
    SignUpAPI(values);
  };

  //submit function & API for login
  const loginSubmit = (values) => {
    LogInAPI(values).then((data) => {
      if (data.status === false) {
        setLoginError(data.message);
      }
    });
  };

  return (
    <Router>
      <Routes>
        <Route
          path='/login'
          element={<LogIn onSubmit={loginSubmit} LoginError={LoginError} />}
        />
        <Route path='/signUp' element={<SignUp onSubmit={signSubmit} />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/order' element={<Order />} />
        <Route path='/admin' element={<Admin />}>
          <Route index element={<AdminHome />} />
          <Route path='home' element={<AdminHome />} />
          <Route path='users' element={<UsersList />} />
          <Route path='users/newuser' element={<NewUser />} />
          <Route path='users/:userId' element={<User />} />
        </Route>
      </Routes>
    </Router>
  );
}
export default App;
