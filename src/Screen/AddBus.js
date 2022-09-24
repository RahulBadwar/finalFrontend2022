
import React, { Component } from "react";
import Header from "../Componets/Header";
//import ManagerNavigation from "../components/ManagerNavigation";
import Owner from "../Componets/OwnerNavbar";
import BusApiService from "../Service/BusApiService";

class AddBus extends Component {
  constructor(props) {
    super(props);

    this.saveBus = this.saveBus.bind(this);

    this.state = {
      busName: "",
      busType: "",
      busNumber: "",
      totalSeats: "",
      busFare:0,
      message: null,
      user: localStorage.getItem("user"),
    };
  }

  saveBus = (e) => {
    e.preventDefault();
    const bus = {
      busName: this.state.busName,
      busType: this.state.busType,
      busNumber: this.state.busNumber,
      totalSeats: this.state.totalSeats,
      busFare:this.state.busFare,
      userid:localStorage.getItem('userid')
    };

    console.log(bus);
    BusApiService.addBus(bus).then((res) => {
      console.log(res);
      alert("Bus added successfully");
      this.setState({ message: "Bus added successfully." });
      this.props.history.push("/owner-home");
    });
  };

  onChange = (e) => this.setState({ [e.target.name]: e.target.value });

  render() {
    return (
        (
          <div>
            <Owner/>
           
            <div className="container mb-3 col-6 ">
              <h3 className="text-center pt-5">Add Bus</h3>
              <form>
                <div className="form-group">
                  <label>Bus Name:</label>
                  <input
                    type="text"
                    name="busName"
                    className="form-control"
                    value={this.state.busName}
                    onChange={this.onChange}
                  />
                </div>

                <div className="form-group mb-2 mt-2">
                  <label>Bus Type:</label>
                  <input
                    type="text"
                    name="busType"
                    className="form-control"
                    value={this.state.busType}
                    onChange={this.onChange}
                  />
                </div>

                <div className="form-group mb-2 mt-2">
                  <label>Bus Number:</label>
                  <input
                    type="text"
                    name="busNumber"
                    className="form-control"
                    value={this.state.busNumber}
                    onChange={this.onChange}
                  />
                </div>

                <div className="form-group mb-2 mt-2">
                  <label>Total Seats:</label>
                  <input
                    type="Number"
                    name="totalSeats"
                    className="form-control"
                    value={this.state.totalSeats}
                    onChange={this.onChange}
                  />
                </div>
                <div className="form-group mb-2 mt-2">
                  <label>Bus Fare:</label>
                  <input
                    type="Number"
                    name="busFare"
                    className="form-control"
                    value={this.state.busFare}
                    onChange={this.onChange}
                  />
                </div>

                <button className="btn btn-success mb-3" onClick={this.saveBus}>
                  Add Bus
                </button>
              </form>
            </div>
          </div>
        )
    );
  }
}

export default AddBus;
