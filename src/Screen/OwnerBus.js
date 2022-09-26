import { Component } from "react";
import Owner from "../Componets/OwnerNavbar";
import BusApiService from "../Service/BusApiService";


class OwnerBus extends Component{

constructor(props){
    super(props);
    this.state={
        bus:[]
    }

    this.loadBus= this.loadBus.bind(this);
}
componentDidMount() {
    this.loadBus();
  }

  loadBus=()=>{
BusApiService.viewBus1(localStorage.getItem("userid")).then((r)=>{
//console.log(r);
this.setState(
  {
    bus:r.data
  }
)

console.log(this.bus);
}).catch((e)=>{

    console.log(e);
})

  }

  render(){
  return(
    <div>
        <Owner/>
        <div className="mb-3">
              <h2 className="text-center mt-3 mb-3">View All Bus</h2>

              <table
                className="table table-striped table-hover mt-2"
                style={{ fontSize: "20px" }}
              >
                <thead>
                  <tr>
                    <th>Bus Id</th>
                    <th>Bus Name</th>
                    <th>Bus Number</th>
                    
                    <th>Bus Type</th>
                    
                    <th>Total Seats</th>
                    <th>Booked Seats</th>

                    <th>Fare</th>
                    <th scope="col">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {this.state.bus.map((b) => {
                    return (
                      <tr>
                        <td>{b.busid}</td>
                        <td>{b.busName}</td>
                        <td>{b.busNumber}</td>
                        
                        <td>{b.busType}</td>
                        
                        <td>{b.totalSeats}</td>
                        <td>{b.bookedSeat}</td>

                        <td>{b.busFare}</td>
                        <td>
                          <button
                            type="button"
                            class="btn btn-danger btn-md mt-0"
                            onClick={() => this.cancelBooking(b.busid)}
                          >
                            Remove Bus
                          </button>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>


</div>

  )
  }

}

export default OwnerBus;