import React from "react";
import "./JobCard.css";
import { FaLocationDot } from "react-icons/fa6";
import { GrStar } from "react-icons/gr";
import Tag from "../Tag";

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
}: Props) => {
  return (
    <button className="job-listing__card">
      <div className="row">
        <div className="job-listing__logo-wrapper">
          <img
            className="job-listing__logo-img"
            src={logo}
            alt="company logo"
          ></img>
        </div>
        <div className="job-listing__description-wrapper column">
          <p className="job-listing__company-rating-wrapper row">
            <span className="job-listing__company">{companyName}</span>
            <span className="job-listing__rating">{rating}</span>
            <GrStar className="job-listing__star-icon" />
          </p>
          <p className="job-listing__title">{title}</p>
          <div className="job-listing__date-location-wrapper row">
            <p className="job-listing__date">{datePosted}</p>
            <FaLocationDot className="job-listing__location-icon" />
            <p className="job-listing__location">{location}</p>
          </div>
          {salary === undefined ? (
            <br />
          ) : (
            <div className="job-listing__salary-wrapper row">
              <p>{salary} / mth</p>
              <Tag
                className="job-listing__salary-estimate"
                colored={false}
                title="EST"
              ></Tag>
            </div>
          )}
        </div>
        <div className="job-listing__type-wrapper">
          <Tag
            className="job-listing__type--font"
            colored={true}
            title={type}
          ></Tag>
        </div>
      </div>
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
