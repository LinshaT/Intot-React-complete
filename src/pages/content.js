

import React from "react";
import {useState,useEffect} from "react";
import {Link} from "react-router-dom";
import Footer from "./Footer";

function Datas(){
    const [details,setDetails]=useState([{
        Name:'',
        email:"",
        phone:"",

    }])
    useEffect(()=>{
        fetch("/data").then(res=>{
            if(res.ok){
                return res.json()
            }
        }).then(jsonRes=>setDetails(jsonRes));
    })

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
{/* Users Data */}

<section className="text-center ">
  <h1>List of Registerd Users...</h1>
    {
      details.map(content=>
      <div>
          <div className="text-center">
            <div class="card" style={{width: "18rem"}}>
              {/* <img className="card-img-top" src=" " alt=""/> */}
              <div class="card-body">
                <h2 class="card-title">{content.Name}</h2>
                <p class="card-text">{content.email}</p>
                <h6>{content.phone}</h6>
              </div>
          </div>
        </div>
      </div>
           )
    }
</section>
<section>
  <div>
    <Footer />
  </div>
</section>
  
</div>

)}
export default Datas;
