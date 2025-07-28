import React from 'react'
import { Outlet } from 'react-router-dom'

const JobsLayout = () => {
  return (
    <div className='Jobs_head'>
        <h2>Job Openings</h2>
        <p>currently job openiings in my company</p>
        <Outlet />
    </div>
  )
}

export default JobsLayout