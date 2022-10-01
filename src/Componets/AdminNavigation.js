import { Link } from "react-router-dom";
import moment from "moment";
import React from "react";
import { useState } from "react";
import { useHistory } from "react-router-dom";




const AdminNavigation = (props) => {

  const history = useHistory();

  const user = localStorage.getItem('user')
  //console.log(user.email);
  console.log(user);

  //alert("in idf")
  if(user === null||user===undefined) {
    //alert("in idf")
          history.push("/log-in");
  }

 


  const Logout=()=>{
    //const history = useHistory();
  localStorage.removeItem('token');
  localStorage.removeItem('user');
  localStorage.removeItem('user.userid');
  console.log("log in buuton clicked");
  //props.history.push("/");
  console.log("log in buuton clicked");
  
  }

  const[timer,setTime]=useState(new Date().toLocaleString('en-GB'));
  // useEffect(()=>{
  //   setTime(moment().format("DD-MM-YYYY hh:mm:ss a"));
  // },1000);
  
  React.useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date().toLocaleString('en-GB'
      ));
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);
  return (
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
                <Link to="/admin" style={{textDecoration:"none"}}>
                  <span className="nav-link">Home</span>
                  </Link>
              </li>

              

              <li className="nav-item">
              <Link to="/admin-booking" style={{textDecoration:"none"}}>
                  <span className="nav-link me-5">View Bookings</span>
                  </Link>
              </li>

              
              
              <li className="nav-item">
                <Link to="/add-rotes" style={{textDecoration:"none"}}>
                <span className="nav-link">Add Route</span>
                </Link>
            </li>
            <li className="nav-item">
                <Link to="/bus-schedule" style={{textDecoration:"none"}}>
                <span className="nav-link">Schedule Bus</span>
                </Link>
            </li>
            <li className="nav-item">
                  {timer}
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
  );
};

export default AdminNavigation;
