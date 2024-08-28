import React from 'react'
import JobListing from '../../Components/JobListing';
const JobsIndex = () => {
    return (
        <>
            <section className='bg-blue-50 px-4 py-6 '>
                <JobListing jobCount='50' />
            </section>
        </>
    )
}

export default JobsIndex