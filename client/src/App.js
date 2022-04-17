import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Cart from './pages/cart/Cart';
import Order from './pages/order/Order';
import Profile from './pages/profile/Profile';
import './App.css';
import LogIn from './components/Authentication/Login/login';
import SignUp from './components/Authentication/Registration/signUp';
import Admin from './pages/admin/Admin';
import AdminHome from './pages/admin/AdminHome';
import UsersList from './pages/admin/UsersList';
import User from './pages/admin/User';
import NewUser from './pages/admin/NewUser';
import Footer from './components/footer/Footer';
import NavBar from './components/NavBar/NavBar';
import HomePage from './pages/Home/HomePage';
import ProductDetails from './pages/products/ProductDetails';
import Private from './Private';
import ShippingForm from './pages/order/ShippingForm';
import Payment from './pages/order/Payment';

function App() {
  const adminRoute = window.location.pathname.startsWith('/admin');

  return (
    <Router>
      {!adminRoute && <NavBar />}
      <Routes>
        <Route path='/login' element={<LogIn />} />
        <Route path='/signUp' element={<SignUp />} />
        <Route path='/' element={<HomePage />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/product/:productId' element={<ProductDetails />} />
        <Route path='/cart' element={<Cart />} />
        <Route
          path='/shipping'
          element={<Private Component={ShippingForm} />}
        />
        <Route path='/payment' element={<Private Component={Payment} />} />
        <Route path='/order' element={<Private Component={Order} />} />
        <Route path='/admin' element={<Admin />}>
          <Route index element={<AdminHome />} />
          <Route path='home' element={<AdminHome />} />
          <Route path='users' element={<UsersList />} />
          <Route path='users/newuser' element={<NewUser />} />
          <Route path='users/:userId' element={<User />} />
        </Route>
      </Routes>
      {!adminRoute && <Footer />}
    </Router>
  );
}
export default App;
