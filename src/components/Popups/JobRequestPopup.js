import React from "react";
import Buttons from "../UIControls/Buttons";
import SimpleTextField from "../UIControls/SimpleTextField";

const JobRequestPopup = () =>{
    return(
        <>
            <button type="button" class="btn login-btn btn-green btn-lg p-2" data-bs-toggle="modal" data-bs-target="#exampleModal">
                Add Client's Request
            </button>
            <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-xl">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">Add Client's Request</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <div className="row mt-4">
                                <div className="col-md-6">
                                    <div className="form-bottom-space">
                                        <label for="jobTitle" className="form-label">JOb Title</label>
                                        <SimpleTextField className="form-control input-control" type="text" placeholder="Job Title" id='jobTitle' />
                                        {/* <InputTypes inputType='text' inputClass="form-control input-control" placeholder={placeholder} inputId={id} /> */}
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="form-bottom-space">
                                                <label for="itle" className="form-label">Due Date</label>
                                                <SimpleTextField className="form-control input-control" type="date" placeholder="Due Date" id='dueDate' />
                                                {/* <InputTypes inputType='date' inputClass="form-control input-control" placeholder={placeholder} inputId={id} /> */}
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-bottom-space">
                                                <label for="itle" className="form-label">Start Date</label>
                                                <SimpleTextField className="form-control input-control" type="date" placeholder="Start Date" id='startDate' />
                                                {/* <InputTypes inputType='date' inputClass="form-control input-control" placeholder={placeholder} inputId={id} /> */}
                                            </div>
                                        </div>

                                    </div>


                                </div>


                                
                                <div className="col-md-3">
                                    <div className="form-bottom-space">
                                        <label for="itle" className="form-label">Job Budjet</label>
                                        <SimpleTextField className="form-control input-control" type="text" placeholder="Job Budjet" id='jobBudjet' />
                                        {/* <InputTypes inputType='text' inputClass="form-control input-control" placeholder={placeholder} inputId={id} /> */}
                                    </div>
                                </div>
                                <div className="col-md-3">
                                    <div className="form-bottom-space">
                                        <label for="itle" className="form-label">Category List</label>
                                        <select className="form-control input-control">
                                            <option>Category List 1</option>
                                            <option>Category List 2</option>
                                            <option>Category List 3</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="col-md-3">
                                    <div className="form-bottom-space">
                                        <label for="itle" className="form-label">End Date </label>
                                        <SimpleTextField className="form-control input-control" type="date" placeholder="End Date" id='endDate' />
                                        {/* <InputTypes inputType='date' inputClass="form-control input-control" placeholder={placeholder} inputId={id} /> */}
                                    </div>
                                </div>
                                <div className="col-md-3">
                                    <div className="form-bottom-space">
                                        <label for="itle" className="form-label">Job Status</label>
                                        <select className="form-control input-control">
                                            <option>Active</option>
                                            <option>Panding</option>
                                            <option>Completed</option>
                                        </select>
                                    </div>
                                </div>

                                <div className="col-md-6">
                                    <div className="form-bottom-space">
                                        <label for="itle" className="form-label">JOb Description</label>
                                        <textarea className="form-control input-control" rows={6}></textarea>

                                    </div>
                                </div>

                            </div>

                            
                        </div>
                        <div className="modal-footer">
                            
                            <button type="button" className="btn login-btn btn-lg p-2  btn-secondary" data-bs-dismiss="modal">Close</button>
                            <Buttons linkTo="/clientsRequest" title='Add Request' />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default JobRequestPopup;