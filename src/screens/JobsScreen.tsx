import React from "react";
import "./JobsScreen.css";
import JobDescription from "../components/JobDescription/JobDescriptionScrollView";
import JobListView from "../components/JobListing/JobListView";

const JobsScreen = () => {
  return (
    <div className="jobs-screen__main">
      <JobListView></JobListView>
      <JobDescription></JobDescription>
    </div>
  );
};

export default JobsScreen;
