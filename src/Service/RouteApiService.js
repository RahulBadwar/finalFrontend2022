import axios from "axios";

axios.defaults.baseURL =  "http://localhost:9001";  //"https://immense-retreat-08081.herokuapp.com";

const header = {
  headers: {
    "Content-Type": "application/json",
    Authorization: "Bearer " + localStorage.getItem("token"),
  },
};

class RouteApiService {
  addRoute(route) {
    return axios.post("/route/add-route", route, header);
  }
  getRoutes() {
    console.log(header.headers);
    return axios.get("/route/get-routes", header);
  }
}

export default new RouteApiService();
