import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Component } from 'react';
import LogIn from './components/loginAndRigestration/login';
import SignUp from './components/loginAndRigestration/signUp';


class App extends Component {
  submit(values) {
    alert("submitted");
    console.log(values);
  }
  render() {
  return (

      <div className="App">
        {/* <Link to={"/login"}>login</Link>
        <Link to={"/signUp"}>signUp</Link> */}

        <Routes>
          <Route path="/" element={<SignUp onSubmit={this.submit}/>} />
          <Route path="/login" element={<LogIn onSubmit={this.submit}/>} />
          <Route path="/signUp" element={<SignUp onSubmit={this.submit}/>} />
        </Routes>


      </div>
  );
}}
export default App;
