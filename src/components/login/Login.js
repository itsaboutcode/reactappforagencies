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
  
    return (
        <div class="container-fluid login-container mt-4">
          
          <div class="">
            <div class="w-100 content-space-t-4 content-space-t-lg-2 content-space-b-1 login-section-width">

              <form class="js-validate needs-validation" novalidate="">
                <div class="text-center">
                  
                  <h1 class="login-h1 login-bottom-spance">Login</h1>
                 
                </div>
                
                <div class="tab-content login-tab-content" id="nav-tabContent">
                  <div class="tab-pane fade show active" id="nav-login" role="tabpanel" aria-labelledby="nav-login-tab" tabindex="0">

                        <div className="input-group login-input-group pt-10">
                            <UserIconLabel />
                            <SimpleTextField inputType="text" className="form-control rounded-0" placeholder="User name" id='userName' />
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
                      <Buttons title='Login' linkTo="/admin" />
                    </div>
                  </div>
                 
                
                </div>
                
                
              </form>
            </div>
          </div>
      </div>
    );
};

export default Login;