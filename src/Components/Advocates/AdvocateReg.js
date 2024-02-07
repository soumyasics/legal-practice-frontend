import React from 'react'
import LandingNavbar from '../LandingPage/LandingNavbar'
import './AdvocateReg.css'
import img1 from "../../Assets/adv4.avif"
import { Link } from 'react-router-dom';

function AdvcateReg() {

  return (
    <>
      <div className='container'>
        <div className='advocateRegistrationmaindiv'>

          <div className='advocateRegistrationimgdiv'>
            <img src={img1} className='advocateRegistrationimgdiv'></img>
          </div>
          <div className='container'>
            <form>
              <h2 className="advocateRegistrationtitle">Registration Form</h2>
              <div className="row">

                <div className="col-3">
                  <label class="form-label advocateRegistrationlabel">First Name :</label>

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
                  <label class="form-label advocateRegistrationlabel">Last Name :</label>
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
                  <label class="form-label advocateRegistrationlabel">Email :</label>
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
                  <label class="form-label advocateRegistrationlabel">Contact Number :</label>
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
                  <label class="form-label advocateRegistrationlabel">City</label>
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
                  <label class="form-label advocateRegistrationlabel">State</label>
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
                  <label class="form-label advocateRegistrationlabel">District</label>
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
  <label class="form-label advocateRegistrationlabel">Reg No :</label>
</div>
<div className="col-9">
  <input
    type="number"
    class="form-control form-control-lg"
    id="exampleFormControlInput1"
    placeholder="Registration Number"
  />
</div>
</div>

              <div className="row mt-3">

                <div className="col-3">
                  <label class="form-label advocateRegistrationlabel">Password :</label>
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

                <button type="submit" className="btn btn-secondary advocateRegistrationbutton mt-3">
                  Register
                </button>
                <div className='advocateRegistrationdivlast'>Already have an account?
                <Link to='/advocateLogin' className='advocateRegistrationdivlink'> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Login Now</Link></div>
              </div>



            </form>
          </div>
        </div>
      </div>
    </>

  );
}


export default AdvcateReg