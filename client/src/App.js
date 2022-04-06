import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Cart from './pages/Cart';
import Order from './pages/Order';
import Profile from './pages/Profile';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from "react";
import LogIn from './components/Authentication/Login/login';
import SignUp from './components/Authentication/Registration/signUp';
import { LogInAPI } from './API';
import { SignUpAPI } from './API';


function App() {
  const [LoginError, setLoginError] = useState("");

  // submit function & API for sign up
  const signSubmit = (values) => {
    SignUpAPI(values)
  }


  //submit function & API for login
  const loginSubmit = (values) => {
    LogInAPI(values)
      .then((data) => {
        if (data.status === false) {
          setLoginError(data.message)
        }
      })
  }


  return (
      <Routes>
        <Route path="/login" element={<LogIn onSubmit={loginSubmit} LoginError={LoginError} />} />
        <Route path="/signUp" element={<SignUp onSubmit={signSubmit} />} />

        <Route path='/cart' element={<Cart />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/order' element={<Order />} />
      </Routes>

  );

}
export default App;
