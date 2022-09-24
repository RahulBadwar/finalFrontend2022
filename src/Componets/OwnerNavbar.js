import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { useState } from "react";
const Owner=(props)=>{


const Logout=()=>{
  //const history = useHistory();
localStorage.removeItem('token');
localStorage.removeItem('user');
localStorage.removeItem('user.userid');
localStorage.removeItem('userid');
localStorage.removeItem('email');
localStorage.removeItem('password');
console.log("log in buuton clicked");
props.history.push("/");
console.log("log in buuton clicked");

}



    return(
<nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <div className="row" style={{ width: "100vw"}}>
          <div className="col-md-1 mt-2">
           <Link to='/' style={{textDecoration:"none"}}>
              <span className="navbar-brand fs-3">BookMyBus</span>
              </Link>
          </div>
          <div className="col-md-11 ">
            <ul
              className="navbar-nav me-auto  mb-auto d-flex justify-content-around text-center mx-2 mt-2"
              style={{ fontSize: "20px" }}
            >
              <li className="nav-item">
                <Link to="/owner-home" style={{textDecoration:"none"}}>
                  <span className="nav-link">Home</span>
                  </Link>
              </li>

              

              <li className="nav-item">
              
                  <span className="nav-link me-5">View Bookings</span>
               
              </li>

             

             
              <li className="nav-item">
                <Link to="/add-bus" style={{textDecoration:"none"}}>
                <span className="nav-link">Add Bus</span>
                </Link>
            </li>

              <li className="nav-item">
              
                  <button className="btn btn-outline-warning pt-0 pb-0" onClick={Logout}>
                    <Link to='log-in' style={{textDecoration:"none"}} >
                    <span
                      className="nav-link fs-6
              "
                    >
                      
                      Logout
                    </span>
                    </Link>
                  </button>
               
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
    )
} 

 export default Owner