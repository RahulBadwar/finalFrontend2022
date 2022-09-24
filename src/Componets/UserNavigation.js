import { Link } from "react-router-dom";
import {
  Button,
  Form,
  Alert,
  Nav,
  Navbar,
  Container,
  NavDropdown,
} from "react-bootstrap";
const UserNavigation = (props) => {
  return (
    <div className="">
      <nav
        className="navbar navbar-dark navbar-expand-lg bg-dark"
        style={{
          backgroundColor: "#e9bcb7",
          backgroundImage: "linear-gradient(315deg, #e9bcb7 0%, #29524a 74%)",
        }}
      >
        <div className="container-fluid">
          <div className="row w-100">
            <div className="col-md-2 align-items-center mt-2">
              <Link to="/royal-travels">
                <span className="navbar-brand fs-3 mt-4">Royal Travels</span>
              </Link>
            </div>
            <div className="col-md-10">
              <ul
                className="navbar-nav mb-auto d-flex justify-content-between text-center mx-2 my-2"
                style={{ fontSize: "20px" }}
              >
                <li className="nav-item ">
                  <Link to="/view-bus">
                    <span className="nav-link mx-4 ">Home</span>
                  </Link>
                </li>

                <li className="nav-item">
                  <Link to="/add-booking">
                    <span className="nav-link mx-2">New Bus Booking</span>
                  </Link>
                </li>

                <li className="nav-item">
                  <Link to="/my-bookings">
                    <span className="nav-link mx-2">My Bookings</span>
                  </Link>
                </li>

                <li className="nav-item">
                  <Link to="/view-profile">
                    <span className="nav-link mx-2">View My Profile</span>
                  </Link>
                </li>

                <li className="nav-item">
                  <Link to="/edit-profile">
                    <span className="nav-link mx-2">Edit Profile</span>
                  </Link>
                </li>

                <li className="nav-item">
                  <Link to="/signin">
                    <button
                      className="btn btn-outline-dark"
                      style={{ fontSize: "25px" }}
                    >
                      <span className="nav-link fs-6">Logout</span>
                    </button>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          {/* <div className="d-flex">*/
          /* <button className="btn btn-outline-success">Logout</button>
        </div> */}
        </div>
      </nav>
    </div>
  );
};

export default UserNavigation;
