import axios from "axios";

axios.defaults.baseURL = "http://localhost:9001"; 

const header = {
  headers: {
    "Content-Type": "application/json",
    Authorization: "Bearer " + localStorage.getItem("token"),
  },
};


class UserApiService {
  signup(user) {
    return axios.post("/api/auth/signup", user);
  }
  signin(email, password) {
    const body = {
      email,
      password,
    };
    console.log(`email : ${email} and password : ${password}`);
    return axios.post("/api/auth/signin", body);
  }
  
  
  deleteUser(userId) {
   
    return axios.delete("/user/delete-account/" + userId, header);
  }

}

export default new UserApiService();
