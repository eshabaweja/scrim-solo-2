import React from "react";

export default function Entry(props) {

    return (
        <div className="Entry">
            <img className="image" src={props.imageUrl} />
            <div className="diary">
                <div className="top-line">  
                    <img className="location-icon" src={require("../images/location.png")} />
                    <span className="place">{props.place}</span>
                    <a className="location" href={props.googleMapsUrl}>View on Google Maps</a>
                </div>

                <h1 className="name">{props.name}</h1>

                <span className="date">{props.started} - {props.ended}</span>
                <span className="description">{props.description}</span>
            </div>
        </div>
    )
}
