import React from "react";
import { FaPaypal , FaCcVisa , FaCcMastercard , FaTruck } from "react-icons/fa"


const Footer = () => {
  return (
    <div className="footer" style={{padding:"10px"}}>
       <div className="justify-content-center flex-wrap d-flex" style={{padding:"10px"}}>
            <div >
              <div style={{textAlign:"center"}}><a href="#" className="link textFooter">Privacy policy</a></div>
              <div style={{textAlign:"center"}}><a href="https://wa.me/+9613416562" className="link textFooter">contact us</a></div>
              <div style={{textAlign:"center"}}><a href="#" className="link textFooter">Return policy</a></div>
            </div>
        </div>
        <div className="justify-content-center flex-wrap d-flex" style={{padding:"10px"}}>@2022</div>
      {/* <div className="justify-content-center d-flex">
     
          
        <div className="card-name iconFooter">
          <FaCcMastercard />
        </div>
        <div className="card-name iconFooter">
          <FaCcVisa />
        </div>
        <div className="card-name iconFooter " >
         <FaPaypal />
        </div>
        <div className="card-name iconFooter ">
          <FaTruck />
        </div>
      </div>
       */}
    </div>
  );
};

export default Footer;
