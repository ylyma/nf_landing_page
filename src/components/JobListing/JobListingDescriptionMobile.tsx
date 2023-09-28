import React from "react";
import { FaLocationDot } from "react-icons/fa6";
import { GrStar } from "react-icons/gr";
import Tag from "../Tag";
import "./JobListingDescriptionMobile.css";

type Props = {
  title: string;
  companyName: string;
  location: string;
  salary?: string;
  datePosted: string;
  rating?: number;
};

const JobListingDescriptionMobile = ({
  title,
  companyName,
  location,
  salary,
  datePosted,
  rating,
}: Props) => {
  return (
    <div className="job-listing__description-wrapper--mobile column">
      <p className="job-listing__company-rating-wrapper--mobile row">
        <span className="job-listing__company--mobile">{companyName}</span>
        <span className="job-listing__rating--mobile">{rating}</span>
        <GrStar className="job-listing__star-icon--mobile" />
      </p>
      <p className="job-listing__title--mobile">{title}</p>
      <div className="job-listing__date-location-wrapper--mobile row">
        <p className="job-listing__date--mobile">{datePosted}</p>
        <FaLocationDot className="job-listing__location-icon--mobile" />
        <p className="job-listing__location--mobile">{location}</p>
      </div>
      {salary === undefined ? (
        <br />
      ) : (
        <div className="job-listing__salary-wrapper row--mobile">
          <p>{salary} / mth</p>
          <Tag
            className="job-listing__salary-estimate--mobile"
            colored={false}
            title="EST"
          ></Tag>
        </div>
      )}
    </div>
  );
};

export default JobListingDescriptionMobile;
