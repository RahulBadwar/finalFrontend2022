import Owner from "../Componets/OwnerNavbar"
import Passanger from "../Componets/PassangerNavBar"
import { useHistory } from "react-router-dom";
import { useState } from "react";

const PassangerHome=(props)=>{

  
            if(localStorage.getItem("userid")===null)
         {
props.history.push('/log-in')
         }
    return(
      
        <div>
            <Passanger/>
        <div>
       <div style={{background:"rgb(166,219,223)"}}>
        <div className="container">
        <div class="row pt-5 pb-5">
            <div class="col-sm" style={{}}>
              
            </div>
            <div class="col-sm"></div>
            <div class="col-sm"></div>
          </div>
          <div class="row pt-5">
            <div class="col-sm"></div>
            <div class="col-sm" style={{}}>
              <h3>Home Screen</h3>
            </div>
            <div class="col-sm"></div>
          </div>
          <div class="row pt-5 pb-5">
            <div class="col-sm" style={{}}>
              <h1>WELCOME TO</h1> <h1>Passanger PAGE</h1>
            </div>
            <div class="col-sm"></div>
            <div class="col-sm">
            <h4>Email-{localStorage.getItem("email")}</h4>
              <h4>Mobile Number-{localStorage.getItem("mobile")}</h4>
              
              </div>
          </div>
          <div class="row pt-5 pb-5">
            <div class="col-sm" style={{}}>
              
            </div>
            <div class="col-sm"></div>
            <div class="col-sm"></div>
          </div>
        </div>
      </div>
      </div>
     </div>
        
    )
}

export default PassangerHome;