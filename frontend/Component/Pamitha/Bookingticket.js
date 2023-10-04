import React, { useState, useEffect } from 'react';
import axios from "axios";
import "./CSS/notice.css";

import train from "./images/Metro.png"

export default function Bookingticket() {
  const [trainName, setname] = useState("");
  const [sheduledate, setdate] = useState("");
  const [sheduletime, settime] = useState("");
  const [quentity, setquentity] = useState("");
  const [price, setprice] = useState("");
  const [trainID, settrainID] = useState("");
  // const [total, settotal] = useState(quentity * price);

  const [recordCount, setRecordCount] = useState(null);
  const [maxcount] = useState(6);

  useEffect(() => {
    fetchRecordCount();
  }, []);

  // const fetchRecordCount = () => {
  //   axios.get('https://localhost:7097/api/booking')
  //     .then((res) => {
  //       if (res.data) {
  //         setRecordCount(res.data.length);
  //         const quantities = res.data.map(item => item.quentity);
  //         console.log('Quantities:', quantities); 
  //       }
  //     })
  //     .catch((error) => {
  //       console.error('Error fetching record count:', error);
  //     });
  // }

  const fetchRecordCount = () => {
    axios.get('https://localhost:7097/api/booking')
      .then((res) => {
        if (res.data) {
          const totalQuantity = res.data.reduce((total, item) => total + parseFloat(item.quentity), 0);
          console.log('Total Quantity:', totalQuantity);
          setRecordCount(totalQuantity); 
        }
      })
      .catch((error) => {
        console.error('Error fetching record count:', error);
      });
  }




  function sendData() {
    const newBook = {
      trainID,
      trainName,
      sheduledate,
      sheduletime,
      quentity,
      price
     
    };

    if (quentity <= 4) {
      axios
        .post("https://localhost:7097/api/booking", newBook)
        .then(() => {
          alert("Booking Scussess");
        })
        .catch((err) => {
          alert(err);
        });
    } else {
      alert("Quentity is max 4");
    }
  }

  const remainingSeats = maxcount - recordCount;
  const dCountStyle = {
    backgroundColor: remainingSeats === 0 ? 'red' : ' ',
  };

  return (
    <div>
         <br />
        <center>
          <h1>Ticket Booking Screen</h1>
        </center>
     
        <br />
        <div class="container text-center">
        <div>
        <div class="row">
        <div class="col">
          <div className='d-count'>
             <p>Maximum Seats: {maxcount}</p>
             </div>
        </div>
        <div class="col">
        <div className='d-count'>
             <p>Booked Seats: {recordCount}</p>
             </div>
        </div>
        <div class="col">
        <div className='d-count' style={dCountStyle}>
        <p>Remaining Seats : {remainingSeats}</p>
      </div>
        </div>
        </div>
    </div>
    <br />
    <br />
        <p style={{color:"red"}}>
           {remainingSeats === 0 ? 'No Seats are Available' : " "}
        </p>
        <br />
    <br />
    
        <div class="row">
          <div class="col">
          <center>
                <img src={train} style={{width:"60%", height:"40%"}}/>
            </center>
          </div>
          <div class="col">
            <form onSubmit={sendData} className="form shadow-lg p-4 mb-5 ">
              <center>
              <label style={{ fontSize: "20px" }}>Enter train ID : </label>
                <br />
                <input
                  type="text"
                  id="id"
                  style={{
                    borderRadius: "15px",
                    width: "400px",
                    height: "40px",
                  }}
                  onChange={(e) => {
                    settrainID(e.target.value);
                  }}
                />
                <br />
                <label style={{ fontSize: "20px" }}>Enter train name : </label>
                <br />
                <input
                  type="text"
                  id="name"
                  style={{
                    borderRadius: "15px",
                    width: "400px",
                    height: "40px",
                  }}
                  onChange={(e) => {
                    setname(e.target.value);
                  }}
                />
                <br />

                <label style={{ fontSize: "20px" }}>Select date : </label>
                <br />
                <input
                  type="date"
                  id="name"
                  style={{
                    borderRadius: "15px",
                    width: "400px",
                    height: "40px",
                    padding: "10px",
                  }}
                  onChange={(e) => {
                    setdate(e.target.value);
                  }}
                />
                <br />

                <label style={{ fontSize: "20px" }}>Enter time : </label>
                <br />
                <input
                  type="time"
                  name="editor"
                  style={{
                    borderRadius: "15px",
                    width: "400px",
                    height: "40px",
                  }}
                  onChange={(e) => {
                    settime(e.target.value);
                  }}
                />
                  <br />
                <label style={{ fontSize: "20px" }}>Enter Price : </label>
                <br />
                <textarea
                  id="editor"
                  name="editor"
                  style={{
                    borderRadius: "15px",
                    width: "400px",
                    height: "40px",
                  }}
                  onChange={(e) => {
                    setprice(e.target.value);
                  }}
                />
  <br />
                <label style={{ fontSize: "20px" }}>Enter quentity : </label>
                <br />
                <textarea
                  id="editor"
                  name="editor"
                  style={{
                    borderRadius: "15px",
                    width: "400px",
                    height: "40px",
                  }}
                  onChange={(e) => {
                    setquentity(e.target.value);
                  }}
                />
                <p>You can only buy maximum of 4 ticket for once</p>
              </center>
              <br />
              <br />
              <center>
                <button type="submit" class="btn btn-primary">
                  Book
                </button>
                <br />
              </center>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
