
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './screens/Home';

import LoginScreen from './screens/auth/LoginScreen';
import Register from './screens/auth/RegisterScreen';
import ProfileScreen from './screens/user/ProfileScreen';
import AddOrder from './screens/user/CreateOrderScreen';
import OrderView from './screens/user/OrderDetailsScreen';

function App() {
  return (

    <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home/>} exact/>
            <Route path='/login' element={<LoginScreen/>} exact />
            <Route path='/register' element={<Register/>} exact />
            <Route path='/profile' element={<ProfileScreen/>} exact />
            <Route path='/createlink' element={<AddOrder/>} exact />
            <Route path='/order/:id' element={<OrderView/>} exact />

    </Routes>
    </BrowserRouter>
  
  );
}


export default App