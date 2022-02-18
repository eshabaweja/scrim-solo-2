import React from "react";

export default function Header(){
    return(
        <div className="Header">
            <img src={require("../images/earth.png")}/>
            <pre>  my travel journal.</pre>
        </div>
    )
}