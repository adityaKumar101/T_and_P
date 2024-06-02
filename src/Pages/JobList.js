import React, { useEffect, useState } from 'react'
import { getJobs } from '../admin/services'
import { Link } from 'react-router-dom'

const JobList = () => {
    const [jobs, setJobs] = useState([])


    const getJobList = async () => {
        try {
            const response = await getJobs();
            if (response?.status) {
                setJobs(response?.data?.jobs)
            }
        } catch (error) {
            console.log("error", error);
        }
    }
    useEffect(() => {
        getJobList()
    }, [])
    console.log("resp", jobs);

    return (
        <>
        <div className='headingWrapper'>
            <Link className='btn-head' to={"/"}> &#x2190;back to Homepage</Link>
        <h4 className='header'>Job List</h4>
        </div>
        <div className="job-list-container">
  
        {Array.isArray(jobs) && jobs.map((job, index) => (
          <div key={index} className="job">
            <div className="job-title">Job Title</div>
            <p className="job-description">{job?.jobTitle}</p>
            <div className="job-title">Job Description</div>
            <p className="job-description">{job?.jobDescription}</p>
            <div className="job-title">Branch</div>
            <p className="branch">{job?.branches}</p>
          </div>
        ))}
      </div>
      </>
    )
}

export default JobList