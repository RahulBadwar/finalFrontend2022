import React from "react";
import BookingApiService from "../Service/BookingApiService";
import swal from "sweetalert";
import Passanger from "../Componets/PassangerNavBar";



 class UserBooking extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        userid: localStorage.getItem("userid"),
        bookings: [],
        message: null,
        user: localStorage.getItem('user')
      };
      this.cancelBooking = this.cancelBooking.bind(this);
      
    }
  
    componentWillMount() {
      console.log(`component did mount`);
      console.log(this.state.userid);
      BookingApiService.showBookings(this.state.userid)
        .then((response) => {
          this.setState({
            bookings: response.data,
          });
          //alert(response)

          console.log(response);
          console.log(this.state.bookings);
        
        })
        .catch((error) => {
          console.log(`Error : ${error}`);
        });
    }
  
   
    cancelBooking(e) {
      //const bookID = localStorage.getItem("bookId");
console.log("incanacl booking");
alert("cancal button is clicked")
      BookingApiService.cancelBooking(e).then(
        (res) => {
          this.setState({ message: "Booking Cancelled successfully." });
          swal("Booking Cancelled successfully","success");
          this.props.history.push("/passanger-booking");
        }
      ).catch((e)=>{

        console.log(e);
      })
    }

  render() {
    return (
      <div>
     {
        this.state.user === null ?
            this.props.history.push("/log-in")
           :
      <div>
        <Passanger/>
        
        <div>
          {this.state.bookings.length > 0 && (
            <table class="table table-hover m-3" style={{width:"95vw", marginLeft:"100px", fontSize:"20px"}}>
              <thead>
                <tr>
                  
                  <th scope="col">From</th>
                  <th scope="col">To</th>
                  <th scope="col">Seat Number</th>
                  <th scope="col">Date</th>
                  <th scope="col">Bus Name</th>
                  <th scope="col">Bus Type</th>
                 
                </tr>
              </thead>
              <tbody>
                {this.state.bookings.map((booking) => {
                  let x=new Date(booking.dateofJourny).getTime;
               //   console.log(x+"x is");
                  return (
                    <tr>
                      
                      <td>{booking.route.source}</td>
                      <td>{booking.route.destination}</td>
                      <td>{booking.seatNumber}</td>
                      <td>{booking.dateofJourny}</td>
                      <td>{booking.bus.busName}</td>
                      <td>{booking.bus.busType}</td>
                      
                        
                    </tr>
                  );
                })}
              </tbody>
            </table>
          )}
        </div>
      </div>
      }
    </div>
    );
  }
}

export default UserBooking;