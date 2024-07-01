// ProgressCircle.js
import React from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const Circle = ({ percentage }) => {
  return (
    <div style={{ width: "150px", margin: "0 auto" }}>
      <CircularProgressbar
        value={percentage}
        text={`${percentage}%`}
        styles={buildStyles({
          textSize: "16px",
          pathColor: `rgba(62, 152, 199, ${percentage / 100})`,
          textColor: "#4a4a4a",
          trailColor: "#d6d6d6",
          backgroundColor: "#3e98c7",
          width: "70%",
        })}
      />
    </div>
  );
};

export default Circle;
