import React from "react";
import data from "../data/mydata.json";
import { Link } from "react-router-dom";
import "../styles/Contactport.css";

function Contactport() {
  return (
    <div>
      <div className="cont-container">
        <div>
          <img className="cont-img" src="" alt="" />
        </div>
        <div className="cont-info">
          <h1>My Contact Information</h1>
          <ul>
            <li>{data.contact.email}</li>
            <li>{data.contact.phone}</li>
          </ul>
        </div>
      </div>
      <div>
        <div>
          <img className="cont-img" src="" alt="" />
        </div>
        <div className="cont-info">
          <h1>Professional Contact Profile's</h1>
          <ul>
            <li><Link to={data.contact.linkedin}>Linkedin</Link></li>
            <li><Link to={data.contact.github}>Github</Link></li>
          </ul>
        </div>
      </div>
      <div>
      <div>
          <img className="cont-img" src="" alt="" />
        </div>
        <div className="cont-info">
          <h1>My Address</h1>
          <ul>
            <li>{data.contact.address}</li>
            <li><Link to={data.contact.googlemaplink}>Visit My Location</Link></li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Contactport;
