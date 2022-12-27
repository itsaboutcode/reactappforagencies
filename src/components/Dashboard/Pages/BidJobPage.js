import React from "react";
import Navbar from "../Navbar";
import Topnavbar from "../TopNavbar";
import { Link } from "react-router-dom";


const BidJobPage = () => {
    return(
        <>
        <div className="topBarShadowRight"></div>
            <div className="container">
                <div className="main-body">
                    
                    <Navbar />
                    
                    <div>
                    
                        <Topnavbar />
                        
                        <div className="card hybrid-card mt-4">
                            <span className="white-bg"></span>
                            <div className="card-body pt-0">
                                <div className="">
                                    <div className="">
                                        <div className="card-heading-box d-flex align-items-center">
                                            <div>
                                                <div className="d-flex">
                                                    <h4 className="green-text">Job Details</h4>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="tag-text d-flex">
                                            <div>
                                                <p>We are a Translations Service provider . 
                                                    We are looking to upgrade our Netlify based website which includes the following milestones </p>
                                                    <div className="p-4">
                                                        <p>1. Beautify the current website - especially the key landing pages by adding new illustrations / Graphics as improvements.</p>
                                                        <p>2. Improve design to enable better conversion</p>
                                                        <p>3. Change Navigation Menu</p>
                                                        <p>4. Add upto 12-15 new pages - which will be very similar in design.</p>
                                                        <p>5. Add Netpfy CMS - that will allow us to add blogs easily .</p>
                                                    </div>
                                                    <p> We will work with you closely on all these aspects ..so expect your patience and collaboration to achieve an improved site . As a first step we will have a discovery call to go through the above points . Thank you for your interest .</p>
                                                    <div className="mt-2">
                                                        <Link>View job posting</Link>
                                                    </div>
                                            </div>
                                        </div>
                                        <div className="tag-text">
                                            <h4>Skills and expertise</h4>
                                            <div className="mt-3 d-flex flex-wrap gap-2 gap-r-2">
                                                <span className="skills">JavaScript</span>
                                                <span className="skills">jamstack</span>
                                                <span className="skills">Netlify CMS</span>
                                            </div>                                            
                                        </div>

                                        <div className="tag-text border-0">
                                            <div className="d-flex gap-2 justify-between">
                                                <h4>Terms</h4>
                                                <p>Client's budget: %100.00</p>                                            
                                            </div>
                                                
                                            <p className="mt-2">
                                                How do you want to be paid?
                                            </p>


                                            <ul class="nav nav-pills nav-pills-green mt-4" id="myTab" role="tablist">
                                                <li class="nav-item" role="presentation">
                                                <button class="nav-link active" id="current-tab" data-bs-toggle="tab" data-bs-target="#current-tab-pane" type="button" role="tab" aria-controls="current-tab-pane" aria-selected="true">By milestone</button>
                                                </li>
                                                <li class="nav-item" role="presentation">
                                                <button class="nav-link" id="reported-tab" data-bs-toggle="tab" data-bs-target="#reported-tab-pane" type="button" role="tab" aria-controls="reported-tab-pane" aria-selected="false">By project</button>
                                                </li>
                                            </ul>
                                            <div class="tab-content" id="myTabContent">
                                                <div class="tab-pane fade fade show active" id="current-tab-pane" role="tabpanel" aria-labelledby="current-tab" tabindex="0">
                                                <div className="mt-4">
                                                <p>How many milestones do you want to include?</p>
                                                <div className="row mt-2">

                                                    <div className="col-md-6">

                                                        <div class="form-bottom-space">
                                                            <label for="itle" class="form-label">Description</label>
                                                            <input type="text" class="form-control input-control" id="" placeholder="Enter Category" />
                                                        </div>
                                                    </div>
                                                    <div className="col-md-3">
                                                        <div class="form-bottom-space">
                                                            <label for="itle" class="form-label">Due date</label>
                                                            <input type="date" class="form-control input-control" id="" placeholder="Enter Category" />
                                                        </div>
                                                    </div>
                                                    <div className="col-md-3">
                                                        <div class="form-bottom-space">
                                                            <label for="itle" class="form-label">Amount</label>
                                                            <input type="number" class="form-control input-control" id="" placeholder="Enter Category" />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="">
                                                    <Link>+ Add milestone</Link>
                                                </div>
                                            </div>
                                                </div>
                                                <div class="tab-pane " id="reported-tab-pane" role="tabpanel" aria-labelledby="reported-tab" tabindex="0">
                                                    <h2>What is the full amount you'd like to bid for this job?</h2>
                                                    <div class="form-bottom-space">
                                                            <label for="itle" class="form-label">Bid</label>
                                                            <input type="number" class="form-control input-control" id="" placeholder="Enter Category" />
                                                        </div>
                                                        <div className="d-flex justify-between">
                                                            <div>
                                                                <h4>Service Fee Explain this</h4>
                                                            </div>
                                                            <div>
                                                                <p>-20.00</p>
                                                            </div>
                                                    </div>
                                                        <div className="mt-2 justify-between d-flex">
                                                            <div>
                                                                <h4>You'll Receive</h4>
                                                            </div>
                                                            <div>
                                                                <p>80.00</p>
                                                            </div>
                                                    </div>

                                                    

                                                    

                                                </div>
                                            </div>

                                            

                                            


                                        </div>

                                        <div class="tag-text form-bottom-space mt-2">
                                                            <label for="itle" class="form-label">How long will this project take?</label>
                                                            <select class="form-control select-control">
                                                                <option>1</option>
                                                            </select>
                                                        </div>


                                        <div className="tag-text  mt-2">
                                            <div class="form-bottom-space ">
                                                <label for="itle" class="form-label">How long will this project take?</label>
                                                <textarea rows={4} class="form-control">

                                                </textarea>
                                            </div>

                                            <div class="form-bottom-space mt-2 ">
                                                <label for="itle" class="form-label">Attachments</label>
                                                <div class="input-group input-file-control">
                  <input type="file" />
                  <input type="text" class="form-control input-control" placeholder="Drag or upload project files" />
                  <span class="input-group-text" id="basic-addon2">Upload</span>
                </div>
                                            </div>
                                        </div>
                                        

                                       

                                        

                                        
                                        <div className="tag-text d-flex gap-2p-3 item-center pb-0">
                                            <Link className="btn login-btn btn-green btn-lg btn-block p-2">Save</Link>
                                            <Link>Cancle</Link>

                                        </div>
                                        
                                        

                                    </div>

                                  

                                </div>
                            </div>


                        </div>
                        
                        
                    </div>
                </div>
            </div>
        
        </>
    )
}
export default BidJobPage; 