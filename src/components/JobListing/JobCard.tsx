import React from "react";
import "./JobCard.css";
import { FaLocationDot } from "react-icons/fa6";
import { GrStar } from "react-icons/gr";
import Tag from "../Tag";
import { UseMatchMedia } from "../../hooks/UseMatchMedia";
import JobListingDescriptionMobile from "./JobListingDescriptionMobile";
import JobListingDescription from "./JobListingDescription";

type Props = {
  title: string;
  logo: any;
  companyName: string;
  location: string;
  salary?: string;
  type: string;
  tags?: string[];
  datePosted: string;
  rating?: number;
  updateTitle: (title: string) => void;
};

const JobCard = ({
  title,
  logo,
  companyName,
  location,
  salary,
  type,
  tags,
  datePosted,
  rating,
  updateTitle,
}: Props) => {
  const isDesktopResolution = UseMatchMedia("(min-width:440px)", true);
  return (
    <button className="job-listing__card" onClick={() => updateTitle(title)}>
      {isDesktopResolution ? (
        <JobListingDescription
          title={title}
          companyName={companyName}
          location={location}
          datePosted={datePosted}
          salary={salary}
          rating={rating}
          logo={logo}
          type={type}
        />
      ) : (
        <JobListingDescriptionMobile
          title={title}
          companyName={companyName}
          location={location}
          datePosted={datePosted}
          salary={salary}
          rating={rating}
          logo={logo}
          type={type}
        />
      )}
      <hr className="job-listing__divider" />
      <div className="job-listing__tags">
        {tags === undefined ? (
          <div />
        ) : (
          tags.map((tag) => (
            <span className="job-listing__tag">
              <Tag
                className="job-listing__tag--font"
                colored={false}
                title={tag}
              ></Tag>
            </span>
          ))
        )}
      </div>
    </button>
  );
};

export default JobCard;
