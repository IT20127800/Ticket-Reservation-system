import React from "react";
import logo from "./images/logo.png"

function logo(){

    return(
        <div>
            <center>
                <img src={logo} style={{width:"180px", height:"180px"}}/>
            </center>
        </div>
    )
}

export default logo;