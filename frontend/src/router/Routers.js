import React from 'react'
import { Routes, Navigate, Route } from 'react-router-dom'

import Home from './../pages/Home';
import Tours from './../pages/Tours';
import TourDetails from './../pages/TourDetails';
import Login from './../pages/Login';
import Register from './../pages/Register';
import SearchResultList from './../pages/SearchResultList';
import WelCome from '../pages/WelCome';
import DataOperatorCard from '../pages/DataOperatorCard';
import OperatorProfile from '../pages/OperatorProfile';
import OperatorDataEntry from "../pages/OperatorDataEntry.jsx";
import FishermenTransac from "../pages/FishermenTransac.jsx";
import FishermenDetails from "../pages/FishermenDetails.jsx";
import AdminProfile from '../pages/AdminProfile.jsx';
import RoleEntryForm from '../pages/RoleEntryForm.jsx';
import AdminDashboard from "../pages/AdminDashboard.jsx";
import AdminEditProfile from "../pages/AdminEditProfile.jsx";
import OperatorEntryForm from "../pages/OperatorEntryForm";
import OpLogin from "../pages/OpLogin";
import AdminLogin from "../pages/AdminLogin.jsx";
import OperatorDetails from "../pages/OperatorDetails.jsx"
import LocationWiseCatched from "../pages/LocationWiseCatched.jsx"
import OverallCatchedFish from "../pages/OverallCatchedFish.jsx"
import ProtectedRoute from '../ProtectedRoute';
const Routers = () => {
  return (
    <Routes>
      <Route element={<ProtectedRoute />} >
        <Route path='/' element={<Navigate to='/home' />} />



        <Route path="/welcome" element={<WelCome />} />
        <Route path='/tours/search' element={<SearchResultList />} />
        <Route path='/data_operator' element={<DataOperatorCard />} />
        <Route path='/operator_profile' element={<OperatorProfile />} />
        <Route path='/operator_data_entry' element={<OperatorDataEntry />} />
        <Route path='/operator_details' element={<OperatorDetails />} />
        <Route path='/fishermen_transaction' element={<FishermenTransac />} />
        <Route path='/fishermen_details' element={<FishermenDetails />} />
        <Route path='/admin_profile' element={<AdminProfile />} />
        <Route path='/role_entry_form' element={<RoleEntryForm />} />
        <Route path='/operator_entry_form' element={<OperatorEntryForm />} />
        <Route path='/admin_dashboard' element={<AdminDashboard />} />
        <Route path='/admineditprofile' element={<AdminEditProfile />} />
        <Route path='/location_wise' element={<LocationWiseCatched />} />
        <Route path='/overall_catched_fishes' element={<OverallCatchedFish />} />
      </Route>
      <Route path='/home' element={<Home />} />
      <Route path='/fishes' element={<Tours />} />
      <Route path='/tours/:id' element={<TourDetails />} />
      <Route path='/oplogin' element={<OpLogin />} />
      <Route path='/register' element={<Register />} />
      <Route path='/adminlogin' element={<AdminLogin />} />
      <Route path='/login' element={<Login />} />
    </Routes>
  )
}

export default Routers