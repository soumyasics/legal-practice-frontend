
import React from 'react'
import img2 from "../../Assets/adv3.avif"
import './BarCouncilLogin.css'
import { Link } from 'react-router-dom'
function BarCouncilLogin() {
  return (
    <div>

<div class="container barcouncillogindiv1">
                <div class="card-header mx-auto  bg-img1">
                    <h3 class="mx-auto  barcouncilloginformhead d-flex justify-content-center"> Barouncil Login  </h3>

                </div>
                <div class="container d-flex flex-row bd-highlight mb-3 barcouncillogindiv2 ">
                    <form action="" method="post">
                        <div class="input-group form-group mb-3">
                            <input type="text" name="email" class="form-control form-control-lg" placeholder="Your Email Here" />
                        </div>

                        <div class="input-group form-group">

                            <input type="password" name="password" class="form-control form-control-lg barcouncilloginform1" placeholder="Password Here" />
                        </div>

                        <div class="form-group">
                            <input type="submit" name="btn" value="Login" class="btn  btn-outline-dark float-right login_btn barcouncilloginbtn" />
                        </div>

                    </form>
                    
                </div>
            </div>







    </div>
  )
}

export default BarCouncilLogin

   
