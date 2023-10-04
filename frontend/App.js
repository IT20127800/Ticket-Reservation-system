import React, {Component} from "react";
//import "../bootstrap.min.css";
 import {BrowserRouter,Route } from "react-router-dom";

 import Logo from "./Component/Pamitha/home";
  import Nav from "./Component/Pamitha/AdminHeader";
  import Footer from "./Component/Pamitha/footer";

 import Bookingticket from "./Component/Pamitha/Bookingticket";
 import BookingView from "./Component/Pamitha/BookingView";
import Bookingupdate from "./Component/Pamitha/Bookingupdate";
 



export default class App extends Component{
   render(){
    return (
      <BrowserRouter>
        <div>
            {/* <Logo/> */}
            <Nav/>
            {/*pamitha */}
         
             {/* <Route path="/Admin"  exact component={Nav}></Route> */}
             {/* <Route path="/Admin"  exact component={AdminNoticeAdd}></Route> */}
            
 
            
            <Route path="/booking"  exact component={Bookingticket}></Route>
              <Route path="/bookingview"  exact component={BookingView}></Route>
              <Route path="/bookingupdate/:id"  exact component={Bookingupdate}></Route>



            {/*Raveena */}
           
            

            


            {/*Ayeshi */}
         




            {/*Akeel */}
           


      

        
  
        

          <Footer/>
         </div>
      </BrowserRouter> 
     );
    }
 }

