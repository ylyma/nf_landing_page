import React from "react";
import "./JobsScreen.css";
import JobListView from "../components/JobListing/JobListView";
import JobDescriptionScrollView from "../components/JobDescription/JobDescriptionScrollView";
import Placeholder from "../components/Placeholder";

const JobsScreen = () => {
  return (
    <div className="jobs-screen__main">
      <div className="jobs-screen__container">
        <Placeholder></Placeholder>
        <div className="jobs-screen__job-list-description-wrapper">
          <JobListView></JobListView>
          <JobDescriptionScrollView></JobDescriptionScrollView>
        </div>
        <Placeholder></Placeholder>
      </div>
    </div>
  );
};

export default JobsScreen;
