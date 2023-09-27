import React, { ReactNode, useState } from "react";
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
    <button className="card">
      <div className="row">
        <div className="top-left-wrapper">
          <img
            className="logo-img"
            src={require("../../assets/square-solid.png")}
            alt="company logo"
          ></img>
        </div>
        <div className="top-middle-wrapper column">
          <div className="company-rating-wrapper row">
            <p className="company">{companyName}</p>
            <p className="rating">{rating}</p>
            <GrStar className="star-icon" />
          </div>
          <p className="title">{title}</p>
          <div className="date-location-wrapper row">
            <p className="date">{datePosted}</p>
            <FaLocationDot className="location-icon" />
            <p className="location">{location}</p>
          </div>
          <p>{salary}</p>
        </div>
        <div className="top-right-wrapper">
          <Tag colored={true} title={type}></Tag>
        </div>
      </div>
      <hr className="divider" />
      <div className="tags row">
        {tags === undefined ? (
          <div />
        ) : (
          tags.map((tag) => (
            <span>
              <Tag colored={false} title={tag}></Tag>
            </span>
          ))
        )}
      </div>
    </button>
  );
};

export default JobCard;
