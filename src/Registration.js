import React, { Component } from "react";
import User from "./User.js";


class Registration extends Component {
  UserArray = [];

  constructor() {
    super();
    this.state = {
      firstName: "Unknown",
      lastName: "Unknown",
      Address: "Unknown",
      updateCount: 0
    };

    this.updateFirstName = this.updateFirstName.bind(this);
    this.updateLastName = this.updateLastName.bind(this);
    this.updateAddress = this.updateAddress.bind(this);
    this.confirmReset = this.confirmReset.bind(this);
    this.addUser = this.addUser.bind(this);
    this.deleteUser = this.deleteUser.bind(this);
  }

  updateFirstName(event) {
    this.setState({ firstName: event.target.value });
    this.setState({ updateCount: this.state.updateCount + 1 });
  }

  updateLastName(event) {
    this.setState({ lastName: event.target.value });
    this.setState({ updateCount: this.state.updateCount + 1 });
  }

  updateAddress(event) {
    this.setState({ Address: event.target.value });
    this.setState({ updateCount: this.state.updateCount + 1 });
  }

  confirmReset() {
    var v = window.confirm("Do you want to reset the form? Yes/No");
    return v;
  }

  addUser(event) {
    event.preventDefault();
    var u = new User(
      this.state.firstName,
      this.state.lastName,
      this.state.Address
    );
    this.UserArray.push(u);
    this.setState({ firstName: "", lastName: "", Address: "" });
    console.log(this.UserArray);
  }

  deleteUser(index) {
    this.UserArray.splice(index, 1);
    this.forceUpdate();
  }

  render() {
    return (
      <div className="userdetails">
        <h1>Registration</h1>
        <form onReset={this.confirmReset} onSubmit={this.addUser}>
          
            <label>First Name</label>
            <input type="text" value={this.state.firstName} onChange={this.updateFirstName} /><br />
            <label>Last Name</label>
            <input type="text" value={this.state.lastName} onChange={this.updateLastName} /><br />
            <label>Address</label>
            <input type="text" value={this.state.Address} onChange={this.updateAddress} /><br />
            <input type="submit" value="Save" />&nbsp;
            <input type="reset" value="Reset" />
          
        </form>
        <table>
          <thead>
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Address</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {this.UserArray.map((usr, index) => (
              <tr key={index}>
                <td>{usr.firstName}</td>
                <td>{usr.lastName}</td>
                <td>{usr.address}</td>
                <td>
                  <button onClick={() => this.deleteUser(index)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Registration;
