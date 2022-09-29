import { Component } from "react";
//import ManagerNavigation from "../components/ManagerNavigation";
import BookingApiService from "../Service/BookingApiService";
import swal from "sweetalert";
import OwnerNavbar from "../Componets/OwnerNavbar";
import Owner from "../Componets/OwnerNavbar"

class OwnerBooking extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bookings: [],
      message: null,
      user: localStorage.getItem("user"),
      userid:localStorage.getItem("userid")
    };
    this.loadBookings = this.loadBookings.bind(this);
  }
  componentDidMount() {
    this.loadBookings();
  }

  loadBookings() {
    BookingApiService.viewBookings2(localStorage.getItem("userid")).then(
      (res) => {
        this.setState({
          bookings: res.data,
        });
        console.log("res : ", res);
        this.setState({ message: "Bookings List Fetched Successfully." });
      }
    ).catch((e)=>{
        console.log(e);
    });
  } 
 
  render() {
    return (
      <div>
        
          <div>
            <Owner/>
            <div className="mb-3">
              <h2 className="text-center mt-3 mb-3">View All Bookings</h2>

              <table
                className="table table-striped table-hover mt-2"
                style={{ fontSize: "20px" }}
              >
                <thead>
                  <tr>
                    <th>Booking Id</th>
                    <th>Bus Name</th>
                    <th>Bus Number</th>
                    <th>Date Of Journey</th>
                    <th>Date Of Booking</th>
                    
                    <th>Seat Number</th>
                    <th>Fare</th>
                   
                  </tr>
                </thead>
                <tbody>
                  {this.state.bookings.map((booking) => {
                    return (
                      <tr>
                        <td>{booking.bookingid}</td>
                        <td>{booking.bus.busName}</td>
                        <td>{booking.bus.busNumber}</td>
                        <td>{booking.dateofJourny}</td>
                        <td>{booking.dateofBooking}</td>
                        
                        <td>{booking.seatNumber}</td>
                        <td>{booking.fareAmount}</td>
                        
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        
      </div>
    );
  }
}

export default OwnerBooking;
