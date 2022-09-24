import { Component } from "react";
//import OwnerNavigation from "../components/OwnerNavigation";
import BookingApiService from "../Service/BookingApiService";
import swal from "sweetalert";

class ViewBookingsScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bookings: [],
      message: null,
      user: localStorage.getItem("user"),
    };
    this.loadBookings = this.loadBookings.bind(this);
  }
  componentDidMount() {
    this.loadBookings();
  }

  loadBookings() {
    BookingApiService.viewBookings2(window.localStorage.getItem("busId")).then(
      (res) => {
        this.setState({
          bookings: res.data,
        });
        console.log("res : ", res);
        this.setState({ message: "Bookings List Fetched Successfully." });
      }
    );
  }
  cancelBooking(e) {
    //const bookID = localStorage.getItem("bookId");
    BookingApiService.cancelBooking(e).then((res) => {
      this.setState({ message: "Booking Cancelled successfully." });
      swal("Booking Cancelled successfully", "success");
      this.props.history.push("/owner");
    });
  }

  render() {
    return (
      <div>
        {this.state.user === null ? (
          this.props.history.push("/signin")
        ) : (
          <div>
            <OwnerNavigation />
            <div className="mb-3">
              <h2 className="text-center mt-3 mb-3">View All Bookings</h2>

              <table className="table table-striped table-hover">
                <thead>
                  <tr>
                    <th>Booking Id</th>
                    <th>Bus Name</th>
                    <th>Bus Number</th>
                    <th>Date Of Journey</th>
                    <th>Date Of Booking</th>
                    <th>Booking Type</th>
                    <th>Seat Number</th>
                    <th>Fare</th>
                    <th scope="col">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {this.state.bookings.map((booking) => {
                    return (
                      <tr>
                        <td>{booking.id}</td>
                        <td>{booking.bus.busName}</td>
                        <td>{booking.bus.busNumber}</td>
                        <td>{booking.dateOfJourney}</td>
                        <td>{booking.dateOfBooking}</td>
                        <td>{booking.bookType}</td>
                        <td>{booking.seatNumber}</td>
                        <td>{booking.fare}</td>
                        <td>
                          <button
                            type="button"
                            class="btn btn-danger btn-md"
                            onClick={() => this.cancelBooking(booking.id)}
                          >
                            Cancel
                          </button>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default ViewBookingsScreen;
