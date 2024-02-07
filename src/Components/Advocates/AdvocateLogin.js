import React from 'react'
import img2 from "../../Assets/adv3.avif"
import './AdvocateLogin.css'
import { Link } from 'react-router-dom'

function AdvocateLogin() {
    return (
        <div>

            <div class="container advocatelogindiv1">
                <div class="card-header mx-auto  bg-img1">
                    <h3 class="mx-auto  advocateloginformhead d-flex justify-content-center"> advocate Login  </h3>

                </div>
                <div class="container d-flex flex-row bd-highlight mb-3 advocatelogindiv2 ">
                    <form action="" method="post">
                        <div class="input-group form-group mb-3">
                            <input type="text" name="email" class="form-control form-control-lg" placeholder="Your Email Here" />
                        </div>

                        <div class="input-group form-group">

                            <input type="password" name="password" class="form-control form-control-lg advocateloginform1" placeholder="Password Here" />
                        </div>

                        <div class="form-group">
                            <input type="submit" name="btn" value="Login" class="btn  btn-outline-danger float-right login_btn advocateloginbtn" />
                        </div>

                    </form>
                    <div className='advocatelogindiv3'>
                        Don't have an Account ?
                        <Link to='/AdvcateReg' > Register here</Link>
                    </div>
                </div>
            </div>





        </div>
    )
}

export default AdvocateLogin