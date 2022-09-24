import { Link } from "react-router-dom";

const Passanger=()=>{


    const Logout=()=>{
        //const history = useHistory();
      localStorage.removeItem('token');
      localStorage.removeItem('user');
      localStorage.removeItem('user.userid');
      localStorage.removeItem('userid');
localStorage.removeItem('email');
localStorage.removeItem('mobile');
      console.log("log in buuton clicked");
      //props.history.push("/");
      console.log("log in buuton clicked");
      
      }
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
                    <Link to="/passanger" style={{textDecoration:"none"}}>
                      <span className="nav-link">Home</span>
                      </Link>
                  </li>
    
                  
    
                  <li className="nav-item">
                  <Link to="/view-bus" style={{textDecoration:"none"}}>
                      <span className="nav-link me-5">New Bus Booking</span>
                      </Link>
                  </li>
                  <li className="nav-item">
                  <Link to="/" style={{textDecoration:"none"}}>
                      <span className="nav-link me-5">View Booking</span>
                      </Link>
                  </li>
    
                 
                  
               
                
    
    
                  <li className="nav-item">
                  
                      <button className="btn btn-outline-warning pt-0 pb-0 " onClick={Logout}>
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
}
export default Passanger;