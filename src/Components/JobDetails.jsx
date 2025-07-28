import React from 'react'
import { useLoaderData } from 'react-router-dom'

const JobDetails = () => {
    const jobDetails = useLoaderData();
  return (
    <div className='job_details'>
        <p><b>Job Title :</b> {jobDetails.jobTitle}</p>
        <p><b>Salary :</b> {jobDetails.salary}</p>
        <p><b>Location :</b> {jobDetails.location}</p>
        <p><b>Description :</b> We are looking for a passionate and skilled developer to join our dynamic IT team. The ideal candidate will be responsible for developing, testing, and maintaining high-quality software applications. You will work closely with designers, product managers, and other engineers to deliver innovative and efficient solutions that meet our clients’ needs.

<p><b>Responsibilities include:</b></p>
- Writing clean, efficient, and maintainable code
- Collaborating with cross-functional teams on feature design and implementation
- Participating in code reviews and continuous improvement efforts
- Troubleshooting and debugging to improve performance
- Keeping up-to-date with emerging technologies and best practices

<p><b>Requirements:</b></p>
- Bachelor’s degree in Computer Science or related field
- Strong knowledge of JavaScript, React, and Node.js (or relevant stack)
- Experience with REST APIs and version control (Git)
- Excellent problem-solving skills and attention to detail
- Good communication and teamwork abilities
</p>
<button>Apply Now</button>
    </div>
  )
}

export default JobDetails


export const jobDetailsLoader = async ({ params }) => {
  const res = await fetch(`http://localhost:4000/jobs/${params.id}`);

  if (!res.ok) {
    throw new Response("Job not found", { status: 404 });
  }

  return res.json();
};
