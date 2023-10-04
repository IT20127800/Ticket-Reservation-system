import React, { Component } from "react";
import axios from "axios";
import "./CSS/notice.css";
import train from "./images/train.png"

export default class Bookingupdate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      date: "",
      time: "",
      price: "",
      quentity: "",
      price: ""
    };
  }

  handleInputChange = (e) => {
    const { name, value } = e.target;

    this.setState({
      ...this.state,
      [name]: value,
    });
  };

  onSubmit = (e) => {
    e.preventDefault();
    const id = this.props.match.params.id;
    const { name, date,time,trainid,quentity, price } = this.state;

    const data = {
      id : id,
      trainName: name,
      sheduledate: date,
      sheduletime: time,
      trainID: trainid,
      price:price,
      quentity: quentity
    };
    console.log(data);

    axios.put(`https://localhost:7097/api/booking/${id}`, data).then(() => {
     
        alert("Booking Updated Successfully");
        
        this.setState({
            name: "",
            date: "",
            time: "",
            trainid: "",
            price: "",
            quentity: "",
        });
    })
    .catch((err) => {
      alert(err);
    });
  };

  componentDidMount() {
    const id = this.props.match.params.id;
  
    axios.get(`https://localhost:7097/api/booking/${id}`)
      .then(res => {
        const { trainName, sheduledate, sheduletime, trainID, quentity, price } = res.data;

        console.log(res.data);

        this.setState({
          name: trainName,
          date: sheduledate,
          time: sheduletime,
          trainid: trainID,
          price: price,
          quentity: quentity
        });
  
        console.log(this.state);
      })
      .catch(error => {
        console.error(error);
      });
  }

  render() {
    return (
      <div className="container">
        <br/>
        <center>
          <h1>Booking Update</h1>
        </center>
        <br/>
        <div class="row">
          <div class="col">
          <center>
                <img src={train} style={{width:"90%", height:"50%"}}/>
            </center>
          </div>
          <div class="col">
            <form  className="form shadow-lg p-4 mb-5 ">
              <center>
              <label style={{ fontSize: "20px" }}>Enter train ID : </label>
              <br />
              <textarea
                  id="trainid"
                  name="trainid"
                  style={{
                    borderRadius: "15px",
                    width: "400px",
                    height: "40px",
                  }}
                  value={this.state.trainid}
                  onChange={this.handleInputChange}
                />
               <br />
                <label style={{ fontSize: "20px" }}>Enter train name : </label>
                <br />
                <input
                  type="text"
                  id="name"
                  name="name"
                  style={{
                    borderRadius: "15px",
                    width: "400px",
                    height: "40px",
                  }}
                  value={this.state.name}
                  onChange={this.handleInputChange}
                />
                <br />

                <label style={{ fontSize: "20px" }}>Select date : </label>
                <br />
                <input
                  type="date"
                  id="date"
                  name="date"
                  style={{
                    borderRadius: "15px",
                    width: "400px",
                    height: "40px",
                    padding: "10px",
                  }}
                  value={this.state.date}
                  onChange={this.handleInputChange}
                />
                <br />

                <label style={{ fontSize: "20px" }}>Enter time : </label>
                <br />
                <input
                  type="time"
                  name="time"
                  style={{
                    borderRadius: "15px",
                    width: "400px",
                    height: "40px",
                  }}
                  value={this.state.time}
                  onChange={this.handleInputChange}
                />
                  <br />
                <label style={{ fontSize: "20px" }}>Enter Price : </label>
                <br />
                <textarea
                  id="price"
                  name="price"
                  style={{
                    borderRadius: "15px",
                    width: "400px",
                    height: "40px",
                  }}
                  value={this.state.price}
                  onChange={this.handleInputChange}
                />
              <br />
                <label style={{ fontSize: "20px" }}>Enter quentity : </label>
                <br />
                <textarea
                  id="quentity"
                  name="quentity"
                  style={{
                    borderRadius: "15px",
                    width: "400px",
                    height: "40px",
                  }}
                  value={this.state.quentity}
                  onChange={this.handleInputChange}
                />
                <p>You can only buy maximum of 4 ticket for once</p>
              </center>
              <br />
              <br />
              <center>
              <button
                type="submit"
                onClick={this.onSubmit}
                class="btn btn-primary"
              >
                Submit
              </button>
                <br />
              </center>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
