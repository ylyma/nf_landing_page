import React from "react";
import "./JobDescriptionScrollView.css";
import CustomButton from "../CustomButton";

const JobDescriptionScrollView = () => {
  return (
    <div className="job-description__container">
      <div className="job-description__scrollable">
        <div className="job-description__card">
          <p>Placeholder Description</p>
          <CustomButton title="Apply" fill={true}></CustomButton>
        </div>
      </div>
    </div>
  );
};

export default JobDescriptionScrollView;
