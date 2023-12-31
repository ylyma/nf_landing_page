import React from "react";
import { FaLocationDot } from "react-icons/fa6";
import { GrStar } from "react-icons/gr";
import Tag from "../Tag";
import "./JobListingDescription.css";

type Props = {
  title: string;
  companyName: string;
  location: string;
  salary?: string;
  datePosted: string;
  rating?: number;
  logo: any;
  type: string;
};

const JobListingDescription = ({
  title,
  companyName,
  location,
  salary,
  datePosted,
  rating,
  logo,
  type,
}: Props) => {
  return (
    <div className="row">
      <div className="job-listing__logo-wrapper--web">
        <img
          className="job-listing__logo-img--web"
          src={logo}
          alt="company logo"
        ></img>
      </div>

      <div className="job-listing__description-wrapper--web column">
        <p className="job-listing__company-rating-wrapper--web row">
          <span className="job-listing__company--web">{companyName}</span>
          <span className="job-listing__rating--web">{rating}</span>
          <GrStar className="job-listing__star-icon--web" />
        </p>
        <p className="job-listing__title--web">{title}</p>
        <div className="job-listing__date-location-wrapper--web row">
          <p className="job-listing__date--web">{datePosted}</p>
          <FaLocationDot className="job-listing__location-icon--web" />
          <p className="job-listing__location--web">{location}</p>
        </div>
        {salary === undefined ? (
          <br />
        ) : (
          <div className="job-listing__salary-wrapper--web row">
            <p>{salary} / mth</p>
            <Tag
              className="job-listing__salary-estimate--web"
              colored={false}
              title="EST"
            ></Tag>
          </div>
        )}
      </div>
      <div className="job-listing__type-wrapper--web">
        <Tag
          className="job-listing__type--font--web"
          colored={true}
          title={type}
        ></Tag>
      </div>
    </div>
  );
};

export default JobListingDescription;
