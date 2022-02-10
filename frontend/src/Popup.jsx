import React from "react";
import "./Popup.css";

const Popup = (props) => {
  console.log(props);
  return (
    <div className="popup-box">
      <div className="box">
        <span className="close-icon" onClick={props.togglePopup}>
          x
        </span>
        {props.content}
      </div>
    </div>
  );
};

export default Popup;
