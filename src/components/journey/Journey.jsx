import React from "react"
import gps from "./gps.png"

export default function Journey(props) {
    return (
        <div className="journey">
            <img src={props.img} alt="" className="journey--img"/>
            <div className="journey--details">
                <div  className="country-details">
                    <img src={gps} alt="" className="gps" />
                    <h1 className="country-name">
                        {props.country}
                    </h1>
                    <a href="" className="country-address">
                        View on Google Maps
                    </a>
                </div>
                <h1 className="journey-place">
                    {props.place}
                </h1>
                <h2 className="journey-date">
                    {`${props.startDate} - ${props.endDate}`}
                </h2>
                <p  className="journey-description">
                    {props.description}
                </p>
            </div>
        </div>
    )
}