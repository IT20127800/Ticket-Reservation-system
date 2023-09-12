import React, {Component} from "react";
//import "../bootstrap.min.css";
 import {BrowserRouter,Route } from "react-router-dom";

 import Logo from "./Component/Pamitha/home";
  import Nav from "./Component/Pamitha/AdminHeader";
  import Footer from "./Component/Pamitha/footer";
 
 



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
            
         

             




            {/*Raveena */}
           
            

            


            {/*Ayeshi */}
         




            {/*Akeel */}
           


      

        
  
        

          <Footer/>
         </div>
      </BrowserRouter> 
     );
    }
 }

