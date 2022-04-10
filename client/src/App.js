import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Cart from './pages/Cart';
import Order from './pages/Order';
import Profile from './pages/Profile';
import './App.css';
import React, { useState } from "react";
import LogIn from './components/Authentication/Login/login';
import SignUp from './components/Authentication/Registration/signUp';
import { LogInAPI } from './API';
import { SignUpAPI } from './API';
import { AddCategoryAPI } from './API';
import { AddProductAPI } from './API';


import Categories from './components/AdminBoard/Category/Allcategories';
import AddCategory from './components/AdminBoard/Category/addCategory';
import AddProduct from './components/AdminBoard/Product/addProduct';
import Products from './components/AdminBoard/Product/Allproducts';


function App() {


  const [loginError, setLoginError] = useState("");
  const [signUpError, setSignUpError] = useState("");
  const [categoryError, setCategoryError] = useState("");
  const [productError, setProductError] = useState("");




  // submit function & API for sign up
  const signSubmit = (values) => {
    SignUpAPI(values)
    .then((data) => {
      if (data.status === false) {
        setSignUpError(data.message)
      }
    })
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

  const categorySubmit = (values) => {
    AddCategoryAPI(values)
      .then((data) => {
        if (data.status === false) {
          setCategoryError(data.message)
        }
      })
  }

  const productSubmit = (values) => {
    AddProductAPI(values)
      .then((data) => {
        if (data.status === false) {
          setProductError(data.message)
        }
      })
  }
  

  return (
      <Routes>
        <Route path="/login" element={<LogIn onSubmit={loginSubmit} loginError={loginError} />} />
        <Route path="/signUp" element={<SignUp onSubmit={signSubmit}  signUpError={signUpError}/>} />

        <Route path='/cart' element={<Cart />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/order' element={<Order />} />

        <Route path='/products' element={<Products />} />
        <Route path='/addProduct' element={<AddProduct onSubmit={productSubmit} productError={productError}/>}/>
        <Route path='/categories' element={<Categories />} />
        <Route path='/addCategories' element={<AddCategory onSubmit={categorySubmit} categoryError={categoryError}/>} />
      </Routes>

  );

}
export default App;
