import React from "react"

import sliit from "./images/SLIIT.png"

function Header(){

    return(
         <div >
           
              <nav class="navbar navbar-expand-lg navbar-dark bg-dark" style={{ borderBottom:"4px solid orange"}}>
                <div class="container-fluid">
                 
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                   <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                     <li class="nav-item">
                       <a class="nav-link active" aria-current="page" href="/Admin">User Management</a>
                     </li>
                     <li class="nav-item">
                 
                       <a class="nav-link" href="/studenthome" >Traveler Management</a>
                     
                     </li>
                     <li class="nav-item">
                 
                    <a class="nav-link" href="/document" >Ticket Booking Management</a>
               
                    </li>
                     <li class="nav-item">
                       <a class="nav-link" href="/panelHome">Train Management</a>
                     </li>
                   
                    
               
                   
                    </ul>
                     <a href="/rlogin"><button class="btn btn-outline-primary">Sign Out</button></a>&nbsp;
                   <form class="d-flex">
                       
                       <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                       <button class="btn btn-outline-success" type="submit">Search</button>
                   </form>
             </div>
          </div>
       </nav>



  
         </div>
    )
}

export default Header;