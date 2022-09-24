import Header from "./Header";
import img2 from "../assets/Bus3.jpg";
import { useState } from "react";
import swal from "sweetalert";
import UserApiService from "../Service/UserApiService";


function Signup(props) {
  const [userEmail, setUserEmail] = useState("");
  const [userDob, setUserDob] = useState(new Date());
  const [userGender, setUserGender] = useState("");
  const [userRole, setUserRole] = useState("");
  const [userMobile, setUserMobile] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [userConfirmPassword, setUserConfirmPassword] = useState("");

  let signup = () => {
    const user = {
      email: userEmail,
      dob: userDob,
      mobile: userMobile,
      gender: userGender,
      role: userRole,
      password: userPassword,
      confirmPassword: userConfirmPassword,
    };

    console.log(`email: ${user.email}`);
    console.log(`dob: ${user.dob}`);
    console.log(`mobile: ${user.mobile}`);
    console.log(`gender: ${user.gender}`);
    console.log(`role: ${user.role}`);
    console.log(`password: ${user.password}`);
    console.log(`confirm password: ${user.confirmPassword}`);
    UserApiService.signup(user)
    .then((response) => {
      swal("Sign up Success", "Sign Up successfull", "success");
      console.log(`message : ${response.data}`);
    })
    .catch((error) => {
      swal("OOPS!!", "Somethins went wrong", "error");
      console.log(`message : ${error}`);
    });

  props.history.push("/log-in");
    
  };

  const validate = () => {
    var regEx = /^[a-zA-Z\s]+$/;
    var pattern = /^[6-9]\d{9}$/gi;
    if (userMobile === "") {
      swal("Error", "Please enter Mobile number", "error");
      return false;
    } else if (
      !pattern.test(userMobile) ||
      isNaN(userMobile) ||
      userMobile.length <= 9 ||
      userMobile.length >= 11
    ) {
      swal("Error", "Please enter valid Mobile number", "error");
      return false;
    } else if (userEmail === "") {
      swal("Error", "Please enter email", "error");
      return false;
    } else if (userEmail.indexOf("@") <= 0) {
      swal("Error", "Please enter valid email", "error");
      return false;
    } else if (
      userEmail.charAt(userEmail.length - 4) !== "." &&
      userEmail.charAt(userEmail.length - 3) !== "."
    ) {
      swal("Error", "Please enter valid email", "error");
      return false;
    } else if (userPassword === "") {
      swal("Error", "Please enter password", "error");
      return false;
    } else if (userPassword.length <= 5) {
      swal("Error", "Password must be atleast 6 character", "error");
      return false;
    } else if (userConfirmPassword !== userPassword) {
      swal("Error", "Please confirm password", "error");
      return false;
    } else if (userGender === "") {
      swal("Error", "Please select gender", "error");
      return false;
    } else if (userRole === "") {
      swal("Error", "Please select role", "error");
      return false;
    }
    signup();
  };

  return (
    <>
      <Header />
      <div
        style={{
          background: `linear-gradient(180deg, #2F4F4F 0%, rgba(0, 0, 0, 0.1)40%), url(${img2})`,
          backgroundSize: "cover",
          height: "130vh",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="container">
          <div className="row">
            <div className="col"></div>
            <div className="col-6">
              <div
                className="form form-control mt-3 bg-light"
                style={{
                  boxShadow: "2px 2px 10px black",
                  opacity: "0.8",
                }}
              >
                <h3>Registration Form</h3>
                <div className="mb-3">
                  <label className="form-label">Email</label>
                  <input
                    type="email"
                    onKeyUp={(event) => {
                      setUserEmail(event.target.value);
                    }}
                    className="form-control"
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Date Of Birth</label>
                  <input
                    onKeyUp={(event) => {
                      setUserDob(event.target.value);
                    }}
                    type="date"
                    className="form-control d-inline"
                  />
                </div>
                <label className="form-label mb-2">Gender</label>
                <div className="">
                  <select
                    className="custom-select custom-select-lg mb-3 p-2"
                    style={{ width: "100px" }}
                    onChange={(e) => {
                      setUserGender(e.target.value);
                    }}
                  >
                    <option defaultValue>None</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                  </select>
                </div>
                <label className="form-label mb-2">Role</label>
                <div className="">
                  <select
                    className="custom-select custom-select-lg mb-3 p-2"
                    style={{ width: "100px" }}
                    onChange={(e) => {
                      setUserRole(e.target.value);
                    }}
                  >
                    <option defaultValue>None</option>
                    <option value="OWNER">Owner</option>
                    <option value="PASSANGER">Passanger</option>
                  </select>
                </div>
                <div className="mb-3">
                  <label className="form-label">Mobile</label>
                  <input
                    onKeyUp={(event) => {
                      setUserMobile(event.target.value);
                    }}
                    type="number"
                    className="form-control"
                  />
                </div>

                <div></div>

                <div className="mb-3">
                  <label className="form-label">Password</label>
                  <input
                    onKeyUp={(event) => {
                      setUserPassword(event.target.value);
                    }}
                    type="password"
                    className="form-control"
                  ></input>
                </div>
                <div className="mb-3">
                  <label className="form-label">Confirm Password</label>
                  <input
                    onKeyUp={(event) => {
                      setUserConfirmPassword(event.target.value);
                    }}
                    type="password"
                    className="form-control"
                  ></input>
                </div>
                <div className="mb-3">
                  <button onClick={validate} className="btn btn-success">
                    Sign Up
                  </button>
                </div>
              </div>
            </div>
            <div className="col"></div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Signup;
