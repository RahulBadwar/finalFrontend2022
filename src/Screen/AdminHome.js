import AdminNavigation from "../Componets/AdminNavigation";

const AdminHome=(props)=>{


  if(localStorage.getItem('token')===null){
   // alert("in if")
    props.history.push("/log-in");
  }
    return (
        <div>
        <AdminNavigation/>
        <div>
        <div style={{backgroundImage: 
       "url('https://wallpapercave.com/wp/wp2120656.jpg')",
       backgroundSize: 'cover',margin:"20px",
        backgroundRepeat: 'no-repeat',

       backgroundRepeat: 'no-repeat',
        height: "100vh"
}}>
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
              <h1>WELCOME TO</h1> <h1>Admin PAGE</h1>
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
        
      );
}

export default AdminHome;