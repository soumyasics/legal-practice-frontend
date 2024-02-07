import React from 'react'
import img2 from "../../Assets/img22.jpeg"
import LandingNavbar from '../LandingPage/LandingNavbar'
import './UserLogin.css'
import { Link } from 'react-router-dom'

function UserLogin() {
    return (
        <div>

            <div class="container userlogindiv1">
                <div class="card-header mx-auto  bg-img1">
                    <h3 class="mx-auto  userloginformhead d-flex justify-content-center"> User Login  </h3>

                </div>
                <div class="container d-flex flex-row bd-highlight mb-3 userlogindiv2 ">
                    <form action="" method="post">
                        <div class="input-group form-group mb-3">
                            <input type="text" name="email" class="form-control form-control-lg" placeholder="Username" />
                        </div>

                        <div class="input-group form-group">

                            <input type="password" name="password" class="form-control form-control-lg userloginform1" placeholder="Password" />
                        </div>

                        <div class="form-group">
                            <input type="submit" name="btn" value="Login" class="btn  btn-outline-danger float-right login_btn userloginbtn" />
                        </div>

                    </form>
                    <div className='userlogindiv3'>
                        Don't have an Account ?
                        <Link to='/UserRegistration' > Register here</Link>
                    </div>
                </div>
            </div>





        </div>
    )
}

export default UserLogin