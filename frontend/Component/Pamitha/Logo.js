import React from "react";
import logotrain from "./images/trainlogo.webp"

function logo(){

    return(
        <div>
            <center>
                <img src={logotrain} style={{width:"180px", height:"180px"}}/>
            </center>
        </div>
    )
}

export default logo;