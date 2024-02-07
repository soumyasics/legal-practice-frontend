import React from 'react'
import img2 from "../../Assets/adv3.avif"
import './AdminLogin.css'
import { Link } from 'react-router-dom'
function AdminLogin() {
  return (
    <div>
    <div class="container adminlogindiv1">
                    <div class="card-header mx-auto  bg-img1">
                        <h3 class="mx-auto  adminloginformhead d-flex justify-content-center"> Admin Login  </h3>
    
                    </div>
                    <div class="container d-flex flex-row bd-highlight mb-3 adminlogindiv2 ">
                        <form action="" method="post">
                            <div class="input-group form-group mb-3">
                                <input type="text" name="email" class="form-control form-control-lg" placeholder="Your Email Here" />
                            </div>
    
                            <div class="input-group form-group">
    
                                <input type="password" name="password" class="form-control form-control-lg adminloginform1" placeholder="Password Here" />
                            </div>
    
                            <div class="form-group">
                                <input type="submit" name="btn" value="Login" class="btn  btn-outline-secondary float-right login_btn adminloginbtn" />
                            </div>
    
                        </form>
                        
                    </div>
                </div>
    
    
    </div>
  )
}

export default AdminLogin