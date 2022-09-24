import img1 from "../assets/Bus4.jpg";
import { useState } from "react";
import swal from "sweetalert";
import Header from "./Header";
import UserApiService from "../Service/UserApiService";

function Login2(props) {
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");

  

  let login = () => {
    const user = {
      email: userEmail,
      password: userPassword,
    };

    console.log(`email: ${user.email}`);
    console.log(`password: ${user.password}`);
    console.log("login suceefuuly");
    //swal('Success','Logged in successfully','success');
    UserApiService.signin(user.email,user.password).then((res)=>{
swal('Success','Logged in successfully','success');
console.log(res);
localStorage.setItem("token", res.data.jwt);
localStorage.setItem("user", res.data.user);
localStorage.setItem("userid", res.data.user.userid);
console.log(res.data.user.role);

if (
   res.data.user.role === "OWNER"
  ) {
  props.history.push("/owner-home");
  }
  if (
    res.data.user.role === "ADMIN"
   ) {
   props.history.push("/admin");
   }
   if (
    res.data.user.role === "PASSANGER"
   ) {
   props.history.push("/passanger");
   }



    }).catch((e)=>{
      swal("Log in Failed","Please Enter valid Email and Password", "error")
      console.log(`error : ${e}`);
    })
  };

  const validate = () => {
    var regEx = /^[a-zA-Z\s]+$/;
    var pattern = /^[6-9]\d{9}$/gi;
    if (userEmail === "") {
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
    }
    login();
  };

  return (
    <>
    <Header/>
      <div
        style={{
          background: `linear-gradient(180deg, #2F4F4F 0%, rgba(0, 0, 0, 0.1)40%), url(${img1})`,
          backgroundSize: "cover",
          height: "100vh",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="container pt-5">
          <div className="row pt-5">
            <div className="col"></div>
            <div className="col mt-5">
              <div
                className="form form-control mt-3 bg-light"
                style={{
                  boxShadow: "2px 2px 10px black",
                  opacity: "0.8",
                }}
              >
                <h3>Login</h3>
                <div className="mb-3">
                  <label className="form-label">Email</label>
                  <input
                    onKeyUp={(event) => {
                      setUserEmail(event.target.value);
                    }}
                    type="email"
                    className="form-control"
                  />
                </div>
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
                  <button onClick={validate} className="btn btn-success ">
                    Login
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

export default Login2;
