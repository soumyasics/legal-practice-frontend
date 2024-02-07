import React from 'react'
import LandingNavbar from '../LandingPage/LandingNavbar'
import './UserRegistration.css'
import img1 from "../../Assets/lawimg9.avif"
import { Link } from 'react-router-dom';

function UserRegistration() {

  return (
    <>
      <div className='container'>
        <div className='userRegistrationmaindiv'>

          <div className='userRegistrationimgdiv'>
            <img src={img1} className='userRegistrationimgdiv'></img>
          </div>
          <div className='container'>
            <form>
              <h2 className="userRegistrationtitle">Registration Form</h2>
              <div className="row">

                <div className="col-3">
                  <label class="form-label userRegistrationlabel">First Name :</label>

                </div>
                <div className="col-9">

                  <input
                    type="text"
                    class="form-control form-control-lg"
                    id="exampleFormControlInput1"
                    placeholder="First Name Here"
                    name="fname"
                  />
                </div>
              </div><div className="row mt-3">

                <div className="col-3">
                  <label class="form-label userRegistrationlabel">Last Name :</label>
                </div>
                <div className="col-9">

                  <div >
                    <input
                      type="text"
                      class="form-control  form-control-lg"
                      id="exampleFormControlInput1"
                      placeholder="Last Name Here"
                      name="lname"

                    /></div>
                </div>
              </div><div className="row mt-3">

                <div className="col-3">
                  <label class="form-label userRegistrationlabel">Email :</label>
                </div>
                <div className="col-9">

                  <div >
                    <input
                      type="email"
                      class="form-control  form-control-lg"
                      id="exampleFormControlInput1"
                      placeholder="Email"
                      name="email"
                    /></div>
                </div>
              </div><div className="row mt-3">

                <div className="col-3">
                  <label class="form-label userRegistrationlabel">Contact Number :</label>
                </div>
                <div className="col-8">

                  <div >
                    <input
                      type="number"
                      class="form-control  form-control-lg"
                      id="exampleFormControlInput1"
                      placeholder="Contact Number"
                      name="contact"
                    /></div>
                </div>
              </div>
              <div className="row mt-3">

                <div className="col-3">
                  <label class="form-label userRegistrationlabel">City</label>
                </div>
                <div className="col-9">

                  <div >
                    <input
                      type="text"
                      class="form-control  form-control-lg"
                      id="exampleFormControlInput1"
                      placeholder="City"
                    /></div>
                </div>
              </div>
              <div className="row mt-3">

                <div className="col-3">
                  <label class="form-label userRegistrationlabel">State</label>
                </div>
                <div className="col-9">

                  <div >
                    <input
                      type="text"
                      class="form-control form-control-lg"
                      id="exampleFormControlInput1"
                      placeholder="State"
                    /></div>
                </div>
              </div>
              <div className="row mt-3">

                <div className="col-3">
                  <label class="form-label userRegistrationlabel">District</label>
                </div>
                <div className="col-9">

                  <div >
                    <input
                      type="text"
                      class="form-control  form-control-lg"
                      id="exampleFormControlInput1"
                      placeholder="District"
                    /></div>
                </div>
              </div>
              <div className="row mt-3">

                <div className="col-3">
                  <label class="form-label userRegistrationlabel">Password :</label>
                </div>
                <div className="col-9">
                  <input
                    type="password"
                    class="form-control form-control-lg"
                    id="exampleFormControlInput1"
                    placeholder="Password"
                  />
                </div>
              </div>
              <div className="row mt-3">

                <button type="submit" className="btn btn-secondary userRegistrationbutton mt-3">
                  Register
                </button>
                <div className='userRegistrationdivlast'>Already have an account?
                <Link to='/UserLogin' className='userRegistrationdivlink'> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Login Now</Link></div>
              </div>
               
          



            </form>
          </div>
        </div>
      </div>
    </>

  );
}


export default UserRegistration