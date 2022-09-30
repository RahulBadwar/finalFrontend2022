import axios from "axios";

axios.defaults.baseURL = "http://localhost:9001"; 

const header = {
  headers: {
    "Content-Type": "application/json",
    Authorization: "Bearer " + localStorage.getItem("token"),
  },
};


class ApiService {
  showBookings(userid) {
    return axios.get("/booking/my-bookings/" + userid, header);
  }
 
  viewBookings1() {
   // console.log(`bus id : ${busId}`);
    return axios.get("/booking/view-bookings/", header);
  }
  viewBookings2(userid) {
    console.log(header);
    //console.log(`bus id : ${busId}`);
    return axios.put("/booking/view-bookings-owner",userid, header);
  }

  cancelBooking(bookId) {
    console.log(`booking id : ${bookId}`);
    return axios.delete("/booking/my-bookings/" + bookId, header);
  }
  addBooking(booking) {
    console.log(`booking`);
    return axios.post("/booking/add-booking", booking, header);
  }
}

export default new ApiService();
