import React from "react";
import { Link } from "react-router-dom";
// import JobDetailsPage from "../pages/jobDetailsPage";


const activeJobsList = [
    {jobTitle:'Job title', dueDate: '02/02/2022', startDate: '02/02/2022', endDate: '02/02/2022', jobBudjet: '200', jobStatus: 'Active', categoryList: 'abc', discription: 'Text', jobDetails:'/jobDetailsPage'},
    {jobTitle:'Job title', dueDate: '02/02/2022', startDate: '02/02/2022', endDate: '02/02/2022', jobBudjet: '200', jobStatus: 'Active', categoryList: 'abc', discription: 'Text', jobDetails:'/jobDetailsPage'},
    {jobTitle:'Job title', dueDate: '02/02/2022', startDate: '02/02/2022', endDate: '02/02/2022', jobBudjet: '200', jobStatus: 'Active', categoryList: 'abc', discription: 'Text', jobDetails:'/jobDetailsPage'},
    {jobTitle:'Job title', dueDate: '02/02/2022', startDate: '02/02/2022', endDate: '02/02/2022', jobBudjet: '200', jobStatus: 'Active', categoryList: 'abc', discription: 'Text', jobDetails:'/jobDetailsPage'},
    {jobTitle:'Job title', dueDate: '02/02/2022', startDate: '02/02/2022', endDate: '02/02/2022', jobBudjet: '200', jobStatus: 'Active', categoryList: 'abc', discription: 'Text', jobDetails:'/jobDetailsPage'}
]


const ActiveJobsList = ({jobDetails}) => {
    return (
        <>
            <div class="card info-card">
                <div class="card-body p-32">
                  <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center list-data-show-header">
                    <h1>Active Jobs</h1>
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
                        {activeJobsList?.map(comp => 
                            <tr>
                                <td>
                                  <Link to={comp.jobDetails}>
                                    {comp.jobTitle}
                                  </Link>
                                  </td>
                                <td>{comp.dueDate}</td>
                                <td>{comp.startDate}</td>
                                <td>{comp.endDate}</td>
                                <td>{comp.jobBudjet}</td>
                                <td>{comp.jobStatus}</td>
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
export default ActiveJobsList;