import axios from "axios";

axios.defaults.baseURL = "http://localhost:9001"; 

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
  viewBus1(userid) {
    return axios.post("/bus/view-bus1", userid, header);
  }
removebus(busid){
  return axios.delete("/bus/delete-bus",busid,header)
}
}

export default new BusApiService();