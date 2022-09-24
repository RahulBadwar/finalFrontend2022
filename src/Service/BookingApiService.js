import axios from "axios";

axios.defaults.baseURL = "http://localhost:9001"; //"https://immense-retreat-08081.herokuapp.com";

const header = {
  headers: {
    "Content-Type": "application/json",
    Authorization: "Bearer " + localStorage.getItem("token"),
  },
};

class ApiService {
  showBookings(userId) {
    return axios.get("/booking/my-bookings/" + userId, header);
  }
  checkReservation(bId) {
    console.log(`booking id : ${bId}`);
    return axios.get("/booking/check-reservation/" + bId, header);
  }
  viewBookings(busId) {
    console.log(`bus id : ${busId}`);
    return axios.get("/booking/view-bookings/", header);
  }
  viewBookings2(busId) {
    console.log(`bus id : ${busId}`);
    return axios.get("/booking/view-bookings-owner/", header);
  }

  cancelBooking(bookId) {
    console.log(`booking id : ${bookId}`);
    return axios.delete("/booking/cancel-booking/" + bookId, header);
  }
  addBooking(booking) {
    console.log(`booking`);
    return axios.post("/booking/add-booking", booking, header);
  }
}

export default new ApiService();
