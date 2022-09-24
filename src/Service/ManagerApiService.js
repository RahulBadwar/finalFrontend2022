import axios from "axios";

axios.defaults.baseURL = "http://localhost:9001";  //"https://immense-retreat-08081.herokuapp.com";

const header = {
  headers: {
    "Content-Type": "application/json",
    Authorization: "Bearer " + localStorage.getItem("token"),
  },
};

class ManagerApiService {
  addAgent(agent) {
    return axios.post("/manager/add-agent", agent, header);
  }
  addDriver(driver) {
    return axios.post("/manager/add-driver", driver, header);
  }
  getSchdeduleDetails() {
    return axios.get("/admin/get-schedule-details", header);
  }
  addScheduleDetails(busSchedule) {
    return axios.post("/admin/add-schedule", busSchedule, header);
  }
}

export default new ManagerApiService();
