import React from "react";
import JobRequestPopup from "../../Popups/JobRequestPopup";


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
                          <th>Duse Date</th>
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
                        <tr>
                          <td>01</td>
                          <td>Alex Higgins</td>
                          <td>Ambrosia</td>
                          <td>$ 44.5</td>
                          <td>22 acre </td>
                          <td>22 acre </td>
                          <td>22 acre </td>
                          <td>22 acre </td>
                          <td class="text-center">
                            <a href="javascript:;" class="list-actions ic-delete mr-1"></a>
                            <a href="javascript:;" class="list-actions ic-edit"></a>
                          </td>
                        </tr>
                       
                        
                      </tbody>
                    </table>
                  </div>
  
                </div>
              </div>
        </>
    )
}
export default JobRequest;