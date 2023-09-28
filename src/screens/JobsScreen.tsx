import React from "react";
import CustomButton from "../components/CustomButton";
import JobCard from "../components/JobListing/JobCard";
import "./JobsScreen.css";
import JobListScrollView from "../components/JobListing/JobListView";
import JobDescription from "../components/JobDescription/JobDescriptionScrollView";

const JobsScreen = () => {
  return (
    <div>
      <div>
        <JobListScrollView></JobListScrollView>
      </div>
      <JobDescription></JobDescription>
    </div>
  );
};

export default JobsScreen;
