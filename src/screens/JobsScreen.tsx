import React, { useState } from "react";
import "./JobsScreen.css";
import JobListView from "../components/JobListing/JobListView";
import JobDescriptionScrollView from "../components/JobDescription/JobDescriptionScrollView";
import Placeholder from "../components/Placeholder";

const JobsScreen = () => {
  const [title, setTitle] = useState<string>("");
  const updateTitle = (title: string) => {
    setTitle(title);
  };
  return (
    <div className="jobs-screen__main">
      <div className="jobs-screen__container">
        <Placeholder />

        <div className="jobs-screen__job-list-description-wrapper">
          <JobListView updateTitle={updateTitle} />
          <JobDescriptionScrollView title={title} />
        </div>
        <Placeholder />
      </div>
    </div>
  );
};

export default JobsScreen;
