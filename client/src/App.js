import './App.css';
import Home from './components/Home';
import Login from './components/Login';
import Registration from './components/Registration';
import AccountBalances from './components/AccountBalances';
import TransactionHistory from './components/TransactionHistory';
import FundTransfer from './components/FundTransfer';
import Users from './components/Users';
import UpdateUser from './components/UpdateUser';
import AboutUs from './components/AboutUs';
import Services from './components/Services';
import ContactUs from './components/ContactUs';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/registration" element={<Registration />} />
          <Route path="/users" element={<Users />} />
          <Route path="/update-user/:id" element={<UpdateUser />} />
          <Route path="/account-balances" element={<AccountBalances />} />
          <Route path="/transaction-history" element={<TransactionHistory />} />
          <Route path="/fund-transfer" element={<FundTransfer />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact-us" element={<ContactUs />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
