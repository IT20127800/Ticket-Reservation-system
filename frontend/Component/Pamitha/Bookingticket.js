import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import axios from "axios";
import "./CSS/notice.css";

import train from "./images/Metro.png"

export default function Bookingticket() {

  const history = useHistory();

  const { id } = useParams();

  const [trainName, setname] = useState("");
  const [sheduledate, setdate] = useState("");
  const [sheduletime, settime] = useState("5.00pm");
  const [quentity, setquentity] = useState("");
  const [price, setprice] = useState("100");
  const [trainID, settrainID] = useState("");
  const [clientname, setcname] = useState("");
  const [NIC, setnic] = useState("");

  const [recordCount, setRecordCount] = useState(null);
  const [maxcount] = useState(6);

  useEffect(() => {
    fetchRecordCount();
    // fetchTrain();
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


  useEffect(() => {
    axios.get(`https://localhost:7097/api/train/${id}`)
      .then((res) => {
        if (res.data) {
          settrainID(res.data.trainID);
          setname(res.data.trainName);
          setdate(res.data.schedule.departureTime)
          console.log(res.data)
        }
      })
      .catch((error) => {
        console.error('Error fetching record count:', error);
      });
  }, [id]);

  console.log(sheduledate)



  function sendData() {
    const newBook = {
      trainID,
      trainName,
      sheduledate,
      sheduletime,
      quentity,
      price,
      clientname,
      NIC
     
    };

    // const nquentity = recordCount + quentity;

    //  console.log(nquentity);

    // if (quentity <= 4) {
      // if(maxcount > (recordCount + quentity - 1)){
      axios
        .post("https://localhost:7097/api/booking", newBook)
        .then(() => {
          // alert("Booking Scussess");
          history.push("/bookingview"); 
        })
        .catch((err) => {
          alert(err);
        });
      // }else{
      //   alert("Enough Seat are not available....");
      // }
    // } else {
    //   alert("Quentity is max 4");
    // }
  }

  const remainingSeats = maxcount - recordCount;
  const dCountStyle = {
    backgroundColor: remainingSeats <= 0 ? 'red' : ' ',
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
           {remainingSeats <= 0 ? 'No Seats are Available' : " "}
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

                <h2>Train Details</h2>

                <p>TrainID : {trainID}</p>
                <p>TrainName : {trainName}</p>
                <p>Schedule Date : {sheduledate}</p>
                <p>One Ticket Price : {price}</p>
              {/* <label style={{ fontSize: "20px" }}>Enter train ID : </label>
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
                <br /> */}

                <label style={{ fontSize: "20px" }}>Enter Person Name : </label>
                <br />
                <input
                  type="text"
                  name="editor"
                  style={{
                    borderRadius: "15px",
                    width: "400px",
                    height: "40px",
                  }}
                  onChange={(e) => {
                    setcname(e.target.value);
                  }}
                />
                  <br />
                <label style={{ fontSize: "20px" }}>Enter NIC : </label>
                <br />
                <input
                type='number'
                  id="editor"
                  name="editor"
                  style={{
                    borderRadius: "15px",
                    width: "400px",
                    height: "40px",
                  }}
                  onChange={(e) => {
                    setnic(e.target.value);
                  }}
                />
  <br />
                <label style={{ fontSize: "20px" }}>Enter quentity : </label>
                <br />
                <input
                type='number'
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
