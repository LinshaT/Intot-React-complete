import React,{useState} from "react";
import {Link} from "react-router-dom";
import Footer from "./Footer";
import {useNavigate} from "react-router-dom"



function Signup(){
const[Name,setName]=useState('')
const[email,setEmail]=useState('')
const[phone,setPhone]=useState('')
const[password,setPassword]=useState('')
     
async function registerUser(event){

//  validation using Regular Expression

 const emailRegex = /^\S+@\S+\.\S+$/;
 const passwordRegex =/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
 const phnRegex=/^[6-9]\d{9}$/;

   if(!email.match(emailRegex)){
     alert("please enter valid E-mail");
     return;
  }
   else if (!password.match(passwordRegex)){
     alert("please enter valid password . It should contain  Capital Letter , digits and Special Characters");
     return;
  }
    else if (!phone.match(phnRegex)){
      alert("Please enter 10 Digits");
      return;
  }
//  else if((!email.match(emailRegex)) && (!password.match(passwordRegex)) ){
//   alert("e-mail and psw incorrect");
//   return;
//  }

event.preventDefault()
  const response=await fetch('http://localhost:3001/register',{
    method:'POST',
    headers:{
           'Content-Type':'application/json'
    },
    body: JSON.stringify({
      Name,
      email,
      phone,
      password
    })
  })
  const data = await response.json()
  console.log(data);
   Navigate("/")
}    
 let Navigate=useNavigate();
return(
<div>
  <section className="colored-section">
    <div className="container-fluid">
      <nav className="navbar navbar-expand navbar-dark">
        <a className="navbar-brand" href>INTOT</a>
          <div className=" navbar-collapse  ">
            <ul className="navbar-nav ml-auto d-none d-lg-flex ml-auto ">
              <li className="nav-item ">
              <Link to="/" className="nav-link pr-4" href><span className="p-4"><img src="assets/images/login.png" alt="login" /></span>Home</Link>
              {/* <a className="nav-link" href><span className="p-4"><img src="assets/images/login.png" alt="login" /></span>Login</a> */}
              </li>
              <li className="nav-item">
              {/* <a className="nav-link" href><span className="p-4"><img src="assets/images/signup.png" alt="signup" /></span>Sign Up</a> */}
              </li>
              <li className="nav-item">
                {/* <a className="nav-link" href><span className="p-4"><img src="assets/images/search-icon.png" alt="Search" /></span></a> */}
              </li>
            </ul>
          </div>
            {/*  navbar button*/}
          <div className="custom_menu-btn">
            <button onclick="openNav()">
              <span className="bar1">
              </span>
              <span className="bar2">
              </span>
              <span className="bar3">
              </span>
            </button>
          </div>
          <div id="myNav" className="overlay">
            <div className="overlay-content">
              <a href="index.html">HOME</a>
              <a href="index.html">TEAM</a>
              <a href="Portfoliyo.html">PORTFOLIO</a>
               <a href="index.html">CONTACT US</a>
            </div>
          </div>
          {/* button end*/}
    </nav>
   </div>
</section>
<section id="contact">
  <div className="container-consult">
    <h5>Don't Hesitate To Ask</h5>
    <h2>FREE CONSULTATION</h2>
  </div>
  <div className="contact-content">
    <div className="row">
      <div className="col-lg-6">
        {/* form start */}
        <div className="container">
            <form onSubmit={registerUser}>
                <label htmlFor="fname">Name</label>
                <input  type="text" value={Name} onChange={(e)=> setName(e.target.value)} name="Name" autoComplete="off" required />
                <label htmlFor="lname">Email</label>
                <input type="text"  value={email} onChange={(e)=> setEmail(e.target.value)} name="email" autoComplete="off" required />
                <label htmlFor="lname">Phone Number</label>
                <input  type="text"   value={phone} onChange={(e)=> setPhone(e.target.value)} name="phone" autoComplete="off" required />
                <label htmlFor="lname">Password</label>
                <input  type="password"  value={password} onChange={(e)=> setPassword(e.target.value)} name="password" required/>
                <button className="Reg-btn" type="submit">Register</button>
            </form>
                <p><br />
                  By clicking the Register button,you agree to our <br />
                  <a href=" ">Terms and Condition</a> and <a href=" ">Policy Privacy</a>
                  Already have an account?<Link to= "/signIn" style={{textDecoration:"none",paddingLeft:"10px"}}>Login
                  </Link>
                </p>
        </div>
          {/* form end*/}
      </div>
      <div className="col-lg-6">
          <img src="assets/images/form-img.png" className="contact-image" alt="Img" />
      </div>
    </div>
  </div>
</section>
{/* info section */}
<section>
  <div>
    <Footer />
  </div>
</section>             
</div>
)
}
export default Signup;