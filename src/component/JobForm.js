import { React, useState } from 'react';

export const JobForm = () => {
    const [jobStatus, setJobStatus] = useState("start");

    // Event handler status change JobItem
    const handleStatusChange = (event) => {
      setJobStatus(event.target.value)
    }

  return (
    <div className="form-header">
      <form>
        {/* Implement form elements here */}

        {/* An input field for entering job titles */}
        <input 
          type="text" 
          name="name"
          className="job-input" 
          placeholder="Enter the job" />
        
        {/* Buttons for selecting job categories */}
        <div className="form-details">
          <div className="bottom-line">
            <button className='tag'>Read Emails</button>
            <button className='tag'>Web Parsing</button>
            <button className='tag'>Send Emails</button>
          </div>
        </div>

        {/* A dropdown menu for selecting job status */}
        <select className="job-status" 
          name="status"
          value={jobStatus} /* [jobStatus, ...] = useState() */
          onChange={handleStatusChange}> {/* Event handler status change JobItem */} 
          <option value="start">Start Process</option>
          <option value="running">Running</option>
          <option value="completed">Completed</option>
          <option value="stopped">Stopped</option>
        </select>

        {/* A submit button to add the job */}
        <button type="submit" className="sumbit-data">Add Jobs</button>
      </form>
    </div>
  );
};
