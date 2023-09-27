import React from "react";
import "./JobCard.css";
import { FaLocationDot } from "react-icons/fa6";
import { GrStar } from "react-icons/gr";
import Tag from "../Tag";

type Props = {
  title: string;
  logoUrl?: string;
  companyName: string;
  location: string;
  salary?: string;
  type: string;
  tags?: string[];
  datePosted: string;
  rating?: number;
};

const JobCard: React.FC<Props> = ({
  title,
  logoUrl,
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
            src={require("../../assets/square-solid.png")}
            alt="company logo"
          ></img>
        </div>
        <div className="job-listing__description-wrapper column">
          <div className="job-listing__company-rating-wrapper row">
            <p className="job-listing__company">{companyName}</p>
            <p className="job-listing__rating">{rating}</p>
            <GrStar className="job-listing__star-icon" />
          </div>
          <p className="job-listing__title">{title}</p>
          <div className="job-listing__date-location-wrapper row">
            <p className="job-listing__date">{datePosted}</p>
            <FaLocationDot className="job-listing__location-icon" />
            <p className="job-listing__location">{location}</p>
          </div>
          {salary === undefined ? (
            <div />
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
