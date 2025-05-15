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
import LoginnRealState from './LoginnRealState'

import AboutUs from './components/AboutUs';
import Assets1 from './components/Assets1'
import Assets2 from './components/Assets2';
import AdminDashboard from './components/AdminDashboard'
import Property from './components/Property'
import AddProperty from './components/AddProperty';
import Transactions from './components/Transactions';


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
         {/* <Route path="/Transactions" element={<Transactions/>} /> */}
         <Route path="/property" element={<Property/>} />
         <Route path="/AddProperty" element={<AddProperty/>} />
         <Route path="/Transactions" element={<Transactions/>} />

        <Route path="/Assets2" element={<Assets2/>} />
        <Route path="/AdminDashboard" element={<AdminDashboard/>} />
        <Route path="/LoginnRealState" element={<LoginnRealState/>} />

      </Routes>

    </Router>
  );
}

export default App;
