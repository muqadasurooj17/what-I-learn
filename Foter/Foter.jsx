import React from "react";
import "./Foter.css";
import { FaInstagram, FaYoutube } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import Navbar from "../Navbar/Navbar";
import{FaLinkedin} from "react-icons/fa";
const Footer = () => {
  return (
    <>

      
    <Navbar/>
      <footer>
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-10 mx-auto">
              <div className="row">
                <div className="col-6 col-lg-3">
                  <h2>Company</h2>
                  <ul>
                    <li>
                      <a href="#">About</a>
                    </li>
                    <li>
                      <a href="#">Testimonials</a>
                    </li>
                    <li>
                      <a href="#">Our Blog</a>
                    </li>
                   
                  </ul>
                </div>

                <div className="col-6 col-lg-3">
                  <h2>Support</h2>
                  <ul>
                    <li>
                      <a href="#">Customer Care</a>
                    </li>
                    <li>
                      <a href="#">Contact Us</a>
                    </li>
                    <li>
                      <a href="#">24/7 Service</a>
                    </li>
                   
                  </ul>
                </div>

                <div className="col-6 col-lg-3">
                  <h2>Services</h2>
                  <ul>
                    <li>
                      <a href="#">Online classes</a>
                    </li>
                    <li>
                      <a href="#">Assesments</a>
                    </li>
                    <li>
                      <a href="#">E-learning</a>
                    </li>
                   
                  </ul>
                </div>

                <div className="col-6 col-lg-3">
                  <h2>Follow Us</h2>
                  <div className="row">
                    <div className="col-3 mx-auto">
                
                     
                      <div className="myicon"><FaFacebook />  </div>
                    </div>
                    <div className="col-3 mx-auto">
                      <a
                        href="">
                      <div className="myicon"><FaInstagram />  </div> 
                    
                      </a>
                    </div>
                    <div className="col-3 mx-auto">
                    <div className="myicon"><FaLinkedin />  </div>
                    </div>
                    <div className="col-3 mx-auto">
                    <div className="myicon"><FaYoutube />  </div>
                    </div>
                  </div>
                </div>
              </div>
              <hr />
              <div className="mt-5">
                <p className="main-hero-para text-center w-100">
                  Copyright @ MuqadasMalik. All rights reserved.
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>

    
  );
};

export default Footer;
