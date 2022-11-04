import React from "react";
import Image from 'react-bootstrap/Image'

export default function Details() {
    const data = JSON.parse(localStorage.getItem('itm'));
    return (
        <div className="container">
        <h3>Mission Name : {data?.mission_name}</h3>
        <Image src={data?.links?.mission_patch} style={{ height: "40%", width: "40%", marginLeft: "30%" }}></Image> <br/>
        <b>Details:</b> {data?.details} <br/>
        <b>Flight Number:</b> {data?.flight_number} <br/>
        <b>Launch Date:</b> {data?.launch_date_local} <br/>
        <b>Launch Success:</b> {data?.launch_success} <br/>
        <b>Launch Year:</b> {data?.launch_year} <br/>
        <b>Launch Name:</b> {data?.launch_site?.site_name_long}
        </div>
    );
}