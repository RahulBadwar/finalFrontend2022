import axios from "axios";

axios.defaults.baseURL =  "http://localhost:9001"; 

const header = {
  headers: {
    "Content-Type": "application/json",
    Authorization: "Bearer " + localStorage.getItem("token"),
  },
};

class PaymentApiService {}

export default new PaymentApiService();
