import axios from "axios";

axios.defaults.baseURL = "http://localhost:9001"; //"https://immense-retreat-08081.herokuapp.com";

const header = {
  headers: {
    "Content-Type": "application/json",
    Authorization: "Bearer " + localStorage.getItem("token"),
  },
};

class BusApiService {
  addBus(bus) {
    console.log(header.headers.Authorization);
   //localStorage.getItem
    return axios.post("/bus/add-bus", bus, header);
  }
  viewBus(bus) {
    return axios.post("/bus/view-bus", bus, header);
  }
}

export default new BusApiService();