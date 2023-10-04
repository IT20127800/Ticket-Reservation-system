
import React, { Component } from "react";
import axios from "axios";
import train from "./images/train.png"


export default class BookingView extends Component {
  constructor(props) {
    super(props);

    this.state = {
     notice: [],
     recordCount: null,
    };
  }

  componentDidMount() {
    this.retrivePosts();
    this.fetchRecordCount();
  }

  retrivePosts() {
    axios.get("https://localhost:7097/api/booking").then((res) => {
      if (res.data) {
      
        this.setState({
         notice: res.data,
        });
        console.log(this.state.notice);
      }
    });
  }

 

  fetchRecordCount() {
    axios.get("https://localhost:7097/api/booking").then((res) => {
      if (res.data) {
        const count = res.data.length; // Assuming the response is an array of records
        this.setState({
          recordCount: count,
        });
      }
    });
  }

 

onDelete = (id, date) => {

    const today = new Date();
    const bookingDate = new Date(date);
  
    // Calculate the time difference in milliseconds
    const timeDiff =   bookingDate.getTime() - today.getTime();
  
    // Calculate the number of days
    const daysDiff = timeDiff / (1000 * 3600 * 24);

    if (daysDiff >= 5) {
      axios.delete(`https://localhost:7097/api/booking/${id}`).then((res) => {
        alert("Delete Successfully");
        this.retrivePosts();
      });
    } else {
      alert("Cannot delete booking, must be at least 5 days in advance.");
    }
  };
  





  render() {
    return (
      <div className="container">
         <br />
        <center>
          <h1>Booking Tickets</h1>
        </center>

        <p>Booked Tickets: {this.state.recordCount}</p>
        
        <br />

        {/* <table> */}
        
          {/* <tbody> */}
            {this.state.notice.map((notice) => (
              <tr>
                 
              <div style={{background:"#b3d1ff", width:"1300px", padding:"20px", border:"4px solid #3385ff", borderRadius:"20px"}}>
             <div className="row">
              <div className="col v-left">
                <p>Train Code : {notice.trainID}</p>
                <p>Train shedule Date : {notice.sheduledate}</p>
                <p>One Ticket Price : { notice.price }</p>
                <p>Tickets : {notice.quentity}</p>
                </div>
                <div className="col">
                <center>
                <img src={train} style={{width:"80%", height:"80%"}}/>
            </center>
                </div>
                <div className="col v-right">
                <p>Train Name : {notice.trainName}</p>
                <p>Train Shedule Time : {notice.sheduletime}</p>

                <p>Total Price : {notice.quentity * notice.price }</p>

                <button
                    type="button"
                    className="btn btn-warning"
                    onClick={() => this.onDelete(notice.id, notice.sheduledate)}
                  >
                    <i className="fas fa-trash-alt"></i> Delete
                  </button>
                  &nbsp;
                  <a href={`/bookingupdate/${notice.id}`}>
                  <button type="button" className="btn btn-success">
                    <i className="fas fa-edit"></i> Update
                  </button>
                  </a>

                </div>
                </div>  
                </div>
                <br/>
              
              </tr>
            ))}
          {/* </tbody> */}
        
        {/* </table> */}
      </div>
    );
  }
}
