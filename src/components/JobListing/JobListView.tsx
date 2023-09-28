import React from "react";
import "./JobListView.css";
import JobCard from "./JobCard";
import {
  COMPANYNAMES,
  DATESPOSTED,
  LOCATIONS,
  LOGOS,
  RATINGS,
  SALARIES,
  TAGS,
  TITLES,
  TYPES,
} from "../../constants/placeholders";
const JobListView = () => {
  const companyNames = COMPANYNAMES;
  const titles = TITLES;
  const locations = LOCATIONS;
  const logo = LOGOS;
  const tags = TAGS;
  const datesPosted = DATESPOSTED;
  const ratings = RATINGS;
  const types = TYPES;
  const salaries = SALARIES;
  const idxs = [0, 1, 2, 3];
  return (
    <div className="job-listing__list-view column">
      {idxs.map((idx) => (
        <JobCard
          title={titles[idx]}
          logo={logo[idx]}
          companyName={companyNames[idx]}
          location={locations[idx]}
          type={types[idx]}
          datePosted={datesPosted[idx]}
          tags={tags[idx]}
          salary={salaries[idx]}
          rating={ratings[idx]}
        ></JobCard>
      ))}
    </div>
  );
};

export default JobListView;
