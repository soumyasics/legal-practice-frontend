import React from 'react'
import { Navbar, Nav, Button } from 'react-bootstrap';
import './LandingCarousel.css'
import img1 from '../../Assets/logo2.png'

function LandingNavbar() {
  return (
    <div className=''>
      {/* <Navbar bg="transparent" expand="lg">
      <div>
      <Navbar.Brand href="#home">
        <img src={img1} className='landindcarouselnavLogo'></img>LPMS</Navbar.Brand>
      </div>
      
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
<div>
  <Navbar.Collapse id="basic-navbar-nav">
        <div className='landindcarouselnav'>
          <Nav className="mr-auto landindcarouselnavAlign">

            <Nav.Link className="nav-link-custom" href="#home">Home</Nav.Link>
            <Nav.Link href="#link" className="nav-link-custom">About Us</Nav.Link>
            <Nav.Link href="#link" className="nav-link-custom">Contact Us</Nav.Link>
            <Nav.Link href="#link"><button className="btn btn-outline-danger nav-link-customLogin">Login</button></Nav.Link>
          </Nav>
        </div>
      </Navbar.Collapse>
</div>

      


    </Navbar> */}



<nav class="navbar navbar-expand-lg navbar-dark bg-dark d-flex justify-content-between">
  <div className='d-flex justify-content-between'>
    <a class="navbar-brand" href="#">
    <img src={img1} alt="Logo" class="landindcarouselnavLogo"/>
    LPMS
  </a>



  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav ml-auto">
      <li class="nav-item active">
        <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Link</a>
      </li>
      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Dropdown
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
          <a class="dropdown-item" href="#">Action</a>
          <a class="dropdown-item" href="#">Another action</a>
          <div class="dropdown-divider"></div>
          <a class="dropdown-item" href="#">Something else here</a>
        </div>
      </li>
      <li class="nav-item">
        <a class="nav-link disabled" href="#">Disabled</a>
      </li>
    </ul>

    </div>
  </div>
</nav>




    
    </div>
    
  )
}

export default LandingNavbar