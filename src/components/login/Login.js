import React from "react";

import Buttons from "../UIControls/Buttons";
import PasswordTextField from "../UIControls/PasswordTextField";
import SimpleTextField from "../UIControls/SimpleTextField";
import UserIconLabel from "../UIControls/UserIconLabel";
import LockIconLabel from "../UIControls/LockIconLabel";

import {Link} from "react-router-dom";



import './login.css';
import './login-responsive.css';


const Login = () => {

//   const navigate = useNavigate();
// const dashboardPage = () => {
//   // 👇️ navigate to /
//   navigate('/dashboard');
// };
  
    return (
        <div class="container-fluid login-container mt-4">
          
          <div class="">
            <div class="w-100 content-space-t-4 content-space-t-lg-2 content-space-b-1 login-section-width">

              <form class="js-validate needs-validation" novalidate="">
                <div class="text-center">
                  
                  <h1 class="login-h1 login-bottom-spance">Login</h1>
                 
                  
                  {/* <nav>
                    <div class="nav nav-tabs login-nav-tabs justify-content-center" id="nav-tab" role="tablist">
                      <button class="nav-link active" id="nav-login-tab" data-bs-toggle="tab" data-bs-target="#nav-login" type="button" role="tab" aria-controls="nav-login" aria-selected="true">Login</button>
                      <button class="nav-link" id="nav-register-tab" data-bs-toggle="tab" data-bs-target="#nav-register" type="button" role="tab" aria-controls="nav-register" aria-selected="false">Register</button>
                    </div>
                  </nav> */}
                  
  
                </div>
                
                <div class="tab-content login-tab-content" id="nav-tabContent">
                  <div class="tab-pane fade show active" id="nav-login" role="tabpanel" aria-labelledby="nav-login-tab" tabindex="0">

                        <div className="input-group login-input-group pt-10">
                            <UserIconLabel />
                            <SimpleTextField placeholder="User name" id='userName' />
                        </div>

                        <div class="input-group login-input-group mt-4">
                            <LockIconLabel />
                            <PasswordTextField placeholder="Password" id='password'/>
                        </div>
                    
                      <div class="d-flex justify-content-between align-items-center login-input-switch mt-3">
                        <div class="form-check form-switch">
                          <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckChecked" checked />
                          <label class="form-check-label" for="flexSwitchCheckChecked">Remind Me</label>
                        </div>
                        <a href="forgot-password.html">Forget password ?</a>
                      </div>

                    <div class="d-grid pt-4">
                      <Buttons  />
                    </div>
                  </div>
                  {/* <div class="tab-pane fade" id="nav-register" role="tabpanel" aria-labelledby="nav-register-tab" tabindex="0">
                    <div class="input-group login-input-group">
                      <label class="input-group-text" for=""><i class="input-icon ic-user"></i></label>
                      <input type="text" class="form-control" placeholder="Enter Your Name" id="" />
                    </div>
                    <div class="input-group login-input-group">
                      <label class="input-group-text" for=""><i class="input-icon ic-mail"></i></label>
                      <input type="text" class="form-control" placeholder="Email Address" id="" /> 
                    </div>
                  
                    <div class="input-group login-input-group">
                      <label class="input-group-text" for=""><i class="input-icon ic-lock"></i></label>
                      <input type="text" class="form-control" placeholder="Enter Password" id="" /> 
                      <label class="input-group-text" for=""><i class="input-icon ic-eye-slash"></i></label>
                    </div>
                    <div class="input-group login-input-group">
                      <label class="input-group-text" for=""><i class="input-icon ic-lock"></i></label>
                      <input type="text" class="form-control" placeholder="Re-Enter Password" id="" />
                      <label class="input-group-text" for=""><i class="input-icon ic-eye-slash"></i></label>
                    </div>
                  
                    <div class="d-flex justify-content-between align-items-center login-input-switch">
                    //   {/* <p><i class="green-circle"></i> Accept <a class="link link-green" href="javascript:;">Terms of Service</a> and <a class="link link-green" href="javascript:;">Privacy Policy</a>.</p> 
                    </div>
                  
                  <div class="d-grid">
                    <button type="submit" class="btn login-btn btn-green btn-lg">Register</button>
                  </div>
                  </div> */}
                
                </div>
                
                
              </form>
            </div>
          </div>
      </div>
    );
};

export default Login;