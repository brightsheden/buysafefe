
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './screens/Home';

import LoginScreen from './screens/auth/LoginScreen';
import Register from './screens/auth/RegisterScreen';
import ProfileScreen from './screens/user/ProfileScreen';
import AddOrder from './screens/user/CreateOrderScreen';
import OrderView from './screens/user/OrderDetailsScreen';
import LandingPage from './screens/Home';
import WithdrawalPage from './screens/user/WithdrawalPage';
import RefundPage from './screens/user/RefundScreen';
import UserWithdrawalList from './screens/user/WithdrawalList';
import WithdrawalList from './screens/Admin/WithdrawalScreen';
import WalletList from './screens/Admin/WalletScren';
import ManualTransactionForm from './screens/Admin/ManaulTransaction';
import AdminDashboard from './screens/Admin/dashboard';

function App() {
  return (

    <BrowserRouter>
          <Routes>
            <Route path='/' element={<LandingPage/>} exact/>
            <Route path='/login' element={<LoginScreen/>} exact />
            <Route path='/register' element={<Register/>} exact />
            <Route path='/withdraw' element={<WithdrawalPage/>} />
            <Route path='/profile' element={<ProfileScreen/>} exact />
            <Route path='/createlink' element={<AddOrder/>} exact />
            <Route path='/order/:id' element={<OrderView/>} exact />
            <Route path='/order/refund' element={<RefundPage/>} exact />
            <Route path='/mywithdrawals' element={<UserWithdrawalList/>} exact />
            <Route path='/admin/withdrawals' element={<WithdrawalList/> } exact />
            <Route path='/admin/wallets' element={<WalletList/> } exact />
            <Route path='/admin/manual' element={<ManualTransactionForm/> } exact />
            <Route path='/admin' element={<AdminDashboard/> } exact />

    </Routes>
    </BrowserRouter>
  
  );
}


export default App