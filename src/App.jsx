import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Welcome from './Welcome';
import Login from './Login';
import Signup from './Signup';
import CreateAccount from './CreateAccount';
import EmailVerification from './EmailVerification';
import OtpVerification from './OtpVerification';
import Home from './home';
import PropertyListing from './PropertyListing';
import HomeFilter from './components/HomeFilter';

import PropertyDetail from './PropertyDetail';

import ContactUs from './components/ContactUs';

import AboutUs from './components/AboutUs';
import Assets1 from './components/Assets1';
import AdminDashboard from './components/AdminDashboard';
import Transactions from './components/Transactions';
import Property from "./components/Property"

function App() {
  return (
    <Router>
      <Routes>
        {/*default route */}
        <Route path="/" element={<Navigate to="/Welcome" />} />
        {/* other routes */}
        <Route path="/Login/Signup" element={<Signup />} />
        <Route path="/Welcome" element={<Welcome/>} />
        <Route path="/Login" element={<Login/>} />
        <Route path="/Signup" element={<Signup/>} />
        <Route path="/CreateAccount" element={<CreateAccount/>} />
        <Route path="/EmailVerification" element={<EmailVerification/>} />
        <Route path="/OtpVerification" element={<OtpVerification/>} />
        <Route path="/Home" element={<Home/>} />
        {/* <Route path="/PropertyListing" element={<PropertyListing/>} /> */}
        <Route path="/HomeFilter" element={<HomeFilter/>} />
        <Route path="/aboutus" element={<AboutUs/>} />

        <Route path="/propertylisting" element={<PropertyListing/>} />
        <Route path="/PropertyDetail" element={<PropertyDetail/>} />
        <Route path="/contactus" element={<ContactUs/>} />

        <Route path="/PropertyDetail" element={<PropertyDetail/>} />
        <Route path="/assets" element={<Assets1/>} />
         <Route path="/dashboard" element={<AdminDashboard/>} />
         <Route path="/Transactions" element={<Transactions/>} />
         <Route path="/property" element={<Property/>} />

      </Routes>

    </Router>
  );
}

export default App;
