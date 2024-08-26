import React from 'react'
import {Outlet} from 'react-router-dom'
import Navbar from '../Components/Navbar'
import Hero from '../Components/Hero';
import HomeCards from '../Components/HomeCards';
import JobListing from '../Components/JobListing';

const Main = () => {
  return (
    <>
        <Navbar/>
        <Outlet/>
    </>
  )
}

export default Main