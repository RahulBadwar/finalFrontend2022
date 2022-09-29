import React from "react";
import { find } from "lodash";
import ManagerApiService from "../Service/ManagerApiService";
import AdminNavigation from "../Componets/AdminNavigation";

export default class BusScheduleScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      buses: [],
      selectedBusId: -1,
      routes: [],
      selectedSource: "",
      selectedDestination: "",
      arrivalTime: "",
      deptTime: "",
      uniqueSources: [],
      user: localStorage.getItem("user"),
    };
    this.onSelectBus = this.onSelectBus.bind(this);
    this.onSelectRouteSource = this.onSelectRouteSource.bind(this);
    this.onSelectRouteDestination = this.onSelectRouteDestination.bind(this);
    this.addSchedule = this.addSchedule.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  componentDidMount() {
    ManagerApiService.getSchdeduleDetails().then((response) => {
      if (!response.data) {
        console.log(`error`);
      } else {
        this.setState({
          buses: response.data.buses,
          routes: response.data.routes,
        });
        const uniqueTags = [];
        this.state.routes.map((route) => {
          let findItem = uniqueTags.find((x) => x === route.source);
          if (!findItem) uniqueTags.push(route.source);
        });
        this.setState({
          uniqueSources: uniqueTags,
        });
        this.state.uniqueSources.map((uniqueSource) =>
          console.log(`source : ${uniqueSource}`)
        );
      }
    });
  }
  onChange = (e) => this.setState({ [e.target.name]: e.target.value });

  onSelectBus(event) {
    let selectedBus = event.target.value;
    selectedBus = find(this.state.buses, { busName: selectedBus });
    
    if (selectedBus) {
      
      this.setState({ selectedBusId: selectedBus["busid"] });
    }
  }

  onSelectRouteSource(event) {
    this.setState({ selectedSource: event.target.value });
  }
  onSelectRouteDestination(event) {
    this.setState({ selectedDestination: event.target.value });
  }

  addSchedule(e) {
    e.preventDefault();
    const route = find(this.state.routes, {
      source: this.state.selectedSource,
      destination: this.state.selectedDestination,
    });
    const busSchedule = {
      arrivaltime: this.state.arrivalTime,
      depttime: this.state.deptTime,
      busid: this.state.selectedBusId,
      routeid: route.routeid,
    };
    
    ManagerApiService.addScheduleDetails(busSchedule).then((response) => {
      console.log(`data : ${response.data}`);
      console.log(`status : ${response.status}`);
      alert("Bus Scheduled");
      this.props.history.push("/admin");
    });
  }
   disableFutureDate = () => {
    const today = new Date();
    const dd = String(today.getDate() - 1).padStart(2, "0");
    const mm = String(today.getMonth() - 1).padStart(2, "0"); //January is 0!
    const yyyy = today.getFullYear();
    return yyyy + "-" + mm + "-" + dd;
  };
  render() {
    return (
      <div>
        {this.state.user === null ? (
          this.props.history.push("/log-in")
        ) : (
          <div>
            <AdminNavigation />
            <div className="form form-control mt-5">
            <div className="row">
              <div className="col-md-4"></div>
              <div className="col-md-6 fs-5" style={{}}>
                <div className="form-group mt-2 mb-2">
                  <label>Buses :</label>
                  <select name="bus" onChange={this.onSelectBus}>
                    <option value={"None"}>{"None"}</option>
                    {this.state.buses.length > 0 &&
                      this.state.buses.map((bus) => {
                        return (
                          <option value={bus.busName} key={bus.busid}>
                            {bus.busName}
                          </option>
                        );
                      })}
                  </select>
                </div>
                <div className="form-group mt-2 mb-2">
                  <label>Route Source :</label>
                  <select name="selectedSource" onChange={this.onChange}>
                    <option value={"None"}>{"None"}</option>
                    {this.state.uniqueSources.length > 0 &&
                      this.state.uniqueSources.map((uniqueSource) => {
                        return (
                          <option value={uniqueSource}>{uniqueSource}</option>
                        );
                      })}
                  </select>
                </div>
                <div className="form-group mt-2 mb-2">
                  <label>Route Destination :</label>
                  <select name="selectedDestination" onChange={this.onChange}>
                    <option value={"None"}>{"None"}</option>
                    {this.state.routes.length > 0 &&
                      this.state.routes
                        .filter(
                          (route) => route.source === this.state.selectedSource
                        )
                        .map((route) => {
                          return (
                            <option value={route.destination} key={route.routeid}>
                              {route.destination}
                            </option>
                          );
                        })}
                  </select>
                </div>
               
                <div className="mt-2 mb-2">
                  <label for="deptTime">Departure Time(date and time):</label>
                  <input
                    type="datetime-local"
                    id="deptTime"
                    name="deptTime"
                    max={this.disableFutureDate()}
                    onChange={this.onChange}
                  ></input>
                </div>
                <div className="mt-2 mb-2">
                  <button
                    className="btn btn-success mb-3"
                    onClick={this.addSchedule}
                  >
                    Add Schedule
                  </button>
                </div>
              </div>
            </div>
            </div>
          </div>
        )}
      </div>
    );
  }
}
