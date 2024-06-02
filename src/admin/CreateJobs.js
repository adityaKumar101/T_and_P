import React, { useState } from 'react'
import { createJobs } from './services';

const CreateJobs = () => {

  const [jobTitle, setJobTitle] = useState('');
  const [jobDescription, setJobDescription] = useState('');
  const [branches, setBranches] = useState('');
  const [errors, setErrors] = useState({});

  const handleSubmit = async(e) => {
    e.preventDefault();
    console.log("errors111")

    // Logic to handle form submission goes here
    const errors = {};
    if (!jobTitle.trim()) {
      errors.jobTitle = 'Job title is required';
    }
    if (!jobDescription.trim()) {
      errors.jobDescription = 'Job description is required';
    }
    if (!branches.trim()) {
      errors.branches = 'Branches are required';
    }

    if (Object.keys(errors).length > 0) {
      setErrors(errors);
      return;
    }

    const response= await createJobs({
      jobTitle:jobTitle,
      jobDescription:jobDescription,
      branches:branches
    })

    if(response){

      alert("Job posted successfully")
    }
  };
    const handleLogout = () => {
      localStorage.removeItem('token');
      window.location.reload()
    };

  return (
    <div>
        <button className="logout-button" onClick={handleLogout}>
      Logout
    </button>
        <div className="create-job-form">
      
      <h2>Create Job</h2>
        <div>
          <label htmlFor="jobTitle">Job Title</label>
          <input
            type="text"
            id="jobTitle"
            value={jobTitle}
            onChange={(e) => setJobTitle(e.target.value)}
            required
          />
           {errors.jobTitle && <span className="error">{errors.jobTitle}</span>}
        </div>
        <div>
          <label htmlFor="jobDescription">Job Description</label>
          <textarea
            id="jobDescription"
            value={jobDescription}
            onChange={(e) => setJobDescription(e.target.value)}
            required
          ></textarea>
          {errors.jobDescription && <span className="error">{errors.jobDescription}</span>}
    
        </div>
        <div>
          <label htmlFor="branches">Branches</label>
          <input
            type="text"
            id="branches"
            value={branches}
            onChange={(e) => setBranches(e.target.value)}
            required
          />
          {errors.branches && <span className="error">{errors.branches}</span>}
      
        </div>
        <button  onClick={handleSubmit}>Submit</button>
    </div>
    </div>
  )
}

export default CreateJobs