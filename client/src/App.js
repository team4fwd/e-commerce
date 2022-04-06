import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Cart from './pages/Cart';
import Order from './pages/Order';
import Profile from './pages/Profile';
import Admin from './pages/Admin';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/cart' element={<Cart />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/order' element={<Order />} />
        <Route path='/admin' element={<Admin />} />
      </Routes>
    </Router>
  );
}

export default App;
