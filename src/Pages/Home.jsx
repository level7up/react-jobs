import React from 'react'
import Hero from '../Components/Hero';
import JobListing from '../Components/JobListing';
import HomeCards from '../Components/HomeCards';

const Home = () => {
    return (
    <>
        <Hero/>
        <HomeCards/>
        <JobListing />
    </>
    )
}

export default Home