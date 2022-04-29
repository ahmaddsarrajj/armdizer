import React, { useRef } from "react";
import { FaTruck , FaMedal } from "react-icons/fa";
import Fade from 'react-reveal/Fade';

const ContactInfo = () => {
  let iconColor = {
    color: "black",
    marginBottom : "20px",
    fontSize : "40px"
  }
  let subt ={
    fontSize : "25px",
    textAlign : "center",
    marginBottom : "30px",
    color: "#077495"
  }
  let font ={
    fontSize : "21px",
    textAlign : "center",
    justifyContent: "center",
    color:"black"
  }

  

  return (
  <div style={{backgroundColor: "black"}}>
    <div className="contactInfo container bg-with-black">
      <div className="row rowStart reveal"  >
       
        <Fade left>
        <div className="col-12 col-md-4 contact-Box">
          <div className="box-info">
            <div className="info-image">
              <i className="fas fa-phone-alt" style={iconColor}></i>
            </div>
             <p style={font}>contact us and order via whatsapp</p> 
          </div>
        </div>
        </Fade>
        <Fade bottom>
        <div className="col-12 col-md-4 contact-Box">
          <div className="box-info">
            <div className="info-image">
              <a href="#">
                <FaTruck  style={iconColor}/>
              </a>
            </div>
            <p style={font}>Your order reaches you wherever you are</p>
          </div>
        </div>
        </Fade>
        <Fade right>
        <div className="col-12 col-md-4 contact-Box">
          <div className="box-info">
            <div className="info-image">
              <a href="#">
                <FaMedal  style={iconColor}/>
              </a>
            </div>
            <p style={font}>High quality at reasonable prices</p>
          </div>
        </div>
        </Fade>
      </div>
    </div>
  </div>
  );
};

export default ContactInfo;
