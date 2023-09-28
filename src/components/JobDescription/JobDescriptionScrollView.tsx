import React, { useEffect, useState } from "react";
import "./JobDescriptionScrollView.css";
import CustomButton from "../CustomButton";
import { UseMatchMedia } from "../../hooks/UseMatchMedia";

type Props = {
  title: string;
};
const JobDescriptionScrollView = ({ title }: Props) => {
  const [desc, setDesc] = useState("");
  const isDesktopResolution = UseMatchMedia("(min-width:992px)", true);
  useEffect(() => {
    setDesc(title);
  }, [title]);
  return (
    <>
      {isDesktopResolution && (
        <div className="job-description__container">
          <div className="job-description__scrollable">
            <div className="job-description__card">
              <p>{desc}</p>
              <CustomButton title="Apply" fill={true}></CustomButton>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default JobDescriptionScrollView;
