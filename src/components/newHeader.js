import React from "react";
import { FaPaypal , FaCcVisa , FaCcMastercard , FaTruck } from "react-icons/fa"

/* Open when someone clicks on the span element */
function openNav() {
    document.getElementById("myNav").style.width = "100%";
  }
  
  /* Close when someone clicks on the "x" symbol inside the overlay */
  function closeNav() {
    document.getElementById("myNav").style.width = "0%";
  }

const newHeader = () => {
  return (
    <div className="newH" style={{padding:"10px"}}>
       <div className="justify-content-start flex-wrap d-flex" style={{padding:"10px"}}>
            
            <div className="header">
                <div className="container">

                    <div className="mobile-header">
                    <div className="container ">
                            <div className="row ">
                                <div className="itemh col-6 d-flex align-items-center">
                                    <a href="#products" >products</a>
                                </div>
                                <div className="itemh col-6 d-flex align-items-center">
                                    <a href="#services" >services</a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="pc-header">
                        <div className="container ">
                            <div className="row ">
                                <div className="itemh col-6 d-flex align-items-center">
                                    <a href="#products" >products</a>
                                </div>
                                <div className="itemh col-6 d-flex align-items-center">
                                    <a href="#services" >services</a>
                                </div>
                            </div>
                        </div>
                    </div>
                 </div>
             </div>
        </div>

       
    </div> 
      );
};

export default newHeader;
