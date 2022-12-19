import React from "react";
import JobRequestPopup from "../../Popups/JobRequestPopup";


const clientsRequestData = [
    {jobTitle:'Job title', dueDate: '02/02/2022', startDate: '02/02/2022', endDate: '02/02/2022', jobBudjet: '200', jobStatus: 'Active', categoryList: 'abc', discription: 'Text'},
    {jobTitle:'Job title', dueDate: '02/02/2022', startDate: '02/02/2022', endDate: '02/02/2022', jobBudjet: '200', jobStatus: 'Finished    ', categoryList: 'abc', discription: 'Text'},
    {jobTitle:'Job title', dueDate: '02/02/2022', startDate: '02/02/2022', endDate: '02/02/2022', jobBudjet: '200', jobStatus: 'Active', categoryList: 'abc', discription: 'Text'},
    {jobTitle:'Job title', dueDate: '02/02/2022', startDate: '02/02/2022', endDate: '02/02/2022', jobBudjet: '200', jobStatus: 'Active', categoryList: 'abc', discription: 'Text'},
    {jobTitle:'Job title', dueDate: '02/02/2022', startDate: '02/02/2022', endDate: '02/02/2022', jobBudjet: '200', jobStatus: 'Active', categoryList: 'abc', discription: 'Text'}
]


const JobRequest = () => {
    return (
        <>
            <div class="card info-card">
                <div class="card-body p-32">
                  <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center list-data-show-header">
                    <h1>Client's Request</h1>
                    <div class="btn-toolbar mb-2 mb-md-0">
                        <JobRequestPopup />
                    </div>
                  </div>
  
                  <div class="table-scroll-h">
                    <table class="table">
                      <thead class="table-light">
                        <tr>
                          <th>Job Title</th>
                          <th>Due Date</th>
                          <th>Start Date</th>
                          <th>End Date</th>
                          <th>Job Status</th>
                          <th>Job Budjet</th>
                          <th>Category List</th>
                          <th>Description</th>
                          <th>Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                        {clientsRequestData?.map(comp => 
                            <tr>
                                <td>{comp.jobTitle}</td>
                                <td>{comp.dueDate}</td>
                                <td>{comp.startDate}</td>
                                <td>{comp.endDate}</td>
                                <td>{comp.jobStatus}</td>
                                <td>{comp.jobBudjet}</td>
                                <td>{comp.categoryList}</td>
                                <td>{comp.discription}</td>
                                <td class="text-center">
                                    <a href="javascript:;" class="list-actions ic-delete mr-1"></a>
                                    <a href="javascript:;" class="list-actions ic-edit"></a>
                                </td>
                            </tr>
                        )}
                        
                        
                      </tbody>
                    </table>
                  </div>
  
                </div>
              </div>
        </>
    )
}
export default JobRequest;