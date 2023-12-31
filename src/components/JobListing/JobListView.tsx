import React, { useEffect, useState } from "react";
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
import Pagination from "./Pagination";
type Props = {
  updateTitle: (title: string) => void;
};
const JobListView = ({ updateTitle }: Props) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(10);
  const [focus, setFocus] = useState<number>(0);
  const companyNames = COMPANYNAMES;
  const titles = TITLES;
  const locations = LOCATIONS;
  const logo = LOGOS;
  const tags = TAGS;
  const datesPosted = DATESPOSTED;
  const ratings = RATINGS;
  const types = TYPES;
  const salaries = SALARIES;

  const indexOfLastRecord = currentPage * itemsPerPage;
  const indexOfFirstRecord = indexOfLastRecord - itemsPerPage;
  const nPages = Math.ceil(companyNames.length / itemsPerPage);
  const idxs = Array(itemsPerPage)
    .fill(0)
    .map((_, i) => indexOfFirstRecord + i);

  useEffect(() => {
    updateTitle(titles[focus]);
  }, [focus]);

  return (
    <div className="job-listing__list-view column">
      {idxs.map((idx) => (
        <JobCard
          idx={idx}
          focus={idx === focus}
          title={titles[idx]}
          logo={logo[idx]}
          companyName={companyNames[idx]}
          location={locations[idx]}
          type={types[idx]}
          datePosted={datesPosted[idx]}
          tags={tags[idx]}
          salary={salaries[idx]}
          rating={ratings[idx]}
          updateFocus={setFocus}
        ></JobCard>
      ))}
      <Pagination
        nPages={nPages}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </div>
  );
};

export default JobListView;
