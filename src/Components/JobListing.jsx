import React from 'react';
import {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import JobCard from './JobCard';
const JobListing = ({jobCount = 3}) => {
	const [jobs, setJobs] = useState([]);
	const [loading, setLoading] = useState(true);
	useEffect(()=>{
		const fetchJobs = async ()=>{
			try {
				const res = await fetch('http://localhost:8000/jobs')
				const data =await res.json();
				setJobs(data);
			} catch (error) {
				console.error('error fetching data ',error);
			} finally{
				setLoading(false);
			}
		}
		fetchJobs();
	});
	return (
		<>
			<section className='bg-blue-50 px-4 py-10'>
				<div className='container-xl lg:container m-auto'>
					<h2 className='text-3xl font-bold text-indigo-500 mb-6 text-center'>
						Browse Jobs
					</h2>
					<div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
						{
							loading
								? (<h2>Loading ...</h2>)
								: (<>{jobs.map((job) => (<JobCard  job={job} key={job.id}/>))}</>)
						}
					</div>
				</div>
			</section>
			<section className='m-auto max-w-lg my-10 px-6'>
				<Link
					to='/jobs'
					className='block bg-black text-white text-center py-4 px-6 rounded-xl hover:bg-gray-700'
				>
					View All Jobs
				</Link>
			</section>
		</>
	);
};

export default JobListing;
