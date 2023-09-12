import React from "react";

const set ={
   
     
  }
 

function dashboard(){

    return(
        <div>
        <center>
            
            <hr style={{width:"1200px"}}/>
            <br/>
           <table>
               <tr>
                   <td style={{ border:"4px solid red",padding:"30px"}}>
                       <tr >
                        <img src="../images/notice2.jpg"/>
                        </tr>
                        <tr>
                        <br/>
                        <center>
                        <a href="AdminNoticeAdd.js">
                        <button class="btn btn-dark" style={{ width:"220px", height:"35px"}}>Notice</button>
                        </a>
                        </center>
                        </tr>
                   </td>
                   &nbsp;
                   &nbsp;
                   <td style={{border:"4px solid blue", padding:"20px"}}>
                        <tr>
                        <img src="../images/documents.jpg"/>
                        </tr>
                        <tr>
                        <center>
                        <br/>
                        <br/>
                        <button class="btn btn-dark" style={{ width:"220px", height:"35px"}}>Document</button>
                        </center>
                        </tr>
                   </td>
                   &nbsp;
                   &nbsp;
                   <td style={{border:"4px solid green", padding:"30px"}}>
                        <tr>
                        <img src="../images/members.png"/>
                        </tr>
                        <tr>
                        <center>
                        <br/>
                        <button class="btn btn-dark" style={{ width:"220px", height:"35px"}}>Members</button>
                        </center>
                        </tr>
                   </td>
               </tr>
           </table>
           <br/>
            <hr style={{width:"1200px"}}/>
            <br/>
        </center>
        </div>
    )
}
export default dashboard;