import axios from "axios";

axios.defaults.baseURL = "http://localhost:9001";  

const header = {
  headers: {
    "Content-Type": "application/json",
    Authorization: "Bearer " + localStorage.getItem("token"),
  },
};

class ManagerApiService {
  getSchdeduleDetails() {
    return axios.get("/admin/get-schedule-details", header);
  }
  addScheduleDetails(busSchedule) {
    return axios.post("/admin/add-schedule", busSchedule, header);
  }
}

export default new ManagerApiService();
