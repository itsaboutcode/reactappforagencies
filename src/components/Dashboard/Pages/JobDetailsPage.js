import React from "react";
import Navbar from "../Navbar";
import Topnavbar from "../TopNavbar";
import { Link } from "react-router-dom";


const JobDetailsPage = () => {
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
                                <div className="row ">
                                    <div className="col-md-9">
                                        <div className="card-heading-box d-flex align-items-center">
                                            <div>
                                                <div className="d-flex">
                                                    <h4 className="green-text">Beautify our current HTML / CSS - Netlify based website and more features</h4>
                                                </div>
                                                <p><Link>Full Stack Development</Link></p>
                                            </div>
                                        </div>

                                        <div className="d-flex align-items-center tag-text">
                                            <h4>Posted 17 hours ago</h4>
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
                                            </div>
                                            
                                        </div>
                                        <div className="tag-text d-flex">
                                            <div>
                                                <h4>$300.00</h4>
                                                <p>Fixed-price</p>
                                            </div>
                                            <div>
                                                <h4>Intermediate</h4>
                                                <p>I am looking for a mix of experience and value</p>
                                            </div>
                                        </div>
                                        <div className="tag-text d-flex">
                                                <h4>Project Type:</h4>
                                                <p>  Ongoing project</p>
                                            
                                        </div>

                                        <div className="tag-text d-flex">
                                            <div>
                                                <h4>Skills and Expertise</h4>
                                                <div className="mt-3 d-flex flex-wrap gap-2 gap-r-2">
                                                    <span className="skills">HTML</span>
                                                    <span className="skills">CSS</span>
                                                </div>
                                            </div>
                                            <div>
                                                <h4>Full Stack Development Skills</h4>
                                                <div className="mt-3 d-flex flex-wrap gap-2 gap-r-2">
                                                    <span className="skills">Prototype JavaScript Framework</span>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="tag-text d-flex">
                                            <div>
                                                <h4>Other</h4>
                                                <div className="mt-3 d-flex flex-wrap gap-2 gap-r-2">
                                                    <span className="skills">JavaScript</span>
                                                    <span className="skills">jamstack</span>
                                                    <span className="skills">Netlify CMS</span>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="tag-text ">
                                            <h4 className="mb-2">Activity on this job</h4>
                                            <p>Proposals: 15 to 20</p>
                                            <p>Last viewed by client:  34 minutes ago</p>
                                            <p>Interviewing:  3</p>
                                            <p>Invites sent:  1</p>
                                            <p>Unanswered invites:  3</p>
                                        </div>
                                        <div className="p-3">
                                            <Link>Messages</Link>

                                        </div>
                                        
                                        

                                    </div>

                                    <div className="col-md-3">
                                        <div className="p-3">
                                            <div className="d-grid gap-2">
                                                <Link to="/BidJobPage" className="btn login-btn btn-green btn-lg btn-block p-2">Apply Now</Link>
                                                <Link className="btn btn-outline-secondary btn-block">Save Job</Link>
                                            </div>

                                            {/* <div className="mt-4">
                                                <Link>Flag as inappropriate</Link>
                                                <p className="mt-2">Send a proposal for: 4 Connects</p>
                                                <p>Available Connects: 37</p>
                                            </div> */}

                                            <div class="tag-text p-0 mt-4">
                                                <div className="mt-4">
                                                    <h4 class="mb-2">About the client</h4>
                                                    <p className="green-text">Payment method verified</p>
                                                    <div class="rating-box mb-0 justify-start">
                                                    <ul class="green-rating ">
                                                        <li><a href="javascript" class="active"><i class="bi bi-star-fill"></i></a></li>
                                                        <li><a href="javascript" class="active"><i class="bi bi-star-fill"></i></a></li>
                                                        <li><a href="javascript" class="active"><i class="bi bi-star-fill"></i></a></li>
                                                        <li><a href="javascript" class="active"><i class="bi bi-star-fill"></i></a></li>
                                                        <li><a href="javascript"><i class="bi bi-star-fill"></i></a></li>
                                                    </ul>
                                                    <span>4.99 of 1,608 reviews</span>
                                                    </div>
                                                    <h4 class="mb-1 mt-4">Singapore</h4>
                                                    <p>Singapore 2:52 pm</p>

                                                    <h4 class="mb-1 mt-4">2,630 jobs posted</h4>
                                                    <p>95% hire rate, 3 open jobs</p>
                                                    
                                                    <h4 class="mb-1 mt-4">$70k+ total spent</h4>
                                                    <p>2,503 hires, 6 active</p>

                                                    <p>Member since Oct 7, 2018</p>

                                                </div>
                                            </div>

                                            <div class="tag-text p-0 mt-4">
                                                <h4 class="mb-1 mt-4 mb-2">Job link </h4>
                                                <span class="skills ellipsis-text">https://www.upwork.com/jobs/~01965fb02fb5e67c37</span>
                                                
                                                <div class=" mt-2">
                                                    <p>
                                                        <Link>Copy Link</Link>
                                                    </p>
                                                </div>
                                            </div>

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
export default JobDetailsPage; 