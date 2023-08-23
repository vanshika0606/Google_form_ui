import React from "react";
import "./Card.css";
import { BsFillCloudCheckFill } from "react-icons/bs";

const Card = () => {
  return (
    <div className="card1">
      <h1>Assignment Task</h1>
      <div>
        <div className="card1-grid">
          <div className="card1-grid-item1">
            <p>vanshika06065@gmail.com</p>
          </div>
          <p>Switch accounts</p>
          <div className="draft-saved">
            {" "}
            <BsFillCloudCheckFill
              size="23"
              style={{ marginRight: "20px" }}
            />{" "}
            Draft saved
          </div>
        </div>
        <p>
          The name and photo associated with your Google Account will be
          recorded when you upload files and submit this form. Your email
          address is not part of your response.
        </p>
      </div>
      <h3>* Indicates required question</h3>
    </div>
  );
};

export default Card;
