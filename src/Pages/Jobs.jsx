import React from 'react'
import { useLoaderData } from 'react-router-dom'
import { Link } from 'react-router-dom';

const Jobs = () => {
    const jobData = useLoaderData();
  return (
    <div className='jobs'>
        {
            jobData.map((job)=>{
                return(
                    <div>
                        <Link to = {job.id.toString()} key = {job.id}>
                      <h3><b>{job.jobTitle}</b></h3>
                      <p>{job.location}</p>
                      </Link>
                    </div>
                )
            })
        }
       
    </div>
  )
}

export default Jobs

export const JobLoader = async () => {
const res = await fetch('http://localhost:4000/jobs');
return res.json();
}